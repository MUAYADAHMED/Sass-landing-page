import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * CTA (Call To Action) Section Component
 * Design Philosophy: Minimalist Elegance
 * - Eye-catching but not overwhelming
 * - Clear value proposition
 * - Strong CTA buttons
 */

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 z-0" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="section-title text-foreground mb-4">
            جاهز لتطوير عملك؟
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            انضم إلى آلاف الشركات التي تثق بنا لإدارة عملياتها. ابدأ مجاناً اليوم بدون الحاجة لبطاقة ائتمان.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              تحدث معنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
