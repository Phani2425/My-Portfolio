1. what is antialiased in tailwindcss?why did i used that in body tag of the layout.tsx.

2. next/font/google -> instead of directly importing fonts from google, we can use this package to import fonts from google.as next js has optimised these fonts

3. what is twMerge and what did i do in layout.tsx with it?

4. text-white/70 -> what is this in tailwindcss? 770 is the opacity basically

5. @import, @tailwind, @apply, @layer -> what are these in tailwindcss?what is directives?

6. backdrop-blur,inline-flex,tracking-wide,className='size-4'

7. Position and Size
absolute - Position absolutely within relative parent
inset-0 - Set all sides (top, right, bottom, left) to 0
size-[620px] - Width and height of 620px (custom value)
Centering
top-1/2 - Move down 50% from top
left-1/2 - Move right 50% from left
-translate-x-1/2 - Transform back left by 50% of element's width
-translate-y-1/2 - Transform back up by 50% of element's height (These four classes together center the element perfectly)
Border and Shape
border-2 - 2px border width
rounded-full - Fully rounded corners (creates circle)
border-emerald-300/5 - Emerald color border with 5% opacity
Shadow Effect
shadow-[0_0_80px_inset] - Custom inset shadow with 80px blur

Breaking down shadow-[0_0_80px_inset]:
0 - horizontal offset (x-axis)
0 - vertical offset (y-axis)
80px - blur radius
inset - makes the shadow appear inside the element

shadow-emerald-300/5 - Shadow color emerald with 5% opacity
This creates a large circular element with a subtle emerald border and inset glow effect, positioned in the center of its container.

8. Overflow Comparison in Tailwind CSS
overflow-clip:
More strict/aggressive clipping
Content cut exactly at border
No scroll bars even if content overflows
Better performance
overflow-hidden:
Standard overflow hiding
May show scrollbars if needed
Can be less performant
Content might still trigger scrolling behavior

9. using text-color in svg to color them

10. size-1 ->here 1 means 4px

11. Understanding CSS mask-image
What is mask-image?
CSS property that creates a mask layer
Like a stencil for your element
Controls visibility of element parts
Works similar to opacity but with gradients/patterns
Common Use Cases
Fade effects
Soft edges
Complex shape masking
Image transitions

## CSS mask-image Property

### Basic Syntax:
```css
mask-image: linear-gradient(direction, color-stops);
```

in hero.tsx i used this as:- [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]

12. leading and tracking in tailwindcss

13. className="uppercase font-semibold tracking-widest bg-gradient-to-r  from-emerald-300 to-sky-400 bg-clip-text text-transparent"