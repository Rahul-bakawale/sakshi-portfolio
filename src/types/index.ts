import type { ReactNode } from 'react'
import type { PDFPageProxy } from 'pdfjs-dist'

export interface Profile {
  name: string
  role: string
  intro: string
  photo: string
  resumeUrl: string
  email: string
  phone: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface AboutContent {
  text: string
}

export interface Project {
  id: string
  label: string
  title: string
  description: string
  image: string
  caseStudyUrl: string
}

export interface GalleryItem {
  id: string
  image: string
  alt: string
}

export interface PortfolioData {
  profile: Profile
  socials: SocialLink[]
  about: AboutContent
  projects: Project[]
  gallery: GalleryItem[]
}

export interface AppButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant: 'outlined' | 'contained'
  endIcon?: ReactNode
  download?: boolean | string
  target?: string
  ariaLabel?: string
}

export interface AppImageProps {
  src: string
  alt: string
  aspectRatio?: string | { xs?: string; sm?: string; md?: string; lg?: string; xl?: string }
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  borderRadius?: number | string
}

export interface ProjectCardProps {
  label: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface PdfPreviewProps {
  src: string
  title: string
}

export interface PdfPageProps {
  page: PDFPageProxy
  pageNumber: number
}

export interface HeaderProps {
  socials: SocialLink[]
}

export interface HeroProps {
  profile: Profile
  resumeHref: string
}

export interface AboutSectionProps {
  about: AboutContent
}

export interface ProjectListProps {
  projects: Project[]
}

export interface GallerySectionProps {
  gallery: GalleryItem[]
}

export interface FooterProps {
  profile: Profile
  socials: SocialLink[]
}

export interface SocialLinksProps {
  socials: SocialLink[]
  dark?: boolean
}
