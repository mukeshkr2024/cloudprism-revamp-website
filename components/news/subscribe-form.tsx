"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import CustomButton from "../shared/custom-button";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
});

export const SubscribeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = () => {};

  return (
    <div className="flex h-[500px] items-center justify-center  md:h-[650px]">
      <div
        style={{
          backgroundImage:
            "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
        }}
        className="flex h-[385px] w-full max-w-7xl flex-col items-center justify-center gap-4 rounded-lg border-[#2E2E2E] px-2"
      >
        <h3 className="h1_bold !text-[#DDDDDD] xl:!text-7xl">
          Subscribe Newsletter
        </h3>
        <p className="text-center text-base font-light text-white md:text-xl">
          You will never miss our podcasts latest news etc. Our newsletter is
          once a week, every Thrusday.
        </p>

        <div className="mt-4 max-w-3xl md:mt-10">
          <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="yourmail@gmail.com"
                          {...field}
                          className="h-[42px] w-[220px] rounded-e-none rounded-s-3xl border-[#555555] px-3 placeholder:text-lg placeholder:font-normal placeholder:text-[#4A4A4A] md:h-[48px] md:w-[440px]"
                          style={{
                            background:
                              "linear-gradient(149.64deg, rgba(25, 25, 25, 0.56) 21.24%, rgba(14, 14, 14, 0.56) 105.43%);",
                          }}
                        />
                      </FormControl>
                      <FormMessage className="pl-4 text-xs text-red-500 md:pl-6" />
                    </FormItem>
                  )}
                />
                <CustomButton
                  disabled={form.formState.isSubmitting}
                  className="h-[42px] rounded-e-3xl px-6 py-1.5 md:h-[48px]"
                >
                  <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    Subscribe
                  </p>{" "}
                </CustomButton>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
