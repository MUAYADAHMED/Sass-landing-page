import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

/**
 * Pricing Section Component
 * Design Philosophy: Minimalist Elegance
 * - Three-tier pricing table with clear differentiation
 * - Highlight the popular plan with subtle accent color
 * - Clean feature lists with checkmarks
 * - Simple, readable pricing display
 */

const plans = [
  {
    name: "الأساسي",
    price: "29",
    description: "للشركات الناشئة والمشاريع الصغيرة",
    features: [
      "حتى 5 مستخدمين",
      "10 GB مساحة تخزين",
      "تحليلات أساسية",
      "دعم عبر البريد الإلكتروني",
      "تحديثات تلقائية",
    ],
    highlighted: false,
  },
  {
    name: "المهني",
    price: "79",
    description: "للشركات المتوسطة والفريق المتنامي",
    features: [
      "حتى 50 مستخدم",
      "500 GB مساحة تخزين",
      "تحليلات متقدمة",
      "دعم الأولوية 24/7",
      "API مخصص",
      "تقارير مخصصة",
      "التكامل مع الأدوات الخارجية",
    ],
    highlighted: true,
  },
  {
    name: "المؤسسي",
    price: "299",
    description: "للمؤسسات الكبرى والحلول المخصصة",
    features: [
      "مستخدمون غير محدودون",
      "تخزين غير محدود",
      "تحليلات مخصصة",
      "دعم مخصص 24/7",
      "API مخصص متقدم",
      "تقارير مخصصة",
      "تكامل كامل",
      "ضمان 99.99% توفر الخدمة",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            خطط التسعير
          </h2>
          <p className="text-lg text-muted-foreground">
            اختر الخطة المناسبة لاحتياجات عملك
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border smooth-transition ${
                plan.highlighted
                  ? "border-accent/50 bg-card shadow-lg shadow-accent/10 md:scale-105 hover:shadow-xl hover:shadow-accent/20"
                  : "border-border bg-card/50 hover:border-border/80 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              }`}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                    الأكثر شهرة
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/شهر</span>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 rounded-lg py-6 font-semibold smooth-transition ${
                    plan.highlighted
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "border border-border bg-transparent hover:bg-secondary/10 text-foreground"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  ابدأ الآن
                </Button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            جميع الخطط تتضمن فترة تجريبية مجانية لمدة 14 يوم بدون الحاجة لبطاقة ائتمان
          </p>
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
