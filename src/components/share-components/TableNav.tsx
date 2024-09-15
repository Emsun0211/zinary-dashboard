import { BsSearch } from "react-icons/bs"
import CustomSelect from "./CustomSelect"
import InputWithIcon from "./InputWithIcon"


function TableNav() {
  return (
    <div className="max-w-7xl ">
        <div className="w-full flex items-center justify-between px-10">
            <div className="w-[14rem]">

         <InputWithIcon className="h-8 px-2" icon={<BsSearch size={18}/>}/>
            </div>
            <div className="flex items-center text-xs">
                <p>Display</p>
                <CustomSelect placeholder="" data={[{label: "2", value: "2"}, {label: "10", value: "10"},]}/>
                <p className="text-sx">rows</p>
            </div>
        </div>
    </div>
  )
}

export default TableNav