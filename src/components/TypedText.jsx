import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings, className = "" }) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings,
      typeSpeed: 52,
      backSpeed: 34,
      startDelay: 450,
      backDelay: 2200,
      smartBackspace: true,
      loop: true,
      shuffle: false,
      cursorChar: "▎",
      fadeOut: false,
      showCursor: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, [strings]);

  return (
    <span
      ref={el}
      aria-live="polite"
      className={`${className} typed-text inline-block whitespace-nowrap max-w-full overflow-hidden align-bottom`}
    />
  );
};

export default TypedText;
