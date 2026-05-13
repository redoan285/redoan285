"use client";

import { useState, useEffect, useRef } from "react";

const CONTEXT = `You are the AI assistant embedded in RM Redoan's developer portfolio website.
About Redoan:
- MERN Stack Developer and CSE Student
- Skills: HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS
- Email: redoanmollik582@gmail.com
- GitHub: redoan285
- LinkedIn: redoan-mollik
Answer visitor questions concisely (2-4 sentences) and in a friendly, professional tone.
If unsure, invite them to email: redoanmollik582@gmail.com`;

const QUICK_PROMPTS = [
  "What are your skills?",
  "Tell me about your projects",
  "Available for work?",
  "How to contact you?",
];

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addMessage = (role, text) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  useEffect(() => {
    // Greeting
    const timer = setTimeout(() => {
      addMessage("ai", "Hi! 👋 I&apos;m Redoan&apos;s AI assistant. Ask me about his MERN stack skills, CSE journey, or projects!");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const sendMsg = async (text) => {
    if (!text.trim() || isTyping) return;

    setInput("");
    setIsTyping(true);
    addMessage("user", text);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate thinking
      
      let reply = "";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("skill")) {
        reply = "Redoan is skilled in the MERN stack: MongoDB, Express.js, React, and Node.js. He also uses Next.js and Tailwind CSS to build modern, responsive web applications.";
      } else if (lowerText.includes("project")) {
        reply = "He has worked on several projects, including a Friendship Platform and a Digital Toolset. You can see his best work in the projects section of this portfolio!";
      } else if (lowerText.includes("work") || lowerText.includes("opportunity")) {
        reply = "Yes! Redoan is a passionate developer and CSE student open to new opportunities where he can contribute and grow. Feel free to reach out via email or LinkedIn.";
      } else if (lowerText.includes("contact") || lowerText.includes("email")) {
        reply = "You can contact him directly at redoanmollik582@gmail.com or connect with him on LinkedIn (redoan-mollik).";
      } else {
        reply = "I'm here to help you learn more about RM Redoan's work as a MERN stack developer. If you have a specific project in mind, don't hesitate to contact him at redoanmollik582@gmail.com!";
      }

      setIsTyping(false);
      addMessage("ai", reply);
      
    } catch (error) {
      setIsTyping(false);
      addMessage("ai", "Oops! I encountered a connection issue. Feel free to email Redoan at redoanmollik582@gmail.com 📧");
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]" id="ai-chat">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          AI ASSISTANT
        </span>
        <h2 className="text-h2 text-on-background mt-3">
          Chat With My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            AI
          </span>
        </h2>
        <p className="text-on-surface-variant mt-4 text-lg">
          Ask anything about my skills, projects, or experience
        </p>
      </div>

      <div className="max-w-[760px] mx-auto">
        <div className="ai-gradient-border">
          <div className="ai-chat-inner">
            <div
              className="flex items-center gap-3 px-6 py-4 border-b border-white/5"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,var(--color-primary),var(--color-secondary))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                🤖
              </div>
              <div>
                <p className="text-sm font-bold text-white font-heading">
                  Redoan&apos;s AI Assistant
                </p>
                <p className="text-xs text-green-400">
                  <span className="ai-status-dot"></span>Online — ready to chat
                </p>
              </div>
            </div>

            <div className="ai-messages-area" ref={containerRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`msg ${msg.role}`}>
                  <div className="msg-avatar">
                    {msg.role === "ai" ? "🤖" : "👤"}
                  </div>
                  <div className="msg-bubble">{msg.text}</div>
                </div>
              ))}
              {isTyping && (
                <div className="msg ai">
                  <div className="msg-avatar">🤖</div>
                  <div className="msg-bubble">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {QUICK_PROMPTS.map((q, i) => (
                <button
                  key={i}
                  className="quick-btn"
                  onClick={() => sendMsg(q)}
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="flex gap-3 items-center px-5 py-4 border-t border-white/5">
              <input
                className="ai-input"
                type="text"
                placeholder="Ask me anything about Redoan..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMsg(input)}
                disabled={isTyping}
              />
              <button
                className="ai-send-btn"
                onClick={() => sendMsg(input)}
                disabled={isTyping}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
