import React, { ReactNode } from 'react'

import { Input } from '../ui/input'
import { cn } from "../../lib/utils";


interface Iinput {
  className?: string,
  icon?: ReactNode
}

function InputWithIcon({className, icon}: Iinput) {
  return (
    <div className='relative w-full'>
        {icon && <div className='absolute inset-y-0 left-2 flex items-center pointer-events-none'>

        {icon}
        </div>}
     <Input className={cn('flex h-12 w-full rounded-md border border-input bg-transparent px-4 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-10', className)} />
    </div>
  )
}

export default InputWithIcon