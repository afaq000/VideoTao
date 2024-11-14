import { CogIcon, HomeIcon, PuzzleIcon, ChevronDownIcon, ShieldCloseIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
import Link from "next/link";
import HomeIcons from "./Icons/HomeIcons";
import IntegrationIcon from "./Icons/IntegrationIcon";
import SittingIcon from "./Icons/SittingIcon";
import MenuIcon from "./Icons/MenuIcon";
import StarIcon from "./Icons/StarIcon";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false); 
  const [isMobile, setIsMobile] = useState(false);

  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const checkScreenSize = () => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="relative flex items-center justify-between bg-[#161616] p-1 px-4 text-white">
      {isMobile ? (
        <>
          <Button variant={"active"} className="lg:hidden text-white" onClick={toggleSidebar}>
            <MenuIcon />
          </Button>
          {showSidebar && (
            <div className="fixed top-0 left-0 h-screen w-1/4 bg-black z-50 pl-4 flex flex-col space-y-4">
              <div className="w-full flex justify-start -ml-5  mb-16">          
                <Button variant={"active"} onClick={toggleSidebar} className="text-white self-start">
                  <ShieldCloseIcon className="h-5 w-5" />
                </Button>

              </div>
              
              <div className="flex gap-3 items-center absolute left-3 top-14 -translate-y-1/4 "> {/* Removed hidden lg:block */}
            <div className="group grid grid-cols-3 gap-1">
              <div className="h-3 group-hover:translate-y-3 w-[3px] rounded-full bg-red-500 transition-transform duration-500 ease-red"></div>
              <div className="h-6 group-hover:-translate-y-2 w-[3px] rounded-full bg-yellow-500 transition-transform duration-500 ease-yellow"></div>
              <div className="h-4 group-hover:translate-y-1 w-[3px] rounded-full bg-violet-500 transition-transform duration-500 ease-violet"></div>
            </div>
            <div className="text-xs">Video Tap</div>
            
          </div>
              <NavItem icon={<HomeIcons/>} label="Home" />
              <NavItem icon={<IntegrationIcon />} label="Integrations" />
              <NavItem icon={<SittingIcon/>} label="Settings" />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="absolute left-8 top-0 -translate-y-1/4"> {/* Removed hidden lg:block */}
            <div className="group grid grid-cols-3 gap-1">
              <div className="h-14 group-hover:translate-y-3 w-[5px] rounded-full bg-red-500 transition-transform duration-500 ease-red"></div>
              <div className="h-7 group-hover:-translate-y-2 w-[5px] rounded-full bg-yellow-500 transition-transform duration-500 ease-yellow"></div>
              <div className="h-11 group-hover:translate-y-1 w-[5px] rounded-full bg-violet-500 transition-transform duration-500 ease-violet"></div>
            </div>
          </div>

          <div className="flex items-center space-x-4 pl-12">
            <div className="flex items-center space-x-3 pr-4">
              
              <Link href={"/"}>
              <span className="text-sm ">Video Tap</span>
              </Link>

            </div>
            <div className="flex items-center text-sm gap-10 ">
              <NavItem icon={<HomeIcons/>}  label="Home" />
              <NavItem icon={<IntegrationIcon />} label="Integrations" />
              <NavItem icon={<SittingIcon/>} label="Settings" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link href={"/"}>
              <span className="text-xs text-gray-300 border-b border-dashed border-gray-200">3 free videos left</span>
            </Link>
            <Button variant={"destructive"} className="bg-pink-600 hover:bg-pink-600 text-white rounded-md px-3 my-2 text-sm">
              <StarIcon/> Upgrade
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent text-white flex items-center space-x-1 text-sm hover:bg-zinc-800 hover:py-2 hover:px-1 hover:rounded-md  ">
                  <span>Afaq's Team</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-white rounded-md shadow-lg p-2 w-48">
                <DropdownMenuLabel className="text-gray-400">Team Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Team Settings</DropdownMenuItem>
                <DropdownMenuItem>Log Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-8 h-8 bg-zinc-700 border border-gray-600 text-white flex justify-center items-center text-sm rounded-lg">
                  <p>AH</p>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-white rounded-md shadow-lg p-2 w-56">
                <DropdownMenuLabel className="text-gray-400">Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem as="button" onClick={() => setShowStatusBar(!showStatusBar)} checked={showStatusBar}>
                  Status Bar
                </DropdownMenuItem>
                <DropdownMenuItem as="button" onClick={() => setShowActivityBar(!showActivityBar)} checked={showActivityBar} disabled>
                  Activity Bar
                </DropdownMenuItem>
                <DropdownMenuItem as="button" onClick={() => setShowPanel(!showPanel)} checked={showPanel}>
                  Panel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </nav>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer hover:bg-zinc-800 hover:py-2 hover:px-2 hover:rounded-md">
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Navbar;
