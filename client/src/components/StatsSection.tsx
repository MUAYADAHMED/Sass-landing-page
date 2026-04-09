import { useEffect, useState } from "react";

/**
 * Stats Section Component
 * Design Philosophy: Minimalist Elegance
 * - Animated counters that increment on scroll
 * - Clean presentation of key metrics
 * - Visual hierarchy with large numbers
 */

interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

const stats: StatItem[] = [
  { value: 5000, label: "شركة تستخدم المنصة", suffix: "+" },
  { value: 99, label: "توفر الخدمة", suffix: ".9%" },
  { value: 24, label: "دعم فني متاح", suffix: "/7" },
  { value: 50, label: "دولة حول العالم", suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString("ar-EG")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
