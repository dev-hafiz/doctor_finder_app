import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const BioCard = () => {
  return (
    <Card>
      <div className="h-[62px]  pl-[30px] pr-[35.34px] py-[13px] bg-gradient-to-l from-[#fbfcfb] to-[#f4f7ec] rounded-tl-[15px] rounded-tr-[18px] justify-center items-start gap-[150px] md:gap-[450px] lg:gap-[380px] inline-flex overflow-hidden">
        <div className="text-[#303030] text-base lg:text-2xl font-semibold font-sans">
          A Little About me
        </div>
        <div className="self-stretch px-[6px] lg:px-[21px] py-1.5 bg-white rounded-[10px] border border-[#3a643b] flex-col justify-start items-start  inline-flex">
          <div className="justify-start items-center gap-[7px] inline-flex">
            <div className=" h-6 text-center text-[#575757] text-base font-medium font-sans leading-normal">
              Follow
            </div>
            <Plus size={20} strokeWidth={1.25} />
          </div>
        </div>
      </div>

      <div className="p-10  flex-col justify-start items-start gap-1.5 inline-flex">
        <div className=" text-[#333548]/50 text-base font-medium font-sans leading-[27px]">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the{" "}
        </div>
        <div className="h-[27px] justify-start items-center gap-2.5 inline-flex">
          <div className="h-[1px] w-[550px] bg-[#c5c5c5] hidden lg:block md:block"></div>
          <p className="text-[#2b2b2b]  text-base font-medium font-sans underline leading-[27px]">
            Read More
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BioCard;
