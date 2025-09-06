"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import { portfolioData } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        cardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.from(card, {
              y: 40,
              opacity: 0,
              duration: 0.4,
              delay: index * 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What professionals say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              ref={addToRefs}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-effect rounded-2xl p-6 h-full flex flex-col border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/60 mr-3 flex-shrink-0" />
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-foreground/90 mb-6 flex-1 text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-accent font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                  
                  {testimonial.project && (
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-1">
                        Project
                      </div>
                      <div className="text-xs font-medium text-primary">
                        {testimonial.project}
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect border border-white/10">
            <Star className="h-4 w-4 text-accent fill-current" />
            <span className="text-sm font-medium text-foreground">
              5.0 average rating from {portfolioData.testimonials.length} clients
            </span>
            <Star className="h-4 w-4 text-accent fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}