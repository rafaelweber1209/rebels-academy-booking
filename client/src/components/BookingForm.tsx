import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type Booking } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Loader } from "lucide-react";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Booking>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: Booking) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit booking",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: result.message || "Booking submitted successfully!",
      });
      reset();
    } catch (error) {
      console.error("Booking submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit booking",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto p-6 bg-slate-900 border-red-500/20">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Book Your Training</h2>
          <p className="text-slate-400">
            Fill in your details to schedule a free consultation with our coaches
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name *
            </label>
            <Input
              id="name"
              placeholder="Your full name"
              {...register("name")}
              className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register("email")}
              className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Preferred Date Field */}
          <div className="space-y-2">
            <label htmlFor="preferredDate" className="text-sm font-medium text-white">
              Preferred Date *
            </label>
            <Input
              id="preferredDate"
              type="date"
              {...register("preferredDate")}
              className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
              disabled={isSubmitting}
            />
            {errors.preferredDate && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.preferredDate.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              placeholder="Any questions or special requests..."
              {...register("message")}
              className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 resize-none"
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          {/* Status Messages */}
          {submitStatus.type === "success" && (
            <div className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded text-green-400">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}

          {submitStatus.type === "error" && (
            <div className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Book Training"
            )}
          </Button>
        </form>

        <p className="text-xs text-slate-500 text-center">
          * Required fields
        </p>
      </div>
    </Card>
  );
}
