
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table"
import { GoDotFill } from "react-icons/go"

  interface ITransaction {
    sn: string
    name: string,
    email: string,
    type: string,
    amount: string,
    date: string,
    status: string,
    statusColor: string,
  }
  
  interface ITable {
    data:  ITransaction[]
  }
  

  
  export function TransactionTable({data} : ITable) {
    return (
      <Table className="overflow-x-scroll pb-10">
        
        <TableHeader>
          <TableRow className="bg-[#848484] hover:bg-[#848484]/90 rounded-lg py-4">
            <TableHead className="text-white mb-5">S/N</TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Transaction Reference</TableHead>
            <TableHead className="text-white">Type</TableHead>
            <TableHead className="text-white">Amount</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice) => (
            <TableRow key={invoice.sn} className="text-[] text-left mb-6">
              <TableCell className="mb-4 rounded-lg">{invoice.sn}</TableCell>
              <TableCell className="">{invoice.name}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>{invoice.type}</TableCell>
              <TableCell className="">{invoice.amount}</TableCell>
              <TableCell className="">{invoice.date}</TableCell>
              <TableCell className="">
                <span className={`py-1 ${invoice.status === 'Successful' ? "bg-[#31D067]" : invoice.status === "Failed" ? "bg-[#EA523D]" : "bg-[#FFA349]"} text-white rounded-[24px] flex text-xs items-center justify-center gap-2`}>
                    <GoDotFill size={14} />
                    {invoice.status}
                    </span>
                </TableCell>
              <TableCell className="flex items-center justify-center">
                <span className="bg-[#EC681C] py-2  px-3 rounded-md text-white text-center font-semibold">
                    view
                    </span>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="">
            
        </TableFooter>
      </Table>
    )
  }
  