import { useRef, useState } from "react";
import "./toggle-switch-button.css";

export function ToggleSwitchButton() {
  const ref = useRef<HTMLInputElement | null>(null);
  const [thumbX, setThumbX] = useState(0); // -50, 0, 50
  const [pos, setPos] = useState<"left" | "center" | "right">("center");
  const [isDragging, setIsDragging] = useState(false);

  const startXRef = useRef(0);
  const startThumbRef = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = ref.current;
    if (!input) return;

    setIsDragging(true);
    input.setPointerCapture(e.pointerId);

    startXRef.current = e.clientX;
    startThumbRef.current = thumbX;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLInputElement>) => {
    if (!isDragging) return;
    const input = ref.current;
    if (!input) return;

    const rect = input.getBoundingClientRect();
    const deltaX = e.clientX - startXRef.current;

    const percent = (deltaX / rect.width) * 100;

    let next = startThumbRef.current + percent;
    if (next < -50) next = -50;
    if (next > 50) next = 50;

    setThumbX(next);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLInputElement>) => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 25;

    let final = 0;
    let newPos: "left" | "center" | "right" = "center";

    if (thumbX <= -threshold) {
      final = -50;
      newPos = "left";
    } else if (thumbX >= threshold) {
      final = 50;
      newPos = "right";
    } else {
      final = 0;
      newPos = "center";
    }

    setThumbX(final);
    setPos(newPos);
  };

  return (
    <input
      ref={ref}
      type="checkbox"
      onClick={e => e.preventDefault()} // não clicar, só arrastar
      className={
        "theme-checkbox " +
        (pos === "left"
          ? "theme-checkbox--left"
          : pos === "right"
            ? "theme-checkbox--right"
            : "theme-checkbox--center")
      }
      style={{ "--thumb-x": `${thumbX}%` } as React.CSSProperties}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    />
  );
}
