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
    <div className='bg-[#AFB3B599] py-20'>
      <div>
        <Tabs defaultValue="artists" className="">
          <TabsList className='bg-[#EFF3F5] w-fit mx-auto rounded-full flex justify-center p-1 h-auto'>

            <TabsTrigger value="artists" className='data-[state=active]:bg-black py-2 px-4 rounded-full data-[state=active]:text-white'>Artists</TabsTrigger>
            <TabsTrigger value="art" className='data-[state=active]:bg-black py-2 px-4 rounded-full data-[state=active]:text-white'>Art</TabsTrigger>
            <TabsTrigger value="creators" className='data-[state=active]:bg-black py-2 px-4 rounded-full data-[state=active]:text-white'>Creators</TabsTrigger>
          </TabsList>
          <TabsContent value="artists" className='bg-white rounded-2xl shadow-xl mx-4 p-4 my-12 md:p-10 space-y-8'>
            {/* <div>
      
    </div> */}
            <div className='max-w-3xl mx-auto grid md:grid-cols-2 text-[#141029CC] gap-4'>
              <div className='bg-[#1410290F] relative rounded-xl col-span-1'>
                <input className='w-full py-2.5 pl-10 bg-transparent' placeholder='Search For Token' />
                <Search size={18} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#141029CC]' />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='border rounded-xl bg-[#1410290F] py-2.5 flex items-center px-2 justify-between col-span-1'>Sort: Featured 🔥 <span><ChevronDown /></span></button>
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

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='flex flex-col items-center text-center space-y-3'>
              <h3 className='text-4xl md:text-[64px] font-black -tracking-[1%] leading-[110%] font-monaCon'>Explore featured <br/>  <span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-0 before:bg-[url('/images/black_vector.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-110 before:scale-y-[2.2]">
                <span className="relative z-10 text-white">Artists</span>
              </span></h3>
              <p className='max-w-sm font-bold'>A curated marketplace of sounds, loops, and beats ready to sync with your NFT.</p>
            </div>
            <div className='w-full md:grid md:grid-cols-7 gap-2 px-8 max-w-7xl overflow-x-auto whitespace-nowrap grid-cols-none flex py-8 scrollbar mx-auto'>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/art-1.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/artist-1.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/art-3.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/art-2.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/art-4.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/art-5.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/art-6.jpg' className='w-full object-cover h-full' />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 text-center'>
              <h3 className='text-[100px] font-black -tracking-[1%] leading-[110%] font-monaCon text-center'>Willie Taylor</h3>
              <button className='bg-black font-bold font-mona text-white rounded-xl py-[13px] px-[25px]'>Browse Artists</button>
            </div>
            {/* ART TAB */}
          </TabsContent>
          <TabsContent value="art" className='bg-white rounded-2xl shadow-xl mx-4 p-4 my-12 md:p-10 space-y-8'>
            <div className='max-w-3xl mx-auto grid md:grid-cols-2 text-[#141029CC] gap-4'>
              <div className='bg-[#1410290F] relative rounded-xl col-span-1'>
                <input className='w-full py-2.5 pl-10 bg-transparent' placeholder='Search For Token' />
                <Search size={18} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#141029CC]' />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='border rounded-xl bg-[#1410290F] py-2.5 flex items-center px-2 justify-between col-span-1'>Sort: Featured 🔥 <span><ChevronDown /></span></button>
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

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='flex flex-col items-center text-center space-y-3'>
              <h3 className='text-4xl md:text-[64px] font-black -tracking-[1%] leading-[110%] font-monaCon'><span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-0 before:bg-[url('/images/black_vector.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-110 before:scale-y-[1.8]">
                <span className="relative z-10 text-white">Finance</span>
              </span> <br/> Your Creations</h3>
              <p className='max-w-sm font-bold'>SoundMoney rewards users daily in $BEZY and social tokens based on CLOUT and activity, using a quadratic formula to prioritize meaningful engagement.</p>
            </div>
            <div className='w-full md:grid md:grid-cols-7 gap-2 px-8 max-w-7xl overflow-x-auto whitespace-nowrap grid-cols-none flex py-8 scrollbar mx-auto'>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/artist-1.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/artist-3.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/art-4.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/artist-4.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/artist-5.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/artist-6.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/artist-7.jpg' className='w-full object-cover h-full' />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 text-center'>
              <h3 className='text-[100px] font-black -tracking-[1%] leading-[110%] font-monaCon'>Hip Hop Paintings</h3>
              <button className='bg-black font-bold font-mona text-white rounded-xl py-[13px] px-[25px]'>Browse Artists</button>
            </div>
          </TabsContent>
          {/* CREATORS TAB */}
          <TabsContent value="creators" className='bg-white rounded-2xl shadow-xl mx-4 p-4 my-12 md:p-10 space-y-8'>
            <div className='max-w-3xl mx-auto grid md:grid-cols-2 text-[#141029CC] gap-4'>
              <div className='bg-[#1410290F] relative rounded-xl col-span-1'>
                <input className='w-full py-2.5 pl-10 bg-transparent' placeholder='Search For Token' />
                <Search size={18} className='absolute left-2 top-1/2 -translate-y-1/2 text-[#141029CC]' />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='border rounded-xl bg-[#1410290F] py-2.5 flex items-center px-2 justify-between col-span-1'>Sort: Featured 🔥 <span><ChevronDown /></span></button>
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

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='flex flex-col items-center text-center space-y-3'>
              <h3 className='text-4xl md:text-[64px] font-black -tracking-[1%] leading-[110%] font-monaCon'>Real Creators. <br /> <span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-0 before:bg-[url('/images/black_vector.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-110 before:scale-y-110">
                <span className="relative z-10 text-white">Real Impact</span>
              </span></h3>
              <p className='max-w-sm font-bold'>Join a global community of artists using SoundMoney to transform how they engage fans.</p>
            </div>
            <div className='w-full md:grid md:grid-cols-7 gap-2 px-8 max-w-7xl overflow-x-auto whitespace-nowrap grid-cols-none flex py-8 scrollbar mx-auto'>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/labels-2.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/labels-3.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/labels-4.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/labels-5.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/labels-6.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/artist-5.jpg' className='w-full object-cover h-full' />
              </div>
              <div className='col-span-1 rounded-full aspect-square hover:scale-110 duration-300 hover:border-[4px] border-[#FD7125] overflow-hidden flex-shrink-0 w-[200px] md:w-auto'>
                <img src='/images/artists/art-2.jpg' className='w-full object-cover h-full' />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 text-center'>
              <h3 className='text-[100px] font-black -tracking-[1%] leading-[110%] font-monaCon'>Doble Tempo</h3>
              <button className='bg-black font-bold font-mona text-white rounded-xl py-[13px] px-[25px]'>Browse Creators</button>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  )
}

