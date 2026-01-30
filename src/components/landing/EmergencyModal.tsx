import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ambulance, Droplets, Building2, Phone } from "lucide-react";

interface EmergencyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const emergencyOptions = [
  {
    icon: Ambulance,
    title: "Ambulance",
    description: "Request an emergency ambulance",
    phone: "102",
    color: "text-emergency",
    bgColor: "bg-emergency/10",
  },
  {
    icon: Droplets,
    title: "Blood Bank",
    description: "Find blood availability",
    phone: "1910",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Building2,
    title: "Nearest Hospital",
    description: "Find hospitals near you",
    phone: "108",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const EmergencyModal = ({ open, onOpenChange }: EmergencyModalProps) => {
  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-emergency">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emergency"></span>
            </span>
            Emergency Help
          </DialogTitle>
          <DialogDescription>
            Select the type of emergency assistance you need. Tap to call
            directly.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {emergencyOptions.map((option) => (
            <Button
              key={option.title}
              variant="outline"
              className="h-auto p-4 justify-start border-2 hover:border-emergency/50"
              onClick={() => handleCall(option.phone)}
            >
              <div className="flex items-center gap-4 w-full">
                <div
                  className={`w-12 h-12 ${option.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <option.icon className={`h-6 w-6 ${option.color}`} />
                </div>
                <div className="text-left flex-grow">
                  <div className="font-semibold text-foreground">
                    {option.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {option.description}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-emergency">
                  <Phone className="h-4 w-4" />
                  <span className="font-bold">{option.phone}</span>
                </div>
              </div>
            </Button>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground">
            For life-threatening emergencies, call{" "}
            <button
              onClick={() => handleCall("112")}
              className="font-bold text-emergency hover:underline"
            >
              112
            </button>{" "}
            (National Emergency Number)
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
