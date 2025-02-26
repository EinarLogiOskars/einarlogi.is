import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "4wbd7m31",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});