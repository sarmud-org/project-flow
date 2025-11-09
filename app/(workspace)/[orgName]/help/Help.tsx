"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Search, MessageCircle, Book, Mail } from "lucide-react";
import { toast } from "sonner";

const HelpComponent = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Message sent", {
      description: "Our team will get back to you shortly",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground">Find answers and get support</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search for help</CardTitle>
          <CardDescription>Find answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documentation..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Book className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Learn how to use ProjectFlow</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <MessageCircle className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Community</CardTitle>
            <CardDescription>Join our community forum</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Mail className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch with support</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I create a new project?
              </AccordionTrigger>
              <AccordionContent>
                Navigate to your organization dashboard and click the
                &quot;Create Project&quot; button. Fill in the project details
                and click save.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I invite team members?</AccordionTrigger>
              <AccordionContent>
                Go to your organization settings, select &quot;Team&quot; from
                the sidebar, and click &quot;Invite Member&quot;. Enter their
                email address and select their role.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I export my project data?</AccordionTrigger>
              <AccordionContent>
                Yes! You can export project data as PDF from the Client View
                page. Additional export formats are coming soon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How do I change my organization settings?
              </AccordionTrigger>
              <AccordionContent>
                Click on your organization name in the sidebar and select
                &quot;Settings&quot;. You can update organization details,
                branding, and permissions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What&apos;s the difference between phases and tasks?
              </AccordionTrigger>
              <AccordionContent>
                Phases are high-level project stages (e.g., Planning,
                Development, Testing), while tasks are specific work items
                within each phase that can be assigned to team members.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Still need help? Send us a message</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="What do you need help with?"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Describe your issue or question..."
                rows={5}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpComponent;
