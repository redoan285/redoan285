"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      gsap.from(".timeline-item", {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -50 : 50),
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      period: "Current",
      icon: "🎓",
      role: "CSE Student",
      company: "University",
      board: "Dhaka, Bangladesh",
      gpa: "Learning Phase",
      tags: ["Computer Science", "Algorithms", "Data Structures"],
      description:
        "Actively pursuing a degree in Computer Science and Engineering. Focusing on building a strong foundation in core CS concepts while mastering modern web technologies. Dedicated to becoming a skilled software engineer.",
      color: "bg-primary",
      accent: "text-primary",
      glow: "shadow-[0_0_20px_rgba(37,99,235,0.4)]",
    },
    {
      period: "2024 — Present",
      icon: "💻",
      role: "MERN Stack Developer Journey",
      company: "Self-Taught · Real-World Projects",
      board: "MERN Stack · Next.js · UI/UX",
      gpa: "Project Building",
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
      description:
        "Developing real-world applications using the MERN stack. Built multiple projects including friendship platforms and digital tools. Passionate about creating user-friendly web solutions and solving complex problems with code.",
      color: "bg-secondary",
      accent: "text-secondary",
      glow: "shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    }
  ];

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-4 sm:px-6 py-[80px] sm:py-[120px] lg:py-[140px]" id="timeline">
      <div className="text-center mb-24">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Evolution
        </span>
        <h2 className="font-h2 text-4xl mt-2">Journey &amp; Milestones</h2>
        <p className="text-on-surface-variant/60 mt-4 text-sm max-w-md mx-auto leading-relaxed">
          From science classrooms to full-stack codebases — a continuous journey of learning and building.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto timeline-container">
        {/* Animated vertical line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-secondary to-transparent opacity-30 hidden md:block"
        />

        <div className="space-y-16">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="timeline-item relative grid md:grid-cols-2 gap-8 md:gap-16 items-start"
            >
              {/* ---- LEFT SIDE ---- */}
              <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                {i % 2 === 0 ? (
                  /* Even → info card on left */
                  <div className="text-right md:pr-12">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${m.accent} opacity-70`}>
                      {m.period}
                    </span>
                    <h4 className="text-xl font-black text-on-background mt-1 leading-snug">
                      {m.icon} {m.role}
                    </h4>
                    <p className="text-sm font-semibold text-on-surface-variant mt-1">{m.company}</p>
                    <p className="text-[11px] text-on-surface-variant/50 mt-0.5">{m.board}</p>
                    <span className={`inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${m.accent} bg-primary/10 border border-primary/20`}>
                      ★ {m.gpa}
                    </span>
                  </div>
                ) : (
                  /* Odd → description card on left */
                  <TimelineCard m={m} align="left" />
                )}
              </div>

              {/* Center dot (desktop only) */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${m.color} ${m.glow} border-[4px] border-background z-10 hidden md:block top-1`}
              />

              {/* ---- RIGHT SIDE ---- */}
              <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                {i % 2 === 0 ? (
                  /* Even → description card on right */
                  <TimelineCard m={m} align="left" />
                ) : (
                  /* Odd → info card on right */
                  <div className="md:pl-12">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${m.accent} opacity-70`}>
                      {m.period}
                    </span>
                    <h4 className="text-xl font-black text-on-background mt-1 leading-snug">
                      {m.icon} {m.role}
                    </h4>
                    <p className="text-sm font-semibold text-on-surface-variant mt-1">{m.company}</p>
                    <p className="text-[11px] text-on-surface-variant/50 mt-0.5">{m.board}</p>
                    <span className={`inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${m.accent} bg-secondary/10 border border-secondary/20`}>
                      ★ {m.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ m, align = "left" }) => (
  <div
    className={`glass-card p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all duration-500 group`}
  >
    <p className="text-on-surface-variant/70 text-sm leading-relaxed mb-4">
      {m.description}
    </p>
    <div className={`flex flex-wrap gap-2 ${align === "right" ? "justify-end" : ""}`}>
      {m.tags.map((tag, ti) => (
        <span
          key={ti}
          className="px-2.5 py-1 bg-surface-container-high rounded-lg text-[9px] font-bold uppercase tracking-wider text-on-surface-variant/60 border border-outline-variant/10 group-hover:border-primary/20 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Timeline;
