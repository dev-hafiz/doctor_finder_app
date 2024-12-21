export interface DoctorInterface {
  id: number;
  name: string;
  profileImage: string;
  specialization: string;
  specialist: string;
  followers: number;
  following: number;
  posts: number;
  feeRange: string;
  bio: string;
  languages: string[];
  specializations: string[];
  concerns_treated: string[];
  experience: string;
  experiences: {
    clinic: string;
    duration: string;
  }[];
  reviews: {
    rating: number;
    text: string;
    date: string;
  }[];
  appointment_fee: number;
  appointment_slots: {
    morning: string[];
    evening: string[];
  };
  consultation_options: string[];
}
