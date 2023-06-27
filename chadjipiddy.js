import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: lolololol,
  })
);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on("line", async (input) => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "I want you to generate blog posts for me on any topic that I send. the topics should have a title and a content. The title and content should be separated by 3 dashes (---)",
      },
      { role: "user", content: input },
    ],
  });
  console.log(response.data.choices[0].message.content);
  userInterface.prompt();
});
