import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navigation Component
 * Design Philosophy: Minimalist Elegance
 * - Sticky header with subtle background
 * - Mobile-responsive hamburger menu
 * - Smooth transitions and hover effects
 */

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "المميزات", href: "#features" },
    { label: "الأسعار", href: "#pricing" },
    { label: "الأسئلة الشائعة", href: "#faq" },
    { label: "الاتصال", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline">
            SaaS Pro
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-accent smooth-transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block px-6 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-semibold smooth-transition">
          ابدأ الآن
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary/10 rounded-lg smooth-transition"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-accent smooth-transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-semibold smooth-transition mt-4">
              ابدأ الآن
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
