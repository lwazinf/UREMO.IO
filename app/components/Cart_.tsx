import { useRecoilState } from "recoil";
import { CollectionState, DataState, DataTempState, OpenState } from "./atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheckCircle, faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";

interface Cart_Props {
    
}
 
const Cart_ = () => {
    const [open_, setOpen_] = useRecoilState(OpenState);
    const [data_, setData_] = useRecoilState(DataState);
    const [collection_, setCollection_] = useRecoilState(CollectionState);
    const [dataTemp_, setDataTemp_] = useRecoilState(DataTempState);
    return (
      <div
        className={`flex-row bg-black/80 backdrop-blur-md z-[2] justify-between md:items-start items-center w-[420px] min-h-screen fixed ${
          open_ ? "right-0" : "right-[-100%]"
        } transition-all duration-500 top-0 lg:flex flex overflow-y-scroll`}
      >
        
        <div className={`flex flex-col justify-start items-start w-full h-full`}>
          <p
            className={`mt-4 ml-4 text-[30px] font-black text-white _oswald mb-4`}
          >
            Featured Houses
          </p>
          <div
            className={`w-full h-[30px] flex flex-row justify-between items-center`}
          >
            <div
              className={`w-full h-full flex flex-row justify-end items-center`}
            >
              {[].map((obj_, index) => {
                return (
                  <div
                    className={`min-w-[80px] h-[20px] border-solid border-[1px] border-black/50 hover:border-black flex flex-row justify-center items-center rounded-[15px] mx-1 px-4 cursor-pointer text-black/65 hover:text-white/80 hover:bg-black transition-all duration-500 hover:duration-200 text-white`}
                    key={index}
                  >
                    <p className={`text-[12px]`}>{obj_}</p>
                  </div>
                );
              })}
            </div>
            <div
              className={`text-[14px] min-w-[60px] flex flex-row opacity-80 absolute font-medium left-4 text-white cursor-pointer`}
            >
              <p className={`mr-4`} onClick={() => {
                setCollection_(data_.collection)
                  setOpen_(!open_);
              }}>{data_.collection}</p>
              <p className={`text-[14px] font-normal _oswald opacity-50`}>
                By {data_.house}
              </p>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`text-[14px] ml-1 mt-1 cursor-pointer hover:text-black/80 text-orange-600`}
              />
            </div>
  
            <div
              className={`text-[10px] w-[60px] opacity-60 relative left-4 cursor-pointer text-white`}
            >
              View All
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={`mx-3 mr-6 text-[16px] cursor-pointer hover:text-black/80  text-white`}
            />
          </div>
          <div className={`w-full h-[420px] px-4`}>
            <div
              className={`w-full h-full bg-white rounded-[4px] relative overflow-hidden`}
            >
              <img className={`object-cover w-full h-full`} src={data_.url} />
            </div>
            {/* <div
              className={`w-full h-[60%] mt-1 flex flex-row justify-center items-center`}
            >
              <div
                className={`w-full h-full hover:bg-white/80 bg-white/30 transition-all duration-1000 hover:duration-75 cursor-pointer rounded-[4px] mx-[1px]`}
              ></div>
              <div
                className={`w-full h-full hover:bg-white/80 bg-white/30 transition-all duration-1000 hover:duration-75 cursor-pointer rounded-[4px] mx-[1px]`}
              ></div>
            </div> */}
            <div
              className={`flex flex-col min-w-[70%] justify-start items-start scale-[.95] text-white mt-3 text-[25px] font-black _oswald`}
            >
              <p className={`text-[12px] font-thin _monts opacity-50 mb-2`}>
                {data_.desc}
              </p>
              <div
                className={`flex flex-col min-w-[70%] justify-start items-start`}
              >
                <p className={`text-[12px] font-thin _monts opacity-80`}>
                  RELEASED: Jan 7, 2024
                </p>
              </div>
              <span className={`text-[30px] text-orange-400 font-black`}>
                {data_.title}
              </span>
  
              <p className={`text-[14px] italic font-normal`}>
                R<span className={`text-[22px] mr-1`}>{data_.price}</span> per{" "}
                {data_.units < 2 ? "" : data_.units}{" "}
                {data_.units > 2 ? "units" : "unit"}.
              </p>
            </div>
            <div
              className={`w-full h-[20px] flex flex-col justify-center items-center mt-2`}
            >
              <div className={`w-[90%] h-[1px] bg-white/60`} />
            </div>
            <p className={`ml-4 text-[20px] text-white font-black _oswald`}>
              Your Cart
            </p>
            <div className={`w-full h-[230px] overflow-y-scroll rounded-sm mb-2`}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((obj_, index) => {
                return (
                  <div
                    className={`w-full h-[50px] bg-white/40 hover:bg-white/80 transition-all duration-1000 hover:duration-75 cursor-pointer my-1 rounded-[4px]`}
                    key={index}
                  ></div>
                );
              })}
            </div>
            <div
              className={`w-full text-white flex flex-row justify-center items-center font-thin italic`}
            >
              <div className={`flex flex-row mx-2 justify-end items-end mt-0`}>
                <p className={`text-[14px] font-medium _monts relative top-2`}>
                  subtotal: R40000
                </p>
              </div>
              <div className={`flex flex-row mx-2 justify-end items-end mt-0`}>
                <p
                  className={`text-[12px] font-thin _monts relative top-2 opacity-80`}
                >
                  ..from 18 items
                </p>
              </div>
            </div>
            <div
              className={`w-full h-[60px] transition-all hover:duration-1000 duration-75 hover:h-[62px] px-1 mt-auto mb-[100px] md:mb-0`}
            >
              <div
                className={`w-full h-[60px] text-white/80 hover:text-white/80 bg-orange-600 cursor-pointer hover:bg-black transition-all duration-200 rounded-[4px] scale-[0.7] mb-6`}
              >
                <div
                  className={`min-w-[50px] h-full flex flex-row justify-center items-center`}
                >
                  {/* <div
                    className={`min-w-[40px] min-h-[40px] border-solid border-[1px] rounded-[50%] flex flex-col justify-center items-center overflow-hidden mr-2`}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className={`text-[15px] cursor-pointer`}
                    />
                  </div> */}
                  <p className={`text-[25px] cursor-pointer`}>Buy Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
 
export default Cart_;