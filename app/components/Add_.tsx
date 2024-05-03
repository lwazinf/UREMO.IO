// // // // Misc

import { useRecoilState } from "recoil";
import { EntryState } from "./atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPlus } from "@fortawesome/free-solid-svg-icons";

interface Add_Props {}

const Add_ = ({}: Add_Props) => {
  const [entry_, setEntry_] = useRecoilState(EntryState);
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
        onClick={() => {
          setEntry_(true);
        }}
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
          onClick={() => {
            setEntry_(false);
          }}
        />
      </div>
    </div>
  );
};

export default Add_;
