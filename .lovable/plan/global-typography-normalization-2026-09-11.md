# Global typography normalization

## Scope
Update typography only across the public PhoneX website. Preserve every layout, section, color, spacing value, card, image, button shape, animation, and piece of content.

## Changes
- Replace the marketing font stack with legally hosted Inter plus the requested system fallbacks, and load Inter from Google Fonts through the document head.
- Make the same Inter-based stack the project-wide default so all pages and embedded PhoneX previews inherit one coherent family.
- Normalize shared marketing typography: hero headings at 700, section headings at 600, smaller headings and card titles at 600, body and supporting copy at 400, labels/navigation at 500, active navigation and buttons at 600.
- Remove the remaining overly display-like heading treatment by using natural letter spacing and tighter, consistent heading line heights. Keep current responsive font sizes.
- Preserve intentional 600–700 emphasis for product metrics and branding while avoiding changes to visual hierarchy or interface geometry.
- Give the “More than an AI assistant. Built for everyday life.” heading the shared Inter family, 700 weight, natural tracking, and approximately 1.12 line height.

## Verification
- Audit Home, Features, Get Started, Privacy, Terms, and the embedded app previews on desktop and mobile.
- Confirm computed font family, weight, and line height for hero, section, card, navigation, button, label, and body examples.
- Check wrapping, overflow, runtime errors, and the latest build result.
