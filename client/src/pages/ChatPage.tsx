// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:5000");

// interface Message {
//   user: string;
//   text: string;
// }

// export const ChatPage: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [message, setMessage] = useState("");
//   const [user, setUser] = useState<string | null>(null);

//   useEffect(() => {
//     // Retrieve user from sessionStorage
//     const s = sessionStorage.getItem("user");
//     if (s) {
//       const userObj = JSON.parse(s);
//       setUser(userObj.username);
//     }

//     socket.on("message", (message: Message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.off("message");
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() && user) {
//       const newMessage = { user, text: message };
//       socket.emit("message", newMessage);
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setMessage("");
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col h-screen p-4">
//         <div className="flex-1 overflow-y-auto mb-4">
//           {messages.map((msg, index) => (
//             <div key={index} className="mb-2">
//               <strong>{msg.user}: </strong>
//               {msg.text}
//             </div>
//           ))}
//         </div>
//         <div className="flex-none">
//           <input
//             type="text"
//             placeholder="Type a message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="border border-gray-400 p-2 mb-2 w-full"
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-blue-500 text-white p-2 rounded w-full"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Navbar from "../components/NavBar";

const socket = io("http://localhost:5000");

interface Message {
  user: string;
  text: string;
}

export const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Retrieve user from sessionStorage
    const s = sessionStorage.getItem("user");
    if (s) {
      const userObj = JSON.parse(s);
      setUser(userObj.username);
    }

    socket.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      scrollToBottom();
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() && user) {
      const newMessage = { user, text: message };
      socket.emit("message", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen p-4 relative">
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>{msg.user}: </strong>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 bg-white">
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-400 p-2 mb-2 w-full"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};
