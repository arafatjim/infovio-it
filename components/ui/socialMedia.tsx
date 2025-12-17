"use client";
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SocialLinks = [
  {
    title: "YouTube",
    href: "https://www.youtube.com/@yourchannel",
    icon: <Youtube className='w-5 h-5' /> ,
  },
  {
    title: "GitHub",
    href: "https://github.com/yourusername",
    icon: <Github className='w-5 h-5' /> ,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/yourprofile",
    icon: <Linkedin className='w-5 h-5' /> ,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/yourprofile",
    icon: <Facebook className='w-5 h-5' /> ,
  },
  {
    title: "Slack",
    href: "https://yourworkspace.slack.com",
    icon: <Slack className='w-5 h-5' /> ,
  },
];

interface SocialMediaProps {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
};

const SocialMedia = ({className,iconClassName,tooltipClassName}:SocialMediaProps) => {
  return (
    <TooltipProvider>
        <div className={cn('flex items-center gap-4 py-4',className)}>
            {SocialLinks?.map((item)=>(
            <Tooltip key={item?.title}>
                <TooltipTrigger key={item?.title} asChild>
                    <Link href={item?.href} key={item?.title} target='_blank' rel='noopener noreferrer' className={cn('p-2 border-2 border-gray-50 rounded-full hover:text-logo-primary hover:border-logo-primary',iconClassName)}>
                {item?.icon}
            </Link>
                </TooltipTrigger>

                <TooltipContent className={cn('bg-white py-1 px-2 my-1.5 rounded-lg text-black font-normal text-sm',tooltipClassName)}>
                    {item?.title}
                </TooltipContent>

            </Tooltip>
        ))}
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia
