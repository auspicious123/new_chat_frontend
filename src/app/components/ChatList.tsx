import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { acceptChatRequest, switchActiveChat, markMessageAsSeen } from "@/redux/slices/chatSlice";
import Image from "next/image";

const ChatList = () => {
  const chatRequests = useSelector((state: RootState) => state.chat.chatRequests);
  const unreadCount = useSelector((state: RootState) => state.chat.unreadCount);
  const dispatch = useDispatch();

  const handleChatSelect = (chatRequestId: string) => {
    dispatch(acceptChatRequest(chatRequestId));
    dispatch(switchActiveChat(chatRequestId));
    dispatch(markMessageAsSeen(chatRequestId));
  };

  return (
    <ul>
      {/* dummy data */}
      <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
        <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
          <Image src="/profile.png" width={44} height={44} alt="profile" />
          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-gray-200 bg-green-600"></span>
        </div>
        <div className="w-full">
          <h5 className="text-base font-medium text-black dark:text-white">Name</h5>
        </div>
      </div>

      {/* dynamic we need to make same design here */}
      {chatRequests.map((request) => (
        <li key={request.chatRequestId} onClick={() => handleChatSelect(request.chatRequestId)}>
          {request.user} ({unreadCount[request.chatRequestId] || 0} unread messages)
        </li>
      ))}
    </ul>
  );
};

export default ChatList;
