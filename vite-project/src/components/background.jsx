import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      ref.current.style.setProperty("--x", `${x}%`);
      ref.current.style.setProperty("--y", `${y}%`)
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        
        // defaulted centre position
        "--x": "50%",
        "--y": "50%",

        background: `
          radial-gradient(circle at var(--x) var(--y),
            rgba(255,255,255,0.08),
            transparent 25%),
          #0a192f
        `,
      }}
    />
  )
}

