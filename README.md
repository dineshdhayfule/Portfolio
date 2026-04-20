# Portfolio Website

A modern, responsive portfolio website built with Next.js and TypeScript, featuring smooth animations and a clean dark theme design.

## 🚀 Live Demo

**[View Live Site](https://dinesh-dhayfule-portfolio.vercel.app)**


[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/dineshdhayfule-5542s-projects/v0-one-page-portfolio-website)

## ✨ Features

- 🎨 **Dark Theme** - Sleek, modern dark mode design
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **Type-Safe** - Written in TypeScript
- 🧩 **Component-Based** - Modular UI with shadcn/ui
- 📧 **Working Contact Form** - Integrated with Web3Forms for email submissions
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components:** [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/) - Accessible component library
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Contact Form:** [Web3Forms](https://web3forms.com/) - Simple contact form backend
- **Package Manager:** [pnpm](https://pnpm.io/) - Fast, disk space efficient

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/dineshdhayfule/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.local.example .env.local
# Add your Web3Forms access key to .env.local
```

## 🚀 Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

The development server will be available at `http://localhost:3000`

## 📁 Project Structure

```
Portfolio-/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Contact.tsx       # Contact section
│   ├── Education.tsx     # Education section
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation bar
│   ├── Projects.tsx      # Projects showcase
│   └── Skills.tsx        # Skills section
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Customization

To customize the portfolio for your needs:

1. **Update content** in `app/page.tsx` with your information
2. **Modify styles** in `tailwind.config.ts` for colors and themes
3. **Add components** in the `components/` directory
4. **Update metadata** in `app/layout.tsx` for SEO

## 📧 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/) for handling submissions:

1. Get your free access key from [web3forms.com](https://web3forms.com/)
2. Create a `.env.local` file (copy from `.env.local.example`)
3. Add your access key:

   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. For production, add the environment variable in Vercel settings

See [SETUP_WEB3FORMS.md](./SETUP_WEB3FORMS.md) for detailed instructions.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Dinesh Dhayfule**

- GitHub: [@dineshdhayfule](https://github.com/dineshdhayfule)
- Portfolio: [dinesh-dhayfule-portfolio.vercel.app](https://dinesh-dhayfule-portfolio.vercel.app)

## 🙏 Acknowledgments

- Built with [v0.dev](https://v0.dev) inspiration
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Contact form by [Web3Forms](https://web3forms.com/)
- Deployed on [Vercel](https://vercel.com)

---

⭐ Star this repo if you find it helpful!
