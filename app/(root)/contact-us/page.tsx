"use client";

import Image from "next/image";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/shared/custom-button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { socialLinks } from "@/constants";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "FirstName is required" }).max(50),
  lastName: z.string().min(1, { message: "LastName is required" }).max(50),
  email: z.string().email({ message: "Invalid Email" }),
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .max(12, { message: "Invalid phone number" }),
  message: z.string().min(1, { message: "Message is required" }).optional(),
});

function ContactUsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      lastName: "",
      message: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <ScrollBarProgress>
      <div
        className="w-full bg-right-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/contact-form-bg.svg')",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center text-white lg:flex-row">
          {/* left side  */}
          <div
            className="mx-2 my-32 flex flex-1 flex-col space-y-16 rounded-[19px] border-2 border-b-[#121212] border-l-[#252525] border-r-[#121212] border-t-[#252525] px-6 pb-8 pt-4 lg:my-0 lg:px-12"
            style={{
              background:
                "linear-gradient(149.64deg, rgba(25, 25, 25, 0.56) 21.24%, rgba(14, 14, 14, 0.56) 105.43%)",
              boxShadow:
                "0 0 0 0 rgba(25, 25, 25, 0.56), 0 0 0 0 rgba(14, 14, 14, 0.56)",
              backdropFilter: "blur(23px)",
            }}
          >
            <div className="flex items-center space-x-3 lg:space-x-6">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/icons/company-logo.svg"
                  width={87}
                  height={55}
                  alt="Logo icon"
                />
                <p className="text-xs">CloudPrism Solutions</p>
              </div>

              <div className="h-[55px] w-[2px] bg-white" />

              <div className="flex items-center gap-2 lg:gap-4">
                <Image
                  src="/assets/icons/saleforce.svg"
                  alt="Saleforce"
                  width={64}
                  height={48}
                />
                <p className="text-[13px]">
                  Ridge Consulting <br /> Partner
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 ">
              <h2 className="text-3xl font-bold md:text-4xl">
                Get in touch with us!
              </h2>
              <p className="text-[19px] text-[#949494]">
                Let us know more about you.
              </p>

              <div className="mt-6 w-full ">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 "
                  >
                    <div className="flex w-full  gap-x-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="input-background_primary rounded-md border-[#1D1C1C] placeholder:text-[#C3C3C3]"
                              />
                            </FormControl>
                            <FormMessage className="text-[13px] text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                placeholder="LastName"
                                {...field}
                                className="input-background_primary rounded-md border-[#1D1C1C] placeholder:text-[#C3C3C3]"
                              />
                            </FormControl>
                            <FormMessage className="text-[13px] text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              {...field}
                              className="input-background_primary rounded-md border-[#1D1C1C] placeholder:text-[#C3C3C3]"
                            />
                          </FormControl>
                          <FormMessage className="text-[13px] text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Phone"
                              {...field}
                              className="input-background_primary rounded-md
                            border-[#1D1C1C] placeholder:text-[#C3C3C3]"
                            />
                          </FormControl>
                          <FormMessage className="text-[13px] text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Message"
                              {...field}
                              className="input-background_primary rounded-md border-[#1D1C1C] placeholder:text-[#C3C3C3]"
                            />
                          </FormControl>
                          <FormMessage className="text-[13px] text-red-500" />
                        </FormItem>
                      )}
                    />

                    <CustomButton className=" rounded-3xl px-6 py-1.5 ">
                      <p className="text-lg font-semibold text-black">Submit</p>
                    </CustomButton>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          {/* right side  */}
          <div className="hidden w-full flex-1 flex-col space-y-4 px-12  lg:flex">
            <div>
              <p>Call us: +91 70045 35083</p>
              <p>Mail us: hello@cloudprism.in</p>
              <p>Website: www.cloudprism.in</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="max-w-[300px]">
                Building Name: Gera Imperium Alpha, Block Sector: Vitthal Nagar,
                Kharadi, Pune, 411014
              </p>
              <div className="mt-4 flex gap-1.5">
                {socialLinks.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <Image
                      src={item.icon}
                      alt={item.title ? item.title : "Social icons"}
                      height={25}
                      width={25}
                      className="size-5 md:size-6"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollBarProgress>
  );
}

export default ContactUsPage;
