import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const FeaturedArtists = () => {
  return (
    <div>
      <div>
        <Tabs defaultValue="artists" className="">
  <TabsList className='bg-[#EFF3F5] w-fit mx-auto rounded-full flex justify-center p-1 h-auto'>

    <TabsTrigger value="artists" className='data-[state=active]:bg-black py-2 px-4 rounded-full data-[state=active]:text-white'>Artists</TabsTrigger>
    <TabsTrigger value="art" className='data-[state=active]:bg-black py-2 px-4 rounded-full data-[state=active]:text-white'>Art</TabsTrigger>
    <TabsTrigger value="creators" className='data-[state=active]:bg-black py-2 px-4 rounded-full data-[state=active]:text-white'>Creators</TabsTrigger>
  </TabsList>
  <TabsContent value="artists">
    <div className='max-w-3xl mx-auto grid grid-cols-2 text-[#141029CC] gap-4'>
        <div className='bg-[#1410290F] relative rounded-xl col-span-1'>
    <input className='w-full py-2.5 pl-10 bg-transparent' placeholder='Search For Token'/>
<Search size={18} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#141029CC]'/>
        </div>
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='border rounded-xl bg-[#1410290F] flex items-center px-2 justify-between col-span-1'>Set Featured 🔥 <span><ChevronDown/></span></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    <div className='flex flex-col items-center text-center'>
        <h3 className='text-4xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>Explore featured  Artists</h3>
        <p className='max-w-sm font-bold'>A curated marketplace of sounds, loops, and beats ready to sync with your NFT.</p>
    </div>
<div className='w-full grid grid-cols-7 gap-2 px-8 max-w-7xl'>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
</div>
<div className='flex flex-col justify-center items-center'>
    <h3 className='text-[100px] font-black -tracking-[1%] leading-[110%] font-monaCon'>Willie Taylor</h3>
 <button className='bg-black font-bold font-mona text-white rounded-xl py-[13px] px-[25px]'>Browse Artists</button>
 </div>
 {/* ART TAB */}
  </TabsContent>
  <TabsContent value="art">   <div className='max-w-3xl mx-auto grid grid-cols-2 text-[#141029CC] gap-4'>
        <div className='bg-[#1410290F] relative rounded-xl col-span-1'>
    <input className='w-full py-2.5 pl-10 bg-transparent' placeholder='Search For Token'/>
<Search size={18} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#141029CC]'/>
        </div>
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='border rounded-xl bg-[#1410290F] flex items-center px-2 justify-between col-span-1'>Set Featured 🔥 <span><ChevronDown/></span></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    <div className='flex flex-col items-center text-center'>
        <h3 className='text-4xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>Finance Your Crations</h3>
        <p className='max-w-sm font-bold'>SoundMoney rewards users daily in $BEZY and social tokens based on CLOUT and activity, using a quadratic formula to prioritize meaningful engagement.</p>
    </div>
<div className='w-full grid grid-cols-7 gap-2 px-8 max-w-7xl'>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
</div>
<div className='flex flex-col justify-center items-center'>
    <h3 className='text-[100px] font-black -tracking-[1%] leading-[110%] font-monaCon'>Hip Hop Paintings</h3>
 <button className='bg-black font-bold font-mona text-white rounded-xl py-[13px] px-[25px]'>Browse Artists</button>
 </div>
 </TabsContent>
 {/* CREATORS TAB */}
  <TabsContent value="creators">
       <div className='max-w-3xl mx-auto grid grid-cols-2 text-[#141029CC] gap-4'>
        <div className='bg-[#1410290F] relative rounded-xl col-span-1'>
    <input className='w-full py-2.5 pl-10 bg-transparent' placeholder='Search For Token'/>
<Search size={18} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#141029CC]'/>
        </div>
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='border rounded-xl bg-[#1410290F] flex items-center px-2 justify-between col-span-1'>Set Featured 🔥 <span><ChevronDown/></span></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    <div className='flex flex-col items-center text-center'>
        <h3 className='text-4xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>Real Creators. <br/> Real Imapct.</h3>
        <p className='max-w-sm font-bold'>Join a global community of artists using SoundMoney to transform how they engage fans.</p>
    </div>
<div className='w-full grid grid-cols-7 gap-2 px-8 max-w-7xl'>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
<div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px]  border-[#FD7125] overflow-hidden'>
    <img src='https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full object-cover'/>
</div>
</div>
<div className='flex flex-col justify-center items-center'>
    <h3 className='text-[100px] font-black -tracking-[1%] leading-[110%] font-monaCon'>Doble Tempo</h3>
 <button className='bg-black font-bold font-mona text-white rounded-xl py-[13px] px-[25px]'>Browse Creators</button>
 </div>
  </TabsContent>
</Tabs>

        </div>  
    </div>
  )
}

