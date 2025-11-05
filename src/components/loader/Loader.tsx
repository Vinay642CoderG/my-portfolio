import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#0d0d0d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      {/* Glowing spinning circles */}
      <motion.div
        style={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "3px solid #00adb5",
          borderTop: "3px solid transparent",
          filter: "drop-shadow(0 0 12px #00adb5)",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "2px solid #06d6a0",
          borderTop: "2px solid transparent",
          filter: "drop-shadow(0 0 8px #06d6a0)",
        }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
      />

      {/* Pulsing text */}
      <motion.span
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          fontWeight: 500,
          marginTop: 150,
          letterSpacing: 1,
        }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        Loading...
      </motion.span>

      {/* Small floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: "#00adb5",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
          animate={{
            y: [0, Math.random() * 20 - 10, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 3 + 2,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Loader;
