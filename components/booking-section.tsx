"use client";

import type React from "react";
import { /*  useState, */ useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { /*  Upload, */ MessageCircle } from "lucide-react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export function BookingSection() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   description: "",
  // });

  useEffect(() => {
    createChat({
      webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "",
      target: "#n8n-chat",
      mode: "window", // You can change to "fullscreen" if needed
      initialMessages: [
        "Hi there! 👋 Thanks for reaching out to Brison's Moving & Junk Removal. How can we assist you today?",
      ],
    });
  }, []);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   alert("Thank you! We'll follow up to confirm details and send a quote.");
  // };
  //
  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600">
            Ready to get started? Contact us for a personalized quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Chat Option */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Quick Chat Quote</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Get an instant quote by chatting with us about your needs. Fast,
                easy, and personalized.
              </p>
              {/* <Button className="bg-red-600 hover:bg-red-700 text-white w-full"> */}
              {/*   Start Chat */}
              {/* </Button> */}
            </CardContent>
          </Card>

          {/* Manual Form */}
          {/* <Card className="hover:shadow-lg transition-shadow"> */}
          {/*   <CardHeader className="text-center"> */}
          {/*     <CardTitle className="text-2xl">Request Quote Form</CardTitle> */}
          {/*   </CardHeader> */}
          {/*   <CardContent> */}
          {/*     <form onSubmit={handleSubmit} className="space-y-4"> */}
          {/*       <div> */}
          {/*         <Label htmlFor="name">Full Name *</Label> */}
          {/*         <Input */}
          {/*           id="name" */}
          {/*           name="name" */}
          {/*           type="text" */}
          {/*           required */}
          {/*           value={formData.name} */}
          {/*           onChange={handleInputChange} */}
          {/*           className="mt-1" */}
          {/*         /> */}
          {/*       </div> */}
          {/**/}
          {/*       <div> */}
          {/*         <Label htmlFor="phone">Phone Number *</Label> */}
          {/*         <Input */}
          {/*           id="phone" */}
          {/*           name="phone" */}
          {/*           type="tel" */}
          {/*           required */}
          {/*           value={formData.phone} */}
          {/*           onChange={handleInputChange} */}
          {/*           className="mt-1" */}
          {/*         /> */}
          {/*       </div> */}
          {/**/}
          {/*       <div> */}
          {/*         <Label htmlFor="email">Email Address *</Label> */}
          {/*         <Input */}
          {/*           id="email" */}
          {/*           name="email" */}
          {/*           type="email" */}
          {/*           required */}
          {/*           value={formData.email} */}
          {/*           onChange={handleInputChange} */}
          {/*           className="mt-1" */}
          {/*         /> */}
          {/*       </div> */}
          {/**/}
          {/*       <div> */}
          {/*         <Label htmlFor="description">Job Description *</Label> */}
          {/*         <Textarea */}
          {/*           id="description" */}
          {/*           name="description" */}
          {/*           required */}
          {/*           value={formData.description} */}
          {/*           onChange={handleInputChange} */}
          {/*           placeholder="Please describe what you need help with (moving, junk removal, cleanout, etc.)" */}
          {/*           className="mt-1" */}
          {/*           rows={4} */}
          {/*         /> */}
          {/*       </div> */}
          {/**/}
          {/*       <div> */}
          {/*         <Label htmlFor="photos">Photos (Optional)</Label> */}
          {/*         <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-400 transition-colors"> */}
          {/*           <div className="space-y-1 text-center"> */}
          {/*             <Upload className="mx-auto h-12 w-12 text-gray-400" /> */}
          {/*             <div className="flex text-sm text-gray-600"> */}
          {/*               <label */}
          {/*                 htmlFor="file-upload" */}
          {/*                 className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500" */}
          {/*               > */}
          {/*                 <span>Upload photos</span> */}
          {/*                 <input */}
          {/*                   id="file-upload" */}
          {/*                   name="file-upload" */}
          {/*                   type="file" */}
          {/*                   className="sr-only" */}
          {/*                   multiple */}
          {/*                   accept="image/*" */}
          {/*                 /> */}
          {/*               </label> */}
          {/*               <p className="pl-1">or drag and drop</p> */}
          {/*             </div> */}
          {/*             <p className="text-xs text-gray-500"> */}
          {/*               PNG, JPG, GIF up to 10MB */}
          {/*             </p> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/**/}
          {/*       <Button */}
          {/*         type="submit" */}
          {/*         className="w-full bg-red-600 hover:bg-red-700 text-white" */}
          {/*       > */}
          {/*         Request Quote */}
          {/*       </Button> */}
          {/*     </form> */}
          {/**/}
          {/*     <p className="text-sm text-gray-500 mt-4 text-center"> */}
          {/*       * We'll follow up to confirm details and send a quote within 24 */}
          {/*       hours. */}
          {/*     </p> */}
          {/*   </CardContent> */}
          {/* </Card> */}
        </div>
      </div>

      {/* Chat Widget Target */}
      <div id="n8n-chat" className="fixed bottom-4 right-4" />
    </section>
  );
}
