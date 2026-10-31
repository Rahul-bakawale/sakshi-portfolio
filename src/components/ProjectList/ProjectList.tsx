import { Box, Stack } from '@mui/material'
import type { ProjectListProps } from '../../types'
import ProjectCard from '../common/ProjectCard'
import SectionTitle from '../common/SectionTitle'

function ProjectList({ projects }: ProjectListProps) {
  return (
    <Box sx={{ pt: { xs: 1, md: 2 }, pb: { xs: 7, md: 10 } }}>
      <Box sx={{ mb: 3 }}>
        <SectionTitle title="Featured Projects" />
      </Box>
      <Stack spacing={{ xs: 2, md: 3 }}>
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
