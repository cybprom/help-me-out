import React from "react";
import { useState } from "react";

export default function ClipboardCopy({ textToCopy }) {
  const [isCopied, setIsCopied] = useState(false);

  const [copyPrompt, setCopyPrompt] = useState("Copy");

  const copyToClipboard = async () => {
    // try {
    //   await navigator.clipboard.writeText(textToCopy);
    //   setIsCopied(true);
    // } catch (error) {
    //   console.error("Failed to copy text to clipboard:", error);
    // }

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyPrompt("Copied!");

      // Reset the prompt to 'Copy' after 2 seconds
      setTimeout(() => {
        setCopyPrompt("Copy");
      }, 2000); // 2000 milliseconds (2 seconds)
    });
  };
  return (
    <div>
      <button className="text-base" onClick={copyToClipboard}>
        {/* {isCopied ? "copied!" : "Copy"} */}
        {copyPrompt}
      </button>
    </div>
  );
}
