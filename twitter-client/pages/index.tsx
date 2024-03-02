import Image from "next/image";
import { Inter } from "next/font/google";
import {
  FaBell,
  FaBookmark,
  FaEnvelope,
  FaHashtag,
  FaHome,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: "Home", icon: <FaHome /> },
  { title: "Explore", icon: <FaHashtag /> },
  { title: "Notifications", icon: <FaBell /> },
  { title: "Messages", icon: <FaEnvelope /> },
  { title: "Bookmarks", icon: <FaBookmark /> },
  { title: "Profile", icon: <FaUser /> },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen  w-screen px-56 ">
        <div className="col-span-4  pt-5 ">
          <div className="text-3xl hover:bg-gray-600 h-fit w-fit  rounded-full p-2 cursor-pointer transition-all mt-2">
            <FaTwitter />
          </div>
          <div className="mt-4 text-xl pr-2">
            <ul>
              {sidebarMenuItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-start items-center gap-4  hover:bg-gray-600 rounded-full px-4 py-2 w-fit cursor-pointer transition-all"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <div className=" mt-5  w-56 px-4 ">
              <button className="bg-[#1d9bf0] w-full text-lg rounded-full p-4 ">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6  border-r-[1px] border-l-[1px] border-gray-600 "></div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
