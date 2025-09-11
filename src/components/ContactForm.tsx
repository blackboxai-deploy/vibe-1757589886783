"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-green-600 text-2xl">✓</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-gray-600 leading-relaxed">
            Your booking inquiry has been submitted successfully. We'll get back to you within 24 hours 
            to discuss your event details and provide a customized quote.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-playfair text-center">Book Your Event</CardTitle>
        <p className="text-gray-600 text-center">
          Fill out the form below and we'll get back to you with a customized quote
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventType">Event Type *</Label>
              <Select name="eventType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding Ceremony</SelectItem>
                  <SelectItem value="cultural">Cultural Event</SelectItem>
                  <SelectItem value="corporate">Corporate Function</SelectItem>
                  <SelectItem value="private">Private Function</SelectItem>
                  <SelectItem value="religious">Religious Ceremony</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="eventDate">Event Date *</Label>
              <Input
                id="eventDate"
                name="eventDate"
                type="date"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="venue">Venue Location *</Label>
              <Input
                id="venue"
                name="venue"
                placeholder="City, State"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Expected Guests</Label>
              <Select name="guests">
                <SelectTrigger>
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50-100">50-100 guests</SelectItem>
                  <SelectItem value="100-200">100-200 guests</SelectItem>
                  <SelectItem value="200-300">200-300 guests</SelectItem>
                  <SelectItem value="300-500">300-500 guests</SelectItem>
                  <SelectItem value="500+">500+ guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Budget and Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select name="budget">
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                  <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="50k-75k">₹50,000 - ₹75,000</SelectItem>
                  <SelectItem value="75k-100k">₹75,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="100k+">₹1,00,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Performance Duration</Label>
              <Select name="duration">
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 hours</SelectItem>
                  <SelectItem value="2-4">2-4 hours</SelectItem>
                  <SelectItem value="4-6">4-6 hours</SelectItem>
                  <SelectItem value="full-day">Full Day</SelectItem>
                  <SelectItem value="multiple-days">Multiple Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Special Requirements */}
          <div className="space-y-2">
            <Label htmlFor="message">Special Requirements / Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please share any specific songs, themes, or special requirements for your event..."
              className="min-h-[120px]"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-3 text-lg"
          >
            {isSubmitting ? "Submitting Your Request..." : "Submit Booking Request"}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            * Required fields. We'll respond to your inquiry within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;