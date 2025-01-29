import React from "react";

function FeedbackText({ text }: { text: string }) {
  return (
    <p className="text-xl font-semibold mx-auto text-center text-[var(--color-red)]">
      {text}
    </p>
  );
}

export default FeedbackText;
