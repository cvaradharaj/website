---
name: liquid-glass-website
description: 'Build or revamp a premium static industrial website using a liquid-glass visual system, image-first storytelling, and lightweight interactions. Use for full-page redesigns of HTML/CSS/JS marketing sites without 3D/WebGL.'
argument-hint: 'Describe pages to redesign, brand mood, and required sections'
user-invocable: true
---

# Liquid Glass Website Skill

## Use When
- A static website needs a full visual revamp.
- The project should look premium without relying on 3D scenes.
- Existing local images must be reused as core content.

## Procedure
1. Audit current page sections, IDs, and script hooks.
2. Remove obsolete structures tied to legacy visual systems (for this repo, 3D scene containers and related controls).
3. Rebuild the page with semantic structure: hero, capabilities, gallery, process, CTA, footer.
4. Define design tokens in CSS and apply a consistent glass language across cards and navigation.
5. Add lightweight JavaScript only for progressive enhancement (mobile nav, reveals, counters, smooth anchor handling).
6. Validate responsiveness, contrast, and runtime safety.

## Visual Checklist
- Typography has hierarchy (display, heading, body, micro-label).
- Background has depth (gradients, glow shapes, subtle grain if needed).
- Glass cards include: translucent fill + border + blur + restrained shadow.
- Hover states are meaningful, not decorative noise.

## Content Checklist
- Headlines are concise and outcome-focused.
- Each section has one clear objective and one primary action.
- Image alt text is descriptive, not keyword stuffing.

## Performance Checklist
- Use `loading="lazy"` for non-critical images.
- Avoid unnecessary libraries.
- Keep JS branch-safe when selectors are missing.
