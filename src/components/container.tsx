import { cn } from "@/lib/utils"
import React from "react";

interface props {
    className?: string;
    children:React.ReactNode;
}
const container = ( {className,children}:props ) => {
  return (
    <div  className={cn("max-w-screen-xl mx-auto  px-4",className)}>
        {children}
    </div>
  )
}

export default container