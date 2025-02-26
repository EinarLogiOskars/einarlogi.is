import { type SanityDocument } from "next-sanity";
import { client } from "./client";

const PROJECTS_QUERY = `*[
    _type == "project"
    && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description, mainImage}`;

const options = { next: { revalidate: 30 } };

export async function fetchProjects() {
    return await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);
}