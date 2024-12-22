import { Card } from "./ui/card";

const AppointmentCard = () => {
  return (
    <Card>
      <div className="w-11/12  flex items-center justify-between px-7 mx-6 my-10 py-4 bg-white rounded-[15px] shadow-[-0.4000000059604645px_-0.4000000059604645px_2.4000000953674316px_0px_rgba(166,166,166,0.25)] border border-[#e2e2e2] ">
        <div className="text-start text-black text-xl font-semibold font-sans ">
          Appointment Fee
        </div>
        <div className="text-center text-[#3a643b] text-xl font-semibold font-sans ">
          ₹699.00
        </div>
      </div>
    </Card>
  );
};

export default AppointmentCard;
