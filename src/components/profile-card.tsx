import { BadgeCheck, Star } from "lucide-react";

import Image from "next/image";
import { Button } from "./ui/button";

function ProfileCard() {
  return (
    <div className="container mx-auto rounded-t-lg profile-bg mt-10 relative">
      <div className="bg-[#FFFBF2] h-[151px]  w-full absolute top-44 px-8 lg:flex items-center justify-evenly">
        <div className="flex items-center gap-6 ">
          <div className="-mt-10">
            <Image
              src="/images/d3.png"
              alt={"Profile image"}
              width={100}
              height={100}
              className="border-4 w-[169px] h-[169]  border-white rounded-full relative "
            />
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[#212529] text-xl font-semibold font-sans">
                  Dr. Bruce Willis
                </h3>
                <BadgeCheck color="#2e37a4" strokeWidth={3} />
              </div>
              <p className="text-[#3A643B] font-semibold font-sans">
                Gynecologist
              </p>
            </div>
            <div className="flex items-center ">
              <span className="text-[#3A643B] font-semibold mr-1 font-sans">
                4.2
              </span>
              <Star fill="orange" strokeWidth={0} size={16} />
              <Star fill="orange" strokeWidth={0} size={16} />
              <Star fill="orange" strokeWidth={0} size={16} />
              <Star fill="orange" strokeWidth={0} size={16} />
            </div>
          </div>
        </div>

        <div className="lg:flex  items-center lg:mt-0 mt-10  gap-48">
          <div className="flex lg:-ml-0 -ml-40 items-center gap-16 justify-center mb-9 lg:mb-0">
            <div className="text-center">
              <span className="text-base text-[#2d4d2d] font-semibold font-sans">
                Followers
              </span>
              <p className="text-xl text-[#212529] font-semibold">850</p>
            </div>
            <div className="text-center">
              <span className="text-base text-[#2d4d2d] font-semibold font-sans">
                Following
              </span>
              <p className="text-xl text-[#212529] font-semibold">850 K</p>
            </div>
            <div className="text-center">
              <span className="text-base text-[#2d4d2d] font-semibold font-sans">
                Posts
              </span>
              <p className="text-xl text-[#212529] font-semibold">250</p>
            </div>
          </div>
          <div>
            <Button className="bg-[#3A643B] text-white hover:bg-[#2A542B] px-10 py-6 text-lg">
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
