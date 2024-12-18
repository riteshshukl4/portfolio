import React from 'react'

const MagicButton = ({title,icon,position,handleClick,otherClasses}:{title:string; icon:React.ReactNode, position:string; handleClick?:()=>void; otherClasses?:string;

}) => {
  return (
    
        // Button code
        <button className={`rounded-lg inline-flex h-12 w-full animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-400 transition-colors focus:outline-none md:w-60 md:mt-10 gap-2 ${otherClasses} `}>
          {position==='left' && icon}
          {title}
          {position==='right' && icon}
        </button>
      
  )
}

export default MagicButton