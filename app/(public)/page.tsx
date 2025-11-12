"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Users,
  FileText,
  Zap,
  Clock,
  TrendingUp,
  Star,
  Quote,
} from "lucide-react";
import Link from "next/link";

const Index = () => {
  const testimonials = [
    {
      quote:
        "ProjectFlow transformed how we manage client projects. The visibility alone saved us countless hours.",
      author: "Sarah Chen",
      role: "Project Director at TechCorp",
      avatar: "SC",
    },
    {
      quote:
        "Finally, a tool that makes sense. Our team was up and running in minutes, not days.",
      author: "Michael Rodriguez",
      role: "Operations Manager at InnovateLabs",
      avatar: "MR",
    },
    {
      quote:
        "The client presentation feature is a game-changer. We've replaced PowerPoint entirely.",
      author: "Emily Thompson",
      role: "CEO at DesignHub",
      avatar: "ET",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 30% project time",
      description: "Eliminate status meetings and reduce admin overhead",
    },
    {
      icon: TrendingUp,
      title: "100% transparency",
      description: "Clients see real-time progress without constant updates",
    },
    {
      icon: Users,
      title: "Team alignment",
      description:
        "Everyone knows what's happening, who's responsible, and what's next",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full py-20 md:py-32 px-6 sm:px-8 lg:px-12 2xl:px-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 right-[15%] w-[25rem] md:w-[35rem] xl:w-[45rem] h-[25rem] md:h-[35rem] xl:h-[45rem] bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-[10%] w-[25rem] md:w-[35rem] xl:w-[45rem] h-[25rem] md:h-[35rem] xl:h-[45rem] bg-accent/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="mx-auto max-w-[90rem] flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm mb-8 hover:border-primary/50 transition-colors backdrop-blur-sm">
            <Zap className="mr-2 h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              Transform your project management
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Manage Projects with <br /> Clarity and Confidence
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
            From roadmaps to execution, track every phase of your projects with
            intuitive dashboards, real-time collaboration, and client-ready
            presentations that replace PowerPoint.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/signup">
              <Button
                size="lg"
                className="gap-2 group hover:scale-105 transition-transform"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-muted transition-colors"
              >
                View Demo
              </Button>
            </Link>
          </div>

          {/* Dashboard mock */}
          <div className="relative w-full max-w-7xl mx-auto mt-8">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-2xl border border-border shadow-2xl overflow-hidden bg-card backdrop-blur-md">
              <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="text-xs text-muted-foreground ml-4">
                  ProjectFlow Dashboard
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-6 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
                  {[BarChart3, Users, FileText].map((Icon, i) => (
                    <Card
                      key={i}
                      className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 opacity-90"
                    >
                      <Icon className="h-8 w-8 text-primary mb-3" />
                      <div className="h-2 bg-muted rounded mb-2" />
                      <div className="h-2 bg-muted rounded w-2/3" />
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full bg-muted/30 py-20 md:py-28 px-6 sm:px-8 lg:px-12 2xl:px-24">
        <div className="mx-auto max-w-360">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-muted-foreground text-lg">
              Powerful features to manage projects from start to finish
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[BarChart3, Users, FileText].map((Icon, i) => (
              <Card
                key={i}
                className="p-6 group hover:shadow-xl hover:-translate-y-1 transition-all border-border hover:border-primary/50"
              >
                <Icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">
                  {i === 0
                    ? "Interactive Dashboards"
                    : i === 1
                    ? "Team Collaboration"
                    : "Client Presentations"}
                </h3>
                <p className="text-muted-foreground">
                  {i === 0
                    ? "Visualize progress and performance with real-time analytics."
                    : i === 1
                    ? "Collaborate seamlessly with your entire team in one place."
                    : "Generate presentation-ready client views with live data."}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="w-full py-20 md:py-28 px-6 sm:px-8 lg:px-12 2xl:px-24">
        <div className="mx-auto max-w-360">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Drive real outcomes
            </h2>
            <p className="text-muted-foreground text-lg">
              Not just features — measurable results for your team
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card
                key={i}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full bg-muted/30 py-20 md:py-28 px-6 sm:px-8 lg:px-12 2xl:px-24">
        <div className="mx-auto max-w-360">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our customers have to say
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card
                key={i}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 md:py-28 px-6 sm:px-8 lg:px-12 2xl:px-24">
        <div className="mx-auto max-w-5xl">
          <Card className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/10 border-primary/20">
            <div className="relative p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your workflow?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join teams already using ProjectFlow to deliver projects on
                time, every time. Start your free trial today — no credit card
                required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 group">
                    Get Started Free
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                ✓ Free 14-day trial • ✓ No credit card required • ✓ Cancel
                anytime
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
