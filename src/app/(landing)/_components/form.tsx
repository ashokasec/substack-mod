"use client";

import { z } from "zod";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { bricolage } from "@/lib/fonts";
import { saveEmailAction } from "../action";
import { useServerAction } from "zsa-react";

const EmailForm = () => {
  const { execute, isPending } = useServerAction(saveEmailAction);
  const [hasJoined, setHasJoined] = useState(false);
  const [savedEmail, setSavedEmail] = useState("");

  const formSchema = z.object({
    email: z.string().email(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: savedEmail,
    },
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("waitlistData") || "{}");
    if (storedData?.hasJoined) {
      setHasJoined(true);
      setSavedEmail(storedData.email || "");
      form.setValue("email", storedData.email || "");
    }
  }, [form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await execute({
      email: values.email,
    });
    if (response) {
      setHasJoined(true);
      setSavedEmail(values.email);
      localStorage.setItem(
        "waitlistData",
        JSON.stringify({ hasJoined: true, email: values.email })
      );
      toast.success("Successfully Joined Waitlist");
    } else {
      toast.error("Something went wrong.");
    }
  }

  return (
    <div className="max-w-md mx-auto space-y-6 scale-95 md:scale-100">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative animate-slide-up space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="your-name@example.com"
                    className="w-full text-base text-black focus-visible:ring-blue-500 px-6 py-6 bg-white/5 border border-blue-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-500 disabled:opacity-70"
                    style={bricolage.style}
                    {...field}
                    disabled={isPending || hasJoined}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6 text-[15px] rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-blue-500/20 disabled:opacity-90 !mt-2"
            disabled={isPending || hasJoined}
          >
            {hasJoined ? (
              "You're already joined"
            ) : (
              <>{isPending ? "Submitting Email" : "Join the waitlist"}</>
            )}
            {!isPending && <ArrowRight size={20} />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EmailForm;
