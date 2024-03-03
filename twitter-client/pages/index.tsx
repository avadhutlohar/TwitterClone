import Image from "next/image";

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
import FeedCard from "@/components/FeedCard";

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
    <div>
      <div className="grid grid-cols-12 h-screen  w-screen px-56 ">
        <div className="col-span-3 ml-28  pt-1 ">
          <div className="text-2xl hover:bg-gray-600 h-fit w-fit  rounded-full p-2 cursor-pointer transition-all mt-2">
            <FaTwitter />
          </div>
          <div className="mt-1 text-xl pr-2">
            <ul>
              {sidebarMenuItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-start items-center gap-4  hover:bg-gray-600 rounded-full px-4 py-3 w-fit cursor-pointer transition-all"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <div className=" mt-5  px-3 ">
              <button className="bg-[#1d9bf0] w-full text-lg rounded-full py-2 px-4">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5  border-r-[1px] border-l-[1px] border border-gray-600 ">
          <FeedCard />
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
