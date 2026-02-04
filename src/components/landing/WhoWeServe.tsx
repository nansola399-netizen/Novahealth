import { motion } from "framer-motion";
import { Users, Stethoscope, Building2, Siren } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const userCategories = [
  {
    icon: Users,
    title: "Patients & Families",
    description:
      "Access quality healthcare for yourself and your loved ones with ease",
  },
  {
    icon: Stethoscope,
    title: "Doctors & Clinics",
    description:
      "Join our network of verified healthcare providers and reach more patients",
  },
  {
    icon: Building2,
    title: "Hospitals & Diagnostics",
    description:
      "Partner with us to offer your services to a wider audience",
  },
  {
    icon: Siren,
    title: "Emergency Providers",
    description:
      "Be part of our emergency response network and save lives",
  },
];

import { MedicalBackground } from "../ui/MedicalBackground";

export const WhoWeServe = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <MedicalBackground variant="section-light" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nova Health Solutions connects all stakeholders in the healthcare
            ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
