import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Flower2,
  Layers,
  PenTool,
  Search,
  CalendarDays,
  Languages,
  Moon,
  Sun,
} from "lucide-react";

const projects = [
  {
    title: "Ouihelp — UX/UI Case Study",
    archive: "Case 01",
    type: "Product Design · Healthcare · Service",
    year: "2026",
    description:
      "Redesign of a digital healthcare experience focused on trust, clarity and emotional reassurance in sensitive human contexts.",
    visual: "Clinical note",
    action: "Open archive",
    tags: ["UX Research", "UI Design", "Accessibility", "Design System"],
  },
  {
    title: "EchoMed — Accessible Medication AI",
    archive: "Case 02",
    type: "AI Product · Healthcare · Accessibility",
    year: "2026",
    description:
      "A mobile AI experience allowing users to photograph medication and instantly receive simplified visual and voice explanations adapted for visually impaired, elderly or reading-impaired users.",
    visual: "Voice scan",
    action: "Enter experience",
    tags: ["AI", "Accessibility", "Voice UX", "Healthcare"],
  },
  {
    title: "Memory Archives",
    archive: "Case 03",
    type: "Brand & Digital Experience",
    year: "2026",
    description:
      "A visual universe inspired by memory archives, film photography and intimate storytelling experiences.",
    visual: "Emotional archive",
    action: "Read the story",
    tags: ["Art Direction", "Storytelling", "Motion", "Editorial"],
  },
];

const translations = {
  en: {
    navProjects: "Projects",
    navProcess: "Process",
    navAbout: "About",
    contact: "Contact",
    badge: "Product Designer · UX/UI · AI sensitive experiences",
    hero: "Designing interfaces that feel remembered.",
    heroText:
      "I craft thoughtful digital experiences between product strategy, editorial aesthetics and AI-enhanced interactions.",
    selected: "Selected work",
    projects: "Projects",
    projectsText:
      "A curated selection of projects designed as stories — combining context, systems and human-centered experiences.",
    processTitle: "Design approach",
    processHero: "A soft system for useful products.",
    about: "About",
    aboutHero: "Designing with care, memory and clarity.",
    aboutText1:
      "I'm Annie, a Product Designer crafting thoughtful digital experiences between human emotion, accessibility and intelligent systems.",
    aboutText2:
      "My work is deeply inspired by memories, warm visuals, healthcare and the small details that make interfaces feel reassuring and alive.",
    aboutText3:
      "Through product strategy, UX thinking and visual storytelling, I explore how design can simplify complexity while still feeling intimate and deeply human.",
    quote: "Designing products that people don't just use — but remember.",
    footer1: "© 2026 Annie Tran — Product Design Portfolio",
    footer2: "Available for Product Design, UX/UI and AI product projects.",
  },
  fr: {
    navProjects: "Projets",
    navProcess: "Process",
    navAbout: "À propos",
    contact: "Contact",
    badge: "Product Designer · UX/UI · expériences IA sensibles",
    hero: "Créer des interfaces qui laissent une trace.",
    heroText:
      "Je crée des expériences digitales sensibles entre stratégie produit, esthétique éditoriale et interactions augmentées par l'IA.",
    selected: "Travaux sélectionnés",
    projects: "Projets",
    projectsText:
      "Une sélection de projets pensés comme des récits mêlant contexte, systèmes et expériences humaines.",
    processTitle: "Approche design",
    processHero: "Un système doux pour des produits utiles.",
    about: "À propos",
    aboutHero: "Designer avec soin, mémoire et clarté.",
    aboutText1:
      "Je suis Annie, Product Designer créant des expériences digitales entre émotion humaine, accessibilité et systèmes intelligents.",
    aboutText2:
      "Mon travail est inspiré par les souvenirs, les visuels chaleureux, la santé et les détails qui rendent les interfaces rassurantes et vivantes.",
    aboutText3:
      "À travers la stratégie produit, l'UX et le storytelling visuel, j'explore comment simplifier la complexité tout en gardant une approche intime et humaine.",
    quote:
      "Créer des produits que les gens ne font pas qu'utiliser — mais dont ils se souviennent.",
    footer1: "© 2026 Annie Tran — Portfolio Product Design",
    footer2: "Disponible pour des projets Product Design, UX/UI et IA.",
  },
};

const process = [
  {
    icon: Search,
    title: "Observe",
    text: "I start from real behaviors, frustrations and subtle interactions that reveal genuine human needs.",
  },
  {
    icon: Layers,
    title: "Structure",
    text: "I transform abstract ideas into understandable systems, flows, priorities and product experiences.",
  },
  {
    icon: PenTool,
    title: "Shape",
    text: "I design interfaces that feel clear, sensitive and memorable, with strong attention to visual detail.",
  },
  {
    icon: CalendarDays,
    title: "Evolve",
    text: "I see products as living systems — adaptable, testable and built to evolve with future behaviors.",
  },
];

export default function PortfolioAnnie() {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const t = translations[language];

  const playTocSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = "sine";
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const handleCardClick = (index: number) => {
    playTocSound();
    setClickedCard(index);
    setTimeout(() => setClickedCard(null), 600);
  };

  return (
    <div className={`portfolio-page ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .portfolio-page {
          position: relative;
          min-height: 100vh;
          background:
            radial-gradient(circle at 12% 18%, rgba(236, 142, 92, 0.16), transparent 24%),
            radial-gradient(circle at 88% 16%, rgba(158, 70, 48, 0.12), transparent 22%),
            radial-gradient(circle at 72% 76%, rgba(255, 205, 165, 0.16), transparent 26%),
            radial-gradient(circle at 28% 88%, rgba(110, 43, 31, 0.08), transparent 22%),
            #F8F0E8;
          color: #2B0F0D;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
        }
        .portfolio-page::before {
          content: "";
          position: fixed;
          inset: 0;
          background:
            radial-gradient(circle at 22% 28%, rgba(255,255,255,0.45), transparent 28%),
            radial-gradient(circle at 76% 18%, rgba(255,230,210,0.22), transparent 24%),
            radial-gradient(circle at 56% 82%, rgba(210,116,74,0.08), transparent 30%);
          filter: blur(78px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.82;
        }
        .portfolio-page::after {
          content: "";
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23361110' fill-opacity='0.025'%3E%3Ccircle cx='12' cy='12' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          pointer-events: none;
          z-index: 0;
        }
        .dark-mode {
          background:
            radial-gradient(circle at 12% 18%, rgba(236, 142, 92, 0.16), transparent 26%),
            radial-gradient(circle at 86% 18%, rgba(255, 190, 145, 0.10), transparent 24%),
            radial-gradient(circle at 70% 82%, rgba(120, 45, 32, 0.24), transparent 30%),
            #160807;
          color: #FFF4EA;
        }
        .dark-mode::before {
          background:
            radial-gradient(circle at 22% 28%, rgba(255, 180, 130, 0.12), transparent 30%),
            radial-gradient(circle at 76% 18%, rgba(255, 230, 210, 0.08), transparent 24%),
            radial-gradient(circle at 56% 82%, rgba(210, 116, 74, 0.14), transparent 30%);
          opacity: 0.9;
        }
        .dark-mode::after {
          opacity: 0.18;
          mix-blend-mode: screen;
        }
        .dark-mode .nav {
          border-bottom-color: rgba(255, 244, 234, 0.14);
          background: rgba(22, 8, 7, 0.88);
        }
        .dark-mode .nav-links a,
        .dark-mode .lead,
        .dark-mode .section-desc,
        .dark-mode .project-text,
        .dark-mode .paragraph,
        .dark-mode .footer-inner,
        .dark-mode .floating-card .small {
          color: rgba(255, 244, 234, 0.82);
        }
        .dark-mode .eyebrow,
        .dark-mode .meta,
        .dark-mode .artifact-top {
          color: rgba(255, 244, 234, 0.58);
        }
        .dark-mode .badge,
        .dark-mode .lang-btn,
        .dark-mode .theme-btn,
        .dark-mode .floating-card,
        .dark-mode .artifact,
        .dark-mode .tag,
        .dark-mode .archive-note,
        .dark-mode .memory-card {
          border-color: rgba(255, 244, 234, 0.14);
          background: rgba(45, 20, 17, 0.82);
          color: #FFF4EA;
        }
        .dark-mode .project-card {
          border-color: rgba(255, 244, 234, 0.12);
          background:
            radial-gradient(circle at 82% 18%, rgba(236, 142, 92, 0.14), transparent 30%),
            radial-gradient(circle at 18% 84%, rgba(255, 244, 234, 0.06), transparent 28%),
            rgba(36, 14, 12, 0.92);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.32);
        }
        .dark-mode .mockup {
          border-color: rgba(255, 244, 234, 0.12);
          background: rgba(22, 8, 7, 0.56);
        }
        .dark-mode .gradient-visual {
          background: linear-gradient(135deg, rgba(255, 244, 234, 0.08), rgba(236, 142, 92, 0.22), rgba(80, 30, 22, 0.64));
        }
        .dark-mode .line {
          background: rgba(255, 244, 234, 0.18);
        }
        .dark-mode .outline-btn {
          border-color: rgba(255, 244, 234, 0.28);
          color: #FFF4EA;
        }
        .dark-mode .primary-btn {
          background: #FFF4EA;
          color: #2B0F0D;
        }
        .dark-mode .quote {
          color: #FFF4EA;
        }
        .dark-mode .footer {
          border-top-color: rgba(255, 244, 234, 0.12);
        }
        .nav,
        .section,
        .dark-section,
        .footer {
          position: relative;
          z-index: 1;
        }
        .serif {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          letter-spacing: -0.04em;
        }
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          border-bottom: 1px solid rgba(43, 15, 13, 0.14);
          background: rgba(248, 240, 232, 0.94);
          backdrop-filter: blur(20px);
        }
        .nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: 22px;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          gap: 28px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }
        .nav-links a {
          color: rgba(43, 15, 13, 0.82);
          text-decoration: none;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .lang-btn,
        .theme-btn,
        .primary-btn,
        .outline-btn {
          font: inherit;
          cursor: pointer;
        }
        .lang-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          border-radius: 999px;
          border: 1px solid rgba(54, 17, 16, 0.16);
          background: rgba(255, 252, 248, 0.82);
          padding: 10px 14px;
          color: rgba(43, 15, 13, 0.86);
        }
        .theme-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid rgba(54, 17, 16, 0.16);
          background: rgba(255, 252, 248, 0.82);
          color: rgba(43, 15, 13, 0.86);
        }
        .primary-btn {
          border: none;
          border-radius: 999px;
          background: #361110;
          color: #F7EFE7;
          padding: 12px 22px;
        }
        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 96px 24px;
        }
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 120px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(54, 17, 16, 0.2);
          background: rgba(255, 252, 248, 0.74);
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
          color: rgba(43, 15, 13, 0.86);
          margin-bottom: 32px;
        }
        h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: clamp(56px, 10vw, 132px);
          line-height: 0.92;
          letter-spacing: -0.06em;
          max-width: 980px;
          margin: 0;
        }
        .lead {
          margin-top: 32px;
          max-width: 680px;
          font-size: 20px;
          line-height: 1.7;
          color: rgba(43, 15, 13, 0.82);
        }
        .glow {
          position: absolute;
          right: 30px;
          bottom: 40px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background:
            radial-gradient(circle, rgba(236,142,92,0.26) 0%, rgba(210,116,74,0.12) 42%, transparent 74%);
          filter: blur(90px);
          pointer-events: none;
          animation: auraFloat 9s ease-in-out infinite alternate;
        }
        @keyframes auraFloat {
          from {
            transform: translateY(0px) scale(1);
            opacity: 0.85;
          }
          to {
            transform: translateY(-18px) scale(1.06);
            opacity: 1;
          }
        }
        .floating-card {
          position: absolute;
          right: 56px;
          top: 68px;
          transform: rotate(-8deg);
          border-radius: 28px;
          border: 1px solid rgba(54, 17, 16, 0.1);
          background: rgba(255, 252, 248, 0.78);
          padding: 22px;
          box-shadow: 0 24px 70px rgba(54, 17, 16, 0.12);
          backdrop-filter: blur(20px);
          max-width: 240px;
        }
        .floating-card p { margin: 0; }
        .floating-card .small { margin-top: 8px; color: rgba(43, 15, 13, 0.78); line-height: 1.6; }
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 56px;
        }
        .eyebrow {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: rgba(54, 17, 16, 0.5);
          margin: 0 0 12px;
        }
        h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: clamp(44px, 7vw, 88px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          margin: 0;
        }
        .section-desc {
          max-width: 420px;
          color: rgba(43, 15, 13, 0.78);
          line-height: 1.7;
          margin: 0;
        }
        .project-stack {
          display: grid;
          gap: 44px;
        }
        .project-card {
          position: relative;
          overflow: hidden;
          border-radius: 48px;
          border: 1px solid rgba(54, 17, 16, 0.1);
          background: radial-gradient(circle at 82% 18%, rgba(210, 116, 74, 0.14), transparent 30%), radial-gradient(circle at 18% 84%, rgba(54, 17, 16, 0.06), transparent 28%), rgba(255, 250, 245, 0.94);
          padding: 44px;
          box-shadow: 0 40px 100px rgba(54, 17, 16, 0.12);
          min-height: 560px;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.14;
          background-image: linear-gradient(#361110 1px, transparent 1px), linear-gradient(90deg, #361110 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .project-inner {
          position: relative;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 48px;
          min-height: 470px;
        }
        .meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(54, 17, 16, 0.45);
          margin-bottom: 28px;
        }
        h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: clamp(42px, 6vw, 84px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          margin: 0;
        }
        .project-text {
          margin-top: 28px;
          max-width: 620px;
          font-size: 19px;
          line-height: 1.7;
          color: rgba(43, 15, 13, 0.82);
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 30px;
        }
        .tag {
          border-radius: 999px;
          border: 1px solid rgba(54, 17, 16, 0.16);
          background: rgba(255, 252, 248, 0.78);
          padding: 7px 12px;
          font-size: 13px;
          color: rgba(54, 17, 16, 0.66);
        }
        .outline-btn {
          margin-top: 40px;
          border-radius: 999px;
          border: 1px solid rgba(54, 17, 16, 0.25);
          background: transparent;
          padding: 18px 24px;
          color: #361110;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .artifact-wrap {
          position: relative;
          width: 100%;
          max-width: 470px;
          margin: 0 auto;
        }
        .artifact {
          position: relative;
          height: 390px;
          width: 100%;
          transform: rotate(2deg);
          border-radius: 40px;
          border: 1px solid rgba(54, 17, 16, 0.1);
          background: rgba(255, 252, 248, 0.86);
          padding: 24px;
          box-shadow: 0 32px 100px rgba(54, 17, 16, 0.13);
          backdrop-filter: blur(14px);
          z-index: 2;
        }
        .archive-note {
          position: absolute;
          left: 50%;
          bottom: -86px;
          width: 84%;
          transform: translateX(-50%) translateY(-34px) rotate(-2deg);
          border-radius: 24px;
          border: 1px solid rgba(54, 17, 16, 0.12);
          background: #F7EFE7;
          padding: 18px 20px;
          box-shadow: 0 24px 70px rgba(54, 17, 16, 0.14);
          opacity: 0;
          z-index: 1;
          pointer-events: none;
        }
        .artifact-wrap:hover .archive-note {
          opacity: 1;
          transform: translateX(-50%) translateY(0) rotate(-2deg);
        }
        .archive-note p {
          margin: 0;
        }
        .archive-note .note-title {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: 24px;
          letter-spacing: -0.04em;
        }
        .archive-note .note-text {
          margin-top: 6px;
          color: rgba(54, 17, 16, 0.58);
          font-size: 14px;
          line-height: 1.5;
        }
        .memory-card {
          margin: 28px auto 0;
          width: 82%;
          border-radius: 22px;
          border: 1px solid rgba(54, 17, 16, 0.1);
          background: rgba(247, 239, 231, 0.9);
          padding: 16px 20px;
          box-shadow: 0 18px 55px rgba(54, 17, 16, 0.12);
          transform: rotate(-3deg) perspective(1000px) rotateY(0deg) rotateX(0deg);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .memory-card:hover {
          transform: rotate(-3deg) perspective(1000px) rotateY(-8deg) rotateX(4deg) translateZ(20px);
          box-shadow: 0 28px 80px rgba(54, 17, 16, 0.24);
        }
        .memory-card.clicked {
          animation: popOut 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes popOut {
          0% {
            transform: rotate(-3deg) perspective(1000px) rotateY(-8deg) rotateX(4deg) translateZ(20px) scale(1);
          }
          50% {
            transform: rotate(-3deg) perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(60px) scale(1.08);
          }
          100% {
            transform: rotate(-1deg) perspective(1000px) rotateY(8deg) rotateX(-4deg) translateZ(40px) scale(1.05);
          }
        }
        .artifact-top {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(54, 17, 16, 0.45);
        }
        .mockup {
          margin-top: 34px;
          border-radius: 28px;
          border: 1px solid rgba(54, 17, 16, 0.1);
          background: rgba(248, 240, 232, 0.92);
          padding: 20px;
        }
        .gradient-visual {
          height: 176px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(54, 17, 16, 0.1), rgba(197, 107, 74, 0.22), rgba(255, 255, 255, 0.7));
        }
        .line {
          height: 12px;
          border-radius: 999px;
          background: rgba(54, 17, 16, 0.12);
          margin-top: 14px;
        }
        .dark-section {
          background: #361110;
          color: #F7EFE7;
          padding: 96px 24px;
        }
        .dark-inner {
          max-width: 1180px;
          margin: 0 auto;
        }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 52px;
        }
        .process-card {
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          padding: 28px;
          min-height: 240px;
        }
        .process-card h3 {
          font-size: 34px;
          margin-top: 42px;
          margin-bottom: 14px;
        }
        .process-card p {
          line-height: 1.7;
          color: rgba(247, 239, 231, 0.66);
          margin: 0;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          max-width: 1180px;
          margin: 0 auto;
          padding: 96px 24px;
        }
        .paragraph {
          font-size: 20px;
          line-height: 1.75;
          color: rgba(43, 15, 13, 0.86);
          margin: 0 0 24px;
        }
        .quote {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: 34px;
          line-height: 1.15;
          color: #361110;
          margin-top: 32px;
        }
        .footer {
          border-top: 1px solid rgba(54, 17, 16, 0.1);
          padding: 34px 24px;
        }
        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: rgba(43, 15, 13, 0.78);
          font-size: 14px;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .floating-card { display: none; }
          .section-head,
          .project-inner,
          .about-grid {
            grid-template-columns: 1fr;
            display: grid;
          }
          .section-head { align-items: start; }
          .project-card { padding: 28px; border-radius: 32px; }
          .artifact { height: auto; min-height: 340px; transform: none; }
          .artifact-wrap { max-width: 100%; }
          .archive-note { position: static; opacity: 1; transform: none; width: 100%; margin-top: 16px; }
          .artifact-wrap:hover .archive-note { transform: none; }
          .memory-card { width: 100%; transform: none; }
          .process-grid { grid-template-columns: 1fr; }
          .footer-inner { flex-direction: column; }
        }
      `}</style>

      <header className="nav">
        <nav className="nav-inner">
          <div className="logo">
            <Flower2 size={20} /> Annie Tran
          </div>

          <div className="nav-links">
            <a href="#projects">{t.navProjects}</a>
            <a href="#process">{t.navProcess}</a>
            <a href="#about">{t.navAbout}</a>
          </div>

          <div className="nav-actions">
            <button
              className="lang-btn"
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            >
              <Languages size={16} />
              <span style={{ fontWeight: language === "en" ? 800 : 400 }}>EN</span>/
              <span style={{ fontWeight: language === "fr" ? 800 : 400 }}>FR</span>
            </button>
            <button
              className="theme-btn"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button className="primary-btn">{t.contact}</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="section hero">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">
              <Sparkles size={16} /> {t.badge}
            </div>
            <h1>{t.hero}</h1>
            <p className="lead">{t.heroText}</p>
          </motion.div>

          <div className="glow" />
          <div className="floating-card">
            <p className="serif" style={{ fontSize: 28 }}>memory archive</p>
            <p className="small">A portfolio about emotion, systems and useful products.</p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">{t.selected}</p>
              <h2>{t.projects}</h2>
            </div>
            <p className="section-desc">{t.projectsText}</p>
          </div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="project-card"
              >
                <div className="grid-overlay" />
                <div className="project-inner">
                  <div>
                    <div className="meta">
                      <span>{project.archive}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-text">{project.description}</p>

                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="outline-btn">
                      {project.action} <ArrowUpRight size={16} />
                    </button>
                  </div>

                  <motion.div
                    className="artifact-wrap"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <motion.div
                      variants={{
                        rest: { rotate: 2, y: 0, scale: 1 },
                        hover: { rotate: -1.5, y: -14, scale: 1.025 },
                      }}
                      transition={{ type: "spring", stiffness: 180, damping: 18 }}
                      className="artifact"
                    >
                      <div className="artifact-top">
                        <span>{project.visual}</span>
                        <span>{project.type}</span>
                      </div>
                      <div className="mockup">
                        <motion.div
                          className="gradient-visual"
                          variants={{
                            rest: { opacity: 0.9 },
                            hover: { opacity: 1 },
                          }}
                        />
                        <motion.div
                          className="line"
                          style={{ width: "75%" }}
                          variants={{ rest: { width: "75%" }, hover: { width: "88%" } }}
                        />
                        <motion.div
                          className="line"
                          style={{ width: "50%" }}
                          variants={{ rest: { width: "50%" }, hover: { width: "68%" } }}
                        />
                        <motion.div
                          className="line"
                          style={{ width: "65%" }}
                          variants={{ rest: { width: "65%" }, hover: { width: "78%" } }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className={`memory-card ${clickedCard === index ? "clicked" : ""}`}
                      variants={{
                        rest: { y: 0, rotate: -3 },
                        hover: { y: 14, rotate: -1 },
                      }}
                      transition={{ type: "spring", stiffness: 170, damping: 18 }}
                      onClick={() => handleCardClick(index)}
                    >
                      <p className="serif" style={{ fontSize: 26, margin: 0 }}>
                        {project.archive}
                      </p>
                      <p style={{ margin: "6px 0 0", color: "rgba(54,17,16,0.55)" }}>
                        product memory
                      </p>
                    </motion.div>

                    <motion.div
                      className="archive-note"
                      variants={{
                        rest: { opacity: 0, y: -32, rotate: -2 },
                        hover: { opacity: 1, y: 0, rotate: -2 },
                      }}
                      transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    >
                      <p className="note-title">A hidden note for curious eyes</p>
                      <p className="note-text">
                        Hover to open the archive and discover the story behind this project.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="dark-section">
          <div className="dark-inner">
            <p style={{ color: "rgba(247,239,231,0.55)" }} className="eyebrow">
              {t.processTitle}
            </p>
            <h2 style={{ color: "#F7EFE7", maxWidth: 780 }}>{t.processHero}</h2>

            <div className="process-grid">
              {process.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="process-card">
                    <Icon size={26} />
                    <h3 className="serif">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="about-grid">
          <div>
            <p className="eyebrow">{t.about}</p>
            <h2>{t.aboutHero}</h2>
          </div>
          <div>
            <p className="paragraph">{t.aboutText1}</p>
            <p className="paragraph">{t.aboutText2}</p>
            <p className="paragraph">{t.aboutText3}</p>
            <p className="quote">{t.quote}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>{t.footer1}</p>
          <p>{t.footer2}</p>
        </div>
      </footer>
    </div>
  );
}
