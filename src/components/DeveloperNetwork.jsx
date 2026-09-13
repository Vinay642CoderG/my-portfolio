import { motion } from 'framer-motion'

import { SiNodedotjs, SiReact } from 'react-icons/si'
import { MdApi, MdStorage } from 'react-icons/md'
import { Sparkles } from 'lucide-react'

const nodes = [
  {
    label: 'React',
    detail: 'Frontend UI',
    x: 24,
    y: 48,
    color: '#149eca',
    Icon: SiReact,
    iconSize: 22,
  },
  {
    label: 'Node.js',
    detail: 'Backend runtime',
    x: 306,
    y: 48,
    color: '#5fa04e',
    Icon: SiNodedotjs,
    iconSize: 22,
  },
  {
    label: 'Database',
    detail: 'Data storage',
    x: 24,
    y: 267,
    color: '#3b82f6',
    Icon: MdStorage,
    iconSize: 23,
  },
  {
    label: 'AI',
    detail: 'Smart features',
    x: 306,
    y: 267,
    color: '#d9468f',
    Icon: Sparkles,
    iconSize: 21,
  },
]

const connections = [
  'M 137 91 C 174 104, 185 145, 212 174',
  'M 343 91 C 307 105, 291 145, 265 174',
  'M 137 305 C 174 281, 188 237, 214 214',
  'M 343 305 C 307 281, 291 238, 264 214',
]

function TechNode({ node, index }) {
  const { Icon } = node

  return (
    <foreignObject x={node.x} y={node.y} width="150" height="86">
      <motion.div
        className="
          flex h-full items-center gap-3
          overflow-hidden rounded-2xl border
          bg-[var(--card)]
          px-3.5 py-3
          shadow-lg
        "
        style={{
          borderColor: `color-mix(in srgb, ${node.color} 45%, var(--line))`,
        }}
        initial={{
          opacity: 0,
          scale: 0.82,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.42,
          delay: 0.28 + index * 0.1,
        }}
      >
        <span
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-xl
          "
          style={{
            color: node.color,
            background: `color-mix(in srgb, ${node.color} 14%, var(--card))`,
          }}
        >
          <Icon size={node.iconSize} strokeWidth={node.label === 'AI' ? 2.1 : undefined} />
        </span>

        <span className="flex min-w-0 flex-1 flex-col justify-center overflow-hidden">
          <strong
            className="
              block truncate
              text-[13px] font-semibold
              leading-tight
              text-[var(--ink)]
            "
          >
            {node.label}
          </strong>

          <small
            className="
              mt-1 block truncate
              text-[10.5px] font-medium
              leading-tight
              text-[var(--muted)]
            "
          >
            {node.detail}
          </small>
        </span>
      </motion.div>
    </foreignObject>
  )
}

export default function DeveloperNetwork() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[560px]"
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        delay: 0.1,
      }}
    >
      <div
        className="
          absolute inset-[10%] -z-10
          rounded-full
          bg-[var(--accent-soft)]
          opacity-70 blur-3xl
        "
      />

      <svg
        viewBox="0 0 480 390"
        className="h-auto w-full overflow-visible"
        role="img"
        aria-labelledby="network-title network-description"
      >
        <title id="network-title">Full-stack application architecture</title>

        <desc id="network-description">
          React and Node.js connect through an API to database and AI services.
        </desc>

        <defs>
          <pattern id="network-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="var(--line)" strokeWidth=".6" opacity=".35" />
          </pattern>

          <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent-two)" />
          </linearGradient>
        </defs>

        <rect
          x="14"
          y="15"
          width="452"
          height="350"
          rx="32"
          fill="var(--card)"
          fillOpacity=".72"
          stroke="var(--line)"
        />

        <rect x="14" y="15" width="452" height="350" rx="32" fill="url(#network-grid)" />

        {connections.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#network-line)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 0.72,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15 + index * 0.12,
              ease: 'easeInOut',
            }}
          />
        ))}

        <foreignObject x="194" y="158" width="92" height="80">
          <motion.div
            className="
              grid h-full place-items-center
              rounded-[24px]
              border border-[var(--accent)]
              bg-[var(--card)]
              text-center shadow-xl
            "
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              delay: 0.5,
            }}
          >
            <span>
              <span
                className="
                  mx-auto flex h-9 w-9
                  items-center justify-center
                  rounded-xl
                  bg-[var(--accent-soft)]
                "
              >
                <MdApi className="text-[var(--accent)]" size={22} />
              </span>

              <strong
                className="
                  mt-1.5 block
                  text-[12px] font-semibold
                  text-[var(--ink)]
                "
              >
                REST API
              </strong>
            </span>
          </motion.div>
        </foreignObject>

        {nodes.map((node, index) => (
          <TechNode key={node.label} node={node} index={index} />
        ))}
      </svg>

      <div
        className="
          absolute bottom-0 left-1/2
          flex -translate-x-1/2
          items-center gap-2
          whitespace-nowrap
          rounded-full
          border border-[var(--line)]
          bg-[var(--card)]
          px-4 py-2
          text-xs font-semibold
          text-[var(--muted)]
          shadow-lg
        "
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        Full-stack architecture
      </div>
    </motion.div>
  )
}
