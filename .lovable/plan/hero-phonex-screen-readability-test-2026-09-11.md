# Hero PhoneX screen readability test

## Scope
Improve only the real PhoneX Home screen embedded in the first website section. Keep the phone size, position, surrounding headline, buttons, callouts, all later product previews, and the standalone PhoneX app unchanged.

## Changes
- Give the first-section device preview a dedicated preview mode so its internal styling cannot affect other PhoneX screens.
- In that mode only, increase the listed small labels and supporting text, strengthen headings/labels/values to 500–700 weights, and use darker navy/gray text on light and pastel surfaces.
- Preserve white text on the gradient companion card, while improving its label, action, Talk, and Chat readability through stronger size, weight, and contrast.
- Keep the existing screen structure, cards, icons, gradients, content, buttons, navigation, dimensions, and arrangement.
- Make only minor internal spacing adjustments if enlarged text needs room, without changing the phone or website layout.

## Verification
- Compare the first-section phone at its current desktop size and smaller website widths.
- Check every named label, all four summary cards, the gradient card, and the bottom of the visible device for clipping, overlap, or overflow.
- Confirm later PhoneX previews and the standalone `/app` screen retain their existing typography.
- Check runtime errors and the latest build result.

## Technical details
- Pass a hero-only preview flag into the existing iframe URL.
- Scope all readability overrides beneath a dedicated class applied only when that flag is present.
