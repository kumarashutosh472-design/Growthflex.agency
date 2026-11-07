/**
 * Purely decorative animated background layer (CSS motion graphics).
 * Fixed behind all content; respects prefers-reduced-motion via CSS.
 */
export function MotionBackground() {
  return (
    <div aria-hidden="true" className="motion-bg">
      <span className="motion-orb motion-orb-1" />
      <span className="motion-orb motion-orb-2" />
      <span className="motion-orb motion-orb-3" />
      <span className="motion-beam motion-beam-1" />
      <span className="motion-beam motion-beam-2" />
      <span className="motion-scan" />
    </div>
  );
}
