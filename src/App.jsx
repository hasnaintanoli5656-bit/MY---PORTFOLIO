import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Mail,
  Code2,
  Layers3,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Monitor,
  Palette,
  Database,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    no: "01",
    name: "Blog Application",
    type: "WEB APPLICATION",
    screenshot: "/projects/blogify.png",
    description:
      "A complete blogging experience where users can create accounts, publish posts, and manage their own content. Built with authentication, protected routes and Firebase database integration.",
    tech: ["React", "Firebase", "React Router"],
    demo: "https://blog-application-react-with-firebas.vercel.app/",
    github:
      "https://github.com/hasnaintanoli5656-bit/Blog-Application-react-with-firebase",
    color: "from-violet-600/30 to-blue-600/10",
    icon: "✦",
  },
  {
    no: "02",
    name: "Products App",
    type: "NEXT.JS APPLICATION",
    screenshot: "/projects/products-app.png",
    description:
      "A product browsing application with dynamic product pages, API-based data and a clean user interface. Built to explore modern Next.js routing and TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://product-app-dynamic-routing-next-js.vercel.app/products",
    github:
      "https://github.com/hasnaintanoli5656-bit/product-app-dynamic-routing-next.js",
    color: "from-cyan-600/30 to-blue-600/10",
    icon: "◈",
  },
  {
    no: "03",
    name: "Food Website",
    type: "REACT APPLICATION",
    screenshot: "/projects/foodie-express.png",
    description:
      "A food website with signup, login and dashboard interfaces. This project helped me practise building reusable components and handling user authentication flows.",
    tech: ["React", "Firebase", "CSS"],
    demo: "https://hasnain-login-signup-dashboard-react.netlify.app/signup",
    github:
      "https://github.com/hasnaintanoli5656-bit/signup-login-dashboard-react",
    color: "from-orange-600/30 to-red-600/10",
    icon: "✺",
  },
  {
    no: "04",
    name: "Salt n Pepper",
    type: "RESPONSIVE WEBSITE",
    screenshot: "/projects/salt-n-pepper.png",
    description:
      "A restaurant website recreation focused on layout, visual consistency and responsive design using HTML and CSS.",
    tech: ["HTML", "CSS", "Responsive Design"],
    demo: "https://salt-n-paper-theta.vercel.app/",
    github: "https://github.com/hasnaintanoli5656-bit/Salt-n-paper",
    color: "from-amber-600/30 to-orange-600/10",
    icon: "◉",
  },
  {
    no: "05",
    name: "Quiz App",
    type: "INTERACTIVE APPLICATION",
    screenshot: "/projects/quiz-app.png",
    description:
      "An interactive quiz application that brings questions and answers into a simple, engaging interface. Built to strengthen my JavaScript and React fundamentals.",
    tech: ["React", "JavaScript", "CSS"],
    demo: "https://quiz-app-tanoli2.vercel.app/",
    github: "https://github.com/hasnaintanoli5656-bit/QUIZ-APP",
    color: "from-pink-600/30 to-violet-600/10",
    icon: "?",
  },
  {
    no: "06",
    name: "Weather App",
    type: "API INTEGRATION",
    screenshot: "/projects/weather-app.png",
    description:
      "A weather application that fetches information from an external API and presents it through a straightforward interface.",
    tech: ["React", "API", "CSS"],
    demo: "https://weather-app-tanoli2.vercel.app/",
    github: "https://github.com/hasnaintanoli5656-bit/WEATHER-APP",
    color: "from-sky-600/30 to-cyan-600/10",
    icon: "☁",
  },
  {
    no: "07",
    name: "Gallery App",
    type: "REACT APPLICATION",
    screenshot: "/projects/gallery-app.png",
    description:
      "A gallery interface for presenting images in an organised and responsive layout, built with React.",
    tech: ["React", "CSS"],
    demo: "https://gallery-app-react-umber.vercel.app/",
    github: "https://github.com/hasnaintanoli5656-bit/Gallery-App-REACT",
    color: "from-fuchsia-600/30 to-purple-600/10",
    icon: "▧",
  },
  {
    no: "08",
    name: "Todo App",
    type: "PRODUCTIVITY TOOL",
    screenshot: "/projects/todo.png",
    description:
      "A task management application created to practise interactive UI development and managing application state with React.",
    tech: ["React", "JavaScript"],
    demo: "https://todo-app-with-react-tanoli2.vercel.app/",
    github: "https://github.com/hasnaintanoli5656-bit/TODO-APP-with-REACT",
    color: "from-emerald-600/30 to-teal-600/10",
    icon: "✓",
  },
  {
    no: "09",
    name: "Watch Wise",
    type: "LANDING PAGE",
    screenshot: "/projects/watch-wise.png",
    description:
      "A watch-themed landing page designed around clean sections, visual hierarchy and responsive styling.",
    tech: ["HTML", "CSS"],
    demo: "https://watch-wise-landing-page.vercel.app/",
    github: "https://github.com/hasnaintanoli5656-bit/watch-wise-landing-page",
    color: "from-indigo-600/30 to-blue-600/10",
    icon: "◷",
  },
  {
    no: "10",
    name: "Advice App",
    type: "API APPLICATION",
    screenshot: "/projects/advice-app.png",
    description:
      "A small application that retrieves advice through an API and displays it in a simple interface.",
    tech: ["React", "API", "JavaScript"],
    demo: "https://sparkling-gecko-9318f9.netlify.app/",
    github: "https://github.com/hasnaintanoli5656-bit/ADVICE-APP-USING-REACT",
    color: "from-lime-600/30 to-green-600/10",
    icon: "✧",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Monitor,
    description: "Building responsive interfaces and modern web experiences.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "React.js",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    title: "UI & Styling",
    icon: Palette,
    description: "Creating clean layouts and consistent visual experiences.",
    skills: ["Tailwind CSS", "Bootstrap", "Material UI", "Responsive Design"],
  },
  {
    title: "State & Backend Tools",
    icon: Database,
    description: "Working with application data, authentication and APIs.",
    skills: ["Redux Toolkit", "Firebase", "REST APIs"],
  },
  {
    title: "Development Tools",
    icon: Code2,
    description: "Tools I use to write, manage and maintain code.",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function Heading({ eyebrow, title, highlight, description }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={reveal}
      className="mb-14"
    >
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl leading-8 text-gray-400">{description}</p>
      )}
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#111827] text-slate-100">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-violet-700/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 70, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-[500px] h-[500px] w-[500px] rounded-full bg-blue-700/15 blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -40, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]"
        />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/70 bg-[#111827]/95 shadow-lg shadow-black/10 backdrop-blur-xl">
        <nav className="relative mx-auto flex w-full max-w-7xl flex-row items-center justify-between gap-4 px-5 py-4 md:px-8">
          {/* Logo */}
          <a
            href="#home"
            className="!inline-flex !w-auto shrink-0 text-2xl font-black tracking-tight"
          >
            HT<span className="text-sky-400">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {nav.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="relative text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-sky-400"
              >
                {name}
              </a>
            ))}
          </div>

          {/* Let's Talk */}
          <a
            href="#contact"
            className="hidden !w-auto shrink-0 items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-300 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/20 active:scale-95 md:!inline-flex"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="!inline-flex !w-auto shrink-0 items-center justify-center rounded-xl border border-slate-700 p-2 text-white transition hover:border-sky-400 hover:text-sky-400 active:scale-95 md:!hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute left-0 right-0 top-full z-50 flex flex-col gap-2 border-b border-slate-700 bg-[#172235] p-5 shadow-xl md:hidden">
              {nav.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-sky-500/10 hover:text-sky-400"
                >
                  {name}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section
          id="home"
          className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-5 py-12 md:grid-cols-2 md:px-8"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.16 } } }}
          >
            <motion.div
              variants={reveal}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-wider text-emerald-300">
                OPEN TO FRONTEND OPPORTUNITIES
              </span>
            </motion.div>

            <motion.p
              variants={reveal}
              className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-violet-400"
            >
              Hello, I'm Hasnain Tanoli
            </motion.p>

            <motion.h1
              variants={reveal}
              className="text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-6xl lg:text-[76px]"
            >
              I turn ideas
              <br />
              into <span className="gradient-text">digital</span>
              <br />
              experiences<span className="text-violet-400">.</span>
            </motion.h1>

            <motion.div
              variants={reveal}
              className="mt-7 max-w-xl space-y-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              <p>
                I'm a Frontend Developer who builds responsive, modern and
                user-friendly web applications using React, Next.js and
                TypeScript. I focus on clean code, thoughtful design and smooth
                user experiences.
              </p>

              <p>
                I'm actively seeking Frontend Developer roles, internships and
                freelance opportunities where I can contribute my skills, work
                on real-world projects and grow with a development team.
              </p>
            </motion.div>

            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-500/30 active:scale-95"
              >
                Explore My Projects{" "}
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:rotate-45"
                />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 rounded-xl border border-white/15 px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300 active:scale-95"
              >
                Contact Me <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-10 flex items-center gap-6 text-gray-400"
            >
              <a
                href="https://github.com/hasnaintanoli5656-bit"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                <FaGithub size={21} />
              </a>
              <a
                href="https://www.linkedin.com/in/hasnain-tanoli-92a057414/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                <FaLinkedin size={21} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hasnain.tanoli5656@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                <Mail size={21} />
              </a>
            </motion.div>
          </motion.div>

          {/* ROUND PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-[460px] items-center justify-center py-10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-[360px] w-[360px] rounded-full border border-dashed border-violet-400/30 sm:h-[430px] sm:w-[430px]"
            />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute h-[300px] w-[300px] rounded-full bg-violet-600/30 blur-[90px] sm:h-[360px] sm:w-[360px]"
            />

            <div className="relative rounded-full bg-gradient-to-br from-violet-400 via-blue-500 to-cyan-400 p-[5px] shadow-[0_0_80px_rgba(124,58,237,0.3)]">
              <div className="overflow-hidden rounded-full border-[7px] border-[#10111c]">
                <img
                  src="/hasnain-profile.jpeg"
                  alt="Hasnain Tanoli"
                  className="h-[270px] w-[270px] rounded-full object-cover object-center sm:h-[340px] sm:w-[340px]"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-2 top-16 rounded-2xl border border-white/10 bg-[#171827]/95 p-4 shadow-2xl backdrop-blur-xl sm:left-0"
            >
              <Code2 className="mb-2 text-violet-400" size={22} />
              <p className="text-xs text-gray-400">Speciality</p>
              <p className="text-sm font-bold">Frontend Dev</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -bottom-1 -right-1 rounded-2xl border border-white/10 bg-[#171827]/95 p-4 shadow-2xl backdrop-blur-xl sm:right-0"
            >
              <Sparkles className="mb-2 text-cyan-400" size={22} />
              <p className="text-xs text-gray-400">Mindset</p>
              <p className="text-sm font-bold">Always Learning</p>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="border-y border-white/[0.07] bg-white/[0.02] py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
                01 / About Me
              </p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                Not just code.
                <br />
                <span className="gradient-text">A passion to create.</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
                <p>
                  I'm a Frontend Developer passionate about building modern,
                  responsive and user-focused web applications. I work with
                  HTML, CSS, JavaScript, React.js, Next.js and TypeScript to
                  turn ideas into functional digital experiences.
                </p>

                <p>
                  I'm continuously improving my skills through practical
                  development and my Web Development studies at Saylani Mass IT
                  Training (SMIT). I'm also looking for professional
                  opportunities where I can contribute to real projects,
                  collaborate with a team and deliver meaningful results.
                </p>
              </div>
              <div className="mt-9 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#11121d] p-5">
                  <GraduationCap className="mb-4 text-violet-400" size={25} />
                  <p className="text-xs text-gray-500">Learning at</p>
                  <h3 className="mt-2 font-bold">SMIT</h3>
                  <p className="mt-1 text-sm text-gray-400">Web Development</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#11121d] p-5">
                  <Layers3 className="mb-4 text-cyan-400" size={25} />
                  <p className="text-xs text-gray-500">My focus</p>
                  <h3 className="mt-2 font-bold">Frontend</h3>
                  <p className="mt-1 text-sm text-gray-400">Modern Web Apps</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="mx-auto max-w-7xl px-5 pt-8 pb-28 md:px-8"
        >
          <Heading
            eyebrow="02 / My Toolkit"
            title="Skills that bring"
            highlight="ideas to life."
            description="My frontend toolkit combines core web technologies, modern UI frameworks and practical development tools. These are the technologies I've been learning and using while building projects."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.7 }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#171827] to-[#10111a] p-7 transition hover:border-violet-400/40 sm:p-9"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="rounded-2xl bg-violet-500/10 p-4 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs tracking-widest text-gray-600">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {group.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-gray-300 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-200 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-300 active:scale-95"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-y border-white/[0.07] bg-[#0e101a] py-14"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Heading
              eyebrow="03 / Selected Work"
              title="Things I've"
              highlight="created."
              description="Every project is an opportunity to learn something new. Explore my work, see what I built, and check out the code behind each experience."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.no}
                  initial={{ opacity: 0, y: 55, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.01,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.65, delay: (index % 2) * 0.12 }}
                  className="project-card group overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#243449]/80 transition-all duration-500 hover:border-sky-400/50 hover:shadow-[0_20px_60px_rgba(56,189,248,0.12)]"
                >
                  {/* Visual project preview */}
                  <div className="project-preview relative h-64 overflow-hidden bg-[#10111c] sm:h-72">
                    {project.screenshot ? (
                      <img
                        src={project.screenshot}
                        alt={`${project.name} project screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`flex h-full items-center justify-center bg-gradient-to-br ${project.color}`}
                      >
                        <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/30 bg-white/10 text-6xl font-black text-white shadow-2xl backdrop-blur-xl">
                          {project.icon}
                        </div>
                      </div>
                    )}

                    {/* Screenshot overlay */}
                    <div className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110">
                      <div className="flex items-start justify-between">
                        <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
                          PROJECT / {project.no}
                        </span>

                        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-2 text-[10px] font-bold text-white backdrop-blur-md">
                          {project.type}
                        </span>
                      </div>

                      <div className="flex translate-y-3 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm font-semibold text-white">
                          Explore Project
                        </p>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-white transition hover:bg-violet-500"
                          aria-label={`Open ${project.name}`}
                        >
                          <ExternalLink size={19} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight transition group-hover:text-violet-300">
                          {project.name}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-gray-400">
                          {project.description}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-gray-600">
                        {project.no}
                      </span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex gap-3 border-t border-white/10 pt-6">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-500/30 active:scale-95"
                      >
                        Live Demo <ExternalLink size={15} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-500/30 active:scale-95"
                      >
                        <FaGithub size={15} /> Source Code
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-[#243449] via-[#1e293b] to-[#172235] p-8 sm:p-14 md:p-20"
          >
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
            <div className="relative grid gap-12 md:grid-cols-2 md:items-end">
              <div>
                <p className="mb-6 text-xs font-bold tracking-[0.3em] text-violet-400">
                  04 / GET IN TOUCH
                </p>
                <h2 className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
                  Let's make
                  <br />
                  something <span className="gradient-text">great.</span>
                </h2>
                <p className="mt-7 max-w-md leading-8 text-gray-400">
                  Have an idea, a project or an opportunity to discuss? I'd be
                  happy to connect, share ideas and learn something new
                  together.
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hasnain.tanoli5656@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-500/30 active:scale-95"
                >
                  Say Hello
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="space-y-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hasnain.tanoli5656@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <FaEnvelope className="text-violet-400" size={19} />
                    Email
                  </span>
                  <ArrowUpRight className="text-gray-500" />
                </a>
                <a
                  href="https://github.com/hasnaintanoli5656-bit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <FaGithub className="text-violet-400" size={19} /> GitHub
                  </span>
                  <ArrowUpRight className="text-gray-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hasnain-tanoli-92a057414/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <FaLinkedin className="text-violet-400" size={19} />{" "}
                    LinkedIn
                  </span>
                  <ArrowUpRight className="text-gray-500" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="relative overflow-hidden border-t border-slate-700/70 bg-[#111827] px-5 pt-16 pb-8">
          {/* Background glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 border-b border-slate-700/70 pb-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Brand */}
              <div>
                <a href="#home" className="text-3xl font-black tracking-tight">
                  HT<span className="text-sky-400">.</span>
                </a>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
                  I'm a Frontend Developer passionate about building modern,
                  responsive and user-friendly web experiences. Let's create
                  something meaningful together.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Open to Opportunities
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-6 text-lg font-bold text-white">
                  Quick Links
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  {[
                    ["Home", "#home"],
                    ["About", "#about"],
                    ["Skills", "#skills"],
                    ["Projects", "#projects"],
                    ["Contact", "#contact"],
                  ].map(([label, link]) => (
                    <a
                      key={label}
                      href={link}
                      className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-sky-400"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div>
                <h3 className="mb-6 text-lg font-bold text-white">
                  Let's Connect
                </h3>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://github.com/hasnaintanoli5656-bit"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-[#243449] text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-400"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hasnain-tanoli-92a057414/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-[#243449] text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-400"
                  >
                    <FaLinkedin size={20} />
                  </a>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hasnain.tanoli5656@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-[#243449] text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-400"
                  >
                    <FaEnvelope size={21} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center sm:flex-row">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Hasnain Tanoli. All rights
                reserved.
              </p>

              <a
                href="#home"
                className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-sky-400"
              >
                Back to top
                <span className="transition-transform duration-300 group-hover:-translate-y-1">
                  ↑
                </span>
              </a>
            </div>
          </div>
        </footer>
      </main>
      {/* FLOATING BACK TO TOP BUTTON */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{
          opacity: showTopButton ? 1 : 0,
          scale: showTopButton ? 1 : 0.5,
          y: showTopButton ? 0 : 20,
          pointerEvents: showTopButton ? "auto" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ y: -5, scale: 1.08 }}
        whileTap={{ scale: 0.88 }}
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/40 bg-[#172235]/95 text-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.18)] backdrop-blur-xl transition-colors hover:bg-sky-500 hover:text-white sm:bottom-8 sm:right-8"
      >
        <ArrowUpRight size={22} className="-rotate-45" />
      </motion.button>
    </div>
  );
}
