import { Box, Container } from '@mui/material'
import { useEffect } from 'react'
import profilePhoto from './assets/photo.jpg'
import resumePdf from './assets/resume/Sakshi_Gupta_Resume.pdf?url'
import AboutSection from './components/AboutSection/AboutSection'
import Footer from './components/Footer/Footer'
import GallerySection from './components/GallerySection/GallerySection'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProjectList from './components/ProjectList/ProjectList'
import portfolio from './data/portfolio.json'

function App() {
  useEffect(() => {
    const root = document.documentElement
    let hideTimer: number | undefined

    const revealScrollbarWhileScrolling = () => {
      root.dataset.scrolling = 'true'
      window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => {
        delete root.dataset.scrolling
      }, 800)
    }

    window.addEventListener('scroll', revealScrollbarWhileScrolling, { passive: true })

    return () => {
      window.removeEventListener('scroll', revealScrollbarWhileScrolling)
      window.clearTimeout(hideTimer)
      delete root.dataset.scrolling
    }
  }, [])

  return (
    <Box sx={{ overflowX: 'clip' }}>
      <Header socials={portfolio.socials} />
      <main>
        <Box component="section" aria-label="Introduction">
          <Container
            maxWidth={false}
            sx={{ maxWidth: 1220, px: { xs: 2, sm: 3 } }}
          >
            <Hero
              profile={{ ...portfolio.profile, photo: profilePhoto }}
              resumeHref={resumePdf}
            />
            <AboutSection about={portfolio.about} />
          </Container>
        </Box>
        <Box component="section" id="projects" aria-label="Featured projects">
          <Container
            maxWidth={false}
            sx={{ maxWidth: 1220, px: { xs: 2, sm: 3 } }}
          >
            <ProjectList projects={portfolio.projects} />
            <GallerySection gallery={portfolio.gallery} />
          </Container>
        </Box>
      </main>
      <Footer profile={portfolio.profile} socials={portfolio.socials} />
    </Box>
  )
}

export default App
