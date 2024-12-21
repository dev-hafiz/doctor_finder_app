"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useState } from "react";

const CategoryFilters = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(
    null
  );
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedFees, setSelectedFees] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  console.log("selectedExpertise", selectedExpertise);
  console.log("selectedGender", selectedGender);
  console.log("selectedFees", selectedFees);
  console.log("selectedLanguage", selectedLanguage);

  const handleExpertiseSelect = (value: string) => {
    setSelectedExpertise(value);
  };
  const handleGenderSelect = (value: string) => {
    setSelectedGender(value);
  };
  const handleFeesSelect = (value: string) => {
    setSelectedFees(value);
  };
  const handleLanguageSelect = (value: string) => {
    setSelectedLanguage(value);
  };

  return (
    <main className="relative ">
      <div className="pl-56 lg:pl-0 lg:flex  justify-center items-center gap-10 my-6 border-b-[1px] pb-5">
        <div className="mb-4 lg:mb-0">
          <Select onValueChange={handleExpertiseSelect}>
            <SelectTrigger className="w-[180px] bg-gray-100 py-3">
              <SelectValue placeholder="Expertise" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Hair Care">Hair care </SelectItem>
              <SelectItem value="Immunity">Immunity</SelectItem>
              <SelectItem value="Skin Care">Skin Care</SelectItem>
              <SelectItem value="Women's health">Women’s health</SelectItem>
              <SelectItem value="Men's health">Men’s health</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4 lg:mb-0">
          <Select onValueChange={handleGenderSelect}>
            <SelectTrigger className="w-[180px] bg-gray-100 py-3">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male </SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4 lg:mb-0">
          <Select onValueChange={handleFeesSelect}>
            <SelectTrigger className="w-[180px] bg-gray-100 py-3">
              <SelectValue placeholder="Fees" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Rs.0-Rs.500 ">Rs.0-Rs.500 </SelectItem>
              <SelectItem value="Rs.500-Rs.1000">Rs.500-Rs.1000</SelectItem>
              <SelectItem value="Rs.1000-Rs.2000">Rs.1000-Rs.2000</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4 lg:mb-0">
          <Select onValueChange={handleLanguageSelect}>
            <SelectTrigger className="w-[180px] bg-gray-100 py-3">
              <SelectValue placeholder="Languages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Hindi">Hindi </SelectItem>
              <SelectItem value="Bengali">Bengali</SelectItem>
              <SelectItem value="English">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4 lg:mb-0">
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-100 py-3">
              <SelectValue placeholder="All filters" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Expertise </SelectItem>
              <SelectItem value="600">Gender</SelectItem>
              <SelectItem value="1100">Fees</SelectItem>
              <SelectItem value="1100">Languages</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" lg:flex gap-16  mr-24 absolute right-40">
        {selectedExpertise && (
          <div className="bg-[#EAF2EA] py-2 px-6 mb-4 lg:mb-0 rounded-full flex items-center gap-2">
            <p className="text-base">{selectedExpertise}</p>{" "}
            <X size={20} strokeWidth={1.5} />
          </div>
        )}
        {selectedGender && (
          <div className="bg-[#EAF2EA] py-2 mb-4 lg:mb-0 px-6 rounded-full flex items-center gap-2">
            <p className="text-base">{selectedGender}</p>{" "}
            <X size={20} strokeWidth={1.5} />
          </div>
        )}
        {selectedFees && (
          <div className="bg-[#EAF2EA] py-2 px-6 mb-4 lg:mb-0 rounded-full flex items-center gap-2">
            <p className="text-base">{selectedFees}</p>{" "}
            <X size={20} strokeWidth={1.5} />
          </div>
        )}
        {selectedLanguage && (
          <div className="bg-[#EAF2EA] py-2 px-6 mb-4 lg:mb-0 rounded-full flex items-center gap-2">
            <p className="text-base">{selectedLanguage}</p>{" "}
            <X size={20} strokeWidth={1.5} />
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryFilters;
