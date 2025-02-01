
import { ChevronFirst, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaKaggle } from 'react-icons/fa'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface SocialLinksProps {
  className?: string;
};

const SocialLinksData = [
  {
    Title: "Github",
    Icon: <Github />,
    Link: ""
  },
  {
    Title: "LinkedIn",
    Icon: <Linkedin />,
    Link: ""
  },
  {
    Title: "Kaggle",
    Icon: <ChevronFirst />,
    Link: ""
  },
  {
    Title: "Instagram",
    Icon: <Instagram />,
    Link: ""
  },
  //   {
  //   Title: "instagram",
  //   Icon: <Instagram />,
  //   Link: ""
  // },
  //   {
  //   Title: "instagram",
  //   Icon: <Instagram />,
  //   Link: ""
  // },
]
const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <TooltipProvider>

      <div className="grid grid-cols-4 gap-4">
        {SocialLinksData.map((social) => (
          <Tooltip key={social?.Title}  >
            <TooltipTrigger>
              <div className={`flex justify-center text-lightsky/80 border  border-lightsky/30  hover:bg-lightsky  hover:border-lightsky/10 hover:text-bodycolor hoverEffect ${className}`}>
                <Link href={social.Link} target="_blank" rel="noopener noreferrer" className="p-2 ">
                  {social.Icon}
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent className='bg-lightsky text-bodycolor font-semibold'>{social.Title}</TooltipContent>
          </Tooltip>
        ))}
      </div>

    </TooltipProvider>
  )
}

export default SocialLinks