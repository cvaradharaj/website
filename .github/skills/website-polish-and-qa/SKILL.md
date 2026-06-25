---
name: website-polish-and-qa
description: 'Perform final quality pass for static websites: accessibility, responsiveness, content consistency, interaction safety, and regression checks after major redesigns.'
argument-hint: 'Provide target files and quality criteria'
user-invocable: true
---

# Website Polish And QA Skill

## Use When
- A major HTML/CSS/JS redesign is complete.
- The site needs final checks before demo or deployment.

## Procedure
1. Check markup semantics and heading order.
2. Verify all links, section IDs, and CTA targets.
3. Review contrast and focus visibility for keyboard users.
4. Validate breakpoints and eliminate horizontal overflow.
5. Check JS for null-safe selectors and dead listeners.
6. Search for stale terms and legacy system references.

## Regression Guardrails
- Ensure removed features have no leftover script imports.
- Ensure copy aligns with the new direction and sections.
- Ensure footer/contact details remain accurate.

## Output Format
- Report issues by severity with file locations.
- Include a concise pass/fail summary per category.
