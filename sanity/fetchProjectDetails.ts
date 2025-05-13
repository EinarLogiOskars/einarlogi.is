import { type SanityDocument } from "next-sanity";
import { client } from "./client";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const options = { next: { revalidate : 30 } };

export async function fetchProjectDetails({
    params,
}: {
    params: Promise<{ slug: string}>;
}) {
    return await client.fetch<SanityDocument>(PROJECT_QUERY, await params, options);
}