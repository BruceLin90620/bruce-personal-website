import React, {FC, memo, useEffect, useRef} from "react";
import Typed from "typed.js";

const TypeWriter: FC = memo(() => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["hello -> world();"],
      typeSpeed: 70,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="font-mono">
      <span ref={el} />
    </div>
  );
});

export default TypeWriter;
