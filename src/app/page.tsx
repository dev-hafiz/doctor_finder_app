import CategoryFilters from "@/components/category-filters";
import DoctorCard from "@/components/doctor-card";
import Searchbox from "@/components/ui/search-box";
import { doctors } from "@/doctorsData";
import { DoctorInterface } from "@/types/DoctorInterface";

export default function Home() {
  return (
    <main>
      <Searchbox />
      <CategoryFilters />

      <div className="flex justify-center mb-10">
        <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {doctors.map((doctor: DoctorInterface) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </main>
  );
}
