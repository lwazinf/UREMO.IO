import { faCloudversify } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faVialCircleCheck } from "@fortawesome/free-solid-svg-icons/faVialCircleCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  OpenState,
  DataState,
  ProductState,
  SearchState,
  EntryState,
  DataTempState,
  CollectionState,
} from "./atoms/atoms";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { faAngleLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Add_ from "./Add_";

interface Stage_Props {
  style_: string;
}

const Stage_ = ({ style_ }: Stage_Props) => {
  const [open_, setOpen_] = useRecoilState(OpenState);
  const [data_, setData_] = useRecoilState(DataState);
  const [dataTemp_, setDataTemp_] = useRecoilState(DataTempState);
  const [product_, setProduct_] = useRecoilState(ProductState);
  const [collection_, setCollection_] = useRecoilState(CollectionState);

  const [searchPhrase_, setSearchPhrase_] = useRecoilState(SearchState);

  return (
    <div
      className={`${style_} grid min-h-2  lg2:grid-cols-3 md2:grid-cols-2 scale-[.95] grid-cols-1 gap-8 gap-y-2 lg2:gap-y-0 justify-center items-start relative min-w-full h-full`}
    >
      <Add_ />

      {product_.map((obj_, index) => {
        if (
          obj_.desc.toLowerCase().includes(searchPhrase_.toLowerCase()) ||
          obj_.title.toLowerCase().includes(searchPhrase_.toLowerCase())
        ) {
          if (obj_.collection == collection_ || collection_ == "") {
            return (
              <div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className={`flex flex-row justify-center lg2:scale-[0.9] md2:scale-[1] items-center w-[520px] min-h-[220px] border-solid border-[1px] border-black/5 hover:border-black/10 hover:bg-black/5 opacity-80 ${
                  data_.url == obj_.url && "opacity-100 bg-black/15"
                } transition-all duration-200 p-1.5 rounded-[6px] cursor-pointer scale-[.98]`}
                onClick={() => {
                  if (obj_ != data_) {
                    setData_(obj_);
                    setOpen_(true);
                  } else {
                    setOpen_(false);
                    setData_({
                      url: "",
                      title: "",
                      price: 0,
                      units: 1,
                      house: ``,
                      desc: ``,
                      collection: ``,
                    });
                    setDataTemp_(data_);
                  }
                }}
              >
                <div
                  className={`flex flex-col justify-center items-center bg-black rounded-[6px] w-[35%] h-[220px] overflow-hidden`}
                >
                  <img
                    className={`object-cover w-full h-full`}
                    src={obj_.url}
                    alt={obj_.title}
                  />
                </div>
                <div
                  className={`w-[65%] h-[220px] flex flex-col justify-start items-start p-2 relative`}
                >
                  <div
                    className={`flex flex-row min-w-[70%] justify-between items-center scale-[.95]`}
                  >
                    <p className={`text-[18px] font-medium`}>{obj_.title}</p>
                  </div>
                  <div
                    className={`flex flex-row min-w-[70%] justify-start items-center scale-[.95]`}
                  >
                    <p className={`text-[14px] font-normal _oswald opacity-30`}>
                      By {obj_.house}
                    </p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className={`mx-2 text-[14px] hover:text-black/80 text-orange-600`}
                    />
                  </div>
                  <div
                    className={`flex flex-row min-w-[70%] justify-start items-center scale-[.95] mt-3`}
                  >
                    <p className={`text-[12px] font-thin _monts opacity-30`}>
                      {obj_.desc.slice(0, 250) + ".."}
                    </p>
                  </div>
                  <div
                    className={`flex flex-row min-w-[70%] justify-start items-center scale-[.95] mt-2`}
                  >
                    <p className={`text-[12px] font-thin _monts opacity-80`}>
                      RELEASED: Jan 7, 2024
                    </p>
                  </div>
                  <div
                    className={`flex flex-row min-w-2 justify-end items-center scale-[.7] my-1 h-4 absolute bottom-2 right-0`}
                  >
                    <p
                      className={`text-[35px] font-black relative top-4 right-0`}
                    >
                      R{obj_.price}
                      <br />
                      <span
                        className={`text-[14px] text-black/60 italic font-normal relative bottom-8 right-0 w-full`}
                      >
                        per {obj_.units < 2 ? "" : obj_.units}{" "}
                        {obj_.units > 2 ? "units" : "unit"}.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default Stage_;

