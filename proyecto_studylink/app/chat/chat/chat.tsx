"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./chat.module.css";

type Message = {
  id: number;
  sender: "user" | "assistant";
  text: string;
  time: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "assistant",
      text: "Hola, ¿en qué puedo ayudarte hoy?",
      time: "Ahora",
    },
  ]);

  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      text,
      time: "Ahora",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "assistant",
          text: "Gracias por tu mensaje. Un asesor te responderá pronto.",
          time: "Ahora",
        },
      ]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div>
          <h2>Chat de asesorías</h2>
          <p>Escribe tu duda y recibe atención rápida.</p>
        </div>
      </div>

      <div className={styles.chatMessages}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.messageRow} ${
              msg.sender === "user" ? styles.userRow : styles.assistantRow
            }`}
          >
            <div
              className={`${styles.messageBubble} ${
                msg.sender === "user"
                  ? styles.userBubble
                  : styles.assistantBubble
              }`}
            >
              <span>{msg.text}</span>
              <small>{msg.time}</small>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className={styles.chatInputArea}>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.chatInput}
        />
        <button className={styles.sendButton} onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
}