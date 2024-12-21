import { DoctorInterface } from "./types/DoctorInterface";

export const doctors: DoctorInterface[] = [
  {
    id: 234234234,
    name: "Dr. Bruce Willis",
    profileImage: "/images/d1.png",
    specialization: "Male/Female Infertility",
    specialist: "Gynecologist",
    followers: 850,
    following: 18000,
    posts: 250,
    feeRange: "Rs.0-Rs.500",
    bio: "Highly skilled with expertise in dysmenorrhea in pregnant women and infertility. Loves to work with my hospital staff and ensure smooth patient experience.",
    languages: ["English", "Hindi", "Telugu"],
    specializations: ["Women's Health", "Skin Care", "Immunity", "Hair Care"],
    concerns_treated: [
      "Skin Treatment",
      "Pregnancy",
      "Period Doubts",
      "Endometriosis",
      "Pelvic Pain",
      "Ovarian Cysts",
    ],
    experience: "7 years",
    experiences: [
      {
        clinic: "Midtown Medical Clinic",
        duration: "2010-2015",
      },
      {
        clinic: "Midtown Skeddice Clinic",
        duration: "2015-Present",
      },
    ],
    reviews: [
      {
        rating: 5,
        text: "Might be costly to confer with but you can see noticeable difference after the consultation.",
        date: "20 January 2023",
      },
      {
        rating: 4,
        text: "Dr. Bruce is certainly a nice person but I can't see remarkable difference after his treatment.",
        date: "20 January 2012",
      },
    ],
    appointment_fee: 699,
    appointment_slots: {
      morning: [
        "08:00 AM - 08:30 AM",
        "09:00 AM - 09:30 AM",
        "10:00 AM - 10:30 AM",
        "11:00 AM - 11:30 AM",
      ],
      evening: [
        "04:00 PM - 04:30 PM",
        "04:30 PM - 05:00 PM",
        "05:00 PM - 05:30 PM",
        "05:30 PM - 06:00 PM",
      ],
    },
    consultation_options: ["Video", "Chat", "Free"],
  },
  {
    id: 567890123,
    name: "Dr. Sophia Lily",
    profileImage: "/images/d2.png",
    specialization: "Cardiology",
    specialist: "Cardiologist",
    followers: 1200,
    following: 15000,
    posts: 180,
    feeRange: "Rs.800-Rs.1200",
    bio: "Experienced cardiologist specializing in heart failure and arrhythmias.",
    languages: ["English", "Spanish"],
    specializations: ["Cardiology", "Internal Medicine"],
    concerns_treated: [
      "Chest Pain",
      "Heart Palpitations",
      "High Blood Pressure",
    ],
    experience: "10 years",
    experiences: [
      {
        clinic: "Heartland Hospital",
        duration: "2008-2018",
      },
      {
        clinic: "St. Luke's Medical Center",
        duration: "2018-Present",
      },
    ],
    reviews: [
      {
        rating: 4.5,
        text: "Very knowledgeable and patient-oriented doctor.",
        date: "15 March 2024",
      },
      {
        rating: 5,
        text: "Highly recommend Dr. Doe for his expertise and care.",
        date: "5 July 2023",
      },
    ],
    appointment_fee: 850,
    appointment_slots: {
      morning: [
        "09:00 AM - 09:30 AM",
        "10:00 AM - 10:30 AM",
        "11:00 AM - 11:30 AM",
      ],
      evening: ["04:30 PM - 05:00 PM", "05:00 PM - 05:30 PM"],
    },
    consultation_options: ["Video", "Chat"],
  },
  {
    id: 987654321,
    name: "Dr. Jane Smith",
    profileImage: "/images/d3.png",
    specialization: "Pediatrics",
    specialist: "Pediatrician",
    followers: 950,
    following: 10000,
    posts: 200,
    feeRange: "Rs.500-Rs.800",
    bio: "Dedicated to providing compassionate and comprehensive care for children.",
    languages: ["English", "French"],
    specializations: ["Pediatrics", "Neonatal Care"],
    concerns_treated: ["Fever", "Cough", "Rashes", "Growth and Development"],
    experience: "5 years",
    experiences: [
      {
        clinic: "Children's Hospital",
        duration: "2012-2018",
      },
      {
        clinic: "Family Medical Center",
        duration: "2018-Present",
      },
    ],
    reviews: [
      {
        rating: 4,
        text: "Dr. Smith is very patient and friendly with children.",
        date: "25 June 2024",
      },
      {
        rating: 5,
        text: "Excellent doctor, highly recommended for children's health.",
        date: "10 December 2023",
      },
    ],
    appointment_fee: 700,
    appointment_slots: {
      morning: [
        "08:30 AM - 09:00 AM",
        "09:30 AM - 10:00 AM",
        "10:30 AM - 11:00 AM",
      ],
      evening: [
        "04:00 PM - 04:30 PM",
        "04:30 PM - 05:00 PM",
        "05:30 PM - 06:00 PM",
      ],
    },
    consultation_options: ["Video", "In-Person"],
  },
];
