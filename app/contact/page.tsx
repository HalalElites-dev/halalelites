"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/email";
import HolographicBackground from "@/lib/bgAnimated";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // do something with the form values
    setIsLoading(true);
    setSubmitMessage("");
    try {
      const result = await sendEmail(values);
      if (result.success) {
        setSubmitMessage(
          "Message sent successfully! We'll get back to you soon."
        );
        form.reset();
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="relative bg-background py-24 px-6 ">
      <HolographicBackground variant="single"/>
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-5"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-5"></div>
        </div>

        <div className="relative text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6">
            <Mail className="h-4 w-4 text-brand-primary" />
            <span className="font-mono text-sm text-brand-primary">
              Contact Us
            </span>
          </div>
          <h1 className="text-6xl md:text-6xl font-bold mb-8 font-sans">
            Get in Touch
          </h1>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-16 justify-center md:items-start ">
          {/* Left Side */}
          <div className="space-y-8 mt-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-lg font-mono">
                <p>
                  Send us an email and let us know everything you want out of a
                  new site.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="glass-effect p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-lg font-mono uppercase tracking-wider mb-1">
                    Phone
                  </div>
                  <div className="text-lg font-mono">(770) 833-9267</div>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="glass-effect p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-lg font-mono uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <div className="md:text-lg font-mono">
                    habeeb.s@halalelites.dev
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="glass-effect p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-lg font-mono uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="text-lg font-mono">Toledo, Ohio, USA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="glass-effect rounded-2xl p-8 md:h-full">
            <h3 className="text-2xl font-bold font-mono mb-8 uppercase tracking-wider">
              Make An Appointment
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Form Fields */}
                <div className="space-y-8">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono uppercase tracking-wider">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            {...field}
                            className="px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:border-brand-primary transition-colors font-mono"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono uppercase tracking-wider">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email"
                            {...field}
                            className="px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:border-brand-primary transition-colors font-mono"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono uppercase tracking-wider">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone"
                            {...field}
                            className="px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:border-brand-primary transition-colors font-mono"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono uppercase tracking-wider">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write a message"
                            rows={6}
                            {...field}
                            className="px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:border-brand-primary transition-colors font-mono resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit message */}
                  {submitMessage && (
                    <div
                      className={`text-center p-3 rounded-lg font-mono text-sm ${
                        submitMessage.includes("successfully")
                          ? "bg-green-100 text-brand-primary"
                          : "bg-red-100 text-destructive"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                  {/* submit button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-6 rounded-lg font-mono text-md md:text-lg transition-all flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-50"
                  >
                    {isLoading ? "sending..." : "send_message"}
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
