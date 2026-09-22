import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiHtml5, 
  SiNodedotjs, 
  SiNestjs, 
  SiMysql, 
  SiPrisma, 
  SiSwagger, 
  SiGit, 
  SiFigma, 
  SiPostman, 
  SiDocker, 
  SiPostgresql, 
  SiMongodb, 
  SiPython, 
} from '@icons-pack/react-simple-icons';

interface IconProps {
  size?: number;
  className?: string;
}

export const LinkedinIcon: React.FC<IconProps> = ({ size = 18, className = '' }) => (
  <motion.svg
    whileHover={{ scale: 1.2, rotate: 5 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </motion.svg>
);

export const GithubIcon: React.FC<IconProps> = ({ size = 18, className = '' }) => (
  <motion.svg
    whileHover={{ scale: 1.2, rotate: -5 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </motion.svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 6 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiJavascript size={size} color="#F7DF1E" className={className} />
  </motion.div>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: -6 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiTypescript size={size} color="#3178C6" className={className} />
  </motion.div>
);

export const ReactIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    whileHover={{ scale: 1.3 }}
    className="inline-flex items-center justify-center"
  >
    <SiReact size={size} color="#61DAFB" className={className} />
  </motion.div>
);

export const NextjsIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 10 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiNextdotjs size={size} className={className} />
  </motion.div>
);

export const TailwindIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, y: -2 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiTailwindcss size={size} color="#38BDF8" className={className} />
  </motion.div>
);

export const HtmlCssIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 8 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiHtml5 size={size} color="#E44D26" className={className} />
  </motion.div>
);

export const NodejsIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: -8 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiNodedotjs size={size} color="#5FA04E" className={className} />
  </motion.div>
);

export const NestjsIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 8 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiNestjs size={size} color="#EA284E" className={className} />
  </motion.div>
);

export const MysqlIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, y: -2 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiMysql size={size} color="#4479A1" className={className} />
  </motion.div>
);

export const PrismaIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: -10 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiPrisma size={size} color="#2D3748" className={className} />
  </motion.div>
);

export const SwaggerIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 10 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiSwagger size={size} color="#85EA2D" className={className} />
  </motion.div>
);

export const GitIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 8 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiGit size={size} color="#F05032" className={className} />
  </motion.div>
);

export const FigmaIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: -8 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiFigma size={size} color="#F24E1E" className={className} />
  </motion.div>
);

export const PostmanIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 10 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiPostman size={size} color="#FF6C37" className={className} />
  </motion.div>
);

export const DockerIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, y: -2 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiDocker size={size} color="#2496ED" className={className} />
  </motion.div>
);

export const PostgresIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: -6 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiPostgresql size={size} color="#4169E1" className={className} />
  </motion.div>
);

export const MongoIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, y: -2 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiMongodb size={size} color="#47A248" className={className} />
  </motion.div>
);

export const PythonIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 6 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    className="inline-flex items-center justify-center"
  >
    <SiPython size={size} color="#3776AB" className={className} />
  </motion.div>
);

export const CiCdIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <motion.svg
    whileHover={{ scale: 1.25, rotate: 10 }}
    transition={{ type: 'spring', stiffness: 350, damping: 12 }}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="5" cy="12" r="3" stroke="#818CF8" strokeWidth="2" fill="#818CF8" fillOpacity="0.2"/>
    <circle cx="12" cy="12" r="3" stroke="#38BDF8" strokeWidth="2" fill="#38BDF8" fillOpacity="0.2"/>
    <circle cx="19" cy="12" r="3" stroke="#34D399" strokeWidth="2" fill="#34D399" fillOpacity="0.2"/>
    <path d="M8 12H9M15 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 10.5L6.5 12L5 13.5" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 12L12 13L13.5 11" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 12L19 13L20.5 11" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);