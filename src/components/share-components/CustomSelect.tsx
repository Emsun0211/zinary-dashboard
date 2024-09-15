import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";


interface ISelect {
	data: { value: string; label: string }[];
	placeholder: string;
    className?: string;
}

function CustomSelect({data, placeholder}: ISelect) {
	return (
		

		<Select>
			<SelectTrigger className="w-[120px] text-sm">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{data?.map((item, index)=> <SelectItem key={index} value={item?.value}>{item?.label}</SelectItem>)}
				
			</SelectContent>
		</Select>
		
	);
}

export default CustomSelect;
