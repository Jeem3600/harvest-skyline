const config = {
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public",
  },
} as const;

export default config;