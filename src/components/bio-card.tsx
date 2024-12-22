import { Card } from "@/components/ui/card";
import { DoctorInterface } from "@/types/DoctorInterface";
import {
  Facebook,
  Instagram,
  Plus,
  School,
  Star,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

interface BioCardProps {
  doctor?: DoctorInterface;
}

const BioCard: React.FC<BioCardProps> = ({ doctor }) => {
  if (!doctor) {
    return <div>Doctor not found.</div>;
  }

  return (
    <div>
      <Card>
        <div className="h-[62px] w-full pl-[30px] pr-[35.34px] py-[13px] bg-gradient-to-l from-[#fbfcfb] to-[#f4f7ec] rounded-tl-[15px] rounded-tr-[18px] justify-center items-start gap-[150px] md:gap-[450px] lg:gap-[380px] inline-flex overflow-hidden">
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
            {doctor.bio}
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

      <Card className="mt-10 mb-10">
        <div className="h-[62px] w-full  pl-[30px] pr-[35.34px] py-[13px] bg-gradient-to-l from-[#fbfcfb] to-[#f4f7ec] rounded-tl-[15px] rounded-tr-[18px]  overflow-hidden">
          <div className="text-[#303030] text-base lg:text-2xl font-semibold font-sans">
            I Specialize In
          </div>
        </div>

        <div className=" py-10  lg:px-10  justify-start  items-start lg:gap-3.5 gap-1 inline-flex">
          <div className="flex-col justify-start ml-2 lg:ml-0 items-center gap-1.5 inline-flex">
            <div className="px-2 py-[9px] bg-[#fffcf2] rounded-[9px] border border-[#eaeaea] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
              <div className="justify-center items-center inline-flex overflow-hidden">
                <div className="w-[84px] h-[78px] relative">
                  <div className="w-[78px] h-[78px] left-[3px] top-0 absolute">
                    <Image
                      src="/images/Clip.png"
                      alt={"women’s health"}
                      width={100}
                      height={100}
                      className="border-4 w-[169px] h-[169]  border-white rounded-full relative "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black text-base font-medium font-sans capitalize leading-tight">
              women’s
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-1.5 inline-flex">
            <div className="px-2 py-[9px] bg-[#fffcf2] rounded-[9px] border border-[#eaeaea] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
              <div className="w-[84px] h-[78px] relative  overflow-hidden">
                <Image
                  src="/images/Skincare.png"
                  alt={"Skin Care"}
                  width={100}
                  height={100}
                  className="border-4 w-[169px] h-[169]  border-white rounded-full relative "
                />
              </div>
            </div>
            <div className="text-black text-base font-medium font-sans capitalize leading-tight">
              Skin Care
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-1.5 inline-flex">
            <div className="px-1 py-[9px] bg-[#fffcf2] rounded-[9px] border border-[#eaeaea] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
              <div className="w-[84px] h-[78px] relative  overflow-hidden">
                <Image
                  src="/images/Immunity.png"
                  alt={"Immunity"}
                  width={100}
                  height={100}
                  className="border-4 w-[169px] h-[169]  border-white rounded-full relative "
                />
              </div>
            </div>
            <div className="text-black text-base font-medium font-sans capitalize leading-tight">
              Immunity
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="p-2 bg-[#fffcf2] rounded-[9px] border border-[#eaeaea] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
              <div className="w-[84px] h-[78px] justify-center items-center inline-flex overflow-hidden">
                <div className="w-[84px] h-[78px] relative">
                  <div className="w-[78px] h-[78px] left-[3px] top-0 absolute">
                    <Image
                      src="/images/Hair.png"
                      alt={"Hair"}
                      width={100}
                      height={100}
                      className="border-4 w-[169px] h-[169]  border-white rounded-full relative "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black text-base font-medium font-sans capitalize leading-tight">
              Hair care
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-10 mb-10">
        <div className="h-[62px] w-full  pl-[30px] pr-[35.34px] py-[13px] bg-gradient-to-l from-[#fbfcfb] to-[#f4f7ec] rounded-tl-[15px] rounded-tr-[18px]  overflow-hidden">
          <div className="text-[#303030] text-base lg:text-2xl font-semibold font-sans">
            The Concerns I Treat
          </div>
        </div>

        <div className="flex flex-wrap gap-3 p-6">
          <div className="w-[154px] h-[43px] p-2.5 bg-[#f7f7fc] rounded-[19px] justify-center items-center gap-2.5 inline-flex flex-grow">
            <div className="text-[#3a643b] text-base font-medium font-sans leading-[18px]">
              Skin Treatment
            </div>
          </div>
          <div className="w-[154px] h-[43px] p-2.5 bg-[#f7f7fc] rounded-[19px] justify-center items-center gap-2.5 inline-flex flex-grow">
            <div className="text-[#3a643b] text-base font-medium font-sans leading-[18px]">
              Pregnancy
            </div>
          </div>
          <div className="w-[154px] h-[43px] p-2.5 bg-[#f7f7fc] rounded-[19px] justify-center items-center gap-2.5 inline-flex flex-grow">
            <div className="text-[#3a643b] text-base font-medium font-sans leading-[18px]">
              Pregnancy
            </div>
          </div>
          <div className="w-[154px] h-[43px] p-2.5 bg-[#f7f7fc] rounded-[19px] justify-center items-center gap-2.5 inline-flex flex-grow">
            <div className="text-[#3a643b] text-base font-medium font-sans leading-[18px]">
              Period Doubts
            </div>
          </div>
          <div className="w-[154px] h-[43px] p-2.5 bg-[#f7f7fc] rounded-[19px] justify-center items-center gap-2.5 inline-flex flex-grow">
            <div className="text-[#3a643b] text-base font-medium font-sans leading-[18px]">
              Endometriosis
            </div>
          </div>
          <div className="w-[154px] h-[43px] p-2.5 bg-[#f7f7fc] rounded-[19px] justify-center items-center gap-2.5 inline-flex flex-grow">
            <div className="text-[#3a643b] text-base font-medium font-sans leading-[18px]">
              Pelvic Pain
            </div>
          </div>
          <div className="w-[154px] h-[43px] p-2.5 bg-[#f7f7fc] rounded-[19px] justify-center items-center gap-2.5 inline-flex flex-grow">
            <div className="text-[#3a643b] text-base font-medium font-sans leading-[18px]">
              Ovarian Cysts
            </div>
          </div>
          <div className="w-[119px] h-[42px] p-2.5 bg-[#f7f7fc]/0 rounded-[18px] border border-[#dfdfdf] justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#3a643b] text-base font-medium font-sans leading-[18px]">
              + 5 More
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-10 mb-10">
        <div className="h-[62px] w-full  pl-[30px] pr-[35.34px] py-[13px] bg-gradient-to-l from-[#fbfcfb] to-[#f4f7ec] rounded-tl-[15px] rounded-tr-[18px]  overflow-hidden">
          <div className="text-[#303030] text-base lg:text-2xl font-semibold font-sans">
            My Work Experience{" "}
          </div>
        </div>

        <div className="pt-6 px-6">
          <div className="h-[29px] relative">
            <div className=" h-[19px] left-0 top-[5px] absolute text-[#3a643b] lg:text-lg font-semibold font-sans uppercase leading-tight">
              I have been in practice for : 7+ Years
            </div>
          </div>
          <hr className="w-3/5 my-5" />
        </div>

        <div className="px-6 pb-8 justify-start items-start gap-2.5 inline-flex">
          <div className="p-3 bg-[#f7f7fc] rounded-md justify-start items-start gap-2.5 flex overflow-hidden">
            <div className="w-6 h-6 relative  overflow-hidden">
              <School size={20} color="#2b00ff" strokeWidth={0.75} />
            </div>
          </div>
          <div className="justify-center items-start gap-[49px]   flex">
            <div className="flex-col justify-start items-start gap-[9px] inline-flex">
              <div className=" text-[#333548] text-base font-medium font-sans leading-[21px]">
                Midtown Medical Clinic
              </div>
              <div className=" text-[#333548]/50 text-base font-medium font-sans leading-[21px]">
                Senior doctor
              </div>
            </div>
            <div className="  text-[#333548]/70 text-base font-normal font-sans leading-[21px]">
              2010-2015
            </div>
          </div>
        </div>
        <div className="px-6 pb-8 justify-start items-start gap-2.5 inline-flex">
          <div className="p-3 bg-[#f7f7fc] rounded-md justify-start items-start gap-2.5 flex overflow-hidden">
            <div className="w-6 h-6 relative  overflow-hidden">
              <School size={20} color="#2b00ff" strokeWidth={0.75} />
            </div>
          </div>
          <div className="justify-center items-start gap-[49px]   flex">
            <div className="flex-col justify-start items-start gap-[9px] inline-flex">
              <div className=" text-[#333548] text-base font-medium font-sans leading-[21px]">
                Midtown Medical Clinic
              </div>
              <div className=" text-[#333548]/50 text-base font-medium font-sans leading-[21px]">
                Senior doctor
              </div>
            </div>
            <div className="  text-[#333548]/70 text-base font-normal font-sans leading-[21px]">
              2010-2015
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-10 mb-10">
        <div className="h-[62px] w-full  pl-[30px] pr-[35.34px] py-[13px] bg-gradient-to-l from-[#fbfcfb] to-[#f4f7ec] rounded-tl-[15px] rounded-tr-[18px]  overflow-hidden">
          <div className="text-[#303030] text-base lg:text-2xl font-semibold font-sans">
            Featured Reviews (102)
          </div>
        </div>

        <div className="p-6">
          <div className=" px-[35px] pt-[13px] pb-[22px] bg-[#f9f9f9] rounded-[17px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div className="flex-col justify-start items-start gap-3.5 flex">
              <div className="justify-center items-center lg:gap-[114px] inline-flex flex-wrap">
                <div className="w-60 h-[65px] relative">
                  <img
                    className="w-[54px] h-14 left-0 top-[8px] absolute rounded-[40px]"
                    src="/images/d2.png"
                  />
                  <div className=" left-[62px] top-[8px] absolute">
                    <div className="left-0 top-[0.50px] absolute flex-col justify-start items-start gap-[3px] inline-flex">
                      <div className="w-[193px] text-[#2e2e2e] text-xl font-semibold font-sans">
                        Alicent Hightower
                      </div>
                      <div className="w-[171px] text-[#929292] text-base font-medium font-sans">
                        Consulted for Skin care
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[#979797] text-base font-normal font-sans leading-[18px]">
                  20 January 2023
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[5px] flex">
                <div className="h-5 justify-start items-start gap-0.5 inline-flex">
                  <div className="flex items-center ">
                    <Star fill="orange" strokeWidth={0} size={16} />
                    <Star fill="orange" strokeWidth={0} size={16} />
                    <Star fill="orange" strokeWidth={0} size={16} />
                    <Star fill="orange" strokeWidth={0} size={16} />
                  </div>
                </div>
                <div className="lg:w-[475px] text-[#2e2f2e] text-base font-normal font-sans leading-normal">
                  Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 px-[35px] pt-[13px] pb-[22px] bg-[#f9f9f9] rounded-[17px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div className="flex-col justify-start items-start gap-3.5 flex">
              <div className="justify-center items-center lg:gap-[114px] inline-flex flex-wrap">
                <div className="w-60 h-[65px] relative">
                  <img
                    className="w-[54px] h-14 left-0 top-[8px] absolute rounded-[40px]"
                    src="/images/d2.png"
                  />
                  <div className=" left-[62px] top-[8px] absolute">
                    <div className="left-0 top-[0.50px] absolute flex-col justify-start items-start gap-[3px] inline-flex">
                      <div className="w-[193px] text-[#2e2e2e] text-xl font-semibold font-sans">
                        Alicent Hightower
                      </div>
                      <div className="w-[171px] text-[#929292] text-base font-medium font-sans">
                        Consulted for Skin care
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[#979797] text-base font-normal font-sans leading-[18px]">
                  20 January 2023
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[5px] flex">
                <div className="h-5 justify-start items-start gap-0.5 inline-flex">
                  <div className="flex items-center ">
                    <Star fill="orange" strokeWidth={0} size={16} />
                    <Star fill="orange" strokeWidth={0} size={16} />
                    <Star fill="orange" strokeWidth={0} size={16} />
                    <Star fill="orange" strokeWidth={0} size={16} />
                  </div>
                </div>
                <div className="lg:w-[475px] text-[#2e2f2e] text-base font-normal font-sans leading-normal">
                  Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BioCard;
