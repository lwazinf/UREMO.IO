import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataState, DataTempState, OpenState } from "./atoms/atoms";
import { useRecoilState } from "recoil";

interface ExtraOptions_Props {}

const ExtraOptions_ = () => {
  const [open_, setOpen_] = useRecoilState(OpenState);
  const [data_, setData_] = useRecoilState(DataState);
  const [dataTemp_, setDataTemp_] = useRecoilState(DataTempState);

  return (
    <div
      className={`min-w-2 flex-col justify-center items-center fixed bottom-7 ${open_ ? 'right-[428px]' : 'right-2'} transition-all duration-500 hidden md:flex`}
    >
      {[
        {
          func: () => {
            if (!open_) {
              setData_(dataTemp_);
              setOpen_(!open_);
            } else {
              setData_({
                url: "",
                title: "",
                price: 0,
                units: 1,
                house: ``,
                desc: ``,
                collection: ``,
              });
              setOpen_(!open_);
            }
          },
          icon: faShoppingCart,
        },
        {
          func: () => {},
          icon: faPhone,
        },
        {
          func: () => {},
          icon: faTwitter,
        },
      ].map((obj_, index) => {
        return (
          <div
            // Set the classes for the div element
            className={`w-[30px] h-[30px]  border-solid border-[1px] border-black/60 bg-black hover:border-orange-600 hover:text-white hover:bg-orange-600 text-white cursor-pointer rounded-full flex justify-center items-center my-[1.5px] duration-500 transition-all`}
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
  );
};

export default ExtraOptions_;
