import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Users,
  FileText,
  Rocket,
  Shield,
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative container py-20 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div
          className={`mx-auto flex max-w-6xl flex-col items-center text-center transition-all duration-1000 ${"opacity-100 translate-y-0"}`}
        >
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm mb-8 hover:border-primary/50 transition-colors">
            <Zap className="mr-2 h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              Transform your project management
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-linear-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Manage Projects with
            <br />
            Clarity and Confidence
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
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

          {/* Mock dashboard preview */}
          <div className="relative w-full max-w-5xl mx-auto mt-8">
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-xl border border-border shadow-2xl overflow-hidden bg-card backdrop-blur-sm">
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
              <div className="aspect-video bg-linear-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-8">
                <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                  {[BarChart3, Users, FileText].map((Icon, i) => (
                    <Card
                      key={i}
                      className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
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

      {/* Features Section */}
      <section className="container py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-muted-foreground text-lg">
              Powerful features to manage projects from start to finish
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border hover:border-primary/50">
              <BarChart3 className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">
                Interactive Dashboards
              </h3>
              <p className="text-muted-foreground">
                Real-time analytics and charts to visualize project progress,
                velocity, and team performance.
              </p>
            </Card>
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border hover:border-primary/50">
              <Users className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Assign tasks, track progress, and communicate seamlessly with
                your entire team in one place.
              </p>
            </Card>
            <Card className="p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border hover:border-primary/50">
              <FileText className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">
                Client Presentations
              </h3>
              <p className="text-muted-foreground">
                Generate beautiful, presentation-ready views that replace
                PowerPoint with live data.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Drive real outcomes</h2>
            <p className="text-muted-foreground text-lg">
              Not just features — measurable results for your team
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Testimonials Section */}
      <section className="container py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our customers have to say
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* How it Works Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for modern teams</h2>
            <p className="text-muted-foreground text-lg">
              Simple workflow, powerful results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Plan your roadmap</h4>
                  <p className="text-muted-foreground">
                    Organize phases and tasks visually with intuitive
                    drag-and-drop
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Track in real-time</h4>
                  <p className="text-muted-foreground">
                    See changes instantly as your team updates tasks and
                    milestones
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Present with confidence
                  </h4>
                  <p className="text-muted-foreground">
                    Share beautiful client views with live data and rich
                    analytics
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Deliver on time</h4>
                  <p className="text-muted-foreground">
                    Track velocity, burndown, and resource allocation to stay on
                    target
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg blur-2xl opacity-50" />
              <div className="relative bg-linear-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-border">
                <div className="aspect-square bg-card rounded-lg shadow-2xl flex items-center justify-center">
                  <Shield className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/10 border-primary/20">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
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
