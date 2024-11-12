import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const RightSideBar = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 ">
      {/* Animated Bars on the Left */}
      <div className="absolute right-0  -translate-x-52 sm2:-translate-x-52 -translate-y-40">
        <div className="group grid grid-cols-3 gap-1">
          <div className="h-12 group-hover:translate-y-3 w-[4px] rounded-full bg-red-500 transition-transform duration-500 ease-out"></div>
          <div className="h-32 group-hover:-translate-y-2 w-[4px] rounded-full bg-yellow-500 transition-transform duration-500 ease-out"></div>
          <div className="h-12 group-hover:translate-y-1 w-[4px] rounded-full bg-violet-500 transition-transform duration-500 ease-out"></div>
        </div>
      </div>

      {/* Main Card Layout */}
      <Card className="w-full max-w-lg p-6 bg-white  rounded-lg shadow-none border-none">
        {/* Header */}
        <CardHeader className=" pb-4">
          <CardTitle className="text-xl font-semibold text-center z-10">Add Videos</CardTitle>
          <p className="text-xxs text-gray-600 text-center">
            You have <strong>3 free videos</strong>
          </p>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm2:gap-0 sm2:flex-row items-center justify-start sm2:justify-center text-xxs sm2:space-x-4  text-gray-500">
            <span className="bg-gray-100 px-1 py-1 rounded-lg">Transcription level: <strong>Speed</strong></span>
            <span className="bg-gray-100 px-1 py-1 rounded-lg">AI content level:</span>
            <span className="bg-gray-100 px-1 py-1 rounded-lg">Max resolution: <strong>1080p</strong></span>
          </div>

          <p className="text-gray-400 text-xxs">Upload Video</p>
          {/* Upload Video Section */}
          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
          
            <p className="text-gray-500">
              Drop here or <span className="text-blue-600 cursor-pointer">browse</span>
            </p>
          </div>
          <div className="Border-[1px] border-gray-200"/>

          {/* Add URL Section */}
          <div className="flex items-center space-x-2 border-t border-gray-200 pt-4">
            <Input type="url" placeholder="https://www.youtube.com/watch?v=" className="flex-1 border border-gray-400 placeholder:text-gray-400" />
            <Button variant="default" className="text-white bg-black">Add video</Button>
          </div>

          {/* Connect YouTube Channel Section */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-xxs text-gray-400 mb-2">Choose from your YouTube videos</p>
            <Button variant="outline" className="w-full border border-gray-400 text-gray-400">
              <span  role="img" aria-label="YouTube" className="mr-2 text-gray-400">📹</span> Connect a YouTube Channel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSideBar;
