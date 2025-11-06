/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroTagline,
  HeroButtons,
  Button,
} from "./styles";
import { useAppContext } from "@/context/AppContext";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const {
    data: { hero: heroData },
  } = useAppContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % heroData.typed.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer id="hero">
      {/* Motion Background Blobs */}
      <motion.div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-20%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #00adb5, transparent)",
          filter: "blur(120px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #06d6a0, transparent)",
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
        animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, #ff6b6b, transparent)",
          filter: "blur(80px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSubtitle>{heroData.subtitle}</HeroSubtitle>
        <HeroTitle>{heroData.title}</HeroTitle>

        {/* Typed Text Animation */}
        <HeroTagline>
          {heroData.tagline.start}{" "}
          <strong>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                {heroData.typed[currentRole]}
              </motion.span>
            </AnimatePresence>
          </strong>{" "}
          {heroData.tagline.end}
        </HeroTagline>

        <HeroButtons
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Button href="#projects" primary>
            View My Work
          </Button>
          <Button href="#contact">Contact Me</Button>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
