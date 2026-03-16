import styles from "./GradientBackground.module.scss";

const blobs = [
  // Top left — cyan (brand)
  { top: "0%",   left: "10%",  color: "rgba(0,200,220, 0.13)",  w: 700, h: 500 },
  // Top right — violet
  { top: "2%",   left: "65%",  color: "rgba(120,60,220, 0.10)", w: 600, h: 450 },
  // Mid left — emerald
  { top: "25%",  left: "-5%",  color: "rgba(0,210,120, 0.09)",  w: 550, h: 500 },
  // Mid center — brand cyan strong
  { top: "30%",  left: "35%",  color: "rgba(0,180,255, 0.10)",  w: 700, h: 600 },
  // Mid right — magenta/pink
  { top: "35%",  left: "75%",  color: "rgba(220,50,150, 0.08)", w: 500, h: 450 },
  // Lower left — indigo
  { top: "55%",  left: "5%",   color: "rgba(60,80,230, 0.09)",  w: 600, h: 500 },
  // Lower center — orange warm
  { top: "60%",  left: "40%",  color: "rgba(255,120,30, 0.07)", w: 650, h: 500 },
  // Lower right — cyan again
  { top: "65%",  left: "70%",  color: "rgba(0,210,200, 0.10)",  w: 500, h: 400 },
  // Bottom left — violet
  { top: "82%",  left: "8%",   color: "rgba(140,50,240, 0.09)", w: 600, h: 450 },
  // Bottom center — brand
  { top: "85%",  left: "38%",  color: "rgba(0,200,220, 0.12)",  w: 700, h: 500 },
  // Bottom right — pink
  { top: "88%",  left: "72%",  color: "rgba(220,60,120, 0.08)", w: 500, h: 400 },
];

export default function GradientBackground() {
  return (
    <div className={styles.container} aria-hidden="true">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={styles.blob}
          style={{
            top: b.top,
            left: b.left,
            width: b.w,
            height: b.h,
            background: `radial-gradient(ellipse at center, ${b.color} 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}
