## What is globals.css? What is layout.tsx? What is page.tsx?

1) globals.css is where all the styling information lives. Anything to do with themes, colours, fonts (etc) belongs here.
2) layout.tsx is the barebones structure of the website. It is the foundation that defines the essentials.
3) page.tsx is where all the page-specific features are located. For instance, a single card on that page would have a "rectangle" shape defined here. But not the colour or theme of the rectangle, just its structure.

## How and where does HTML fit into this?

There are two main types of HTML:

1) Document-level HTML, which lives in layout.tsx
    - Yes, because it lives here, this is global HTML that gets set and left alone. It does not change, just like the foundations of a building cannot change once something is built on it.
    - <html> and <body> live here.

2) Page-level HTML, which lives in page.tsx
    - Which defines the structure of a single page, but not the structure of the entire document.
    - <main>, <section>, <h1>, <p>, <a> (etc) all live here.

- When we code using a framework like React, we are not explicitly writing static HTML files.
- Instead, we write JavaScript that describes what HTML should be produced when a page is rendered.
- The framework (React/Next.js) generates the actual HTML at the appropriate time (build time or request time) and sends it to the browser.

- This is similar to Minecraft modding, where we don’t directly place blocks into the world.
- Instead, we define recipes and registrations that the game engine loads and instantiates at the correct point in its lifecycle.

## How and where does JavaScript fit into this?

JavaScript is the engine that:

- Reads your recipes (.tsx)
- Decides when to turn them into HTML
- Updates the page when something changes

* HTML = what exists
* CSS = how it looks
* JavaScript = when and how it changes

## How does tailwind css fit into this?

- Tailwind CSS is just a "modern way of doing CSS".
- Compared to traditional CSS, it is much more efficient and can accomplish much more in a short few lines. 
- Therefore, if I learn tailwind CSS, I am technically learning "a new version" of CSS, and there is nothing wrong with that!