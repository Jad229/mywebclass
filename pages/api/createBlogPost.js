import axios from "axios";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const documentType = "post";
const apiToken = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

async function uploadBlogPost(title, content, excerpt, slug) {
  const mutations = [
    {
      createOrReplace: {
        _type: documentType,
        title: title,
        content: content,
        excerpt: excerpt,
        slug: slug,
      },
    },
  ];
  try {
    const response = await axios.post(
      `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`,
      JSON.stringify({ mutations }),
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      }
    );

    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create blog post at Sanity Content Lake API.");
  }
}

export default uploadBlogPost;
