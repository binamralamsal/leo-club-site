"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LogoUpload } from "@/components/logo-upload";
import { createClub, createRegion } from "@/services/user/actions";
import { clubSchema } from "@/validators/club.schema";
import { Textarea } from "@/components/ui/textarea";

export function AddClub({ regionId }: { regionId: string }) {
  const form = useForm<z.infer<typeof clubSchema>>({
    resolver: zodResolver(clubSchema),
    defaultValues: {
      logo: "",
      name: "",
      description: "",
      presidentEmail: "",
      presidentName: "",
      presidentPassword: "",
    },
    mode: "all",
  });
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  function onSubmit(values: z.infer<typeof clubSchema>) {
    startTransition(async () => {
      const result = await createClub({ ...values, region: regionId });

      if (result.error) toast.error(result.error);
      else {
        toast.success(result.message);
        form.reset();
        setOpen(false);
      }
    });
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="w-fit ml-auto">Add Club</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Add Club</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Club Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Fun Club" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Logo <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <LogoUpload
                        fileURL={field.value}
                        onUploadComplete={(file) => field.onChange(file)}
                        onRemove={() => field.onChange("")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Description <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={4} className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="presidentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      President&apos;s name{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="John Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="presidentEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      President&apos;s email{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@website.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="presidentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      President&apos;s password{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="XXXXXXXX"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-fit" disabled={isPending}>
                Add Club
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
