export const COLORS = {
  light: {
    pageBg: '#ffffff',             // Pure white canvas
    pageText: '#000000',           // Pure black text
    navBg: '#ffffff',
    navBorder: '#000000',          // Crisp 1px retro border
    navActive: '#000000',
    navIdle: '#555555',            // Muted gray for inactive items
    navIdleHover: '#000000',
    toggleHover: '#eeeeee',        // Light gray highlight
    heroGlow: '#000000',
    heroSurface: '#ffffff',
    badgeBlueBg: '#000000',        // Inverted badge block
    badgePurpleBg: '#000000',
    badgeText: '#ffffff',          // White text on black badge
    bodyText: '#000000',
    accentLabel: '#000000',
    iconSurface: '#ffffff',
    iconText: '#000000',
    workBg: '#ffffff',
    sectionBg: '#ffffff',
    sectionBorder: '#000000',
    sectionHoverBorder: '#000000',
    sectionHoverBg: '#eeeeee',     // Classic list hover selection tint
    timeline: '#000000',
    accentLine: '#000000',
    accent: '#000000',
    accentHover: '#222222',        // Slightly lighter black for hover
    accentText: '#ffffff',         // Inverted text for primary buttons
    footerBorder: '#000000',
    cardText: '#555555',
    contactHoverText: '#000000',
  },
  dark: {
    pageBg: '#000000',             // Pure black canvas
    pageText: '#ffffff',           // Pure white text
    navBg: '#000000',
    navBorder: '#ffffff',          // Crisp 1px white border
    navActive: '#ffffff',
    navIdle: '#aaaaaa',            // Muted light gray for inactive items
    navIdleHover: '#ffffff',
    toggleHover: '#222222',        // Dark gray highlight
    heroGlow: '#ffffff',
    heroSurface: '#000000',
    badgeBlueBg: '#ffffff',        // Inverted badge block
    badgePurpleBg: '#ffffff',
    badgeText: '#000000',          // Black text on white badge
    bodyText: '#ffffff',
    accentLabel: '#ffffff',
    iconSurface: '#000000',
    iconText: '#ffffff',
    workBg: '#000000',
    sectionBg: '#000000',
    sectionBorder: '#ffffff',
    sectionHoverBorder: '#ffffff',
    sectionHoverBg: '#222222',     // Dark gray selection tint
    timeline: '#ffffff',
    accentLine: '#ffffff',
    accent: '#ffffff',
    accentHover: '#dddddd',        // Off-white hover for primary actions
    accentText: '#000000',         // Inverted black text for primary buttons
    footerBorder: '#ffffff',
    cardText: '#aaaaaa',
    contactHoverText: '#ffffff',
  },
};

export const color = (darkMode, token) => (darkMode ? COLORS.dark[token] : COLORS.light[token]);