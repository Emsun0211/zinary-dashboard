import React from 'react'
import CustomSelect from '../../../components/share-components/CustomSelect'

function DashboardHeader() {
  return (
    <div className='max-w-7xl px-2 mt-6'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-[#505050] text-2xl font-bold'>WalletOverview</p>
            <div className='flex items-center gap-2' >
            <p className='text-[#505050] font-semibold text-sm'>Duration</p>
            <CustomSelect data={[{label: "Today", value: "today"}, {label: "Week", value:"week"}]} className='' placeholder='Today'/>
            </div>
        </div>
        <hr className='mt-6 border-[1.2px]'/>
    </div>
  )
}

export default DashboardHeader