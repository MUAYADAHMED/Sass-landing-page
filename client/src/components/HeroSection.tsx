import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

/**
 * Hero Section Component
 * Design Philosophy: Minimalist Elegance
 * - Clean layout with asymmetric positioning
 * - Large, bold typography using Poppins font
 * - Bright blue accent color (#3B82F6) for CTA
 * - Subtle background image with overlay
 */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663465311090/ex86Y2ZaFYkFixv9DcULZS/hero-bg-YALAc66uwcFUxEHTNoMz3S.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-accent">الحل الأمثل لفريقك</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-foreground mb-6">
            منصة SaaS احترافية
            <span className="block text-accent">لإدارة عملك بكفاءة</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            أتمتة سير عملك، زيادة الإنتاجية، وتحقيق نتائج أفضل مع منصتنا المتقدمة والسهلة الاستخدام
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-lg px-8 py-6 text-base font-semibold smooth-transition group"
            >
              ابدأ الآن مجاناً
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary/10 rounded-lg px-8 py-6 text-base font-semibold smooth-transition"
            >
              <Play className="w-5 h-5 ml-2" />
              شاهد العرض التوضيحي
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-accent font-semibold">5000+</span>
              <span>شركة تثق بنا</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-accent font-semibold">99.9%</span>
              <span>توفر الخدمة</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-accent font-semibold">24/7</span>
              <span>دعم فني</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">اسحب للأسفل</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
