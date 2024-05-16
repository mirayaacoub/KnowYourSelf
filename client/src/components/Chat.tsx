// import React from "react";

// interface ChatProps {
//   message: string;
//   sender: string;
//   timestamp: string;
// }

// const Chat: React.FC<ChatProps> = ({ message, sender, timestamp }) => {
//   return (
//     <div className="p-4 border-b border-gray-200">
//       <div className="text-sm text-gray-600">{sender}</div>
//       <div className="text-gray-900">{message}</div>
//       <div className="text-xs text-gray-500">{timestamp}</div>
//     </div>
//   );
// };

// export default Chat;

// import React, { useState } from "react";

// interface ChatProps {
//   messages: { sender: string; message: string; timestamp: string }[];
//   onSendMessage: (message: string) => void;
// }

// const Chat: React.FC<ChatProps> = ({ messages, onSendMessage }) => {
//   const [newMessage, setNewMessage] = useState("");

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== "") {
//       onSendMessage(newMessage);
//       setNewMessage("");
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex-1 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div key={index} className="p-4 border-b border-gray-200">
//             <div className="text-sm text-gray-600">{msg.sender}</div>
//             <div className="text-gray-900">{msg.message}</div>
//             <div className="text-xs text-gray-500">{msg.timestamp}</div>
//           </div>
//         ))}
//       </div>
//       <div className="p-4 border-t border-gray-200">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Type your message..."
//         />
//         <button
//           onClick={handleSendMessage}
//           className="mt-2 w-full py-2 px-4 bg-[#ccccff] text-gray-700 rounded hover:bg-gray-300"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
import React, { useState } from "react";

interface ChatProps {
  messages: { sender: string; message: string; timestamp: string }[];
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="p-4 border-b border-gray-200">
            <div
              className={`text-sm ${msg.sender === "You" ? "text-blue-500" : "text-gray-600"}`}
            >
              {msg.sender}
            </div>
            <div className="text-gray-900">{msg.message}</div>
            <div className="text-xs text-gray-500">{msg.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="mt-2 w-full py-2 px-4 bg-[#ccccff] text-gray-700 rounded hover:bg-gray-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
