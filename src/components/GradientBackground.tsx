import styles from "./GradientBackground.module.scss";

const blobs = [
  // Top row
  { top: "-5%",  left: "5%",   color: "rgba(0,210,255,  0.11)", w: 800, h: 650, anim: "float1" },
  { top: "-2%",  left: "45%",  color: "rgba(130,60,255, 0.09)", w: 700, h: 550, anim: "float2" },
  { top: "0%",   left: "85%",  color: "rgba(0,230,140,  0.09)", w: 650, h: 550, anim: "float3" },

  // Upper-mid row
  { top: "18%",  left: "-8%",  color: "rgba(220,50,160, 0.08)", w: 700, h: 600, anim: "float2" },
  { top: "20%",  left: "28%",  color: "rgba(0,180,255,  0.09)", w: 750, h: 650, anim: "float1" },
  { top: "15%",  left: "65%",  color: "rgba(255,100,50, 0.07)", w: 650, h: 550, anim: "float3" },
  { top: "10%",  left: "95%",  color: "rgba(100,60,255, 0.08)", w: 600, h: 500, anim: "float2" },

  // Mid row
  { top: "40%",  left: "5%",   color: "rgba(0,230,200,  0.09)", w: 700, h: 600, anim: "float3" },
  { top: "38%",  left: "38%",  color: "rgba(200,40,255, 0.08)", w: 800, h: 700, anim: "float1" },
  { top: "42%",  left: "75%",  color: "rgba(0,200,100,  0.08)", w: 650, h: 550, anim: "float2" },

  // Lower-mid row
  { top: "58%",  left: "-5%",  color: "rgba(255,60,120, 0.08)", w: 700, h: 600, anim: "float1" },
  { top: "60%",  left: "30%",  color: "rgba(0,160,255,  0.09)", w: 750, h: 650, anim: "float3" },
  { top: "55%",  left: "68%",  color: "rgba(255,140,0,  0.07)", w: 650, h: 550, anim: "float2" },
  { top: "60%",  left: "95%",  color: "rgba(80,200,255, 0.08)", w: 600, h: 500, anim: "float1" },

  // Bottom row
  { top: "78%",  left: "5%",   color: "rgba(120,0,255,  0.09)", w: 750, h: 600, anim: "float2" },
  { top: "80%",  left: "42%",  color: "rgba(0,220,180,  0.10)", w: 800, h: 650, anim: "float3" },
  { top: "82%",  left: "80%",  color: "rgba(220,50,100, 0.08)", w: 650, h: 550, anim: "float1" },

  // Extra corners
  { top: "92%",  left: "15%",  color: "rgba(0,200,255,  0.09)", w: 700, h: 500, anim: "float3" },
  { top: "95%",  left: "70%",  color: "rgba(160,60,255, 0.08)", w: 650, h: 500, anim: "float2" },
];

export default function GradientBackground() {
  return (
    <div className={styles.container} aria-hidden="true">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`${styles.blob} ${styles[b.anim]}`}
          style={{
            top: b.top,
            left: b.left,
            width: b.w,
            height: b.h,
            background: `radial-gradient(ellipse at center, ${b.color} 0%, transparent 68%)`,
          }}
        />
      ))}
    </div>
  );
}
