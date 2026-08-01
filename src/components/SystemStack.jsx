import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { STACK_LAYERS } from "../data.js";

export default function SystemStack() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), {
    stiffness: 70,
    damping: 18,
  });
  const tiltZ = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 70,
    damping: 18,
  });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      className="stack"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      role="img"
      aria-label="Isometric blueprint model of the system layers Isaiah builds: infrastructure, data, operations, scheduling and mobile"
    >
      <div className="stack-scene">
        <motion.div className="stack-tilt" style={{ rotateX: tiltX, rotateZ: tiltZ }}>
          <div className="stack-stage">
            <div className="stack-ground" aria-hidden="true" />
            {STACK_LAYERS.map((layer, i) => (
              <div
                key={layer.id}
                className="stack-layer"
                style={{ "--z": `${i * 58}px`, "--i": i }}
              >
                <div className="sl-head">
                  <span className="sl-id">{layer.id}</span>
                  {layer.name}
                </div>
                <div className="sl-parts">
                  {layer.parts.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
                {i === STACK_LAYERS.length - 1 && (
                  <span className="stack-beacon" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="stack-caption">FIG. 01 — MOVE CURSOR TO INSPECT · HOVER A PLATE TO LIFT IT</p>
    </div>
  );
}
