"use client";

import { TrashCanIcon } from "@repo/icons-limestone/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui-react/accordion";
import { Button } from "@repo/ui-react/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui-react/carousel";
import { Checkbox } from "@repo/ui-react/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui-react/dialog";
import { Input } from "@repo/ui-react/input";
import { Label } from "@repo/ui-react/label";
import { RadioGroup, RadioGroupItem } from "@repo/ui-react/radio-group";
import { ScrollArea } from "@repo/ui-react/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui-react/select";
import { Separator } from "@repo/ui-react/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui-react/sheet";
import { Switch } from "@repo/ui-react/switch";

export default function Page(): JSX.Element {
  return (
    <main className="container py-4">
      <p className="text-3xl font-bold">Turborepo + shadcn + tailwind + fetch and build scripts</p>
      <div className="flex flex-col gap-12 py-12">
        <div className="flex gap-4">
          <Button>Hi there!</Button>
          <Button size="lg">Large!</Button>
          <Button size="sm">Small!</Button>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-700">
            Small w/ custom styles
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive" size="lg" className="group">
            <TrashCanIcon size="sm" className="group-hover:animate-spin" />
            Destructive
          </Button>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator />
        <div>
          <Switch />
        </div>
        <div className="max-w-screen-sm">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion fan?</AccordionTrigger>
              <AccordionContent>Yes. You are an accordion fan.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <div className="max-w-screen-sm">
          <Input placeholder="Your username" />
        </div>
        <div className="max-w-screen-sm px-12">
          <Carousel>
            <CarouselPrevious />
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4">
                <span className="flex aspect-video items-center justify-center bg-primary text-4xl text-white">
                  1
                </span>
              </CarouselItem>
              <CarouselItem className="pl-4">
                <span className="flex aspect-video items-center justify-center bg-secondary text-4xl text-white">
                  2
                </span>
              </CarouselItem>
              <CarouselItem className="pl-4">
                <span className="flex aspect-video items-center justify-center bg-orange-500 text-4xl text-white">
                  3
                </span>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
        <div className="max-w-screen-sm">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="lg">
                Open a sidebar
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  <div>
                    This action cannot be undone. This will permanently delete your account and remove your
                    data from our servers.
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive">Open a dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your account and remove
                          your data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="max-w-screen-sm">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="max-w-screen-sm">
          <ScrollArea className="h-24 max-w-screen-sm rounded-xl border">
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
            <p>Scroll area demo text</p>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
