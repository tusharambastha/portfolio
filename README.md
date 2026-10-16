# Personal Portfolio — Tushar Ambastha

> **Computer Science Undergraduate** · Oriental Institute of Science & Technology (OIST), Bhopal  
> Clean, engineer-crafted personal portfolio website highlighting practical software engineering skills in Java, React, problem-solving, and web systems.

---

## 🌟 Overview & Design Philosophy

This portfolio is built to reflect authentic software engineering fundamentals rather than flashy templates or exaggerated claims:

- **Minimalist Aesthetic**: Clean white background, charcoal/near-black typography, and a single restrained blue accent (`#2563eb`).
- **Authentic Presentation**: Accurate student perspective (B.Tech CSE '28) without inflated metrics or fabricated statistics.
- **Verified Projects**: Real technical cards linking directly to public GitHub repositories and active GitHub Pages deployments (e.g. *SurakshaAR*, *ManakSetu*, *SchemeSathi AI*).
- **Responsive & Accessible**: Semantic HTML, keyboard focus navigation, prefers-reduced-motion support, and mobile-first layouts tested from 320px to 1440px.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Styling**: Modern Vanilla CSS with CSS custom properties (design tokens)
- **Deployment**: GitHub Pages via automated GitHub Actions

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions CI/CD for GitHub Pages
├── public/
│   └── favicon.svg            # Custom SVG monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky header with active scroll spy & mobile drawer
│   │   ├── Navbar.css
│   │   ├── Hero.jsx           # Clean introduction & engineering snapshot card
│   │   ├── Hero.css
│   │   ├── About.jsx          # Genuine background, OIST Bhopal studies & learning pillars
│   │   ├── About.css
│   │   ├── Skills.jsx         # Categorized toolkit with honest context annotations
│   │   ├── Skills.css
│   │   ├── Projects.jsx       # Verified projects with problem, architecture & demo links
│   │   ├── Projects.css
│   │   ├── Experience.jsx     # Royal Enfield practical training with performed vs observed split
│   │   ├── Experience.css
│   │   ├── Education.jsx      # B.Tech CSE details at OIST Bhopal
│   │   ├── Education.css
│   │   ├── Contact.jsx        # Direct inbox, clipboard copy & mailto draft helper
│   │   ├── Contact.css
│   │   ├── Footer.jsx         # Clean minimal footer with dynamic year
│   │   ├── Footer.css
│   │   └── Icons.jsx          # Pixel-perfect SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js   # Centralized data model for all content & links
│   ├── App.jsx                # Main layout assembly
│   ├── App.css
│   ├── index.css              # Global tokens, typography, and reset
│   └── main.jsx               # React DOM root entry
├── index.html                 # Semantic HTML shell with preconnected fonts & meta tags
├── package.json
└── vite.config.js             # Vite configuration with relative base path
```

---

## 🚀 Local Development

### Prerequisites
- Node.js (v18 or higher recommended; verified on Node v24)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/tusharambastha/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to view the site with hot-module replacement.

### Production Build & Preview
```bash
# Build production assets to /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

This project is pre-configured for automated deployment to GitHub Pages using GitHub Actions.

### Step 1: Create the GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Repository name: `portfolio`.
3. Set visibility to **Public**.
4. Leave "Add a README" and ".gitignore" **unchecked** (we already have them).

### Step 2: Push Your Local Code
Run these commands in PowerShell or your terminal from the `portfolio` folder:
```bash
git init
git add .
git commit -m "Initial commit: Production-quality personal portfolio"
git branch -M main
git remote add origin https://github.com/tusharambastha/portfolio.git
git push -u origin main
```

### Step 3: Configure GitHub Pages Settings
1. Open your repository on GitHub: `https://github.com/tusharambastha/portfolio`.
2. Click **Settings** (top tab) -> **Pages** (left navigation).
3. Under **Build and deployment** -> **Source**, select:
   👉 **GitHub Actions**
4. That's it! The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site upon every push to `main`.
5. Your portfolio will be live at:
   `https://tusharambastha.github.io/portfolio/`

> **Note on Base Path**: `vite.config.js` uses `base: './'`, which creates relative paths (`./assets/...`). This ensures your site works out-of-the-box whether deployed at `https://tusharambastha.github.io/portfolio/` or as a user site at `https://tusharambastha.github.io/`.

---

## 📄 License
MIT License. Built by [Tushar Ambastha](https://github.com/tusharambastha).
