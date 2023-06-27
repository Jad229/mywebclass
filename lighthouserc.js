module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/about",
        "http://localhost:3000/story",
        "http://localhost:3000/privacy",
        "http://localhost:3000/login",
        "http://localhost:3000/blogs",
      ],
      startServerCommand: "npm run build && npm run start",
      settings: {
        chromeFlags: "--disable-gpu --no-sandbox --no-zygote",
      },
    },
    assert: {
      assertions: {
        /* Errors */
        "categories:performance": ["error", { minScore: 0.6 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
        /* Warnings */
        "categories:performance": ["warn", { minScore: 0.7 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
