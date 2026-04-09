import { Star } from "lucide-react";

/**
 * Testimonials Section Component
 * Design Philosophy: Minimalist Elegance
 * - Customer testimonials with ratings
 * - Clean card layout
 * - Social proof elements
 */

const testimonials = [
  {
    name: "أحمد محمود",
    company: "شركة التقنية المتقدمة",
    role: "المدير التنفيذي",
    content:
      "منصة SaaS Pro غيرت طريقة عملنا تماماً. زادت إنتاجيتنا بنسبة 40% في الشهر الأول فقط.",
    rating: 5,
  },
  {
    name: "فاطمة علي",
    company: "مجموعة التسويق الرقمي",
    role: "مديرة المشاريع",
    content:
      "الواجهة سهلة جداً والدعم الفني رائع. لا أستطيع تخيل عملنا بدون هذه المنصة الآن.",
    rating: 5,
  },
  {
    name: "محمد سالم",
    company: "استشارات الأعمال",
    role: "الشريك المؤسس",
    content:
      "الأمان والموثوقية هما أهم شيء بالنسبة لنا، وهذه المنصة توفر كليهما بامتياز.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            آراء عملائنا
          </h2>
          <p className="text-lg text-muted-foreground">
            اسمع من الشركات التي تثق بنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card smooth-transition hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
