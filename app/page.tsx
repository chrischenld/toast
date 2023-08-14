"use client";

import React, { useState, useEffect } from "react";
import { Toast } from "./components/Toast";
import { Button } from "./components/Button";
import { Sidebar } from "./components/Sidebar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [toasts, setToasts] = useState<JSX.Element[]>([]);
  // const [mostRecentToast, setMostRecentToast] = useState(null);
  const [mostRecentToast, setMostRecentToast] = useState<JSX.Element | null>(
    null
  );

  const statusType = [
    "Error message",
    "Success message",
    "Warning message",
    "New connection",
  ];

  const message = [
    "Amet nisi exercitation excepteur.",
    "Tempor esse pariatur anim.",
    "Consequat mollit aliqua occaecat commodo ex irure.",
    "Labore voluptate et anim culpa ullamco excepteur eu proident minim ad.",
  ];

  const randomStatusType =
    statusType[Math.floor(Math.random() * statusType.length)];
  const randomMessage = message[Math.floor(Math.random() * message.length)];

  const popIn = {
    visible: { scale: 1, y: 0, opacity: 1 },
    hidden: { scale: 0.9, y: 40, opacity: 0.8 },
  };

  const popOut = {
    visible: { opacity: 1, y: 0 },
    second: { y: -24, scale: 0.9 },
    third: { y: -48, scale: 0.8 },
    hidden: { opacity: 0, scale: 0.7, y: -72 },
  };

  useEffect(() => {
    if (mostRecentToast) {
      setToasts((prevToasts) => [...prevToasts, mostRecentToast]);
      setMostRecentToast(null);
    }
  }, [mostRecentToast]);

  const popToast = () => {
    const newToast = (
      <motion.div
        key={Date.now()}
        className="w-fit"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={popIn}
        transition={{ type: "spring", stiffness: 275, damping: 35 }}
      >
        <Toast
          toastKey={Date.now()}
          statusType={randomStatusType}
          message={randomMessage}
        />
      </motion.div>
    );

    setMostRecentToast(newToast);
  };

  return (
    <div className="bg-default-base text-fg-default min-h-screen flex flex-row gap-8">
      <Sidebar />
      <div className="p-8 text-fg-muted">
        <p>indoorpig</p>
        <p>work in progress</p>
      </div>
    </div>
  );
}
