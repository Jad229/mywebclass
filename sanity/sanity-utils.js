import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type=='post']{
    _id,
    _createdAt,
    title,
    content,
    excerpt,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    author->,
  } | order(_createdAt asc)`
  );
}

export async function getPost(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    content,
    excerpt,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    author->,
  }`,
    { slug }
  );
}
