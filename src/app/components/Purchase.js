// components/Purchase.js
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Example data (replace with real data if needed)
const purchases = [
  { id: 1, name: "Sophia Johnson", ago: "2 min ago", message: "Booked a residential moving service 🏡", profile: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Liam Smith", ago: "5 min ago", message: "Scheduled a furniture delivery 🚛", profile: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Olivia Martinez", ago: "8 min ago", message: "Reserved a long-distance move 📦", profile: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Noah Williams", ago: "12 min ago", message: "Hired packing and unpacking service 📦✂️", profile: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Emma Brown", ago: "15 min ago", message: "Booked office relocation service 🏢", profile: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "James Davis", ago: "20 min ago", message: "Purchased premium storage solution 🔒", profile: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Ava Wilson", ago: "25 min ago", message: "Ordered furniture assembly 🛋️", profile: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Elijah Anderson", ago: "30 min ago", message: "Confirmed hot tub relocation service 🛁", profile: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Mia Thomas", ago: "35 min ago", message: "Scheduled piano moving 🎹", profile: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "William Garcia", ago: "40 min ago", message: "Booked commercial moving 📊", profile: "https://i.pravatar.cc/150?img=10" },
  { id: 11, name: "Isabella Martinez", ago: "45 min ago", message: "Reserved full packing service 📦", profile: "https://i.pravatar.cc/150?img=11" },
  { id: 12, name: "Benjamin Rodriguez", ago: "50 min ago", message: "Purchased moving insurance ✅", profile: "https://i.pravatar.cc/150?img=12" },
  { id: 13, name: "Charlotte Lee", ago: "55 min ago", message: "Hired a team for office relocation 🏢", profile: "https://i.pravatar.cc/150?img=13" },
  { id: 14, name: "Lucas Perez", ago: "1 hr ago", message: "Scheduled apartment move 📦", profile: "https://i.pravatar.cc/150?img=14" },
  { id: 15, name: "Amelia White", ago: "1 hr ago", message: "Booked fragile item packing 🥂", profile: "https://i.pravatar.cc/150?img=15" },
  { id: 16, name: "Henry Scott", ago: "1 hr 5 min ago", message: "Reserved local moving 🚚", profile: "https://i.pravatar.cc/150?img=16" },
  { id: 17, name: "Evelyn Young", ago: "1 hr 10 min ago", message: "Purchased heavy lifting service 🏋️", profile: "https://i.pravatar.cc/150?img=17" },
  { id: 18, name: "Alexander King", ago: "1 hr 15 min ago", message: "Booked same-day moving 🚀", profile: "https://i.pravatar.cc/150?img=18" },
  { id: 19, name: "Harper Baker", ago: "1 hr 20 min ago", message: "Hired for storage and moving combo 📦", profile: "https://i.pravatar.cc/150?img=19" },
  { id: 20, name: "Michael Gonzalez", ago: "1 hr 30 min ago", message: "Confirmed interstate moving 🚛", profile: "https://i.pravatar.cc/150?img=20" },
  { id: 21, name: "Ella Nelson", ago: "1 hr 35 min ago", message: "Scheduled packing supplies delivery 📦", profile: "https://i.pravatar.cc/150?img=21" },
  { id: 22, name: "Daniel Carter", ago: "1 hr 40 min ago", message: "Ordered furniture disassembly 🔧", profile: "https://i.pravatar.cc/150?img=22" },
  { id: 23, name: "Scarlett Mitchell", ago: "1 hr 45 min ago", message: "Purchased full moving package 🎯", profile: "https://i.pravatar.cc/150?img=23" },
  { id: 24, name: "Jack Roberts", ago: "2 hr ago", message: "Booked long-term storage 📦", profile: "https://i.pravatar.cc/150?img=24" },
  { id: 25, name: "Luna Green", ago: "2 hr 5 min ago", message: "Confirmed senior moving assistance 👵", profile: "https://i.pravatar.cc/150?img=25" },
  { id: 26, name: "David Hall", ago: "2 hr 10 min ago", message: "Reserved warehouse relocation 🏭", profile: "https://i.pravatar.cc/150?img=26" },
  { id: 27, name: "Aria Adams", ago: "2 hr 15 min ago", message: "Booked gym equipment moving 🏋️", profile: "https://i.pravatar.cc/150?img=27" },
  { id: 28, name: "Joseph Rivera", ago: "2 hr 20 min ago", message: "Purchased vehicle transport 🚗", profile: "https://i.pravatar.cc/150?img=28" },
  { id: 29, name: "Grace Torres", ago: "2 hr 25 min ago", message: "Ordered pet-friendly moving 🐶", profile: "https://i.pravatar.cc/150?img=29" },
  { id: 30, name: "Matthew Ramirez", ago: "2 hr 30 min ago", message: "Scheduled college dorm move 🎓", profile: "https://i.pravatar.cc/150?img=30" },
  { id: 31, name: "Chloe Walker", ago: "2 hr 35 min ago", message: "Booked junk removal 🚮", profile: "https://i.pravatar.cc/150?img=31" },
  { id: 32, name: "Ethan Hughes", ago: "2 hr 40 min ago", message: "Purchased eco-friendly packing 🌱", profile: "https://i.pravatar.cc/150?img=32" },
  { id: 33, name: "Zoe Foster", ago: "2 hr 45 min ago", message: "Reserved fragile handling 🥂", profile: "https://i.pravatar.cc/150?img=33" },
  { id: 34, name: "Logan Flores", ago: "3 hr ago", message: "Hired moving crew 🚛", profile: "https://i.pravatar.cc/150?img=34" },
  { id: 35, name: "Sofia Diaz", ago: "3 hr 10 min ago", message: "Booked quick apartment move 🏢", profile: "https://i.pravatar.cc/150?img=35" },
  { id: 36, name: "Aiden Phillips", ago: "3 hr 15 min ago", message: "Ordered storage boxes 📦", profile: "https://i.pravatar.cc/150?img=36" },
  { id: 37, name: "Layla Campbell", ago: "3 hr 20 min ago", message: "Scheduled piano moving 🎹", profile: "https://i.pravatar.cc/150?img=37" },
  { id: 38, name: "Carter Parker", ago: "3 hr 25 min ago", message: "Booked house-to-house move 🏡", profile: "https://i.pravatar.cc/150?img=38" },
  { id: 39, name: "Mila Edwards", ago: "3 hr 30 min ago", message: "Reserved storage pod 📦", profile: "https://i.pravatar.cc/150?img=39" },
  { id: 40, name: "Sebastian Collins", ago: "3 hr 35 min ago", message: "Booked international shipping 🌍", profile: "https://i.pravatar.cc/150?img=40" },
  { id: 41, name: "Camila Stewart", ago: "3 hr 40 min ago", message: "Hired small move service 📦", profile: "https://i.pravatar.cc/150?img=41" },
  { id: 42, name: "Jackson Morris", ago: "3 hr 45 min ago", message: "Reserved luxury moving ✨", profile: "https://i.pravatar.cc/150?img=42" },
  { id: 43, name: "Victoria Rogers", ago: "4 hr ago", message: "Purchased temporary storage 📦", profile: "https://i.pravatar.cc/150?img=43" },
  { id: 44, name: "Owen Reed", ago: "4 hr 5 min ago", message: "Confirmed student moving 🎒", profile: "https://i.pravatar.cc/150?img=44" },
  { id: 45, name: "Aurora Cook", ago: "4 hr 10 min ago", message: "Hired professional packing 🛠️", profile: "https://i.pravatar.cc/150?img=45" },
  { id: 46, name: "Wyatt Morgan", ago: "4 hr 15 min ago", message: "Scheduled hot tub relocation 🛁", profile: "https://i.pravatar.cc/150?img=46" },
  { id: 47, name: "Hannah Bell", ago: "4 hr 20 min ago", message: "Booked corporate moving 🏢", profile: "https://i.pravatar.cc/150?img=47" },
  { id: 48, name: "Luke Murphy", ago: "4 hr 25 min ago", message: "Purchased quick delivery 🚀", profile: "https://i.pravatar.cc/150?img=48" },
  { id: 49, name: "Penelope Bailey", ago: "4 hr 30 min ago", message: "Reserved weekend moving 📦", profile: "https://i.pravatar.cc/150?img=49" },
  { id: 50, name: "Jayden Rivera", ago: "4 hr 40 min ago", message: "Booked family relocation 🏡", profile: "https://i.pravatar.cc/150?img=50" },
];


const Purchase = () => {
  const [index, setIndex] = useState(0);

  // Auto-change every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % purchases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { y: 100, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 w-72 h-28 overflow-hidden purchase">
      <AnimatePresence>
        <motion.div
          key={purchases[index].id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-full bg-white rounded-xl shadow-xl flex items-center gap-4 p-4 border border-gray-200"
        >
          {/* Profile Image */}
          <img
            src={purchases[index].profile}
            alt={purchases[index].name}
            className="w-12 h-12 rounded-full border shadow"
          />

          {/* Info */}
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800 line-clamp-1">{purchases[index].name}</span>
            <span className="text-xs text-gray-500 line-clamp-1">{purchases[index].ago}</span>
            <span className="text-sm text-gray-700 mt-1 line-clamp-2">{purchases[index].message}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Purchase;
