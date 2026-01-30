import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface EarlyAccessModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    triggerLabel?: string;
    Trigger?: React.ReactNode;
}

export const EarlyAccessModal = ({ open, onOpenChange }: EarlyAccessModalProps) => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            onOpenChange(false);
            toast({
                title: "You're on the list!",
                description: "We'll notify you as soon as early access opens.",
            });
            setFormData({ name: "", phone: "", email: "" });
        }, 1500);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Get Early Access
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2">
                        Nova Health Solutions is currently in private beta. Join the waitlist to get exclusive access.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                    <Input
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-11"
                    />
                    <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-11"
                    />
                    <Input
                        type="email"
                        placeholder="Email Address (Optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-11"
                    />

                    <Button type="submit" className="w-full h-12 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                        {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};
