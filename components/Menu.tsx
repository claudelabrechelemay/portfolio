'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
  SidebarMenuAction
} from '@/components/ui/sidebar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

import {SiFacebook, SiX, SiTumblr, SiPinterest} from '@icons-pack/react-simple-icons'
import {Menu as ToggleIcon, X as CloseIcon} from "lucide-react"

import groups from '@/nav/groups'
import {Button} from './ui/button'
import {useIsMobile} from '@/hooks/use-mobile'

export function Toggle () {
  const isMobile = useIsMobile()
  const {openMobile, open} = useSidebar()
  const isOpen = (isMobile && openMobile) || (!isMobile && open)
  const translateTrigger = isOpen
    ? 'translate-x-[--sidebar-width-mobile]'
    : 'translate-x-0'
  const hideTrigger = isOpen
    ? 'opacity-0 pointer-events-none'
    : 'opacity-1'
  return <>
    <SidebarTrigger className={`text-gray-500 ${translateTrigger} ${hideTrigger} z-10 scale-150 p-5 absolute top-0 left-0 mt-8 ml-2 transition-[transform,opacity] duration-200 ease-linear`}>
      <ToggleIcon />
    </SidebarTrigger>
  </>
}

export function Menu () {
  const isMobile = useIsMobile()
  return (
    <>
      <Sidebar variant='floating'>
        <SidebarHeader className='font-sidebarHeader text-2xl'>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className='h-16 hover:bg-sidebar' asChild>
                <h1>
                  <a href='/'>Claude{<br />}Labrèche-Lemay</a>
                </h1>
              </SidebarMenuButton>
              <SidebarMenuAction asChild>
                <SidebarTrigger className='text-muted-foreground py-5 px-2 mt-2'>
                  <CloseIcon />
                </SidebarTrigger>
              </SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className='h-full font-sidebar text-sm'>
          {groups.map(({label, slug, items}) => (
            <SidebarGroup key={items[0].slug}>
              {label ? (
                <SidebarGroupLabel className='text-foreground'>
                  <SidebarMenuButton asChild>
                    {slug ? (
                      <a href={slug}>
                        <span>{label.en}</span>
                      </a>
                    ) : (
                      <span>{label.en}</span>
                    )}
                  </SidebarMenuButton>
                </SidebarGroupLabel>
              ) : null}
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map(({title, slug}) => (
                    <SidebarMenuItem key={title.en}>
                      <SidebarMenuButton asChild>
                        <a href={slug}>
                          <span>{title.en}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter className='text-xs'>
          <SidebarMenu className='font-sidebarSocials'>
            <SidebarMenuItem>
              <Popover>
                <PopoverTrigger>
                  <b>Share</b>
                </PopoverTrigger>
                <PopoverContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <Button asChild variant='ghost'>
                        <a href=''><SiFacebook /> Share to Facebook</a>
                      </Button>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Button asChild variant='ghost'>
                        <a href=''><SiX /> Share to X</a>
                      </Button>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Button asChild variant='ghost'>
                        <a href=''><SiTumblr /> Share to Tumblr</a>
                      </Button>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Button asChild variant='ghost'>
                        <a href=''><SiPinterest /> Share to Pinterest</a>
                      </Button>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </PopoverContent>
              </Popover>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroupLabel asChild className='text-sidebar-foreground'>
            <p>
              Copyright © Claude Labrèche-Lemay<br />
              2019; All rights reserved.
            </p>
          </SidebarGroupLabel>
        </SidebarFooter>
        {!isMobile ? <SidebarRail /> : null}
      </Sidebar>
      <Toggle />
    </>
  )
}
