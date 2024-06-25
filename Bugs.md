## Bugs

### Sticky doesnt work in child divs

- You have to declare sticky on the same level as the html body

### Transform3d does work if the parent div doesnt have overflow-x-hidden

- The issue you're experiencing with transform3D causing UI problems when the parent div doesn't have overflow-x-hidden is a known quirk in how browsers handle 3D transforms and overflow.

When applying 3D transformations to an element, the browser creates a new rendering context for that element. This can sometimes lead to rendering artifacts or unexpected behavior if the overflow property of the parent element isn't set correctly. Specifically, elements that are transformed can appear outside their bounding box, causing scrollbars or other UI issues.

To address this, you can ensure that the parent div has the overflow-x: hidden property set in your CSS. This prevents any child elements, even those with 3D transformations, from causing horizontal scrolling or other overflow issues
