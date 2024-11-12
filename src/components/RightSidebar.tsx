import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const RightSideBar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* Main Card Layout */}
      <Card className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        {/* Header */}
        <CardHeader className="border-b pb-4">
          <CardTitle className="text-xl font-semibold">Add Videos</CardTitle>
          <p className="text-sm text-gray-600">
            You have <strong>3 free videos</strong>
          </p>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-4">
          {/* Transcription and Resolution Info */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>Transcription level: <strong>Speed</strong></span>
            <span>AI content level:</span>
            <span>Max resolution: <strong>1080p</strong></span>
          </div>

          {/* Upload Video Section */}
          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
            <p className="text-gray-500">
              Drop here or <span className="text-blue-600 cursor-pointer">browse</span>
            </p>
          </div>

          {/* Add URL Section */}
          <div className="flex items-center space-x-2">
            <Input type="url" placeholder="https://www.youtube.com/watch?v=" className="flex-1" />
            <Button variant="default">Add video</Button>
          </div>

          {/* Connect YouTube Channel Section */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600 mb-2">Choose from your YouTube videos</p>
            <Button variant="outline" className="w-full">
              <span role="img" aria-label="YouTube" className="mr-2">📹</span> Connect a YouTube Channel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSideBar;
