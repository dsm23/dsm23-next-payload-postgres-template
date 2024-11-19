"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@payloadcms/ui";

export function CopyButton({ code }: { code: string }) {
  const [text, setText] = useState("Copy");

  function updateCopyStatus() {
    if (text === "Copy") {
      setText(() => "Copied!");
      setTimeout(() => {
        setText(() => "Copy");
      }, 1000);
    }
  }

  return (
    <div className="flex justify-end align-middle">
      <Button
        className="flex gap-1"
        variant={"secondary"}
        onClick={async () => {
          await navigator.clipboard.writeText(code);
          updateCopyStatus();
        }}
      >
        <p>{text}</p>

        <div className="h-6 w-6 dark:invert">
          <CopyIcon />
        </div>
      </Button>
    </div>
  );
}
