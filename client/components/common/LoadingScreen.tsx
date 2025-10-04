"use client";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50">
      {/* Glassy container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/10 p-10 rounded-2xl shadow-2xl flex flex-col items-center"
      >
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />

        {/* App name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-white text-xl font-semibold tracking-wide"
        >
          Loading your experience...
        </motion.h1>
      </motion.div>
    </div>
  );
}
