import { fetchProjectDetails } from '@/sanity/fetchProjectDetails';
import ProjectClientView from '@/components/ProjectClientView/ProjectClientView';

export default async function ProjectPage({ params }) {
  const { slug, locale } = await params;
  const project = await fetchProjectDetails(slug);

  if (!project) return <p>Project not found</p>;

  return <ProjectClientView project={project} locale={locale} />;
}
