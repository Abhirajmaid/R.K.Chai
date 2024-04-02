"use client";
import { useState } from "react";
import { Footer, LoadingScreen, Navbar } from "@src/components/common";
import { motion } from "framer-motion";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
