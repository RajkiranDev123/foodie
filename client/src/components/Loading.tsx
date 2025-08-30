import {  Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center relative overflow-hidden">
      <Loader2 className="animate-spin w-16 h-16 text-red-800" />
    </div>
  );
};

export default Loading;