import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ Section Component
 * Design Philosophy: Minimalist Elegance
 * - Clean accordion layout with minimal styling
 * - Simple expand/collapse interactions
 * - Clear typography hierarchy
 * - Subtle borders and spacing
 */

const faqs = [
  {
    question: "هل يمكنني تجربة المنصة مجاناً؟",
    answer:
      "نعم، نوفر فترة تجريبية مجانية لمدة 14 يوم لجميع الخطط بدون الحاجة لإدخال بيانات بطاقة ائتمان. يمكنك الوصول إلى جميع المميزات خلال فترة التجربة.",
  },
  {
    question: "كيف يمكنني ترقية أو تخفيض خطتي؟",
    answer:
      "يمكنك تغيير خطتك في أي وقت من لوحة التحكم. التغييرات تسري فوراً، والفرق في السعر سيتم حسابه تلقائياً في فاتورتك التالية.",
  },
  {
    question: "هل بيانات شركتي آمنة؟",
    answer:
      "نعم، نستخدم تشفير من الدرجة العسكرية (AES-256) وتخزين آمن في مراكز بيانات معتمدة دولياً. نحن ملتزمون بمعايير GDPR و ISO 27001.",
  },
  {
    question: "هل توفرون دعماً فنياً؟",
    answer:
      "نعم، نوفر دعماً فنياً متعدد القنوات 24/7. يمكنك التواصل معنا عبر البريد الإلكتروني والدردشة المباشرة والهاتف حسب خطتك.",
  },
  {
    question: "هل يمكنني تصدير بيانات شركتي؟",
    answer:
      "بالتأكيد، يمكنك تصدير جميع بيانات شركتك في أي وقت بصيغ متعددة (CSV, JSON, Excel). بيانات شركتك ملك لك بالكامل.",
  },
  {
    question: "هل توفرون API للتكامل مع أنظمة أخرى؟",
    answer:
      "نعم، نوفر API قوي وموثق بالكامل. الخطط المهنية والمؤسسية تتضمن وصول كامل للـ API مع دعم فني متخصص.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-muted-foreground">
            إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="py-6 hover:no-underline hover:text-accent smooth-transition group">
                  <span className="text-left text-foreground font-semibold group-hover:text-accent smooth-transition">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-2xl mx-auto p-8 rounded-lg border border-border bg-card/50 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-muted-foreground mb-6">
            فريق الدعم لدينا جاهز للمساعدة. تواصل معنا عبر البريد الإلكتروني أو الدردشة المباشرة.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white font-semibold smooth-transition"
          >
            تواصل معنا
          </a>
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
