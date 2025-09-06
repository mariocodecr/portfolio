"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimations() {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements on scroll
    const animateOnScroll = (selector: string, animation: gsap.TweenVars, triggerOptions?: ScrollTrigger.Vars) => {
      const elements = document.querySelectorAll(selector);
      
      elements.forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 50, 
            scale: 0.9,
            ...animation.from 
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              ...triggerOptions
            },
            ...animation.to
          }
        );
      });
    };

    // Section animations
    animateOnScroll('[data-animate="section"]', {
      from: { y: 80 },
      to: { duration: 1 }
    });

    // Card animations
    animateOnScroll('[data-animate="card"]', {
      from: { y: 30, rotationX: 15 },
      to: { 
        duration: 0.6,
        rotationX: 0,
        ease: "back.out(1.2)"
      }
    });

    // Skill animations
    animateOnScroll('[data-animate="skill"]', {
      from: { scale: 0, rotation: -10 },
      to: { 
        scale: 1, 
        rotation: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      }
    });

    // Text animations
    animateOnScroll('[data-animate="text"]', {
      from: { x: -30, opacity: 0 },
      to: { 
        x: 0, 
        opacity: 1,
        duration: 0.7
      }
    });

    // Stagger animations for lists
    const staggerElements = document.querySelectorAll('[data-animate="stagger"]');
    staggerElements.forEach(container => {
      const children = container.children;
      gsap.fromTo(children, 
        { 
          opacity: 0, 
          y: 20,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Parallax effects
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-parallax') || '0.5';
      gsap.to(element, {
        yPercent: -50 * parseFloat(speed),
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Counter animations
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count') || '0');
      
      const countAnimation = { value: 0 };
      gsap.to(countAnimation, {
        value: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          counter.textContent = Math.round(countAnimation.value).toString();
        },
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}

export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useScrollAnimations();
  return <>{children}</>;
}