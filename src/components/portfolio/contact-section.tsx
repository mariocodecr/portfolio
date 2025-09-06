"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  MapPin, 
  Send,
  Coffee,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { portfolioData } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const { personal } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

        gsap.from(formRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });

        cardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.from(card, {
              y: 30,
              opacity: 0,
              duration: 0.4,
              delay: index * 0.05,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus('success');
        setFormData({ name: "", email: "", message: "" });
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me a message",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      value: "View Profile",
      href: personal.social.github,
      color: "from-gray-500/20 to-slate-500/20",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let&apos;s connect professionally",
      value: "Connect with me",
      href: personal.social.linkedin,
      color: "from-blue-600/20 to-blue-400/20",
    },
  ];

  // Add resume if available
  if (personal.resume) {
    contactMethods.push({
      icon: FileText,
      title: "Resume",
      description: "Download my CV",
      value: "View Resume",
      href: personal.resume,
      color: "from-green-500/20 to-emerald-500/20",
    });
  }

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Let&apos;s Work Together
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Send me a message and let&apos;s discuss your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-accent" />
                  Send a Message
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="pl-10 glass-effect border-white/20 focus:border-primary/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="pl-10 glass-effect border-white/20 focus:border-primary/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="glass-effect border-white/20 focus:border-primary/50 min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : formStatus === 'success' ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Message Sent!
                        </>
                      ) : formStatus === 'error' ? (
                        <>
                          <AlertCircle className="h-4 w-4" />
                          Please fill all fields
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              </div>
            </form>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <Coffee className="h-6 w-6 text-accent" />
                Other Ways to Connect
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  
                  return (
                    <div
                      key={method.title}
                      ref={addToRefs}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                            <p className="text-sm text-primary font-medium truncate">{method.value}</p>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="shrink-0"
                          >
                            <Link
                              href={method.href}
                              target={method.title !== "Email" ? "_blank" : undefined}
                              rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                            >
                              <Send className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-medium border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {personal.professional.availability}
                </div>
                
                {personal.location && (
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Currently based in {personal.location} • {personal.professional.workPreferences.timezone}</span>
                  </div>
                )}

                <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                  Typically respond within 24 hours • Always happy to discuss new opportunities and interesting projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}