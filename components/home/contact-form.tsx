"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CustomButton from "../shared/custom-button";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is requires" }).max(50),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(50),
  email: z.string().email({ message: "Email is invalid" }),
  countryCode: z.string().min(1, { message: "Invalid country code" }).max(3),
  phone: z.string().min(1, { message: "Phone No is invalid" }).max(12),
  message: z.string().min(1, { message: "Message is required" }).max(250),
  lookingFor: z.string().optional(),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                      className="input-background_secondary 
                      rounded-[57px] border-[#767575]
                      px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
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
                    className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Country code"
                      {...field}
                      className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
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
                      className="input-background_secondary 
                      rounded-[57px] border-[#767575]
                      px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
                    />
                  </FormControl>{" "}
                  <FormMessage className="text-xs text-red-500" />
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
                  <Input
                    placeholder="Message"
                    {...field}
                    className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#C3C3C3] lg:py-6"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex w-full items-center justify-center pt-4 lg:pt-6">
            <CustomButton className="rounded-3xl px-4 py-1.5">
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
