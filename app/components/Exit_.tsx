import { useRecoilState } from "recoil";
import { DataState, DataTempState, MenuState, OpenState } from "./atoms/atoms";

interface Exit_Props {
    
}
 
const Exit_ = () => {
  const [open_, setOpen_] = useRecoilState(OpenState);
  const [data_, setData_] = useRecoilState(DataState);
  const [menu_, setMenu_] = useRecoilState(MenuState);
  const [dataTemp_, setDataTemp_] = useRecoilState(DataTempState);
    return ( 
        <div className={`w-full min-h-screen fixed top-0 duration-500 transition-all ${open_ || menu_ ? 'opacity-100 pointer-events-auto backdrop-blur-sm' : 'opacity-0 pointer-events-none backdrop-blur-none'}`}
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
              setDataTemp_(data_)
              setOpen_(false);
              setMenu_(false);
        }}>

        </div>
     );
}
 
export default Exit_;