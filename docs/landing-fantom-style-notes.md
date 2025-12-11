# Landing Page Implementation Notes (FantomUI Style)

## Overview
This document describes the implementation of a dark, high-end landing page for the Web3 Guestbook project, inspired by the structure, colors, and animation style of fantomui.webflow.io but fully adapted to this project's branding and text content.

## Technologies Used
- **Framework**: Next.js with Pages Router (based on existing project structure)
- **Styling**: TailwindCSS (already configured in the project)
- **Animations**: Framer Motion (installed specifically for this implementation)
- **Language**: TypeScript (used throughout)

## Design Tokens
Custom colors have been added to the Tailwind configuration to match the dark, neon aesthetic:

- `bg-body`: Very dark background (#050015)
- `bg-surface`: Slightly lighter surface color (#09001c)
- `accent-primary`: Magenta/purple accent (#e041ff)
- `accent-secondary`: Cold blue/purple accent (#3b82f6)
- `text-primary`: Near white text (#f9fafb)
- `text-muted`: Gray-blue muted text (#a1a1b5)

## Animation Patterns
The following reusable animation presets have been created:

1. **Fade In Up**: Elements fade in while moving slightly upward when entering the viewport
2. **Float Loop**: Subtle continuous floating animation for hero visuals
3. **Button Hover**: Smooth scale and background transition effects

These animations use consistent timing (150-250ms) and easing (cubic-bezier(0.22, 0.61, 0.36, 1)) for a cohesive experience.

## Component Structure
The landing page has been organized into the following components:
- Header
- HeroSection
- ExplainerSection
- FeaturesSection
- CtaSection
- Footer

Each component is self-contained and uses the defined design tokens for consistency.

## How to Extend
To add new sections while maintaining the style:
1. Create a new component in the components/sections directory
2. Use the existing design tokens for colors and typography
3. Apply the fadeInUp animation for scroll-based reveals
4. Maintain the dark theme with neon accents