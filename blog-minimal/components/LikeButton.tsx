"use client";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button
      onClick={() => setLikes((v) => v + 1)}
      className="mt-6 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-pink hover:opacity-90 transition"
      aria-live="polite"
    >
      ❤️ Curtir ({likes})
    </button>
  );
}
