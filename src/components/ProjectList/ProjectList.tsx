import { Box, Stack, Typography } from '@mui/material'
import type { ProjectListProps } from '../../types'
import ProjectCard from '../common/ProjectCard'

function ProjectList({ projects }: ProjectListProps) {
  return (
    <Box
      sx={{
        pt: { xs: 1, md: 2 },
        pb: { xs: 7, md: 10 },
        '@media (min-width: 1536px)': {
          width: 'calc(100% + 110px)',
          ml: '-55px',
        },
      }}
    >
      <Typography
        component="h2"
        sx={{
          m: 0,
          color: 'text.primary',
          fontSize: { xs: 28, sm: 36, lg: 48 },
          fontWeight: 600,
          lineHeight: 1.6,
          letterSpacing: '-0.03em',
          textAlign: 'center',
        }}
      >
        Featured Projects
      </Typography>
      <Stack
        spacing={0}
        sx={{
          width: { xs: '100%', xl: 'calc(100% - 30px)' },
          maxWidth: 1240,
          mx: 'auto',
          mt: { xs: 3, lg: '32px' },
          rowGap: { xs: 0, md: '40px' },
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            label={project.label}
            title={project.title}
            description={project.description}
            image={project.image}
            imageAlt={`${project.title} project preview`}
          />
        ))}
      </Stack>
    </Box>
  )
}

export default ProjectList
