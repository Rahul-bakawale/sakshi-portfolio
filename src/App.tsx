import { Box, Container } from '@mui/material'
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
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Header name={portfolio.profile.name} socials={portfolio.socials} />
      <main>
        <Box component="section" aria-label="Introduction" sx={{ position: 'relative' }}>
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              zIndex: 0,
              top: -210,
              left: -230,
              width: 470,
              height: 470,
              border: '14px solid transparent',
              borderRadius: '50%',
              background:
                'linear-gradient(#fff7ee, #fff7ee) padding-box, conic-gradient(from 220deg, #f4793b, #f8b555, #f4793b) border-box',
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              zIndex: 0,
              top: -170,
              right: -260,
              width: 450,
              height: 560,
              border: '14px solid transparent',
              borderRadius: '50%',
              background:
                'linear-gradient(#fff7ee, #fff7ee) padding-box, linear-gradient(180deg, #28d977, #50f098) border-box',
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Container
            maxWidth={false}
            sx={{ maxWidth: 1220, position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}
          >
            <Hero
              profile={{ ...portfolio.profile, photo: profilePhoto }}
              resumeHref={resumePdf}
            />
            <AboutSection about={portfolio.about} />
          </Container>
        </Box>
        <Box component="section" id="projects" aria-label="Featured projects" sx={{ position: 'relative' }}>
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              zIndex: 0,
              top: 90,
              left: -280,
              width: 480,
              height: 740,
              border: '14px solid transparent',
              borderRadius: '50%',
              background:
                'linear-gradient(#fff7ee, #fff7ee) padding-box, linear-gradient(180deg, #f8b555, #f4793b) border-box',
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              zIndex: 0,
              top: 150,
              right: -310,
              width: 470,
              height: 700,
              border: '14px solid transparent',
              borderRadius: '50%',
              background:
                'linear-gradient(#fff7ee, #fff7ee) padding-box, linear-gradient(180deg, #28d977, #50f098) border-box',
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Container
            maxWidth={false}
            sx={{ maxWidth: 1220, position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}
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
