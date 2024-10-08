import React, { useRef } from "react";
import Image from "next/image";
import { SendIcon, GalleryIcon, Tick } from "@/app/components/ui/icons";
const Chatbox = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("File selected:", file);
    }
  };
  return (
    <div className="relative h-screen/75 no-scrollbar">
      {" "}
      <div className="p-2 text-xl font-bold border-b border-b-gray-200 dark:border-gray-800">
        <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
          <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
            <Image src="/profile.png" width={44} height={44} alt="profile" />
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-gray-200 bg-green-600"></span>
          </div>
          <div className="w-full">
            <h5 className="text-base font-medium text-black dark:text-white">Name</h5>
            <h5 className="text-base font-medium text-gray-700 dark:text-gray-200">Email</h5>
          </div>
        </div>
      </div>
      <div className="no-scrollbar h-5/6 space-y-2.5 overflow-auto m-2">
        <div className="flex justify-start">
          {" "}
          <div className="">
            <div className="text-left py-2 px-3 bg-gray-200 dark:bg-gray-800 w-fit rounded-xl rounded-tl-none break-words">
              Hello Admin, I need your help
            </div>
            <div className="flex justify-end items-center text-xs">
              <span>1:55 pm</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          {" "}
          <div className="">
            <div className="text-right py-2 text-white px-3 bg-purple-600 w-fit rounded-xl rounded-br-none break-words">
              Yes please tell me what is your issue
            </div>{" "}
            <div className="flex justify-end items-center text-xs">
              <span>1:55 pm</span>
              <Tick seen={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 text-xl font-bold border-t border-t-gray-200 border-b w-full dark:border-gray-800">
        <div className="flex items-center py-3 px-3 bg-gray-50 dark:bg-gray-800">
          <button
            type="button"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            onClick={handleUploadClick}
          >
            <GalleryIcon />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*,application/pdf,.doc,.docx,.txt"
            />
          </button>

          <input
            id="chat"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 placeholder:font-normal dark:text-white"
            placeholder="Your message..."
          ></input>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
