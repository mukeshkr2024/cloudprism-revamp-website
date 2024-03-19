"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import CustomButton from "../shared/custom-button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#767575] lg:py-6"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="input-background_secondary 
                      rounded-[57px] border-[#767575]
                      px-5 text-white placeholder:text-[#767575] lg:py-6"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    {...field}
                    className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#767575] lg:py-6"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Country code"
                      {...field}
                      className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#767575] lg:py-6"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Phone No"
                      {...field}
                      className="input-background_secondary 
                      rounded-[57px] border-[#767575]
                      px-5 text-white placeholder:text-[#767575] lg:py-6"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="What are you looking for?"
                    {...field}
                    className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#767575] lg:py-6"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Message"
                    {...field}
                    className="input-background_secondary 
                    rounded-[57px] border-[#767575]
                    px-5 text-white placeholder:text-[#767575] lg:py-6"
                  />
                </FormControl>
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
