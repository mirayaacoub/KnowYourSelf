// // import React, { useState, useEffect } from "react";
// // import ChatList from "../components/ChatList";
// // import Chat from "../components/Chat";

// // interface ChatMessage {
// //   id: string;
// //   sender: string;
// //   message: string;
// //   timestamp: string;
// // }

// // const dummyChatsSender = [
// //   { id: "1", sender: "Alice", message: "Hello!", timestamp: "10:00 AM" },
// //   { id: "2", sender: "Bob", message: "Hi there!", timestamp: "10:05 AM" },
// //   {
// //     id: "3",
// //     sender: "Charlie",
// //     message: "Good morning!",
// //     timestamp: "10:10 AM",
// //   },
// //   { id: "4", sender: "David", message: "How are you?", timestamp: "10:15 AM" },
// //   { id: "5", sender: "Eva", message: "Let's meet up.", timestamp: "10:20 AM" },
// // ];

// // const dummyChatsReceiver = [
// //   { id: "1", sender: "You", message: "Hello!", timestamp: "10:00 AM" },
// //   { id: "2", sender: "You", message: "Hi there!", timestamp: "10:05 AM" },
// //   { id: "3", sender: "You", message: "Good morning!", timestamp: "10:10 AM" },
// //   { id: "4", sender: "You", message: "How are you?", timestamp: "10:15 AM" },
// //   { id: "5", sender: "You", message: "Let's meet up.", timestamp: "10:20 AM" },
// //   { id: "1", sender: "Alice", message: "Hello!", timestamp: "10:00 AM" },
// //   { id: "2", sender: "Bob", message: "Hi there!", timestamp: "10:05 AM" },
// //   {
// //     id: "3",
// //     sender: "Charlie",
// //     message: "Good morning!",
// //     timestamp: "10:10 AM",
// //   },
// //   { id: "4", sender: "David", message: "How are you?", timestamp: "10:15 AM" },
// //   { id: "5", sender: "Eva", message: "Let's meet up.", timestamp: "10:20 AM" },
// // ];

// // const Inbox: React.FC = () => {
// //   let s = sessionStorage.getItem("user");

// //   if (s) {
// //     let userObj = JSON.parse(s);

// //     const [userId] = useState<number>(userObj.user_id); // This would typically come from your auth context or similar
// //     const [chats, setChats] = useState<ChatMessage[]>(
// //       userId === 5 ? dummyChatsReceiver : dummyChatsSender,
// //     );
// //     const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

// //     const handleSelectChat = (id: string) => {
// //       setSelectedChatId(id);
// //     };

// //     const handleSendMessage = (message: string) => {
// //       if (selectedChatId) {
// //         const newMessage = {
// //           id: selectedChatId,
// //           sender: "You",
// //           message,
// //           timestamp: new Date().toLocaleTimeString(),
// //         };
// //         setChats((prevChats) => [...prevChats, newMessage]);
// //       }
// //     };

// //     const selectedChatMessages = chats.filter(
// //       (chat) => chat.id === selectedChatId,
// //     );

// //     return (
// //       <>
// //         <Navbar />
// //         <div className="flex h-screen">
// //           <ChatList
// //             chats={chats.filter((chat) => chat.sender !== "You")}
// //             onSelectChat={handleSelectChat}
// //           />
// //           <div className="w-3/4 p-4">
// //             {selectedChatId ? (
// //               <Chat
// //                 messages={selectedChatMessages}
// //                 onSendMessage={handleSendMessage}
// //               />
// //             ) : (
// //               <div className="text-gray-500">
// //                 Select a chat to view the conversation
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </>
// //     );
// //   }
// // };
// // export default Inbox;

// import React, { useState, useEffect } from "react";
// import ChatList from "../components/ChatList";
// import Chat from "../components/Chat";

// interface ChatMessage {
//   id: string;
//   sender: string;
//   message: string;
//   timestamp: string;
// }

// const dummyChatsSender = [
//   { id: "1", sender: "Alice", message: "Hello!", timestamp: "10:00 AM" },
//   { id: "2", sender: "Bob", message: "Hi there!", timestamp: "10:05 AM" },
//   {
//     id: "3",
//     sender: "Charlie",
//     message: "Good morning!",
//     timestamp: "10:10 AM",
//   },
//   { id: "4", sender: "David", message: "How are you?", timestamp: "10:15 AM" },
//   { id: "5", sender: "Eva", message: "Let's meet up.", timestamp: "10:20 AM" },
// ];

// const dummyChatsReceiver = [
//   { id: "1", sender: "You", message: "Hello!", timestamp: "10:00 AM" },
//   { id: "2", sender: "You", message: "Hi there!", timestamp: "10:05 AM" },
//   { id: "3", sender: "You", message: "Good morning!", timestamp: "10:10 AM" },
//   { id: "4", sender: "You", message: "How are you?", timestamp: "10:15 AM" },
//   { id: "5", sender: "You", message: "Let's meet up.", timestamp: "10:20 AM" },
//   { id: "6", sender: "Alice", message: "Hello!", timestamp: "10:00 AM" },
//   { id: "7", sender: "Bob", message: "Hi there!", timestamp: "10:05 AM" },
//   {
//     id: "8",
//     sender: "Charlie",
//     message: "Good morning!",
//     timestamp: "10:10 AM",
//   },
//   { id: "9", sender: "David", message: "How are you?", timestamp: "10:15 AM" },
//   { id: "10", sender: "Eva", message: "Let's meet up.", timestamp: "10:20 AM" },
// ];

// const Inbox: React.FC = () => {
//   const [userId] = useState<number>(5); // This would typically come from your auth context or similar
//   const [chats, setChats] = useState<ChatMessage[]>(
//     userId === 82 ? dummyChatsReceiver : dummyChatsSender,
//   );
//   const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
//   const [selectedChatName, setSelectedChatName] = useState<string | null>(null);

//   const handleSelectChat = (id: string, name: string) => {
//     setSelectedChatId(id);
//     setSelectedChatName(name);
//   };

//   const handleSendMessage = (message: string) => {
//     if (selectedChatId) {
//       const newMessage = {
//         id: selectedChatId,
//         sender: "You",
//         message,
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setChats((prevChats) => [...prevChats, newMessage]);
//     }
//   };

//   const selectedChatMessages = chats.filter(
//     (chat) => chat.id === selectedChatId,
//   );

//   return (
//     <div className="flex h-screen">
//       <ChatList
//         chats={chats.filter((chat) => chat.sender !== "You")}
//         onSelectChat={handleSelectChat}
//       />
//       <div className="w-3/4 p-4">
//         {selectedChatId ? (
//           <Chat
//             name={selectedChatName!}
//             messages={selectedChatMessages}
//             onSendMessage={handleSendMessage}
//           />
//         ) : (
//           <div className="text-gray-500">
//             Select a chat to view the conversation
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Inbox;

import React, { useState } from "react";
import ChatList from "../components/ChatList";
import Chat from "../components/Chat";
import Navbar from "../components/NavBar";

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
}

const dummyChatsSender = [
  { id: "1", sender: "Alice", message: "Hello!", timestamp: "10:00 AM" },
  { id: "2", sender: "Bob", message: "Hi there!", timestamp: "10:05 AM" },
  {
    id: "3",
    sender: "Charlie",
    message: "Good morning!",
    timestamp: "10:10 AM",
  },
  { id: "4", sender: "David", message: "How are you?", timestamp: "10:15 AM" },
  { id: "5", sender: "Eva", message: "Let's meet up.", timestamp: "10:20 AM" },
];

const dummyChatsReceiver = [
  { id: "1", sender: "You", message: "Hello!", timestamp: "10:00 AM" },
  { id: "2", sender: "You", message: "Hi there!", timestamp: "10:05 AM" },
  { id: "3", sender: "You", message: "Good morning!", timestamp: "10:10 AM" },
  { id: "4", sender: "You", message: "How are you?", timestamp: "10:15 AM" },
  { id: "5", sender: "You", message: "Let's meet up.", timestamp: "10:20 AM" },
  { id: "6", sender: "Alice", message: "Hello!", timestamp: "10:00 AM" },
  { id: "7", sender: "Bob", message: "Hi there!", timestamp: "10:05 AM" },
  {
    id: "8",
    sender: "Charlie",
    message: "Good morning!",
    timestamp: "10:10 AM",
  },
  { id: "9", sender: "David", message: "How are you?", timestamp: "10:15 AM" },
  { id: "10", sender: "Eva", message: "Let's meet up.", timestamp: "10:20 AM" },
];

const Inbox: React.FC = () => {
  let s = sessionStorage.getItem("user");

  if (s) {
    let userObj = JSON.parse(s);

    const [userId] = useState<number>(userObj.user_id);
    const [chats, setChats] = useState<ChatMessage[]>(
      userId === 82 ? dummyChatsReceiver : dummyChatsSender,
    );
    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
    const [selectedChatName, setSelectedChatName] = useState<string | null>(
      null,
    );

    const handleSelectChat = (id: string, name: string) => {
      setSelectedChatId(id);
      setSelectedChatName(name);
    };

    const handleSendMessage = (message: string) => {
      if (selectedChatId) {
        const newMessage = {
          id: selectedChatId,
          sender: "You",
          message,
          timestamp: new Date().toLocaleTimeString(),
        };
        setChats((prevChats) => [...prevChats, newMessage]);
      }
    };

    const selectedChatMessages = chats.filter(
      (chat) => chat.id === selectedChatId,
    );

    return (
      <>
        <Navbar />
        <div className="flex h-screen">
          <ChatList
            chats={chats.filter((chat) => chat.sender !== "You")}
            onSelectChat={handleSelectChat}
          />
          <div className="w-3/4 p-4 flex flex-col">
            {selectedChatId ? (
              <>
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-gray-700">
                    {selectedChatName}
                  </h2>
                </div>
                <Chat
                  messages={selectedChatMessages}
                  onSendMessage={handleSendMessage}
                />
              </>
            ) : (
              <div className="text-gray-500">
                Select a chat to view the conversation
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Inbox;
