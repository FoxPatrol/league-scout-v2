"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  summonerName: z.string(),
  tagLine: z.string(),
});

export function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      summonerName: "",
      tagLine: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.tagLine.startsWith("#")) {
      values.tagLine = values.tagLine.substring(1);
    }

    console.log(values);
  }

  return (
    <div className="flex flex-col gap-2 justify-center align-middle">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-row gap-1 items-end"
        >
          <FormField
            control={form.control}
            name="summonerName"
            render={({ field }) => (
              <FormItem className="flex-1 flex-grow">
                <FormLabel>Summoner Name</FormLabel>
                <FormControl>
                  <Input placeholder="Hide on bush" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tagLine"
            render={({ field }) => (
              <FormItem className="flex-shrink">
                <FormLabel>Tag Line</FormLabel>
                <FormControl>
                  <Input placeholder="KR1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <ArrowRight />
          </Button>
        </form>
      </Form>
    </div>
  );
}
