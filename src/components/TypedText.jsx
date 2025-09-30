// src/components/TypedText.jsx
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings, className }) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings,
      typeSpeed: 45,         // ✨ Slower, more human typing
      backSpeed: 25,         // ✨ Smooth backspacing
      startDelay: 300,       // ⏱ Little pause before typing starts
      backDelay: 1500,       // ⏱ Pause before deleting
      smartBackspace: true,  // ✅ Only erase what's different
      loop: true,
      shuffle: false,        // 🔁 Keep order consistent
      cursorChar: "|",       // ✨ Custom blinking cursor
      fadeOut: false,        // ❌ Disable fade (can look glitchy sometimes)
      showCursor: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, [strings]);

  return (
    <span
      ref={el}
      className={`${className} typed-text`}
    ></span>
  );
};

export default TypedText;
