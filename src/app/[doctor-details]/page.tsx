"use client";
import AppointmentCard from "@/components/appointment-card";
import BioCard from "@/components/bio-card";
import ProfileCard from "@/components/profile-card";
import { doctors } from "@/doctorsData";
import { DoctorInterface } from "@/types/DoctorInterface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const [doctor, setDoctor] = useState<DoctorInterface>();
  const params = useParams();
  const id = params["doctor-details"];
  console.log(doctor);

  useEffect(() => {
    if (id) {
      const foundDoctor = doctors.find((doctor) => doctor.id === Number(id));
      setDoctor(foundDoctor);
    }
  }, [id]);

  return (
    <div>
      <ProfileCard doctor={doctor} />
      <div className="container mx-auto lg:mt-14 mt-72 px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <BioCard doctor={doctor} />
        </div>
        <div>
          <AppointmentCard doctor={doctor} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
