# AI Craft Consult - Landing Page

Manchester-based AI adoption consultancy helping marketing teams master Writer.com and AI tools.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
modern-landing-page/
├── src/
│   ├── App.jsx          # Main landing page component
│   ├── index.css        # Tailwind CSS imports
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Update Content

Edit [src/App.jsx](src/App.jsx) to customize:
- Hero section messaging
- Service descriptions and pricing
- Testimonials (currently placeholder)
- Contact form submission handler
- Footer information

### Brand Colors

The site uses a blue color scheme. To change colors, update the Tailwind classes in App.jsx:
- Primary: `blue-600`, `blue-700`, etc.
- Accent: Adjust gradient and background colors

### Form Integration

The contact form currently shows an alert. To integrate with a real service:

**Option 1: Email Service (e.g., FormSubmit, Formspree)**
```jsx
<form action="https://formsubmit.co/your@email.com" method="POST">
  {/* Add hidden fields for customization */}
  <input type="hidden" name="_subject" value="New AI Craft Consult Inquiry" />
  <input type="hidden" name="_next" value="https://aicraftconsult.com/thank-you" />
  {/* Your form fields */}
</form>
```

**Option 2: CRM Integration (e.g., HubSpot)**
```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://api.hsforms.com/submissions/v3/integration/submit/...', {
    method: 'POST',
    body: JSON.stringify({ fields: [...] })
  })
}
```

## 🌐 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions to:
- Vercel (Recommended)
- Netlify
- Cloudflare Pages
- GitHub Pages

### Quick Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"
6. Add custom domain: aicraftconsult.com

## 🔧 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📝 SEO Optimization

The site includes:
- Semantic HTML structure
- Meta descriptions and title tags
- Fast loading times (Vite optimization)
- Mobile-responsive design
- Accessibility features

To further improve SEO:
1. Add Google Analytics
2. Create sitemap.xml
3. Add structured data (JSON-LD)
4. Optimize images (use WebP format)
5. Add blog/resources section for content marketing

## 📧 Contact

**Website:** aicraftconsult.com
**Email:** hello@aicraftconsult.com
**Location:** Manchester, UK

## 📄 License

© 2026 AI Craft Consult. All rights reserved.
