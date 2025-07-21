# Modern Portfolio Website with Next.js

A personal portfolio website built with Next.js, featuring a modern design, dark mode, animations, and full responsiveness.

## Features

- 🎨 Modern, minimalist design with dark mode support
- 📱 Fully responsive layout
- ⚡ Fast page transitions with Next.js App Router
- 💨 Tailwind CSS for styling
- 🎭 Framer Motion animations
- 🌙 Dark mode toggle with next-themes
- 🎯 SEO optimized
- 📝 Contact form ready for integration
- 🖼 Optimized image loading with Next.js Image component

## Getting Started

1. Replace placeholder content:
   - Update personal information in navbar and footer (Your Name)
   - Add your profile image in `/public/profile-placeholder.jpg`
   - Add project images in `/public/project1-placeholder.jpg` and `/public/project2-placeholder.jpg`
   - Update project details in `/src/app/projects/page.tsx`
   - Update contact information in `/src/app/contact/page.tsx`

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                # App Router pages
│   ├── about/         # About page
│   ├── contact/       # Contact page
│   ├── projects/      # Projects page
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # Reusable components
└── providers.tsx      # Theme provider
```

## Customization

### Theme Colors

The color scheme can be customized in the Tailwind CSS configuration (`tailwind.config.ts`).

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update the navigation in `src/components/Navbar.tsx`

### Adding Projects

Update the projects array in `src/app/projects/page.tsx` with your own projects.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
