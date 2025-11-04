"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contactcard = () => {
  const [formData, setFormData] = useState({
    yourname: "",
    phone: "",
    email: "",
    interest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, interest: value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ yourname, phone, email, interest }),
  });

  const data = await res.json();
  if (data.success) {
    alert("Form submitted successfully!");
  } else {
    alert("Error: " + data.message || data.error);
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap lg:flex-nowrap items-center min-h-[220px] mx-auto bg-(--color-bland-25) rounded-2xl px-8 py-6 shadow-lg transition-shadow duration-300 z-0 border border-[#0000000f] gap-8 md:gap-4 max-w-[80%]"
    >
      <div className="flex  flex-col justify-start gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="yourname"
          value={formData.yourname}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border border-gray-300 focus-visible:ring-0 focus-visible:outline-none focus:border-gray-400 placeholder:text-gray-400 placeholder:text-[13px]"
        />
      </div>

      <div className="flex  flex-col justify-start gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone no"
          className="border border-gray-300 focus-visible:ring-0 focus-visible:outline-none focus:border-gray-400 placeholder:text-gray-400 placeholder:text-[13px]"
        />
      </div>

      <div className="flex  flex-col justify-start gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="border border-gray-300 focus-visible:ring-0 focus-visible:outline-none focus:border-gray-400 placeholder:text-gray-400 placeholder:text-[13px]"
        />
      </div>

      <div className="flex  flex-col justify-start gap-2 flex-1">
        <Label>You're Interested In</Label>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-400 w-full">
            <SelectValue placeholder="Select a field" />
          </SelectTrigger>
          <SelectContent className="bg-white border-0">
            <SelectGroup>
              <SelectLabel>Select your future job</SelectLabel>
              <SelectItem value="Construction">Construction</SelectItem>
              <SelectItem value="Labour work">Labour work</SelectItem>
              <SelectItem value="Plumber">Plumber</SelectItem>
              <SelectItem value="Hair salon">Hair salon</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5">
        <Button
          type="submit"
          className="px-5 py-5 bg-(--primary-color) text-white rounded-[32px] text-base font-light leading-[150%] cursor-pointer hover:scale-95 border border-(--primary-color)"
        >
          Register Now
        </Button>
      </div>
    </form>
  );
};

export default Contactcard;
