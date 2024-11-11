import { CogIcon, HomeIcon, PuzzleIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
import Link from "next/link";

const Navbar = () => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-[#161616] p-1 px-4 text-white">
     
      <div className="absolute left-3 top-0 -translate-y-1/4 hidden lg:block">
  <div className="group grid grid-cols-3 gap-1">
    <div
      className="h-12 group-hover:translate-y-3 w-[4px] rounded-full bg-red-500 transition-transform duration-500 ease-red"
    ></div>
    <div
      className="h-6 group-hover:-translate-y-2 w-[4px] rounded-full bg-yellow-500 transition-transform duration-500 ease-yellow"
    ></div>
    <div
      className="h-9 group-hover:translate-y-1 w-[4px] rounded-full bg-violet-500 transition-transform duration-500 ease-violet"
    ></div>
  </div>
</div>

      <div className="flex items-center space-x-4 pl-10">
        <div className="flex items-center space-x-2">
          <span className="text-xxs ">Video Tap</span>
        </div>
        <div className="flex items-center space-x-6">
          <NavItem  icon={<HomeIcon className="h-4 w-4" />} label="Home" />
          <NavItem icon={<PuzzleIcon className="h-4 w-4"  />} label="Integrations" />
          <NavItem icon={<CogIcon className="h-4 w-4"  />} label="Settings" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <Link href={"/"}><span className="text-[8px] text-gray-400 underline">3 free videos left</span>
        </Link>
        <Button variant={"active"} className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-2 text-xxs">
          Upgrade
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-transparent text-white flex items-center space-x-1 text-xxs">
              <span>Afaq Team</span>
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
            <Avatar className="w-8 h-8 bg-gray-600 text-white flex justify-center items-center text-xxs rounded-lg"><p>AH</p></Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 text-white rounded-md shadow-lg p-2 w-56">
            <DropdownMenuLabel className="text-gray-400">Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            //   as="button"
              onClick={() => setShowStatusBar(!showStatusBar)}
              checked={showStatusBar}
            >
              Status Bar
            </DropdownMenuItem>
            <DropdownMenuItem
            //   as="button"
              onClick={() => setShowActivityBar(!showActivityBar)}
              checked={showActivityBar}
              disabled
            >
              Activity Bar
            </DropdownMenuItem>
            <DropdownMenuItem
              as="button"
              onClick={() => setShowPanel(!showPanel)}
              checked={showPanel}
            >
              Panel
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
    {icon}
    <span className="text-xxs ">{label}</span>
  </div>
);

export default Navbar;
