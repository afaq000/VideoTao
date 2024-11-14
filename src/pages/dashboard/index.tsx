/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/NavBar";
import RightSideBar from "@/components/RightSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoFolderOpenOutline } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";

function index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function to open/close the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="bg-LightGray ">
      <Navbar />

      <div className="w-full px-8 ">
        <div className="flex  flex-col lg:flex-row lg:justify-between items-center mt-12  ">
          <h1 className="text-3xl from-accent-foreground font-medium text-zinc-700">
            Dashboard{" "}
            <span className="text-xs text-gray-400">
              1 video turned into marketing content
            </span>
          </h1>

          <Button
            onClick={toggleSidebar}
            className="bg-purple-600 text-white rounded-md px-4 py-2"
          >
            + Add Videos <span className="ml-2 text-xs">2 free</span>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen py-10">
          <div className="w-full flex flex-col sm2:flex-row gap-4 lg:gap-0 lg:flex-col py-0  space-y-0 lg:space-y-6  lg:w-1/27 pr-0 lg:pr-6">
            <Card className="w-full border bg-white">
              <CardHeader>
                <CardTitle className="font-normal font-sans">Folders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2  -mt-3">
                  <div className="flex items-center space-x-2 mb-4 bg-zinc-100 py-1 px-1 rounded-md">
                    <span className="text-sm font-medium flex gap-2 items-center ">
                      <IoFolderOpenOutline className="w-4 h-4" /> All Videos
                    </span>
                  </div>
                  <Input
                    placeholder="New folder name"
                    className="placeholder:text-gray-400 border-gray-200 h-8 shadow-sm"
                  />
                  <p className="w-full text-end text-xs cursor-pointer">
                    <span className="text-lg"> +</span> Create Folder
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full border bg-white">
              <CardHeader>
                <CardTitle>Free Trial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-xs">2 videos</span>
                    <div className="bg-zinc-100 w-min-36 w-32 px-1 flex justify-center items-center rounded-md ">
                    <p className=" text-xs  py-1  cursor-pointer">
                      {" "}
                      Get more videos
                    </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center ">
                    <span className="text-xs">0 team members</span>
                    <div className="bg-zinc-100 w-min-36 w-32 px-1 flex justify-center items-center rounded-md ">
                    <p className=" text-xs py-1 px-1 text-center cursor-pointer">
                      {" "}
                      Add team members
                    </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="bg-gray-300 py-2 px-2 rounded-md">
              <div className="mb-6 ">
                <Input
                  placeholder="Search videos..."
                  className="border border-gray-300 bg-white placeholder:text-gray-400 h-9"
                />
              </div>

              {/* Video Table */}
              <Table className="bg-white rounded-lg shadow">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/6"> </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="text-gray-400">
                    <TableCell>
                      <Input type="checkbox" className="h-4 w-4" />
                    </TableCell>
                    <TableCell>ai_python.mp4</TableCell>
                    <TableCell>2 mins</TableCell>
                    <TableCell>
                      <span className="bg-gray-100 text-gray-400 px-2 py-1 rounded-full text-xs">
                        Ready
                      </span>
                    </TableCell>
                    <TableCell>...</TableCell>
                  </TableRow>
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <div className="flex flex-col  space-y-2 py-4">
                        <p className="text-xs text-gray-500">
                          Showing 1 to 1 of 1 result
                        </p>
                        <Button
                          onClick={toggleSidebar} // Added onClick here to open the sidebar
                          variant="ghost"
                          className="w-full bg-gray-100 hover:bg-gray-100 py-3 rounded-lg"
                        >
                          Add Videos
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="w-92 fixed right-0 top-0 h-full bg-white shadow-lg overflow-y-auto">
          <RightSideBar />
          <button
            onClick={toggleSidebar}
            className="absolute top-0 right-0 bg-gray-300 w-8 h-8 rounded-full"
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default index;
