import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Footer Component
 * Design Philosophy: Minimalist Elegance
 * - Clean layout with organized sections
 * - Subtle borders and spacing
 * - Contact information and links
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">SaaS Pro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة SaaS احترافية لإدارة عملك بكفاءة وسهولة.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">المنتج</h4>
            <ul className="space-y-2">
              {["المميزات", "الأسعار", "الأمان", "الأداء"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-accent smooth-transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">الشركة</h4>
            <ul className="space-y-2">
              {["عن الشركة", "المدونة", "الوظائف", "الاتصال"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-accent smooth-transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">قانوني</h4>
            <ul className="space-y-2">
              {["سياسة الخصوصية", "شروط الاستخدام", "سياسة الكوكيز", "الامتثال"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-accent smooth-transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-foreground">البريد الإلكتروني</p>
              <a
                href="mailto:support@saas.pro"
                className="text-sm text-muted-foreground hover:text-accent smooth-transition"
              >
                support@saas.pro
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-foreground">الهاتف</p>
              <a
                href="tel:+201234567890"
                className="text-sm text-muted-foreground hover:text-accent smooth-transition"
              >
                +20 123 456 7890
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-foreground">العنوان</p>
              <p className="text-sm text-muted-foreground">
                القاهرة، مصر
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SaaS Pro. جميع الحقوق محفوظة.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground hover:text-accent smooth-transition"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
