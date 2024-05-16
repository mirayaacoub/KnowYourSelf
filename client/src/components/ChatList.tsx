import React from "react";

interface ChatListProps {
  chats: { id: string; sender: string; message: string; timestamp: string }[];
  onSelectChat: (id: string, name: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onSelectChat }) => {
  return (
    <div className="w-1/4 border-r border-gray-200 h-screen overflow-y-auto">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="p-4 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectChat(chat.id, chat.sender)}
        >
          <div className="text-sm font-bold text-gray-700">{chat.sender}</div>
          <div className="text-xs text-gray-500">{chat.timestamp}</div>
          <div className="text-sm text-gray-900 truncate">{chat.message}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
