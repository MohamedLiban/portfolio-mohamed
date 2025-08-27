import React, { useMemo, useState, useEffect, useRef } from "react";
import type { ReactNode, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Cpu,
  FlaskConical,
  GitBranch,
  Wrench,
  FileText,
  Mail,
  Phone,
  MapPin,
  Languages,
  Network,
  Rocket,
  Linkedin,
} from "lucide-react";

// ===== Editable profile links =====
const LINKEDIN_URL =
  "https://www.linkedin.com/in/mohamed-liban-187b77153/?originalSubdomain=se";

export default function PortfolioApp(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [spin, setSpin] = useState<number>(0);
  const [showContact, setShowContact] = useState<boolean>(false);

  const cvRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      setSpin(720);
      const t = setTimeout(() => {
        cvRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
      return () => clearTimeout(t);
    } else {
      setSpin(0);
    }
  }, [open]);

  const orbitItems = useMemo<OrbitItem[]>(
    () => [
      { label: "CV & About", icon: <FileText className="w-5 h-5" />, onClick: () => cvRef.current?.scrollIntoView({ behavior: "smooth" }) },
      { label: "Skills", icon: <Wrench className="w-5 h-5" /> },
      { label: "Experience", icon: <Rocket className="w-5 h-5" /> },
      { label: "Education", icon: <FileText className="w-5 h-5" /> },
      { label: "Projects", icon: <GitBranch className="w-5 h-5" />, onClick: () => projectsRef.current?.scrollIntoView({ behavior: "smooth" }) },
      { label: "Contact", icon: <Mail className="w-5 h-5" />, onClick: () => contactRef.current?.scrollIntoView({ behavior: "smooth" }) },
    ],
    []
  );

  // ===== Data =====
  const skills: SkillCategory[] = [
    {
      title: "Programming & Web",
      items: [
        "C#, .NET Core, ASP.NET Core",
        "React, TypeScript, JavaScript",
        "HTML, CSS",
        "SQL, Entity Framework Core",
        "API development",
        "Java, Python",
      ],
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: "Tools & Platforms",
      items: ["Git & GitHub", "Docker (basics)", "CI (GitHub Actions)", "Azure/AWS (basics)", "Measurement instruments (basic)"],
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      title: "Testing & Production",
      items: ["Quality control & documentation", "Troubleshooting & process improvement", "Hardware/software integration", "Structured test processes"],
      icon: <FlaskConical className="w-5 h-5" />,
    },
  ];

  const experience: ExperienceItem[] = [
    {
      role: "Youth Worker – HVB Home",
      company: "Gothenburg",
      period: "Sep 2024 – Present",
      bullets: ["Supported youths with structure, patience and problem-solving.", "Built strong teamwork and independent decision-making."],
    },
    {
      role: "Project Leader – TryggRätt",
      company: "Gothenburg",
      period: "Mar 2024 – Jun 2024",
      bullets: ["Planned and coordinated youth safety projects with stakeholders.", "Developed leadership, communication and organizational skills."],
    },
    {
      role: "Machine Operator – Wellspect",
      company: "Gothenburg",
      period: "2021 – 2023",
      bullets: ["Operated production equipment in cleanroom environment.", "Ensured documentation accuracy and process improvements."],
    },
    {
      role: "Assembler – Adient",
      company: "Gothenburg",
      period: "2015 – 2021",
      bullets: ["Assembly and quality checks in automotive industry.", "Precision, structured testing and teamwork under pace."],
    },
  ];

  // Featured GitHub repos
  const featuredRepos: ProjectItem[] = [
    {
      name: "CleanCodeRepo",
      stack: ["C#", ".NET"],
      desc: "Refactoring/clean code exercises and patterns.",
      url: "https://github.com/MohamedLiban/CleanCodeRepo",
    },
    {
      name: "Gamification-Language",
      stack: ["JavaScript", "Web"],
      desc: "Gamified language learning / webapp concept.",
      url: "https://github.com/MohamedLiban/Gamification-Language",
    },
  ];

  // LIA work
  const liaProjects: ProjectItem[] = [
    {
      name: "ASP.NET Core Webapp",
      stack: ["C#", ".NET", "EF Core", "SQL"],
      desc: "Built during LIA: CRUD web app with Entity Framework, authentication and REST API.",
    },
    {
      name: "Java/Python Integrations",
      stack: ["Java", "Python"],
      desc: "Backend utilities for data processing and system integrations (LIA).",
    },
  ];

  // This portfolio (now with demoUrl + url)
  const thisPortfolio: ProjectItem[] = [
    {
      name: "React Portfolio (this)",
      stack: ["React", "Tailwind", "Framer Motion", "TypeScript"],
      desc: "Interactive single-page portfolio with animated orbit navigation.",
      demoUrl: "https://portfolio-mohamed-pc2p.vercel.app",
      url: "https://github.com/MohamedLiban/portfolio-mohamed",
    },
  ];

  const education: EducationItem[] = [
    {
      name: ".NET Developer – NBI Handelsakademin (YH)",
      period: "Aug 2023 – Jun 2025",
      bullets: ["Programming, databases, web development, agile methods.", "LIA: ASP.NET Core + EF, Java/Python backend integrations."],
    },
    { name: "Burgårdens Gymnasium – Social & Behavioral Science", period: "2011 – 2014", bullets: ["High school diploma."] },
  ];

  const languages: LanguageItem[] = [
    { name: "Swedish", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Somali", level: "Fluent" },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-slate-950">
      <AnimatedBackground />

      {/* Header */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm grid place-content-center">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Mohamed Liban</h1>
            <p className="text-xs text-white/70 -mt-0.5">Junior Software Developer • .NET • React • TypeScript</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:Mohamedmoe@hotmail.se" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <Mail className="w-4 h-4" /> Mohamedmoe@hotmail.se
          </a>
          <a href="tel:+46708197242" className="hidden sm:inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <Phone className="w-4 h-4" /> +46 708 197 242
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.1]">
              Curious & driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to violet-400">Junior Developer</span>
            </h2>
            <p className="mt-4 text-white/80">
              29-year-old Junior .NET Developer who recently graduated. Skilled in C#, .NET, React and TypeScript with hands-on LIA experience in
              ASP.NET Core, Entity Framework, Java and Python integrations. Strong background in production & quality control — structured,
              detail-oriented and test-focused.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl active:scale-[0.99] transition"
              >
                Open portfolio
              </button>
              <button
                onClick={() => setShowContact(true)}
                className="px-5 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                Contact me
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <Badge icon={<Code2 className="w-4 h-4" />}>C# / .NET</Badge>
              <Badge icon={<Code2 className="w-4 h-4" />}>React</Badge>
              <Badge icon={<Code2 className="w-4 h-4" />}>TypeScript</Badge>
              <Badge icon={<Database className="w-4 h-4" />}>SQL / EF Core</Badge>
              <Badge icon={<Server className="w-4 h-4" />}>APIs</Badge>
              <Badge icon={<FlaskConical className="w-4 h-4" />}>Testing mindset</Badge>
            </div>
          </div>

          {/* Right card */}
          <div className="relative h-[380px] sm:h-[460px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">Profile</h3>
              <ul className="space-y-3 text-white/80 text-sm leading-relaxed">
                <li>Before tech: years in manufacturing & quality control — foundation in structured testing and documentation.</li>
                <li>Enjoy hands-on work combining hardware & software, solving tricky problems.</li>
                <li>People-oriented mindset from youth work & project leadership.</li>
                <li>Goal: grow into a skilled Software Developer who grows together with technology.</li>
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-white/70">
                <Stat label="Background" value="4+ yrs production & QA" />
                <Stat label="Studies" value="2 yrs .NET / React" />
                <Stat label="Languages" value="SV • EN • SO" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur"
            onClick={() => setShowContact(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="max-w-md w-full rounded-3xl bg-white/10 border border-white/20 p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:Mohamedmoe@hotmail.se" className="underline">Mohamedmoe@hotmail.se</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+46708197242" className="underline">+46 708 197 242</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Gothenburg, Sweden
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
                </div>
              </div>
              <div className="mt-6 text-right">
                <button
                  onClick={() => setShowContact(false)}
                  className="px-4 py-2 rounded-xl border border-white/15 text-white/80 hover:text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-in portfolio */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed inset-0 z-30 bg-slate-950/80 backdrop-blur-xl overflow-y-auto"
          >
            <div className="absolute inset-0 -z-10">
              <AnimatedBackground subtle />
            </div>
            <div className="max-w-6xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">Portfolio</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-xl border border-white/15 text-white/80 hover:text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="relative mt-8 grid lg:grid-cols-2 gap-10 items-center">
                {/* Orbit */}
                <div className="relative w-full aspect-square max-w-[520px] mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
                  <motion.div
                    className="absolute inset-6 rounded-full orbit-rotor"
                    animate={{ rotate: spin }}
                    transition={{ type: "spring", stiffness: 40, damping: 10 }}
                  >
                    {orbitItems.map((item, i) => (
                      <OrbitChip key={i} index={i} total={orbitItems.length}>
                        <button onClick={item.onClick} className="inline-flex items-center gap-2" title={item.label} aria-label={item.label}>
                          {item.icon}
                          <span className="ml-1 text-sm">{item.label}</span>
                        </button>
                      </OrbitChip>
                    ))}
                  </motion.div>
                  <div className="absolute inset-1 grid place-content-center">
                    <div className="rounded-3xl p-6 text-center bg-white/10 backdrop-blur border border-white/10">
                      <h4 className="text-lg font-semibold">Mohamed Liban</h4>
                      <p className="text-xs text-white/70">Junior .NET Developer • 29 years</p>
                      <div className="mt-3 text-xs text-white/80 flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 justify-center"><Mail className="w-4 h-4" /> Mohamedmoe@hotmail.se</span>
                        <span className="inline-flex items-center gap-2 justify-center"><Phone className="w-4 h-4" /> +46 708 197 242</span>
                        <span className="inline-flex items-center gap-2 justify-center"><MapPin className="w-4 h-4" /> Gothenburg, Sweden</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid gap-6">
                  {/* CV & About */}
                  <Card title="CV & About" icon={<FileText className="w-5 h-5" />}>
                    <div ref={cvRef} id="cv" className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-white/80">
                          <p><span className="font-semibold">Name:</span> Mohamed Liban</p>
                          <p><span className="font-semibold">Age:</span> 29</p>
                          <p><span className="font-semibold">Location:</span> Gothenburg, Sweden</p>
                          <p className="mt-2">
                            Junior .NET Developer with strong interest in React and TypeScript. Recently graduated from a 2-year YH program with
                            hands-on LIA in ASP.NET Core/EF, plus Java and Python integrations. I enjoy structured testing and building reliable systems.
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-white/80">
                        <ul className="space-y-1 list-disc list-inside">
                          <li>Focus: .NET, React, TypeScript, SQL, testing</li>
                          <li>Soft skills: teamwork, communication, problem-solving</li>
                          <li>Looking for: Junior Developer / Software Developer roles</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  {/* Skills */}
                  <Card title="Key Skills" icon={<Wrench className="w-5 h-5" />}>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {skills.map((cat, idx) => (
                        <div key={idx}>
                          <div className="flex items-center gap-2 font-medium mb-2">
                            {cat.icon}
                            <span>{cat.title}</span>
                          </div>
                          <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                            {cat.items.map((it, i) => (
                              <li key={i}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Projects (split groups) */}
                  <Card title="Projects" icon={<GitBranch className="w-5 h-5" />}>
                    <div ref={projectsRef} className="grid gap-8">
                      {/* Featured Repos */}
                      <div>
                        <h5 className="text-sm font-semibold mb-3 text-white/80">Featured Repos</h5>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {featuredRepos.map((p, idx) => (
                            <ProjectCard key={`repo-${idx}`} p={p} />
                          ))}
                        </div>
                      </div>

                      {/* LIA Projects */}
                      <div>
                        <h5 className="text-sm font-semibold mb-3 text-white/80">LIA Projects</h5>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {liaProjects.map((p, idx) => (
                            <ProjectCard key={`lia-${idx}`} p={p} />
                          ))}
                        </div>
                      </div>

                      {/* This Portfolio */}
                      <div>
                        <h5 className="text-sm font-semibold mb-3 text-white/80">This Portfolio</h5>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {thisPortfolio.map((p, idx) => (
                            <ProjectCard key={`this-${idx}`} p={p} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Experience */}
                  <Card title="Experience" icon={<Network className="w-5 h-5" />}>
                    <div className="grid gap-4">
                      {experience.map((e, idx) => (
                        <div key={idx} className="rounded-2xl p-4 bg-white/5 border border-white/10">
                          <div className="flex flex-wrap items-center gap-2">
                            <div className="font-semibold">{e.role}</div>
                            <span className="text-white/50">• {e.company}</span>
                            <span className="ml-auto text-white/60 text-sm">{e.period}</span>
                          </div>
                          <ul className="mt-2 text-sm text-white/80 space-y-1 list-disc list-inside">
                            {e.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Education */}
                  <Card title="Education" icon={<FileText className="w-5 h-5" />}>
                    <div className="grid gap-4">
                      {education.map((ed, idx) => (
                        <div key={idx} className="rounded-2xl p-4 bg-white/5 border border-white/10">
                          <div className="flex flex-wrap items-center gap-2">
                            <div className="font-semibold">{ed.name}</div>
                            <span className="ml-auto text-white/60 text-sm">{ed.period}</span>
                          </div>
                          <ul className="mt-2 text-sm text-white/80 space-y-1 list-disc list-inside">
                            {ed.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Languages & Contact (still available inside slide) */}
                  <div className="grid sm:grid-cols-2 gap-6" id="contact" ref={contactRef}>
                    <Card title="Languages" icon={<Languages className="w-5 h-5" />}>
                      <ul className="text-sm text-white/80 space-y-1">
                        {languages.map((l, i) => (
                          <li key={i} className="flex items-center justify-between">
                            <span>{l.name}</span>
                            <span className="text-white/60">{l.level}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                    <Card title="Contact" icon={<Mail className="w-5 h-5" />}>
                      <div className="text-sm text-white/80 space-y-2">
                        <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href="mailto:Mohamedmoe@hotmail.se" className="underline offset-2">Mohamedmoe@hotmail.se</a></div>
                        <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+46708197242" className="underline">+46 708 197 242</a></div>
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Gothenburg, Sweden</div>
                        <div className="flex items-center gap-2"><Linkedin className="w-4 h-4" /> <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a></div>
                      </div>
                    </Card>
                  </div>

                  {/* Playground */}
                  <Card title="Playground & Test cases" icon={<FlaskConical className="w-5 h-5" />}>
                    <Playground />
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <StyleDefs />
    </div>
  );
}

// ===== Types =====
type OrbitItem = { label: string; icon: ReactNode; onClick?: () => void };
type SkillCategory = { title: string; items: string[]; icon: ReactNode };
type ExperienceItem = { role: string; company: string; period: string; bullets: string[] };
type ProjectItem = { name: string; stack: string[]; desc: string; url?: string; demoUrl?: string };
type EducationItem = { name: string; period: string; bullets: string[] };
type LanguageItem = { name: string; level: string };

// ===== UI Subcomponents =====
function Badge({ children, icon }: { children: ReactNode; icon?: ReactNode }): JSX.Element {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
      {icon}
      {children}
    </span>
  );
}

function Card({ title, icon, children }: { title: string; icon?: ReactNode; children: ReactNode }): JSX.Element {
  return (
    <div className="rounded-3xl p-5 bg-white/10 backdrop-blur border border-white/10 shadow-xl">
      <div className="flex items-center gap-2 font-semibold">
        {icon}
        <h4>{title}</h4>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }): JSX.Element {
  return (
    <div className="rounded-2xl px-3 py-2 bg-white/5 border border-white/10">
      <div className="text-[10px] uppercase tracking-wide text-white/50">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function ProjectCard({ p }: { p: ProjectItem }): JSX.Element {
  return (
    <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
      <div className="flex items-center justify-between gap-2">
        <div className="font-semibold">{p.name}</div>
        <div className="flex items-center gap-2">
          {p.demoUrl && (
            <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded-lg border border-white/20 hover:bg-white/10">
              Live demo
            </a>
          )}
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded-lg border border-white/20 hover:bg-white/10">
              View repo
            </a>
          )}
        </div>
      </div>
      <div className="text-xs text-white/60 mt-1">{p.stack.join(" • ")}</div>
      <p className="text-sm text-white/80 mt-2">{p.desc}</p>
    </div>
  );
}

function OrbitChip({ index, total, children }: { index: number; total: number; children: ReactNode }): JSX.Element {
  const angle = (index / total) * 360;
  const style: CSSProperties = { transform: `rotate(${angle}deg) translateY(-38%) translateX(0) rotate(-${angle}deg)` };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={style}>
      <div className="orbit-chip inline-flex items-center px-3 py-2 rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-sm">
        {children}
      </div>
    </div>
  );
}

function AnimatedBackground({ subtle = false }: { subtle?: boolean }): JSX.Element {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-[20%] bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(192,132,252,0.25),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(147,197,253,0.25),transparent_40%)] animate-slow-pan" />
      {!subtle && <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.12),transparent_30%)] mix-blend-overlay" />}
    </div>
  );
}

function Playground(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const basicSkills: string[] = ["C#", ".NET", "React", "TypeScript", "SQL", "Testing"];
  const filtered = basicSkills.filter((s) => s.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3 text-sm">
        <button onClick={() => setCount((c) => c + 1)} className="px-3 py-2 rounded-lg bg-white text-slate-900">+1</button>
        <span className="text-white/80">Counter: {count}</span>
      </div>
      <div className="text-sm">
        <div className="mb-2">Filter skills:</div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="type to filter…"
          className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 outline-none"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {filtered.map((s) => (
            <span key={s} className="px-2 py-1 rounded-lg bg-white/10 border border-white/15 text-xs">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="relative z-10 max-w-6xl mx-auto px-6 pb-10 text-xs text-white/60">
      <div className="flex flex-wrap items-center gap-2">
        <span>© {new Date().getFullYear()} Mohamed Liban</span>
        <span className="hidden sm:inline">•</span>
        <span>Built with React + Tailwind + Framer Motion + TypeScript</span>
      </div>
    </footer>
  );
}

function StyleDefs(): JSX.Element {
  return (
    <style>
      {`
      .animate-slow-pan { animation: slow-pan 20s linear infinite alternate; }
      @keyframes slow-pan { from { transform: translateY(-2%) translateX(-1%); } to { transform: translateY(2%) translateX(1%); } }
      .orbit-chip { box-shadow: 0 8px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08); }
      .orbit-rotor { will-change: transform; }
    `}
    </style>
  );
}
