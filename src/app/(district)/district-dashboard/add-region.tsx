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
import { regionSchema } from "@/validators/region.schema";
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
import { createRegion } from "@/services/user/actions";

export function AddRegion() {
  const form = useForm<z.infer<typeof regionSchema>>({
    resolver: zodResolver(regionSchema),
    defaultValues: {
      coordinatorEmail: "",
      coordinatorName: "",
      coordinatorPassword: "",
      logo: "",
      name: "",
    },
    mode: "all",
  });
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  function onSubmit(values: z.infer<typeof regionSchema>) {
    startTransition(async () => {
      const result = await createRegion(values);

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
        <Button className="w-fit ml-auto">Add Region</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Add Region</SheetTitle>
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
                      Region Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="XACDS" {...field} />
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
                name="coordinatorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Coordinator&apos;s name{" "}
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
                name="coordinatorEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Coordinator&apos;s email{" "}
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
                name="coordinatorPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Coordinator&apos;s password{" "}
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
                Add Region
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
