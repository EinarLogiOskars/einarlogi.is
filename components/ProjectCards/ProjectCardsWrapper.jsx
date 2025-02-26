import { fetchProjects } from '@/sanity/fetchProjects';
import { getLocale } from 'next-intl/server';

import ProjectCards from './ProjectCards';

export default async function ProjectCardsWrapper() {
    const projects = await fetchProjects();
    const locale = await getLocale();

    return <ProjectCards projects={projects} locale={locale} />;
}