import React from "react";
import Image from "next/image";
import { FaRegHeart, FaRegMessage, FaRetweet } from "react-icons/fa6";
import { BiUpload } from "react-icons/bi";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 border-r-0 border-l-0 border-b-0 p-4 hover:bg-slate-900 transition-all cursor-pointer ">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/48904122?v=4"
            alt="1"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>Avadhut Lohar</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet
            ducimus, eos mollitia dolor quo, itaque corrupti quisquam, sunt
            temporibus inventore molestias incidunt dignissimos a voluptas animi
            suscipit quod obcaecati.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <FaRegMessage />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
