---
project: Kitchen
github: github.com/tatianainama/kitchen
---

Kitchen is my personal online recipe box. I was tired of having all my favorite recipes all over the place, so I created a multi platform tool to organize them.

The app scrapes recipes from my favorite online pages and categorizes/normalizes the data for me (no more imperial unit system!)

It also helps me organize my weekly shopping list based on a food calendar. In the future I would like to sync the shopping list to my Supermarket's online shopping cart.

I originally started this project using [MERN](https://www.mongodb.com/mern-stack) stack, but since then, I'm significantly more convinced that only a minimal amount of javascript should be run on client side. In this case, as the content is fully static, I decided to migrate it to [Next.js](https://nextjs.org/) & [PostgreSQL](https://www.postgresql.org/) (leaving my document-oriented database comfort zone) using [Prisma](https://www.prisma.io/) as the ORM and TypeScript.
