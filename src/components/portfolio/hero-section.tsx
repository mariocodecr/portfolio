"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data";
import { gsap } from "gsap";
import { usePerformance } from "@/components/optimizations/performance-provider";

export function HeroSection() {
  const { personal } = portfolioData;
  const { shouldReduceMotion, isSlowDevice } = usePerformance();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const subtitleRef = React.useRef<HTMLHeadingElement>(null);
  const bioRef = React.useRef<HTMLParagraphElement>(null);
  const buttonsRef = React.useRef<HTMLDivElement>(null);
  const socialRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Skip animations for slow devices or reduced motion preference
    if (shouldReduceMotion || isSlowDevice) {
      // Set final states immediately
      gsap.set([titleRef.current, subtitleRef.current, bioRef.current, buttonsRef.current, socialRef.current, imageRef.current], {
        opacity: 1,
        y: 0,
        scale: 1
      });
      return;
    }
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, bioRef.current, buttonsRef.current, socialRef.current], {
        opacity: 0,
        y: 30
      });
      
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.95
      });

      // Create timeline - faster and more fluid
      const tl = gsap.timeline({ delay: 0.1 });
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.2")
      .to(bioRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.15")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.1")
      .to(socialRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.out"
      }, "-=0.1")
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion, isSlowDevice]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Profile Image - Artistic Design */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div ref={imageRef} className="relative group">
              {/* Main image container with creative shape */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Artistic background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl scale-110 opacity-60" />
                <div className="absolute inset-4 bg-gradient-to-tl from-accent/40 via-transparent to-primary/40 rounded-[2.5rem] blur-2xl opacity-50" />
                
                {/* Creative geometric shapes */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/30 rotate-45 rounded-lg" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-accent/30 rotate-12 rounded-xl" />
                <div className="absolute top-6 -right-6 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-70" />
                <div className="absolute -bottom-2 -left-6 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg rotate-45 opacity-60" />
                
                {/* Main image with creative masking */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out">
                  {/* Gradient overlay for integration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10 rounded-3xl" />
                  
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <Image
                    src={personal.avatar}
                    alt={`${personal.name} - Profile Photo`}
                    fill
                    className="object-cover rounded-3xl filter saturate-110 contrast-105"
                    priority
                    sizes="(max-width: 1024px) 320px, 384px"
                  />
                  
                  {/* Creative overlay patterns */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/30 to-transparent rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/30 to-transparent rounded-tr-3xl" />
                </div>
                
                {/* Floating code elements */}
                <div className="absolute -top-8 left-1/4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 text-xs font-mono text-primary">
                  &lt;dev&gt;
                </div>
                <div className="absolute -bottom-6 right-1/4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-lg border border-accent/20 text-xs font-mono text-accent">
                  {'{code}'}
                </div>
                <div className="absolute top-1/4 -left-8 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 text-xs font-mono text-primary">
                  JS
                </div>
                <div className="absolute bottom-1/3 -right-10 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-accent/20 text-xs font-mono text-accent">
                  TS
                </div>
                
                {/* Interactive glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
              </div>
              
              {/* Artistic particle effects */}
              <div className="absolute top-12 right-12 w-2 h-2 bg-primary rounded-full opacity-80"></div>
              <div className="absolute bottom-16 left-8 w-1 h-1 bg-accent rounded-full opacity-70"></div>
              <div className="absolute top-32 left-12 w-3 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full opacity-60"></div>
              <div className="absolute bottom-32 right-16 w-0.5 h-3 bg-gradient-to-b from-accent to-transparent rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="space-y-2">
                <p className="text-primary font-medium animate-pulse">Hello, I&apos;m</p>
                <h1 
                  ref={titleRef}
                  className="text-4xl lg:text-6xl font-bold text-gradient animate-gradient"
                >
                  {personal.name}
                </h1>
                <h2 
                  ref={subtitleRef}
                  className="text-2xl lg:text-3xl font-semibold text-muted-foreground"
                >
                  {personal.title}
                </h2>
              </div>

              {/* Bio */}
              <p 
                ref={bioRef}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                {personal.bio}
              </p>

              {/* Location (if available) */}
              {personal.location && (
                <p className="text-sm text-muted-foreground/80 flex items-center justify-center lg:justify-start gap-2">
                  <span>📍</span>
                  {personal.location}
                </p>
              )}

              {/* CTA Buttons */}
              <div 
                ref={buttonsRef}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
              >
                <Button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  className="font-medium group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Let&apos;s Work Together
                  </span>
                </Button>
                
                <Button
                  onClick={scrollToProjects}
                  variant="outline"
                  size="lg"
                  className="font-medium group glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>

              {/* Social Links */}
              <div 
                ref={socialRef}
                className="flex items-center justify-center lg:justify-start gap-4 pt-8"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:text-primary hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Link
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:text-primary hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Link
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:text-primary hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Link
                    href={`mailto:${personal.email}`}
                    aria-label="Send Email"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
                {personal.resume && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:text-primary hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Link
                      href={personal.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Resume"
                    >
                      <FileText className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToProjects}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to projects"
          >
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/20">
              <div className="w-1 h-3 bg-current rounded-full mt-2" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full opacity-40" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary-glow rounded-full opacity-80" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-neon-cyan rounded-full opacity-50" />
    </section>
  );
}