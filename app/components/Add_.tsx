// @ts-nocheck

import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { DataState, EntryState, TagState } from "./atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { uploadFileAndGetDownloadLink } from "./utils/utils";

interface Add_Props {}

const Add_ = ({}: Add_Props) => {
  const [entry_, setEntry_] = useRecoilState(EntryState);
  const [tag_, setTag_] = useRecoilState(TagState);
  const [data__, setData__] = useRecoilState(DataState);
  const [newCol_, setNewCol_] = useState(false);
  const [loading_, setLoading_] = useState(false);
  const [links_, setLinks_] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<(File | null)[]>([null]);

  const handleFileChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const updatedFiles = [...files];
      updatedFiles[index] = file;
      setFiles(updatedFiles);
    }
  };

  const handleFiles = async (files: (File | null)[]) => {
    const urls: string[] = [];
    for (const file of files) {
      if (file) {
        const url: any = await uploadFileAndGetDownloadLink(
          file,
          "lwazinf@gmail.com"
        );
        urls.push(url);
        return url;
      }
    }
    setLinks_(urls);
  };

  const handleClick = (index: number) => {
    const fileInput = document.getElementById(
      `fileInput-${index}`
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const placeholder_ = () => {
    const instruction = instructions_[instruct_];
    switch (instruction) {
      case "House":
        return "Fashion house name";
      case "Collection":
        return "New collection name";
      case "Title":
        return "Item title";
      case "Desc":
        return "Describe this product";
      case "Price":
        return "Price";
      case "Units":
        return "Units per order";
      case "URL":
        return "Select 3 images..";
      default:
        return "";
    }
  };

  const handlePlusClick = () => {
    setEntry_(true);
    inputRef.current?.focus();
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

  const [data_, setData_] = useRecoilState(DataState);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (instruct_ < instructions_.length - 1) {
        setInstruct_((prev) => prev + 1);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    }
  };

  const runSwap = (text_: string) => {
    const tempData = {
      ...data_,
      [instructions_[instruct_].toLowerCase()]: text_,
    };
    if (!tempData.id) {
      tempData.id = uuidv4();
    }
    setData_(tempData);
  };

  return (
    <div className="flex flex-row justify-center items-center w-[520px] h-[235px] opacity-100 transition-all duration-500 rounded-[6px] overflow-hidden relative bg-black/10 scale-[0.9]">
      {/* Plus icon overlay */}
      <div
        className={`w-full h-full flex flex-row justify-center items-center absolute top-0 transition-all duration-200 cursor-pointer ${
          entry_
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
        onClick={handlePlusClick}
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>

      {/* Main content area */}
      <div
        className={`w-full h-full flex flex-row justify-center items-center absolute top-0 transition-all duration-200 ${
          !entry_
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        {/* Back button */}
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="absolute top-2 left-2 cursor-pointer"
          onClick={handleBackClick}
        />
        <p
          className="absolute top-[7px] left-6 text-[13px] cursor-pointer"
          onClick={handleBackClick}
        >
          BACK
        </p>

        {/* Instructions */}
        {instructions_[instruct_].toLowerCase() === "house" ||
        instructions_[instruct_].toLowerCase() === "collection" ? (
          <div className="min-w-[300px] h-full flex flex-col justify-center items-center rounded-md px-2">
            {/* Tags list */}
            {tag_.map((tagName, index) => (
              <div
                key={index}
                className={`hover:bg-orange-600 bg-white border border-black hover:border-orange-600 transition-all hover:duration-75 duration-500 min-w-2 px-4 py-[1px] rounded-[16px] minh-2 my-[1.5px] flex justify-center items-center cursor-pointer text-black hover:text-white text-[14px] ${
                  !newCol_ ? "flex" : "hidden"
                }`}
              >
                {tagName}
              </div>
            ))}

            {/* Add new tag */}
            <div
              className={`bg-black/20 w-[250px] h-[40px] flex justify-center items-center rounded-[8px] mt-4 opacity-40 transition-all hover:duration-75 duration-500 hover:opacity-80 cursor-pointer ${
                !newCol_ ? "flex" : "hidden"
              }`}
              onClick={() => setNewCol_(true)}
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="transition-all duration-200"
              />
            </div>

            {/* Input field */}
            <input
              type="text"
              className={`text-[25px] font-black ${
                newCol_ ? "flex" : "hidden"
              }`}
              placeholder={placeholder_()}
              onChange={(e) => runSwap(e.target.value)}
              ref={inputRef}
              onKeyDown={handleKeyDown}
            />
          </div>
        ) : instructions_[instruct_].toLowerCase() === "url" ? (
          <div className="min-w-[300px] h-full flex flex-row justify-center items-center rounded-md px-2">
            {[0].map((index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center m-1 cursor-pointer transition-all duration-300 bg-white/60 hover:bg-white/80 w-[200px] h-[120px] rounded-[4px]"
                onClick={() => handleClick(index)}
              >
                <input
                  id={`fileInput-${index}`}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(event) => handleFileChange(index, event)}
                />
                {files[index] && (
                  <img
                    src={URL.createObjectURL(files[index])}
                    alt="Uploaded"
                    className="w-full h-full object-cover rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <input
            type="text"
            className="text-[25px] font-black"
            placeholder={placeholder_()}
            onChange={(e) => runSwap(e.target.value)}
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
        )}

        {/* Next button */}
        <div
          className="absolute flex flex-row justify-center items-center bottom-2 right-2 bg-red-600 w-[100px] h-[30px] rounded-[4px] text-white cursor-pointer"
          onClick={async () => {
            if (instruct_ < instructions_.length - 1) {
              setInstruct_((prev) => prev + 1);
              if (inputRef.current) {
                inputRef.current.value = "";
              }
              setNewCol_(false);
              inputRef.current?.focus();
            } else {
              setLoading_(true);
              await handleFiles(files).then((e) => {
                setEntry_(false);
                setNewCol_(false);
                setInstruct_(0);
                console.log({...data__,url: e, uid: uuidv4()});
                setLoading_(false);
              });
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
          <div className="absolute left-[-200px] w-[200px] min-h-2 text-right pr-2 flex flex-col justify-center">
            <p className="text-black/80">{placeholder_()}</p>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-full bg-white/60 backdrop-blur-md flex flex-col justify-center items-center absolute transition-all duration-200 ${
          loading_
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
      </div>
    </div>
  );
};

export default Add_;
