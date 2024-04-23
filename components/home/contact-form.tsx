"use client";

import { submitCtaForm } from "@/actions/form.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomButton from "../shared/custom-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }).max(50),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(50),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  phone: z
    .string()
    .min(2, "Invalid phone number")
    .max(15, "Invalid phone number"),
  message: z.string().min(1, { message: "Message is required" }).max(250),
  lookingFor: z.string().optional(),
});

function ContactForm() {
  const [message, setMessage] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      lookingFor: "",
      message: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await submitCtaForm(values, {
      leadType: "Demo call CTA",
      recordTypeName: "Cloudprism",
    });

    console.log(response);

    form.reset();
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 5000);
  }

  return (
    <div className="w-full max-w-2xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
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
                      className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
                    />
                  </FormControl>
                  <FormMessage className="pl-4 text-xs text-red-500 md:pl-6" />
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
                      className="input-background_secondary 
                      rounded-[57px] border-[#767575]
                      px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
                    />
                  </FormControl>
                  <FormMessage className="pl-4 text-xs text-red-500 md:pl-6" />
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
                    className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
                  />
                </FormControl>
                <FormMessage className="pl-4 text-xs text-red-500 md:pl-6" />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div>
                      <PhoneInput
                        {...field}
                        className=""
                        defaultCountry="in"
                        inputClassName="input-background_primary "
                        inputStyle={{
                          width: "100%",
                          background:
                            "linear-gradient(97.49deg, #FFFFFF30 -18.1%, #1D1C1C30 109.71%)",
                          color: "white",
                          borderTopRightRadius: "57px",
                          borderBottomRightRadius: "57px",
                          padding: "20px 0",
                          borderColor: "#767575",
                          borderLeft: "none",
                        }}
                        countrySelectorStyleProps={{
                          buttonStyle: {
                            background:
                              "linear-gradient(97.49deg, #FFFFFF30 -18.1%, #1D1C1C30 109.71%)",
                            borderTopLeftRadius: "57px",
                            borderBottomLeftRadius: "57px",
                            padding: "20px 10px",
                            borderColor: "#767575",
                            borderRight: "none",
                          },
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="pl-4 text-xs text-red-500 md:pl-6" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="lookingFor"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="What are you looking for?"
                    {...field}
                    className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
                  />
                </FormControl>
                <FormMessage className="pl-4 text-xs text-red-500 md:pl-6" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Message"
                    {...field}
                    className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
                  />
                </FormControl>
                <FormMessage className="pl-4 text-xs text-red-500 md:pl-6" />
              </FormItem>
            )}
          />
          {message && (
            <p className="text-center text-sm text-green-500">
              Thanks for your submission! W&apos;ll be in touch shortly.
            </p>
          )}
          <div className="flex w-full items-center justify-center pt-4 lg:pt-6">
            <CustomButton
              disabled={form.formState.isSubmitting}
              className="rounded-3xl px-4 py-1.5"
            >
              <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Let&apos;s grow together
              </p>{" "}
            </CustomButton>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
