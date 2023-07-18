"use client";

import { useState, useEffect } from "react";
import { Toast } from "../components/Toast";
import { Button } from "../components/Button";
import { motion, animate } from "framer-motion";

export default function Home() {
  const [toasts, setToasts] = useState([]);
  const [mostRecentToast, setMostRecentToast] = useState(null);

  const statusType = [
    "Error message",
    "Success message",
    "Warning message",
    "New connection"
  ]

  const message = [
    "Amet nisi exercitation excepteur." ,
    "Tempor esse pariatur anim.",
    "Consequat mollit aliqua occaecat commodo ex irure.",
    "Labore voluptate et anim culpa ullamco excepteur eu proident minim ad."
  ]

  const randomStatusType = statusType[Math.floor(Math.random() * statusType.length)]
  const randomMessage = message[Math.floor(Math.random() * message.length)]
  
  const popIn = {
    visible: { scale: 1, y:0, opacity: 1 },
    hidden: { scale: .9, y:40, opacity: .8 },
  };

  const popOut = {
    visible: { opacity: 1, y:0 },
    second: { y:-24, scale: 0.9 },
    third: { y:-48, scale: 0.8 },
    hidden: { opacity: 0, scale: 0.7, y:-72 }
  }

  useEffect(() => {
    if (mostRecentToast) {
      setToasts((prevToasts) => [...prevToasts, mostRecentToast]);
      setMostRecentToast(null);
    }
  }, [mostRecentToast])

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
    <div className="bg-default-base text-default-fg min-h-screen flex flex-col gap-8 p-8">
      <Button text="pop toast" onClick={popToast} />
      <div className="h-64 relative">
        {toasts.map((toast, index) => {
          const secondToast = index === toasts.length - 2;
          const thirdToast = index === toasts.length - 3;
          const pastToasts = index < toasts.length - 3;

          return (
            <motion.div
              key={index}
              className={`absolute w-fit h-fit m-auto inset-x-0`}
              variants={popOut}
              animate={secondToast ? "second" : thirdToast ? "third" : pastToasts ? "hidden" : "visible"}
              transition={{ type: "spring", stiffness: 300, damping: 100 }}
            >
              {toast}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
