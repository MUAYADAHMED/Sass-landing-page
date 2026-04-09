import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Smartphone,
  Lock,
} from "lucide-react";

/**
 * Features Section Component
 * Design Philosophy: Minimalist Elegance
 * - Clean grid layout with icon cards
 * - Simple outline icons in accent color
 * - Subtle hover effects with smooth transitions
 * - Clear hierarchy with section title and descriptions
 */

const features = [
  {
    icon: Zap,
    title: "أداء عالي",
    description:
      "سرعة فائقة وأداء مستقر مع معالجة آلاف العمليات في الثانية الواحدة",
  },
  {
    icon: Shield,
    title: "أمان متقدم",
    description:
      "تشفير من الدرجة العسكرية وحماية كاملة لبيانات شركتك وعملائك",
  },
  {
    icon: BarChart3,
    title: "تحليلات شاملة",
    description:
      "رؤى عميقة وتقارير مفصلة تساعدك على اتخاذ قرارات أفضل",
  },
  {
    icon: Users,
    title: "تعاون سلس",
    description:
      "عمل فريقي فعال مع أدوات تعاون متقدمة وتكامل سهل",
  },
  {
    icon: Smartphone,
    title: "متجاوب تماماً",
    description:
      "تجربة مثالية على جميع الأجهزة من الهواتف الذكية إلى أجهزة الكمبيوتر",
  },
  {
    icon: Lock,
    title: "امتثال كامل",
    description:
      "التزام تام بمعايير GDPR و ISO والقوانين الدولية",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663465311090/ex86Y2ZaFYkFixv9DcULZS/abstract-pattern-9mjReEozcH4SH7T6eKgycU.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            المميزات الرئيسية
          </h2>
          <p className="text-lg text-muted-foreground">
            كل ما تحتاجه لتطوير عملك في مكان واحد
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card/50 hover:bg-card smooth-transition hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 smooth-transition">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="feature-title text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Divider Line */}
                <div className="mt-4 pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
