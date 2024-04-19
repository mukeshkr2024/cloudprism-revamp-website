"use client";

import Image from "next/image";
import React, { useState } from "react";
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
import { submitCtaForm } from "@/actions/form.actions";
import InputPhone from "@/components/ui/phone-input";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }).max(50),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(50),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  // phone: z
  //   .string()
  //   .min(10, { message: "Invalid phone number" })
  //   .max(12, { message: "Invalid Phone number" })
  //   .refine((value) => /^\d{10}$/.test(value), {
  //     message: "Invalid Phone Number format",
  //   }),
  phone: z
    .string()
    .min(12, "Invalid phone number")
    .max(15, "Invalid phone number"),
  message: z.string().min(1, { message: "Message is required" }).max(250, {
    message: "Message can be up to 250 characters",
  }),
});

function ContactUsPage() {
  const [message, setMessage] = useState(false);
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await submitCtaForm(values, {
      leadType: "Contact Us CTA",
      recordTypeName: "Cloudprism",
    });

    console.log("response", response);

    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 6000);
    form.reset();
  }

  return (
    <ScrollBarProgress>
      <div
        className="mx-auto w-full max-w-[95rem] bg-right-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/contact-form-bg.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-white md:min-h-screen lg:flex-row">
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
            <div className="flex w-full flex-col space-y-4 ">
              {message && (
                <p className="text-sm text-green-500 ">
                  Thanks for your submission! We&apos;ll be in touch shortly.
                </p>
              )}
              <h3 className="mt-10 text-3xl font-bold md:mt-14 md:text-4xl">
                Get in touch with us!
              </h3>
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
                            <FormMessage className="pl-4 text-[13px] text-red-500 " />
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
                            <FormMessage className="pl-4 text-[13px] text-red-500 " />
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
                          <FormMessage className="pl-4 text-[13px] text-red-500 " />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <InputPhone
                              value={field.value}
                              onChange={field.onChange}
                              ref={field.ref}
                              name={field.name}
                              disabled={field.disabled}
                              onBlur={field.onBlur}
                            />
                          </FormControl>
                          <FormMessage className="pl-4 text-[13px] text-red-500 " />
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
                          <FormMessage className="pl-4 text-[13px] text-red-500 " />
                        </FormItem>
                      )}
                    />
                    <div className="flex items-center gap-x-4">
                      <CustomButton className=" rounded-3xl px-6 py-1.5 ">
                        <p className="text-lg font-semibold text-black">
                          Submit
                        </p>
                      </CustomButton>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          <div className="hidden w-full flex-1 flex-col space-y-4 px-12  lg:flex">
            <div>
              <p>Call us: +91 83295 53438</p>
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
