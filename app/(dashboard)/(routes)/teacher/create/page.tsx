"use client";

import React from "react";
import * as z from "zod";
import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  useRouter();

  const { isSubmitting, isValid } = form.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What would like to name your course? Don&appos;t worry, you can change
          this later.
        </p>
        <Form {...formSchema}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
          <FormField control={form.control} name="title" render={({field}) => (
            <FormItem>
              <FormLabel>
                Course title
              </FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} placeholder="" />
              </FormControl>
              </FormItem>
          )}>

          </FormField>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
