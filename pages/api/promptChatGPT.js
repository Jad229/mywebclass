import axios from "axios";

const OpenAiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function fetchData(prompt) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${OpenAiKey}`,
        },
      }
    );

    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data from OpenAI API.");
  }
}

export default fetchData;
