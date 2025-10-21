
export type Question = {
  id: number;
  question: string;
  type: 'mcq' | 'subjective';
  options?: string[];
  answer: string;
  explanation?: string;
  testId: number;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
};

export const questions: Record<string, Question[]> = {
  frontend: [
    // Test 1: 5 Questions (3 MCQ, 2 Subjective)
    {
        id: 1,
        testId: 1,
        difficulty: 'easy',
        question: "What does HTML stand for?",
        type: 'mcq',
        options: ['HyperText Markup Language', 'High-Level Text Machine Language', 'Hyper-Transferable Markup Language', 'Home Tool Markup Language'],
        answer: 'HyperText Markup Language',
        explanation: 'HTML is the standard markup language for documents designed to be displayed in a web browser.'
    },
    {
        id: 2,
        testId: 1,
        difficulty: 'easy',
        question: "Which CSS property is used to change the text color of an element?",
        type: 'mcq',
        options: ['font-color', 'text-color', 'color', 'font-style'],
        answer: 'color',
        explanation: 'The `color` property in CSS is used to set the color of the text.'
    },
    {
        id: 3,
        testId: 1,
        difficulty: 'easy',
        question: "Which keyword is used to declare a variable in JavaScript that can be reassigned?",
        type: 'mcq',
        options: ['const', 'var', 'let', 'static'],
        answer: 'let',
        explanation: '`let` allows you to declare block-scoped variables that can be reassigned. `var` is also possible but `let` is modern practice.'
    },
    {
        id: 4,
        testId: 1,
        difficulty: 'easy',
        question: "What is the purpose of the `alt` attribute on an `<img>` tag?",
        type: 'subjective',
        answer: "The `alt` attribute provides alternative text for an image if it cannot be displayed. It's crucial for accessibility, allowing screen readers to describe the image to visually impaired users, and is also used by search engines for SEO.",
        explanation: "Good `alt` text is important for SEO and accessibility."
    },
    {
        id: 5,
        testId: 1,
        difficulty: 'easy',
        question: "What is the Box Model in CSS?",
        type: 'subjective',
        answer: "The CSS box model is a box that wraps around every HTML element. It consists of: content, padding, border, and margin. It defines how elements are sized and spaced on a web page.",
        explanation: "It's a foundational concept for layout and spacing on the web."
    },
    // Test 2: 10 Questions (6 MCQ, 4 Subjective)
    {
        id: 6,
        testId: 2,
        difficulty: 'easy',
        question: "Which HTML tag is used to define an internal style sheet?",
        type: 'mcq',
        options: ['<script>', '<css>', '<style>', '<link>'],
        answer: '<style>',
        explanation: 'The `<style>` tag is used to embed CSS directly within an HTML document.'
    },
    {
        id: 7,
        testId: 2,
        difficulty: 'easy',
        question: "How do you select an element with id 'demo' in CSS?",
        type: 'mcq',
        options: ['.demo', '#demo', 'demo', '*demo'],
        answer: '#demo',
        explanation: "The '#' symbol is used in CSS to select elements by their ID."
    },
    {
        id: 8,
        testId: 2,
        difficulty: 'easy',
        question: "Which of these is NOT a valid JavaScript data type?",
        type: 'mcq',
        options: ['string', 'boolean', 'character', 'undefined'],
        answer: 'character',
        explanation: "JavaScript does not have a separate 'character' type. Single characters are handled as strings."
    },
    {
        id: 9,
        testId: 2,
        difficulty: 'easy',
        question: "In JavaScript, how do you write a single-line comment?",
        type: 'mcq',
        options: ['// This is a comment', '<!-- This is a comment -->', '/* This is a comment */', '# This is a comment'],
        answer: '// This is a comment',
        explanation: 'Single-line comments in JavaScript start with //.'
    },
    {
        id: 10,
        testId: 2,
        difficulty: 'easy',
        question: "Which HTML element is used to specify a footer for a document or section?",
        type: 'mcq',
        options: ['<bottom>', '<section>', '<footer>', '<foot>'],
        answer: '<footer>',
        explanation: 'The <footer> element typically contains authorship information, copyright information, contact information, etc.'
    },
    {
        id: 11,
        testId: 2,
        difficulty: 'easy',
        question: "What does CSS stand for?",
        type: 'mcq',
        options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
        answer: 'Cascading Style Sheets',
        explanation: 'CSS is a style sheet language used for describing the presentation of a document written in HTML.'
    },
    {
        id: 12,
        testId: 2,
        difficulty: 'easy',
        question: "Explain the difference between an `<h1>` and a `<h6>` tag in HTML.",
        type: 'subjective',
        answer: "Both are heading tags, but they represent different levels of importance. `<h1>` is the highest-level heading for the main title. `<h6>` is the lowest-level heading. Using them correctly creates a content hierarchy, which is important for SEO and accessibility.",
        explanation: "Using heading tags correctly is important for both SEO and accessibility."
    },
    {
        id: 13,
        testId: 2,
        difficulty: 'easy',
        question: "What is the difference between `let` and `var` in JavaScript?",
        type: 'subjective',
        answer: "`var` is function-scoped, meaning it's available throughout the function. `let` is block-scoped, available only within the block (e.g., a for loop) it's declared in. `var` variables are also hoisted, while `let` variables are not.",
        explanation: "`let` and `const` were introduced in ES6 to provide more predictable variable scoping than `var`."
    },
    {
        id: 14,
        testId: 2,
        difficulty: 'easy',
        question: "What is the purpose of the `href` attribute in an `<a>` tag?",
        type: 'subjective',
        answer: "The `href` attribute specifies the URL of the page the link goes to. When a user clicks the hyperlink, the browser navigates to the address specified in the `href` attribute.",
        explanation: "It is the most important attribute of the `<a>` tag."
    },
    {
        id: 15,
        testId: 2,
        difficulty: 'easy',
        question: "In CSS, what is the difference between `padding` and `margin`?",
        type: 'subjective',
        answer: "`Padding` is the space between the content of an element and its border. `Margin` is the space outside the border, between the element and other elements. Padding is inside the box, while margin is outside the box.",
        explanation: "Understanding this is fundamental to controlling element spacing and layout."
    },
    // Test 3: 15 Questions (9 MCQ, 6 Subjective)
    {
        id: 16,
        testId: 3,
        difficulty: 'medium',
        question: "In Flexbox, what does `justify-content` control?",
        type: 'mcq',
        options: ['Alignment along the cross axis', 'Alignment along the main axis', 'The spacing between flex lines', 'The size of the flex items'],
        answer: 'Alignment along the main axis',
        explanation: '`justify-content` defines how the browser distributes space between and around content items along the main-axis.'
    },
    {
        id: 17,
        testId: 3,
        difficulty: 'medium',
        question: "Which of the following is a hook in React?",
        type: 'mcq',
        options: ['render()', 'useState()', 'componentDidMount()', 'constructor()'],
        answer: 'useState()',
        explanation: '`useState` is a React Hook that lets you add state to functional components. The others are part of class components.'
    },
    {
        id: 18,
        testId: 3,
        difficulty: 'medium',
        question: "What is JSX?",
        type: 'mcq',
        options: ['A templating language for JavaScript', 'A syntax extension for JavaScript that looks like HTML', 'A CSS preprocessor', 'A database query language'],
        answer: 'A syntax extension for JavaScript that looks like HTML',
        explanation: "JSX allows developers to write HTML-like code within JavaScript, which is then compiled into standard JavaScript."
    },
    {
        id: 19,
        testId: 3,
        difficulty: 'medium',
        question: "What does the `...` spread syntax do in JavaScript?",
        type: 'mcq',
        options: ['It condenses an array into a single value', 'It expands an iterable (like an array or object) into individual elements', 'It is used for comments', 'It creates a new function'],
        answer: 'It expands an iterable (like an array or object) into individual elements',
        explanation: "The spread syntax is used to copy arrays or objects, or to pass elements of an array as individual arguments."
    },
    {
        id: 20,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of `useEffect` in React?",
        type: 'mcq',
        options: ['To manage component state', 'To handle side effects', 'To render JSX', 'To pass props'],
        answer: 'To handle side effects',
        explanation: "`useEffect` is a hook used for side effects like data fetching, subscriptions, or manually changing the DOM."
    },
    {
        id: 21,
        testId: 3,
        difficulty: 'medium',
        question: "What are React Fragments used for?",
        type: 'mcq',
        options: ['To group a list of children without adding extra nodes to the DOM', 'To debug React components', 'A special type of React component', 'A lifecycle method'],
        answer: 'To group a list of children without adding extra nodes to the DOM',
        explanation: "Fragments, written as `<>...</>`, solve the problem of needing a single root element without adding an unnecessary div."
    },
    {
        id: 22,
        testId: 3,
        difficulty: 'medium',
        question: "Which of these is used for client-side routing in a standard React app?",
        type: 'mcq',
        options: ['Node.js', 'Express.js', 'React Router', 'Next.js'],
        answer: 'React Router',
        explanation: "React Router is the most popular library for handling routing on the client side in a React application."
    },
    {
        id: 23,
        testId: 3,
        difficulty: 'medium',
        question: "What is tree shaking in the context of JavaScript bundlers?",
        type: 'mcq',
        options: ['A debugging technique', 'A process to eliminate dead code', 'A way to visualize the component tree', 'A code formatting tool'],
        answer: 'A process to eliminate dead code',
        explanation: "Tree shaking is a term for dead-code elimination. Bundlers like Webpack analyze imports/exports and remove unused code."
    },
    {
        id: 24,
        testId: 3,
        difficulty: 'medium',
        question: "What is `JSON.stringify()` used for?",
        type: 'mcq',
        options: ["To parse a JSON string into a JavaScript object", "To convert a JavaScript object into a JSON string", "To check if a string is valid JSON", "To string all values in a JSON object"],
        answer: "To convert a JavaScript object into a JSON string",
        explanation: "It serializes a JavaScript object or value into a JSON string."
    },
    {
        id: 25,
        testId: 3,
        difficulty: 'medium',
        question: "What is the Virtual DOM?",
        type: 'subjective',
        answer: "The Virtual DOM (VDOM) is a programming concept where a virtual representation of a UI is kept in memory and synced with the 'real' DOM. This allows libraries like React to batch DOM updates and optimize rendering by comparing the VDOM with a snapshot, and only applying the differences to the actual DOM.",
        explanation: "This reconciliation process is what makes React and similar frameworks highly performant."
    },
    {
        id: 26,
        testId: 3,
        difficulty: 'medium',
        question: "What is the difference between `==` and `===` in JavaScript?",
        type: 'subjective',
        answer: "The `==` operator performs type coercion, meaning it will try to convert operands to a common type before comparing. The `===` operator (strict equality) checks for both value and type equality without coercion. For example, `5 == '5'` is true, but `5 === '5'` is false.",
        explanation: "It is generally recommended to use `===` to avoid unexpected bugs from type coercion."
    },
    {
        id: 27,
        testId: 3,
        difficulty: 'medium',
        question: "What is a 'closure' in JavaScript?",
        type: 'subjective',
        answer: "A closure is a function that has access to its outer function's scope even after the outer function has returned. It 'closes over' the variables from its lexical scope, allowing it to remember and access those variables. This allows for patterns like data privacy and function factories.",
        explanation: "Closures are a fundamental and powerful concept in JavaScript."
    },
    {
        id: 28,
        testId: 3,
        difficulty: 'medium',
        question: "What does the `position: relative;` property do in CSS?",
        type: 'subjective',
        answer: "It positions an element relative to its normal position in the document flow. You can then use `top`, `right`, `bottom`, and `left` properties to offset it from this position. It also creates a new stacking context and acts as the containing block for any absolutely positioned child elements.",
        explanation: "It's a key property for controlling layout, often used as a container for absolutely positioned elements."
    },
    {
        id: 29,
        testId: 3,
        difficulty: 'medium',
        question: "What is event bubbling in the DOM?",
        type: 'subjective',
        answer: "Event bubbling is a type of event propagation where an event first triggers on the innermost target element, and then successively on its ancestors (parents) in the DOM tree until it reaches the root. This is the default behavior for most DOM events.",
        explanation: "Understanding event propagation (bubbling and capturing) is key for handling complex user interactions."
    },
    {
        id: 30,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of the `Promise.all()` method?",
        type: 'subjective',
        answer: "`Promise.all()` takes an iterable of promises and returns a single Promise that resolves when all of the promises in the iterable have resolved. The resolved value is an array of the results. If any of the promises reject, the returned promise immediately rejects.",
        explanation: "It's useful for aggregating the results of multiple asynchronous operations."
    },
    // Test 4: 20 Questions (12 MCQ, 8 Subjective)
    {
        id: 31,
        testId: 4,
        difficulty: 'medium',
        question: "What is a higher-order component (HOC) in React?",
        type: 'mcq',
        options: ['A component that renders other components', 'A function that takes a component and returns a new component with additional props or logic', 'A parent component in the component tree', 'Any component that uses hooks'],
        answer: 'A function that takes a component and returns a new component with additional props or logic',
        explanation: "HOCs are a pattern for reusing component logic. A HOC is a function that enhances a component."
    },
    {
        id: 32,
        testId: 4,
        difficulty: 'medium',
        question: "What is the `useReducer` hook?",
        type: 'mcq',
        options: ['An alternative to `useState` for complex state logic', 'A hook for reducing bundle size', 'A hook for performing animations', 'A hook for data fetching'],
        answer: 'An alternative to `useState` for complex state logic',
        explanation: "`useReducer` is often preferred over `useState` for complex state logic involving multiple sub-values."
    },
    {
        id: 33,
        testId: 4,
        difficulty: 'medium',
        question: "What is a `Set` in JavaScript?",
        type: 'mcq',
        options: ['A collection of unique values', 'A collection of key/value pairs', 'A sorted list of values', 'An immutable array'],
        answer: 'A collection of unique values',
        explanation: "A `Set` object lets you store unique values of any type."
    },
    {
        id: 34,
        testId: 4,
        difficulty: 'medium',
        question: "What is the `z-index` property in CSS used for?",
        type: 'mcq',
        options: ['To control the vertical stacking order of elements', 'To set the zoom level of an element', 'To define the font size', 'To create a 3D effect'],
        answer: 'To control the vertical stacking order of elements',
        explanation: "An element with a greater stack order is always in front of an element with a lower stack order. `z-index` only works on positioned elements."
    },
    {
        id: 35,
        testId: 4,
        difficulty: 'medium',
        question: "Which of these is a pseudo-element in CSS?",
        type: 'mcq',
        options: ['::before', ':hover', ':focus', ':active'],
        answer: '::before',
        explanation: 'Pseudo-elements like `::before` create an element that can be styled, whereas pseudo-classes like `:hover` apply to an existing element in a certain state.'
    },
    {
        id: 36,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between `npm` and `npx`?",
        type: 'mcq',
        options: ['They are the same', '`npm` is for installing packages, `npx` is for executing packages', '`npm` is for frontend, `npx` is for backend', '`npx` is a typo for `npm`'],
        answer: '`npm` is for installing packages, `npx` is for executing packages',
        explanation: "`npx` allows you to execute a package from the npm registry without installing it globally."
    },
    {
        id: 37,
        testId: 4,
        difficulty: 'medium',
        question: "What is the `yield` keyword in JavaScript used for?",
        type: 'mcq',
        options: ['To pause and resume a generator function', 'To return a value from a standard function', 'To create a new thread', 'To declare a variable'],
        answer: 'To pause and resume a generator function',
        explanation: 'It can only be used inside a generator function (`function*`) to pause execution.'
    },
    {
        id: 38,
        testId: 4,
        difficulty: 'medium',
        question: "What is lazy loading in the context of web performance?",
        type: 'mcq',
        options: ['Loading all assets at once', 'Delaying the loading of non-critical resources until they are needed', 'A CSS loading strategy', 'A database query optimization'],
        answer: 'Delaying the loading of non-critical resources until they are needed',
        explanation: "Lazy loading commonly applies to images or components, improving initial load time."
    },
    {
        id: 39,
        testId: 4,
        difficulty: 'medium',
        question: "Which of the following is NOT a valid HTTP method?",
        type: 'mcq',
        options: ["GET", "POST", "PUSH", "DELETE"],
        answer: "PUSH",
        explanation: "Standard HTTP methods include GET, POST, PUT, DELETE, PATCH. PUSH is part of the HTTP/2 protocol but is not a request method."
    },
    {
        id: 40,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of the `key` prop in React lists?",
        type: 'mcq',
        options: ["It's a unique identifier for the component in the DOM", "It helps React identify which items have changed, are added, or are removed", "It is used for styling", "It is passed as a prop to the component"],
        answer: "It helps React identify which items have changed, are added, or are removed",
        explanation: "Keys give elements a stable identity, helping React to optimize rendering."
    },
    {
        id: 41,
        testId: 4,
        difficulty: 'medium',
        question: "What does the `Array.prototype.reduce` method do?",
        type: 'mcq',
        options: ["Creates a new array with the results of calling a function on every element", "Filters an array based on a condition", "Executes a function on each element and returns a single accumulated value", "Checks if at least one element in the array passes a test"],
        answer: "Executes a function on each element and returns a single accumulated value",
        explanation: "It's often used to sum up numbers in an array."
    },
    {
        id: 42,
        testId: 4,
        difficulty: 'medium',
        question: "Which HTML5 element is best for embedding a video?",
        type: 'mcq',
        options: ["<media>", "<embed>", "<object>", "<video>"],
        answer: "<video>",
        explanation: "The `<video>` element is the semantic and standard way to embed video content."
    },
    {
        id: 43,
        testId: 4,
        difficulty: 'medium',
        question: "Explain the concept of 'hoisting' in JavaScript.",
        type: 'subjective',
        answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. `var` declarations are hoisted and initialized with `undefined`. `let` and `const` are hoisted but not initialized, which creates a 'Temporal Dead Zone' where they cannot be accessed before declaration.",
        explanation: "This is why you can call a function before its definition, but not a function assigned to a `let` variable."
    },
    {
        id: 44,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between `null` and `undefined` in JavaScript?",
        type: 'subjective',
        answer: "`undefined` means a variable has been declared but not assigned a value. `null` is an assignment value that can be assigned to a variable to represent the intentional absence of any object value.",
        explanation: "`typeof undefined` is 'undefined', while `typeof null` is 'object', which is a historical bug."
    },
    {
        id: 45,
        testId: 4,
        difficulty: 'medium',
        question: "How does CSS Grid Layout differ from Flexbox?",
        type: 'subjective',
        answer: "The primary difference is that Flexbox is designed for one-dimensional layouts (a row OR a column). CSS Grid is designed for two-dimensional layouts (rows AND columns). Grid provides more control over the overall page layout, while Flexbox excels at aligning content within a container.",
        explanation: "Grid is for layout of the page, Flexbox is for layout of components."
    },
    {
        id: 46,
        testId: 4,
        difficulty: 'medium',
        question: "Explain the `async` and `await` keywords in JavaScript.",
        type: 'subjective',
        answer: "`async` functions are a special syntax for working with promises. An `async` function always returns a promise. The `await` keyword, used inside an `async` function, pauses the function's execution, waiting for a promise to resolve, making asynchronous code look synchronous.",
        explanation: "They are syntactic sugar over Promises, improving readability."
    },
    {
        id: 47,
        testId: 4,
        difficulty: 'medium',
        question: "What is Cross-Site Scripting (XSS)?",
        type: 'subjective',
        answer: "XSS is a security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users. This can be used to steal session tokens or deface websites. React helps prevent XSS by automatically escaping JSX content before rendering it.",
        explanation: "Never use `dangerouslySetInnerHTML` without sanitizing the input."
    },
    {
        id: 48,
        testId: 4,
        difficulty: 'medium',
        question: "What are controlled and uncontrolled components in React?",
        type: 'subjective',
        answer: "A controlled component is a form element (like `<input>`) whose value is controlled by React state. The state is the single source of truth. An uncontrolled component is a form element whose value is handled by the DOM itself. You typically use a `ref` to get its value when needed.",
        explanation: "Controlled components are generally recommended for their predictability."
    },
    {
        id: 49,
        testId: 4,
        difficulty: 'medium',
        question: "What is CORS (Cross-Origin Resource Sharing)?",
        type: 'subjective',
        answer: "CORS is a browser security feature that restricts cross-origin HTTP requests. To allow them, the server at the requested origin must include specific CORS headers (like `Access-Control-Allow-Origin`) in its response.",
        explanation: "This prevents malicious sites from making unauthorized requests to your APIs on behalf of a user."
    },
    {
        id: 50,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of semantic HTML tags?",
        type: 'subjective',
        answer: "Semantic HTML tags like `<header>`, `<footer>`, `<article>`, and `<section>` clearly describe their meaning. This improves accessibility (for screen readers) and SEO (for search engine crawlers), giving structure and meaning to the content.",
        explanation: "Using `<div>` for everything is a common anti-pattern."
    },
    // Test 5: 25 Questions (15 MCQ, 10 Subjective)
    {
        id: 51,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'prop drilling' in React?",
        type: 'mcq',
        options: ["A performance optimization technique", "Passing props down through multiple layers of nested components", "A way to fetch data", "A specific type of error"],
        answer: "Passing props down through multiple layers of nested components",
        explanation: "It's often a sign that you should consider using state management or React Context."
    },
    {
        id: 52,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `BEM` methodology in CSS?",
        type: 'mcq',
        options: ["A JavaScript framework", "A naming convention for classes", "A CSS preprocessor", "A type of CSS selector"],
        answer: "A naming convention for classes",
        explanation: "BEM (Block, Element, Modifier) helps create more readable, maintainable, and reusable CSS."
    },
    {
        id: 53,
        testId: 5,
        difficulty: 'medium',
        question: "In CSS, what is the difference between `em` and `rem` units?",
        type: 'mcq',
        options: ["`em` is relative to the parent's font-size, `rem` is relative to the root's font-size", "`rem` is relative to the parent's font-size, `em` is relative to the root's font-size", "They are the same", " `em` is for width, `rem` is for height"],
        answer: "`em` is relative to the parent's font-size, `rem` is relative to the root's font-size",
        explanation: "`rem` is generally easier to manage for creating scalable layouts."
    },
    {
        id: 54,
        testId: 5,
        difficulty: 'medium',
        question: "What is a pure function?",
        type: 'mcq',
        options: ["A function with no arguments", "A function that has no side effects and returns the same output for the same input", "A function that only exists in React", "A function that returns another function"],
        answer: "A function that has no side effects and returns the same output for the same input",
        explanation: "Pure functions are a core concept of functional programming."
    },
    {
        id: 55,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `at()` method for JavaScript arrays?",
        type: 'mcq',
        options: ['To find an element at a specific index, supporting negative indices', 'To concatenate two arrays', 'To sort an array', 'To check if an array contains a certain value'],
        answer: 'To find an element at a specific index, supporting negative indices',
        explanation: "`myArray.at(-1)` returns the last item, which is more concise than `myArray[myArray.length - 1]`."
    },
    {
        id: 56,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of `.map` files often seen in production builds?",
        type: 'mcq',
        options: ['They are image files', 'They are source maps for debugging minified code', 'They are configuration files', 'They are web manifest files'],
        answer: 'They are source maps for debugging minified code',
        explanation: "Source maps allow you to see your original source code in the browser's developer tools."
    },
    {
        id: 57,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'Time to First Byte' (TTFB)?",
        type: 'mcq',
        options: ['The time it takes for the browser to receive the first byte of a response from the server', 'The total time to load a page', 'The time to execute the first JavaScript file', 'The time to render the first pixel'],
        answer: 'The time it takes for the browser to receive the first byte of a response from the server',
        explanation: "TTFB is a metric for measuring the responsiveness of a web server."
    },
    {
        id: 58,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `prefers-reduced-motion` media query?",
        type: 'mcq',
        options: ["To reduce the amount of JavaScript loaded", "To detect if the user has requested the system minimize the amount of non-essential motion it uses", "To decrease the image quality", "To switch to a dark theme"],
        answer: "To detect if the user has requested the system minimize the amount of non-essential motion it uses",
        explanation: "This is an important accessibility feature to disable or reduce animations."
    },
    {
        id: 59,
        testId: 5,
        difficulty: 'medium',
        question: "Which is a valid way to create a multi-line comment in JavaScript?",
        type: 'mcq',
        options: ["<!-- This is a comment -->", "/* This is a comment */", "# This is a comment", "--- This is a comment ---"],
        answer: "/* This is a comment */",
        explanation: "Multi-line comments in JavaScript start with /* and end with */."
    },
    {
        id: 60,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `DOMContentLoaded` event?",
        type: 'mcq',
        options: ['It fires when the entire page has loaded, including all dependent resources such as stylesheets and images', 'It fires when the initial HTML document has been completely loaded and parsed', 'It fires when a user clicks on the document', 'It fires when an AJAX request is completed'],
        answer: 'It fires when the initial HTML document has been completely loaded and parsed',
        explanation: "It fires before the `load` event, which waits for images and stylesheets."
    },
    {
        id: 61,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `aria-live` attribute used for?",
        type: 'mcq',
        options: ['To style live-streaming video', 'To indicate that an element will be updated, and to describe the types of updates for screen readers', 'To set the language of an element', 'To hide an element from screen readers'],
        answer: 'To indicate that an element will be updated, and to describe the types of updates for screen readers',
        explanation: "It's crucial for making dynamic content accessible, such as in live chat or notifications."
    },
    {
        id: 62,
        testId: 5,
        difficulty: 'medium',
        question: "What does the CSS `box-sizing: border-box;` property do?",
        type: 'mcq',
        options: ["It tells the browser to include padding and border in the element's total width and height", "It makes the element a block-level box", "It controls the sizing of the box shadow", "It is the default box-sizing value"],
        answer: "It tells the browser to include padding and border in the element's total width and height",
        explanation: "This makes layout calculations much more intuitive."
    },
    {
        id: 63,
        testId: 5,
        difficulty: 'medium',
        question: "What is `git merge` used for?",
        type: 'mcq',
        options: ['To create a new repository', 'To switch branches', 'To join two or more development histories together', 'To delete a commit'],
        answer: 'To join two or more development histories together',
        explanation: "It's a fundamental command for integrating changes from different branches."
    },
    {
        id: 64,
        testId: 5,
        difficulty: 'medium',
        question: "What is the 'critical rendering path'?",
        type: 'mcq',
        options: ["The shortest path to render a component in React", "The sequence of steps the browser goes through to convert HTML, CSS, and JavaScript into pixels on the screen", "A network path with the lowest latency", "The main thread of the browser"],
        answer: "The sequence of steps the browser goes through to convert HTML, CSS, and JavaScript into pixels on the screen",
        explanation: "Optimizing this path is key to improving web performance."
    },
    {
        id: 65,
        testId: 5,
        difficulty: 'medium',
        question: "What does the `...` rest parameter syntax do in a function signature?",
        type: 'mcq',
        options: ['It indicates the function returns a promise', 'It allows a function to accept an indefinite number of arguments as an array', 'It spreads an array into individual arguments', 'It is for comments'],
        answer: 'It allows a function to accept an indefinite number of arguments as an array',
        explanation: "e.g., `function sum(...numbers) { ... }` gathers all arguments into the `numbers` array."
    },
    {
        id: 66,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `useCallback` hook in React used for?",
        type: 'subjective',
        answer: "`useCallback` returns a memoized version of a callback function that only changes if one of its dependencies has changed. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary re-renders (e.g., components wrapped in `React.memo`).",
        explanation: "It prevents functions from being recreated on every render."
    },
    {
        id: 67,
        testId: 5,
        difficulty: 'medium',
        question: "What is server-side rendering (SSR)?",
        type: 'subjective',
        answer: "Server-side rendering is the ability of an application to render the initial page on the server, sending a fully rendered HTML page to the client. This improves initial page load performance and is beneficial for SEO as search engine crawlers can index the content immediately.",
        explanation: "Frameworks like Next.js make SSR easier to implement."
    },
    {
        id: 68,
        testId: 5,
        difficulty: 'medium',
        question: "What are service workers?",
        type: 'subjective',
        answer: "Service workers are scripts that your browser runs in the background, separate from a web page. They enable features that don't need a web page or user interaction, such as offline capabilities (caching assets), background sync, and push notifications. They are a core part of Progressive Web Apps (PWAs).",
        explanation: "They act as a proxy between the web app, the browser, and the network."
    },
    {
        id: 69,
        testId: 5,
        difficulty: 'medium',
        question: "What is the 'critical rendering path'?",
        type: 'subjective',
        answer: "The critical rendering path is the sequence of steps the browser goes through to convert HTML, CSS, and JavaScript into pixels on the screen. Optimizing it involves minimizing the number of critical resources, reducing their size, and optimizing the order in which they are loaded and processed.",
        explanation: "Understanding this path is key to improving web performance."
    },
    {
        id: 70,
        testId: 5,
        difficulty: 'medium',
        question: "How can you avoid 'prop drilling' in React?",
        type: 'subjective',
        answer: "Prop drilling can be avoided by using state management solutions. For global or widely shared state, a library like Redux or Zustand is common. For state shared between a few nested components, the built-in React Context API is an excellent choice. It allows you to 'provide' a value and consume it at any lower level.",
        explanation: "Context API is the idiomatic React solution for this problem."
    },
    {
        id: 71,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'polyfill'?",
        type: 'subjective',
        answer: "A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. It 'fills in' the gap in the browser's implementation, allowing developers to use modern APIs without worrying about older browsers.",
        explanation: "For example, you might use a polyfill for `Promise` or `fetch` for very old browsers."
    },
    {
        id: 72,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between `localStorage` and `sessionStorage`?",
        type: 'subjective',
        answer: "Both are web storage APIs. `localStorage` stores data with no expiration date; it persists even when the browser is closed and reopened. `sessionStorage` only stores data for one session, meaning the data is cleared as soon as the browser tab is closed.",
        explanation: "Use `localStorage` for user settings, `sessionStorage` for temporary session data."
    },
    {
        id: 73,
        testId: 5,
        difficulty: 'medium',
        question: "In CSS, what is specificity?",
        type: 'subjective',
        answer: "Specificity is the algorithm used by browsers to determine which CSS rule is the most 'specific' and therefore should be applied to an element. It is calculated based on a weighted score of ID, class/attribute, and type selectors. An inline style has the highest specificity.",
        explanation: "Understanding specificity is crucial for debugging CSS issues."
    },
    {
        id: 74,
        testId: 5,
        difficulty: 'medium',
        question: "Explain what ARIA attributes are and why they are important.",
        type: 'subjective',
        answer: "ARIA (Accessible Rich Internet Applications) is a set of attributes you can add to HTML to improve accessibility. They provide additional semantics for assistive technologies like screen readers, especially for dynamic content and complex UI controls. For example, `role='alert'` or `aria-expanded='true'`.",
        explanation: "Proper ARIA usage is essential for creating accessible web applications."
    },
    {
        id: 75,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'lifting state up' in React?",
        type: 'subjective',
        answer: "Lifting state up is a pattern in React where you move shared state from multiple components up to their closest common ancestor. The ancestor component then passes the state and state-updating functions down to the children via props. This is used when several components need to reflect the same changing data.",
        explanation: "It helps keep your components in sync and is a fundamental React pattern."
    },
    // Test 6: 30 Questions (18 MCQ, 12 Subjective)
    {
        id: 76,
        testId: 6,
        difficulty: 'hard',
        question: "What is the `useLayoutEffect` hook in React and how does it differ from `useEffect`?",
        type: 'mcq',
        options: ["It runs before the component renders", "It fires synchronously after all DOM mutations, but before the browser has painted", "It's an alias for `useEffect`", "It only runs on the server"],
        answer: "It fires synchronously after all DOM mutations, but before the browser has painted",
        explanation: "This makes it suitable for reading layout from the DOM and synchronously re-rendering. `useEffect` runs asynchronously."
    },
    {
        id: 77,
        testId: 6,
        difficulty: 'hard',
        question: "In CSS Grid, what is the `fr` unit?",
        type: 'mcq',
        options: ['A fixed unit equal to 1 pixel', 'A unit representing a fraction of the free space in the grid container', 'A percentage of the viewport width', 'A unit relative to the font size'],
        answer: 'A unit representing a fraction of the free space in the grid container',
        explanation: "It allows for flexible and proportional grid layouts."
    },
    {
        id: 78,
        testId: 6,
        difficulty: 'hard',
        question: "What does the `finally` method do on a JavaScript Promise?",
        type: 'mcq',
        options: ['It executes only if the promise is resolved', 'It executes only if the promise is rejected', 'It executes when the promise is settled (either resolved or rejected)', 'It returns the final value of the promise'],
        answer: 'It executes when the promise is settled (either resolved or rejected)',
        explanation: "It's useful for cleanup code that should run regardless of the promise's outcome."
    },
    {
        id: 79,
        testId: 6,
        difficulty: 'hard',
        question: "What is `Object.seal()` in JavaScript?",
        type: 'mcq',
        options: ['It prevents any changes to an object', 'It prevents adding new properties and marks existing properties as non-configurable', 'It makes an object read-only', 'It deletes an object'],
        answer: 'It prevents adding new properties and marks existing properties as non-configurable',
        explanation: "Values of existing properties can still be changed as long as they are writable."
    },
    {
        id: 80,
        testId: 6,
        difficulty: 'hard',
        question: "What is the main difference between PUT and PATCH HTTP methods?",
        type: 'mcq',
        options: ['PUT is for creating, PATCH is for updating', 'PUT replaces the entire resource, PATCH applies a partial update', 'PATCH is more secure than PUT', 'There is no difference'],
        answer: 'PUT replaces the entire resource, PATCH applies a partial update',
        explanation: "PUT is idempotent, while PATCH is not necessarily idempotent."
    },
    {
        id: 81,
        testId: 6,
        difficulty: 'hard',
        question: "What is a `Proxy` object in JavaScript?",
        type: 'mcq',
        options: ['A network proxy configuration', 'An object used to define custom behavior for fundamental operations (e.g., property lookup)', 'A placeholder for a future value', 'A security feature'],
        answer: 'An object used to define custom behavior for fundamental operations (e.g., property lookup)',
        explanation: "Proxies enable powerful metaprogramming patterns, such as reactivity in frameworks like Vue."
    },
    {
        id: 82,
        testId: 6,
        difficulty: 'hard',
        question: "Which CSS property can be used to prevent text from wrapping?",
        type: 'mcq',
        options: ['text-wrap: no-wrap', 'word-break: break-all', 'white-space: nowrap', 'overflow: hidden'],
        answer: 'white-space: nowrap',
        explanation: "It collapses white space and prevents line breaks."
    },
    {
        id: 83,
        testId: 6,
        difficulty: 'hard',
        question: "Which is a valid way to create a private class field in modern JavaScript?",
        type: 'mcq',
        options: ['`let myVar`', '`this._myVar`', '`const myVar`', '`#myVar`'],
        answer: '`#myVar`',
        explanation: "The `#` prefix makes a field private to the class, inaccessible from outside."
    },
    {
        id: 84,
        testId: 6,
        difficulty: 'hard',
        question: "What is a `PureComponent` in React?",
        type: 'mcq',
        options: ['A component with no state', 'A component that only contains pure functions', 'A class component that implements a shallow prop and state comparison to prevent unnecessary re-renders', 'A functional component'],
        answer: 'A class component that implements a shallow prop and state comparison to prevent unnecessary re-renders',
        explanation: "`React.memo` is the equivalent for functional components."
    },
    {
        id: 85,
        testId: 6,
        difficulty: 'hard',
        question: "What is a `Symbol` in JavaScript used for?",
        type: 'mcq',
        options: ['To create unique object properties to avoid name collisions', 'To store special characters', 'To create vector graphics', 'To perform mathematical operations'],
        answer: 'To create unique object properties to avoid name collisions',
        explanation: "They are a primitive data type that is guaranteed to be unique."
    },
    {
        id: 86,
        testId: 6,
        difficulty: 'hard',
        question: "Why is `requestAnimationFrame` better for animations than `setTimeout`?",
        type: 'mcq',
        options: ['It runs code after a specified delay with higher priority', 'It synchronizes with the browser\'s repaint cycle for smoother animations', 'It is a newer version of `setInterval`', 'It is used exclusively for network requests'],
        answer: 'It synchronizes with the browser\'s repaint cycle for smoother animations',
        explanation: "This prevents layout thrashing and results in more efficient, smoother animations."
    },
    {
        id: 87,
        testId: 6,
        difficulty: 'hard',
        question: "What is webpack's Module Federation?",
        type: 'mcq',
        options: ['A way to manage different versions of the same module', 'A method for loading modules from a CDN', 'A feature that allows a JavaScript application to dynamically load code from another application', 'A security policy for modules'],
        answer: 'A feature that allows a JavaScript application to dynamically load code from another application',
        explanation: "It enables micro-frontend architectures by allowing separately built applications to share code."
    },
    {
        id: 88,
        testId: 6,
        difficulty: 'hard',
        question: "What is a `WeakMap` in JavaScript?",
        type: 'mcq',
        options: ["A Map that cannot be iterated", "A Map that only holds weak references to its keys, allowing them to be garbage collected", "A less performant version of Map", "An alias for an Object"],
        answer: "A Map that only holds weak references to its keys, allowing them to be garbage collected",
        explanation: "This prevents memory leaks when the only reference to an object is the WeakMap key."
    },
    {
        id: 89,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of `rel='noopener'` attribute on a link?",
        type: 'mcq',
        options: ["To stop search engines from following the link", "To prevent the new page from being able to access the `window.opener` property for security", "To open the link in a special popup", "To load the link content in the background"],
        answer: "To prevent the new page from being able to access the `window.opener` property for security",
        explanation: "This is a security measure to prevent malicious pages from manipulating the original page."
    },
    {
        id: 90,
        testId: 6,
        difficulty: 'hard',
        question: "What is the `for...of` loop used for in JavaScript?",
        type: 'mcq',
        options: ["Iterating over the properties of an object", "Iterating over the values of an iterable object (like an Array or String)", "Creating a loop that runs a specific number of times", "It is an alias for the `for...in` loop"],
        answer: "Iterating over the values of an iterable object (like an Array or String)",
        explanation: "`for...in` iterates over keys, while `for...of` iterates over values."
    },
    {
        id: 91,
        testId: 6,
        difficulty: 'hard',
        question: "What is CSS Containment?",
        type: 'mcq',
        options: ["A property to contain elements within the viewport", "A property (`contain`) that allows you to isolate a part of the page for performance optimization", "A security feature to contain scripts", "A way to group CSS variables"],
        answer: "A property (`contain`) that allows you to isolate a part of the page for performance optimization",
        explanation: "It tells the browser that an element's subtree is independent, allowing for rendering optimizations."
    },
    {
        id: 92,
        testId: 6,
        difficulty: 'hard',
        question: "What is `git stash` used for?",
        type: 'mcq',
        options: ["To delete uncommitted changes", "To save uncommitted changes temporarily without committing them", "To merge branches", "To create a new commit"],
        answer: "To save uncommitted changes temporarily without committing them",
        explanation: "It's useful for quickly switching contexts without making a commit."
    },
    {
        id: 93,
        testId: 6,
        difficulty: 'hard',
        question: "What is `requestAnimationFrame` primarily used for?",
        type: 'mcq',
        options: ["Fetching data from an API", "Running background tasks", "Performing smooth animations in the browser", "Debouncing user input"],
        answer: "Performing smooth animations in the browser",
        explanation: "It schedules a function to be called just before the next browser repaint."
    },
    {
        id: 94,
        testId: 6,
        difficulty: 'hard',
        question: "Describe the JavaScript event loop.",
        type: 'subjective',
        answer: "The event loop is a mechanism that allows JavaScript's single thread to handle asynchronous operations. It consists of a call stack, a message queue, and Web APIs. When an async operation completes (e.g., `setTimeout`), its callback is placed in the queue. The event loop continuously checks if the call stack is empty. If it is, it takes the first message from the queue and pushes its callback onto the stack to be executed.",
        explanation: "This model allows for non-blocking I/O in a single-threaded environment."
    },
    {
        id: 95,
        testId: 6,
        difficulty: 'hard',
        question: "What are WebSockets?",
        type: 'subjective',
        answer: "WebSockets provide a full-duplex communication channel over a single, long-lived TCP connection. Unlike traditional HTTP, which is request-response based, WebSockets allow for real-time, two-way communication between the client and server, making them ideal for applications like live chat, real-time gaming, and live data feeds.",
        explanation: "They solve the limitations of HTTP polling and long-polling."
    },
    {
        id: 96,
        testId: 6,
        difficulty: 'hard',
        question: "How would you debounce a function in JavaScript?",
        type: 'subjective',
        answer: "Debouncing is a technique to limit the rate at which a function gets called. You create a wrapper function that uses `setTimeout`. Inside the wrapper, you first clear any existing timeout with `clearTimeout`, then set a new timeout to execute the original function after a specified delay. This ensures the function only runs once after a burst of calls has ended.",
        explanation: "It's commonly used for handling user input, like in a search bar."
    },
    {
        id: 97,
        testId: 6,
        difficulty: 'hard',
        question: "Explain how the `this` keyword works in JavaScript.",
        type: 'subjective',
        answer: "The value of `this` is determined by how a function is called (its execution context). In a method (`obj.myMethod()`), `this` refers to the owner object. In a regular function, `this` refers to the global object (`window`) or `undefined` in strict mode. Arrow functions do not have their own `this`; they lexically bind it from their parent scope.",
        explanation: "The behavior of `this` is one of the most frequently misunderstood parts of JavaScript."
    },
    {
        id: 98,
        testId: 6,
        difficulty: 'hard',
        question: "What are CSS Custom Properties (Variables) and what are their benefits?",
        type: 'subjective',
        answer: "CSS Custom Properties are entities defined by authors that contain specific values to be reused. They are set using custom property notation (e.g., `--main-color: #ff0000;`) and accessed using `var()`. Benefits include DRY code, easier theming, and the ability to be read and changed dynamically via JavaScript.",
        explanation: "They are a powerful feature for creating maintainable and dynamic stylesheets."
    },
    {
        id: 99,
        testId: 6,
        difficulty: 'hard',
        question: "What is hydration in the context of SSR with React?",
        type: 'subjective',
        answer: "Hydration is the process of attaching event listeners to the static HTML received from a server-side rendering (SSR) process. React 'hydrates' the server-rendered HTML by building its virtual DOM in memory, comparing it to the existing HTML, and then attaching the necessary JavaScript logic and event listeners.",
        explanation: "It turns a static page into a dynamic single-page application."
    },
    {
        id: 100,
        testId: 6,
        difficulty: 'hard',
        question: "Explain event delegation in JavaScript.",
        type: 'subjective',
        answer: "Event delegation is a technique where you add a single event listener to a parent element to manage events for all of its children. When an event bubbles up, the parent listener checks the `event.target` to identify which child triggered the event. This improves performance by reducing the number of event listeners.",
        explanation: "It's a memory-efficient way to handle events on many elements."
    },
    {
        id: 101,
        testId: 6,
        difficulty: 'hard',
        question: "How does React's reconciliation algorithm work?",
        type: 'subjective',
        answer: "Reconciliation is the process through which React updates the DOM. When state changes, React creates a new virtual DOM tree. It then compares ('diffs') this new tree with the previous one. Based on this comparison, it computes the minimal set of changes needed to update the real DOM and applies them in a batch.",
        explanation: "The key assumption is that different component types produce different trees and that developers can hint at stable elements using the `key` prop."
    },
    {
        id: 102,
        testId: 6,
        difficulty: 'hard',
        question: "What are render props in React?",
        type: 'subjective',
        answer: "The term 'render prop' refers to a technique for sharing code between React components using a prop whose value is a function that returns a React element. A component with a render prop calls this function to delegate its rendering logic, enabling powerful and flexible composition.",
        explanation: "It's a pattern for sharing logic, similar in purpose to hooks and HOCs."
    },
    {
        id: 103,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between throttling and debouncing?",
        type: 'subjective',
        answer: "Throttling guarantees execution at most once per specified time period (e.g., once every 100ms). Debouncing ensures execution only after a certain period of inactivity (e.g., after the user stops typing for 300ms). Throttling is about limiting the rate, while debouncing is about waiting for a pause.",
        explanation: "Throttling is good for scroll events, while debouncing is good for search input."
    },
    {
        id: 104,
        testId: 6,
        difficulty: 'hard',
        question: "What is a Progressive Web App (PWA)?",
        type: 'subjective',
        answer: "A PWA is a web application that uses modern web capabilities to deliver an app-like experience. Key features include being installable, working offline via a service worker, and offering push notifications. They aim to combine the reach of the web with the user experience of a native app.",
        explanation: "They represent the evolution of web apps to be more capable and reliable."
    },
    {
        id: 105,
        testId: 6,
        difficulty: 'hard',
        question: "What is the `Same-Origin Policy` and why is it important?",
        type: 'subjective',
        answer: "The Same-Origin Policy (SOP) is a critical security mechanism in web browsers that restricts how a document or script loaded from one origin can interact with a resource from another. This helps prevent malicious scripts on one page from accessing sensitive data on another.",
        explanation: "It's a cornerstone of web security."
    },
    // Test 7: 35 Questions (21 MCQ, 14 Subjective)
    {
        id: 106,
        testId: 7,
        difficulty: 'hard',
        question: "What is the CSS `overscroll-behavior` property used for?",
        type: 'mcq',
        options: ['It controls what happens when a user scrolls past the boundary of a scrolling area', 'It determines the speed of scrolling', 'It enables smooth scrolling', 'It is an alias for `overflow`'],
        answer: "It controls what happens when a user scrolls past the boundary of a scrolling area",
        explanation: "It can be used to prevent 'scroll chaining', where scrolling in a modal also scrolls the page behind it."
    },
    {
        id: 107,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of `git rebase`?",
        type: 'mcq',
        options: ['To merge two branches', 'To move or combine a sequence of commits to a new base commit', 'To delete a branch', 'To create a backup of the repository'],
        answer: "To move or combine a sequence of commits to a new base commit",
        explanation: "Rebasing is often used to maintain a linear project history."
    },
    {
        id: 108,
        testId: 7,
        difficulty: 'hard',
        question: "What does the `SameSite` attribute on a cookie control?",
        type: 'mcq',
        options: ["The cookie's expiration date", "Whether the cookie is sent with cross-site requests", "The cookie's value", "The cookie's domain"],
        answer: "Whether the cookie is sent with cross-site requests",
        explanation: "Setting `SameSite=Strict` or `Lax` is a key defense against Cross-Site Request Forgery (CSRF) attacks."
    },
    {
        id: 109,
        testId: 7,
        difficulty: 'hard',
        question: "What is `Promise.race()`?",
        type: 'mcq',
        options: ['It returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects', 'It runs all promises in parallel and returns the fastest one', 'It is a syntax error', 'It returns a random promise from the iterable'],
        answer: "It returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects",
        explanation: "It's a race to the first settled promise."
    },
    {
        id: 110,
        testId: 7,
        difficulty: 'hard',
        question: "Which of these is a structural pseudo-class in CSS?",
        type: 'mcq',
        options: [':hover', ':active', ':nth-child(n)', ':focus'],
        answer: ":nth-child(n)",
        explanation: "Structural pseudo-classes select elements based on their position in the document tree, not their state."
    },
    {
        id: 111,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of a `webpack loader`?",
        type: 'mcq',
        options: ['To run tasks before or after the build', 'To transform files from a different language (like TypeScript or Sass) into JavaScript/CSS', 'To bundle multiple files into one', 'To optimize images'],
        answer: "To transform files from a different language (like TypeScript or Sass) into JavaScript/CSS",
        explanation: "Loaders allow webpack to process more than just JavaScript files."
    },
    {
        id: 112,
        testId: 7,
        difficulty: 'hard',
        question: "What is the `Shadow DOM`?",
        type: 'mcq',
        options: ['A virtual copy of the DOM', 'A hidden DOM that cannot be manipulated', 'A browser technology for encapsulating the structure and style of a web component', 'A dark theme for the DOM'],
        answer: "A browser technology for encapsulating the structure and style of a web component",
        explanation: "It prevents styles from inside a component from leaking out, and styles from the main page from leaking in."
    },
    {
        id: 113,
        testId: 7,
        difficulty: 'hard',
        question: "What is the HTTP `Authorization` header used for?",
        type: 'mcq',
        options: ['To specify the media type of the resource', 'To contain the credentials to authenticate a user agent with a server', 'To indicate which character sets are acceptable', 'To control caching'],
        answer: "To contain the credentials to authenticate a user agent with a server",
        explanation: "It often contains a bearer token, such as a JWT."
    },
    {
        id: 114,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between `display: none` and `visibility: hidden`?",
        type: 'mcq',
        options: ['There is no difference', '`display: none` removes the element from the document flow, while `visibility: hidden` only hides it visually but it still takes up space', '`visibility: hidden` removes the element from the document flow', '`display: none` is for images only'],
        answer: '`display: none` removes the element from the document flow, while `visibility: hidden` only hides it visually but it still takes up space',
        explanation: "This is a key distinction for controlling layout and visibility."
    },
    {
        id: 115,
        testId: 7,
        difficulty: 'hard',
        question: "What does the `async` keyword do in a JavaScript function declaration?",
        type: 'mcq',
        options: ['It makes the function run on a separate thread', 'It ensures the function always returns a `Promise`', 'It blocks the execution of the code', 'It indicates the function is a security risk'],
        answer: 'It ensures the function always returns a `Promise`',
        explanation: "It also allows the `await` keyword to be used inside the function."
    },
    {
        id: 116,
        testId: 7,
        difficulty: 'hard',
        question: "Which of the following is NOT a core concept of Redux?",
        type: 'mcq',
        options: ['Store', 'Action', 'Reducer', 'Component'],
        answer: 'Component',
        explanation: "While Redux is used with components, the component itself is not a part of the core Redux architecture."
    },
    {
        id: 117,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'Generator' function in JavaScript (`function*`)?",
        type: 'mcq',
        options: ['A function that generates random numbers', 'A function that can be paused and resumed using the `yield` keyword', 'A function that automatically generates documentation', 'A function for generating HTML'],
        answer: 'A function that can be paused and resumed using the `yield` keyword',
        explanation: "They are useful for creating iterators and managing complex asynchronous flows."
    },
    {
        id: 118,
        testId: 7,
        difficulty: 'hard',
        question: "Which CSS value is used to make a flex item grow and shrink as needed, ignoring its initial size?",
        type: 'mcq',
        options: ['`flex: 1`', '`flex: auto`', '`flex: initial`', '`flex: none`'],
        answer: '`flex: 1`',
        explanation: "`flex: 1` is shorthand for `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0%`."
    },
    {
        id: 119,
        testId: 7,
        difficulty: 'hard',
        question: "What is a `meta` tag in HTML used for?",
        type: 'mcq',
        options: ['To define the main content', 'To provide metadata about the HTML document, such as character set, description, and viewport settings', 'To create a table', 'To embed another HTML page'],
        answer: 'To provide metadata about the HTML document, such as character set, description, and viewport settings',
        explanation: "Meta tags are crucial for SEO and browser behavior."
    },
    {
        id: 120,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of `Array.prototype.flat()`?",
        type: 'mcq',
        options: ["To flatten a multi-dimensional array into a new one-dimensional array", "To sort an array in place", "To add a new element to the end of an array", "To find the first element that satisfies a condition"],
        answer: "To flatten a multi-dimensional array into a new one-dimensional array",
        explanation: "It can take an optional depth argument to specify how many levels to flatten."
    },
    {
        id: 121,
        testId: 7,
        difficulty: 'hard',
        question: "What is the `IntersectionObserver` API used for?",
        type: 'mcq',
        options: ["Observing changes to the intersection of a target element with an ancestor element or viewport", "Observing network requests", "Observing user interactions", "Observing changes in the CSS object model"],
        answer: "Observing changes to the intersection of a target element with an ancestor element or viewport",
        explanation: "It's a performant way to implement lazy loading and infinite scroll."
    },
    {
        id: 122,
        testId: 7,
        difficulty: 'hard',
        question: "What is the `will-change` CSS property for?",
        type: 'mcq',
        options: ["To predict the future value of a property", "To hint to browsers how an element is expected to change, allowing for optimization", "To prevent a property from changing", "To animate a CSS property"],
        answer: "To hint to browsers how an element is expected to change, allowing for optimization",
        explanation: "It allows the browser to set up optimizations before an element is actually changed."
    },
    {
        id: 123,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between a `<div>` and a `<span>`?",
        type: 'mcq',
        options: ["There is no difference", "`<div>` is a block-level element, `<span>` is an inline element", "`<span>` is a block-level element, `<div>` is an inline element", "`<div>` is for images, `<span>` is for text"],
        answer: "`<div>` is a block-level element, `<span>` is an inline element",
        explanation: "A `div` takes up the full width available, while a `span` only takes up as much width as necessary."
    },
    {
        id: 124,
        testId: 7,
        difficulty: 'hard',
        question: "What is `ESLint`?",
        type: 'mcq',
        options: ["A JavaScript compiler", "A JavaScript testing framework", "A static analysis tool for identifying and fixing problems in JavaScript code", "A state management library"],
        answer: "A static analysis tool for identifying and fixing problems in JavaScript code",
        explanation: "It helps enforce code quality and style consistency."
    },
    {
        id: 125,
        testId: 7,
        difficulty: 'hard',
        question: "What is `Promise.allSettled()`?",
        type: 'mcq',
        options: ["It returns a promise that resolves when all promises have resolved", "It returns a promise that resolves after all of the given promises have either fulfilled or rejected", "It is an alias for `Promise.all()`", "It rejects if any of the promises reject"],
        answer: "It returns a promise that resolves after all of the given promises have either fulfilled or rejected",
        explanation: "Unlike `Promise.all()`, it never rejects, making it useful when you need the outcome of every promise."
    },
    {
        id: 126,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'memoization' in programming?",
        type: 'mcq',
        options: ["A type of data encryption", "An optimization technique where the results of expensive function calls are cached and returned for the same inputs", "A memory-saving technique", "A way to comment code"],
        answer: "An optimization technique where the results of expensive function calls are cached and returned for the same inputs",
        explanation: "React's `useMemo` and `useCallback` hooks are examples of memoization."
    },
    {
        id: 127,
        testId: 7,
        difficulty: 'hard',
        question: "What is a `Symbol` in JavaScript?",
        type: 'subjective',
        answer: "A `Symbol` is a unique and immutable primitive data type introduced in ES6. Symbols are often used as keys for object properties to avoid name collisions, as each symbol value returned from `Symbol()` is guaranteed to be unique.",
        explanation: "This is useful for defining 'private' or internal properties on objects."
    },
    {
        id: 128,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'code splitting'?",
        type: 'subjective',
        answer: "Code splitting is a feature supported by bundlers like Webpack which can create multiple bundles that can be dynamically loaded at runtime. Instead of one massive bundle, you can split code by route or component. This is crucial for improving initial page load time.",
        explanation: "`React.lazy` and dynamic `import()` are common ways to implement code splitting."
    },
    {
        id: 129,
        testId: 7,
        difficulty: 'hard',
        question: "What are ES modules (ESM)?",
        type: 'subjective',
        answer: "ES Modules are the official, standardized module system for JavaScript. They use `import` and `export` statements. Unlike older systems like CommonJS, ESM is resolved statically at parse time, which allows for powerful optimizations like tree shaking.",
        explanation: "They offer a cleaner syntax and better performance than older module systems."
    },
    {
        id: 130,
        testId: 7,
        difficulty: 'hard',
        question: "What is OAuth 2.0?",
        type: 'subjective',
        answer: "OAuth 2.0 is an authorization framework that enables a third-party application to obtain limited access to a user's account on an HTTP service. It works by delegating user authentication to the service that hosts the user account and authorizing the application via access tokens.",
        explanation: "It's the industry standard for authorization, used by Google, Facebook, and others."
    },
    {
        id: 131,
        testId: 7,
        difficulty: 'hard',
        question: "What is a `WeakMap` in JavaScript?",
        type: 'subjective',
        answer: "A `WeakMap` only accepts objects as keys and holds 'weak' references, meaning if there are no other references to an object used as a key, it can be garbage collected. This is its main difference from a regular `Map`. `WeakMap` is not iterable and is used to prevent memory leaks.",
        explanation: "It's an advanced feature for specific memory management scenarios."
    },
    {
        id: 132,
        testId: 7,
        difficulty: 'hard',
        question: "What is `git cherry-pick` used for?",
        type: 'subjective',
        answer: "`git cherry-pick` is a command used to apply a specific commit from one branch onto another. Instead of merging an entire branch, it allows you to select individual commits. This is useful for backporting a bug fix or applying a small feature from a development branch to a stable one.",
        explanation: "It's a powerful tool for surgical changes between branches."
    },
    {
        id: 133,
        testId: 7,
        difficulty: 'hard',
        question: "What is the 'critical rendering path'?",
        type: 'subjective',
        answer: "The critical rendering path is the sequence of steps a browser goes through to convert HTML, CSS, and JavaScript into pixels on the screen. Optimizing this path involves minimizing the number and size of critical resources and optimizing their load order to achieve the fastest possible initial render.",
        explanation: "Understanding this is key to improving web performance."
    },
    {
        id: 134,
        testId: 7,
        difficulty: 'hard',
        question: "What is a Content Delivery Network (CDN) and how does it improve performance?",
        type: 'subjective',
        answer: "A CDN is a geographically distributed network of proxy servers. The goal is to provide high availability and performance by distributing content closer to end-users. When a user requests a static asset, the request is routed to the server closest to them, reducing latency.",
        explanation: "CDNs are essential for fast load times for a global audience."
    },
    {
        id: 135,
        testId: 7,
        difficulty: 'hard',
        question: "Explain the concept of WebAssembly (Wasm) and its use cases.",
        type: 'subjective',
        answer: "WebAssembly is a binary instruction format for a stack-based virtual machine. It's a compilation target for languages like C++ and Rust, enabling deployment on the web at near-native speed. Use cases include gaming, video editing, and scientific simulations.",
        explanation: "Wasm is not a replacement for JavaScript, but a complement for performance-critical tasks."
    },
    {
        id: 136,
        testId: 7,
        difficulty: 'hard',
        question: "What are HTTP/2 and HTTP/3, and their key improvements?",
        type: 'subjective',
        answer: "HTTP/2 introduced multiplexing, allowing multiple requests over a single TCP connection, solving head-of-line blocking. HTTP/3 builds on this by using QUIC instead of TCP, which further reduces latency, improves connection setup, and handles packet loss more gracefully.",
        explanation: "These newer protocols significantly improve web performance."
    },
    {
        id: 137,
        testId: 7,
        difficulty: 'hard',
        question: "Describe what happens when you type a URL into your browser until the page renders.",
        type: 'subjective',
        answer: "1) DNS Resolution to find the IP address. 2) A TCP connection is established. 3) The browser sends an HTTP request. 4) The server responds with HTML. 5) The browser parses HTML to build the DOM tree and CSS to build the CSSOM tree. 7) The DOM and CSSOM are combined to form the Render Tree. 8) The browser performs Layout and then Paint.",
        explanation: "This is a classic and comprehensive web knowledge question."
    },
    {
        id: 138,
        testId: 7,
        difficulty: 'hard',
        question: "What is the `bind` method in JavaScript?",
        type: 'subjective',
        answer: "The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. It's essential for controlling execution context, especially in callbacks.",
        explanation: "Unlike `call` and `apply`, `bind` does not immediately invoke the function."
    },
    {
        id: 139,
        testId: 7,
        difficulty: 'hard',
        question: "How do you prevent Cross-Site Request Forgery (CSRF) attacks?",
        type: 'subjective',
        answer: "The most common mitigation is the synchronizer token pattern. The server generates a unique, unpredictable token and includes it in forms. When submitted, the server validates the token. Another defense is checking the `Origin` or `Referer` headers, and using the `SameSite` cookie attribute.",
        explanation: "CSRF tricks a logged-in user's browser into sending a forged request to a site they trust."
    },
    {
        id: 140,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'lifting state up' in React and why is it useful?",
        type: 'subjective',
        answer: "It's a pattern of moving shared state from multiple components up to their closest common ancestor. The ancestor then passes the state down via props. This is used when several components need to reflect the same changing data, creating a single source of truth.",
        explanation: "This pattern helps keep components synchronized and is a core React concept."
    },
    // Test 8: 40 Questions (24 MCQ, 16 Subjective)
    {
        id: 141,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'race condition' and how can it be mitigated in JavaScript?",
        type: 'mcq',
        options: ['A bug that occurs when the timing of asynchronous operations affects the outcome', 'An error in the JavaScript engine', 'A performance optimization technique', 'A CSS layout issue'],
        answer: 'A bug that occurs when the timing of asynchronous operations affects the outcome',
        explanation: 'Mitigation includes using async/await for sequential execution, or designing state updates to be atomic.'
    },
    {
        id: 142,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of the `bind` method in JavaScript?",
        type: 'mcq',
        options: ['To immediately invoke a function', 'To create a new function that, when called, has its `this` keyword set to the provided value', 'To attach an event listener', 'To merge two objects'],
        answer: 'To create a new function that, when called, has its `this` keyword set to the provided value',
        explanation: '`bind` is essential for controlling the execution context of a function.'
    },
    {
        id: 143,
        testId: 8,
        difficulty: 'expert',
        question: "What is memoization?",
        type: 'mcq',
        options: ['A way to store data in `localStorage`', 'An optimization technique to cache the results of expensive function calls', 'A memory management technique', 'A debugging process'],
        answer: 'An optimization technique to cache the results of expensive function calls',
        explanation: "React's `useMemo` and `useCallback` hooks are forms of memoization."
    },
    {
        id: 144,
        testId: 8,
        difficulty: 'expert',
        question: "What is the main advantage of WebAssembly (Wasm)?",
        type: 'mcq',
        options: ['It provides better SEO than JavaScript', 'It allows code written in languages like C++ and Rust to run on the web at near-native speed', 'It is easier to write than JavaScript', 'It replaces the need for HTML and CSS'],
        answer: 'It allows code written in languages like C++ and Rust to run on the web at near-native speed',
        explanation: 'Wasm is a performance-focused complement to JavaScript, not a replacement.'
    },
    {
        id: 145,
        testId: 8,
        difficulty: 'expert',
        question: "What is an `AbortController` used for?",
        type: 'mcq',
        options: ['To stop a CSS animation', 'To cancel a running `setTimeout`', 'To provide a way to abort one or more web requests (e.g., `fetch`)', 'To forcefully close a WebSocket'],
        answer: 'To provide a way to abort one or more web requests (e.g., `fetch`)',
        explanation: 'This is useful for cleaning up pending requests when a component unmounts.'
    },
    {
        id: 146,
        testId: 8,
        difficulty: 'expert',
        question: "What is the difference between `defer` and `async` attributes on a `<script>` tag?",
        type: 'mcq',
        options: ['There is no difference', '`async` scripts execute as soon as they are downloaded, while `defer` scripts execute after the document has been parsed', '`defer` scripts block HTML parsing', '`async` is for external scripts only'],
        answer: '`async` scripts execute as soon as they are downloaded, while `defer` scripts execute after the document has been parsed',
        explanation: '`defer` also guarantees the order of execution, while `async` does not.'
    },
    {
        id: 147,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'memory leak' in JavaScript?",
        type: 'mcq',
        options: ['An error where data is written to the wrong memory address', 'When a program fails to release memory it no longer needs, leading to performance degradation', 'A security vulnerability', 'A hardware failure'],
        answer: 'When a program fails to release memory it no longer needs, leading to performance degradation',
        explanation: 'Common causes include dangling event listeners and closures holding onto unnecessary references.'
    },
    {
        id: 148,
        testId: 8,
        difficulty: 'expert',
        question: "What is a Content Security Policy (CSP)?",
        type: 'mcq',
        options: ['A CSS feature for styling content', 'An HTTP header that provides a whitelist of trusted content sources to prevent XSS attacks', 'A JavaScript API for managing content', 'A server configuration for caching'],
        answer: 'An HTTP header that provides a whitelist of trusted content sources to prevent XSS attacks',
        explanation: 'CSP is a powerful, defense-in-depth security mechanism.'
    },
    {
        id: 149,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'Stale-While-Revalidate' caching strategy?",
        type: 'mcq',
        options: ['A strategy to never use cached data', 'Serving stale cached content immediately, while fetching a fresh version in the background for the next request', 'A strategy that only caches data for a single session', 'A strategy that always revalidates with the server first'],
        answer: 'Serving stale cached content immediately, while fetching a fresh version in the background for the next request',
        explanation: 'This provides a good balance between performance (instant response) and freshness.'
    },
    {
        id: 150,
        testId: 8,
        difficulty: 'expert',
        question: "Which CSS display property creates a new block formatting context?",
        type: 'mcq',
        options: ['display: inline', 'display: block', 'display: flow-root', 'display: none'],
        answer: 'display: flow-root',
        explanation: '`display: flow-root` is the modern, dedicated way to create a new block formatting context (BFC) without other side effects.'
    },
    {
        id: 151,
        testId: 8,
        difficulty: 'expert',
        question: "In React, what problem does `React.memo` solve?",
        type: 'mcq',
        options: ['It manages component state', 'It prevents a functional component from re-rendering if its props have not changed', 'It fetches data from an API', 'It creates a memo that can be shared'],
        answer: 'It prevents a functional component from re-rendering if its props have not changed',
        explanation: 'It is a higher-order component that performs a shallow comparison of props to optimize performance.'
    },
    {
        id: 152,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of HTTP Strict Transport Security (HSTS)?",
        type: 'mcq',
        options: ['To encrypt all HTTP traffic', 'To tell browsers that a site should only be accessed using HTTPS', 'To block all traffic to a site', 'To compress HTTP headers'],
        answer: 'To tell browsers that a site should only be accessed using HTTPS',
        explanation: 'This helps prevent man-in-the-middle attacks, such as protocol downgrade attacks.'
    },
    {
        id: 153,
        testId: 8,
        difficulty: 'expert',
        question: "What is an 'iterator' in JavaScript?",
        type: 'mcq',
        options: ['A type of loop', 'A function that generates random numbers', 'An object that defines a sequence and potentially a return value upon its termination', 'A way to manage memory'],
        answer: 'An object that defines a sequence and potentially a return value upon its termination',
        explanation: 'An object is an iterator when it has a `next()` method. `for...of` loops work with iterable objects.'
    },
    {
        id: 154,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'optional chaining' (`?.`) in JavaScript?",
        type: 'mcq',
        options: ['A way to create optional function parameters', 'A way to safely access nested object properties without having to explicitly validate each reference', 'A security feature', 'A new type of `if` statement'],
        answer: 'A way to safely access nested object properties without having to explicitly validate each reference',
        explanation: 'It prevents errors when trying to access properties of `null` or `undefined`.'
    },
    {
        id: 155,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'currying' in functional programming?",
        type: 'mcq',
        options: ['A type of food', 'Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument', 'A debugging technique', 'A data encryption method'],
        answer: 'Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument',
        explanation: 'Currying allows for easier function composition and the creation of specialized, reusable functions.'
    },
    {
        id: 156,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of the `indexedDB` API in browsers?",
        type: 'mcq',
        options: ['To speed up database queries on the server', 'To provide a transactional, client-side database for storing large amounts of structured data', 'To index web pages for search engines', 'To create visual indexes for images'],
        answer: 'To provide a transactional, client-side database for storing large amounts of structured data',
        explanation: 'It is a more powerful alternative to `localStorage` and is essential for offline-first applications.'
    },
    {
        id: 157,
        testId: 8,
        difficulty: 'expert',
        question: "In CSS, what is the 'stacking context'?",
        type: 'mcq',
        options: ['A data structure', 'A 3D conceptualization of HTML elements along the z-axis, where elements are placed on top of or behind each other', 'A layout model like Flexbox or Grid', 'A naming convention for CSS classes'],
        answer: 'A 3D conceptualization of HTML elements along the z-axis, where elements are placed on top of or behind each other',
        explanation: 'A new stacking context is created by properties like `position: relative` with a `z-index`, `opacity` < 1, or `transform`.'
    },
    {
        id: 158,
        testId: 8,
        difficulty: 'expert',
        question: "Which of these best describes 'GraphQL'?",
        type: 'mcq',
        options: ['A database technology', 'A query language for APIs that allows clients to request exactly the data they need', 'A graph visualization library', 'A REST API standard'],
        answer: 'A query language for APIs that allows clients to request exactly the data they need',
        explanation: 'GraphQL helps solve the problems of over-fetching and under-fetching common with REST APIs.'
    },
    {
        id: 159,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'service worker' used for?",
        type: 'mcq',
        options: ['To perform heavy computations on the main thread', 'A script that runs in the background to enable features like offline caching and push notifications', 'A server-side rendering process', 'A CSS preprocessor'],
        answer: 'A script that runs in the background to enable features like offline caching and push notifications',
        explanation: 'Service workers are a core component of Progressive Web Apps (PWAs).'
    },
    {
        id: 160,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'event delegation' pattern in JavaScript?",
        type: 'mcq',
        options: ['Delegating event handling to a web worker', 'Assigning multiple handlers to a single event', 'Attaching a single event listener to a parent element to manage events for all its children', 'A way to create custom events'],
        answer: 'Attaching a single event listener to a parent element to manage events for all its children',
        explanation: 'This pattern leverages event bubbling and is more memory-efficient than attaching listeners to many individual child elements.'
    },
    {
        id: 161,
        testId: 8,
        difficulty: 'expert',
        question: "What does `git rebase -i` allow you to do?",
        type: 'mcq',
        options: ['Immediately merge a branch', 'Run an interactive rebase session, allowing you to edit, squash, or reorder commits', 'Ignore a specific commit', 'List all branches'],
        answer: 'Run an interactive rebase session, allowing you to edit, squash, or reorder commits',
        explanation: 'Interactive rebase is a powerful tool for cleaning up and organizing commit history before merging.'
    },
    {
        id: 162,
        testId: 8,
        difficulty: 'expert',
        question: "In React, what is a 'render prop'?",
        type: 'mcq',
        options: ['A prop that determines if a component should render', 'A technique for sharing code between components using a prop whose value is a function', 'A special prop for server-side rendering', 'A prop that contains HTML content'],
        answer: 'A technique for sharing code between components using a prop whose value is a function',
        explanation: 'The component calls the render prop function instead of implementing its own rendering logic, allowing for flexible logic sharing.'
    },
    {
        id: 163,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'Tailwind CSS'?",
        type: 'mcq',
        options: ['A component library like Bootstrap', 'A utility-first CSS framework for rapidly building custom designs', 'A CSS-in-JS library', 'A CSS preprocessor like Sass'],
        answer: 'A utility-first CSS framework for rapidly building custom designs',
        explanation: 'Tailwind provides low-level utility classes that you compose directly in your HTML to build designs.'
    },
    {
        id: 164,
        testId: 8,
        difficulty: 'expert',
        question: "What is `webpack`?",
        type: 'mcq',
        options: ['A JavaScript runtime', 'A static module bundler for modern JavaScript applications', 'A state management library', 'A testing framework'],
        answer: 'A static module bundler for modern JavaScript applications',
        explanation: 'Webpack processes your application, bundles all the modules into one or more files, and handles dependencies.'
    },
    {
        id: 165,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the concept of 'concurrency' versus 'parallelism'.",
        type: 'subjective',
        answer: "Concurrency is about dealing with multiple tasks at once by switching between them. Parallelism is about doing multiple tasks at the same time, which requires multiple CPU cores. An application can be concurrent without being parallel, but not vice-versa.",
        explanation: "Think of a chef (processor): concurrency is chopping vegetables while also watching a sauce. Parallelism is two chefs working on two different dishes."
    },
    {
        id: 166,
        testId: 8,
        difficulty: 'expert',
        question: "What is a `prototype` in JavaScript and how does it relate to inheritance?",
        type: 'subjective',
        answer: "Every JavaScript object has a link to another object called its prototype. This forms a prototype chain. When you try to access a property, if it's not on the object, the engine looks at the prototype, then the prototype's prototype, and so on. This is how JavaScript implements inheritance.",
        explanation: "This is the mechanism that allows objects to inherit properties and methods from other objects."
    },
    {
        id: 167,
        testId: 8,
        difficulty: 'expert',
        question: "How would you design a rate limiter for an API?",
        type: 'subjective',
        answer: "A common approach is the token bucket algorithm. Each user has a bucket with a certain capacity of tokens, and tokens are added at a fixed rate. Each API request consumes a token. If the bucket is empty, the request is rejected. This can be implemented using an in-memory store like Redis.",
        explanation: "Rate limiting is crucial for API security, stability, and preventing abuse."
    },
    {
        id: 168,
        testId: 8,
        difficulty: 'expert',
        question: "What is the CAP theorem in distributed systems?",
        type: 'subjective',
        answer: "The CAP theorem states that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition Tolerance. Since network partitions are a given, the real trade-off is between consistency and availability (CP vs AP systems).",
        explanation: "This is a fundamental principle in the design of any distributed system."
    },
    {
        id: 169,
        testId: 8,
        difficulty: 'expert',
        question: "How does HTTPS work? Explain the TLS handshake.",
        type: 'subjective',
        answer: "HTTPS encrypts HTTP traffic using TLS. The TLS handshake involves: 1) Client sends a 'hello' with supported ciphers. 2) Server responds with its SSL certificate. 3) Client verifies the certificate. 4) Client generates a session key, encrypts it with the server's public key, and sends it. All subsequent communication is encrypted with this shared session key.",
        explanation: "This process establishes a secure, encrypted channel between the client and server."
    },
    {
        id: 170,
        testId: 8,
        difficulty: 'expert',
        question: "What is the difference between a process and a thread?",
        type: 'subjective',
        answer: "A process is an instance of a program with its own isolated memory space. A thread is the smallest unit of execution within a process. A single process can have multiple threads, which share the same memory space. Inter-thread communication is fast, but requires synchronization.",
        explanation: "This is a fundamental concept in operating systems and concurrent programming."
    },
    {
        id: 171,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'observability' and what are its three pillars?",
        type: 'subjective',
        answer: "Observability is the ability to measure a system's internal state by examining its external outputs. The three pillars are: 1) Logs (detailed, timestamped records of events), 2) Metrics (aggregated numerical data over time), and 3) Traces (a representation of a single request as it flows through a distributed system).",
        explanation: "Observability is crucial for debugging and understanding the performance of modern, complex systems."
    },
    {
        id: 172,
        testId: 8,
        difficulty: 'expert',
        question: "What is Infrastructure as Code (IaC) and what are its benefits?",
        type: 'subjective',
        answer: "IaC is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than manual configuration. Tools like Terraform are used. Benefits include version control, automated testing, and creating repeatable environments, which reduces configuration drift and human error.",
        explanation: "IaC brings the discipline of software development to infrastructure management."
    },
    {
        id: 173,
        testId: 8,
        difficulty: 'expert',
        question: "How does `git` work on a conceptual level?",
        type: 'subjective',
        answer: "Git is a distributed version control system that thinks of its data as a series of snapshots of a miniature filesystem. Every time you commit, Git takes a picture of what all your files look like at that moment and stores a reference to that snapshot. It uses a directed acyclic graph (DAG) of commit objects to track the history of these snapshots.",
        explanation: "This snapshot-based architecture is what makes Git fast and powerful."
    },
    {
        id: 174,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the concept of 'idempotency' in API design.",
        type: 'subjective',
        answer: "An idempotent operation is one that has the same effect whether it is performed once or multiple times. In APIs, this means making the same request multiple times produces the same result as a single request. HTTP methods like GET, PUT, and DELETE are idempotent. This is crucial for building reliable systems where requests might be retried due to network issues.",
        explanation: "POST is typically not idempotent, as calling it multiple times will create multiple resources."
    },
    {
        id: 175,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'gRPC' and how does it compare to REST?",
        type: 'subjective',
        answer: "gRPC is a high-performance RPC (Remote Procedure Call) framework that uses HTTP/2 for transport and Protocol Buffers as the interface description language. Compared to REST, which is typically based on JSON over HTTP/1.1, gRPC is often more performant due to binary serialization and multiplexing. It also provides strongly typed service contracts, which can reduce integration errors.",
        explanation: "gRPC is well-suited for internal service-to-service communication, while REST is often preferred for public-facing APIs."
    },
    {
        id: 176,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'tree shaking' in a JavaScript bundler?",
        type: 'subjective',
        answer: "Tree shaking is a form of dead code elimination. It relies on the static structure of ES6 modules (`import` and `export`). The bundler analyzes the dependency graph and removes any exported code from modules that is not actually imported and used by the application, resulting in a smaller final bundle size.",
        explanation: "This is a key optimization for modern frontend development."
    },
    {
        id: 177,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'actor model' of concurrency?",
        type: 'subjective',
        answer: "The actor model is a conceptual model of concurrent computation. An 'actor' is a primitive unit of computation that receives messages and carries out actions based on them. Actors are isolated and do not share memory. They communicate exclusively through asynchronous messages. This avoids the need for locks and makes it easier to reason about concurrent systems.",
        explanation: "Frameworks like Akka and languages like Erlang are based on the actor model."
    },
    {
        id: 178,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'tail latency' and why is it important?",
        type: 'subjective',
        answer: "Tail latency refers to the latency experienced by the top percentile of slowest requests (e.g., the 99th or 99.9th percentile). In a microservices architecture, a single user-facing operation can depend on dozens of backend services. The overall latency is often determined by the slowest of these dependencies. Focusing on tail latency is crucial because what might be a rare slow request for one service can become a common source of slowness for the end user.",
        explanation: "Optimizing for average latency is not enough in complex systems."
    },
    {
        id: 179,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'Kubernetes Operator'?",
        type: 'subjective',
        answer: "A Kubernetes Operator is a method of packaging, deploying, and managing a Kubernetes application. It's a software extension to Kubernetes that makes use of custom resources to manage applications and their components. Operators encode human operational knowledge into software to automate tasks beyond what Kubernetes provides out-of-the-box, especially for stateful applications like databases.",
        explanation: "They automate the lifecycle of complex applications on Kubernetes."
    },
    {
        id: 180,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS)?",
        type: 'subjective',
        answer: "Mutual TLS is an extension of standard TLS where both the client and the server present certificates to authenticate each other. In a standard TLS connection, only the client authenticates the server. mTLS ensures that both parties are who they claim to be, providing a much stronger security posture. It is a key component of zero-trust network architectures and is often used to secure service-to-service communication.",
        explanation: "It's like a two-way ID check for network connections."
    },
    // Test 9: 45 Questions (27 MCQ, 18 Subjective)
    {
        id: 181,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'Bloom Filter'?",
        type: 'mcq',
        options: ['A space-efficient, probabilistic data structure to test set membership', 'A tool to sort data efficiently', 'A method to encrypt data', 'A way to guarantee uniqueness'],
        answer: 'A space-efficient, probabilistic data structure to test set membership',
        explanation: 'It\'s used when a small chance of a false positive is acceptable in exchange for memory savings, e.g., checking for seen items in a web crawler.'
    },
    {
        id: 182,
        testId: 9,
        difficulty: 'expert',
        question: "What problem does a 'service mesh' like Istio solve?",
        type: 'mcq',
        options: ['Database migrations', 'It provides a dedicated infrastructure layer to manage service-to-service communication', 'Frontend state management', 'CI/CD pipelines'],
        answer: 'It provides a dedicated infrastructure layer to manage service-to-service communication',
        explanation: 'A service mesh abstracts the complexity of network communication (security, traffic management, observability) away from the application code.'
    },
    {
        id: 183,
        testId: 9,
        difficulty: 'expert',
        question: "Which of these best describes 'eventual consistency'?",
        type: 'mcq',
        options: ['The system is always consistent', 'Given no new updates, all replicas will eventually converge to the same value', 'The system will eventually become inconsistent', 'Data is only consistent during an event'],
        answer: 'Given no new updates, all replicas will eventually converge to the same value',
        explanation: 'This model is chosen in distributed systems that prioritize high availability over strong consistency.'
    },
    {
        id: 184,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'distributed hash table' (DHT)?",
        type: 'mcq',
        options: ['A centralized database using hashing', 'A data structure in C++', 'A decentralized system that provides a lookup service similar to a hash table', 'A password hashing algorithm'],
        answer: 'A decentralized system that provides a lookup service similar to a hash table',
        explanation: 'DHTs are a core component of many peer-to-peer systems, like BitTorrent.'
    },
    {
        id: 185,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'Strangler Fig' pattern used for?",
        type: 'mcq',
        options: ['To debug memory leaks', 'To incrementally migrate a legacy monolith to a microservices architecture', 'To optimize database queries', 'To design a UI'],
        answer: 'To incrementally migrate a legacy monolith to a microservices architecture',
        explanation: 'It involves gradually replacing pieces of the monolith with new services until the monolith is retired.'
    },
    {
        id: 186,
        testId: 9,
        difficulty: 'expert',
        question: "What does the 'L' in the SOLID principles stand for?",
        type: 'mcq',
        options: ['Layered Architecture Principle', 'Low Coupling Principle', 'Liskov Substitution Principle', 'Loose Typing Principle'],
        answer: 'Liskov Substitution Principle',
        explanation: 'This principle states that objects of a superclass should be replaceable with objects of a subclass without affecting correctness.'
    },
    {
        id: 187,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'QUIC' and its role in HTTP/3?",
        type: 'mcq',
        options: ['A compression algorithm', 'A new transport layer protocol that serves as the foundation for HTTP/3', 'A security protocol', 'A JavaScript framework'],
        answer: 'A new transport layer protocol that serves as the foundation for HTTP/3',
        explanation: 'QUIC is built on UDP and is designed to make HTTP traffic faster and more reliable.'
    },
    {
        id: 188,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        type: 'mcq',
        options: ['A type of database', 'A data structure where replicas can be updated independently and inconsistencies can always be resolved', 'An encryption algorithm', 'A sorting algorithm'],
        answer: 'A data structure where replicas can be updated independently and inconsistencies can always be resolved',
        explanation: 'CRDTs are crucial for building collaborative, real-time applications like Google Docs.'
    },
    {
        id: 189,
        testId: 9,
        difficulty: 'expert',
        question: "What is the purpose of 'tree shaking' in a JavaScript bundler?",
        type: 'mcq',
        options: ['To visualize the component tree', 'To eliminate dead (unused) code from the final bundle', 'To reformat the code', 'To check for security vulnerabilities'],
        answer: 'To eliminate dead (unused) code from the final bundle',
        explanation: 'Tree shaking is a critical optimization for reducing bundle size.'
    },
    {
        id: 190,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Server-Sent Events' (SSE)?",
        type: 'mcq',
        options: ['A bidirectional communication protocol', 'A technology where a browser receives automatic updates from a server via a standard HTTP connection', 'An alias for WebSockets', 'A database event system'],
        answer: 'A technology where a browser receives automatic updates from a server via a standard HTTP connection',
        explanation: 'SSE is simpler than WebSockets and is ideal for unidirectional data flow from server to client.'
    },
    {
        id: 191,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'Same-Origin Policy' (SOP)?",
        type: 'mcq',
        options: ['A policy for server location', 'A browser security mechanism that restricts how a document from one origin can interact with a resource from another', 'A CSS styling rule', 'A rule for naming variables'],
        answer: 'A browser security mechanism that restricts how a document from one origin can interact with a resource from another',
        explanation: 'SOP is a cornerstone of web security, preventing malicious sites from reading sensitive data.'
    },
    {
        id: 192,
        testId: 9,
        difficulty: 'expert',
        question: "What does it mean for an operation to be 'atomic'?",
        type: 'mcq',
        options: ['The operation is very small', 'The operation is part of an atomic bomb', 'An indivisible and irreducible series of operations such that either all occur or none occur', 'The operation is related to nuclear physics'],
        answer: 'An indivisible and irreducible series of operations such that either all occur or none occur',
        explanation: 'Atomicity is the "A" in ACID, a key property of database transactions.'
    },
    {
        id: 193,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'lambda' function?",
        type: 'mcq',
        options: ['A long, detailed function', 'A small, anonymous function, often used as an argument to higher-order functions', 'A function that runs on AWS Lambda', 'A function for generating HTML'],
        answer: 'A small, anonymous function, often used as an argument to higher-order functions',
        explanation: 'Lambda functions are useful for short, simple operations.'
    },
    {
        id: 194,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'load balancer'?",
        type: 'mcq',
        options: ['A tool to balance server weight', 'A device that distributes traffic across multiple servers using algorithms like Round Robin or Least Connections', 'A database feature', 'A frontend caching mechanism'],
        answer: 'A device that distributes traffic across multiple servers using algorithms like Round Robin or Least Connections',
        explanation: 'Load balancers are essential for achieving high availability and scalability.'
    },
    {
        id: 195,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'sharding' in a database context?",
        type: 'mcq',
        options: ['A way to encrypt data', 'A type of horizontal partitioning where data is spread across multiple servers', 'A backup strategy', 'A query optimization technique'],
        answer: 'A type of horizontal partitioning where data is spread across multiple servers',
        explanation: 'Sharding is a common technique for scaling out databases.'
    },
    {
        id: 196,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'n+1' query problem?",
        type: 'mcq',
        options: ['A security vulnerability', 'A performance issue where one query retrieves a list, and then n additional queries are made for related data', 'A mathematical paradox', 'An off-by-one error'],
        answer: 'A performance issue where one query retrieves a list, and then n additional queries are made for related data',
        explanation: 'This is a common performance bottleneck solved by \'eager loading\' the related data.'
    },
    {
        id: 197,
        testId: 9,
        difficulty: 'expert',
        question: "What is the difference between 'authentication' and 'authorization'?",
        type: 'mcq',
        options: ['They are the same thing', 'Authentication is verifying who a user is, while authorization is determining what they are allowed to do', 'Authorization happens before authentication', 'Authentication is for users, authorization is for services'],
        answer: 'Authentication is verifying who a user is, while authorization is determining what they are allowed to do',
        explanation: 'You authenticate to get into the building, but you are authorized to enter only certain rooms.'
    },
    {
        id: 198,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'race condition'?",
        type: 'mcq',
        options: ['A bug in a racing game', 'An error condition that occurs when the behavior of a system depends on the unpredictable sequence of other events', 'A network performance issue', 'A type of CPU'],
        answer: 'An error condition that occurs when the behavior of a system depends on the unpredictable sequence of other events',
        explanation: 'Race conditions are a common and difficult problem in concurrent programming.'
    },
    {
        id: 199,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'two-phase commit' (2PC)?",
        type: 'mcq',
        options: ['A git workflow', 'A distributed algorithm that coordinates all processes in a distributed atomic transaction', 'A deployment strategy', 'A security protocol'],
        answer: 'A distributed algorithm that coordinates all processes in a distributed atomic transaction',
        explanation: 'While it guarantees atomicity, 2PC can be slow and is not fault-tolerant if the coordinator fails.'
    },
    {
        id: 200,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'tail latency'?",
        type: 'mcq',
        options: ['The latency of the last request', 'A measure of the latency experienced by the top percentile of slowest requests', 'The time for a log tail to update', 'A network hardware delay'],
        answer: 'A measure of the latency experienced by the top percentile of slowest requests',
        explanation: 'Focusing on tail latency is crucial because a rare slow request for one service can become a common source of slowness for the end user.'
    },
    {
        id: 201,
        testId: 9,
        difficulty: 'expert',
        question: "What is idempotency in API design?",
        type: 'mcq',
        options: ['API security', 'The property of an operation where making the same request multiple times has the same effect as making it once', 'A performance optimization', 'A way to version APIs'],
        answer: 'The property of an operation where making the same request multiple times has the same effect as making it once',
        explanation: 'HTTP methods like GET, PUT, and DELETE are idempotent.'
    },
    {
        id: 202,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'gRPC'?",
        type: 'mcq',
        options: ['A REST API framework', 'A high-performance, open-source universal RPC framework', 'A GraphQL client', 'A database protocol'],
        answer: 'A high-performance, open-source universal RPC framework',
        explanation: 'gRPC uses Protocol Buffers and HTTP/2 and is highly efficient for communication between microservices.'
    },
    {
        id: 203,
        testId: 9,
        difficulty: 'expert',
        question: "What is the CSS `will-change` property for?",
        type: 'mcq',
        options: ['Preventing property changes', 'Animating property changes', 'Hinting to the browser about which properties are expected to change, allowing for optimization', 'An alias for `transform`'],
        answer: 'Hinting to the browser about which properties are expected to change, allowing for optimization',
        explanation: 'This can improve animation performance by promoting the element to its own GPU layer.'
    },
    {
        id: 204,
        testId: 9,
        difficulty: 'expert',
        question: "What is HTTP/2 multiplexing?",
        type: 'mcq',
        options: ['Better SEO', 'It allows multiple requests and responses to be sent in parallel over a single TCP connection', 'It is easier than JavaScript', 'It replaces HTML'],
        answer: 'It allows multiple requests and responses to be sent in parallel over a single TCP connection',
        explanation: 'Multiplexing eliminates the head-of-line blocking issue of HTTP/1.1.'
    },
    {
        id: 205,
        testId: 9,
        difficulty: 'expert',
        question: "What is a Kubernetes Operator?",
        type: 'mcq',
        options: ['A person operating Kubernetes', 'A method of packaging, deploying, and managing a Kubernetes application by extending its API', 'A built-in scheduler', 'A security feature'],
        answer: 'A method of packaging, deploying, and managing a Kubernetes application by extending its API',
        explanation: 'Operators encode human operational knowledge into software to automate the lifecycle of complex applications.'
    },
    {
        id: 206,
        testId: 9,
        difficulty: 'expert',
        question: "In the context of the Actor Model, what is a key principle?",
        type: 'mcq',
        options: ['Shared Memory', 'Synchronous Communication', 'No shared state; actors communicate via asynchronous messages', 'Global State Management'],
        answer: 'No shared state; actors communicate via asynchronous messages',
        explanation: 'The actor model avoids shared state and locks, making it easier to build concurrent and fault-tolerant systems.'
    },
    {
        id: 207,
        testId: 9,
        difficulty: 'expert',
        question: "What does the 'D' in the SOLID principles stand for?",
        type: 'mcq',
        options: ['Data-oriented design', 'Dependency Inversion Principle', 'Decoupling Principle', 'Dynamic Typing Principle'],
        answer: 'Dependency Inversion Principle',
        explanation: 'This principle states that high-level modules should not depend on low-level modules, but both should depend on abstractions.'
    },
    {
        id: 208,
        testId: 9,
        difficulty: 'expert',
        question: "Explain the difference between optimistic and pessimistic locking.",
        type: 'subjective',
        answer: "Pessimistic locking assumes conflicts are frequent and locks a resource before a transaction begins working with it. Optimistic locking assumes conflicts are rare. It does not lock resources, but before committing, it checks if the data has been modified. If a conflict is found, the transaction is rolled back.",
        explanation: "Pessimistic locking is 'ask for permission,' while optimistic locking is 'ask for forgiveness.'"
    },
    {
        id: 209,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Chaos Engineering'?",
        type: 'subjective',
        answer: "Chaos Engineering is the discipline of experimenting on a distributed system to build confidence in its capability to withstand turbulent conditions. It involves deliberately injecting controlled failures (like terminating servers or adding latency) to identify weaknesses and improve system resilience before they cause real outages.",
        explanation: "The goal is to find failures before they find you."
    },
    {
        id: 210,
        testId: 9,
        difficulty: 'expert',
        question: "Describe the 'Saga' pattern for distributed transactions.",
        type: 'subjective',
        answer: "The Saga pattern manages data consistency across microservices without distributed transactions. A saga is a sequence of local transactions where each one updates a single service and publishes an event to trigger the next. If a local transaction fails, the saga executes compensating transactions to undo the changes.",
        explanation: "It's an event-driven approach to achieving transactional semantics."
    },
    {
        id: 211,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'Log-Structured Merge-Tree' (LSM-Tree)?",
        type: 'subjective',
        answer: "An LSM-Tree is a data structure optimized for write-heavy workloads. It appends writes to an in-memory table (memtable). When full, the memtable is flushed to disk as a sorted, immutable file (SSTable). SSTables are periodically merged (compacted) in the background. This avoids slow, random disk writes.",
        explanation: "This design favors fast write performance at the expense of more complex reads."
    },
    {
        id: 212,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Domain-Driven Design' (DDD)?",
        type: 'subjective',
        answer: "DDD is an approach to software development that centers on creating a rich model of the core business domain. A key concept is the 'ubiquitous language,' a shared language developed by the team to talk about the domain, which is used in all communication and in the code itself.",
        explanation: "DDD helps to manage complexity in large, enterprise systems."
    },
    {
        id: 213,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'end-to-end encryption' (E2EE)?",
        type: 'subjective',
        answer: "E2EE is a communication system where only the communicating users can read the messages. It prevents potential eavesdroppers, including the service provider, from accessing the cryptographic keys needed to decrypt the conversation. The server facilitates the connection but cannot read the content.",
        explanation: "Messaging apps like Signal and WhatsApp use E2EE."
    },
    {
        id: 214,
        testId: 9,
        difficulty: 'expert',
        question: "Explain 'Consistent Hashing'.",
        type: 'subjective',
        answer: "Consistent hashing is a hashing technique where, when a hash table is resized (e.g., a server is added or removed), only a small number of keys need to be remapped. This prevents a massive, system-wide reshuffling of data, making the system much more scalable and stable.",
        explanation: "It's essential for distributed caches and databases like DynamoDB."
    },
    {
        id: 215,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'thundering herd' problem?",
        type: 'subjective',
        answer: "This occurs when a large number of processes or threads waiting for the same event are awakened, but only one can handle it. This causes a massive spike in contention and context switching, degrading performance. It can be mitigated by having only one process wait and then wake up the others.",
        explanation: "This is a classic problem in high-concurrency systems."
    },
    {
        id: 216,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'publish-subscribe' (pub/sub) pattern?",
        type: 'subjective',
        answer: "Pub/sub is a messaging pattern where senders (publishers) do not send messages directly to specific receivers (subscribers). Instead, they publish messages to topics. Subscribers express interest in topics and receive messages published to them. This decouples the publisher and subscriber.",
        explanation: "Systems like Kafka and RabbitMQ are built on this pattern."
    },
    {
        id: 217,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Test-Driven Development' (TDD)?",
        type: 'subjective',
        answer: "TDD is a development process following a short cycle: 1) Write a failing automated test (Red). 2) Write the minimum code to pass the test (Green). 3) Refactor the code to improve design while ensuring tests still pass (Refactor). This ensures high test coverage and robust code.",
        explanation: "The motto is 'Red, Green, Refactor'."
    },
    {
        id: 218,
        testId: 9,
        difficulty: 'expert',
        question: "What are 'serverless' functions and their trade-offs?",
        type: 'subjective',
        answer: "Serverless functions (e.g., AWS Lambda) are a cloud model where you write and deploy code without managing any server infrastructure. Benefits are auto-scaling and pay-per-use. Trade-offs include potential vendor lock-in, statelessness, and 'cold start' latency.",
        explanation: "Serverless is ideal for event-driven, short-lived tasks."
    },
    {
        id: 219,
        testId: 9,
        difficulty: 'expert',
        question: "How does 'blue-green deployment' work?",
        type: 'subjective',
        answer: "This release strategy uses two identical production environments: 'blue' (current live version) and 'green' (new version). After testing the new version in the green environment, you switch the router to send all traffic there. This allows for zero-downtime releases and simple rollback (switch back to blue).",
        explanation: "It requires having double the infrastructure, which can be a cost consideration."
    },
    {
        id: 220,
        testId: 9,
        difficulty: 'expert',
        question: "Explain the difference between leader-based and leaderless database replication.",
        type: 'subjective',
        answer: "In leader-based replication, one replica (the leader) handles all writes and propagates them to followers. This gives strong consistency but the leader is a single point of failure. In leaderless replication, any replica can accept writes, offering higher availability but making consistency more complex to manage.",
        explanation: "Leader-based is simpler (e.g., PostgreSQL). Leaderless is more available (e.g., Cassandra)."
    },
    {
        id: 221,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'backpressure' in reactive streaming systems?",
        type: 'subjective',
        answer: "Backpressure is a flow control mechanism where a data consumer can signal to a data producer that it is becoming overwhelmed. This allows the consumer to request that the producer slow down, preventing buffer overflows and system instability. It gracefully handles mismatched production/consumption rates.",
        explanation: "It's a crucial feature for building resilient, asynchronous data pipelines."
    },
    {
        id: 222,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'Raft' consensus algorithm?",
        type: 'subjective',
        answer: "Raft is a consensus algorithm used to manage a replicated log among a cluster of nodes. It works by electing a single leader, which is responsible for accepting client requests and replicating the log to followers. This ensures all nodes agree on the same sequence of operations, providing strong consistency.",
        explanation: "Raft is designed to be more understandable than Paxos and is used in systems like etcd and Consul."
    },
    {
        id: 223,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'subjective',
        answer: "CQRS is an architectural pattern that separates the models used for updating data (Commands) from the models used for reading data (Queries). This allows for independent optimization of the read and write sides of an application. For example, the write model might be relational, while the read model is a denormalized view.",
        explanation: "CQRS is often used with Event Sourcing to build highly scalable systems."
    },
    {
        id: 224,
        testId: 9,
        difficulty: 'expert',
        question: "Explain what a 'service mesh' is and why it's useful.",
        type: 'subjective',
        answer: "A service mesh is a dedicated infrastructure layer for managing service-to-service communication. It works by injecting a 'sidecar' proxy next to each service. This proxy intercepts all network traffic, handling concerns like service discovery, load balancing, security (mTLS), and observability. This abstracts complex networking logic from the application code.",
        explanation: "Istio and Linkerd are popular service mesh implementations."
    },
    // Test 10: 50 Questions (30 MCQ, 20 Subjective)
    {
        id: 225,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'tail latency' and why is it important in distributed systems?",
        type: 'mcq',
        options: ['The latency of the last request in a sequence', 'A measure of the latency experienced by the top percentile of slowest requests', 'The time it takes for a log tail to update', 'A network hardware delay'],
        answer: 'A measure of the latency experienced by the top percentile of slowest requests',
        explanation: 'In microservices, a user-facing operation can be slowed by the slowest of its many dependencies. Average latency can hide significant problems.'
    },
    {
        id: 226,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary role of a 'Canary Release'?",
        type: 'mcq',
        options: ['To test new features on all users at once', 'To gradually roll out a new version to a small subset of users to monitor for issues', 'To deploy software only during off-peak hours', 'To perform security scans before deployment'],
        answer: 'To gradually roll out a new version to a small subset of users to monitor for issues',
        explanation: 'This strategy minimizes the risk and impact of deploying a faulty new version by limiting its initial exposure.'
    },
    {
        id: 227,
        testId: 10,
        difficulty: 'expert',
        question: "What is idempotency in the context of API design?",
        type: 'mcq',
        options: ['Ensuring an API is secure', 'The property of an operation where making the same request multiple times has the same effect as making it once', 'A performance optimization technique', 'A way to version APIs'],
        answer: 'The property of an operation where making the same request multiple times has the same effect as making it once',
        explanation: 'HTTP methods like GET, PUT, and DELETE are idempotent, which is crucial for building reliable systems with retries.'
    },
    {
        id: 228,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'gRPC'?",
        type: 'mcq',
        options: ['A REST API framework', 'A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2', 'A GraphQL client', 'A database protocol'],
        answer: 'A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2',
        explanation: 'gRPC is highly efficient and well-suited for communication between microservices.'
    },
    {
        id: 229,
        testId: 10,
        difficulty: 'expert',
        question: "In the context of CSS, what does the `will-change` property do?",
        type: 'mcq',
        options: ['It prevents a property from changing', 'It animates a property change', 'It hints to the browser about which properties are expected to change, allowing it to perform optimizations in advance', 'It is an alias for `transform`'],
        answer: 'It hints to the browser about which properties are expected to change, allowing it to perform optimizations in advance',
        explanation: 'Using `will-change` can improve animation performance by promoting the element to its own GPU layer.'
    },
    {
        id: 230,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary benefit of 'HTTP/2 multiplexing'?",
        type: 'mcq',
        options: ['It provides better SEO than JavaScript', 'It allows multiple requests and responses to be sent in parallel over a single TCP connection, eliminating head-of-line blocking', 'It is easier to write than JavaScript', 'It replaces the need for HTML and CSS'],
        answer: 'It allows multiple requests and responses to be sent in parallel over a single TCP connection, eliminating head-of-line blocking',
        explanation: 'Multiplexing is a key feature of HTTP/2 that significantly improves web performance.'
    },
    {
        id: 231,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Kubernetes Operator'?",
        type: 'mcq',
        options: ['A person who operates a Kubernetes cluster', 'A method of packaging, deploying, and managing a Kubernetes application by extending the Kubernetes API', 'A built-in Kubernetes component for scheduling pods', 'A security feature in Kubernetes'],
        answer: 'A method of packaging, deploying, and managing a Kubernetes application by extending the Kubernetes API',
        explanation: 'Operators encode human operational knowledge into software to automate the lifecycle of complex stateful applications.'
    },
    {
        id: 232,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'currying' in functional programming?",
        type: 'mcq',
        options: ['A type of food', 'The technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument', 'A debugging technique', 'A data encryption method'],
        answer: 'The technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument',
        explanation: 'Currying allows for easier function composition and the creation of specialized, reusable functions.'
    },
    {
        id: 233,
        testId: 10,
        difficulty: 'expert',
        question: "Which of the following best describes 'GraphQL'?",
        type: 'mcq',
        options: ['A database technology', 'A query language for APIs that allows clients to request exactly the data they need', 'A graph visualization library', 'A REST API standard'],
        answer: 'A query language for APIs that allows clients to request exactly the data they need',
        explanation: 'GraphQL helps solve the problems of over-fetching and under-fetching common with traditional REST APIs.'
    },
    {
        id: 234,
        testId: 10,
        difficulty: 'expert',
        question: "What does the `box-shadow` CSS property do?",
        type: 'mcq',
        options: ['It changes the shape of an element', 'It adds shadow effects around an element\'s frame', 'It adds a shadow to the text inside an element', 'It controls the element\'s stacking order'],
        answer: 'It adds shadow effects around an element\'s frame',
        explanation: '`box-shadow` is used to create depth and dimension in a layout, accepting values for offset, blur, spread, and color.'
    },
    {
        id: 235,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'memoization'?",
        type: 'mcq',
        options: ['A way to store data in `localStorage`', 'An optimization technique used to speed up programs by storing the results of expensive function calls', 'A memory management technique', 'A debugging process'],
        answer: 'An optimization technique used to speed up programs by storing the results of expensive function calls',
        explanation: 'React\'s `useMemo` and `useCallback` hooks are forms of memoization.'
    },
    {
        id: 236,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Server-Sent Events' (SSE)?",
        type: 'mcq',
        options: ['A bidirectional communication protocol', 'A technology where a browser receives automatic updates from a server via a standard HTTP connection (unidirectional)', 'An alias for WebSockets', 'A database event system'],
        answer: 'A technology where a browser receives automatic updates from a server via a standard HTTP connection (unidirectional)',
        explanation: 'SSE is simpler than WebSockets and is ideal for scenarios where the client only needs to receive data from the server.'
    },
    {
        id: 237,
        testId: 10,
        difficulty: 'expert',
        question: "In CSS, what is the 'BFC' (Block Formatting Context)?",
        type: 'mcq',
        options: ['A block-level font container', 'A part of a visual CSS rendering of a web page in which block-level boxes are laid out', 'A CSS variable', 'A naming convention'],
        answer: 'A part of a visual CSS rendering of a web page in which block-level boxes are laid out',
        explanation: 'Creating a new BFC (e.g., with `display: flow-root`) is a way to solve layout issues like collapsing margins or containing floats.'
    },
    {
        id: 238,
        testId: 10,
        difficulty: 'expert',
        question: "Which of these is a primary goal of the 'SOLID' principles?",
        type: 'mcq',
        options: ['To make software faster', 'To reduce the amount of code written', 'To create software that is more understandable, flexible, and maintainable', 'To make software more secure'],
        answer: 'To create software that is more understandable, flexible, and maintainable',
        explanation: 'SOLID principles guide developers in creating robust and scalable object-oriented designs.'
    },
    {
        id: 239,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary difference between `git merge` and `git rebase`?",
        type: 'mcq',
        options: ['They do the same thing', '`git merge` creates a new merge commit, preserving branch history, while `git rebase` rewrites commit history to create a linear sequence', '`git rebase` is safer than `git merge`', '`git merge` is for local branches, `git rebase` is for remote branches'],
        answer: '`git merge` creates a new merge commit, preserving branch history, while `git rebase` rewrites commit history to create a linear sequence',
        explanation: 'Rebasing results in a cleaner, linear history, but should not be used on public branches that others are working on.'
    },
    {
        id: 240,
        testId: 10,
        difficulty: 'expert',
        question: "What does the 'L' in the SOLID principles stand for?",
        type: 'mcq',
        options: ['Layered Architecture Principle', 'Low Coupling Principle', 'Liskov Substitution Principle', 'Loose Typing Principle'],
        answer: 'Liskov Substitution Principle',
        explanation: 'This principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.'
    },
    {
        id: 241,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'sharding' in a database context?",
        type: 'mcq',
        options: ['A way to encrypt data', 'A type of horizontal partitioning where data is spread across multiple databases or servers', 'A backup strategy', 'A query optimization technique'],
        answer: 'A type of horizontal partitioning where data is spread across multiple databases or servers',
        explanation: 'Sharding is a common technique for scaling out databases to handle massive amounts of data and traffic.'
    },
    {
        id: 242,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS)?",
        type: 'mcq',
        options: ['A version of TLS with multiple layers of encryption', 'A TLS handshake where only the client authenticates the server', 'A process where both the client and server present certificates to authenticate each other', 'A tool for managing TLS certificates'],
        answer: 'A process where both the client and server present certificates to authenticate each other',
        explanation: 'mTLS is crucial for zero-trust networks and securing service-to-service communication.'
    },
    {
        id: 243,
        testId: 10,
        difficulty: 'expert',
        question: "In React, what problem does `React.memo` solve?",
        type: 'mcq',
        options: ['It manages component state', 'It prevents a functional component from re-rendering if its props have not changed', 'It fetches data from an API', 'It creates a memo that can be shared between components'],
        answer: 'It prevents a functional component from re-rendering if its props have not changed',
        explanation: 'It is a higher-order component that performs a shallow comparison of props to optimize performance.'
    },
    {
        id: 244,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'n+1' query problem?",
        type: 'mcq',
        options: ['A security vulnerability', "A performance issue where an application makes one initial query to retrieve a list of items, and then makes 'n' additional queries to retrieve related data for each item", 'A mathematical paradox', 'An error that occurs when `n` is equal to -1'],
        answer: "A performance issue where an application makes one initial query to retrieve a list of items, and then makes 'n' additional queries to retrieve related data for each item",
        explanation: 'This is a common performance bottleneck that can usually be solved by \'eager loading\' the related data in the initial query.'
    },
    {
        id: 245,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'two-phase commit' (2PC)?",
        type: 'mcq',
        options: ['A git workflow', 'A distributed algorithm that coordinates all the processes in a distributed atomic transaction on whether to commit or abort', 'A deployment strategy', 'A security protocol'],
        answer: 'A distributed algorithm that coordinates all the processes in a distributed atomic transaction on whether to commit or abort',
        explanation: 'While it guarantees atomicity, 2PC can be slow and is not fault-tolerant if the coordinator fails.'
    },
    {
        id: 246,
        testId: 10,
        difficulty: 'expert',
        question: "What is the purpose of HTTP Strict Transport Security (HSTS)?",
        type: 'mcq',
        options: ['To encrypt all HTTP traffic', 'To tell browsers that a site should only be accessed using HTTPS, instead of HTTP', 'To block all traffic to a site', 'To compress HTTP headers'],
        answer: 'To tell browsers that a site should only be accessed using HTTPS, instead of HTTP',
        explanation: 'This helps prevent man-in-the-middle attacks, such as protocol downgrade attacks and cookie hijacking.'
    },
    {
        id: 247,
        testId: 10,
        difficulty: 'expert',
        question: "What problem does a 'service mesh' like Istio or Linkerd solve?",
        type: 'mcq',
        options: ['It helps with database migrations', 'It provides a dedicated infrastructure layer to manage service-to-service communication', 'It is a tool for frontend state management', 'It automates CI/CD pipelines'],
        answer: 'It provides a dedicated infrastructure layer to manage service-to-service communication',
        explanation: 'A service mesh abstracts the complexity of network communication (security, traffic management, observability) away from the application code itself.'
    },
    {
        id: 248,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'vector clock'?",
        type: 'mcq',
        options: ['A physical clock used in vector graphics', 'A data structure used in distributed systems to determine the partial causal ordering of events', 'A CSS measurement unit', 'A machine learning algorithm'],
        answer: 'A data structure used in distributed systems to determine the partial causal ordering of events',
        explanation: 'Vector clocks are a mechanism for detecting causality violations and resolving conflicts in eventually consistent systems.'
    },
    {
        id: 249,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'OAuth 2.0'?",
        type: 'mcq',
        options: ['An authentication protocol', 'An authorization framework that enables a third-party application to obtain limited access to a user\'s resources without exposing their credentials', 'A type of encryption', 'A session management library'],
        answer: 'An authorization framework that enables a third-party application to obtain limited access to a user\'s resources without exposing their credentials',
        explanation: 'OAuth 2.0 is the industry standard for delegated authorization.'
    },
    {
        id: 250,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Test-Driven Development' (TDD)?",
        type: 'mcq',
        options: ['A debugging method', 'A software development process that follows a \'Red, Green, Refactor\' cycle, starting with writing a failing test', 'A type of performance testing', 'A methodology for manual testing'],
        answer: 'A software development process that follows a \'Red, Green, Refactor\' cycle, starting with writing a failing test',
        explanation: 'TDD helps ensure high test coverage and leads to more robust, modular code.'
    },
    {
        id: 251,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'backpressure' in reactive streaming systems?",
        type: 'mcq',
        options: ['A security feature', 'A flow control mechanism where a data consumer can signal to a producer to slow down', 'A type of data compression', 'A network routing protocol'],
        answer: 'A flow control mechanism where a data consumer can signal to a producer to slow down',
        explanation: 'This prevents buffer overflows when the rate of production exceeds the rate of consumption.'
    },
    {
        id: 252,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Raft' consensus algorithm?",
        type: 'mcq',
        options: ['A sorting algorithm', 'A consensus algorithm used to manage a replicated log, designed to be more understandable than Paxos', 'A pathfinding algorithm', 'An encryption algorithm'],
        answer: 'A consensus algorithm used to manage a replicated log, designed to be more understandable than Paxos',
        explanation: 'Raft works by electing a leader which manages log replication to follower nodes, ensuring strong consistency.'
    },
    {
        id: 253,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'mcq',
        options: ['A database technology', 'An architectural pattern that separates models for updating data (Commands) from models for reading data (Queries)', 'A security principle', 'A testing methodology'],
        answer: 'An architectural pattern that separates models for updating data (Commands) from models for reading data (Queries)',
        explanation: 'CQRS allows for independent optimization of the read and write sides of an application.'
    },
    {
        id: 254,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Liskov Substitution Principle'?",
        type: 'mcq',
        options: ['A principle of database design', 'A principle of object-oriented design stating that objects of a superclass should be replaceable with objects of a subclass without affecting program correctness', 'A network protocol rule', 'A UI design principle'],
        answer: 'A principle of object-oriented design stating that objects of a superclass should be replaceable with objects of a subclass without affecting program correctness',
        explanation: 'This is the "L" in the SOLID principles of object-oriented design.'
    },
    {
        id: 255,
        testId: 10,
        difficulty: 'expert',
        question: "How does 'blue-green deployment' work?",
        type: 'subjective',
        answer: "This release strategy uses two identical production environments: 'blue' (current live version) and 'green' (new version). After testing the new version in the green environment, you switch the router to send all traffic there. This allows for zero-downtime releases and simple rollback (switch back to blue).",
        explanation: "It requires having double the infrastructure, which can be a cost consideration."
    },
    {
        id: 256,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the difference between leader-based and leaderless database replication.",
        type: 'subjective',
        answer: "In leader-based replication, one replica (the leader) handles all writes and propagates them to followers. This gives strong consistency but the leader is a single point of failure. In leaderless replication, any replica can accept writes, offering higher availability but making consistency more complex to manage.",
        explanation: "Leader-based is simpler (e.g., PostgreSQL). Leaderless is more available (e.g., Cassandra)."
    },
    {
        id: 257,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'backpressure' in reactive streaming systems?",
        type: 'subjective',
        answer: "Backpressure is a flow control mechanism where a data consumer can signal to a data producer that it is becoming overwhelmed. This allows the consumer to request that the producer slow down, preventing buffer overflows and system instability. It gracefully handles mismatched production/consumption rates.",
        explanation: "It's a crucial feature for building resilient, asynchronous data pipelines."
    },
    {
        id: 258,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Raft' consensus algorithm?",
        type: 'subjective',
        answer: "Raft is a consensus algorithm used to manage a replicated log among a cluster of nodes. It works by electing a single leader, which is responsible for accepting client requests and replicating the log to followers. This ensures all nodes agree on the same sequence of operations, providing strong consistency.",
        explanation: "Raft is designed to be more understandable than Paxos and is used in systems like etcd and Consul."
    },
    {
        id: 259,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'subjective',
        answer: "CQRS is an architectural pattern that separates the models used for updating data (Commands) from the models used for reading data (Queries). This allows for independent optimization of the read and write sides of an application. For example, the write model might be relational, while the read model is a denormalized view.",
        explanation: "CQRS is often used with Event Sourcing to build highly scalable systems."
    },
    {
        id: 260,
        testId: 10,
        difficulty: 'expert',
        question: "Explain what a 'service mesh' is and why it's useful.",
        type: 'subjective',
        answer: "A service mesh is a dedicated infrastructure layer for managing service-to-service communication. It works by injecting a 'sidecar' proxy next to each service. This proxy intercepts all network traffic, handling concerns like service discovery, load balancing, security (mTLS), and observability. This abstracts complex networking logic from the application code.",
        explanation: "Istio and Linkerd are popular service mesh implementations."
    },
    {
        id: 261,
        testId: 10,
        difficulty: 'expert',
        question: "How do JavaScript `async/await` and Promises relate to the event loop?",
        type: 'subjective',
        answer: "They are high-level abstractions for managing async operations powered by the event loop. When you `await` a Promise, the async function is paused. When the Promise settles, a task is placed in the microtask queue. The event loop prioritizes this queue, so as soon as the call stack is clear, the async function's execution is resumed.",
        explanation: "They provide a synchronous-looking syntax for code that is fundamentally asynchronous and non-blocking."
    },
    {
        id: 262,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Liskov Substitution Principle' and why is it important?",
        type: 'subjective',
        answer: "The Liskov Substitution Principle states that subtypes must be substitutable for their base types without altering the correctness of the program. It's important because it ensures that inheritance hierarchies are well-designed and that polymorphism works as expected, leading to more reliable and maintainable code.",
        explanation: "This is the 'L' in the SOLID principles of object-oriented design."
    },
    {
        id: 263,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Dependency Inversion Principle'?",
        type: 'subjective',
        answer: "The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions. Also, abstractions should not depend on details; details should depend on abstractions. This decouples modules and makes the system more flexible and easier to change.",
        explanation: "This is the 'D' in the SOLID principles and is key to building loosely coupled systems."
    },
    {
        id: 264,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Infrastructure as Code' (IaC)?",
        type: 'subjective',
        answer: "IaC is the practice of managing and provisioning infrastructure (networks, virtual machines, etc.) through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. This allows for versioning, reuse, and automated deployment of infrastructure.",
        explanation: "Tools like Terraform and CloudFormation are popular for implementing IaC."
    },
    {
        id: 265,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Bloom Filter' and what is its main trade-off?",
        type: 'subjective',
        answer: "A Bloom filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set. The main trade-off is that it can produce false positives (it might say an element is in the set when it's not), but it will never produce false negatives (if it says an element is not in the set, it is definitely not). This is acceptable for use cases like checking for already-visited URLs in a web crawler to avoid redundant work.",
        explanation: "It trades a small amount of inaccuracy for significant memory savings."
    },
    {
        id: 266,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Saga' pattern and how does it manage distributed transactions?",
        type: 'subjective',
        answer: "The Saga pattern is a way to manage data consistency across microservices without using traditional two-phase commit transactions. A saga is a sequence of local transactions. Each local transaction updates data in a single service and publishes an event that triggers the next transaction in the saga. If a transaction fails, the saga executes a series of compensating transactions to undo the preceding changes.",
        explanation: "It's an event-driven approach to achieving transactional semantics in a distributed system."
    },
    {
        id: 267,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the 'Strangler Fig' pattern for modernizing legacy systems.",
        type: 'subjective',
        answer: "The Strangler Fig pattern is an approach for incrementally migrating a legacy monolithic application to a new architecture (like microservices). You create a facade that intercepts requests going to the monolith. New functionality is built as separate services, and the facade routes specific requests to these new services. Over time, more functionality is 'strangled' out of the monolith and replaced, until the monolith can eventually be retired.",
        explanation: "It allows for a gradual and lower-risk migration compared to a 'big bang' rewrite."
    },
    {
        id: 268,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Chaos Engineering' and what is its purpose?",
        type: 'subjective',
        answer: "Chaos Engineering is the discipline of experimenting on a production system to build confidence in its ability to withstand turbulent and unexpected conditions. It involves proactively and deliberately injecting controlled failures (e.g., terminating servers, adding network latency) to uncover weaknesses before they manifest as system-wide outages. The purpose is to improve resilience and reliability.",
        explanation: "The core idea is to find failures before they find you."
    },
    {
        id: 269,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between optimistic and pessimistic locking?",
        type: 'subjective',
        answer: "Pessimistic locking assumes conflicts are frequent and prevents them by acquiring a lock on a resource before a transaction begins working with it. This blocks other transactions from accessing the resource. Optimistic locking assumes conflicts are rare. It does not lock resources but instead checks if the data has been modified by another transaction before committing. If a conflict (a 'collision') is detected, the transaction is typically rolled back and retried.",
        explanation: "Pessimistic locking is 'ask for permission,' while optimistic locking is 'ask for forgiveness.'"
    },
    {
        id: 270,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        type: 'subjective',
        answer: "A CRDT is a data structure designed to be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination. The key property of a CRDT is that it guarantees that all replicas will eventually converge to the same state. This is achieved through mathematically proven merge operations that resolve any inconsistencies. They are crucial for building collaborative, real-time applications like Google Docs or Miro.",
        explanation: "CRDTs provide a principled way to handle state in highly available, eventually consistent systems."
    },
    {
        id: 271,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'QUIC' and what problems does it solve compared to TCP?",
        type: 'subjective',
        answer: "QUIC is a modern transport layer network protocol that serves as the foundation for HTTP/3. It solves the head-of-line blocking problem of TCP by using streams that are independent at the transport layer. A lost packet on one stream doesn't block others. It also features a faster handshake (0-RTT) and better connection migration between networks (e.g., switching from Wi-Fi to cellular) because connections are identified by a connection ID, not an IP/port tuple.",
        explanation: "It's built on UDP to gain more control over the transport layer."
    },
    {
        id: 272,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Domain-Driven Design' (DDD)?",
        type: 'subjective',
        answer: "DDD is an approach to software development for complex needs that focuses on creating a rich, sophisticated model of the core business domain. A central concept is the 'Ubiquitous Language'—a shared language created by developers and domain experts that is used in all communication and in the code itself. DDD emphasizes concepts like Bounded Contexts, Aggregates, and Entities to manage complexity.",
        explanation: "DDD helps bridge the gap between business reality and technical implementation in large, enterprise systems."
    },
    {
        id: 273,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Log-Structured Merge-Tree' (LSM-Tree) and why is it used in modern databases?",
        type: 'subjective',
        answer: "An LSM-Tree is a data structure optimized for write-heavy workloads, used in databases like Cassandra and RocksDB. It avoids slow random disk writes by appending all writes to an in-memory table (memtable). When the memtable is full, it's flushed to disk as a sorted, immutable file (SSTable). In the background, these SSTables are periodically merged and compacted to clean up old data. This design provides extremely high write throughput at the cost of more complex reads and compaction overhead.",
        explanation: "It trades read/update performance for very fast write performance."
    },
    {
        id: 274,
        testId: 10,
        difficulty: 'expert',
        question: "Explain 'Consistent Hashing' and its benefits for distributed systems.",
        type: 'subjective',
        answer: "Consistent hashing is a special kind of hashing where, when a hash table is resized (e.g., a server is added or removed from a cluster), only a very small number of keys need to be remapped on average. Instead of a standard modulo operation, keys are mapped to a circular hash space, and each server is responsible for a range on that circle. This minimizes data reshuffling and makes the system much more stable and scalable, which is essential for distributed caches, load balancers, and databases like DynamoDB and Cassandra.",
        explanation: "It's a key algorithm for building scalable, distributed systems."
    }
  ],
  backend: [
    // Test 1: 5 Questions (3 MCQ, 2 Subjective)
    {
      id: 275,
      testId: 1,
      difficulty: 'easy',
      question: 'Which of the following is a primary responsibility of a backend developer?',
      type: 'mcq',
      options: ['Designing the user interface', 'Writing CSS and animations', 'Managing databases and server-side logic', 'Creating frontend components'],
      answer: 'Managing databases and server-side logic',
      explanation: 'Backend development focuses on the server, database, and application logic that power the user-facing frontend.'
    },
    {
      id: 276,
      testId: 1,
      difficulty: 'easy',
      question: 'What is an API?',
      type: 'mcq',
      options: ['A type of database', 'A visual design language', 'A way for different software applications to communicate with each other', 'A frontend framework'],
      answer: 'A way for different software applications to communicate with each other',
      explanation: 'API stands for Application Programming Interface, and it defines the methods and data formats that applications can use to request and exchange information.'
    },
    {
      id: 277,
      testId: 1,
      difficulty: 'easy',
      question: 'Which HTTP method is typically used to retrieve data from a server?',
      type: 'mcq',
      options: ['POST', 'GET', 'DELETE', 'UPDATE'],
      answer: 'GET',
      explanation: 'The GET method is used to request data from a specified resource. It is a read-only operation.'
    },
    {
      id: 278,
      testId: 1,
      difficulty: 'easy',
      question: 'What is a database?',
      type: 'subjective',
      answer: 'A database is an organized collection of structured information, or data, typically stored electronically in a computer system. It is used to efficiently store, retrieve, manage, and update data.',
      explanation: 'Databases are essential for any application that needs to persist data, such as user information or application content.'
    },
    {
      id: 279,
      testId: 1,
      difficulty: 'easy',
      question: 'What is server-side logic?',
      type: 'subjective',
      answer: 'Server-side logic refers to the code that runs on the server and is responsible for processing client requests, interacting with databases, authenticating users, and preparing the data that gets sent back to the client. It is the "brain" of the application.',
      explanation: 'This logic is hidden from the end-user and handles the core functionality of a web application.'
    },
    // Test 2: 10 Questions (6 MCQ, 4 Subjective)
    {
      id: 280,
      testId: 2,
      difficulty: 'easy',
      question: 'What does SQL stand for?',
      type: 'mcq',
      options: ['Strong Question Language', 'Structured Query Language', 'Simple Query Logic', 'Server Query Language'],
      answer: 'Structured Query Language',
      explanation: 'SQL is the standard language for dealing with Relational Databases.'
    },
    {
      id: 281,
      testId: 2,
      difficulty: 'easy',
      question: 'Which of the following is a popular backend programming language?',
      type: 'mcq',
      options: ['HTML', 'CSS', 'Python', 'React'],
      answer: 'Python',
      explanation: 'Python, along with Node.js, Java, Ruby, and PHP, is a very common choice for backend development.'
    },
    {
      id: 282,
      testId: 2,
      difficulty: 'easy',
      question: 'In a REST API, what does "stateless" mean?',
      type: 'mcq',
      options: ['The server has no memory', 'The server does not store any client context between requests', 'The server cannot store data in a database', 'The client is responsible for all logic'],
      answer: 'The server does not store any client context between requests',
      explanation: 'Each request from a client to a server must contain all the information needed to understand and complete the request.'
    },
    {
      id: 283,
      testId: 2,
      difficulty: 'easy',
      question: 'Which HTTP status code indicates a successful request?',
      type: 'mcq',
      options: ['404', '500', '200', '301'],
      answer: '200',
      explanation: 'A 200 OK status code means the request has succeeded. 4xx codes indicate client errors, and 5xx codes indicate server errors.'
    },
    {
      id: 284,
      testId: 2,
      difficulty: 'easy',
      question: 'What is Node.js?',
      type: 'mcq',
      options: ['A frontend framework', 'A JavaScript runtime environment that executes JavaScript code outside a web browser', 'A database', 'A CSS preprocessor'],
      answer: 'A JavaScript runtime environment that executes JavaScript code outside a web browser',
      explanation: 'Node.js allows developers to use JavaScript for server-side scripting.'
    },
    {
      id: 285,
      testId: 2,
      difficulty: 'easy',
      question: 'Which of the following is a NoSQL database?',
      type: 'mcq',
      options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
      answer: 'MongoDB',
      explanation: 'MongoDB is a document-oriented NoSQL database, while the others are relational (SQL) databases.'
    },
    {
      id: 286,
      testId: 2,
      difficulty: 'easy',
      question: 'What is the purpose of an environment variable?',
      type: 'subjective',
      answer: 'Environment variables are used to store configuration settings for an application, such as database credentials, API keys, or server ports. They allow the application\'s behavior to be changed without modifying its code, making it more portable and secure.',
      explanation: 'This separates configuration from code, which is a best practice in software development.'
    },
    {
      id: 287,
      testId: 2,
      difficulty: 'easy',
      question: 'What is a "route" in the context of a backend framework like Express.js?',
      type: 'subjective',
      answer: 'A route defines an endpoint for handling client requests. It specifies how an application responds to a client request to a particular URL (or URI) and a specific HTTP request method (GET, POST, etc.).',
      explanation: 'For example, a route could handle GET requests to `/users` to return a list of users.'
    },
    {
      id: 288,
      testId: 2,
      difficulty: 'easy',
      question: 'What is "authentication"?',
      type: 'subjective',
      answer: 'Authentication is the process of verifying the identity of a user or service. It answers the question "Who are you?". This is typically done with a username and password, a token, or a biometric scan.',
      explanation: 'It is often confused with authorization, which is about permissions.'
    },
    {
      id: 289,
      testId: 2,
      difficulty: 'easy',
      question: 'What is a server?',
      type: 'subjective',
      answer: 'A server is a computer program or a device that provides functionality for other programs or devices, called "clients". In web development, a server typically listens for HTTP requests from clients (browsers) and sends back HTTP responses containing resources like HTML pages or data.',
      explanation: 'The term can refer to the physical machine, a virtual machine, or the software that performs the serving function.'
    },
    // Test 3: 15 Questions (9 MCQ, 6 Subjective)
    {
        id: 290,
        testId: 3,
        difficulty: 'medium',
        question: 'Which SQL clause is used to filter results?',
        type: 'mcq',
        options: ['FILTER BY', 'WHERE', 'HAVING', 'SELECT'],
        answer: 'WHERE',
        explanation: 'The WHERE clause is used to extract only those records that fulfill a specified condition.'
    },
    {
        id: 291,
        testId: 3,
        difficulty: 'medium',
        question: 'What is the purpose of a JWT (JSON Web Token)?',
        type: 'mcq',
        options: ['To store large files on the server', 'To securely transmit information between parties as a JSON object', 'To encrypt the entire database', 'To style web pages'],
        answer: 'To securely transmit information between parties as a JSON object',
        explanation: 'JWTs are a compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication and authorization.'
    },
    {
        id: 292,
        testId: 3,
        difficulty: 'medium',
        question: 'What is a "foreign key" in a relational database?',
        type: 'mcq',
        options: ['A key from another country', 'A primary key of another table that is used to link the two tables', 'A unique identifier for a row', 'An encrypted key'],
        answer: 'A primary key of another table that is used to link the two tables',
        explanation: 'Foreign keys are used to enforce referential integrity between tables.'
    },
    {
        id: 293,
        testId: 3,
        difficulty: 'medium',
        question: 'In Node.js, what is the role of `npm`?',
        type: 'mcq',
        options: ['A web server', 'A database management system', 'A package manager for JavaScript', 'A testing library'],
        answer: 'A package manager for JavaScript',
        explanation: 'npm (Node Package Manager) is used to install, manage, and share packages (reusable code) for Node.js projects.'
    },
    {
        id: 294,
        testId: 3,
        difficulty: 'medium',
        question: 'Which of these is NOT a principle of REST APIs?',
        type: 'mcq',
        options: ['Stateless', 'Client-Server architecture', 'Stateful', 'Cacheable'],
        answer: 'Stateful',
        explanation: 'REST is fundamentally stateless, meaning the server does not hold any client state between requests.'
    },
    {
        id: 295,
        testId: 3,
        difficulty: 'medium',
        question: 'What is "middleware" in the context of a framework like Express.js?',
        type: 'mcq',
        options: ['Code that runs in the middle of the night', 'A frontend component', 'Functions that have access to the request object, the response object, and the next function in the application\'s request-response cycle', 'A type of database'],
        answer: 'Functions that have access to the request object, the response object, and the next function in the application\'s request-response cycle',
        explanation: 'Middleware functions can execute code, make changes to the request and response objects, and end the cycle or pass control to the next middleware.'
    },
    {
        id: 296,
        testId: 3,
        difficulty: 'medium',
        question: 'What is the purpose of hashing passwords before storing them?',
        type: 'mcq',
        options: ['To make them shorter', 'To make them readable by administrators', 'To convert them into a fixed-length, irreversible string to protect against data breaches', 'To speed up login'],
        answer: 'To convert them into a fixed-length, irreversible string to protect against data breaches',
        explanation: 'If a database is compromised, hashed passwords cannot be easily reversed to plain text, protecting user accounts.'
    },
    {
        id: 297,
        testId: 3,
        difficulty: 'medium',
        question: 'What does "ORM" stand for?',
        type: 'mcq',
        options: ['Object-Relational Mapping', 'Object-Resource Model', 'Ordered-Record Management', 'Official-REST-Module'],
        answer: 'Object-Relational Mapping',
        explanation: 'ORM is a technique that lets you query and manipulate data from a database using an object-oriented paradigm.'
    },
    {
        id: 298,
        testId: 3,
        difficulty: 'medium',
        question: 'Which HTTP method is idempotent?',
        type: 'mcq',
        options: ['POST', 'PATCH', 'PUT', 'All of the above'],
        answer: 'PUT',
        explanation: 'An idempotent method means that making the same request multiple times has the same effect as making it once. PUT replaces a resource, so calling it repeatedly with the same data is idempotent. POST creates a new resource and is not idempotent.'
    },
    {
        id: 299,
        testId: 3,
        difficulty: 'medium',
        question: 'What is the difference between a SQL and a NoSQL database?',
        type: 'subjective',
        answer: 'SQL databases are relational, storing data in tables with a fixed schema. NoSQL databases are non-relational and can have dynamic schemas, storing data as documents, key-value pairs, or graphs. SQL databases are good for complex queries, while NoSQL databases often excel at scalability and flexibility.',
        explanation: 'The choice between SQL and NoSQL depends on the specific needs of the application.'
    },
    {
        id: 300,
        testId: 3,
        difficulty: 'medium',
        question: 'Explain the concept of "authorization".',
        type: 'subjective',
        answer: 'Authorization is the process of determining if a user or service has permission to access a specific resource or perform a specific action. It answers the question "What are you allowed to do?". This happens after authentication (verifying identity) and is often managed using roles or permissions.',
        explanation: 'For example, an admin user is authorized to delete content, while a regular user is not.'
    },
    {
        id: 301,
        testId: 3,
        difficulty: 'medium',
        question: 'What is a message queue?',
        type: 'subjective',
        answer: 'A message queue is a component in software architecture that allows asynchronous communication between different parts of a system. A "producer" sends a message to the queue, and a "consumer" retrieves and processes it later. This decouples services and improves scalability and resilience.',
        explanation: 'Popular message queue systems include RabbitMQ and Kafka.'
    },
    {
        id: 302,
        testId: 3,
        difficulty: 'medium',
        question: 'What is the purpose of database indexing?',
        type: 'subjective',
        answer: 'A database index is a data structure that improves the speed of data retrieval operations on a database table. It works like an index in a book. By indexing a column, the database can find rows with specific column values much faster, but it comes at the cost of slower writes and updates.',
        explanation: 'Proper indexing is crucial for backend performance.'
    },
    {
        id: 303,
        testId: 3,
        difficulty: 'medium',
        question: 'What is containerization, and what is a tool used for it?',
        type: 'subjective',
        answer: 'Containerization is a form of virtualization where an application and its dependencies are packaged together in a container. This ensures the application works reliably when moved from one computing environment to another. The most popular tool for containerization is Docker.',
        explanation: 'Containers are lightweight and provide process and resource isolation.'
    },
    {
        id: 304,
        testId: 3,
        difficulty: 'medium',
        question: 'What is the role of a load balancer?',
        type: 'subjective',
        answer: 'A load balancer is a device or software that distributes network or application traffic across multiple servers. This is used to improve the availability and scalability of applications by ensuring that no single server becomes overwhelmed with requests.',
        explanation: 'Load balancing is a key component of highly available systems.'
    },
    // Test 4: 20 Questions (12 MCQ, 8 Subjective)
    {
        id: 305,
        testId: 4,
        difficulty: 'medium',
        question: 'What is the purpose of the `GROUP BY` clause in SQL?',
        type: 'mcq',
        options: ['To sort the result set', 'To filter records based on a condition', 'To group rows that have the same values into summary rows', 'To join two tables'],
        answer: 'To group rows that have the same values into summary rows',
        explanation: 'It is often used with aggregate functions like COUNT(), MAX(), MIN(), SUM(), AVG() to group the result-set by one or more columns.'
    },
    {
        id: 306,
        testId: 4,
        difficulty: 'medium',
        question: 'Which of the following is a key-value store database?',
        type: 'mcq',
        options: ['PostgreSQL', 'Redis', 'MySQL', 'Neo4j'],
        answer: 'Redis',
        explanation: 'Redis is an in-memory data structure store, used as a database, cache, and message broker. It is a popular key-value store.'
    },
    {
        id: 307,
        testId: 4,
        difficulty: 'medium',
        question: 'What does "scalability" mean in the context of backend systems?',
        type: 'mcq',
        options: ['The system is very secure', 'The system can handle a growing amount of work by adding resources', 'The system has a good user interface', 'The system is easy to deploy'],
        answer: 'The system can handle a growing amount of work by adding resources',
        explanation: 'Scalability can be vertical (adding more power to an existing server) or horizontal (adding more servers).'
    },
    {
        id: 308,
        testId: 4,
        difficulty: 'medium',
        question: 'What is the event loop in Node.js?',
        type: 'mcq',
        options: ['A frontend animation library', 'A mechanism that allows Node.js to perform non-blocking I/O operations', 'A security feature', 'A tool for managing events in a calendar'],
        answer: 'A mechanism that allows Node.js to perform non-blocking I/O operations',
        explanation: 'Despite JavaScript being single-threaded, the event loop allows Node.js to handle concurrent operations efficiently.'
    },
    {
        id: 309,
        testId: 4,
        difficulty: 'medium',
        question: 'Which HTTP header is used to specify the content type of the response body?',
        type: 'mcq',
        options: ['Content-Length', 'Accept', 'Authorization', 'Content-Type'],
        answer: 'Content-Type',
        explanation: 'For example, `Content-Type: application/json` indicates that the response body is a JSON object.'
    },
    {
        id: 310,
        testId: 4,
        difficulty: 'medium',
        question: 'What is a "microservice" architecture?',
        type: 'mcq',
        options: ['An architecture where the entire application is built as a single unit', 'An architectural style that structures an application as a collection of small, independent services', 'A frontend-only architecture', 'A database design pattern'],
        answer: 'An architectural style that structures an application as a collection of small, independent services',
        explanation: 'Microservices are independently deployable and scalable, and they communicate over a network.'
    },
    {
        id: 311,
        testId: 4,
        difficulty: 'medium',
        question: 'What is a "salt" in the context of password hashing?',
        type: 'mcq',
        options: ['A type of encryption algorithm', 'Random data that is used as an additional input to a one-way function that hashes a password', 'A secret key known only to the server', 'A type of cookie'],
        answer: 'Random data that is used as an additional input to a one-way function that hashes a password',
        explanation: 'Salting defends against dictionary attacks and pre-computed rainbow table attacks.'
    },
    {
        id: 312,
        testId: 4,
        difficulty: 'medium',
        question: 'What is a `Promise` in JavaScript?',
        type: 'mcq',
        options: ['A guarantee that a function will execute', 'An object representing the eventual completion (or failure) of an asynchronous operation', 'A type of variable that cannot be changed', 'A security token'],
        answer: 'An object representing the eventual completion (or failure) of an asynchronous operation',
        explanation: 'Promises are fundamental to modern asynchronous programming in JavaScript.'
    },
    {
        id: 313,
        testId: 4,
        difficulty: 'medium',
        question: 'Which of the following is an example of a "blocking" operation in Node.js?',
        type: 'mcq',
        options: ['Reading a file asynchronously', 'Making an HTTP request', 'Reading a file synchronously', 'Setting a timeout'],
        answer: 'Reading a file synchronously',
        explanation: 'Synchronous operations block the event loop, preventing Node.js from handling other requests until the operation is complete.'
    },
    {
        id: 314,
        testId: 4,
        difficulty: 'medium',
        question: 'What is the purpose of the `HAVING` clause in SQL?',
        type: 'mcq',
        options: ['To filter rows before grouping', 'To sort the result set', 'To filter groups based on a condition, after the `GROUP BY` clause has been applied', 'To specify which columns to return'],
        answer: 'To filter groups based on a condition, after the `GROUP BY` clause has been applied',
        explanation: '`WHERE` filters rows, `HAVING` filters groups.'
    },
    {
        id: 315,
        testId: 4,
        difficulty: 'medium',
        question: 'Which HTTP status code is used for "Not Found"?',
        type: 'mcq',
        options: ['200', '503', '404', '302'],
        answer: '404',
        explanation: 'The 404 status code indicates that the server could not find the requested resource.'
    },
    {
        id: 316,
        testId: 4,
        difficulty: 'medium',
        question: 'What is a "cache"?',
        type: 'mcq',
        options: ['A type of secure database', 'A hardware or software component that stores data so that future requests for that data can be served faster', 'A log file', 'A load balancer'],
        answer: 'A hardware or software component that stores data so that future requests for that data can be served faster',
        explanation: 'Caching is a critical technique for improving backend performance by reducing the need to regenerate or fetch data.'
    },
    {
        id: 317,
        testId: 4,
        difficulty: 'medium',
        question: 'Explain the difference between authentication and authorization.',
        type: 'subjective',
        answer: 'Authentication is the process of verifying a user\'s identity (e.g., with a password). It answers "Who are you?". Authorization is the process of determining what an authenticated user is allowed to do (e.g., access a certain page). It answers "What can you do?".',
        explanation: 'You authenticate to get into a building, but you are authorized to enter only specific rooms.'
    },
    {
        id: 318,
        testId: 4,
        difficulty: 'medium',
        question: 'What is a "connection pool" in the context of databases?',
        type: 'subjective',
        answer: 'A connection pool is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. This avoids the overhead of establishing a new connection for every request, which is an expensive operation.',
        explanation: 'Connection pooling significantly improves the performance of database-driven applications.'
    },
    {
        id: 319,
        testId: 4,
        difficulty: 'medium',
        question: 'What is the purpose of `async/await` in JavaScript?',
        type: 'subjective',
        answer: '`async/await` is syntactic sugar built on top of Promises that allows you to write asynchronous code that looks and behaves more like synchronous code. The `async` keyword makes a function return a Promise, and the `await` keyword pauses the function\'s execution until a Promise is settled.',
        explanation: 'This makes complex asynchronous logic much easier to read and maintain.'
    },
    {
        id: 320,
        testId: 4,
        difficulty: 'medium',
        question: 'What is a SQL "JOIN" clause used for?',
        type: 'subjective',
        answer: 'A JOIN clause is used to combine rows from two or more tables based on a related column between them. There are several types, including INNER JOIN (returns records with matching values in both tables) and LEFT JOIN (returns all records from the left table, and the matched records from the right table).',
        explanation: 'JOINs are fundamental to querying data in a relational database.'
    },
    {
        id: 321,
        testId: 4,
        difficulty: 'medium',
        question: 'What is a "reverse proxy"?',
        type: 'subjective',
        answer: 'A reverse proxy is a server that sits in front of one or more web servers, forwarding client requests to the appropriate server. To the client, the reverse proxy appears to be the origin server. They are commonly used for load balancing, caching, and SSL termination.',
        explanation: 'NGINX and Apache are popular web servers that can also function as reverse proxies.'
    },
    {
        id: 322,
        testId: 4,
        difficulty: 'medium',
        question: 'What is the `package.json` file in a Node.js project?',
        type: 'subjective',
        answer: 'The `package.json` file is the manifest file for a Node.js project. It records metadata about the project (like its name and version) and, most importantly, lists the project\'s dependencies. It also contains scripts that can be run for the project (e.g., `start`, `test`).',
        explanation: 'It is the central place for configuring and describing how to interact with and manage the project.'
    },
    {
        id: 323,
        testId: 4,
        difficulty: 'medium',
        question: 'What is a "database transaction"?',
        type: 'subjective',
        answer: 'A transaction is a sequence of operations performed as a single logical unit of work. A transaction has four key properties (ACID): Atomicity, Consistency, Isolation, and Durability. This ensures that either all operations in the sequence succeed, or none of them do.',
        explanation: 'Transactions are essential for maintaining data integrity in a database.'
    },
    {
        id: 324,
        testId: 4,
        difficulty: 'medium',
        question: 'What is "CORS" and why is it important for backend APIs?',
        type: 'subjective',
        answer: 'CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls whether a web page from one domain can make requests to an API on another domain. Backend APIs must be configured with the correct CORS headers (like `Access-Control-Allow-Origin`) to allow legitimate cross-origin requests from front-end applications.',
        explanation: 'Without proper CORS configuration, browsers will block cross-origin API requests for security reasons.'
    },
    // Test 5: 25 Questions (15 MCQ, 10 Subjective)
    {
        id: 325,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the "N+1" query problem and how do you solve it?',
        type: 'mcq',
        options: ['A database connection issue', 'A security vulnerability in SQL', 'A performance problem where one query retrieves N items, and then N additional queries are run to fetch related data for each item', 'A syntax error in SQL'],
        answer: 'A performance problem where one query retrieves N items, and then N additional queries are run to fetch related data for each item',
        explanation: 'This is a common performance bottleneck, typically solved by "eager loading" the related data in the initial query (e.g., using a JOIN).'
    },
    {
        id: 326,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the primary difference between `process.nextTick()` and `setImmediate()` in Node.js?',
        type: 'mcq',
        options: ['`setImmediate()` runs before `process.nextTick()`', 'The `process.nextTick()` callback is fired before the event loop proceeds, while `setImmediate()` queues the callback for a future cycle of the event loop', 'They are identical', '`process.nextTick()` is for CPU-bound tasks only'],
        answer: 'The `process.nextTick()` callback is fired before the event loop proceeds, while `setImmediate()` queues the callback for a future cycle of the event loop',
        explanation: '`nextTick` callbacks have higher priority and can starve the event loop if used recursively.'
    },
    {
        id: 327,
        testId: 5,
        difficulty: 'hard',
        question: 'In a microservices architecture, what is a "service mesh"?',
        type: 'mcq',
        options: ['A frontend framework for microservices', 'A database designed for microservices', 'A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable', 'A tool for drawing architecture diagrams'],
        answer: 'A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable',
        explanation: 'A service mesh (like Istio or Linkerd) provides features like service discovery, load balancing, and security as a platform feature.'
    },
    {
        id: 328,
        testId: 5,
        difficulty: 'hard',
        question: 'What does "ACID" stand for in the context of database transactions?',
        type: 'mcq',
        options: ['Atomicity, Consistency, Isolation, Durability', 'Association, Concurrency, Integrity, Durability', 'Atomicity, Concurrency, Isolation, Durability', 'Availability, Consistency, Integrity, Durability'],
        answer: 'Atomicity, Consistency, Isolation, Durability',
        explanation: 'These are the four properties that guarantee that database transactions are processed reliably.'
    },
    {
        id: 329,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the primary purpose of a "canary release" deployment strategy?',
        type: 'mcq',
        options: ['To deploy a new version to all users at once', 'To roll out a new version to a small subset of users to test it in production before a full rollout', 'To deploy only on weekends', 'To release a version for internal testing only'],
        answer: 'To roll out a new version to a small subset of users to test it in production before a full rollout',
        explanation: 'This strategy minimizes the risk and impact of deploying a bad version.'
    },
    {
        id: 330,
        testId: 5,
        difficulty: 'hard',
        question: 'What is gRPC?',
        type: 'mcq',
        options: ['A GraphQL client', 'A REST API framework', 'A high-performance RPC (Remote Procedure Call) framework that uses Protocol Buffers and HTTP/2', 'A type of relational database'],
        answer: 'A high-performance RPC (Remote Procedure Call) framework that uses Protocol Buffers and HTTP/2',
        explanation: 'gRPC is often used for efficient communication between microservices.'
    },
    {
        id: 331,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the main advantage of a document database (like MongoDB) over a relational database (like PostgreSQL)?',
        type: 'mcq',
        options: ['Support for ACID transactions', 'Ability to perform complex JOINs', 'Flexible schema and horizontal scalability', 'Better for storing images and videos'],
        answer: 'Flexible schema and horizontal scalability',
        explanation: 'Document databases allow for nested data structures and are generally easier to scale out across multiple servers.'
    },
    {
        id: 332,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the "CAP Theorem" in distributed systems?',
        type: 'mcq',
        options: ['A theorem about caching performance', 'A principle stating a distributed system can only provide two of three guarantees: Consistency, Availability, and Partition Tolerance', 'A rule for API design', 'A security protocol'],
        answer: 'A principle stating a distributed system can only provide two of three guarantees: Consistency, Availability, and Partition Tolerance',
        explanation: 'In the presence of a network partition, a system must choose between being consistent or being available.'
    },
    {
        id: 333,
        testId: 5,
        difficulty: 'hard',
        question: 'What is "Infrastructure as Code" (IaC)?',
        type: 'mcq',
        options: ['Writing application code for infrastructure', 'Managing and provisioning infrastructure through machine-readable definition files, rather than manual configuration', 'A type of low-level programming', 'A diagramming tool'],
        answer: 'Managing and provisioning infrastructure through machine-readable definition files, rather than manual configuration',
        explanation: 'Tools like Terraform and CloudFormation allow infrastructure to be versioned and automated like application code.'
    },
    {
        id: 334,
        testId: 5,
        difficulty: 'hard',
        question: 'Which of these is a primary benefit of using a message broker like RabbitMQ or Kafka?',
        type: 'mcq',
        options: ['Synchronous communication', 'Decoupling services and enabling asynchronous communication', 'Storing user session data', 'Serving static files'],
        answer: 'Decoupling services and enabling asynchronous communication',
        explanation: 'Message brokers allow services to communicate without being directly connected, improving scalability and resilience.'
    },
    {
        id: 335,
        testId: 5,
        difficulty: 'hard',
        question: 'What is a "distributed lock"?',
        type: 'mcq',
        options: ['A lock on a file in a distributed file system', 'A mechanism to ensure that only one process can access a shared resource at a time in a distributed environment', 'A security feature for distributed databases', 'A type of physical lock'],
        answer: 'A mechanism to ensure that only one process can access a shared resource at a time in a distributed environment',
        explanation: 'Implementing a reliable distributed lock is a complex problem, often solved with tools like ZooKeeper or Redis.'
    },
    {
        id: 336,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the purpose of the `cluster` module in Node.js?',
        type: 'mcq',
        options: ['To connect to a database cluster', 'To allow a Node.js application to take advantage of multi-core systems by creating child processes', 'To manage microservice clusters', 'To perform clustering analysis in machine learning'],
        answer: 'To allow a Node.js application to take advantage of multi-core systems by creating child processes',
        explanation: 'The cluster module allows a master process to fork worker processes, enabling a single Node.js application to scale across multiple CPU cores.'
    },
    {
        id: 337,
        testId: 5,
        difficulty: 'hard',
        question: 'What is OAuth 2.0 primarily used for?',
        type: 'mcq',
        options: ['Authentication (verifying identity)', 'Encryption', 'Authorization (delegating access)', 'Session management'],
        answer: 'Authorization (delegating access)',
        explanation: 'OAuth 2.0 is a framework for allowing a third-party application to get limited access to a user\'s resources without exposing the user\'s credentials.'
    },
    {
        id: 338,
        testId: 5,
        difficulty: 'hard',
        question: 'Which SQL statement is used to delete data from a database?',
        type: 'mcq',
        options: ['REMOVE', 'ERASE', 'DELETE', 'TRUNCATE'],
        answer: 'DELETE',
        explanation: 'The `DELETE` statement is used to delete existing records in a table. `TRUNCATE` also removes data but is a different type of operation.'
    },
    {
        id: 339,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the role of a "Web Server" like NGINX or Apache?',
        type: 'mcq',
        options: ['To run backend application logic exclusively', 'To handle incoming HTTP requests from clients and serve content, often static files, or act as a reverse proxy', 'To manage databases', 'To execute JavaScript on the client-side'],
        answer: 'To handle incoming HTTP requests from clients and serve content, often static files, or act as a reverse proxy',
        explanation: 'Web servers are the entry point for most web traffic and play a crucial role in the backend ecosystem.'
    },
    {
        id: 340,
        testId: 5,
        difficulty: 'hard',
        question: 'Explain what a database "deadlock" is and how it can be prevented.',
        type: 'subjective',
        answer: 'A deadlock is a situation where two or more transactions are waiting for each other to release locks, creating a circular dependency that prevents any of them from proceeding. Prevention can be achieved by ensuring all transactions acquire locks in a consistent, predetermined order, or by setting a lock timeout so transactions fail instead of waiting indefinitely.',
        explanation: 'Most database systems also have mechanisms to detect and automatically resolve deadlocks by aborting one of the transactions.'
    },
    {
        id: 341,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the difference between horizontal and vertical scaling?',
        type: 'subjective',
        answer: 'Vertical scaling (scaling up) means increasing the resources of a single server, such as adding more CPU or RAM. Horizontal scaling (scaling out) means adding more servers to the pool of resources. Horizontal scaling is generally more flexible and resilient for large-scale applications.',
        explanation: 'Scaling is a key consideration for building applications that can handle high traffic.'
    },
    {
        id: 342,
        testId: 5,
        difficulty: 'hard',
        question: 'What is a "rate limiter" and why is it important for an API?',
        type: 'subjective',
        answer: 'A rate limiter is a mechanism that controls the number of requests a user or client can make to an API within a certain time frame. It is important for preventing abuse (e.g., DoS attacks), ensuring fair usage, and managing server load to maintain system stability.',
        explanation: 'Common rate limiting algorithms include Token Bucket and Leaky Bucket.'
    },
    {
        id: 343,
        testId: 5,
        difficulty: 'hard',
        question: 'Explain the concept of "idempotency" in API design.',
        type: 'subjective',
        answer: 'An idempotent operation is one that has the same effect whether it is performed once or multiple times. For example, a `PUT` request to update a resource to a certain state is idempotent. This is a crucial property for building reliable systems, as it allows clients to safely retry requests without unintended side effects.',
        explanation: '`GET`, `PUT`, and `DELETE` are idempotent, whereas `POST` is not.'
    },
    {
        id: 344,
        testId: 5,
        difficulty: 'hard',
        question: 'What is "eventual consistency"?',
        type: 'subjective',
        answer: 'Eventual consistency is a consistency model used in distributed systems where, if no new updates are made to a given data item, all replicas of that item will eventually converge to the same value. It is a form of weak consistency that prioritizes availability and is common in NoSQL databases like Cassandra.',
        explanation: 'It is a key trade-off made in highly available systems, as defined by the CAP theorem.'
    },
    {
        id: 345,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the role of an "API Gateway"?',
        type: 'subjective',
        answer: 'An API Gateway is a server that acts as a single entry point into a system, typically a microservices architecture. It handles concerns like request routing, authentication, rate limiting, and logging, allowing the backend services to focus purely on their business logic. It simplifies the client experience and improves security.',
        explanation: 'It acts as a reverse proxy to accept all application programming interface (API) calls.'
    },
    {
        id: 346,
        testId: 5,
        difficulty: 'hard',
        question: 'What is the difference between a "process" and a "thread"?',
        type: 'subjective',
        answer: 'A process is an instance of a running program with its own isolated memory space. A thread is the smallest unit of execution within a process. A single process can have multiple threads, which share the same memory space, making communication between them faster but requiring synchronization mechanisms to prevent race conditions.',
        explanation: 'This is a fundamental concept in operating systems and concurrent programming.'
    },
    {
        id: 347,
        testId: 5,
        difficulty: 'hard',
        question: 'What is "observability" in the context of backend systems?',
        type: 'subjective',
        answer: 'Observability is the ability to measure a system\'s internal states from its external outputs. It goes beyond monitoring to provide the ability to ask arbitrary questions about the system\'s behavior. The three pillars of observability are logs, metrics, and distributed traces.',
        explanation: 'It is crucial for understanding and debugging complex, modern distributed systems.'
    },
    {
        id: 348,
        testId: 5,
        difficulty: 'hard',
        question: 'What is a "SQL injection" attack and how do you prevent it?',
        type: 'subjective',
        answer: 'A SQL injection is a code injection technique where an attacker can execute malicious SQL statements by providing crafted input. The primary way to prevent it is by using prepared statements (or parameterized queries) and avoiding dynamic SQL query concatenation. ORMs typically handle this automatically.',
        explanation: 'It is one of the most common and dangerous web application vulnerabilities.'
    },
    {
        id: 349,
        testId: 5,
        difficulty: 'hard',
        question: 'What is "sharding" in a database?',
        type: 'subjective',
        answer: 'Sharding is a type of database partitioning that separates very large databases into smaller, faster, more easily managed parts called data shards. It is a form of horizontal partitioning, where rows of a table are spread across multiple database servers. This is a common technique for achieving horizontal scalability.',
        explanation: 'Each shard is a separate database, but together they form a single logical database.'
    },
    // Test 6: 30 Questions (18 MCQ, 12 Subjective)
    {
        id: 350,
        testId: 6,
        difficulty: 'hard',
        question: 'What is the primary difference between a "LEFT JOIN" and an "INNER JOIN" in SQL?',
        type: 'mcq',
        options: ['INNER JOIN is faster', 'LEFT JOIN returns all rows from the left table, and the matched rows from the right table; INNER JOIN returns rows when there is a match in both tables', 'They are functionally identical', 'INNER JOIN is used for NoSQL databases'],
        answer: 'LEFT JOIN returns all rows from the left table, and the matched rows from the right table; INNER JOIN returns rows when there is a match in both tables',
        explanation: 'Understanding join types is fundamental to relational database querying.'
    },
    {
        id: 351,
        testId: 6,
        difficulty: 'hard',
        question: 'Which of the following is a common use case for Redis?',
        type: 'mcq',
        options: ['Storing long-term archival data', 'Running complex analytical queries', 'As a high-performance cache or session store', 'Full-text search'],
        answer: 'As a high-performance cache or session store',
        explanation: 'Redis\'s in-memory nature makes it extremely fast for caching, rate limiting, and other use cases where speed is critical.'
    },
    {
        id: 352,
        testId: 6,
        difficulty: 'hard',
        question: 'What is a "thundering herd" problem in concurrent programming?',
        type: 'mcq',
        options: ['A network bandwidth issue', 'A situation where a large number of threads waiting for an event are awakened, causing a spike in contention', 'A type of denial-of-service attack', 'A storage system failure'],
        answer: 'A situation where a large number of threads waiting for an event are awakened, causing a spike in contention',
        explanation: 'This can severely degrade system performance and is a classic problem in high-concurrency system design.'
    },
    {
        id: 353,
        testId: 6,
        difficulty: 'hard',
        question: 'What is the purpose of "backpressure" in a data streaming system?',
        type: 'mcq',
        options: ['To increase the pressure in the system', 'A flow control mechanism that allows a consumer to signal to a producer to slow down data production', 'To reverse the flow of data', 'A security mechanism to prevent data leaks'],
        answer: 'A flow control mechanism that allows a consumer to signal to a producer to slow down data production',
        explanation: 'Backpressure is crucial for building resilient streaming systems that can handle mismatched producer/consumer rates without crashing.'
    },
    {
        id: 354,
        testId: 6,
        difficulty: 'hard',
        question: 'What is the "Saga" pattern used for?',
        type: 'mcq',
        options: ['Frontend state management', 'Managing data consistency across microservices in a distributed transaction', 'Database indexing', 'API versioning'],
        answer: 'Managing data consistency across microservices in a distributed transaction',
        explanation: 'A saga is a sequence of local transactions where each transaction updates a single service and triggers the next. It uses compensating transactions to handle failures.'
    },
    {
        id: 355,
        testId: 6,
        difficulty: 'hard',
        question: 'In Kubernetes, what is a "Pod"?',
        type: 'mcq',
        options: ['A single physical server', 'The smallest and simplest unit in the Kubernetes object model that you create or deploy', 'A load balancer', 'A type of network policy'],
        answer: 'The smallest and simplest unit in the Kubernetes object model that you create or deploy',
        explanation: 'A Pod represents a set of running containers on your cluster.'
    },
    {
        id: 356,
        testId: 6,
        difficulty: 'hard',
        question: 'What is "mTLS" (Mutual TLS)?',
        type: 'mcq',
        options: ['A weaker version of TLS', 'A TLS handshake where only the client authenticates the server', 'A process where both the client and the server present certificates to authenticate each other', 'A tool for managing TLS certificates'],
        answer: 'A process where both the client and the server present certificates to authenticate each other',
        explanation: 'mTLS is crucial for zero-trust networks and securing service-to-service communication.'
    },
    {
        id: 357,
        testId: 6,
        difficulty: 'hard',
        question: 'What is a "serverless" architecture?',
        type: 'mcq',
        options: ['An architecture with no servers', 'A cloud-computing execution model where the cloud provider manages the server infrastructure and dynamically allocates resources', 'A frontend-only application model', 'A type of database'],
        answer: 'A cloud-computing execution model where the cloud provider manages the server infrastructure and dynamically allocates resources',
        explanation: 'Serverless allows developers to focus on writing code without managing servers, often in the form of functions (FaaS).'
    },
    {
        id: 358,
        testId: 6,
        difficulty: 'hard',
        question: 'Which of these is a characteristic of a "stateless" application?',
        type: 'mcq',
        options: ['It stores user session data on the server', 'It does not save client data generated in one session for use in the next session with that client', 'It requires a persistent connection', 'It is less scalable than a stateful application'],
        answer: 'It does not save client data generated in one session for use in the next session with that client',
        explanation: 'Statelessness simplifies server design and makes it much easier to scale horizontally.'
    },
    {
        id: 359,
        testId: 6,
        difficulty: 'hard',
        question: 'What is a "database view"?',
        type: 'mcq',
        options: ['A physical copy of a table', 'A stored query that can be accessed as a virtual table', 'A user interface for a database', 'A type of database index'],
        answer: 'A stored query that can be accessed as a virtual table',
        explanation: 'Views are used to simplify complex queries, provide a layer of abstraction, and enforce security.'
    },
    {
        id: 360,
        testId: 6,
        difficulty: 'hard',
        question: 'What is the purpose of the `Content-Security-Policy` (CSP) HTTP header?',
        type: 'mcq',
        options: ['To specify the content type of the response', 'To control caching behavior', 'To provide a whitelist of trusted content sources to mitigate XSS attacks', 'To manage cookies'],
        answer: 'To provide a whitelist of trusted content sources to mitigate XSS attacks',
        explanation: 'CSP is a powerful security layer that helps prevent the injection and execution of malicious scripts.'
    },
    {
        id: 361,
        testId: 6,
        difficulty: 'hard',
        question: 'Which of the following is an example of "Platform as a Service" (PaaS)?',
        type: 'mcq',
        options: ['Amazon EC2 (a virtual machine)', 'Heroku or Google App Engine', 'Gmail', 'AWS S3 (object storage)'],
        answer: 'Heroku or Google App Engine',
        explanation: 'PaaS provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the underlying infrastructure.'
    },
    {
        id: 362,
        testId: 6,
        difficulty: 'hard',
        question: 'What is a "web hook"?',
        type: 'mcq',
        options: ['A frontend JavaScript hook', 'A way for an app to provide other applications with real-time information via an HTTP POST', 'A security vulnerability', 'A database trigger'],
        answer: 'A way for an app to provide other applications with real-time information via an HTTP POST',
        explanation: 'Webhooks are user-defined HTTP callbacks that are triggered by specific events, enabling event-driven communication between services.'
    },
    {
        id: 363,
        testId: 6,
        difficulty: 'hard',
        question: 'What is a "lambda function" in the context of programming?',
        type: 'mcq',
        options: ['A function that runs on AWS Lambda', 'A large, named function', 'A small, anonymous function that can be treated like a value', 'A function that only performs mathematical calculations'],
        answer: 'A small, anonymous function that can be treated like a value',
        explanation: 'Lambda functions are a key feature of many modern programming languages and are central to functional programming.'
    },
    {
        id: 364,
        testId: 6,
        difficulty: 'hard',
        question: 'What is the main function of an "init system" like `systemd` or `init` in a Linux server?',
        type: 'mcq',
        options: ['To manage network connections', 'To install software packages', 'To be the first process started by the kernel and to manage all other processes', 'To compile code'],
        answer: 'To be the first process started by the kernel and to manage all other processes',
        explanation: 'The init system is responsible for starting services, managing daemons, and shutting down the system gracefully.'
    },
    {
        id: 365,
        testId: 6,
        difficulty: 'hard',
        question: 'What is the "Twelve-Factor App" methodology?',
        type: 'mcq',
        options: ['A specific tech stack', 'A set of twelve best practices for building robust and scalable software-as-a-service applications', 'A book about app design', 'A frontend framework'],
        answer: 'A set of twelve best practices for building robust and scalable software-as-a-service applications',
        explanation: 'Its principles include things like codebase, dependencies, config, and logs.'
    },
    {
        id: 366,
        testId: 6,
        difficulty: 'hard',
        question: 'In a distributed system, what is "leader election"?',
        type: 'mcq',
        options: ['A political process', 'The process of designating a single process as the organizer of some task distributed among several computers (nodes)', 'A security protocol', 'A load balancing algorithm'],
        answer: 'The process of designating a single process as the organizer of some task distributed among several computers (nodes)',
        explanation: 'Leader election is essential for many consensus algorithms and for avoiding split-brain scenarios.'
    },
    {
        id: 367,
        testId: 6,
        difficulty: 'hard',
        question: 'What is "GraphQL"?',
        type: 'mcq',
        options: ['A relational database', 'A graph visualization tool', 'A query language for your API, and a server-side runtime for executing queries', 'A CSS framework'],
        answer: 'A query language for your API, and a server-side runtime for executing queries',
        explanation: 'GraphQL allows clients to ask for exactly the data they need, which can be more efficient than REST.'
    },
    {
        id: 368,
        testId: 6,
        difficulty: 'hard',
        question: 'Explain the concept of "concurrency" vs. "parallelism".',
        type: 'subjective',
        answer: 'Concurrency is when two or more tasks can start, run, and complete in overlapping time periods. It doesn\'t necessarily mean they\'ll ever be running at the same instant. Parallelism is when tasks literally run at the same time, e.g., on a multi-core processor. An application can be concurrent, but not parallel.',
        explanation: 'Node.js is a great example of a concurrent, single-threaded system.'
    },
    {
        id: 369,
        testId: 6,
        difficulty: 'hard',
        question: 'What is a "race condition" in concurrent programming?',
        type: 'subjective',
        answer: 'A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly. It is a bug that occurs when the outcome of a program depends on the non-deterministic timing of events.',
        explanation: 'They can be prevented using synchronization mechanisms like locks, mutexes, or semaphores.'
    },
    {
        id: 370,
        testId: 6,
        difficulty: 'hard',
        question: 'What are database "migrations" and why are they used?',
        type: 'subjective',
        answer: 'Database migrations are a form of version control for your database schema. They allow you to manage changes to the database structure in a systematic and repeatable way. Each migration file contains code to apply a change (e.g., add a table) and to revert it. This is crucial for team collaboration and automated deployments.',
        explanation: 'Migrations ensure that the database schema is consistent across different environments (development, production, etc.).'
    },
    {
        id: 371,
        testId: 6,
        difficulty: 'hard',
        question: 'What is "blue-green deployment"?',
        type: 'subjective',
        answer: 'Blue-green deployment is a release strategy that reduces downtime and risk by running two identical production environments called "Blue" and "Green". At any time, only one of the environments is live. You deploy the new version to the idle environment, test it, and then switch the router to direct all traffic to the new (Green) environment. This allows for instant rollback if issues are found.',
        explanation: 'The main drawback is the cost of maintaining two production environments.'
    },
    {
        id: 372,
        testId: 6,
        difficulty: 'hard',
        question: 'What are the main differences between TCP and UDP?',
        type: 'subjective',
        answer: 'TCP (Transmission Control Protocol) is a connection-oriented protocol that provides reliable, ordered, and error-checked delivery of a stream of bytes. UDP (User Datagram Protocol) is a connectionless protocol that is much faster but does not provide any reliability, ordering, or error-checking guarantees. TCP is used for services like web browsing and email, while UDP is used for services like video streaming and online gaming where speed is more important than perfect reliability.',
        explanation: 'This is a fundamental networking concept.'
    },
    {
        id: 373,
        testId: 6,
        difficulty: 'hard',
        question: 'What is "log rotation" and why is it important?',
        type: 'subjective',
        answer: 'Log rotation is an automated process used in system administration in which old log files are compressed, moved, renamed, or deleted. This is important to prevent log files from consuming too much disk space, which could lead to system failure. It also makes managing and archiving logs much easier.',
        explanation: 'Tools like `logrotate` are commonly used on Linux systems for this purpose.'
    },
    {
        id: 374,
        testId: 6,
        difficulty: 'hard',
        question: 'Explain what a "distributed trace" is.',
        type: 'subjective',
        answer: 'A distributed trace is a method used to profile and monitor applications, especially those built using a microservices architecture. It tracks a single request as it travels through all the different services it touches. This provides a unified view of the entire request lifecycle, making it invaluable for debugging latency issues and understanding system behavior.',
        explanation: 'Traces are one of the three pillars of observability, along with logs and metrics.'
    },
    {
        id: 375,
        testId: 6,
        difficulty: 'hard',
        question: 'How does HTTPS work? Briefly explain the TLS handshake.',
        type: 'subjective',
        answer: 'HTTPS encrypts HTTP traffic using TLS/SSL. The TLS handshake establishes a secure session: 1) Client Hello: client sends its capabilities. 2) Server Hello: server sends back its SSL certificate and chosen cipher. 3) Client Verification: client verifies the certificate with a Certificate Authority. 4) Key Exchange: client and server securely exchange a symmetric session key. 5) Secure Communication: all subsequent data is encrypted with the session key.',
        explanation: 'This process ensures confidentiality and integrity of the data exchanged.'
    },
    {
        id: 376,
        testId: 6,
        difficulty: 'hard',
        question: 'What is a "stateless" vs. "stateful" application?',
        type: 'subjective',
        answer: 'A stateless application does not store any client session data on the server. Each request is independent. A stateful application stores past client data (state) on the server. Stateless applications are much easier to scale horizontally, as any server can handle any request.',
        explanation: 'REST APIs are stateless, while a WebSocket connection is typically stateful.'
    },
    {
        id: 377,
        testId: 6,
        difficulty: 'hard',
        question: 'What is "CI/CD"?',
        type: 'subjective',
        answer: 'CI/CD stands for Continuous Integration and Continuous Deployment/Delivery. CI is the practice of automatically building and testing code every time a developer commits a change. CD is the practice of automatically deploying every passing build to a testing or production environment. It is a core practice of modern DevOps.',
        explanation: 'CI/CD pipelines automate the software release process, enabling faster and more reliable deployments.'
    },
    {
        id: 378,
        testId: 6,
        difficulty: 'hard',
        question: 'What is a "container orchestrator" like Kubernetes?',
        type: 'subjective',
        answer: 'A container orchestrator is a tool that automates the deployment, scaling, and management of containerized applications. It handles tasks like scheduling containers onto nodes in a cluster, managing networking between containers, and ensuring the desired state of the application is maintained (e.g., by restarting failed containers).',
        explanation: 'Kubernetes is the de facto standard for container orchestration.'
    },
    {
        id: 379,
        testId: 6,
        difficulty: 'hard',
        question: 'What is the "publish-subscribe" (or "pub/sub") pattern?',
        type: 'subjective',
        answer: 'It is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers. Instead, publishers classify messages into topics, and subscribers express interest in one or more topics. This decouples the services, as they don\'t need to know about each other.',
        explanation: 'Systems like Kafka, RabbitMQ, and Google Cloud Pub/Sub are based on this pattern.'
    },
    // Test 7: 35 Questions (21 MCQ, 14 Subjective)
    {
        id: 380,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "Bloom Filter" and what is its primary trade-off?',
        type: 'mcq',
        options: ['A data sorting algorithm', 'A space-efficient probabilistic data structure used to test whether an element is a member of a set', 'A type of encryption', 'A database indexing strategy'],
        answer: 'A space-efficient probabilistic data structure used to test whether an element is a member of a set',
        explanation: 'The trade-off is that it can have false positives (it might say an item is in the set when it is not), but it never has false negatives.'
    },
    {
        id: 381,
        testId: 7,
        difficulty: 'hard',
        question: 'What is "CQRS" (Command Query Responsibility Segregation)?',
        type: 'mcq',
        options: ['A database technology', 'An architectural pattern that separates models for updating data (Commands) from models for reading data (Queries)', 'A security principle', 'A testing methodology'],
        answer: 'An architectural pattern that separates models for updating data (Commands) from models for reading data (Queries)',
        explanation: 'CQRS allows the read and write sides of an application to be independently optimized and scaled.'
    },
    {
        id: 382,
        testId: 7,
        difficulty: 'hard',
        question: 'Which of these best describes a "sidecar" pattern in a service mesh?',
        type: 'mcq',
        options: ['A backup container', 'A proxy container that is deployed alongside each service container to handle network communication', 'A frontend component', 'A database replication method'],
        answer: 'A proxy container that is deployed alongside each service container to handle network communication',
        explanation: 'The sidecar proxy (like Envoy) intercepts all traffic to and from the service, providing observability, security, and traffic control.'
    },
    {
        id: 383,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "vector clock"?',
        type: 'mcq',
        options: ['A CSS measurement unit', 'A physical clock used in vector graphics', 'A data structure used to determine the partial causal ordering of events in a distributed system', 'A machine learning algorithm'],
        answer: 'A data structure used to determine the partial causal ordering of events in a distributed system',
        explanation: 'Vector clocks help detect causality violations and resolve conflicts in eventually consistent systems.'
    },
    {
        id: 384,
        testId: 7,
        difficulty: 'hard',
        question: 'In database theory, what is "normalization"?',
        type: 'mcq',
        options: ['A process of organizing columns and tables to minimize data redundancy', 'A process of speeding up queries', 'A backup strategy', 'A security measure'],
        answer: 'A process of organizing columns and tables to minimize data redundancy',
        explanation: 'Normalization involves dividing larger tables into smaller, well-structured tables and defining relationships between them.'
    },
    {
        id: 385,
        testId: 7,
        difficulty: 'hard',
        question: 'What does the `TRUNCATE` command do in SQL?',
        type: 'mcq',
        options: ['It deletes a specific row from a table', 'It deletes the entire table', 'It quickly removes all rows from a table, but not the table itself', 'It modifies the data in a table'],
        answer: 'It quickly removes all rows from a table, but not the table itself',
        explanation: '`TRUNCATE` is faster than `DELETE` for removing all rows as it typically does not log the deletion of each row.'
    },
    {
        id: 386,
        testId: 7,
        difficulty: 'hard',
        question: 'What is the "Strangler Fig" pattern?',
        type: 'mcq',
        options: ['A database indexing pattern', 'An approach for incrementally migrating a legacy system by gradually replacing its functionality with new services', 'A security pattern', 'A UI design pattern'],
        answer: 'An approach for incrementally migrating a legacy system by gradually replacing its functionality with new services',
        explanation: 'This pattern allows for a gradual and lower-risk migration from a monolith to a microservices architecture.'
    },
    {
        id: 387,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "distributed hash table" (DHT)?',
        type: 'mcq',
        options: ['A centralized database that uses hashing', 'A data structure in C++', 'A decentralized distributed system that provides a lookup service similar to a hash table', 'A password hashing algorithm'],
        answer: 'A decentralized distributed system that provides a lookup service similar to a hash table',
        explanation: 'DHTs are a core component of many peer-to-peer systems, such as BitTorrent, for storing and looking up metadata.'
    },
    {
        id: 388,
        testId: 7,
        difficulty: 'hard',
        question: 'What is "end-to-end encryption" (E2EE)?',
        type: 'mcq',
        options: ['Encrypting data only on the server', 'A system where only the communicating users can read the messages, preventing even the service provider from doing so', 'A type of data compression', 'Encrypting data only on the client'],
        answer: 'A system where only the communicating users can read the messages, preventing even the service provider from doing so',
        explanation: 'In E2EE, the keys to decrypt messages are held only by the end users.'
    },
    {
        id: 389,
        testId: 7,
        difficulty: 'hard',
        question: 'Which of the SOLID principles states that "a class should have only one reason to change"?',
        type: 'mcq',
        options: ['Open/Closed Principle', 'Liskov Substitution Principle', 'Single Responsibility Principle', 'Interface Segregation Principle'],
        answer: 'Single Responsibility Principle',
        explanation: 'This principle argues that a class should have only a single responsibility, or a single reason to change.'
    },
    {
        id: 390,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "CRDT" (Conflict-free Replicated Data Type)?',
        type: 'mcq',
        options: ['A type of database', 'A data structure where replicas can be updated independently and inconsistencies can always be mathematically resolved', 'An encryption algorithm', 'A sorting algorithm'],
        answer: 'A data structure where replicas can be updated independently and inconsistencies can always be mathematically resolved',
        explanation: 'CRDTs are crucial for building eventually consistent, collaborative, real-time applications like Google Docs.'
    },
    {
        id: 391,
        testId: 7,
        difficulty: 'hard',
        question: 'What is "long polling"?',
        type: 'mcq',
        options: ['A very slow HTTP request', 'A technique where the client makes a request to the server, and the server holds the connection open until it has new data to send', 'A type of database query', 'A frontend rendering technique'],
        answer: 'A technique where the client makes a request to the server, and the server holds the connection open until it has new data to send',
        explanation: 'Long polling is a way to simulate a push mechanism from server to client, but it is less efficient than WebSockets or Server-Sent Events.'
    },
    {
        id: 392,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a primary advantage of "Protocol Buffers" over JSON?',
        type: 'mcq',
        options: ['It is human-readable', 'It is a binary format that is smaller and faster to parse', 'It does not require a schema', 'It is supported by more browsers'],
        answer: 'It is a binary format that is smaller and faster to parse',
        explanation: 'Protocol Buffers (protobuf) are highly efficient for serializing structured data, especially in performance-critical microservices communication.'
    },
    {
        id: 393,
        testId: 7,
        difficulty: 'hard',
        question: 'In Kubernetes, what is the role of the "etcd" component?',
        type: 'mcq',
        options: ['To run user containers', 'A consistent and highly-available key-value store used as Kubernetes\' backing store for all cluster data', 'To manage networking between pods', 'To schedule pods onto nodes'],
        answer: 'A consistent and highly-available key-value store used as Kubernetes\' backing store for all cluster data',
        explanation: '`etcd` is the source of truth for the entire Kubernetes cluster.'
    },
    {
        id: 394,
        testId: 7,
        difficulty: 'hard',
        question: 'Which of these is a "serverless" compute service?',
        type: 'mcq',
        options: ['Amazon EC2', 'A physical server in a data center', 'AWS Lambda or Google Cloud Functions', 'Docker'],
        answer: 'AWS Lambda or Google Cloud Functions',
        explanation: 'These services allow you to run code without provisioning or managing servers (Function-as-a-Service, or FaaS).'
    },
    {
        id: 395,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "circuit breaker" pattern?',
        type: 'mcq',
        options: ['A hardware device', 'A design pattern used to detect failures and prevent a failing service from being repeatedly called', 'A security pattern', 'A UI pattern'],
        answer: 'A design pattern used to detect failures and prevent a failing service from being repeatedly called',
        explanation: 'After a certain number of failed calls, the circuit breaker "trips" and subsequent calls fail immediately, giving the failing service time to recover.'
    },
    {
        id: 396,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "canary deployment"?',
        type: 'mcq',
        options: ['Deploying to a test environment', 'Deploying a new version to all users at once', 'Gradually routing a small percentage of traffic to a new version to monitor its performance and health', 'Deploying only at night'],
        answer: 'Gradually routing a small percentage of traffic to a new version to monitor its performance and health',
        explanation: 'This is a risk-mitigation strategy for rolling out new software versions.'
    },
    {
        id: 397,
        testId: 7,
        difficulty: 'hard',
        question: 'What is the "Actor Model" of concurrency?',
        type: 'mcq',
        options: ['A UI design pattern', 'A mathematical model where "actors" are the universal primitives of concurrent computation, communicating via asynchronous messages', 'A type of multithreading', 'A client-server networking model'],
        answer: 'A mathematical model where "actors" are the universal primitives of concurrent computation, communicating via asynchronous messages',
        explanation: 'The Actor Model avoids shared state and locks, making it easier to build concurrent and fault-tolerant systems.'
    },
    {
        id: 398,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "Log-Structured Merge-Tree" (LSM-Tree)?',
        type: 'mcq',
        options: ['A visualization of log files', 'A data structure optimized for write-heavy workloads, used in databases like Cassandra and RocksDB', 'A filesystem format', 'A network protocol'],
        answer: 'A data structure optimized for write-heavy workloads, used in databases like Cassandra and RocksDB',
        explanation: 'LSM-Trees append writes to an in-memory table and flush to sorted, immutable files on disk, providing very high write throughput.'
    },
    {
        id: 399,
        testId: 7,
        difficulty: 'hard',
        question: 'Which of the following is true about "eventual consistency"?',
        type: 'mcq',
        options: ['The system is always strongly consistent', 'If no new updates are made, all replicas will eventually reflect the last update', 'It is a security model', 'It guarantees that all reads will see the latest write'],
        answer: 'If no new updates are made, all replicas will eventually reflect the last update',
        explanation: 'This is a key consistency model for highly available distributed systems that favors availability over strong consistency.'
    },
    {
        id: 400,
        testId: 7,
        difficulty: 'hard',
        question: 'What is "consistent hashing"?',
        type: 'mcq',
        options: ['A hashing algorithm that always produces the same output', 'A hashing technique where adding or removing a server does not significantly change the mapping of keys to servers', 'A password hashing scheme', 'A type of encryption'],
        answer: 'A hashing technique where adding or removing a server does not significantly change the mapping of keys to servers',
        explanation: 'Consistent hashing is crucial for building scalable distributed caches and databases.'
    },
    {
        id: 401,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "sidecar" proxy in a service mesh?',
        type: 'subjective',
        answer: 'A sidecar is a proxy process that runs alongside each service instance in a service mesh. It intercepts all inbound and outbound network traffic, allowing the mesh to apply policies for traffic management, security (like mTLS), and observability without any changes to the application code.',
        explanation: 'Envoy is a very popular sidecar proxy used in service meshes like Istio.'
    },
    {
        id: 402,
        testId: 7,
        difficulty: 'hard',
        question: 'Explain the "Saga" pattern for distributed transactions.',
        type: 'subjective',
        answer: 'The Saga pattern is a way to manage data consistency across microservices in the absence of a distributed transaction coordinator. It is a sequence of local transactions where each transaction updates a single service and publishes an event. If a local transaction fails, the saga executes a series of compensating transactions to undo the preceding changes and restore consistency.',
        explanation: 'It is an event-driven approach to maintaining data integrity in a distributed system.'
    },
    {
        id: 403,
        testId: 7,
        difficulty: 'hard',
        question: 'What is the role of a "consensus algorithm" like Raft or Paxos?',
        type: 'subjective',
        answer: 'A consensus algorithm is a process used to achieve agreement on a single data value among a group of processes or systems in a distributed cluster. It is fundamental to building fault-tolerant systems. For example, it can be used to elect a leader or decide the order of operations in a replicated state machine.',
        explanation: 'These algorithms are crucial for systems that require strong consistency, like `etcd` or ZooKeeper.'
    },
    {
        id: 404,
        testId: 7,
        difficulty: 'hard',
        question: 'What is the difference between a "database view" and a "materialized view"?',
        type: 'subjective',
        answer: 'A standard database view is a stored query that is executed each time the view is accessed, so it always returns fresh data. A materialized view is a database object that contains the results of a query, which are physically stored. The data is not live and must be refreshed periodically. Materialized views are used to improve performance for complex queries.',
        explanation: 'A view is a virtual table, while a materialized view is a physical snapshot.'
    },
    {
        id: 405,
        testId: 7,
        difficulty: 'hard',
        question: 'What is "backpressure" in the context of data streaming?',
        type: 'subjective',
        answer: 'Backpressure is a flow control mechanism where a data consumer that is becoming overwhelmed can signal to the data producer to slow down or temporarily stop sending data. This prevents the consumer\'s buffers from overflowing and the system from crashing. It is a crucial feature for building resilient, asynchronous streaming pipelines.',
        explanation: 'It allows the system to gracefully handle situations where the rate of production exceeds the rate of consumption.'
    },
    {
        id: 406,
        testId: 7,
        difficulty: 'hard',
        question: 'What are the trade-offs of using a "serverless" architecture?',
        type: 'subjective',
        answer: 'The main benefits are automatic scaling and a pay-per-use cost model, with no server management overhead. The trade-offs include "cold start" latency for infrequently used functions, potential vendor lock-in, and limitations on execution duration and resources. It can also be more difficult to debug and monitor than a traditional application.',
        explanation: 'Serverless is best suited for event-driven, stateless, and short-lived computations.'
    },
    {
        id: 407,
        testId: 7,
        difficulty: 'hard',
        question: 'What is "Domain-Driven Design" (DDD)?',
        type: 'subjective',
        answer: 'DDD is an approach to software development that centers on creating a rich model of the core business domain. A key concept is the "ubiquitous language," a shared language developed by the team to talk about the domain, which is used in all communication and in the code itself. It helps to manage complexity in large, enterprise systems.',
        explanation: 'DDD emphasizes concepts like Bounded Contexts, Aggregates, and Entities.'
    },
    {
        id: 408,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "Log-Structured Merge-Tree" (LSM-Tree)?',
        type: 'subjective',
        answer: 'An LSM-Tree is a data structure optimized for write-heavy workloads. It appends writes to an in-memory table (memtable). When full, the memtable is flushed to disk as a sorted, immutable file (SSTable). SSTables are periodically merged (compacted) in the background. This design avoids slow, random disk writes and provides very high write throughput.',
        explanation: 'This data structure is used in databases like Cassandra, RocksDB, and LevelDB.'
    },
    {
        id: 409,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "distributed trace" and why is it important for microservices?',
        type: 'subjective',
        answer: 'A distributed trace tracks a single request as it flows through all the different services in a microservices architecture. It assigns a unique trace ID to the request and propagates it through each service call. This allows you to visualize the entire request path, identify performance bottlenecks, and debug errors across service boundaries.',
        explanation: 'It is one of the three pillars of observability (along with logs and metrics).'
    },
    {
        id: 410,
        testId: 7,
        difficulty: 'hard',
        question: 'What is "Chaos Engineering"?',
        type: 'subjective',
        answer: 'Chaos Engineering is the discipline of experimenting on a distributed system to build confidence in its capability to withstand turbulent conditions in production. It involves deliberately injecting controlled failures (like terminating servers or adding latency) to identify weaknesses and improve system resilience before they cause real outages.',
        explanation: 'The goal is to proactively find and fix failures before they impact customers.'
    },
    {
        id: 411,
        testId: 7,
        difficulty: 'hard',
        question: 'Explain the difference between leader-based and leaderless database replication.',
        type: 'subjective',
        answer: 'In leader-based replication, one replica (the leader) handles all write operations and propagates them to follower replicas. This provides strong consistency but makes the leader a single point of failure. In leaderless replication (or multi-leader), any replica can accept writes. This offers higher availability but makes consistency more complex to manage, often relying on "last write wins" or other conflict resolution strategies.',
        explanation: 'Leader-based is common in relational databases, while leaderless is common in NoSQL databases like Cassandra.'
    },
    {
        id: 412,
        testId: 7,
        difficulty: 'hard',
        question: 'What is "two-phase commit" (2PC)?',
        type: 'subjective',
        answer: '2PC is a distributed algorithm that coordinates all the processes that participate in a distributed atomic transaction on whether to commit or abort. It involves a "prepare" phase where all participants agree to commit, and a "commit" phase where they all apply the change. It guarantees atomicity but can be slow and is not resilient to coordinator failure.',
        explanation: 'It is a classic but often criticized algorithm for distributed transactions.'
    },
    {
        id: 413,
        testId: 7,
        difficulty: 'hard',
        question: 'What is a "circuit breaker" in software architecture?',
        type: 'subjective',
        answer: 'A circuit breaker is a design pattern used to detect failures and prevent a failing service from being repeatedly called. After a certain number of failed calls to a service, the circuit breaker "trips" and subsequent calls fail immediately for a period of time, without making a network request. This gives the failing service time to recover and prevents cascading failures.',
        explanation: 'It is a crucial pattern for building resilient microservices.'
    },
    {
        id: 414,
        testId: 7,
        difficulty: 'hard',
        question: 'How does optimistic concurrency control differ from pessimistic concurrency control?',
        type: 'subjective',
        answer: 'Pessimistic control assumes conflicts are frequent and locks resources to prevent them. Optimistic control assumes conflicts are rare; it allows transactions to proceed without locks but checks for conflicts at commit time. If a conflict is detected (e.g., via a version number), the transaction is rolled back. Optimistic control is generally more scalable.',
        explanation: 'Pessimistic is "ask for permission," optimistic is "ask for forgiveness."'
    },
    // Test 8: 40 Questions (24 MCQ, 16 Subjective)
    {
        id: 415,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "QUIC" and what problem does it primarily solve compared to TCP+TLS?',
        type: 'mcq',
        options: ['It is a new encryption standard', 'It is a transport layer protocol that eliminates head-of-line blocking and reduces connection setup latency', 'It is a compression algorithm for HTTP', 'It is a JavaScript framework'],
        answer: 'It is a transport layer protocol that eliminates head-of-line blocking and reduces connection setup latency',
        explanation: 'QUIC, built on UDP, is the foundation of HTTP/3 and provides significant performance improvements.'
    },
    {
        id: 416,
        testId: 8,
        difficulty: 'expert',
        question: 'In the context of the Raft consensus algorithm, what is the role of the "leader"?',
        type: 'mcq',
        options: ['To store a backup of the data', 'To handle all client interactions, manage log replication, and send heartbeats to followers', 'To monitor the health of the cluster', 'To partition the network for testing'],
        answer: 'To handle all client interactions, manage log replication, and send heartbeats to followers',
        explanation: 'In Raft, at any given time, one server is the leader, and all other servers are followers. This simplifies the management of the replicated log.'
    },
    {
        id: 417,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "Byzantine Fault" in a distributed system?',
        type: 'mcq',
        options: ['A simple server crash', 'A network partition', 'Any fault presenting different symptoms to different observers, including malicious behavior', 'A database schema error'],
        answer: 'Any fault presenting different symptoms to different observers, including malicious behavior',
        explanation: 'Byzantine Fault Tolerance (BFT) is the ability of a system to tolerate these kinds of arbitrary, potentially malicious failures, which is a much harder problem than simple crash-fault tolerance.'
    },
    {
        id: 418,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "event sourcing"?',
        type: 'mcq',
        options: ['A logging technique', 'An architectural pattern where all changes to application state are stored as a sequence of events', 'A frontend state management library', 'A way to source events from third-party APIs'],
        answer: 'An architectural pattern where all changes to application state are stored as a sequence of events',
        explanation: 'Instead of storing just the current state, you store the immutable events that led to the state. This provides a full audit log and allows for rebuilding state at any point in time.'
    },
    {
        id: 419,
        testId: 8,
        difficulty: 'expert',
        question: 'What is the primary benefit of "Zero-Knowledge Proofs"?',
        type: 'mcq',
        options: ['They are very fast to compute', 'They allow one party to prove to another that they know a value, without conveying any information apart from the fact that they know the value', 'They eliminate the need for databases', 'They provide a way to compress data'],
        answer: 'They allow one party to prove to another that they know a value, without conveying any information apart from the fact that they know the value',
        explanation: 'This is a powerful cryptographic concept with applications in privacy and scalability (e.g., in blockchain systems).'
    },
    {
        id: 420,
        testId: 8,
        difficulty: 'expert',
        question: 'What problem does a "distributed scheduler" like Kubernetes Scheduler solve?',
        type: 'mcq',
        options: ['It schedules jobs to run at specific times, like cron', 'It assigns workloads (e.g., pods) to nodes in the cluster based on resource availability and constraints', 'It schedules database backups', 'It manages DNS records'],
        answer: 'It assigns workloads (e.g., pods) to nodes in the cluster based on resource availability and constraints',
        explanation: 'The scheduler is a critical component of a container orchestrator, responsible for resource allocation.'
    },
    {
        id: 421,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "TLA+"?',
        type: 'mcq',
        options: ['A programming language', 'A formal specification language used to design, model, and verify concurrent and distributed systems', 'A database', 'A networking protocol'],
        answer: 'A formal specification language used to design, model, and verify concurrent and distributed systems',
        explanation: 'TLA+ is used to find design flaws in complex algorithms and systems before they are even built, as famously used by Amazon Web Services.'
    },
    {
        id: 422,
        testId: 8,
        difficulty: 'expert',
        question: 'Which of these is a "server-side rendering" (SSR) framework for JavaScript applications?',
        type: 'mcq',
        options: ['Express.js', 'React', 'Next.js', 'jQuery'],
        answer: 'Next.js',
        explanation: 'Next.js is a popular React framework that provides server-side rendering, static site generation, and other features out of the box.'
    },
    {
        id: 423,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "rolling update" deployment strategy?',
        type: 'mcq',
        options: ['Shutting down the old version and then starting the new version', 'Gradually replacing instances of the old version of an application with instances of the new version', 'Deploying the new version to a subset of users', 'Deploying only on a rolling basis, like every Friday'],
        answer: 'Gradually replacing instances of the old version of an application with instances of the new version',
        explanation: 'This allows for a zero-downtime deployment, though rollback can be more complex than with a blue-green deployment.'
    },
    {
        id: 424,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "daemon" process on a Linux/Unix system?',
        type: 'mcq',
        options: ['A malicious process', 'A process that runs in the background, rather than being under the direct control of an interactive user', 'A short-lived process for a single task', 'A process that manages the user interface'],
        answer: 'A process that runs in the background, rather than being under the direct control of an interactive user',
        explanation: 'Daemons are typically used to run services, such as web servers (httpd) or database servers (postgresd).'
    },
    {
        id: 425,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "OpenAPI Specification" (formerly Swagger)?',
        type: 'mcq',
        options: ['A programming language for APIs', 'A standard, language-agnostic interface description for RESTful APIs', 'An API security protocol', 'A load balancer for APIs'],
        answer: 'A standard, language-agnostic interface description for RESTful APIs',
        explanation: 'It allows both humans and computers to discover and understand the capabilities of a service without access to source code or documentation.'
    },
    {
        id: 426,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "Content Delivery Network" (CDN)?',
        type: 'mcq',
        options: ['A database replication strategy', 'A network of proxy servers geographically distributed to deliver content to users more quickly', 'A CI/CD tool', 'A local caching system in the browser'],
        answer: 'A network of proxy servers geographically distributed to deliver content to users more quickly',
        explanation: 'CDNs cache static assets like images, CSS, and JS files closer to users, reducing latency.'
    },
    {
        id: 427,
        testId: 8,
        difficulty: 'expert',
        question: 'What does "failing fast" mean in system design?',
        type: 'mcq',
        options: ['The system is designed to fail often', 'A principle that a system should immediately report any condition that is likely to indicate a failure', 'The system is not resilient', 'The system fails slowly over time'],
        answer: 'A principle that a system should immediately report any condition that is likely to indicate a failure',
        explanation: 'Failing fast prevents a system from continuing in a potentially corrupt state and makes debugging easier.'
    },
    {
        id: 428,
        testId: 8,
        difficulty: 'expert',
        question: 'What is the purpose of a "liveliness probe" in Kubernetes?',
        type: 'mcq',
        options: ['To check if a node is alive', 'To check if a container is running, so Kubernetes knows when to restart it', 'To check if a service is ready to receive traffic', 'To probe for security vulnerabilities'],
        answer: 'To check if a container is running, so Kubernetes knows when to restart it',
        explanation: 'If the liveliness probe fails, the kubelet kills the container and the container is subjected to its restart policy.'
    },
    {
        id: 429,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "namespace" in the context of programming languages or operating systems?',
        type: 'mcq',
        options: ['A fixed amount of memory', 'A container that provides a scope to the identifiers (names of types, functions, variables) inside it', 'A network address space', 'A security group'],
        answer: 'A container that provides a scope to the identifiers (names of types, functions, variables) inside it',
        explanation: 'Namespaces are a fundamental concept for avoiding name collisions in large codebases. Linux namespaces are also a core technology behind containers.'
    },
    {
        id: 430,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "Data-Oriented Programming"?',
        type: 'mcq',
        options: ['The same as Object-Oriented Programming', 'A programming paradigm that emphasizes the separation of code and data, using generic data structures', 'A database design methodology', 'A language for querying data'],
        answer: 'A programming paradigm that emphasizes the separation of code and data, using generic data structures',
        explanation: 'It contrasts with OOP, which emphasizes collocating code and data in objects. Languages like Clojure are data-oriented.'
    },
    {
        id: 431,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "Test-Driven Development" (TDD)?',
        type: 'mcq',
        options: ['Testing an application after it is fully developed', 'A software development process that relies on the repetition of a short development cycle: first the developer writes a failing automated test case, then produces the minimum code to pass that test, and finally refactors', 'A manual testing methodology', 'A performance testing tool'],
        answer: 'A software development process that relies on the repetition of a short development cycle: first the developer writes a failing automated test case, then produces the minimum code to pass that test, and finally refactors',
        explanation: 'TDD is a disciplined approach that leads to high test coverage and well-designed code.'
    },
    {
        id: 432,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "memory leak"?',
        type: 'mcq',
        options: ['A hardware failure', 'A situation where a program fails to release memory it no longer needs, leading to eventual performance degradation or failure', 'A security exploit', 'A data compression technique'],
        answer: 'A situation where a program fails to release memory it no longer needs, leading to eventual performance degradation or failure',
        explanation: 'In languages with garbage collection, leaks can still occur from dangling references in closures or event listeners.'
    },
    {
        id: 433,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "denormalization" in database design?',
        type: 'mcq',
        options: ['The process of making the database less normal', 'A strategy used on a previously-normalized database to increase performance by intentionally adding redundant data', 'A security measure', 'A backup process'],
        answer: 'A strategy used on a previously-normalized database to increase performance by intentionally adding redundant data',
        explanation: 'Denormalization is done to avoid costly JOINs in a relational database, trading storage space for query speed.'
    },
    {
        id: 434,
        testId: 8,
        difficulty: 'expert',
        question: 'Which of these is a "pull-based" messaging system?',
        type: 'mcq',
        options: ['WebSockets', 'Kafka or Google Cloud Pub/Sub', 'Webhooks', 'Server-Sent Events'],
        answer: 'Kafka or Google Cloud Pub/Sub',
        explanation: 'In a pull-based system, the consumer is responsible for "pulling" messages from the broker, which allows the consumer to control its own consumption rate.'
    },
    {
        id: 435,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "tail call optimization"?',
        type: 'mcq',
        options: ['A way to optimize log file tails', 'A process where a compiler can execute a function call in a tail position without building up a new stack frame', 'A database query optimization', 'A frontend performance trick'],
        answer: 'A process where a compiler can execute a function call in a tail position without building up a new stack frame',
        explanation: 'This allows for recursive functions to use constant stack space, preventing stack overflows. It is a key feature of many functional programming languages.'
    },
    {
        id: 436,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "B-Tree"?',
        type: 'mcq',
        options: ['A type of bee hive', 'A self-balancing tree data structure that maintains sorted data and is commonly used in databases and filesystems', 'A binary search tree', 'A UI component tree'],
        answer: 'A self-balancing tree data structure that maintains sorted data and is commonly used in databases and filesystems',
        explanation: 'B-Trees are optimized for systems that read and write large blocks of data, making them ideal for disk-based storage.'
    },
    {
        id: 437,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "Prometheus" in the context of monitoring?',
        type: 'mcq',
        options: ['A Greek titan', 'An open-source systems monitoring and alerting toolkit that collects metrics via a pull model over HTTP', 'A logging library', 'A distributed tracing system'],
        answer: 'An open-source systems monitoring and alerting toolkit that collects metrics via a pull model over HTTP',
        explanation: 'Prometheus is a very popular tool in the cloud-native ecosystem for collecting time-series data.'
    },
    {
        id: 438,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "eBPF" (extended Berkeley Packet Filter)?',
        type: 'mcq',
        options: ['A network firewall', 'A technology that allows sandboxed programs to run in the Linux kernel, enabling powerful networking, observability, and security tooling', 'A file format', 'A packet filtering command-line tool'],
        answer: 'A technology that allows sandboxed programs to run in the Linux kernel, enabling powerful networking, observability, and security tooling',
        explanation: 'eBPF has revolutionized kernel-space programming, allowing for safe and dynamic extensions to the operating system.'
    },
    {
        id: 439,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "CQRS" and how does it relate to "Event Sourcing"?',
        type: 'subjective',
        answer: 'CQRS (Command Query Responsibility Segregation) is an architectural pattern that separates the models for updating data (Commands) from the models for reading data (Queries). Event Sourcing is a pattern where all state changes are stored as a sequence of immutable events. They are often used together: commands produce events, which are stored. The read models (queries) are then built by projecting these events.',
        explanation: 'This combination allows for highly scalable and auditable systems.'
    },
    {
        id: 440,
        testId: 8,
        difficulty: 'expert',
        question: 'Explain what a "distributed consensus algorithm" like Paxos or Raft solves.',
        type: 'subjective',
        answer: 'It solves the problem of getting a group of computers (a cluster) to agree on a single value or state, even in the presence of failures like network partitions or server crashes. This is fundamental for building strongly consistent, fault-tolerant distributed systems, for tasks like leader election or maintaining a replicated log.',
        explanation: 'Without consensus, a distributed system cannot reliably coordinate its actions.'
    },
    {
        id: 441,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "Byzantine Fault" and why is it a difficult problem in distributed systems?',
        type: 'subjective',
        answer: 'A Byzantine Fault is any fault where a component, such as a server, can exhibit arbitrary and malicious behavior, including sending conflicting information to different parts of the system. This is much harder to deal with than a simple crash fault because the system must be resilient to nodes that are actively trying to subvert it. Byzantine Fault Tolerant (BFT) algorithms are needed to solve this.',
        explanation: 'This problem is often illustrated by the Byzantine Generals Problem and is crucial in trustless environments like public blockchains.'
    },
    {
        id: 442,
        testId: 8,
        difficulty: 'expert',
        question: 'What is the "actor model" of concurrency?',
        type: 'subjective',
        answer: 'The actor model is a conceptual model of concurrent computation where "actors" are the universal primitives. An actor is an entity that receives messages, can make local decisions, create more actors, and send messages. Crucially, actors are isolated and do not share memory; they communicate only through asynchronous messages. This avoids the need for locks and makes reasoning about concurrent systems easier.',
        explanation: 'Languages like Erlang and frameworks like Akka are based on the actor model.'
    },
    {
        id: 443,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "tail latency" and why is it a critical metric for microservices?',
        type: 'subjective',
        answer: 'Tail latency refers to the latency of the slowest percentile of requests (e.g., the 99th or 99.9th percentile). In a microservices architecture, a single user-facing request might fan out to dozens of backend services. The overall latency is often determined by the slowest of these dependencies. Therefore, a rare slow request for one service can become a common source of slowness for the end user. Optimizing for tail latency is crucial for a good user experience.',
        explanation: 'Focusing only on average latency can hide significant performance problems.'
    },
    {
        id: 444,
        testId: 8,
        difficulty: 'expert',
        question: 'Explain what a "Service-Level Objective" (SLO) is and how it relates to an "SLA".',
        type: 'subjective',
        answer: 'An SLO is a target value for a service level indicator (SLI), which is a quantitative measure of some aspect of the service (e.g., latency, availability). For example, "99.9% of requests will be served in under 200ms". An SLA (Service-Level Agreement) is a contract with a customer that includes consequences for failing to meet the defined service levels. SLOs are internal targets that should be stricter than SLAs to provide a buffer.',
        explanation: 'This is a core concept of Site Reliability Engineering (SRE).'
    },
    {
        id: 445,
        testId: 8,
        difficulty: 'expert',
        question: 'What are "idempotent consumers" in an event-driven architecture?',
        type: 'subjective',
        answer: 'An idempotent consumer is a message receiver that can safely process the same message multiple times without causing unintended side effects. This is crucial in event-driven systems where message delivery guarantees can sometimes lead to a message being delivered more than once. Idempotency can be achieved by tracking message IDs or by designing the processing logic to be inherently idempotent.',
        explanation: 'This is key to building reliable and fault-tolerant asynchronous systems.'
    },
    {
        id: 446,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "mTLS" (Mutual TLS) and in what scenarios is it used?',
        type: 'subjective',
        answer: 'Mutual TLS is an extension of standard TLS where both the client and the server present certificates to authenticate each other. In standard TLS, only the client authenticates the server. mTLS is used in high-security environments, particularly for service-to-service communication within a microservices architecture. It is a key component of a "zero-trust" network model, ensuring that both parties are who they claim to be.',
        explanation: 'It provides a much stronger security posture than one-way TLS.'
    },
    {
        id: 447,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "Connection Multiplexing" in HTTP/2?',
        type: 'subjective',
        answer: 'Multiplexing is a feature of HTTP/2 that allows multiple request and response messages to be in flight at the same time over a single TCP connection. This is achieved by breaking down messages into binary frames and interleaving them. It solves the head-of-line blocking problem of HTTP/1.1, where a slow response would block all subsequent requests on the same connection.',
        explanation: 'This is one of the most significant performance improvements in HTTP/2.'
    },
    {
        id: 448,
        testId: 8,
        difficulty: 'expert',
        question: 'How do "finalizers" or "destructors" work in garbage-collected languages, and what are their pitfalls?',
        type: 'subjective',
        answer: 'Finalizers (like in Java or C#) are methods that are called by the garbage collector just before an object is reclaimed. However, their execution is not guaranteed to happen at a specific time, or at all. This makes them unsuitable for releasing critical resources like file handles or database connections. The primary pitfall is their non-deterministic nature. The preferred pattern is to use explicit resource management, like the `try-with-resources` statement in Java or the `using` statement in C#.',
        explanation: 'Relying on finalizers for resource cleanup is a common anti-pattern.'
    },
    {
        id: 449,
        testId: 8,
        difficulty: 'expert',
        question: 'Explain the difference between "concurrency" and "parallelism".',
        type: 'subjective',
        answer: 'Concurrency is about dealing with multiple things at once, by interleaving execution. A single CPU core can be concurrent by switching between tasks. Parallelism is about doing multiple things at the same time, which requires multiple CPU cores. An application can be concurrent without being parallel.',
        explanation: 'Node.js is a concurrent (via the event loop) but not parallel (it is single-threaded) environment by default.'
    },
    {
        id: 450,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "Log-Structured Merge-Tree" (LSM-Tree)?',
        type: 'subjective',
        answer: 'An LSM-Tree is a data structure optimized for write-heavy workloads. It works by appending all writes to an in-memory table (memtable). When this is full, it is flushed to disk as a sorted, immutable file (SSTable). In the background, these SSTables are periodically merged and compacted. This design avoids slow random disk writes, providing very high write throughput at the cost of more complex reads.',
        explanation: 'This is used in databases like Cassandra and RocksDB.'
    },
    {
        id: 451,
        testId: 8,
        difficulty: 'expert',
        question: 'What is "Event Sourcing"?',
        type: 'subjective',
        answer: 'Event Sourcing is an architectural pattern where all changes to application state are stored as a sequence of immutable events, rather than just storing the current state. The current state can be reconstructed by replaying the events. This provides a full audit log, allows for temporal queries, and simplifies debugging.',
        explanation: 'It is often used in conjunction with the CQRS pattern.'
    },
    {
        id: 452,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "B-Tree" and why is it used for database indexes?',
        type: 'subjective',
        answer: 'A B-Tree is a self-balancing tree data structure that keeps data sorted and allows for searches, sequential access, insertions, and deletions in logarithmic time. Unlike binary search trees, B-Trees have a high fanout (many children per node), which makes them optimized for systems that read and write large blocks of data, like disk-based databases. This structure minimizes the number of disk reads required to find a piece of data.',
        explanation: 'This is the most common data structure for implementing indexes in relational databases.'
    },
    {
        id: 453,
        testId: 8,
        difficulty: 'expert',
        question: 'What is the "Strangler Fig" pattern?',
        type: 'subjective',
        answer: 'It is a pattern for incrementally migrating a legacy monolithic application to a new architecture (like microservices). You create a facade that intercepts requests, routing them to either the monolith or new services. Over time, functionality is "strangled" out of the monolith and replaced, until the monolith can be retired.',
        explanation: 'This allows for a gradual and lower-risk migration compared to a "big bang" rewrite.'
    },
    {
        id: 454,
        testId: 8,
        difficulty: 'expert',
        question: 'What is a "race condition"?',
        type: 'subjective',
        answer: 'A race condition is an error that occurs when the behavior of a system depends on the unpredictable sequence of concurrent events. It happens when multiple threads or processes access shared data, and the final result depends on the order in which they are processed. It can be prevented with synchronization mechanisms like locks.',
        explanation: 'These are notoriously difficult bugs to find and reproduce.'
    },
    // Test 9: 45 Questions (27 MCQ, 18 Subjective)
    {
        id: 455,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "CRDT" (Conflict-free Replicated Data Type)?',
        type: 'mcq',
        options: ['A type of database', 'A data structure where replicas can be updated independently and inconsistencies can always be mathematically resolved without coordination', 'An encryption algorithm', 'A sorting algorithm'],
        answer: 'A data structure where replicas can be updated independently and inconsistencies can always be mathematically resolved without coordination',
        explanation: 'CRDTs are crucial for building eventually consistent, collaborative real-time applications like Google Docs.'
    },
    {
        id: 456,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "consistent hashing" and what problem does it solve?',
        type: 'mcq',
        options: ['A hashing algorithm that always produces the same output', 'A hashing technique where adding or removing a server in a cluster minimizes the number of keys that need to be remapped', 'A password hashing scheme', 'A type of encryption'],
        answer: 'A hashing technique where adding or removing a server in a cluster minimizes the number of keys that need to be remapped',
        explanation: 'This is crucial for building scalable distributed caches and databases, as it prevents a massive reshuffling of data when a node is added or removed.'
    },
    {
        id: 457,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the "publish-subscribe" (pub/sub) pattern?',
        type: 'mcq',
        options: ['A way to manage frontend state', 'A messaging pattern where publishers send messages to topics, and subscribers receive messages from those topics without direct knowledge of the publishers', 'A database replication method', 'A client-server request-response pattern'],
        answer: 'A messaging pattern where publishers send messages to topics, and subscribers receive messages from those topics without direct knowledge of the publishers',
        explanation: 'Pub/sub is a powerful pattern for decoupling services in an event-driven architecture.'
    },
    {
        id: 458,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "two-phase commit" (2PC) protocol?',
        type: 'mcq',
        options: ['A git workflow', 'A distributed algorithm to ensure all participants in a distributed transaction either commit or abort', 'A deployment strategy', 'A security protocol for APIs'],
        answer: 'A distributed algorithm to ensure all participants in a distributed transaction either commit or abort',
        explanation: 'While 2PC guarantees atomicity, it is a blocking protocol and not resilient to coordinator failure, which is why patterns like Saga are often preferred.'
    },
    {
        id: 459,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "tail call optimization"?',
        type: 'mcq',
        options: ['A way to optimize log file tails', 'An optimization where a compiler can execute a function call in a tail position without creating a new stack frame', 'A database query optimization', 'A frontend performance trick'],
        answer: 'An optimization where a compiler can execute a function call in a tail position without creating a new stack frame',
        explanation: 'This allows for recursive functions to use constant stack space, preventing stack overflows. It is a key feature of many functional programming languages.'
    },
    {
        id: 460,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "eBPF" (extended Berkeley Packet Filter)?',
        type: 'mcq',
        options: ['A network firewall', 'A technology allowing sandboxed programs to run in the Linux kernel for powerful networking, observability, and security', 'A file format', 'A packet filtering command-line tool'],
        answer: 'A technology allowing sandboxed programs to run in the Linux kernel for powerful networking, observability, and security',
        explanation: 'eBPF has revolutionized kernel-space programming, enabling dynamic and safe extensions to the operating system.'
    },
    {
        id: 461,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "TLA+"?',
        type: 'mcq',
        options: ['A programming language', 'A formal specification language used to design, model, and verify concurrent and distributed systems', 'A database', 'A networking protocol'],
        answer: 'A formal specification language used to design, model, and verify concurrent and distributed systems',
        explanation: 'TLA+ is used to find design flaws in complex algorithms and systems before they are built, as famously used by Amazon Web Services.'
    },
    {
        id: 462,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "daemon" process on a Linux/Unix system?',
        type: 'mcq',
        options: ['A malicious process', 'A process that runs in the background, not under the direct control of an interactive user', 'A short-lived process for a single task', 'A process that manages the user interface'],
        answer: 'A process that runs in the background, not under the direct control of an interactive user',
        explanation: 'Daemons are typically used to run services, such as web servers (httpd) or database servers (postgresd).'
    },
    {
        id: 463,
        testId: 9,
        difficulty: 'expert',
        question: 'What does "failing fast" mean in system design?',
        type: 'mcq',
        options: ['The system is designed to fail often', 'A principle that a system should immediately report any condition likely to indicate a failure', 'The system is not resilient', 'The system fails slowly over time'],
        answer: 'A principle that a system should immediately report any condition likely to indicate a failure',
        explanation: 'Failing fast prevents a system from continuing in a potentially corrupt state and makes debugging much easier.'
    },
    {
        id: 464,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the purpose of a "liveness probe" in Kubernetes?',
        type: 'mcq',
        options: ['To check if a node is alive', 'To check if a container is running, so Kubernetes knows when to restart it', 'To check if a service is ready to receive traffic', 'To probe for security vulnerabilities'],
        answer: 'To check if a container is running, so Kubernetes knows when to restart it',
        explanation: 'If the liveness probe fails, the kubelet kills the container, and the container is subjected to its restart policy.'
    },
    {
        id: 465,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "namespace" in programming languages or operating systems?',
        type: 'mcq',
        options: ['A fixed amount of memory', 'A container that provides a scope to identifiers (names of types, functions, variables) to avoid name collisions', 'A network address space', 'A security group'],
        answer: 'A container that provides a scope to identifiers (names of types, functions, variables) to avoid name collisions',
        explanation: 'Namespaces are fundamental for organizing code in large systems. Linux namespaces are also a core technology behind containers.'
    },
    {
        id: 466,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "Data-Oriented Programming"?',
        type: 'mcq',
        options: ['The same as Object-Oriented Programming', 'A programming paradigm that emphasizes the separation of code and data, using generic data structures and functions', 'A database design methodology', 'A language for querying data'],
        answer: 'A programming paradigm that emphasizes the separation of code and data, using generic data structures and functions',
        explanation: 'It contrasts with OOP, which emphasizes collocating code and data in objects. Languages like Clojure are data-oriented.'
    },
    {
        id: 467,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "denormalization" in database design?',
        type: 'mcq',
        options: ['The process of making the database less normal', 'A strategy to increase query performance by intentionally adding redundant data, avoiding costly JOINs', 'A security measure', 'A backup process'],
        answer: 'A strategy to increase query performance by intentionally adding redundant data, avoiding costly JOINs',
        explanation: 'Denormalization is a trade-off, sacrificing storage efficiency and some data integrity for read speed.'
    },
    {
        id: 468,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "Prometheus" in the context of monitoring?',
        type: 'mcq',
        options: ['A Greek titan', 'An open-source systems monitoring and alerting toolkit that collects metrics via a pull model over HTTP', 'A logging library', 'A distributed tracing system'],
        answer: 'An open-source systems monitoring and alerting toolkit that collects metrics via a pull model over HTTP',
        explanation: 'Prometheus is a very popular tool in the cloud-native ecosystem for collecting time-series data and is often used with Grafana for visualization.'
    },
    {
        id: 469,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "Canary Deployment"?',
        type: 'mcq',
        options: ['Deploying to a test environment', 'Deploying a new version to all users at once', 'Gradually routing a small percentage of traffic to a new version to monitor its health before a full rollout', 'Deploying only at night'],
        answer: 'Gradually routing a small percentage of traffic to a new version to monitor its health before a full rollout',
        explanation: 'This is a risk-mitigation strategy for rolling out new software versions.'
    },
    {
        id: 470,
        testId: 9,
        difficulty: 'expert',
        question: 'Which of the following describes a "sidecar" pattern?',
        type: 'mcq',
        options: ['A backup process', 'A separate process that runs alongside the main application to provide supporting features, often used for networking in a service mesh', 'A primary application container', 'A database replication strategy'],
        answer: 'A separate process that runs alongside the main application to provide supporting features, often used for networking in a service mesh',
        explanation: 'The sidecar pattern allows you to add functionality to an application without changing its code, such as logging or monitoring.'
    },
    {
        id: 471,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "optimistic concurrency control"?',
        type: 'mcq',
        options: ['A strategy that always assumes conflicts will happen', 'A strategy where you read a value, and before you write a new value, you check to see if the value has changed since you read it', 'A database locking mechanism', 'A network protocol'],
        answer: 'A strategy where you read a value, and before you write a new value, you check to see if the value has changed since you read it',
        explanation: 'This is often implemented with version numbers. It avoids the overhead of pessimistic locking when conflicts are rare.'
    },
    {
        id: 472,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "thundering herd" problem?',
        type: 'mcq',
        options: ['A network bandwidth issue', 'A situation where many threads waiting for an event are awakened, causing a spike in contention for a resource', 'A denial-of-service attack', 'A storage system failure'],
        answer: 'A situation where many threads waiting for an event are awakened, causing a spike in contention for a resource',
        explanation: 'This can severely degrade system performance and is a classic problem in high-concurrency system design.'
    },
    {
        id: 473,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the primary role of "etcd" in a Kubernetes cluster?',
        type: 'mcq',
        options: ['To run user containers', 'To serve as the consistent and highly-available key-value store for all cluster data', 'To manage networking between pods', 'To schedule pods onto nodes'],
        answer: 'To serve as the consistent and highly-available key-value store for all cluster data',
        explanation: '`etcd` is the source of truth for the entire Kubernetes cluster, storing its state and configuration.'
    },
    {
        id: 474,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "rolling update"?',
        type: 'mcq',
        options: ['Shutting down the old version and then starting the new one', 'Gradually replacing instances of the old version of an application with instances of the new version, one by one or in batches', 'Deploying the new version to a subset of users', 'Deploying only on a rolling basis, like every Friday'],
        answer: 'Gradually replacing instances of the old version of an application with instances of the new version, one by one or in batches',
        explanation: 'This allows for a zero-downtime deployment.'
    },
    {
        id: 475,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the "Twelve-Factor App" methodology for?',
        type: 'mcq',
        options: ['A specific tech stack', 'A set of best practices for building robust and scalable software-as-a-service applications', 'A book about UI/UX design', 'A frontend framework'],
        answer: 'A set of best practices for building robust and scalable software-as-a-service applications',
        explanation: 'Its principles include things like codebase, dependencies, config, and logs, designed for modern cloud platforms.'
    },
    {
        id: 476,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the purpose of the `Content-Security-Policy` (CSP) header?',
        type: 'mcq',
        options: ['To specify the content type', 'To control caching', 'To provide a whitelist of trusted content sources to mitigate cross-site scripting (XSS) attacks', 'To manage cookies'],
        answer: 'To provide a whitelist of trusted content sources to mitigate cross-site scripting (XSS) attacks',
        explanation: 'CSP is a powerful security layer that helps prevent the injection and execution of malicious scripts from untrusted sources.'
    },
    {
        id: 477,
        testId: 9,
        difficulty: 'expert',
        question: 'Which of these is a "pull-based" message broker?',
        type: 'mcq',
        options: ['WebSockets', 'Apache Kafka', 'Webhooks', 'Server-Sent Events'],
        answer: 'Apache Kafka',
        explanation: 'In a pull-based system like Kafka, the consumer is responsible for "pulling" messages from the broker, allowing the consumer to control its own consumption rate.'
    },
    {
        id: 478,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "readiness probe" in Kubernetes used for?',
        type: 'mcq',
        options: ['To check if a container is alive', 'To determine if a container is ready to start accepting traffic', 'To check for security issues', 'To restart a container'],
        answer: 'To determine if a container is ready to start accepting traffic',
        explanation: 'A pod is not added to a service\'s load balancer until its readiness probe succeeds, preventing traffic from being sent to a pod that is not ready.'
    },
    {
        id: 479,
        testId: 9,
        difficulty: 'expert',
        question: 'Which of the following is NOT a relational database?',
        type: 'mcq',
        options: ['MySQL', 'PostgreSQL', 'Cassandra', 'SQLite'],
        answer: 'Cassandra',
        explanation: 'Cassandra is a distributed NoSQL wide-column store, designed for high availability and scalability across many servers.'
    },
    {
        id: 480,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the "single responsibility principle"?',
        type: 'mcq',
        options: ['A class should have only one responsibility or reason to change', 'A function should only have one return statement', 'An application should only have one feature', 'A server should only run one process'],
        answer: 'A class should have only one responsibility or reason to change',
        explanation: 'This is the "S" in the SOLID principles of object-oriented design and helps create more maintainable and modular code.'
    },
    {
        id: 481,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "polyglot persistence"?',
        type: 'mcq',
        options: ['Storing data in multiple languages', 'Using multiple data storage technologies for different parts of an application', 'A single database that supports multiple query languages', 'An encrypted database'],
        answer: 'Using multiple data storage technologies for different parts of an application',
        explanation: 'This means choosing the right database for the right job, e.g., using a relational DB for transactions, a document DB for catalogs, and a graph DB for social networks.'
    },
    {
        id: 482,
        testId: 9,
        difficulty: 'expert',
        question: 'Explain what happens during a TLS handshake.',
        type: 'subjective',
        answer: 'The TLS handshake is a process to establish a secure communication channel. It involves: 1) Client Hello: client proposes ciphers. 2) Server Hello: server chooses a cipher and sends its public certificate. 3) Client Verification & Key Exchange: client verifies the certificate and generates a symmetric session key, which it encrypts with the server\'s public key and sends back. 4) Secure Communication: Both parties now use the symmetric session key to encrypt all further communication.',
        explanation: 'This ensures confidentiality, integrity, and authenticity for the HTTPS connection.'
    },
    {
        id: 483,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the "dependency inversion principle"?',
        type: 'subjective',
        answer: 'This principle states that high-level modules should not depend on low-level modules; both should depend on abstractions. Also, abstractions should not depend on details; details should depend on abstractions. This decouples modules and makes the system more flexible and easier to change, often implemented via dependency injection.',
        explanation: 'This is the "D" in the SOLID principles and is key to building loosely coupled systems.'
    },
    {
        id: 484,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "distributed lock manager" (e.g., ZooKeeper, etcd) and what problem does it solve?',
        type: 'subjective',
        answer: 'A distributed lock manager is a service that provides reliable distributed locking capabilities. It solves the problem of ensuring mutual exclusion for a shared resource across multiple processes running on different machines. It is used to prevent race conditions and ensure data consistency in distributed systems.',
        explanation: 'Implementing a reliable distributed lock is a complex problem that these tools are designed to solve.'
    },
    {
        id: 485,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "gossip protocol"?',
        type: 'subjective',
        answer: 'A gossip protocol is a procedure or process of computer peer-to-peer communication that is based on the way epidemics spread. A node periodically sends information to a set of random other nodes, and those nodes then do the same. It is a highly scalable and fault-tolerant way to disseminate information through a distributed system.',
        explanation: 'It is used in systems like Cassandra for discovering cluster state.'
    },
    {
        id: 486,
        testId: 9,
        difficulty: 'expert',
        question: 'What are the trade-offs between "short polling", "long polling", and "WebSockets"?',
        type: 'subjective',
        answer: 'Short polling involves the client repeatedly requesting data from the server at a fixed interval, which is inefficient. Long polling is where the client makes a request, and the server holds it open until it has data, which is better but still has overhead. WebSockets provide a true, persistent, bidirectional communication channel over a single TCP connection, which is the most efficient for real-time applications but is a more complex protocol.',
        explanation: 'The choice depends on the real-time requirements and complexity you are willing to manage.'
    },
    {
        id: 487,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "sidecar" pattern?',
        type: 'subjective',
        answer: 'The sidecar pattern involves deploying a helper container alongside the main application container in a pod. This sidecar provides supporting features, such as logging, monitoring, or networking. For example, in a service mesh, a sidecar proxy intercepts all network traffic. This allows you to add functionality without changing the application code.',
        explanation: 'This is a fundamental pattern in cloud-native architectures.'
    },
    {
        id: 488,
        testId: 9,
        difficulty: 'expert',
        question: 'Explain what an "API Gateway" is and its role in a microservices architecture.',
        type: 'subjective',
        answer: 'An API Gateway is a server that acts as a single entry point into a system. In a microservices architecture, it routes requests to the appropriate backend service, and can also handle cross-cutting concerns like authentication, rate limiting, and request logging. This simplifies the client and allows the backend services to focus on their core logic.',
        explanation: 'It is a crucial component for managing complexity in a microservices environment.'
    },
    {
        id: 489,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the "CAP theorem"?',
        type: 'subjective',
        answer: 'The CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency (every read receives the most recent write or an error), Availability (every request receives a non-error response), and Partition Tolerance (the system continues to operate despite network partitions).',
        explanation: 'In reality, partition tolerance is a must, so the trade-off is between consistency and availability.'
    },
    {
        id: 490,
        testId: 9,
        difficulty: 'expert',
        question: 'How does "blue-green deployment" work?',
        type: 'subjective',
        answer: 'This is a release strategy that reduces downtime by running two identical production environments: "Blue" (live) and "Green" (new version). You deploy and test the new version in the Green environment. Once it is ready, you switch the router to direct all traffic to Green. This allows for instant rollback (switch back to Blue) if issues are found.',
        explanation: 'The main drawback is the cost of maintaining double the infrastructure.'
    },
    {
        id: 491,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the "event loop" in Node.js?',
        type: 'subjective',
        answer: 'The event loop is what allows Node.js to perform non-blocking I/O operations, despite JavaScript being single-threaded. It is a loop that picks up tasks from a queue (e.g., callbacks from completed I/O operations) and pushes them onto the call stack for execution, but only when the call stack is empty. This allows the single thread to handle many concurrent operations.',
        explanation: 'This is the core of Node.js\'s concurrency model.'
    },
    {
        id: 492,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "backpressure"?',
        type: 'subjective',
        answer: 'In data streaming, backpressure is a flow control mechanism where a data consumer can signal to a producer to slow down or stop sending data because it is overwhelmed. This prevents buffer overflows and system crashes. It is a crucial feature for building resilient asynchronous systems.',
        explanation: 'It allows the system to gracefully handle mismatched production and consumption rates.'
    },
    {
        id: 493,
        testId: 9,
        difficulty: 'expert',
        question: 'What is the "Saga" pattern?',
        type: 'subjective',
        answer: 'The Saga pattern is a way to manage data consistency across microservices in a distributed transaction. It is a sequence of local transactions where each one updates a single service and publishes an event to trigger the next. If a transaction fails, the saga executes compensating transactions to undo the preceding changes.',
        explanation: 'It is an event-driven approach to achieving transactional semantics without a central coordinator.'
    },
    {
        id: 494,
        testId: 9,
        difficulty: 'expert',
        question: 'What are the main differences between TCP and UDP?',
        type: 'subjective',
        answer: 'TCP is a connection-oriented protocol that provides reliable, ordered delivery of a stream of bytes. UDP is a connectionless protocol that is faster but does not provide any reliability or ordering guarantees. TCP is for services like web browsing and email; UDP is for services like video streaming and online gaming.',
        explanation: 'This is a fundamental networking concept.'
    },
    {
        id: 495,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "Infrastructure as Code" (IaC)?',
        type: 'subjective',
        answer: 'IaC is the practice of managing and provisioning infrastructure (servers, networks, etc.) through machine-readable definition files, rather than manual configuration. This allows infrastructure to be versioned, tested, and automated like application code. Tools like Terraform and CloudFormation are used for IaC.',
        explanation: 'This brings the discipline of software development to infrastructure management.'
    },
    {
        id: 496,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "race condition"?',
        type: 'subjective',
        answer: 'A race condition is an error that occurs when the behavior of a system depends on the unpredictable sequence of concurrent events. It happens when multiple threads or processes access shared data, and the final result depends on the order in which they are processed. It can be prevented with synchronization mechanisms like locks.',
        explanation: 'These are notoriously difficult bugs to find and reproduce.'
    },
    {
        id: 497,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "observability"?',
        type: 'subjective',
        answer: 'Observability is the ability to measure a system\'s internal states from its external outputs. It goes beyond monitoring to provide the ability to ask arbitrary questions about the system\'s behavior. The three pillars of observability are logs, metrics, and distributed traces.',
        explanation: 'It is crucial for understanding and debugging complex distributed systems.'
    },
    {
        id: 498,
        testId: 9,
        difficulty: 'expert',
        question: 'What is a "container orchestrator"?',
        type: 'subjective',
        answer: 'A container orchestrator (like Kubernetes) is a tool that automates the deployment, scaling, and management of containerized applications. It handles tasks like scheduling containers onto nodes, managing networking, and ensuring the desired state of the application is maintained.',
        explanation: 'Kubernetes is the de facto standard for container orchestration.'
    },
    {
        id: 499,
        testId: 9,
        difficulty: 'expert',
        question: 'What is "CI/CD"?',
        type: 'subjective',
        answer: 'CI/CD stands for Continuous Integration and Continuous Deployment/Delivery. CI is the practice of automatically building and testing code every time a developer commits a change. CD is the practice of automatically deploying every passing build to an environment. It is a core practice of modern DevOps.',
        explanation: 'CI/CD pipelines automate the software release process, enabling faster and more reliable deployments.'
    },
    // Test 10: 50 Questions (30 MCQ, 20 Subjective)
    {
        id: 500,
        testId: 10,
        difficulty: 'expert',
        question: 'Which of the following best describes "eventual consistency"?',
        type: 'mcq',
        options: ['The system is always strongly consistent', 'If no new updates are made to a data item, all replicas will eventually converge to the same value', 'It is a security model', 'It guarantees that all reads will see the latest write'],
        answer: 'If no new updates are made to a data item, all replicas will eventually converge to the same value',
        explanation: 'This is a key consistency model for highly available distributed systems that favors availability over strong consistency, as per the CAP theorem.'
    },
    {
        id: 501,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the "Raft" consensus algorithm designed to be?',
        type: 'mcq',
        options: ['Faster than Paxos', 'More secure than Paxos', 'More understandable and easier to implement than Paxos', 'A leaderless algorithm'],
        answer: 'More understandable and easier to implement than Paxos',
        explanation: 'Raft was explicitly designed for understandability to make it more accessible for building real-world systems, while providing the same fault-tolerance guarantees as Paxos.'
    },
    {
        id: 502,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "sidecar" pattern in the context of container orchestration?',
        type: 'mcq',
        options: ['A backup container', 'A helper container deployed alongside the main application container to provide auxiliary functions like logging or networking', 'A primary application container', 'A database replication strategy'],
        answer: 'A helper container deployed alongside the main application container to provide auxiliary functions like logging or networking',
        explanation: 'The sidecar pattern allows for extending and enhancing an application without touching its code, a core concept in service meshes.'
    },
    {
        id: 503,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "Log-Structured Merge-Tree" (LSM-Tree) primarily optimized for?',
        type: 'mcq',
        options: ['High read throughput', 'High write throughput', 'Low memory usage', 'Strong consistency'],
        answer: 'High write throughput',
        explanation: 'LSM-Trees avoid random disk writes by appending writes to an in-memory table and flushing to sorted files, making them ideal for write-heavy workloads.'
    },
    {
        id: 504,
        testId: 10,
        difficulty: 'expert',
        question: 'Which of the following is NOT one of the three pillars of observability?',
        type: 'mcq',
        options: ['Logs', 'Metrics', 'Traces', 'Alerts'],
        answer: 'Alerts',
        explanation: 'Alerts are an outcome or action taken based on observability data (logs, metrics, traces), but are not considered one of the foundational pillars themselves.'
    },
    {
        id: 505,
        testId: 10,
        difficulty: 'expert',
        question: 'In a "blue-green deployment", what happens during a rollback?',
        type: 'mcq',
        options: ['The new (green) environment is patched live', 'The router is switched back to the old (blue) environment', 'A new deployment is triggered immediately', 'The database is restored from a backup'],
        answer: 'The router is switched back to the old (blue) environment',
        explanation: 'The ability to perform a near-instant and low-risk rollback by simply redirecting traffic is a key advantage of the blue-green strategy.'
    },
    {
        id: 506,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the main function of an "API Gateway" in a microservices architecture?',
        type: 'mcq',
        options: ['To store API documentation', 'To run the business logic of the services', 'To act as a single entry point, handling routing, authentication, and other cross-cutting concerns', 'To manage the database connections'],
        answer: 'To act as a single entry point, handling routing, authentication, and other cross-cutting concerns',
        explanation: 'The API Gateway simplifies the client-side code and allows backend services to focus on their core responsibilities.'
    },
    {
        id: 507,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "gossip protocol" used for in distributed systems?',
        type: 'mcq',
        options: ['To send direct messages between two nodes', 'A scalable and fault-tolerant way to disseminate information (like cluster state) to all nodes', 'A security protocol for encrypting messages', 'A transactional protocol'],
        answer: 'A scalable and fault-tolerant way to disseminate information (like cluster state) to all nodes',
        explanation: 'In a gossip protocol, each node periodically sends information to a set of random other nodes, mimicking the spread of a rumor.'
    },
    {
        id: 508,
        testId: 10,
        difficulty: 'expert',
        question: 'What does the "I" in the SOLID principles stand for?',
        type: 'mcq',
        options: ['Interface Segregation Principle', 'Inheritance Principle', 'Immutability Principle', 'Integration Principle'],
        answer: 'Interface Segregation Principle',
        explanation: 'This principle states that no client should be forced to depend on methods it does not use, advocating for smaller, more specific interfaces.'
    },
    {
        id: 509,
        testId: 10,
        difficulty: 'expert',
        question: 'Which of these is a characteristic of "pessimistic locking"?',
        type: 'mcq',
        options: ['It assumes conflicts are rare', 'It acquires a lock on a resource before working with it, blocking other transactions', 'It checks for conflicts only at commit time', 'It is generally more scalable than optimistic locking'],
        answer: 'It acquires a lock on a resource before working with it, blocking other transactions',
        explanation: 'Pessimistic locking is the "ask for permission" approach to concurrency control.'
    },
    {
        id: 510,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "idempotency"?',
        type: 'mcq',
        options: ['A security feature', 'The property of an operation that it can be applied multiple times without changing the result beyond the initial application', 'A performance metric', 'A database indexing technique'],
        answer: 'The property of an operation that it can be applied multiple times without changing the result beyond the initial application',
        explanation: 'In APIs, methods like GET, PUT, and DELETE are idempotent, which is crucial for building reliable systems that can retry requests.'
    },
    {
        id: 511,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "load balancer"?',
        type: 'mcq',
        options: ['A tool to balance server weight', 'A device or software that distributes traffic across multiple backend servers', 'A database feature for balancing queries', 'A frontend caching mechanism'],
        answer: 'A device or software that distributes traffic across multiple backend servers',
        explanation: 'Load balancers are essential for achieving high availability, scalability, and resilience in modern applications.'
    },
    {
        id: 512,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "readiness probe" in Kubernetes?',
        type: 'mcq',
        options: ['To check if a container is alive and should be restarted', 'To determine if a container is ready to start accepting traffic', 'To check for security vulnerabilities', 'To measure resource usage'],
        answer: 'To determine if a container is ready to start accepting traffic',
        explanation: 'A pod is not added to a service\'s load balancing pool until its readiness probe succeeds, preventing traffic from being sent to a pod that is starting up.'
    },
    {
        id: 513,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "polyglot persistence"?',
        type: 'mcq',
        options: ['Storing data in multiple languages', 'The concept of using multiple data storage technologies for different parts of an application to fit varying data requirements', 'A single database that supports multiple query languages', 'An encrypted database'],
        answer: 'The concept of using multiple data storage technologies for different parts of an application to fit varying data requirements',
        explanation: 'This means choosing the right database for the right job, rather than using a single database for all purposes.'
    },
    {
        id: 514,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the main benefit of "Infrastructure as Code" (IaC)?',
        type: 'mcq',
        options: ['It eliminates the need for servers', 'It allows infrastructure to be managed with the same tools as application code, enabling versioning, automation, and repeatability', 'It makes infrastructure cheaper', 'It is a graphical user interface for managing servers'],
        answer: 'It allows infrastructure to be managed with the same tools as application code, enabling versioning, automation, and repeatability',
        explanation: 'IaC tools like Terraform bring the discipline of software development to infrastructure management.'
    },
    {
        id: 515,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "database deadlock"?',
        type: 'mcq',
        options: ['A database crash', 'A situation where two or more transactions are waiting for each other to release locks, creating a circular dependency', 'A security exploit', 'A full database disk'],
        answer: 'A situation where two or more transactions are waiting for each other to release locks, creating a circular dependency',
        explanation: 'Databases have mechanisms to detect and resolve deadlocks, usually by aborting one of the transactions.'
    },
    {
        id: 516,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "backpressure"?',
        type: 'mcq',
        options: ['A security feature', 'A flow control mechanism where a data consumer can signal to a producer to slow down', 'A type of data compression', 'A network routing protocol'],
        answer: 'A flow control mechanism where a data consumer can signal to a producer to slow down',
        explanation: 'This prevents buffer overflows and system crashes when the rate of production exceeds the rate of consumption.'
    },
    {
        id: 517,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "Test-Driven Development" (TDD)?',
        type: 'mcq',
        options: ['A debugging method', 'A development process that follows a "Red, Green, Refactor" cycle, starting with a failing test', 'A type of performance testing', 'A manual testing methodology'],
        answer: 'A development process that follows a "Red, Green, Refactor" cycle, starting with a failing test',
        explanation: 'TDD helps ensure high test coverage and leads to more robust, modular code.'
    },
    {
        id: 518,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "sharding"?',
        type: 'mcq',
        options: ['A way to encrypt data', 'A type of horizontal database partitioning where data is spread across multiple servers', 'A backup strategy', 'A query optimization technique'],
        answer: 'A type of horizontal database partitioning where data is spread across multiple servers',
        explanation: 'Sharding is a common technique for scaling out databases to handle massive amounts of data and traffic.'
    },
    {
        id: 519,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a primary use case for "Server-Sent Events" (SSE)?',
        type: 'mcq',
        options: ['Client-to-client communication', 'Bidirectional communication for online gaming', 'Unidirectional, real-time updates from a server to a client, like notifications or live stock tickers', 'Uploading large files'],
        answer: 'Unidirectional, real-time updates from a server to a client, like notifications or live stock tickers',
        explanation: 'SSE is simpler than WebSockets and operates over a standard HTTP connection, making it a good choice when only server-to-client communication is needed.'
    },
    {
        id: 520,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "rolling update"?',
        type: 'mcq',
        options: ['Shutting down the old version and then starting the new one', 'Gradually replacing instances of the old version of an application with instances of the new version', 'Deploying the new version to a subset of users', 'Deploying only on a rolling basis, like every Friday'],
        answer: 'Gradually replacing instances of the old version of an application with instances of the new version',
        explanation: 'This allows for a zero-downtime deployment, though rollback can be more complex than with a blue-green deployment.'
    },
    {
        id: 521,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the "single responsibility principle"?',
        type: 'mcq',
        options: ['A class should have only one responsibility or reason to change', 'A function should only have one return statement', 'An application should only have one feature', 'A server should only run one process'],
        answer: 'A class should have only one responsibility or reason to change',
        explanation: 'This is the "S" in the SOLID principles of object-oriented design and helps create more maintainable and modular code.'
    },
    {
        id: 522,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "polyglot persistence"?',
        type: 'mcq',
        options: ['Storing data in multiple languages', 'Using multiple data storage technologies for different parts of an application', 'A single database that supports multiple query languages', 'An encrypted database'],
        answer: 'Using multiple data storage technologies for different parts of an application',
        explanation: 'This means choosing the right database for the right job, e.g., using a relational DB for transactions and a document DB for catalogs.'
    },
    {
        id: 523,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "circuit breaker" pattern?',
        type: 'mcq',
        options: ['A hardware device', 'A design pattern to detect failures and prevent a failing service from being repeatedly called', 'A security pattern', 'A UI pattern'],
        answer: 'A design pattern to detect failures and prevent a failing service from being repeatedly called',
        explanation: 'After a certain number of failed calls, the circuit breaker "trips" and subsequent calls fail immediately, giving the failing service time to recover.'
    },
    {
        id: 524,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the purpose of the `cluster` module in Node.js?',
        type: 'mcq',
        options: ['To connect to a database cluster', 'To allow a Node.js application to take advantage of multi-core systems by creating child processes', 'To manage microservice clusters', 'To perform clustering analysis in machine learning'],
        answer: 'To allow a Node.js application to take advantage of multi-core systems by creating child processes',
        explanation: 'The cluster module allows a master process to fork worker processes, enabling a single Node.js application to scale across multiple CPU cores.'
    },
    {
        id: 525,
        testId: 10,
        difficulty: 'expert',
        question: 'What is OAuth 2.0 primarily used for?',
        type: 'mcq',
        options: ['Authentication (verifying identity)', 'Encryption', 'Authorization (delegating access)', 'Session management'],
        answer: 'Authorization (delegating access)',
        explanation: 'OAuth 2.0 is a framework for allowing a third-party application to get limited access to a user\'s resources without exposing the user\'s credentials.'
    },
    {
        id: 526,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the role of a "Web Server" like NGINX or Apache?',
        type: 'mcq',
        options: ['To run backend application logic exclusively', 'To handle incoming HTTP requests from clients and serve content, often static files, or act as a reverse proxy', 'To manage databases', 'To execute JavaScript on the client-side'],
        answer: 'To handle incoming HTTP requests from clients and serve content, often static files, or act as a reverse proxy',
        explanation: 'Web servers are the entry point for most web traffic and play a crucial role in the backend ecosystem.'
    },
    {
        id: 527,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the main advantage of a document database (like MongoDB) over a relational database (like PostgreSQL)?',
        type: 'mcq',
        options: ['Support for ACID transactions', 'Ability to perform complex JOINs', 'Flexible schema and horizontal scalability', 'Better for storing images and videos'],
        answer: 'Flexible schema and horizontal scalability',
        explanation: 'Document databases allow for nested data structures and are generally easier to scale out across multiple servers.'
    },
    {
        id: 528,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "Infrastructure as Code" (IaC)?',
        type: 'mcq',
        options: ['Writing application code for infrastructure', 'Managing and provisioning infrastructure through machine-readable definition files, rather than manual configuration', 'A type of low-level programming', 'A diagramming tool'],
        answer: 'Managing and provisioning infrastructure through machine-readable definition files, rather than manual configuration',
        explanation: 'Tools like Terraform and CloudFormation allow infrastructure to be versioned and automated like application code.'
    },
    {
        id: 529,
        testId: 10,
        difficulty: 'expert',
        question: 'Which of these is a primary benefit of using a message broker like RabbitMQ or Kafka?',
        type: 'mcq',
        options: ['Synchronous communication', 'Decoupling services and enabling asynchronous communication', 'Storing user session data', 'Serving static files'],
        answer: 'Decoupling services and enabling asynchronous communication',
        explanation: 'Message brokers allow services to communicate without being directly connected, improving scalability and resilience.'
    },
    {
        id: 530,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "distributed lock"?',
        type: 'subjective',
        answer: 'A distributed lock is a synchronization primitive used in a distributed computing environment to ensure that only one process can access a shared resource at a time, even when those processes are running on different machines. Implementing a reliable distributed lock is complex and often requires a coordination service like ZooKeeper, etcd, or a correctly configured Redis instance.',
        explanation: 'It prevents race conditions in a distributed system.'
    },
    {
        id: 531,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "Canary Release" and why is it used?',
        type: 'subjective',
        answer: 'A canary release is a deployment strategy where a new version of an application is gradually rolled out to a small subset of users before making it available to everyone. This allows you to monitor the new version for errors or performance issues in a production environment with limited impact. If issues are detected, the release can be rolled back easily. It is a risk mitigation technique.',
        explanation: 'The name comes from the "canary in a coal mine" concept.'
    },
    {
        id: 532,
        testId: 10,
        difficulty: 'expert',
        question: 'Explain the "Saga" design pattern.',
        type: 'subjective',
        answer: 'The Saga pattern is a way to manage data consistency across microservices in a distributed transaction. It is a sequence of local transactions where each one updates a single service and publishes an event to trigger the next. If a local transaction fails, the saga executes a series of compensating transactions to undo the preceding changes and restore consistency.',
        explanation: 'It is an event-driven approach to achieving transactional semantics without a central coordinator like in 2PC.'
    },
    {
        id: 533,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the "CAP Theorem" and what are its implications for system design?',
        type: 'subjective',
        answer: 'The CAP theorem states that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition Tolerance. Since network partitions are a reality in distributed systems, a system must choose between being consistent (CP) or being available (AP) during a partition. This is a fundamental trade-off in distributed system design.',
        explanation: 'For example, a relational database cluster often chooses consistency, while a NoSQL database like Cassandra often chooses availability.'
    },
    {
        id: 534,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "vector clock" and what problem does it solve?',
        type: 'subjective',
        answer: 'A vector clock is a data structure used in distributed systems to determine the partial causal ordering of events. Each process in the system maintains a vector of logical clocks, one for each process. This allows the system to determine if one event "happened before" another, or if they are concurrent. It solves the problem of detecting causality violations and resolving conflicts in eventually consistent systems.',
        explanation: 'They are more powerful than simple Lamport timestamps for understanding causality.'
    },
    {
        id: 535,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "CQRS" (Command Query Responsibility Segregation)?',
        type: 'subjective',
        answer: 'CQRS is an architectural pattern that separates the models used for updating data (Commands) from the models used for reading data (Queries). This allows the read and write sides of an application to be independently optimized and scaled. For example, the write model might be a normalized relational schema, while the read model is a denormalized view optimized for fast queries.',
        explanation: 'It is often used with Event Sourcing to build highly scalable systems.'
    },
    {
        id: 536,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the difference between optimistic and pessimistic locking?',
        type: 'subjective',
        answer: 'Pessimistic locking assumes conflicts are frequent and prevents them by acquiring a lock on a resource before a transaction begins working with it. Optimistic locking assumes conflicts are rare; it allows transactions to proceed without locks but checks for conflicts (e.g., via a version number) at commit time. If a conflict is detected, the transaction is rolled back.',
        explanation: 'Optimistic control is generally more scalable as it is non-blocking.'
    },
    {
        id: 537,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the purpose of "gRPC"?',
        type: 'subjective',
        answer: 'gRPC is a high-performance Remote Procedure Call (RPC) framework. Its purpose is to enable efficient communication between services, particularly in a microservices architecture. It uses Protocol Buffers for efficient binary serialization and HTTP/2 for features like multiplexing, making it faster and more network-friendly than traditional REST+JSON APIs.',
        explanation: 'It also provides strong typing and code generation, which can improve developer productivity.'
    },
    {
        id: 538,
        testId: 10,
        difficulty: 'expert',
        question: 'Explain what a "service mesh" like Istio does.',
        type: 'subjective',
        answer: 'A service mesh is a dedicated infrastructure layer for managing service-to-service communication. It works by injecting a "sidecar" proxy alongside each service. This proxy intercepts all network traffic, handling concerns like service discovery, load balancing, security (mTLS), rate limiting, and observability (metrics, traces). This abstracts complex networking logic away from the application code.',
        explanation: 'It provides a uniform way to secure, connect, and monitor microservices.'
    },
    {
        id: 539,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "Byzantine Fault"?',
        type: 'subjective',
        answer: 'A Byzantine Fault is any fault where a component in a distributed system can exhibit arbitrary and malicious behavior, including sending conflicting information to different observers. This is the most difficult class of failure to handle, and systems that can tolerate it are called Byzantine Fault Tolerant (BFT).',
        explanation: 'This is a core problem in designing trustless systems like public blockchains.'
    },
    {
        id: 540,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "event sourcing"?',
        type: 'subjective',
        answer: 'Event Sourcing is an architectural pattern where all changes to application state are stored as a sequence of immutable events. Instead of storing just the current state of a domain object, you store every event that has ever happened to it. The current state can be reconstructed at any time by replaying the events. This provides a full, reliable audit log and enables powerful analytical capabilities.',
        explanation: 'This is a powerful pattern for complex domains, often used with CQRS.'
    },
    {
        id: 541,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "consistent hashing"?',
        type: 'subjective',
        answer: 'Consistent hashing is a special kind of hashing where adding or removing a node (e.g., a cache server) from a cluster minimizes the number of keys that need to be remapped. Instead of a standard modulo operation, keys are mapped to a circular hash space, and each server is responsible for a range on that circle. This prevents a massive, system-wide reshuffling of data when the cluster size changes.',
        explanation: 'It is a key algorithm for building scalable distributed systems like caches and databases.'
    },
    {
        id: 542,
        testId: 10,
        difficulty: 'expert',
        question: 'Explain what a "Log-Structured Merge-Tree" (LSM-Tree) is.',
        type: 'subjective',
        answer: 'An LSM-Tree is a data structure optimized for write-heavy workloads. It works by appending all writes to an in-memory table (memtable). When this is full, it is flushed to disk as a sorted, immutable file (SSTable). In the background, these SSTables are periodically merged and compacted to clean up old data and improve read performance. This design avoids slow random disk writes, providing very high write throughput.',
        explanation: 'It is used in many popular NoSQL databases like Cassandra and RocksDB.'
    },
    {
        id: 543,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "circuit breaker" design pattern?',
        type: 'subjective',
        answer: 'A circuit breaker is a design pattern used to detect failures and prevent a failing service from being repeatedly called. After a certain number of failed calls to a service, the circuit breaker "trips" and subsequent calls fail immediately for a period of time, without making a network request. This gives the failing service time to recover and prevents cascading failures in a distributed system.',
        explanation: 'It is a crucial pattern for building resilient microservices.'
    },
    {
        id: 544,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "polyglot persistence"?',
        type: 'subjective',
        answer: 'Polyglot persistence is the concept of using multiple data storage technologies for different parts of an application, based on the specific needs of each part. Instead of using a single general-purpose database for everything, you choose the right tool for the right job, for example, a relational database for transactions, a document database for a product catalog, and a graph database for a social network.',
        explanation: 'This approach is common in microservices architectures.'
    },
    {
        id: 545,
        testId: 10,
        difficulty: 'expert',
        question: 'What is the difference between a "process" and a "thread"?',
        type: 'subjective',
        answer: 'A process is an instance of a running program with its own isolated memory space. A thread is the smallest unit of execution within a process. A single process can have multiple threads, which share the same memory space. This makes communication between them faster but requires synchronization mechanisms (like locks) to prevent race conditions.',
        explanation: 'This is a fundamental concept in operating systems and concurrency.'
    },
    {
        id: 546,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "Infrastructure as Code" (IaC)?',
        type: 'subjective',
        answer: 'IaC is the practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. This allows infrastructure to be treated like software: it can be versioned, tested, and automatically deployed. Tools like Terraform, CloudFormation, and Ansible are used to implement IaC.',
        explanation: 'IaC is a core practice of modern DevOps.'
    },
    {
        id: 547,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "backpressure" in reactive systems?',
        type: 'subjective',
        answer: 'Backpressure is a flow control mechanism in asynchronous, streaming systems. It allows a consumer that is being overwhelmed with data to signal to the producer to slow down or temporarily stop sending data. This prevents the consumer\'s buffers from overflowing and the system from becoming unstable. It is a key feature for building resilient data pipelines.',
        explanation: 'It is a way for the system to self-regulate when production and consumption rates are mismatched.'
    },
    {
        id: 548,
        testId: 10,
        difficulty: 'expert',
        question: 'What is a "distributed trace"?',
        type: 'subjective',
        answer: 'A distributed trace tracks a single request as it flows through all the different services in a microservices architecture. It assigns a unique trace ID to the request and propagates it through each service call. This allows you to visualize the entire request path, identify performance bottlenecks, and debug errors that span multiple services. It is one of the three pillars of observability.',
        explanation: 'Tools like Jaeger and Zipkin are used for distributed tracing.'
    },
    {
        id: 549,
        testId: 10,
        difficulty: 'expert',
        question: 'What is "two-phase commit" (2PC)?',
        type: 'subjective',
        answer: '2PC is a distributed algorithm that coordinates all the processes that participate in a distributed atomic transaction on whether to commit or abort. It involves a "prepare" phase where all participants vote on whether they can commit, and a "commit" phase where the coordinator instructs them to either all commit or all roll back. It guarantees atomicity but is not resilient to coordinator failure.',
        explanation: 'It is a classic but often criticized algorithm for distributed transactions.'
    }
  ],
  'full-stack': [
    // Test 1: 5 Questions (3 MCQ, 2 Subjective)
    {
        id: 550,
        testId: 1,
        difficulty: 'easy',
        question: 'What does "full-stack" development mean?',
        type: 'mcq',
        options: ['Developing only the frontend', 'Developing only the backend', 'Developing both the frontend (client-side) and backend (server-side) of an application', 'A specific programming language'],
        answer: 'Developing both the frontend (client-side) and backend (server-side) of an application',
        explanation: 'A full-stack developer has skills to work on the entire technology stack, from the user interface to the database.'
    },
    {
        id: 551,
        testId: 1,
        difficulty: 'easy',
        question: 'Which of these is a common stack for full-stack development?',
        type: 'mcq',
        options: ['HTML, CSS, Photoshop', 'MERN (MongoDB, Express, React, Node.js)', 'Python and TensorFlow', 'Swift and Xcode'],
        answer: 'MERN (MongoDB, Express, React, Node.js)',
        explanation: 'MERN is a popular JavaScript-based stack covering the frontend, backend, and database.'
    },
    {
        id: 552,
        testId: 1,
        difficulty: 'easy',
        question: 'In a full-stack application, how does the frontend typically communicate with the backend?',
        type: 'mcq',
        options: ['Through direct memory access', 'By reading the server\'s file system', 'By making HTTP requests to an API', 'Through CSS properties'],
        answer: 'By making HTTP requests to an API',
        explanation: 'The frontend (client) makes API calls (e.g., GET, POST) to backend endpoints to fetch or send data.'
    },
    {
        id: 553,
        testId: 1,
        difficulty: 'easy',
        question: 'What is a REST API?',
        type: 'subjective',
        answer: 'A REST API (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications. It uses standard HTTP methods (like GET, POST, PUT, DELETE) to perform operations on resources, which are identified by URLs.',
        explanation: 'It is the most common way for frontends and backends to communicate in modern web applications.'
    },
    {
        id: 554,
        testId: 1,
        difficulty: 'easy',
        question: 'What is the role of a database in a full-stack application?',
        type: 'subjective',
        answer: 'The database is responsible for persistently storing, organizing, and retrieving the application\'s data. The backend server queries the database to get data to send to the frontend, or to store new data received from the frontend.',
        explanation: 'Without a database, an application cannot permanently store information like user accounts or posts.'
    },
    // Test 2: 10 Questions
    {
        id: 555,
        testId: 2,
        difficulty: 'easy',
        question: 'In the MERN stack, what is the role of Node.js?',
        type: 'mcq',
        options: ['The frontend framework', 'The database', 'The backend runtime environment', 'The styling language'],
        answer: 'The backend runtime environment',
        explanation: 'Node.js allows JavaScript to be run on the server, and Express.js is a framework built on top of it to create the backend API.'
    },
    {
        id: 556,
        testId: 2,
        difficulty: 'easy',
        question: 'What is the purpose of the `fetch` API in frontend JavaScript?',
        type: 'mcq',
        options: ['To style components', 'To make HTTP requests to a backend API', 'To manage application state', 'To define HTML structure'],
        answer: 'To make HTTP requests to a backend API',
        explanation: 'The `fetch` API is the modern, built-in way for frontend code to communicate with a server.'
    },
    {
        id: 557,
        testId: 2,
        difficulty: 'easy',
        question: 'What does "deployment" mean in a full-stack context?',
        type: 'mcq',
        options: ['Designing the application', 'Writing the code', 'The process of making the application available for use on a server', 'Debugging the code'],
        answer: 'The process of making the application available for use on a server',
        explanation: 'Deployment involves getting the frontend and backend code onto a hosting platform where users can access it.'
    },
    {
        id: 558,
        testId: 2,
        difficulty: 'easy',
        question: 'Which part of a web application is responsible for user authentication?',
        type: 'mcq',
        options: ['Frontend', 'Backend', 'CSS', 'HTML'],
        answer: 'Backend',
        explanation: 'The backend is responsible for securely verifying user credentials (like username and password) against a database.'
    },
    {
        id: 559,
        testId: 2,
        difficulty: 'easy',
        question: 'What format is most commonly used for data exchange in modern APIs?',
        type: 'mcq',
        options: ['XML', 'HTML', 'CSV', 'JSON'],
        answer: 'JSON',
        explanation: 'JSON (JavaScript Object Notation) is a lightweight, human-readable format that is easy for machines to parse and generate.'
    },
    {
        id: 560,
        testId: 2,
        difficulty: 'easy',
        question: 'In the MERN stack, what is Express.js?',
        type: 'mcq',
        options: ['A database', 'A frontend library', 'A backend web application framework for Node.js', 'A testing tool'],
        answer: 'A backend web application framework for Node.js',
        explanation: 'Express provides a robust set of features for building web and mobile applications, including routing and middleware.'
    },
    {
        id: 561,
        testId: 2,
        difficulty: 'easy',
        question: 'Briefly explain the client-server model.',
        type: 'subjective',
        answer: 'The client-server model is a distributed application structure that partitions tasks between providers of a resource or service, called servers, and service requesters, called clients. In a web application, the client is typically the user\'s browser, and the server is where the backend code and database reside.',
        explanation: 'This is the fundamental architecture of the web.'
    },
    {
        id: 562,
        testId: 2,
        difficulty: 'easy',
        question: 'What is the difference between the frontend and the backend?',
        type: 'subjective',
        answer: 'The frontend is the part of the application that the user interacts with directly (the client-side), typically in a web browser. The backend is the server-side part of the application that handles business logic, database interactions, and authentication.',
        explanation: 'The frontend is what you see; the backend is what makes it work.'
    },
    {
        id: 563,
        testId: 2,
        difficulty: 'easy',
        question: 'Why is it important to validate user input on the backend, even if it\'s already validated on the frontend?',
        type: 'subjective',
        answer: 'Frontend validation is a good user experience, but it can be easily bypassed by a malicious user. Backend validation is crucial for security and data integrity, as it is the final authority on what data is allowed into the system.',
        explanation: 'Never trust data coming from the client.'
    },
    {
        id: 564,
        testId: 2,
        difficulty: 'easy',
        question: 'What is "CORS" (Cross-Origin Resource Sharing)?',
        type: 'subjective',
        answer: 'CORS is a browser security feature that restricts web pages from making requests to a different domain than the one that served the page. A backend server must be configured with specific CORS headers to allow a frontend from a different origin to access its API.',
        explanation: 'This is a common issue full-stack developers encounter when the frontend and backend are hosted on different domains.'
    }
  ],
  'next-js': [],
  java: [],
  python: [],
  mern: [],
  'c-plus-plus': [],
  devops: [],
  'data-science': [],
  'ai-ml': [],
  'cloud-computing': [],
  'mobile-development': [],
  cybersecurity: [],
};
