"use client";

import { PopupFormContext } from "@/context/form-context";
import React, { useContext, useEffect } from "react";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import CustomButton from "../shared/custom-button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { socialLinks } from "@/constants";
import Link from "next/link";

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

const DemoFormPopup: React.FC = () => {
  const { setShowPopup, showPopup } = useContext(PopupFormContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  if (!showPopup) return null;

  return (
    <div className="fixed left-0 top-0 z-50 flex size-full items-center justify-center">
      <div className="background_primary flex w-[1100px] rounded-md">
        <div className="relative flex-1 px-6 py-8">
          <div
            className="w-full rounded-lg border-2  border-b-[#121212] border-l-[#252525] border-r-[#121212] border-t-[#252525]  px-6 py-8"
            style={{
              background:
                "linear-gradient(149.64deg, rgba(25, 25, 25, 0.56) 21.24%, rgba(14, 14, 14, 0.56) 105.43%)",
              boxShadow:
                "0 0 0 0 rgba(25, 25, 25, 0.56), 0 0 0 0 rgba(14, 14, 14, 0.56)",
              backdropFilter: "blur(23px)",
            }}
          >
            <div
              className="absolute right-4 top-4 cursor-pointer rounded-full lg:hidden"
              onClick={() => setShowPopup(false)}
            >
              <Image src="/assets/icons/x.svg" alt="x" width={15} height={15} />
            </div>

            <div className="mt-4 flex w-full flex-col text-white">
              <h2 className="text-3xl font-bold">
                Ready to bring your ideas to life?
              </h2>
              <p className="mt-1 text-base text-[#949494]">
                Schedule a call with our consultants for personalized guidance
                and <br /> realization.
              </p>
              <div className="mt-6 w-full">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-2"
                  >
                    <div className="flex w-full gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="input-background_secondary rounded-[6px] border-none px-5 text-white placeholder:text-[#C3C3C3] lg:py-1.5"
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
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
                                placeholder="Last Name"
                                {...field}
                                className="input-background_secondary rounded-[6px] border-none px-5 text-white placeholder:text-[#C3C3C3] lg:py-1.5"
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Email Address"
                              {...field}
                              className="input-background_secondary rounded-[6px] border-none px-5 text-white placeholder:text-[#C3C3C3] lg:py-1.5"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Phone No"
                              {...field}
                              className="input-background_secondary rounded-[6px] border-none px-5 text-white placeholder:text-[#C3C3C3] lg:py-1.5"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
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
                              className="input-background_secondary rounded-[6px] border-none px-5 text-white placeholder:text-[#C3C3C3] lg:py-1.5"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />
                    <div className="pt-1">
                      <CustomButton className="rounded-3xl px-4 py-1.5">
                        <p className="text-[19px] font-semibold text-black">
                          Submit
                        </p>
                      </CustomButton>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative hidden rounded-md bg-cover bg-center lg:block lg:w-[40%]"
          style={{
            backgroundImage: "url('/assets/images/home-form-bg.svg')",
          }}
        >
          <div
            className="absolute right-4 top-4 cursor-pointer rounded-full"
            onClick={() => setShowPopup(false)}
          >
            <Image src="/assets/icons/x.svg" alt="x" width={22} height={22} />
          </div>

          <div
            className="flex size-full items-end  py-8 text-white
          "
          >
            <div className="flex w-full max-w-xs flex-col gap-y-1.5  text-[17px] font-normal">
              <p>Call us: +91 70045 35083</p>
              <p>Mail us: hello@cloudprism.in</p>
              <p>Website: www.cloudprism.in</p>
              <p className="mt-6">
                Building Name: Gera Imperium Alpha, Block Sector: Vitthal Nagar,
                Kharadi, Pune, 411014
              </p>
              <div className="mb-6 mt-2 flex gap-1.5">
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
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoFormPopup;
