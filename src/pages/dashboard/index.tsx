import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "lucide-react";
import React from "react";

function index() {
  return (
    <div className="bg-gray-100 ">
      <Navbar />

      <div className="w-full px-14 ">
        <div className="flex justify-between items-center mt-10  ">
          <h1 className="text-2xl ">
            Dashboard{" "}
            <span className="text-xs text-gray-400">
              1 video turned into marketing content
            </span>
          </h1>

          <Button className="bg-purple-600 text-white rounded-md px-4 py-2">
            + Add Videos <span className="ml-2 text-xs">2 free</span>
          </Button>
        </div>

        <div className="flex bg-gray-100 min-h-screen py-10">
          <div className="flex flex-col space-y-6 w-1/4 pr-6">
            <Card className="border bg-white">
              <CardHeader>
                <CardTitle>Folders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-slate-200 py-1 px-1 rounded-lg">
                    <span className="text-xs font-medium ">📁 All Videos</span>
                  </div>
                  <Input
                    placeholder="New folder name"
                    className="placeholder:text-gray-400 border-gray-200"
                  />
                  <p className="w-full text-end text-xs cursor-pointer">
                    + Create Folder
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border bg-white">
              <CardHeader>
                <CardTitle>Free Trial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs">2 videos</span>
                    <p className="bg-slate-200 text-xxs rounded-lg py-1 px-1 cursor-pointer">
                      {" "}
                      Get more videos
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">0 team members</span>
                    <p className="bg-slate-200 text-xxs rounded-lg py-1 px-1 cursor-pointer">
                      {" "}
                      Add team members
                    </p>
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
                  className="border border-gray-300 bg-white placeholder:text-gray-400"
                />
              </div>

              {/* Video Table */}
              <Table className="bg-white rounded-lg shadow">
                <TableHeader>
                  <TableRow >
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
                      <p className="text-xs text-gray-500">Showing 1 to 1 of 1 result</p>
                      <Button variant="ghost" className="w-full bg-gray-100 hover:bg-gray-100 py-3 rounded-lg">
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
    </div>
  );
}

export default index;
