import { CalendarDays, CircleCheck } from "lucide-react";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { DoctorInterface } from "@/types/DoctorInterface";
import React from "react";

interface AppointmentCardProps {
  doctor?: DoctorInterface;
}
const AppointmentCard: React.FC<AppointmentCardProps> = ({ doctor }) => {
  return (
    <Card className="mb-6">
      <div className="w-11/12  flex items-center justify-between px-7 mx-6 my-10 py-4  bg-white rounded-[15px] shadow-[-0.4000000059604645px_-0.4000000059604645px_2.4000000953674316px_0px_rgba(166,166,166,0.25)] border border-[#e2e2e2] ">
        <div className="text-start text-black text-xl font-semibold font-sans ">
          Appointment Fee
        </div>
        <div className="text-center text-[#3a643b] text-xl font-semibold font-sans ">
          ₹{doctor?.appointment_fee}
        </div>
      </div>

      <div className="mb-10 mx-8">
        <div className=" flex justify-between items-center gap-2.5 ">
          <p className="text-center text-black text-xl font-bold font-sans tracking-wide">
            Select your mode of session
          </p>
          <div className="h-[1px] w-2/4 bg-[#e2e2e2] hidden lg:block md:block"></div>
        </div>

        <div className=" my-5 justify-start flex-wrap items-start gap-[22px] inline-flex">
          <div className="pl-11 pr-[43px] pt-[21px] pb-3 bg-white rounded-[10px] border border-neutral-200 flex-col justify-end items-center gap-1 inline-flex">
            <div className="text-center text-[#1e1e1e] text-base font-['Gotham Rounded'] tracking-wide">
              In-Clinic
            </div>
            <div className="text-center text-[#606060] text-base font-normal font-['Nunito'] tracking-wide">
              45 Mins
            </div>
          </div>
          <div className="w-[172px] h-[86px] relative bg-[#f2fbf2] rounded-[10px] border border-[#3a643b]/50">
            <div className="left-[52px] top-[18px] absolute justify-start items-center gap-2 inline-flex">
              <div className="text-center text-[#3a643b] text-lg font-['Gotham Rounded'] tracking-wide">
                Video
              </div>
              <div className="w-5 h-[21px] justify-start items-start gap-2.5 flex">
                <div className="w-5 h-5  rounded-full">
                  <CircleCheck size={20} color="#3a643b" strokeWidth={2.25} />
                </div>
                <div className="w-[15px] h-[15px] px-[2.50px] pt-[3.75px] pb-[4.37px] justify-center items-center flex overflow-hidden" />
              </div>
            </div>
            <div className="left-[55px] top-[44px] absolute text-center text-[#606060] text-base font-normal font-['Nunito'] tracking-wide">
              45 Mins
            </div>
          </div>
          <div className="pl-[52px] pr-[53px] pt-5 pb-[13px] bg-white rounded-[10px] border border-neutral-200 flex-col justify-end items-center gap-1 inline-flex">
            <div className="text-center text-[#131313] text-base font-sans tracking-wide">
              Chat
            </div>
            <div className="text-center text-[#606060] text-base font-normal font-sans tracking-wide">
              10 Mins
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 mx-8">
        <div className=" flex justify-between items-center gap-2.5 ">
          <p className="text-center text-black text-xl font-bold font-sans tracking-wide">
            Pick a Time slot
          </p>
          <div className="h-[1px] w-3/5 bg-[#e2e2e2] hidden lg:block md:block"></div>
          <div className="h-[43px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-11 h-[43px] flex justify-center items-center bg-white rounded-full border border-[#8a8a8a]">
              <CalendarDays size={20} color="#3a643b" strokeWidth={2.25} />
            </div>
          </div>
        </div>

        <Card className="mt-4 rounded-2xl">
          <Carousel className="w-4/5 mx-auto">
            <CarouselContent>
              <CarouselItem className="pl-2 md:pl-4 flex py-5 flex-wrap justify-center gap-3  ">
                <div className=" h-20 flex items-center gap-6 ">
                  <div className="w-[129px] h-20 px-3  pb-2  bg-[#f1faf1] rounded-[11px] border border-[#3a643b] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-[#3a643b] text-base font-semibold font-sans tracking-tight">
                      Mon, 10 Oct
                    </div>
                    <div className="text-center text-[#818181] text-base font-bold font-sans">
                      10 slots
                    </div>
                  </div>
                  <div className="w-[129px] h-20 px-3 py-2  bg-white rounded-[11px] border border-[#e2e2e2] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-[#131313] text-base font-normal font-sans tracking-tight">
                      Tue, 11 Oct
                    </div>
                    <div className="text-center text-[#d5512e] text-base font-bold font-sans">
                      02 slots{" "}
                    </div>
                  </div>
                  <div className="w-[129px] h-20 px-3 py-2  bg-white rounded-[11px] border border-[#e2e2e2] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-[#0d0d0d] text-base font-normal font-sans tracking-tight">
                      Wed, 12 Oct
                    </div>
                    <div className="text-center text-[#f0b83a] text-base font-bold font-sans">
                      05 slots{" "}
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 flex py-5 flex-wrap justify-center gap-3  ">
                <div className=" h-20 flex items-center gap-6 ">
                  <div className="w-[129px] h-20 px-3  pb-2  bg-[#f1faf1] rounded-[11px] border border-[#3a643b] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-[#3a643b] text-base font-semibold font-sans tracking-tight">
                      Mon, 13 Oct
                    </div>
                    <div className="text-center text-[#818181] text-base font-bold font-sans">
                      10 slots
                    </div>
                  </div>
                  <div className="w-[129px] h-20 px-3 py-2  bg-white rounded-[11px] border border-[#e2e2e2] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-[#131313] text-base font-normal font-sans tracking-tight">
                      Tue, 14 Oct
                    </div>
                    <div className="text-center text-[#d5512e] text-base font-bold font-sans">
                      02 slots{" "}
                    </div>
                  </div>
                  <div className="w-[129px] h-20 px-3 py-2  bg-white rounded-[11px] border border-[#e2e2e2] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-[#0d0d0d] text-base font-normal font-sans tracking-tight">
                      Wed, 15 Oct
                    </div>
                    <div className="text-center text-[#f0b83a] text-base font-bold font-sans">
                      05 slots{" "}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Card>
      </div>

      <div className="mb-10 mx-8">
        <div className=" flex justify-between items-center gap-2.5 ">
          <p className="text-center text-black text-xl font-bold font-sans tracking-wide">
            Morning
          </p>
        </div>

        <div className=" my-6 justify-start flex-wrap items-start gap-6 inline-flex">
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            09:00 AM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            09:30 AM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            10:00 AM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            10:15 AM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            10:30 AM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl bg-[#3A643B] text-white"
          >
            11:00 AM
          </Button>
        </div>
      </div>
      <div className="mb-10 mx-8">
        <div className=" flex justify-between items-center gap-2.5 ">
          <p className="text-center text-black text-xl font-bold font-sans tracking-wide">
            Evening
          </p>
        </div>

        <div className=" my-6 justify-start flex-wrap items-start gap-6 inline-flex">
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            04:00 PM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            04:30 PM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            04:45 PM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            05:00 pM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl hover:bg-[#3A643B] hover:text-white"
          >
            05:15 PM
          </Button>
          <Button
            variant="outline"
            className=" py-6 px-8 rounded-xl bg-[#3A643B] text-white"
          >
            05:30 PM
          </Button>
        </div>
      </div>

      <div className="mb-10 mx-8 flex justify-center items-center">
        <Button className="bg-[#3A643B] w-full text-white hover:bg-[#2A542B] px-10 py-6 text-lg">
          Book an Appointment
        </Button>
      </div>
    </Card>
  );
};

export default AppointmentCard;
