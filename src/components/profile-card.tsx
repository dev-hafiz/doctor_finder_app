import { BadgeCheck, Star } from "lucide-react";

import Image from "next/image";

function ProfileCard() {
  return (
    <div className="container mx-auto rounded-t-lg profile-bg mt-10 relative">
      <div className="bg-[#FFFBF2] h-[151px] w-full absolute top-40 px-8 ">
        <div className="-mt-10">
          <Image
            src="/images/d3.png"
            alt={"Profile image"}
            width={100}
            height={100}
            className="border-4 w-[169px] h-[169] ml-10 border-white rounded-full relative "
          />
        </div>
        <div>
          <div>
            <h3>Dr. Bruce Willis</h3>
            <BadgeCheck color="#2e37a4" strokeWidth={3} />
          </div>
          <p className="#3A643B">Gynecologist</p>
          <div>
            <span>4.2</span>
            <Star fill="orange" strokeWidth={0} />
            <Star fill="orange" strokeWidth={0} />
            <Star fill="orange" strokeWidth={0} />
            <Star fill="orange" strokeWidth={0} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
