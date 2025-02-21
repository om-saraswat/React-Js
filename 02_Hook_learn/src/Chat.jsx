import React, { useState } from "react";
// import axios from "axios";

const Chat = () => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: "user", content: input }];
//     setMessages(newMessages);

//     try {
//       const { data } = await axios.post("http://localhost:5000/chat", { message: input });
//       setMessages([...newMessages, { role: "assistant", content: data.reply }]);
//     } catch (error) {
//       alert("Error connecting to AI!");
//     }

//     setInput("");
//   };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">ChatGPT Playground</h1>
      <div className="w-full max-w-2xl bg-white p-4 rounded-lg shadow-md">
        <div className="h-80 overflow-y-auto mb-4 p-2 border rounded">
          {messages.map((msg, i) => (
            <div key={i} className={`p-2 my-1 rounded ${msg.role === "user" ? "bg-blue-200 text-right" : "bg-gray-300"}`}>
              <strong>{msg.role === "user" ? "You" : "ChatGPT"}:</strong> {msg.content}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
