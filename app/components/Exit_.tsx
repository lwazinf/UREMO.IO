import { useRecoilState } from "recoil";
import {
  DataState,
  DataTempState,
  EntryState,
  MenuState,
  OpenState,
  ProductState,
  UserState,
} from "./atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { updateCollection_ } from "./utils/utils";

interface Exit_Props {}

const Exit_ = () => {
  const [open_, setOpen_] = useRecoilState(OpenState);
  const [data_, setData_] = useRecoilState(DataState);
  const [menu_, setMenu_] = useRecoilState(MenuState);
  const [user_, setUser_] = useRecoilState(UserState);
  const [entry_, setEntry_] = useRecoilState(EntryState);
  const [dataTemp_, setDataTemp_] = useRecoilState(DataTempState);
  const [product_, setProduct_] = useRecoilState(ProductState);
  return (
    <div
      className={`w-full min-h-screen fixed top-0 duration-500 transition-all flex flex-col justify-center items-center ${
        open_ || menu_
          ? "opacity-100 pointer-events-auto backdrop-blur-sm"
          : "opacity-0 pointer-events-none backdrop-blur-none"
      }`}
      onClick={() => {
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
        setOpen_(false);
        setMenu_(false);
      }}
    >
    </div>
  );
};

export default Exit_;
