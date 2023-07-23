import React from "react";

export function Toast({ toastKey, statusType, message }) {
  return (
    <div className="w-60 flex flex-col p-6 gap-2 bg-default-inset rounded-md border border-default-border drop-shadow">
      <p className="text-default-accent text-xs">
        {statusType || "Status message"}
      </p>
      <p className="text-sm">
        {message ||
          "Etiam faucibus odio lorem, vitae condimentum augue dapibus vel."}{" "}
        ID: {toastKey}
      </p>
    </div>
  );
}

Toast.defaultProps = {
  statusType: "Status message",
  message: "Etiam faucibus odio lorem, vitae condimentum augue dapibus vel.",
};
