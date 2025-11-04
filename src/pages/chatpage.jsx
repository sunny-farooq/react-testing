import React from "react";
import { MessageSquare, FileText, Zap, Plus, LogOut, Moon } from "lucide-react";

const ChatPage = () => {
  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-700 flex flex-col justify-between">
        <div className="p-4">
          <button className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg mb-6">
            <Plus size={18} /> New Chat
          </button>

          {/* Chat history */}
          <div className="space-y-2 overflow-y-auto h-[60vh]">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-gray-800/40 hover:bg-gray-700/60 cursor-pointer transition"
              >
                <p className="text-sm font-medium flex justify-between">
                  <span>New Chat</span>
                  <span className="text-xs text-gray-400">Nov 4, 6:15 PM</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="p-4 border-t border-gray-700 space-y-3">
          {/* Dark Mode Toggle */}
          <button className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg">
            <Moon size={16} /> Dark Mode
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-2">
            <div className="bg-indigo-600 text-white rounded-full w-9 h-9 flex items-center justify-center font-semibold">
              A
            </div>
            <div>
              <p className="text-sm font-medium">Ahmar Jamal</p>
              <p className="text-xs text-gray-400">ahmarjamal1966@gmail.com</p>
            </div>
          </div>

          {/* Logout */}
          <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg flex items-center justify-center gap-2">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="bg-indigo-600/20 p-4 rounded-full mb-4">
            <Zap size={40} className="text-indigo-500" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to AI Chat</h1>
          <p className="text-gray-400 mb-10">
            Your intelligent assistant powered by advanced AI
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-gray-800/40 p-6 rounded-2xl hover:bg-gray-700/60 transition">
              <MessageSquare size={28} className="mx-auto text-indigo-400 mb-3" />
              <h2 className="font-semibold text-lg mb-1">Ask Anything</h2>
              <p className="text-sm text-gray-400">
                Get intelligent responses to your questions
              </p>
            </div>
            <div className="bg-gray-800/40 p-6 rounded-2xl hover:bg-gray-700/60 transition">
              <FileText size={28} className="mx-auto text-indigo-400 mb-3" />
              <h2 className="font-semibold text-lg mb-1">Upload Documents</h2>
              <p className="text-sm text-gray-400">
                Upload PDFs, DOCX, or TXT files for context
              </p>
            </div>
            <div className="bg-gray-800/40 p-6 rounded-2xl hover:bg-gray-700/60 transition">
              <Zap size={28} className="mx-auto text-indigo-400 mb-3" />
              <h2 className="font-semibold text-lg mb-1">Smart Answers</h2>
              <p className="text-sm text-gray-400">
                AI analyzes your files to provide accurate answers
              </p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-700 flex items-center">
          <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 mr-2">
            <FileText size={18} />
          </button>
          <input
            type="text"
            placeholder="Ask me anything... (Shift + Enter for new line)"
            className="flex-1 bg-gray-800 rounded-lg p-3 text-sm focus:outline-none"
          />
          <button className="ml-2 bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
