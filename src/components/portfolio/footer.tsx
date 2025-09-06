"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Name */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              {personal.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {personal.title} passionate about creating exceptional digital experiences 
              and solving complex problems through clean, efficient code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2">
              <Link
                href={`mailto:${personal.email}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {personal.email}
              </Link>
              {personal.location && (
                <p className="text-sm text-muted-foreground">
                  {personal.location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} {personal.name}. Made with
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            and Next.js
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:text-primary"
            >
              <Link
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:text-primary"
            >
              <Link
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:text-primary"
            >
              <Link
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}