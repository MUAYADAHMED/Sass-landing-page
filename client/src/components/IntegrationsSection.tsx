import { Database, Mail, Smartphone, BarChart3, Lock, Zap } from "lucide-react";

/**
 * Integrations Section Component
 * Design Philosophy: Minimalist Elegance
 * - Shows popular integrations
 * - Clean grid layout
 * - Simple icon representation
 */

const integrations = [
  { icon: Database, name: "قواعد البيانات" },
  { icon: Mail, name: "البريد الإلكتروني" },
  { icon: Smartphone, name: "الهاتف المحمول" },
  { icon: BarChart3, name: "التحليلات" },
  { icon: Lock, name: "الأمان" },
  { icon: Zap, name: "الأتمتة" },
];

export default function IntegrationsSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            التكامل مع الأدوات المفضلة لديك
          </h2>
          <p className="text-lg text-muted-foreground">
            تكامل سلس مع أكثر من 500 تطبيق وخدمة
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 smooth-transition hover:border-accent/30"
              >
                <Icon className="w-8 h-8 text-accent" />
                <span className="text-sm text-muted-foreground text-center">
                  {integration.name}
                </span>
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
