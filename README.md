# ML Traducciones - María E. Lo Bianco

A professional website for sworn translation services (English ↔ Spanish).

## Features

- ⚡ **Fast & Static**: Built with Next.js 14 with static export for optimal performance
- 🌐 **Bilingual**: Full English and Spanish support with automatic language detection
- 🎨 **Sunflower Theme**: Beautiful yellow-themed design inspired by sunflowers
- 📱 **Responsive**: Mobile-first design that looks great on all devices
- 📧 **Contact Form**: Integrated with Formspree for easy form submissions
- 🔍 **SEO Optimized**: Proper meta tags, structured data, and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## Configuration

### Contact Form Setup (Formspree)

The contact form uses [Formspree](https://formspree.io/) - a simple, plug-and-play form backend.

**To set up:**

1. Go to [formspree.io](https://formspree.io/) and create a free account
2. Create a new form
3. Copy your form ID (looks like `xyzabc123`)
4. Open `src/components/Contact.tsx` and replace `YOUR_FORMSPREE_ID` with your actual form ID:

```typescript
const FORMSPREE_ID = 'your-actual-form-id';
```

That's it! All form submissions will be sent to your registered email.

### Formspree Free Tier Includes:
- 50 submissions/month
- Email notifications
- Spam filtering
- No credit card required

### Spam Protection

Two layers, both free:

**1. Honeypot (already active, no setup)**

The form includes a hidden `_gotcha` input. Real visitors never see it; naive bots fill it
in and Formspree silently discards those submissions.

**2. Cloudflare Turnstile (needs a one-time setup)**

Turnstile is the invisible alternative to reCAPTCHA. Formspree verifies the token
server-side, which also blocks bots that POST straight to the Formspree endpoint instead
of using the website.

1. Go to the [Cloudflare Turnstile dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
   and create a widget for the site's domain. You get a **site key** and a **secret key**.
2. In the Formspree form settings, open the **CAPTCHA** section, enable it, choose
   **Cloudflare Turnstile**, and paste the **secret key**.
3. Set the **site key** as `NEXT_PUBLIC_TURNSTILE_SITE_KEY` in the hosting provider's
   environment variables (and in a local `.env.local` for development — see `.env.example`).
4. Redeploy.

Until step 3 is done the widget simply doesn't render and the form behaves as before, so
enable the Formspree side and deploy the site key together.

**Also worth doing in the Formspree dashboard:** restrict the form to the site's domain so
submissions from anywhere else are rejected.

## Deployment

This site is configured for static export, making it easy to deploy anywhere:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`

### GitHub Pages
1. Add to `next.config.js`:
   ```js
   basePath: '/your-repo-name',
   ```
2. Build and deploy the `out` folder

### Any Static Host
Just build and upload the `out` folder:
```bash
npm run build
# Upload the 'out' folder to your hosting
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with SEO metadata
│   └── page.tsx         # Main homepage
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services listing
│   ├── Fees.tsx         # Pricing & portfolio
│   ├── Contact.tsx      # Contact form (Formspree)
│   ├── Footer.tsx       # Footer
│   └── SunflowerIcon.tsx # Decorative icon
└── i18n/
    ├── LanguageContext.tsx  # Language state management
    └── translations.ts      # All content in EN/ES
```

## Customization

### Changing Content
All text content is in `src/i18n/translations.ts`. Edit there to update any text on the site.

### Changing Colors
Colors are defined in `tailwind.config.ts` under `colors.sunflower` and `colors.gold`.

### Adding Sections
Create a new component in `src/components/` and import it in `src/app/page.tsx`.

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Formspree](https://formspree.io/) - Form backend

## License

This project is proprietary. All rights reserved.
