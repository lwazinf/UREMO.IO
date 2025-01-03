"use client";
import { useEffect, useState } from "react";
import {
  useRecoilState,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE,
} from "recoil";
import {
  DataState,
  DataTempState,
  PillState,
  OpenState,
  TagState,
  CollectionState,
  ProductState,
  SearchState,
  MenuState,
  UserState,
} from "./atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudversify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faArrowRotateLeft,
  faBars,
  faBell,
  faChartArea,
  faChevronRight,
  faHouse,
  faPerson,
  faPhone,
  faPowerOff,
  faSearch,
  faShoppingBag,
  faShoppingCart,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { signIn_, signOut_ } from "./utils/utils";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

interface Nav_Props {}

const Nav_ = () => {
  const [URL_, setURL_] = useState("");
  const [switch_, setSwitch_] = useState(true);
  const [menu_, setMenu_] = useRecoilState(MenuState);
  const [user_, setUser_] = useRecoilState(UserState);
  const [product_, setProduct_] = useRecoilState(ProductState);

  const generateURL = () => {
    let images_: any = [];
    product_.forEach((element: any) => {
      images_.push(element.url);
    });
    const total_ = images_.length;
    const randomNumber = Math.floor(Math.random() * total_);
    setSwitch_(!switch_);
    return images_[randomNumber];
  };

  useEffect(() => {
    setURL_(generateURL());
    const interval = setInterval(() => {
      if (switch_) {
        setURL_(generateURL());
      } else {
        setURL_(generateURL());
      }
    }, 30000); // 30000 milliseconds = 30 seconds

    // This is a cleanup function that will be called when the component unmounts.
    return () => {
      clearInterval(interval);
    };
  }, [product_]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        // console.log("User is logged in:", user.uid);

        // Create a new object with the user information
        const newUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          dp: user.photoURL /* and other properties */,
        };

        // Set the new user object in your application state
        setUser_(newUser);

        // Additional logic, if needed
      } else {
        // User is signed out
        console.log("User is logged out");

        // Clear user information or perform other actions when the user logs out
        setUser_(null);

        // Additional logic, if needed
      }
    });

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <div
      className={`min-h-screen w-[250px] flex-col justify-start items-center fixed top-0 ${
        menu_ ? "duration-500 left-0" : "duration-500 left-[-250px]"
      } transition-all bg-black z-[3] hidden lg2:flex lg:hidden`}
    >
      <div
        className={`w-full h-full flex flex-col justify-center items-center absolute top-0 z-[-1]`}
      >
        <div
          className={`w-full h-full flex flex-col justify-center items-center relative overflow-hidden`}
        >
          <img className={`w-full h-full object-cover`} src={URL_} />
          <div
            className={`w-full h-full absolute top-0 left-0 backdrop-blur-md bg-black/80`}
          />
        </div>
      </div>
      <div
        className={`w-full h-[140px] flex flex-col justify-center items-center`}
      >
        <FontAwesomeIcon
          icon={faCloudversify}
          className={`text-white text-[70px]`}
        />
        <div className={`absolute right-[-40px] bottom-7`}>
          {[
            {
              func: () => {
                setMenu_(!menu_);
              },
              icon: faBars,
            },
            {
              func: async () => {
                if (user_) {
                  signOut_();
                } else {
                  // setMenu_(!menu_);
                  await signIn_().then((e) => {
                    // Create a new object with the user information
                    const newUser = {
                      uid: e.uid,
                      displayName: e.displayName,
                      email: e.email,
                      dp: e.photoURL /* and other properties */,
                    };

                    // Set the new user object in your application state
                    // setUser_(newUser);
                    console.log(newUser);
                  });
                }
              },
              icon: faUser,
            },
          ].map((obj_, index) => {
            return (
              <div
                // Set the classes for the div element
                className={`w-[30px] h-[30px] border-solid border-[1px] hover:bg-orange-600 hover:border-orange-600 ${
                  obj_.icon == faUser && !user_
                    ? "border-orange-600 bg-orange-600 animate-pulse"
                    : "bg-black border-black/80"
                } text-white transition-all duration-500 cursor-pointer rounded-full flex justify-center items-center my-1`}
                onClick={obj_.func} // Set the onClick handler
                key={index} // Use the index as a key
              >
                <FontAwesomeIcon
                  icon={obj_.icon}
                  className="font-black text-[10px]"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`w-full h-full mt-40 flex flex-col justify-center font-black text-white/80 items-center`}
      >
        <p className={`mb-4`}>NAVIGATION</p>
        <div className={`w-[70%] h-[1px] bg-white/20`} />
        <div
          className={`min-h-2 w-full flex flex-col justify-center items-center text-white/50`}
        >
          {[
            { icon: faHouse, title: "Home" },
            { icon: faChartArea, title: "Dashboard" },
          ].map((obj_, index) => {
            return (
              <div
                className={`w-full h-[30px] px-1 my-1 hover:text-white/80 transition-all duration-200`}
                key={index}
              >
                <div
                  className={`w-full h-[30px] flex flex-row justify-center items-center cursor-pointer`}
                >
                  <FontAwesomeIcon icon={obj_.icon} className={``} />
                  <p className={`font-medium text-[14px] ml-1 _monts`}>
                    {obj_.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className={`my-4 mt-10`}>PERSONAL</p>
        <div className={`w-[70%] h-[1px] bg-white/20`} />
        <div
          className={`min-h-2 w-full flex flex-col justify-center items-center text-white/50`}
        >
          {[
            { icon: faHouse, title: "Orders" },
            { icon: faChartArea, title: "Analytics" },
            { icon: faChartArea, title: "Contact Us" },
          ].map((obj_, index) => {
            return (
              <div
                className={`w-full h-[30px] px-1 my-1 hover:text-white/80 transition-all duration-200`}
                key={index}
              >
                <div
                  className={`w-full h-[30px] flex flex-row justify-center items-center cursor-pointer`}
                >
                  {/* <FontAwesomeIcon icon={obj_.icon} className={``} /> */}
                  <p className={`font-medium text-[14px] ml-1 _monts`}>
                    {obj_.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav_;

interface Search_Props {}

export const Search_ = () => {
  const [open_, setOpen_] = useRecoilState(OpenState);
  const [tags_, setTags_] = useRecoilState(TagState);
  const [searchPhrase_, setSearchPhrase_] = useRecoilState(SearchState);
  const [searchTemp_, setSearchTemp_] = useState("");
  const [data_, setData_] = useRecoilState(DataState);
  const [products_, setProducts_] = useRecoilState(ProductState);
  const [dataTemp_, setDataTemp_] = useRecoilState(DataTempState);
  const [pill_, setPill_] = useRecoilState(PillState);
  const [collection_, setCollection_] = useRecoilState(CollectionState);
  const [user_, setUser_] = useRecoilState(UserState);
  const [product_, setProduct_] = useRecoilState(ProductState);

  useEffect(() => {
    let x: any = [];
    products_.forEach((e: any) => {
      if (!x.includes(e.collection)) {
        x = [...x, e.collection];
      }
    });
    setTags_(x);
  }, [product_]);
  return (
    <div
      className={`min-h-2 w-full flex flex-col justify-start items-center px-12 fixed top-0 bg-white/50 backdrop-blur-md`}
    >
      <div
        className={`min-h-[80px] flex flex-row md:justify-between justify-center items-center pt-4 w-full z-[1] px-4`}
      >
        <div
          className={`md:w-[550px] w-[200px] h-[35px] border-solid border-[1px] border-black/25 rounded-[15px] flex flex-row justify-center items-center relative`}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className={`mx-3 ml-2 text-[15px] text-black/60 cursor-pointer`}
            onClick={async () => {}}
          />
          <FontAwesomeIcon
            icon={faArrowRotateLeft}
            className={`mx-3 ml-2 text-[15px] text-black/60 cursor-pointer absolute right-0 ${
              searchPhrase_ == ""
                ? "opacity-0 animate-none pointer-events-none"
                : "opacity-100 animate-pulse pointer-events-auto"
            } transition-all duration-200`}
            onClick={() => {
              setSearchPhrase_("");
              setSearchTemp_("");
            }}
          />
          <input
            className={`w-full h-full text-[15px]`}
            type="text"
            placeholder="Search"
            value={searchTemp_}
            onChange={(e) => setSearchTemp_(e.target.value)}
            // Add an event listener for the keydown event
            onKeyDown={(e) => {
              // Check if the key pressed is Enter
              if (e.key === "Enter") {
                // Log "Hi" to the console
                setSearchPhrase_(searchTemp_);
              }
            }}
          />
        </div>

        <div
          className={`w-full min-h-2 flex flex-col justify-center items-between md:items-end`}
        >
          <div
            className={`min-w-2 flex-row justify-end items-center md:hidden flex`}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={`mx-1 text-[16px] cursor-pointer hover:text-black/80 text-black/50`}
              onClick={() => {
                setOpen_(!open_);
              }}
            />
          </div>
        </div>

        <div
          className={`min-w-40 text-left text-[14px] _monts cursor-pointer hover:text-black/80 text-black/50 flex flex-row items-end justify-end`}
        >
          <div className={`w-[50px] h-[50px] rounded-[50%] overflow-hidden`}>
            <img
              src={user_ ? user_.dp : ""}
              className={`object-cover w-full h-full`}
            />
          </div>
          {/* Hi, {user_ ? user_.displayName : "Guest"} */}
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center lg2:w-[85.2%] w-full h-2 top-20 fixed z-[1]`}
      >
        <div className={`w-[90%] bg-black/5 h-[1px]`} />
      </div>
      <div
        className={`w-full min-h-[50px] flex md2:flex-row flex-col justify-between mt-2 items-center`}
      >
        <div
          className={`w-full ml-0 md2:ml-4 md2:text-left md:text-[35px] text-[20px] text-center font-black`}
        >
          RE-L8: {collection_ ? collection_ : "Full Offering"}
        </div>
        <div className={`flex flex-row z-[2] w-full pb-2`}>
          <div
            className={`w-full h-full flex flex-row md2:justify-end justify-center items-center`}
          >
            {tags_.map((obj_: any, index: any) => {
              return (
                <div
                  className={`min-w-[80px] h-[20px] border-solid border-[1px] border-black/50 hover:border-orange-600 flex flex-row justify-center items-center rounded-[15px] mx-1 px-4 cursor-pointer text-black/65 hover:text-white/80 hover:bg-orange-600 ${
                    collection_ == obj_ && "bg-black text-white/80 border-black"
                  } transition-all duration-500 hover:duration-200`}
                  key={index}
                  onClick={() => {
                    setPill_(!pill_);
                    setCollection_(obj_ == collection_ ? "" : obj_);
                  }}
                >
                  <p className={`text-[12px] text-center min-w-[80px]`}>
                    {obj_}
                  </p>
                </div>
              );
            })}
          </div>
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`mx-3 md2:mr-6 text-[16px] cursor-pointer hover:text-black/80 text-black/50`}
          />
        </div>
      </div>
    </div>
  );
};
