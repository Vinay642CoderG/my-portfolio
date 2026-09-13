import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import {
  SiCss,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { MdApi, MdStorage } from 'react-icons/md'
import { VscCode, VscTools } from 'react-icons/vsc'
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
  ChevronUp,
  Layers,
  Server,
  Sparkles,
} from 'lucide-react'
import { projects } from './data/projects'
import { services } from './data/services'
import { experience } from './data/experience'
import { skills } from './data/skills'
import { education } from './data/education'
import { profile } from './data/profile'
import DeveloperNetwork from './components/DeveloperNetwork'
const nav = ['Home', 'About', 'Projects', 'Services', 'Experience', 'Contact']
const icons = [Layers, Code2, Server]
const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.45 },
}
function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      aria-label="Toggle colour theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
function NavLinks({ onClick = () => {} }) {
  return nav.map((item) => (
    <a key={item} href={`#${item.toLowerCase()}`} onClick={onClick}>
      {item}
    </a>
  ))
}

function TechnologyTag({ name }) {
  const technologyIcons = {
    React: [SiReact, '#149eca'],
    'React.js': [SiReact, '#149eca'],
    'React Hooks': [SiReact, '#149eca'],
    JavaScript: [SiJavascript, '#f7df1e'],
    'Tailwind CSS': [SiTailwindcss, '#06b6d4'],
    'HTML & CSS': [SiHtml5, '#e34f26'],
    CSS: [SiCss, '#1572b6'],
    'Node.js': [SiNodedotjs, '#5fa04e'],
    Express: [SiExpress, '#777777'],
    'Express.js': [SiExpress, '#777777'],
    'REST APIs': [MdApi, '#8b5cf6'],
    'RESTful API Development': [MdApi, '#8b5cf6'],
    'API Integration': [MdApi, '#8b5cf6'],
    FastAPI: [SiFastapi, '#009688'],
    MongoDB: [SiMongodb, '#47a248'],
    PostgreSQL: [SiPostgresql, '#4169e1'],
    SQL: [MdStorage, '#e48e00'],
    MySQL: [MdStorage, '#4479a1'],
    Firebase: [SiFirebase, '#dd8a00'],
    Python: [SiPython, '#3776ab'],
    OpenAI: [Sparkles, '#10a37f'],
    'AI/ML': [Sparkles, '#d9468f'],
    Git: [SiGit, '#f05032'],
    GitHub: [SiGit, '#8b5cf6'],
    'VS Code': [VscCode, '#278bd2'],
    Vite: [SiVite, '#8367ff'],
    Figma: [SiFigma, '#f24e1e'],
    Postman: [SiPostman, '#ff6c37'],
    'Local-first': [VscTools, '#278bd2'],
  }
  const [Icon, color] = technologyIcons[name] || [VscCode, '#7653dd']

  return (
    <motion.span
      className="tech-tag"
      style={{ '--tech-color': color }}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -3, scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ duration: 0.22 }}
    >
      <Icon fill={color} aria-hidden="true" />
      {name}
    </motion.span>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [filter, setFilter] = useState('All')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="nav sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-[var(--line)] px-6 backdrop-blur-xl md:justify-center md:gap-10"
      >
        <a className="brand shrink-0" href="#home">
          <span>V</span> Vinay
        </a>
        <nav className="desktop-links hidden items-center gap-7 text-sm font-semibold text-[var(--muted)] md:flex">
          <NavLinks />
        </nav>
        <div className="nav-actions flex shrink-0 items-center gap-2.5">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="menu" aria-label="Open navigation">
                <Menu size={20} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="overlay" />
              <Dialog.Content className="mobile-nav">
                <Dialog.Title>Navigation</Dialog.Title>
                <Dialog.Close className="close" aria-label="Close navigation">
                  <X />
                </Dialog.Close>
                <NavLinks onClick={() => document.querySelector('.close')?.click()} />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </motion.header>
      <main>
        <section
          id="home"
          className="hero shell grid min-h-[calc(100vh-72px)] items-center gap-14 py-20 md:grid-cols-[1.1fr_.9fr] md:gap-20"
        >
          <motion.div {...fade} className="hero-copy">
            <p className="eyebrow">
              <i /> HI, I'M VINAY BHAGAT
            </p>
            <h1>
              Full-Stack Developer
              <br />
              <em>building modern</em> web apps.
            </h1>
            <p className="lede">
              I create focused, thoughtful web experiences where strong engineering meets a clear
              visual point of view.
            </p>
            <div className="hero-buttons my-8 flex flex-wrap gap-3">
              <a className="button primary" href="#projects">
                View projects <ArrowDownRight size={17} />
              </a>
              <a className="button ghost" href="#contact">
                Contact me
              </a>
            </div>
            <div className="socials flex gap-2.5">
              <motion.a
                whileHover={{ y: -4, rotate: -4 }}
                aria-label="GitHub"
                href="https://github.com/Vinay642CoderG"
              >
                <Code2 size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -4, rotate: 4 }}
                aria-label="LinkedIn"
                href="https://linkedin.com/in/vinay-bhagat-dev"
              >
                <ArrowUpRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -4, rotate: -4 }}
                aria-label="Email"
                href="mailto:ytvinay345@gmail.com"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            {...fade}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="terminal-wrap relative"
          >
            <DeveloperNetwork />
          </motion.div>
        </section>
        <section
          id="about"
          className="section shell relative border-t border-[var(--line)] py-20 lg:py-28"
        >
          <motion.div {...fade} className="section-heading">
            <p className="eyebrow">01 — ABOUT</p>
            <h2>
              Full-stack by focus.
              <br />
              <em>Deliberate by craft.</em>
            </h2>
          </motion.div>
          <div className="about-grid grid gap-10 md:grid-cols-2 md:gap-20">
            <motion.div {...fade}>
              <p className="body-copy">
                I&apos;m a Full-Stack Developer with hands-on experience building MERN stack
                applications using MongoDB, Express.js, React.js, and Node.js.
              </p>
              <p className="body-copy muted">
                I develop RESTful APIs, JWT authentication, responsive interfaces, and frontend
                integrations while focusing on clean, maintainable code.
              </p>
              <a className="text-link" href="#contact">
                More about me <ArrowUpRight size={16} />
              </a>
            </motion.div>
            <motion.div {...fade} className="stats">
              <div>
                <strong>02</strong>
                <span>
                  Development
                  <br /> internships
                </span>
              </div>
              <div>
                <strong>2025</strong>
                <span>
                  B.Tech
                  <br /> graduation
                </span>
              </div>
              <div>
                <strong>2024</strong>
                <span>
                  NPTEL Python for
                  <br /> Data Science
                </span>
              </div>
            </motion.div>
          </div>
          <div className="skill-grid mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(([category, names]) => (
              <div className="skill-group" key={category}>
                <span>{category}</span>
                <div>
                  {names.map((name) => (
                    <TechnologyTag key={name} name={name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <article className="skill-group" key={`${item.degree}-${item.period}`}>
                <span>{item.period}</span>
                <h3 className="mt-3 text-lg font-bold">{item.degree}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.field}</p>
                <p className="mt-3 text-sm">{item.institution}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          id="projects"
          className="section shell projects relative border-t border-[var(--line)] py-20 lg:py-28"
        >
          <motion.div
            {...fade}
            className="section-top mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="eyebrow">02 — SELECTED WORK</p>
              <h2>
                Things I&apos;ve <em>made.</em>
              </h2>
            </div>
            <p className="subtle">
              A selection of ideas, experiments, and products made with intent.
            </p>
          </motion.div>
          <Tabs.Root value={filter} onValueChange={setFilter}>
            <Tabs.List
              className="tabs mb-6 flex gap-1.5 overflow-x-auto"
              aria-label="Project categories"
            >
              {['All', 'Web', 'AI/ML', 'Tools', 'Other'].map((t) => (
                <Tabs.Trigger key={t} value={t}>
                  {t}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <div className="project-grid grid grid-cols-1 gap-5 md:grid-cols-2">
              {filtered.map((p, i) => (
                <motion.article
                  {...fade}
                  transition={{ duration: 0.38, delay: i * 0.06 }}
                  className={`project-card group ${p.featured ? 'featured' : ''}`}
                  key={p.id}
                >
                  <div className={`project-art ${p.color}`}>
                    <span className="art-label">{p.category}</span>
                    {p.image ? (
                      <img
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        src={p.image}
                        alt={p.imageAlt || `${p.title} project preview`}
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <div className="art-shape" />
                        <Code2 size={p.featured ? 44 : 30} />
                      </>
                    )}
                  </div>
                  <div className="project-content">
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                    </div>
                    <div className="project-foot">
                      <div className="project-tech">
                        {p.technologies.slice(0, 2).map((technology) => (
                          <TechnologyTag key={technology} name={technology} />
                        ))}
                      </div>
                      <div>
                        {p.github && (
                          <a aria-label={`View ${p.title} source`} href={p.github}>
                            <Code2 size={17} />
                          </a>
                        )}
                        {p.demo && (
                          <a aria-label={`View ${p.title} demo`} href={p.demo}>
                            <ArrowUpRight size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Tabs.Root>
          <a className="button ghost center-button" href="https://github.com/Vinay642CoderG">
            View all projects <ArrowUpRight size={16} />
          </a>
        </section>
        <section
          id="services"
          className="section shell relative border-t border-[var(--line)] py-20 lg:py-28"
        >
          <motion.div {...fade} className="section-heading compact">
            <p className="eyebrow">03 — SERVICES</p>
            <h2>
              How I can <em>help.</em>
            </h2>
          </motion.div>
          <div className="service-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = icons[i % icons.length]
              return (
                <motion.article
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="service-card"
                  key={s.title}
                >
                  <Icon />
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <ul>
                    {s.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </section>
        <section
          id="experience"
          className="section shell relative border-t border-[var(--line)] py-20 lg:py-28"
        >
          <motion.div {...fade} className="section-heading compact">
            <p className="eyebrow">04 — EXPERIENCE</p>
            <h2>
              A few chapters
              <br />
              <em>so far.</em>
            </h2>
          </motion.div>
          <div className="timeline relative">
            <motion.div
              className="timeline-progress"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            {experience.map((item, i) => (
              <motion.article
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: i * 0.14, ease: 'easeOut' }}
                className="experience"
                key={item.id}
              >
                <div className="timeline-meta">
                  <b>
                    {item.startDate} — {item.endDate}
                  </b>
                  <span>{item.location}</span>
                </div>
                <motion.i
                  className="dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.45, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.14 }}
                />
                <div className="experience-card">
                  <p className="company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {item.technologies.map((t) => (
                      <TechnologyTag key={t} name={t} />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="section shell relative border-t border-[var(--line)] py-20 lg:py-28"
        >
          <motion.div
            {...fade}
            className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--card)] p-7 shadow-2xl sm:p-10 lg:p-14"
          >
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-[var(--accent-two)] opacity-10 blur-3xl" />
            <div className="relative">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <p className="eyebrow m-0">05 — CONTACT</p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-500">
                    <i className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Open to work
                  </span>
                </div>
                <h2 className="max-w-3xl">
                  Have an idea? Let&apos;s build
                  <br />
                  <em>something useful.</em>
                </h2>
                <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                  I&apos;m interested in software development opportunities and practical projects
                  where thoughtful engineering can make a real difference.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:border-[var(--accent)]"
                    href={`mailto:${profile.email}`}
                  >
                    <Mail className="text-[var(--accent)]" size={18} /> {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="footer shell grid gap-5 border-t border-[var(--line)] py-8 md:grid-cols-[1fr_auto]">
        <div>
          <a className="brand" href="#home">
            <span>V</span> Vinay
          </a>
          <p>Full-Stack Developer building modern web applications.</p>
        </div>
        <div className="footer-right flex flex-wrap items-center gap-5 text-sm font-semibold">
          <a href="https://github.com/Vinay642CoderG">GitHub</a>
          <a href="https://linkedin.com/in/vinay-bhagat-dev">LinkedIn</a>
          <a href="mailto:ytvinay345@gmail.com">Email</a>
          <a className="top" href="#home" aria-label="Back to top">
            <ChevronUp size={18} />
          </a>
        </div>
        <small>© {new Date().getFullYear()} Vinay - My portfolio. All rights reserved.</small>
      </footer>
    </>
  )
}
