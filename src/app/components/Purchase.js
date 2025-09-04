"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";

const purchases = [
  { id: 1, name: "Sophia Johnson", ago: "2 min ago", message: "Booked a residential moving service", profile: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Liam Smith", ago: "5 min ago", message: "Scheduled a furniture delivery", profile: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Olivia Martinez", ago: "8 min ago", message: "Reserved a long-distance move", profile: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Noah Davis", ago: "10 min ago", message: "Requested local moving service", profile: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Emma Wilson", ago: "12 min ago", message: "Booked furniture assembly", profile: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "William Brown", ago: "15 min ago", message: "Scheduled large item moving", profile: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Ava Taylor", ago: "18 min ago", message: "Reserved packing and unpacking services", profile: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "James Anderson", ago: "20 min ago", message: "Booked hot tub relocation", profile: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Isabella Thomas", ago: "22 min ago", message: "Requested storage services", profile: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Benjamin Jackson", ago: "25 min ago", message: "Scheduled commercial moving service", profile: "https://i.pravatar.cc/150?img=10" },
  { id: 11, name: "Mia White", ago: "27 min ago", message: "Reserved local moving service", profile: "https://i.pravatar.cc/150?img=11" },
  { id: 12, name: "Elijah Harris", ago: "30 min ago", message: "Booked furniture delivery", profile: "https://i.pravatar.cc/150?img=12" },
  { id: 13, name: "Charlotte Martin", ago: "32 min ago", message: "Scheduled long-distance move", profile: "https://i.pravatar.cc/150?img=13" },
  { id: 14, name: "Alexander Thompson", ago: "35 min ago", message: "Reserved furniture assembly", profile: "https://i.pravatar.cc/150?img=14" },
  { id: 15, name: "Amelia Garcia", ago: "37 min ago", message: "Booked large item moving", profile: "https://i.pravatar.cc/150?img=15" },
  { id: 16, name: "Daniel Martinez", ago: "40 min ago", message: "Requested packing and unpacking services", profile: "https://i.pravatar.cc/150?img=16" },
  { id: 17, name: "Harper Robinson", ago: "42 min ago", message: "Scheduled hot tub relocation", profile: "https://i.pravatar.cc/150?img=17" },
  { id: 18, name: "Matthew Clark", ago: "45 min ago", message: "Booked storage services", profile: "https://i.pravatar.cc/150?img=18" },
  { id: 19, name: "Evelyn Lewis", ago: "47 min ago", message: "Reserved commercial moving service", profile: "https://i.pravatar.cc/150?img=19" },
  { id: 20, name: "Henry Walker", ago: "50 min ago", message: "Booked local moving service", profile: "https://i.pravatar.cc/150?img=20" },
  { id: 21, name: "Abigail Hall", ago: "52 min ago", message: "Scheduled furniture delivery", profile: "https://i.pravatar.cc/150?img=21" },
  { id: 22, name: "Jackson Allen", ago: "55 min ago", message: "Reserved long-distance move", profile: "https://i.pravatar.cc/150?img=22" },
  { id: 23, name: "Emily Young", ago: "57 min ago", message: "Booked furniture assembly", profile: "https://i.pravatar.cc/150?img=23" },
  { id: 24, name: "Sebastian Hernandez", ago: "1 hour ago", message: "Scheduled large item moving", profile: "https://i.pravatar.cc/150?img=24" },
  { id: 25, name: "Avery King", ago: "1 hour ago", message: "Requested packing and unpacking services", profile: "https://i.pravatar.cc/150?img=25" },
  { id: 26, name: "Owen Wright", ago: "1 hour ago", message: "Booked hot tub relocation", profile: "https://i.pravatar.cc/150?img=26" },
  { id: 27, name: "Sofia Lopez", ago: "1 hour ago", message: "Reserved storage services", profile: "https://i.pravatar.cc/150?img=27" },
  { id: 28, name: "Lucas Hill", ago: "1 hour ago", message: "Scheduled commercial moving service", profile: "https://i.pravatar.cc/150?img=28" },
  { id: 29, name: "Scarlett Scott", ago: "1 hour ago", message: "Booked local moving service", profile: "https://i.pravatar.cc/150?img=29" },
  { id: 30, name: "Wyatt Green", ago: "1 hour ago", message: "Reserved furniture delivery", profile: "https://i.pravatar.cc/150?img=30" },
  { id: 31, name: "Victoria Adams", ago: "1 hour ago", message: "Scheduled long-distance move", profile: "https://i.pravatar.cc/150?img=31" },
  { id: 32, name: "Caleb Baker", ago: "1 hour ago", message: "Booked furniture assembly", profile: "https://i.pravatar.cc/150?img=32" },
  { id: 33, name: "Lily Gonzalez", ago: "1 hour ago", message: "Reserved large item moving", profile: "https://i.pravatar.cc/150?img=33" },
  { id: 34, name: "Nathan Nelson", ago: "1 hour ago", message: "Requested packing and unpacking services", profile: "https://i.pravatar.cc/150?img=34" },
  { id: 35, name: "Hannah Carter", ago: "1 hour ago", message: "Booked hot tub relocation", profile: "https://i.pravatar.cc/150?img=35" },
  { id: 36, name: "Jack Mitchell", ago: "1 hour ago", message: "Reserved storage services", profile: "https://i.pravatar.cc/150?img=36" },
  { id: 37, name: "Grace Perez", ago: "1 hour ago", message: "Scheduled commercial moving service", profile: "https://i.pravatar.cc/150?img=37" },
  { id: 38, name: "Ryan Roberts", ago: "1 hour ago", message: "Booked local moving service", profile: "https://i.pravatar.cc/150?img=38" },
  { id: 39, name: "Chloe Turner", ago: "1 hour ago", message: "Reserved furniture delivery", profile: "https://i.pravatar.cc/150?img=39" },
  { id: 40, name: "Luke Phillips", ago: "1 hour ago", message: "Scheduled long-distance move", profile: "https://i.pravatar.cc/150?img=40" },
  { id: 41, name: "Ella Campbell", ago: "1 hour ago", message: "Booked furniture assembly", profile: "https://i.pravatar.cc/150?img=41" },
  { id: 42, name: "Ethan Parker", ago: "1 hour ago", message: "Reserved large item moving", profile: "https://i.pravatar.cc/150?img=42" },
  { id: 43, name: "Madison Evans", ago: "1 hour ago", message: "Requested packing and unpacking services", profile: "https://i.pravatar.cc/150?img=43" },
  { id: 44, name: "Aiden Edwards", ago: "1 hour ago", message: "Booked hot tub relocation", profile: "https://i.pravatar.cc/150?img=44" },
  { id: 45, name: "Scarlett Collins", ago: "1 hour ago", message: "Reserved storage services", profile: "https://i.pravatar.cc/150?img=45" },
  { id: 46, name: "David Stewart", ago: "1 hour ago", message: "Scheduled commercial moving service", profile: "https://i.pravatar.cc/150?img=46" },
  { id: 47, name: "Lillian Sanchez", ago: "1 hour ago", message: "Booked local moving service", profile: "https://i.pravatar.cc/150?img=47" },
  { id: 48, name: "Samuel Morris", ago: "1 hour ago", message: "Reserved furniture delivery", profile: "https://i.pravatar.cc/150?img=48" },
  { id: 49, name: "Aria Rogers", ago: "1 hour ago", message: "Scheduled long-distance move", profile: "https://i.pravatar.cc/150?img=49" },
  { id: 50, name: "Henry Reed", ago: "1 hour ago", message: "Booked furniture assembly", profile: "https://i.pravatar.cc/150?img=50" },
  { id: 51, name: "Zoey Cook", ago: "1 hour ago", message: "Reserved large item moving", profile: "https://i.pravatar.cc/150?img=51" },
  { id: 52, name: "Gabriel Morgan", ago: "1 hour ago", message: "Requested packing and unpacking services", profile: "https://i.pravatar.cc/150?img=52" },
  { id: 53, name: "Hannah Bell", ago: "1 hour ago", message: "Booked hot tub relocation", profile: "https://i.pravatar.cc/150?img=53" },
  { id: 54, name: "Isaac Murphy", ago: "1 hour ago", message: "Reserved storage services", profile: "https://i.pravatar.cc/150?img=54" },
  { id: 55, name: "Addison Bailey", ago: "1 hour ago", message: "Scheduled commercial moving service", profile: "https://i.pravatar.cc/150?img=55" },
  { id: 56, name: "Nathan Rivera", ago: "1 hour ago", message: "Booked local moving service", profile: "https://i.pravatar.cc/150?img=56" },
  { id: 57, name: "Elizabeth Cooper", ago: "1 hour ago", message: "Reserved furniture delivery", profile: "https://i.pravatar.cc/150?img=57" },
  { id: 58, name: "Daniel Richardson", ago: "1 hour ago", message: "Scheduled long-distance move", profile: "https://i.pravatar.cc/150?img=58" },
  { id: 59, name: "Samantha Cox", ago: "1 hour ago", message: "Booked furniture assembly", profile: "https://i.pravatar.cc/150?img=59" },
  { id: 60, name: "Andrew Howard", ago: "1 hour ago", message: "Reserved large item moving", profile: "https://i.pravatar.cc/150?img=60" },
  { id: 61, name: "Victoria Ward", ago: "1 hour ago", message: "Requested packing and unpacking services", profile: "https://i.pravatar.cc/150?img=61" },
  { id: 62, name: "Joseph Torres", ago: "1 hour ago", message: "Booked hot tub relocation", profile: "https://i.pravatar.cc/150?img=62" },
  { id: 63, name: "Lillian Peterson", ago: "1 hour ago", message: "Reserved storage services", profile: "https://i.pravatar.cc/150?img=63" },
  { id: 64, name: "David Gray", ago: "1 hour ago", message: "Scheduled commercial moving service", profile: "https://i.pravatar.cc/150?img=64" },
  { id: 65, name: "Ella Ramirez", ago: "1 hour ago", message: "Booked local moving service", profile: "https://i.pravatar.cc/150?img=65" },
  { id: 66, name: "Ryan James", ago: "1 hour ago", message: "Reserved furniture delivery", profile: "https://i.pravatar.cc/150?img=66" },
  { id: 67, name: "Sofia Watson", ago: "1 hour ago", message: "Scheduled long-distance move", profile: "https://i.pravatar.cc/150?img=67" },
  { id: 68, name: "Ethan Brooks", ago: "1 hour ago", message: "Booked furniture assembly", profile: "https://i.pravatar.cc/150?img=68" },
  { id: 69, name: "Mia Kelly", ago: "1 hour ago", message: "Reserved large item moving", profile: "https://i.pravatar.cc/150?img=69" },
  { id: 70, name: "James Sanders", ago: "1 hour ago", message: "Requested packing and unpacking services", profile: "https://i.pravatar.cc/150?img=70" },
];


const Purchase = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showPurchase = () => {
      // Pick a random purchase
      setIndex(Math.floor(Math.random() * purchases.length));
      setVisible(true);

      // Hide after 8 seconds
      setTimeout(() => setVisible(false), 8000);
    };

    // Show first after 18s
    const interval = setInterval(showPurchase, 18000);

    // Optional: show one immediately on first load
    // showPurchase();

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { y: 100, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 w-72 h-28 overflow-hidden purchase">
      <Link href={'/contact-us'}>
      <AnimatePresence>
        {visible && (
          <motion.div
            key={purchases[index].id}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full bg-white rounded-xl shadow-xl flex items-center gap-4 p-4 border border-gray-200"
          >

            <div className="message-icon absolute top-5 right-5 bg-red-700 p-1 rounded-4xl"> 
              <IoMdNotificationsOutline className="text-xl text-white" />
            </div>


            <img
              src={purchases[index].profile}
              alt={purchases[index].name}
              className="w-12 h-12 rounded-full border shadow"
            />

            {/* Info */}
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 line-clamp-1">{purchases[index].name}</span>
              <span className="text-xs text-gray-500 line-clamp-1">{purchases[index].ago}</span>
              <span className="flex gap-1">
                 <span className="text-sm text-gray-700 mt-1 line-clamp-2 flex">{purchases[index].message}</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </Link>
    </div>
  );
};

export default Purchase;
