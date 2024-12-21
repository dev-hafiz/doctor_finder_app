import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Plus, Twitter, Youtube } from "lucide-react";

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

      <div className=" px-10 lg:pb-10 pb-24  h-10  lg:flex items-center gap-2">
        <div className="text-black text-xl lg:mb-0 mb-2 font-medium font-sans leading-tight">
          Language Spoken{" "}
        </div>
        <div className="justify-start items-center gap-[15px] inline-flex">
          <div className="w-[105px] h-10 px-[9px] py-[7px] bg-[#2e37a4]/5 rounded-2xl justify-center items-center gap-2.5 flex overflow-hidden">
            <div className="text-[#4f4f4f] text-xl font-medium font-sans leading-tight">
              English{" "}
            </div>
          </div>
          <div className="w-[83px] h-10 px-[9px] py-[7px] bg-[#2e37a4]/5 rounded-2xl justify-center items-center gap-2.5 flex overflow-hidden">
            <div className="text-[#4f4f4f] text-xl font-medium font-sans leading-tight">
              Hindi
            </div>
          </div>
          <div className="w-[99px] h-10 px-[9px] py-[7px] bg-[#2e37a4]/5 rounded-2xl justify-center items-center gap-2.5 flex overflow-hidden">
            <div className="text-[#4f4f4f] text-xl font-medium font-sans leading-tight">
              Telugu
            </div>
          </div>
        </div>
      </div>

      <div className="px-10  pb-16 h-10 justify-start items-start gap-[15px] inline-flex">
        <div className="justify-start items-start gap-2.5 flex">
          <div className="w-10 h-10 flex justify-center items-center bg-[#f7f7fc] rounded-full border border-[#8d8d8d]">
            <Facebook size={20} strokeWidth={0.75} />
          </div>
        </div>
        <div className="justify-start items-start gap-2.5 flex">
          <div className="w-10 h-10 flex justify-center items-center bg-[#f7f7fc] rounded-full border border-[#8d8d8d]">
            <Instagram size={20} strokeWidth={0.75} />
          </div>
        </div>
        <div className="justify-start items-start gap-2.5 flex">
          <div className="w-10 h-10 flex justify-center items-center bg-[#f7f7fc] rounded-full border border-[#8d8d8d]">
            <Youtube size={20} strokeWidth={0.75} />
          </div>
        </div>
        <div className="justify-start items-start gap-2.5 flex">
          <div className="w-10 h-10 flex justify-center items-center bg-[#f7f7fc] rounded-full border border-[#8d8d8d]">
            <Twitter size={20} strokeWidth={0.75} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BioCard;
