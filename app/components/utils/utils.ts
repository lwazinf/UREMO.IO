import { auth, db, provider } from "@/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";

export const getFirstList_ = async (data_: string) => {
  const dbName = data_; // Change DB name here..
  const colRef = collection(db, dbName);

  const query_ = query(colRef);

  const data = await getDocs(query_);
  return data.docs.map((doc_) => ({
    ...doc_.data(),
    id: doc_.id,
  }));
};

export const signIn_ = async () => {
  return signInWithPopup(auth, provider).then((data) => {
    return data?.user;
  });
};

export const signOut_ = () => {
  return signOut(auth);
};

export const updateCart_ = (data_: any, userID_: string, onSuccess: any) => {
  const dbName = "receipts"; // Change DB name here..
  const collection_ = collection(db, dbName);
  setDoc(doc(collection_, data_.receipt.id), data_)
    .then(() => {
      console.log("Data written to Firestore");
      onSuccess(true);
    })
    .catch((error) => {
      console.error("Error writing to Firestore:", error);
      onSuccess(false);
    });
};

export const updateEmailList_ = (data_: any, onSuccess: any) => {
  const dbName = "email_list"; // Change DB name here..
  const collection_ = collection(db, dbName);
  setDoc(doc(collection_, data_.email), data_)
    .then(() => {
      console.log("Data written to Firestore");
      onSuccess(true);
    })
    .catch((error) => {
      console.error("Error writing to Firestore:", error);
      onSuccess(false);
    });
};

// API to yoco servers

async function makePaymentRequest() {
  const url = 'https://payments.yoco.com/api/checkouts';
  const token = 'sk_test_7f028a27gEJ4PDn1beb4e4ab9b14';
  const data = {
    amount: 90097,
    currency: 'ZAR'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Cookie': '_cfuvid=78EwV0hAQbgEaG6VEUzkE2n_MS.z50prKsmteReAeiY-1712604483956-0.0.1.1-604800000'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    // @ts-ignore
    console.error('There was a problem with the request:', error.message);
    throw new Error('Internal Server Error');
  }
}

async function uploadFileAndGetDownloadLink(file: File, email:string, tag:string) {
  const storage = getStorage();
  const storageRef = ref(storage, `proofs_of_payment/${email}/${'pop_'+email+'.'+file.name.split('.').pop()}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events, such as progress, pause, and resume
      const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);

      // Return true when the upload has reached 100%
      if (progress === 100) {
        return true;
      }
    },
    (error) => {
      console.log("Error uploading file:", error);
    }
  );

  return new Promise((resolve, reject) => {
    uploadTask.then(async () => {
      try {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      } catch (error) {
        reject(error);
        console.log("Error getting download URL:", error);
      }
    });
  });
}

export { makePaymentRequest, uploadFileAndGetDownloadLink };
