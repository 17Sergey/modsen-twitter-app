This project was initialized from a Next.js Starter, and contains the following changes:

1. The `tsconfig.json` was updated to point the `@` alias to `./src` instead of `./`
2. The `tailwind.config.ts` was updated to include files in `./src`
3. The `src` folder was created to contain the FSD layers
4. The `pages` folder was created with a `.gitkeep` file to prevent Next.js from treating `src/pages` as a Pages router
5. The code of `app/layout.tsx` was moved to `src/app/layouts/index.tsx`
6. The code of `app/page.tsx` was moved to `src/pages/home/ui/HomePage.tsx`
7. The `app/globals.css` was moved to `src/app/styles/globals.css`
8. Another page, `/deeper`, was added
