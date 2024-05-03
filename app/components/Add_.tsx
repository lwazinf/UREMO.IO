import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { EntryState, TagState } from "./atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";

interface Add_Props {}

const Add_ = ({}: Add_Props) => {
  const [entry_, setEntry_] = useRecoilState(EntryState);
  const [tag_, setTag_] = useRecoilState(TagState);
  const [newCol_, setNewCol_] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const placeholder_ = () => {
    let placeholder = "";
    if (instructions_[instruct_] == "House") {
        placeholder = "Fashion house name" 
    } else if (instructions_[instruct_] == "Collection") {
        placeholder = "New collection name" 
    } else if (instructions_[instruct_] == "Title") {
        placeholder = "Item title" 
    } else if (instructions_[instruct_] == "Desc") {
        placeholder = "Describe this product" 
    } else if (instructions_[instruct_] == "Price") {
        placeholder = "Price" 
    } else if (instructions_[instruct_] == "Units") {
        placeholder = "Units per order" 
    } else {
        placeholder = "Select 3 images.." 
    }

    return placeholder;
  };

  const handlePlusClick = () => {
    setEntry_(true);
    // Focus on the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBackClick = () => {
    if (!newCol_) {
      setEntry_(false);
      setNewCol_(false);
      setInstruct_(0);
    } else {
      setNewCol_(false);
    }
  };

  const [instructions_] = useState([
    "House",
    "Collection",
    "Title",
    "Desc",
    "Price",
    "Units",
    "URL",
  ]);
  const [instruct_, setInstruct_] = useState(0);

  const [data_, setData_] = useState({});

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Move to the next instruction
      if (instruct_ < instructions_.length - 1) {
        setInstruct_((prev) => prev + 1);
        // Clear the input field (optional)
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    }
  };

  const runSwap = (text_: string) => {
    let temp_ = new Map(Object.entries(data_));
    if (!temp_.has("id")) {
      instructions_.forEach((e) => {
        temp_.set(e.toString().toLocaleLowerCase(), "");
      });
    } else {
      instructions_.forEach((e) => {
        temp_.set(
          e.toString().toLocaleLowerCase(),
          data_[e.toString().toLocaleLowerCase()]
        );
      });
    }
    setData_({
      ...Object.fromEntries(temp_),
      id: v4(),
      [instructions_[instruct_].toString().toLocaleLowerCase()]: text_,
    });
  };

  return (
    <div
      className={`flex flex-row justify-center items-center w-[520px] h-[235px] opacity-100 transition-all duration-500 rounded-[6px] overflow-hidden relative bg-black/10 scale-[0.9]`}
    >
      <div
        className={`w-full h-full flex flex-row justify-center items-center absolute top-0 transition-all duration-200 cursor-pointer ${
          entry_
            ? "opacity-0 pointer-events-none"
            : "opacity-1000 pointer-events-auto"
        }`}
        onClick={handlePlusClick}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className={`${
            entry_
              ? "opacity-0 pointer-events-none"
              : "opacity-1000 pointer-events-auto"
          } transition-all duration-200`}
        />
      </div>
      <div
        className={`w-full h-full flex flex-row justify-center items-center absolute top-0 ${
          !entry_
            ? "opacity-0 pointer-events-none"
            : "opacity-1000 pointer-events-auto"
        } transition-all duration-200`}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`${
            !entry_
              ? "opacity-0 pointer-events-none"
              : "opacity-1000 pointer-events-auto"
          } transition-all duration-200 absolute top-2 left-2 cursor-pointer`}
          onClick={handleBackClick}
        />
        <p
          className={`absolute top-[7px] left-6 text-[13px] cursor-pointer`}
          onClick={handleBackClick}
        >
          BACK
        </p>
        {instructions_[instruct_].toLocaleLowerCase() == "house" ||
        instructions_[instruct_].toLocaleLowerCase() == "collection" ? (
          <div
            className={`min-w-[300px] h-full flex flex-col justify-center items-center rounded-md px-2`}
          >
            {tag_.map((e, index_) => {
              return (
                <div
                  className={`hover:bg-orange-600 bg-white border-solid border-[1px] border-black hover:border-orange-600 transition-all hover:duration-75 duration-500 min-w-2 px-4 py-[1px] rounded-[16px] minh-2 my-[1.5px] flex flex-col justify-center items-center cursor-pointer text-black hover:text-white text-[14px] ${
                    !newCol_ ? "flex" : "hidden"
                  }`}
                  key={index_}
                >
                  {e}
                </div>
              );
            })}
            <div
              className={`bg-black/20 w-[250px] h-[40px] flex-col justify-center items-center rounded-[8px] mt-4 opacity-40 transition-all hover:duration-75 duration-500 hover:opacity-80 cursor-pointer ${
                !newCol_ ? "flex" : "hidden"
              }`}
              onClick={() => {
                setNewCol_(true);
              }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                className={`transition-all duration-200`}
              />
            </div>

            <input
              type="text"
              className={`text-[25px] font-black ${
                newCol_ ? "flex" : "hidden"
              }`}
              placeholder={placeholder_()}
              onChange={(e) => {
                runSwap(e.target.value);
              }}
              ref={inputRef}
              onKeyDown={handleKeyDown}
            />
          </div>
        ) : 
        instructions_[instruct_].toLocaleLowerCase() == "url" ? (
          <div
            className={`min-w-[300px] h-full flex flex-row justify-center items-center rounded-md px-2`}
          >
            <div className={`flex flex-col justify-center items-center m-1 cursor-pointer transition-all duration-300 bg-white/80 hover:bg-white w-[200px] h-[120px] rounded-[4px]`}>
                {/* <img className={``} src={``} /> */}
            </div>
            <div className={`flex flex-col justify-center items-center m-1 cursor-pointer transition-all duration-300 bg-white/80 hover:bg-white w-[200px] h-[120px] rounded-[4px]`}>
                {/* <img className={``} src={``} /> */}
            </div>
          </div>
        ) : (
          <input
            type="text"
            className={`text-[25px] font-black`}
            placeholder={placeholder_()}
            onChange={(e) => {
              runSwap(e.target.value);
            }}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onClick={() => {}}
          />
        )}
        <div
          className={`absolute flex flex-row justify-center items-center bottom-2 right-2 bg-red-600 w-[100px] h-[30px] rounded-[4px] text-white cursor-pointer`}
          onClick={() => {
            if (instruct_ < instructions_.length - 1) {
              setInstruct_((prev) => prev + 1);
              // Clear the input field (optional)
              if (inputRef.current) {
                inputRef.current.value = "";
              }
              setNewCol_(false);
            } else {
              console.log(data_);
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default Add_;
