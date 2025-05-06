import React, { useEffect, useRef } from "react";

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.2
    let mouseY = canvas.height / 2;

    const keywords = [
      "AI", "Machine Learning", "Neural Network", "Algorithm", "Big Data", "Python",
      "TensorFlow", "Deep Learning", "Code", "Automation", "Innovation",
      "Development", "JavaScript", "NLP", "Computer Vision"
    ];

    const lineKeywords = Array(6)
      .fill("")
      .map(() => keywords[Math.floor(Math.random() * keywords.length)]);

    const drawVerticalLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.002;
      const frequency = 0.01;
      const speed = 0.6;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 2;

      const spacing = canvas.width / 7;

      for (let i = 1; i <= 6; i++) {
        const x = i * spacing;
        const phase = (x - mouseY) * frequency + time * speed;
        const y = Math.sin(phase) * 80;

        ctx.beginPath();
        ctx.moveTo(x, 0);
        // ctx.lineTo(x, canvas.height);
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.font = "12px Arial";
        ctx.fillText(lineKeywords[i - 1], x, canvas.height / 2 + y);
      }

      if (time % 0.33 < 0.01) {
        for (let i = 0; i < 6; i++) {
          lineKeywords[i] = keywords[Math.floor(Math.random() * keywords.length)];
        }
      }

      requestAnimationFrame(drawVerticalLines);
    };

    drawVerticalLines();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none -z-30 h-full"
    />
  );
};

export default CanvasAnimation;
