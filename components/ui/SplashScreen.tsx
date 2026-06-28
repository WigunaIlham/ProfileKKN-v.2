"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import logoImage from "@/src/logo.png";
import {motion, AnimatePresence} from "framer-motion";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{opacity: 1}}
          exit={{opacity: 0, transition: {duration: 0.6, ease: "easeOut"}}}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #F5F0E8 0%, #EDE6D6 50%, #d6e8d6 100%)",
          }}
        >
          {/* Background decorative circles */}
          <div
            className="absolute top-[-10%] right-[-5%] w-64 h-64 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #4A7C59, transparent)",
            }}
          />
          <div
            className="absolute bottom-[-10%] left-[-5%] w-80 h-80 rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, #C4932A, transparent)",
            }}
          />

          <motion.div
            initial={{opacity: 0, scale: 0.7, y: 20}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
            className="flex flex-col items-center gap-5 relative z-10"
          >
            {/* Logo circle */}
            <div className="relative">
              <div
                className="
      relative
      w-24 h-24
      rounded-full
      overflow-hidden
      shadow-2xl
      ring-4
    "
                style={{
                  boxShadow: "0 20px 60px rgba(45,74,45,0.25)",
                  borderColor: "#4A7C59",
                }}
              >
                <Image
                  src={logoImage}
                  alt="Logo KKN Desa Jamali"
                  fill
                  priority
                  className="
                    object-cover
                    scale-[1.04]
                    rounded-full
                  "
                />
              </div>

              {/* Ripple tetap */}
              <motion.div
                initial={{
                  scale: 1,
                  opacity: 0.4,
                }}
                animate={{
                  scale: 1.6,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid #4A7C59",
                }}
              />
            </div>

            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.35, duration: 0.5}}
              className="text-center"
            >
              <h1
                className="font-heading font-bold text-2xl"
                style={{color: "#1C3320"}}
              >
                KKN JamaLights 206
              </h1>
              <p
                className="text-sm font-medium mt-1"
                style={{color: "#4A7C59"}}
              >
                Desa Jamali • Kec. Mande • Kab. Cianjur
              </p>
              <p className="text-xs mt-1" style={{color: "#7A8C7A"}}>
                Berkarya • Berdaya • Bermakna
              </p>
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{width: "0%"}}
            animate={{width: "55%"}}
            transition={{delay: 0.4, duration: 1.8, ease: "easeInOut"}}
            className="absolute bottom-12 h-0.5 rounded-full"
            style={{background: "linear-gradient(90deg, #4A7C59, #C4932A)"}}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
