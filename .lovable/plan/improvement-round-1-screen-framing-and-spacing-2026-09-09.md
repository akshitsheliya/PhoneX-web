# Improvement Round 1: Screen Framing and Spacing

## Scope
- Fix every embedded PhoneX screen so the complete device frame, including the bottom border, remains visible.
- Remove the extra dark framing effect caused by nesting the app's own mobile shell inside another clipped wrapper.
- Correct the three “More than an AI assistant” benefit previews so their chosen content is centered and not cut off.
- Standardize vertical spacing between marketing sections and repeated content blocks across desktop and mobile.
- Preserve all existing copy, colors, navigation, interactions, and page structure.

## Implementation
- Update the shared screen renderer once so all hero, storytelling, feature, privacy, CTA, Features, and Get Started visuals inherit the same complete device framing.
- Make crop calculations use an explicit viewport height and safe clipping boundaries.
- Normalize shared section sizes and replace exceptional gaps only where they currently create visible imbalance.
- Validate the home, Features, and Get Started pages at desktop and mobile widths, checking bottom borders, overflow, and section rhythm.
