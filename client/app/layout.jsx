"use client";
import { Kanit } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { Footer, LoadingScreen, Navbar } from "@src/components/common";
import { motion } from "framer-motion";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <html lang="en">
        <body className={kanit.className}>
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
        </body>
      </html>
    </>
  );
}
