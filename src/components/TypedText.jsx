// src/components/TypedText.jsx
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings, className }) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings,
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      backDelay: 1000,
      cursorChar: "|",
    });

    return () => {
      typed.current.destroy();
    };
  }, [strings]);

  return <span ref={el} className={className}></span>;
};

export default TypedText;
