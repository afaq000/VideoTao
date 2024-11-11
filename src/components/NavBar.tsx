import { CogIcon, HomeIcon, PuzzleIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
// import { Button, Avatar, Dropdown, DropdownItem } from "@shadcn/ui";
// import { HomeIcon, PuzzleIcon, CogIcon } from "@shadcn/icons";

type Checked = Props["checked"]

const Navbar = () => {

    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
   
  return (
    <nav className="flex items-center justify-between bg-gray-900 p-4 text-white">
      {/* Left section: Logo and navigation */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {/* Logo or Custom Branding */}
          <span className="text-lg font-semibold">Video Tap</span>
        </div>
        <div className="flex items-center space-x-6">
          <NavItem icon={<HomeIcon />} label="Home" />
          <NavItem icon={<PuzzleIcon />} label="Integrations" />
          <NavItem icon={<CogIcon />} label="Settings" />
        </div>
      </div>

      {/* Right section: Free videos, Upgrade button, Team dropdown, Avatar */}
      <div className="flex items-center space-x-6">
        {/* Free Videos Left */}
        <span className="text-sm text-gray-400">3 free videos left</span>

        {/* Upgrade Button */}
        <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-4 py-2">
          Upgrade
        </Button>

        <DropdownMenu>

          <DropdownMenuContent>
            <span className="text-sm">Afaq Team</span>
          </DropdownMenuContent>
          <DropdownMenuContent>Team Settings</DropdownMenuContent>
          <DropdownMenuContent>Log Out</DropdownMenuContent>
        </DropdownMenu>


        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>


        {/* Profile Avatar */}
        <Avatar className="w-8 h-8 bg-gray-600 text-white">AH</Avatar>
      </div>
    </nav>
  );
};

// NavItem Component for individual navigation items
const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Navbar;
