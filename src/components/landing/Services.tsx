import { motion } from "framer-motion";
import {
  Stethoscope,
  AlertTriangle,
  Ambulance,
  TestTube,
  Scan,
  Home,
  Syringe,
  UtensilsCrossed,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import serviceDoctorConsult from "@/assets/service_doctor_consult.png";
import serviceEmergency from "@/assets/service_emergency.png";
import serviceAmbulance from "@/assets/service_ambulance_booking.png";
import serviceLabTests from "@/assets/service_lab_tests.png";
import serviceLabEquipment from "@/assets/service_lab_equipment.png";
import serviceHomeNursing from "@/assets/service_home_nursing.png";
import serviceSurgery from "@/assets/service_surgery.png";
import serviceNutrition from "@/assets/service_nutrition.png";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Consultation",
    description: "Clinic & Online visits with verified doctors",
    color: "bg-blue-500",
    image: serviceDoctorConsult,
  },
  {
    icon: AlertTriangle,
    title: "One-Tap Emergency",
    description: "Instant emergency assistance when you need it",
    color: "bg-red-500",
    image: serviceEmergency,
  },
  {
    icon: Ambulance,
    title: "Ambulance Booking",
    description: "ICU, Basic, and Trauma ambulances on demand",
    color: "bg-orange-500",
    image: serviceAmbulance,
  },
  {
    icon: TestTube,
    title: "Lab Tests & Packages",
    description: "Comprehensive diagnostic lab services",
    color: "bg-purple-500",
    image: serviceLabTests,
  },
  {
    icon: Scan,
    title: "CT / MRI / Imaging",
    description: "Advanced imaging and radiology services",
    color: "bg-indigo-500",
    image: serviceLabEquipment,
  },
  {
    icon: Home,
    title: "Home Nursing Care",
    description: "Professional nursing and elder care at home",
    color: "bg-teal-500",
    image: serviceHomeNursing,
  },
  {
    icon: Syringe,
    title: "Surgery & OT Support",
    description: "End-to-end surgical care coordination",
    color: "bg-cyan-500",
    image: serviceSurgery,
  },
  {
    icon: UtensilsCrossed,
    title: "Post-Op Nutrition",
    description: "Recovery meals and dietary planning",
    color: "bg-green-500",
    image: serviceNutrition,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary font-semibold text-xs tracking-widest uppercase mb-4 border border-blue-100">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Medical Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            We provide a 360-degree healthcare ecosystem designed around your needs, from emergency response to confident recovery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants} className="h-full">
              <Card className="group h-full border border-slate-100 bg-slate-50/50 overflow-hidden flex flex-col rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white">
                {/* Visual Header */}
                <div className={`relative h-56 w-full overflow-hidden ${service.color} opacity-[0.95]`}>
                  {/* Image Background */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

                  {/* Floating Icon Badge - Refined */}
                  <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <service.icon className="h-5 w-5 text-slate-700" />
                  </div>
                </div>

                <CardContent className="p-6 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
