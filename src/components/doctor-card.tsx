import { DoctorInterface } from "@/types/DoctorInterface";
import { GraduationCap, Link, MessageSquareText } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

interface Props<T> {
  doctor: T;
}
const DoctorCard = <T extends DoctorInterface>(props: Props<T>) => {
  return (
    <>
      <div className="w-[356px] mt-10 h-[561px] bg-[#fff7e2] rounded-[30px] overflow-hidden border border-solid border-[#e2e2e2]">
        <div className="inline-flex flex-col items-center gap-8 relative top-[29px] left-9">
          <div className="inline-flex flex-col items-center gap-[21px] relative flex-[0_0_auto]">
            <Image
              src={props?.doctor?.profileImage}
              alt={props?.doctor?.name}
              width={100}
              height={100}
              className=" rounded-full relative w-[149px] h-[154px]"
            />

            <div className="flex flex-col w-[289px] items-start gap-4 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Bold',Helvetica] font-bold text-[#2e2f2e] text-[32px] tracking-[-0.32px] leading-7 whitespace-nowrap">
                {props?.doctor?.name}
              </div>

              <div className="flex flex-col w-[289px] items-center justify-center gap-4 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                    <Link size={20} strokeWidth={1.25} />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#646665] text-base tracking-[-0.16px] leading-5 whitespace-nowrap">
                      {props?.doctor?.specialization}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                    <GraduationCap size={20} strokeWidth={1} />

                    <div className="relative w-fit [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#646665] text-base tracking-[-0.16px] leading-5 whitespace-nowrap">
                      {props?.doctor?.experience} of Experience
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <MessageSquareText size={20} strokeWidth={1} />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#646464] text-base tracking-[-0.16px] leading-5 whitespace-nowrap">
                      Speaks: {props?.doctor?.languages.join(", ")}
                    </div>
                  </div>
                </div>

                <div className="flex w-[289px] items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col h-[57px] items-center gap-1 pt-2 pb-4 px-2 relative flex-[0_0_auto] bg-[#fff7e2] rounded-[10px] border border-solid border-[#3a643b63]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#3c3c3c] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      Video Consultation
                    </div>

                    <div className="relative w-fit mb-[-10.00px] [font-family:'Nunito-Bold',Helvetica] font-bold text-[#3a643b] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      ₹800
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-[57px] items-center gap-1 pt-2 pb-1 px-2 relative flex-[0_0_auto] bg-[#fff7e2] rounded-[10px] border border-solid border-[#3a643b63]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#3c3c3c] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      Chat Consultation
                    </div>

                    <div className="relative w-fit [font-family:'Nunito-Bold',Helvetica] font-bold text-[#3a643b] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      Free
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[286px] items-center gap-[9px] relative flex-[0_0_auto]">
            <div className="flex w-[284px] h-[42px] items-center justify-center gap-2.5 px-[78px] py-[15px] relative bg-white rounded-lg overflow-hidden border border-solid border-[#3a643b]">
              <NextLink href={`/${props?.doctor?.id}`}>
                <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#3a643b] text-base tracking-[-0.16px] leading-5 whitespace-nowrap">
                  View Profile
                </div>
              </NextLink>
            </div>

            <div className="flex w-[287px] h-[53px] items-center justify-center gap-2.5 px-[37px] py-[15px] relative ml-[-0.50px] mr-[-0.50px] bg-[#3a643b] rounded-lg overflow-hidden">
              <div className="relative w-fit [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-white text-base tracking-[-0.16px] leading-5 whitespace-nowrap">
                Book a consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
