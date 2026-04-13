"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Star,
  BarChart3,
  Users,
  Trophy,
  CheckCircle2,
  Lock,
  Target,
  Send,
} from "lucide-react";

const LandingPage = () => {
  // Stat data mimicking the reference image content
  const stats = [
    {
      value: "25,892",
      label: "Success Tips",
      color: "text-[#facc15]",
      borderColor: "border-emerald-900/40",
      glowColor: "rgba(250, 204, 21, 0.5)",
    },
    {
      value: "94%",
      label: "Win Rate",
      color: "text-[#ef4444]",
      borderColor: "border-red-900/50",
      glowColor: "rgba(239, 68, 68, 0.6)",
    },
    {
      value: "4.9 ⭐",
      label: "Rating",
      color: "text-[#facc15]",
      borderColor: "border-emerald-900/40",
      glowColor: "rgba(250, 204, 21, 0.5)",
    },
  ];

  const features = [
    { icon: ShieldCheck, label: "Verified", color: "text-green-500" },
    { icon: Lock, label: "Secure", color: "text-yellow-500" },
    { icon: TrendingUp, label: "Profitable", color: "text-red-500" },
    { icon: Star, label: "Top Rated", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500/30 selection:text-yellow-400 overflow-x-hidden font-sans">
      {/* Background Grid - Tight dark grid from reference */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 flex flex-col items-center max-w-[480px] mx-auto pt-16 pb-20 px-6 mt-10">
        {/* 1. Profile Section with Triple Glow Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-8 hidden"
        >
          {/* Subtle outer glow */}
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl animate-pulse" />

          <div className="relative w-36 h-36 rounded-full border-[5px] border-[#1a1a1a] p-1.5 bg-gradient-to-tr from-yellow-700 via-yellow-400 to-yellow-700 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
            <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center overflow-hidden border border-white/5">
              {/* Profile Image Placeholder */}
              <Users className="w-14 h-14 text-yellow-600/40" />
            </div>
          </div>

          {/* Verified Badge */}
          <div className="absolute bottom-2 right-2 bg-yellow-500 p-1.5 rounded-full border-[3px] border-[#050505] shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-black" strokeWidth={3} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-8"
        >
          {/* The main glowing 'aura' effect - bright and slightly focused */}
          <div className="absolute inset-0 rounded-full bg-[#facc15]/30 blur-2xl animate-pulse-fast shadow-[0_0_50px_10px_rgba(250,204,21,0.2)]" />

          {/* Outer Ring 1: Thin, dark olive/green ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#7ab620b9] scale-[1.12]" />

          {/* Outer Ring 2: Thicker, golden-yellow ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#facc15] scale-[1.08] shadow-[0_0_15px_rgba(250,204,21,0.3)]" />

          {/* Middle Ring 3: Main dark border separating the rings from profile */}
          <div className="relative w-36 h-36 rounded-full border-[6px] border-[#1a1a1a] shadow-[0_0_10px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Profile Image Container - scaled 110% to fill the border circle cleanly */}
            <div className="absolute inset-0 w-full h-full scale-[1.1]">
              {/* Assuming image_2.png is located at /profile.png */}
              <img
                src="/Rahul_profile.jpg" // *** REPLACE WITH YOUR PROFILE IMAGE PATH ***
                alt="Trade with Rahul"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Verified Badge */}
          <div className="absolute bottom-2 right-2 bg-[#facc15] p-1.5 rounded-full border-[3px] border-[#080808] shadow-lg drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
            <CheckCircle2 className="w-4 h-4 text-black" strokeWidth={3} />
          </div>
        </motion.div>

        {/* 2. Identity Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-black tracking-tight text-[#facc15] mb-2 flex items-center justify-center gap-2 uppercase italic">
            <Zap className="w-6 h-6 fill-current" /> Commodity King Rahul
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-yellow-100/80 text-xl font-medium">
            <Users className="w-5 h-5 text-yellow-500" />
            <span>22K+ Active Members</span>
          </div>
        </motion.div>

        {/* 3. Badge Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mb-12"
        >
          <motion.span
            whileHover={{ scale: 1.05, borderColor: "rgba(234, 179, 8, 0.5)" }}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border text-yellow-500 rounded-full text-[11px] font-bold text-gray-300 shadow-xl transition-colors cursor-pointer"
          >
            <Trophy className="w-3.5 h-3.5 text-yellow-500" /> ELITE ANALYST
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border text-red-500 rounded-full text-[11px] font-bold text-gray-300 shadow-xl transition-colors cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-current" /> LIVE UPDATES
          </motion.span>
        </motion.div>

        {/* 4. Stats Grid (Solid Borders + Glowing Text) */}
        <div className="grid grid-cols-3 gap-3 w-full mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -5 }}
              className={`relative group bg-[#0c0c0c] border-[2px] ${stat.borderColor} p-5 rounded-2xl text-center shadow-2xl overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className={`text-[22px] font-black mb-1.5 transition-all duration-300 ${stat.color} group-hover:scale-110`}
                style={{ filter: `drop-shadow(0 0 6px ${stat.glowColor})` }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold whitespace-nowrap">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5. Main CTA Button (Green to Red Gradient) */}
        <motion.a
          href="https://t.me/+0fkihqUMNhk1NDJl"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px -10px rgba(34,197,94,0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.6 }}
          className="w-full flex items-center justify-center gap-3 py-5 bg-gradient-to-r from-[#2c7a44] via-[#2c7a43e0] to-[#ff2c2c] text-white font-medium font-black text-xl rounded-2xl shadow-2xl mb-14"
        >
          <Send className="w-6 h-6 rotate-[-15deg]" />
          JOIN TELEGRAM CHANNEL
        </motion.a>

        {/* 6. Feature Tray (Icons Row) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full bg-[#0c0c0c]/80 border border-white/5 rounded-[28px] p-8 grid grid-cols-4 gap-2 mb-20 shadow-inner"
        >
          {features.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="p-2.5 rounded-xl transition-all duration-300 group-hover:bg-white/5 relative">
                {/* Animated Background Glow behind the icon */}
                <div
                  className={`absolute inset-0 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full ${
                    item.color === "text-green-500"
                      ? "bg-green-500"
                      : item.color === "text-yellow-500"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                />

                <item.icon
                  className={`w-7 h-7 ${item.color} relative z-10 transition-transform duration-300 group-hover:scale-110`}
                  strokeWidth={1.5}
                  // This style adds the "Neon" light emission effect
                  style={{
                    filter: `drop-shadow(0 0 5px ${
                      item.color.includes("green")
                        ? "#22c55e"
                        : item.color.includes("yellow")
                          ? "#facc15"
                          : "#ef4444"
                    }88)`,
                  }}
                />
              </div>

              <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest transition-colors group-hover:text-gray-300">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* 7. Footer Section */}
        <footer className="text-center space-y-3 opacity-30 px-4">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
            © 2026 Commodity king Rahul. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] font-medium text-white flex items-center justify-center gap-2">
            Learn from the Commodities King | Commodity king Rahul
          </p>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
