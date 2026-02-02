# Sahand Akramipour - Personal Website

This is a React-based personal website/portfolio built with Vite and Tailwind CSS.

## Deployment to GitHub Pages

### Prerequisites
1. A GitHub account
2. A repository named `shndap.github.io` (where `shndap` is your GitHub username)

### Steps to Deploy

1. **Initialize git and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/shndap/shndap.github.io.git
   git push -u origin main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "gh-pages" branch
   - Click Save

5. **Your site will be live at:** `https://shndap.github.io`

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
