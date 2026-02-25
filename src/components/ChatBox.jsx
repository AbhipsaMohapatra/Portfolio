import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenAI } from "@google/genai";

// Initialize the SDK correctly with your key
// const genAI = new GoogleGenerativeAI("AIzaSyCvTkz6877VH62arZW_YC0iZgsbYKSIaNo");
const ai = new GoogleGenAI({ apiKey: "AIzaSyCvTkz6877VH62arZW_YC0iZgsbYKSIaNo" });

const ChatBox = ({ open, setOpen }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I’m Abhipsa’s AI assistant. Want to know about her SIH project S.A.R.A or her MERN stack skills?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // Use gemini-3-flash for the best 2026 performance
      const prompt = `You are a professional AI assistant for Abhipsa Mohapatra. 
      Background: 
      - Currently: Pursuing B.Tech in CSE at Siksha 'O' Anusandhan University.
      - 12th: Mother's Public School, Bhubaneswar.
      - 10th: Narayana Schools, Nayapalli, BBSR (Scored 93.6%).
      - Skills: MERN stack (React, Node.js, Express, MongoDB), Java, Data Structures and Algorithms (DSA).
      - Notable Projects: 
        1. S.A.R.A (Sentiment Analysis and Reporting Assistant): Selected in Top 30 teams for Smart India Hackathon (SIH).
        2. Krishi Seva: Platform for organic farming.
        3. GirlScript Summer of Code (GSSOC) '25 contributor.
      - Interests: Reading thriller books, especially by Frieda McFadden.
      
      Instructions: Be helpful, concise, and professional. Use the background provided to answer questions accurately and Keep the .
      User says: ${input}`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash", 
        contents: [{
          role: "user",
          parts: [{ text: `You are a professional AI assistant for Abhipsa Mohapatra. 
      Background: 
      - Currently: Pursuing B.Tech in CSE at Siksha 'O' Anusandhan University.
      - 12th: Mother's Public School, Bhubaneswar.
      - 10th: Narayana Schools, Nayapalli, BBSR (Scored 93.6%).
      - Skills: MERN stack (React, Node.js, Express, MongoDB), Java, Data Structures and Algorithms (DSA).
      - Notable Projects: 
        1. S.A.R.A (Sentiment Analysis and Reporting Assistant): Selected in Top 30 teams for Smart India Hackathon (SIH).
        2. Krishi Seva: Platform for organic farming.
        3. GirlScript Summer of Code (GSSOC) '25 contributor.
      - Interests: Reading thriller books, especially by Frieda McFadden.
      
      Instructions: Be helpful, concise, and professional. Use the background provided to answer questions accurately and Keep the .
      User says: ${input}`
 }]
        }]
      });

      setMessages((prev) => [...prev, { role: "bot", text: response.text }]);
      

    //   const result = await model.generateContent(prompt);
    //   const response = await result.response;
      
    //   setMessages((prev) => [
    //     ...prev,
    //     { role: "bot", text: response.text() },
    //   ]);
    } catch (err) {
      console.error("Gemini Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `Sorry, I'm having trouble connecting to my brain right now. Please try again! ${err}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[2000]">
      <DialogBackdrop transition className="fixed inset-0 bg-gray-900/80 transition-opacity duration-500 data-closed:opacity-0" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel transition className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
              <div className="flex h-full flex-col overflow-y-auto bg-gray-900 py-6 shadow-xl border-l border-white/10">
                <div className="px-4 sm:px-6 flex justify-between items-center">
                  <DialogTitle className="text-xl font-semibold text-white">AI Assistant</DialogTitle>
                  <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
                    <XMarkIcon className="size-6" />
                  </button>
                </div>

                <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto space-y-4">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                        msg.role === 'user' ? 'bg-gray-400 text-black' : 'bg-gray-800 text-gray-200 border border-white/10'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && <div className="text-gray-500 text-xs italic">Thinking...</div>}
                </div>

                <div className="px-4 py-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask me something..."
                      className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:border-gray-400"
                    />
                    <button onClick={handleSend} className="p-2 bg-gray-400 rounded-lg hover:bg-white transition-colors">
                      <PaperAirplaneIcon className="size-5 text-black" />
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ChatBox;