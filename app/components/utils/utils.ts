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

export const getCollection_ = async (data_: any) => {
  // const dbName = `stores/${data_.email}/stores/${data_.store}/products`; // Change DB name here..
  const dbName = `stores/lwazinf@gmail.com/stores/rel8/products`; // Change DB name here..
  const colRef = collection(db, dbName);

  const query_ = query(colRef);

  const data = await getDocs(query_);
  return data.docs.map((doc_) => ({
    ...doc_.data(),
    id: doc_.id,
  }));
};

export const updateCollection_ = (data_: any) => {
  const dbName = `stores/${data_.email}/stores/rel8/products`; // Change DB name here..
  const collection_ = collection(db, dbName);
  const id_ = v4()
  setDoc(doc(collection_, id_), {...data_.data, id:id_})
    .then(() => {
      console.log("Data written to Firestore");
    })
    .catch((error) => {
      console.error("Error writing to Firestore:", error);
    });
};

export const signIn_ = async () => {
  return signInWithPopup(auth, provider).then((data) => {
    return data?.user;
  });
};

export const signOut_ = () => {
  return signOut(auth);
};

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

export { uploadFileAndGetDownloadLink };
