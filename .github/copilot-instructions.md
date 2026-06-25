# Copilot Instructions For Website Workspace

## Scope Priority
- Primary marketing website is the root static site: `index.html`, `style.css`, and `js/main.js`.
- The `control-standards/` Next.js app is a separate surface; do not modify it unless explicitly requested.

## Mandatory Product Direction
- Do not implement or reintroduce 3D or pseudo-3D scenes in the root site.
- Do not use Three.js, WebGL canvases, or video-led hero backgrounds for the root site.
- Use local assets from `/images` as the main visual language.
- Keep visuals premium, modern, and intentional: layered glass panels, atmospheric gradients, strong typography, and clean spacing.

## UX And Accessibility Rules
- Use semantic HTML landmarks (`header`, `main`, `section`, `footer`) and meaningful heading order.
- Provide descriptive `alt` text for every image.
- Ensure keyboard-visible focus states for interactive controls.
- Keep body text contrast readable against translucent backgrounds.
- Prefer progressive enhancement: content must remain usable without JavaScript.

## CSS Rules
- Define and reuse design tokens in `:root` (colors, radii, shadows, spacing).
- Build glass effects with restrained blur + translucent fills + subtle borders; avoid noisy over-effects.
- Use responsive layouts with at least one tablet and one mobile breakpoint.
- Prevent horizontal overflow on small screens.

## JavaScript Rules
- Keep JavaScript lightweight and DOM-focused (navigation state, reveal animations, small interactions).
- Avoid heavy animation frameworks unless explicitly requested.
- Guard all selectors and event handlers against missing elements.

## Quality Gate Before Finishing
1. Search for legacy 3D tokens in root site (`three`, `WebGL`, `scene-container`, `importmap`) and remove or neutralize them.
2. Verify all navigation links point to existing section IDs.
3. Validate no runtime errors from removed elements.
4. Confirm mobile readability and spacing integrity.
