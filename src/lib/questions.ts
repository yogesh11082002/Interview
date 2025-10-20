
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
    // Test 1: 5 Questions (3 MCQ, 2 Subjective) - Easy
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
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        type: 'mcq',
        options: ['p {font-weight: bold;}', 'p {text-style: bold;}', '<p style="font-weight:bold;">', 'p {font-style: bold;}'],
        answer: 'p {font-weight: bold;}',
        explanation: 'The `font-weight` property is used to specify the weight or boldness of a font.'
    },
    {
        id: 3,
        testId: 1,
        difficulty: 'easy',
        question: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
        type: 'mcq',
        options: ['const', 'let', 'var', 'static'],
        answer: 'const',
        explanation: '`const` declares a block-scoped variable, but its value cannot be reassigned.'
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
    // Test 2: 10 Questions (6 MCQ, 4 Subjective) - Easy
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
        explanation: 'The <footer> element typically contains authorship information, copyright information, contact information, sitemap, back to top links, and related documents.'
    },
    {
        id: 11,
        testId: 2,
        difficulty: 'easy',
        question: "What does CSS stand for?",
        type: 'mcq',
        options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
        answer: 'Cascading Style Sheets',
        explanation: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.'
    },
    {
        id: 12,
        testId: 2,
        difficulty: 'easy',
        question: "Explain the difference between an `<h1>` and a `<h6>` tag in HTML.",
        type: 'subjective',
        answer: "Both are heading tags in HTML, but they represent different levels of importance. `<h1>` is the highest-level heading and should typically be used only once per page for the main title. `<h6>` is the lowest-level heading, representing the least important subheading. The tags create a hierarchy for content.",
        explanation: "Using heading tags correctly is important for both SEO and accessibility."
    },
    {
        id: 13,
        testId: 2,
        difficulty: 'easy',
        question: "What is the difference between `let` and `var` in JavaScript?",
        type: 'subjective',
        answer: "`var` is function-scoped, meaning it's available throughout the function it's declared in. `let` is block-scoped, meaning it's only available within the block (e.g., inside a for loop or if statement) it's declared in. Also, `var` variables are hoisted to the top of their scope, while `let` variables are not.",
        explanation: "`let` and `const` were introduced in ES6 to provide more predictable variable scoping than `var`."
    },
    {
        id: 14,
        testId: 2,
        difficulty: 'easy',
        question: "What is the purpose of the `href` attribute in an `<a>` tag?",
        type: 'subjective',
        answer: "The `href` attribute specifies the URL (Uniform Resource Locator) of the page the link goes to. When a user clicks on the hyperlink, the browser navigates to the address specified in the `href` attribute.",
        explanation: "It is the most important attribute of the `<a>` tag."
    },
    {
        id: 15,
        testId: 2,
        difficulty: 'easy',
        question: "In CSS, what is the difference between `padding` and `margin`?",
        type: 'subjective',
        answer: "`Padding` is the space between the content of an element and its border. `Margin` is the space outside the border, between the element and other elements around it. Padding is inside the box, while margin is outside the box.",
        explanation: "Understanding this is fundamental to controlling element spacing and layout."
    },
    // Test 3: 15 Questions (9 MCQ, 6 Subjective) - Medium
    {
        id: 16,
        testId: 3,
        difficulty: 'medium',
        question: "In the context of Flexbox, what does `justify-content` control?",
        type: 'mcq',
        options: ['Alignment along the cross axis', 'Alignment along the main axis', 'The spacing between flex lines', 'The size of the flex items'],
        answer: 'Alignment along the main axis',
        explanation: '`justify-content` defines how the browser distributes space between and around content items along the main-axis of a flex container.'
    },
    {
        id: 17,
        testId: 3,
        difficulty: 'medium',
        question: "Which of the following is a hook in React?",
        type: 'mcq',
        options: ['render()', 'useState()', 'componentDidMount()', 'constructor()'],
        answer: 'useState()',
        explanation: '`useState` is a React Hook that lets you add state to functional components. The others are part of class component lifecycle methods or syntax.'
    },
    {
        id: 18,
        testId: 3,
        difficulty: 'medium',
        question: "What is JSX?",
        type: 'mcq',
        options: ['A templating language for JavaScript', 'A syntax extension for JavaScript that looks like HTML', 'A CSS preprocessor', 'A database query language'],
        answer: 'A syntax extension for JavaScript that looks like HTML',
        explanation: "JSX allows developers to write HTML-like code within JavaScript, which is then compiled into standard JavaScript function calls by tools like Babel."
    },
    {
        id: 19,
        testId: 3,
        difficulty: 'medium',
        question: "What does the `...` spread syntax do in JavaScript?",
        type: 'mcq',
        options: ['It condenses an array into a single value', 'It expands an iterable (like an array or object) into individual elements', 'It is used for comments', 'It creates a new function'],
        answer: 'It expands an iterable (like an array or object) into individual elements',
        explanation: "The spread syntax is used to copy array or object properties, or to pass elements of an array as individual arguments to a function."
    },
    {
        id: 20,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of `useEffect` in React?",
        type: 'mcq',
        options: ['To manage component state', 'To handle side effects', 'To render JSX', 'To pass props'],
        answer: 'To handle side effects',
        explanation: "`useEffect` is a hook used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
    },
    {
        id: 21,
        testId: 3,
        difficulty: 'medium',
        question: "What are React Fragments used for?",
        type: 'mcq',
        options: ['A way to group a list of children without adding extra nodes to the DOM', 'A tool for debugging React components', 'A special type of React component', 'A lifecycle method'],
        answer: 'A way to group a list of children without adding extra nodes to the DOM',
        explanation: "Fragments, written as `<>...</>` or `<React.Fragment>...</React.Fragment>`, solve the problem of needing a single root element without adding an unnecessary div to the DOM."
    },
    {
        id: 22,
        testId: 3,
        difficulty: 'medium',
        question: "Which of the following is used for client-side routing in a standard React app (not Next.js)?",
        type: 'mcq',
        options: ['Node.js', 'Express.js', 'React Router', 'Next.js'],
        answer: 'React Router',
        explanation: "React Router is the most popular library for handling routing on the client side in a React application. Next.js has its own built-in file-based routing."
    },
    {
        id: 23,
        testId: 3,
        difficulty: 'medium',
        question: "What is tree shaking in the context of JavaScript bundlers?",
        type: 'mcq',
        options: ['A debugging technique', 'A process to eliminate dead code', 'A way to visualize the component tree', 'A code formatting tool'],
        answer: 'A process to eliminate dead code',
        explanation: "Tree shaking is a term for dead-code elimination. Bundlers like Webpack or Rollup analyze the import/export statements and remove unused code from the final bundle."
    },
    {
        id: 24,
        testId: 3,
        difficulty: 'medium',
        question: "What is `JSON.stringify()` used for?",
        type: 'mcq',
        options: ["To parse a JSON string into a JavaScript object", "To convert a JavaScript object into a JSON string", "To check if a string is valid JSON", "To string all values in a JSON object"],
        answer: "To convert a JavaScript object into a JSON string",
        explanation: "It serializes a JavaScript object or value into a JSON string, optionally replacing values or properties."
    },
    {
        id: 25,
        testId: 3,
        difficulty: 'medium',
        question: "What is the Virtual DOM?",
        type: 'subjective',
        answer: "The Virtual DOM (VDOM) is a programming concept where a virtual representation of a UI is kept in memory and synced with the 'real' DOM by a library like React. This abstraction allows the library to batch DOM updates and optimize rendering by comparing the VDOM with a snapshot taken before an update, and only applying the differences to the actual DOM.",
        explanation: "This reconciliation process is what makes React and similar frameworks highly performant."
    },
    {
        id: 26,
        testId: 3,
        difficulty: 'medium',
        question: "What is the difference between `==` and `===` in JavaScript?",
        type: 'subjective',
        answer: "The `==` operator performs type coercion before comparison (loose equality), meaning it will try to convert the operands to a common type before checking for equality. The `===` operator (strict equality) checks for both value and type equality without coercion. For example, `5 == '5'` is true, but `5 === '5'` is false.",
        explanation: "It is generally recommended to use `===` to avoid unexpected bugs from type coercion."
    },
    {
        id: 27,
        testId: 3,
        difficulty: 'medium',
        question: "What is a 'closure' in JavaScript?",
        type: 'subjective',
        answer: "A closure is a function that has access to its outer function's scope (lexical environment) even after the outer function has returned. It 'closes over' the variables from its lexical scope, allowing it to remember and access those variables. This allows for powerful patterns like data privacy and function factories.",
        explanation: "Closures are a fundamental concept in JavaScript."
    },
    {
        id: 28,
        testId: 3,
        difficulty: 'medium',
        question: "What does the `position: relative;` property do in CSS?",
        type: 'subjective',
        answer: "It positions an element relative to its normal position in the document flow. You can then use `top`, `right`, `bottom`, and `left` properties to offset it from this normal position without affecting the layout of surrounding elements. It also creates a new stacking context and acts as the containing block for any absolutely positioned child elements.",
        explanation: "It's a key property for controlling layout and is often used as a container for absolutely positioned elements."
    },
    {
        id: 29,
        testId: 3,
        difficulty: 'medium',
        question: "What is event bubbling in the DOM?",
        type: 'subjective',
        answer: "Event bubbling is a type of event propagation where an event first triggers on the innermost target element, and then successively on its ancestors (parents) in the DOM tree until it reaches the document's root object. This is the default behavior for most DOM events.",
        explanation: "Understanding event propagation (bubbling and its opposite, capturing) is key for handling complex user interactions and for techniques like event delegation."
    },
    {
        id: 30,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of the `Promise.all()` method?",
        type: 'subjective',
        answer: "`Promise.all()` takes an iterable of promises and returns a single Promise that resolves when all of the promises in the iterable have resolved. The resolved value is an array of the results. If any of the promises reject, the returned promise immediately rejects with the reason of the first promise that rejected.",
        explanation: "It's useful for aggregating the results of multiple asynchronous operations."
    },
    // Test 4: 20 Questions (12 MCQ, 8 Subjective) - Medium
    {
        id: 31,
        testId: 4,
        difficulty: 'medium',
        question: "What is a higher-order component (HOC) in React?",
        type: 'mcq',
        options: ['A component that renders other components', 'A function that takes a component and returns a new component with additional props or logic', 'A parent component in the component tree', 'Any component that uses hooks'],
        answer: 'A function that takes a component and returns a new component with additional props or logic',
        explanation: "HOCs are a pattern for reusing component logic. A HOC is not a component itself, but a function that enhances a component."
    },
    {
        id: 32,
        testId: 4,
        difficulty: 'medium',
        question: "What is the `useReducer` hook?",
        type: 'mcq',
        options: ['An alternative to `useState` for complex state logic', 'A hook for reducing bundle size', 'A hook for performing animations', 'A hook for data fetching'],
        answer: 'An alternative to `useState` for complex state logic',
        explanation: "`useReducer` is generally preferred over `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one."
    },
    {
        id: 33,
        testId: 4,
        difficulty: 'medium',
        question: "What is a `Set` in JavaScript?",
        type: 'mcq',
        options: ['A collection of unique values', 'A collection of key/value pairs', 'A sorted list of values', 'An immutable array'],
        answer: 'A collection of unique values',
        explanation: "A `Set` object lets you store unique values of any type, whether primitive values or object references."
    },
    {
        id: 34,
        testId: 4,
        difficulty: 'medium',
        question: "What is the `z-index` property in CSS used for?",
        type: 'mcq',
        options: ['To control the vertical stacking order of elements', 'To set the zoom level of an element', 'To define the font size', 'To create a 3D effect'],
        answer: 'To control the vertical stacking order of elements',
        explanation: "An element with a greater stack order is always in front of an element with a lower stack order. `z-index` only works on positioned elements (position: absolute, relative, fixed, or sticky)."
    },
    {
        id: 35,
        testId: 4,
        difficulty: 'medium',
        question: "Which of these is a pseudo-element in CSS?",
        type: 'mcq',
        options: ['::before', ':hover', ':focus', ':active'],
        answer: '::before',
        explanation: 'Pseudo-elements like `::before` and `::after` create an element that can be styled, whereas pseudo-classes like `:hover` apply to an existing element in a certain state.'
    },
    {
        id: 36,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between `npm` and `npx`?",
        type: 'mcq',
        options: ['They are the same', '`npm` is for installing packages, `npx` is for executing packages', '`npm` is for frontend, `npx` is for backend', '`npx` is a typo for `npm`'],
        answer: '`npm` is for installing packages, `npx` is for executing packages',
        explanation: "`npx` allows you to execute a package from the npm registry without installing it globally or in your project."
    },
    {
        id: 37,
        testId: 4,
        difficulty: 'medium',
        question: "What is the `yield` keyword in JavaScript used for?",
        type: 'mcq',
        options: ['To pause and resume a generator function', 'To return a value from a standard function', 'To create a new thread', 'To declare a variable'],
        answer: 'To pause and resume a generator function',
        explanation: 'It can only be used inside a generator function (`function*`) to pause execution and return a value.'
    },
    {
        id: 38,
        testId: 4,
        difficulty: 'medium',
        question: "What is lazy loading in the context of web performance?",
        type: 'mcq',
        options: ['Loading all assets at once', 'Delaying the loading of non-critical resources until they are needed', 'A CSS loading strategy', 'A database query optimization'],
        answer: 'Delaying the loading of non-critical resources until they are needed',
        explanation: "Lazy loading commonly applies to images or components that are off-screen, improving initial load time and saving bandwidth."
    },
    {
        id: 39,
        testId: 4,
        difficulty: 'medium',
        question: "Which of the following is NOT a valid HTTP method?",
        type: 'mcq',
        options: ["GET", "POST", "PUSH", "DELETE"],
        answer: "PUSH",
        explanation: "Standard HTTP methods include GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS. PUSH is part of the HTTP/2 protocol but is not an HTTP request method."
    },
    {
        id: 40,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of the `key` prop in React lists?",
        type: 'mcq',
        options: ["It's a unique identifier for the component in the DOM", "It helps React identify which items have changed, are added, or are removed", "It is used for styling", "It is passed as a prop to the component"],
        answer: "It helps React identify which items have changed, are added, or are removed",
        explanation: "Keys give elements a stable identity, helping React to optimize rendering by reusing elements."
    },
    {
        id: 41,
        testId: 4,
        difficulty: 'medium',
        question: "What does the `Array.prototype.reduce` method do?",
        type: 'mcq',
        options: ["Creates a new array with the results of calling a function on every element", "Filters an array based on a condition", "Executes a function on each element and returns a single accumulated value", "Checks if at least one element in the array passes a test"],
        answer: "Executes a function on each element and returns a single accumulated value",
        explanation: "It's often used to sum up numbers in an array or flatten an array of arrays."
    },
    {
        id: 42,
        testId: 4,
        difficulty: 'medium',
        question: "Which HTML5 element is best for embedding a video?",
        type: 'mcq',
        options: ["<media>", "<embed>", "<object>", "<video>"],
        answer: "<video>",
        explanation: "The `<video>` element is the semantic and standard way to embed video content in an HTML document."
    },
    {
        id: 43,
        testId: 4,
        difficulty: 'medium',
        question: "Explain the concept of 'hoisting' in JavaScript.",
        type: 'subjective',
        answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. `var` declarations are hoisted and initialized with `undefined`. `let` and `const` are hoisted but not initialized, which creates a 'Temporal Dead Zone' where they cannot be accessed before their declaration.",
        explanation: "This is why you can call a function declared with `function` before its definition, but not a function assigned to a `let` variable."
    },
    {
        id: 44,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between `null` and `undefined` in JavaScript?",
        type: 'subjective',
        answer: "`undefined` typically means a variable has been declared but has not yet been assigned a value. It's the default value of uninitialized variables. `null` is an assignment value that can be assigned to a variable to represent the intentional absence of any object value.",
        explanation: "`typeof undefined` is 'undefined', while `typeof null` is 'object', which is a historical bug."
    },
    {
        id: 45,
        testId: 4,
        difficulty: 'medium',
        question: "How does CSS Grid Layout differ from Flexbox?",
        type: 'subjective',
        answer: "The primary difference is that Flexbox is designed for one-dimensional layouts (a row OR a column). CSS Grid is designed for two-dimensional layouts (rows AND columns at the same time). Grid provides more control over the overall page layout, while Flexbox excels at aligning content within a container.",
        explanation: "Grid is for layout of the page, Flexbox is for layout of components."
    },
    {
        id: 46,
        testId: 4,
        difficulty: 'medium',
        question: "Explain the `async` and `await` keywords in JavaScript.",
        type: 'subjective',
        answer: "`async` functions are a special syntax for working with promises. An `async` function always returns a promise. The `await` keyword can only be used inside an `async` function and it pauses the function's execution, waiting for a promise to resolve or reject. This makes asynchronous code look and behave more like synchronous code, improving readability.",
        explanation: "They are syntactic sugar over Promises."
    },
    {
        id: 47,
        testId: 4,
        difficulty: 'medium',
        question: "What is Cross-Site Scripting (XSS)?",
        type: 'subjective',
        answer: "XSS is a security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users. This can be used to steal session tokens, deface websites, or redirect users. React helps prevent XSS by automatically escaping JSX content before rendering it, converting strings to plain text.",
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
        answer: "CORS is a browser security feature that restricts cross-origin HTTP requests initiated from scripts. By default, browsers block these requests. To allow them, the server at the requested origin must include specific CORS headers (like `Access-Control-Allow-Origin`) in its response.",
        explanation: "This prevents malicious sites from making unauthorized requests to your APIs on behalf of a user."
    },
    {
        id: 50,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of semantic HTML tags?",
        type: 'subjective',
        answer: "Semantic HTML tags are tags that clearly describe their meaning in a human- and machine-readable way. Tags like `<header>`, `<footer>`, `<article>`, and `<section>` explicitly define the structure of the document. This improves accessibility (for screen readers) and SEO (for search engine crawlers).",
        explanation: "Using `<div>` for everything is a common anti-pattern."
    },
    // Test 5: 25 Questions (15 MCQ, 10 Subjective) - Medium
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
        explanation: "Pure functions are a core concept of functional programming and make code easier to test and reason about."
    },
    {
        id: 55,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `at()` method for JavaScript arrays?",
        type: 'mcq',
        options: ['To find an element at a specific index, supporting negative indices', 'To concatenate two arrays', 'To sort an array', 'To check if an array contains a certain value'],
        answer: 'To find an element at a specific index, supporting negative indices',
        explanation: "`myArray.at(-1)` returns the last item in the array, which is more concise than `myArray[myArray.length - 1]`."
    },
    {
        id: 56,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of `.map` files often seen in production builds?",
        type: 'mcq',
        options: ['They are image files', 'They are source maps for debugging minified code', 'They are configuration files', 'They are web manifest files'],
        answer: 'They are source maps for debugging minified code',
        explanation: "Source maps allow you to see your original source code in the browser's developer tools, even though the browser is running minified/uglified code."
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
        explanation: "This is an important accessibility feature to disable or reduce animations for users who are sensitive to motion."
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
        explanation: "It's crucial for making dynamic content accessible, such as in live chat or notification feeds."
    },
    {
        id: 62,
        testId: 5,
        difficulty: 'medium',
        question: "What does the CSS `box-sizing: border-box;` property for?",
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
        question: "What is `prop drilling` in React?",
        type: 'mcq',
        options: ["A performance optimization technique", "Passing props down through multiple layers of nested components", "A way to fetch data", "A specific type of error"],
        answer: "Passing props down through multiple layers of nested components"
    },
    {
        id: 65,
        testId: 5,
        difficulty: 'medium',
        question: "What does the `...` rest parameter syntax do in a function signature?",
        type: 'mcq',
        options: ['It indicates the function returns a promise', 'It allows a function to accept an indefinite number of arguments as an array', 'It spreads an array into individual arguments', 'It is for comments'],
        answer: 'It allows a function to accept an indefinite number of arguments as an array',
        explanation: "e.g., `function sum(...numbers) { ... }`"
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
        answer: "Server-side rendering is the ability of an application to render the initial page on the server, sending a fully rendered HTML page to the client. This improves initial page load performance (perceived speed) and is beneficial for SEO as search engine crawlers can index the content immediately.",
        explanation: "Frameworks like Next.js make SSR easier to implement."
    },
    {
        id: 68,
        testId: 5,
        difficulty: 'medium',
        question: "What are service workers?",
        type: 'subjective',
        answer: "Service workers are scripts that your browser runs in the background, separate from a web page, enabling features that don't need a web page or user interaction. Key features include offline capabilities (caching assets), background sync, and push notifications. They are a core part of Progressive Web Apps (PWAs).",
        explanation: "They act as a proxy between the web app, the browser, and the network."
    },
    {
        id: 69,
        testId: 5,
        difficulty: 'medium',
        question: "What is the critical rendering path?",
        type: 'subjective',
        answer: "The critical rendering path is the sequence of steps the browser goes through to convert HTML, CSS, and JavaScript into pixels on the screen. Optimizing it involves minimizing the number of critical resources, reducing their size, and optimizing the order in which they are loaded and processed to achieve the fastest possible initial render.",
        explanation: "Understanding this path is key to improving web performance."
    },
    {
        id: 70,
        testId: 5,
        difficulty: 'medium',
        question: "How can you avoid 'prop drilling' in React?",
        type: 'subjective',
        answer: "Prop drilling can be avoided by using state management solutions. For global or widely shared state, a library like Redux or Zustand is common. For state shared between a few nested components, the built-in React Context API is an excellent choice. It allows you to 'provide' a value at a high level and consume it at any lower level without passing it through intermediate components.",
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
        answer: "Specificity is the algorithm used by browsers to determine which CSS rule is the most 'specific' and therefore should be applied to an element when multiple conflicting rules exist. Specificity is calculated based on a weighted score of ID, class/attribute, and type selectors. An inline style has the highest specificity.",
        explanation: "Understanding specificity is crucial for debugging CSS issues."
    },
    {
        id: 74,
        testId: 5,
        difficulty: 'medium',
        question: "Explain what ARIA attributes are and why they are important.",
        type: 'subjective',
        answer: "ARIA (Accessible Rich Internet Applications) is a set of attributes you can add to HTML elements to improve their accessibility. They provide additional semantics for assistive technologies like screen readers, especially for dynamic content and complex UI controls that native HTML doesn't cover. For example, `role='alert'` or `aria-expanded='true'`.",
        explanation: "Proper ARIA usage is essential for creating accessible web applications."
    },
    {
        id: 75,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'lifting state up' in React?",
        type: 'subjective',
        answer: "Lifting state up is a common pattern in React where you move the shared state from multiple components up to their closest common ancestor. The ancestor component then owns the 'single source of truth' and passes the state and state-updating functions down to the children via props. This is used when several components need to reflect the same changing data.",
        explanation: "It helps keep your components in sync."
    },
    // Test 6: 30 Questions (18 MCQ, 12 Subjective) - Hard
    {
        id: 76,
        testId: 6,
        difficulty: 'hard',
        question: "What is the `useLayoutEffect` hook in React and how does it differ from `useEffect`?",
        type: 'mcq',
        options: ["It runs before the component renders", "It fires synchronously after all DOM mutations, but before the browser has painted", "It's an alias for `useEffect`", "It only runs on the server"],
        answer: "It fires synchronously after all DOM mutations, but before the browser has painted",
        explanation: "This makes it suitable for reading layout from the DOM and synchronously re-rendering. `useEffect` runs asynchronously after the render is painted."
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
        answer: "The event loop is a mechanism that allows JavaScript's single thread to handle asynchronous operations. It consists of a call stack, a message queue (or callback queue), and Web APIs. When an async operation completes (e.g., a `setTimeout`), its callback is placed in the queue. The event loop continuously checks if the call stack is empty. If it is, it takes the first message from the queue and pushes its callback onto the stack to be executed.",
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
        answer: "Debouncing is a technique to limit the rate at which a function gets called. You would create a wrapper function that uses `setTimeout`. Inside the wrapper, you first clear any existing timeout with `clearTimeout`, then set a new timeout to execute the original function after a specified delay. This ensures the function only runs once after a burst of calls has ended.",
        explanation: "It's commonly used for handling user input, like in a search bar."
    },
    {
        id: 97,
        testId: 6,
        difficulty: 'hard',
        question: "Explain how the `this` keyword works in JavaScript.",
        type: 'subjective',
        answer: "The value of `this` is determined by how a function is called (its execution context). In a method (e.g., `obj.myMethod()`), `this` refers to the owner object. In a regular function, `this` refers to the global object (`window` in browsers) or `undefined` in strict mode. In an event handler, `this` refers to the element that received the event. Arrow functions do not have their own `this`; they lexically bind it from their parent scope.",
        explanation: "The behavior of `this` is one of the most frequently misunderstood parts of JavaScript."
    },
    {
        id: 98,
        testId: 6,
        difficulty: 'hard',
        question: "What are CSS Custom Properties (Variables) and what are their benefits?",
        type: 'subjective',
        answer: "CSS Custom Properties are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: #ff0000;`) and are accessed using the `var()` function. Benefits include DRY (Don't Repeat Yourself) code, easier theming, and the ability to be read and changed dynamically via JavaScript.",
        explanation: "They are a powerful feature for creating maintainable and dynamic stylesheets."
    },
    {
        id: 99,
        testId: 6,
        difficulty: 'hard',
        question: "What is hydration in the context of SSR with React?",
        type: 'subjective',
        answer: "Hydration is the process of attaching event listeners and making the static HTML received from a server-side rendering (SSR) process interactive. React 'hydrates' the server-rendered HTML by building its virtual DOM in memory, comparing it to the existing HTML, and then attaching the necessary JavaScript logic and event listeners to the markup.",
        explanation: "It turns a static page into a dynamic single-page application."
    },
    {
        id: 100,
        testId: 6,
        difficulty: 'hard',
        question: "Explain event delegation in JavaScript.",
        type: 'subjective',
        answer: 'Event delegation is a technique where you add a single event listener to a parent element to manage events for all of its children, including dynamically added ones. When an event bubbles up from a child, the parent listener can check the `event.target` property to identify which child triggered the event and respond accordingly. This improves performance by reducing the number of event listeners.',
        explanation: "It's a memory-efficient way to handle events on many elements."
    },
    {
        id: 101,
        testId: 6,
        difficulty: 'hard',
        question: "How does React's reconciliation algorithm work?",
        type: 'subjective',
        answer: "Reconciliation is the process through which React updates the DOM. When a component's state or props change, React creates a new virtual DOM tree. It then compares ('diffs') this new tree with the previous one using a heuristic algorithm. Based on this comparison, it computes the most efficient, minimal set of changes needed to update the real DOM and applies them in a batch.",
        explanation: "The key assumption is that different component types produce different trees and that developers can hint at stable elements using the `key` prop."
    },
    {
        id: 102,
        testId: 6,
        difficulty: 'hard',
        question: "What are render props in React?",
        type: 'subjective',
        answer: "The term 'render prop' refers to a technique for sharing code between React components using a prop whose value is a function that returns a React element. A component with a render prop (e.g., `<DataProvider render={data => <h1>{data.name}</h1>} />`) calls this function to delegate its rendering logic, enabling powerful and flexible composition.",
        explanation: "It's a pattern for sharing logic, similar in purpose to hooks and HOCs."
    },
    {
        id: 103,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between throttling and debouncing?",
        type: 'subjective',
        answer: "Throttling guarantees that a function is executed at most once per specified time period (e.g., once every 100ms). Debouncing ensures that a function is only called after a certain period of inactivity (e.g., after the user stops typing for 300ms). Throttling is about limiting the rate, while debouncing is about waiting for a pause.",
        explanation: "Throttling is good for scroll events, while debouncing is good for search input."
    },
    {
        id: 104,
        testId: 6,
        difficulty: 'hard',
        question: "What is a Progressive Web App (PWA)?",
        type: 'subjective',
        answer: "A PWA is a web application that uses modern web capabilities to deliver an app-like experience. Key features include being installable on the user's home screen, working offline via a service worker, and offering push notifications. They aim to combine the reach of the web with the user experience of a native app.",
        explanation: "They represent the evolution of web apps to be more capable and reliable."
    },
    {
        id: 105,
        testId: 6,
        difficulty: 'hard',
        question: "What is the `Same-Origin Policy` and why is it important?",
        type: 'subjective',
        answer: 'The Same-Origin Policy (SOP) is a critical security mechanism in web browsers. It restricts how a document or script loaded from one origin (domain, protocol, port) can interact with a resource from another origin. This helps prevent malicious scripts on one page from accessing sensitive data on another page.',
        explanation: "It's a cornerstone of web security."
    },
    // Test 7: 35 Questions (21 MCQ, 14 Subjective) - Hard
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
        explanation: "While Redux is used with components (e.g., in React), the component itself is not a part of the core Redux architecture."
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
        explanation: "It helps enforce code quality and consistency."
    },
    {
        id: 125,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between `let`, `const`, and `var`?",
        type: 'mcq',
        options: [
            "`var` is function-scoped, `let` and `const` are block-scoped",
            "`let` is function-scoped, `var` and `const` are block-scoped",
            "`const` is function-scoped, `let` and `var` are block-scoped",
            "There is no difference in scope"
        ],
        answer: "`var` is function-scoped, `let` and `const` are block-scoped",
        explanation: "This is a key difference. `let` and `const` offer more predictable scoping within loops and conditional blocks."
    },
    {
        id: 126,
        testId: 7,
        difficulty: 'hard',
        question: "What is `Promise.allSettled()`?",
        type: 'mcq',
        options: [
            "It returns a promise that resolves when all promises have resolved",
            "It returns a promise that resolves after all of the given promises have either fulfilled or rejected",
            "It is an alias for `Promise.all()`",
            "It rejects if any of the promises reject"
        ],
        answer: "It returns a promise that resolves after all of the given promises have either fulfilled or rejected",
        explanation: "Unlike `Promise.all()`, it never rejects. It's useful when you need to know the outcome of every promise, regardless of success."
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
        question: 'What is "code splitting"?',
        type: 'subjective',
        answer: "Code splitting is a feature supported by bundlers like Webpack or Rollup which can create multiple bundles that can be dynamically loaded at runtime. Instead of one massive bundle, you can split code by route or component. This is crucial for improving initial page load time, as the user only downloads the code needed for the initial view.",
        explanation: "`React.lazy` and dynamic `import()` are common ways to implement code splitting."
    },
    {
        id: 129,
        testId: 7,
        difficulty: 'hard',
        question: "What are ES modules (ESM)?",
        type: 'subjective',
        answer: 'ES Modules are the official, standardized module system for JavaScript, introduced in ES6. They use the `import` and `export` statements. Unlike older systems like CommonJS, ESM is resolved statically at parse time, which allows for powerful optimizations like tree shaking. They are the standard for modern browsers and Node.js.',
        explanation: "They offer a cleaner syntax and better performance than older module systems."
    },
    {
        id: 130,
        testId: 7,
        difficulty: 'hard',
        question: "What is OAuth 2.0?",
        type: 'subjective',
        answer: "OAuth 2.0 is an authorization framework, not an authentication protocol. It enables a third-party application to obtain limited access to a user's account on an HTTP service. It works by delegating user authentication to the service that hosts the user account and authorizing the third-party application to access the user account via access tokens, rather than sharing the user's credentials.",
        explanation: "It's the industry standard for authorization, used by Google, Facebook, and others."
    },
    {
        id: 131,
        testId: 7,
        difficulty: 'hard',
        question: "What is a `WeakMap` in JavaScript?",
        type: 'subjective',
        answer: "A `WeakMap` only accepts objects as keys and holds 'weak' references, meaning if there are no other references to an object used as a key, it can be garbage collected. This is its main difference from a regular `Map`, which holds strong references. `WeakMap` is not iterable and is primarily used to prevent memory leaks by associating data with an object without preventing its collection.",
        explanation: "It's an advanced feature for specific memory management scenarios."
    },
    {
        id: 132,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of `Array.prototype.flat()`?",
        type: 'subjective',
        answer: "The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to a specified depth. The default depth is 1. This is useful for simplifying nested arrays into a single, flat array.",
        explanation: "For example, `[1, [2, 3], [4, [5]]].flat()` results in `[1, 2, 3, 4, [5]]`."
    },
    {
        id: 133,
        testId: 7,
        difficulty: 'hard',
        question: "What is the `will-change` CSS property used for?",
        type: 'subjective',
        answer: "The `will-change` property provides a hint to the browser about what properties of an element are expected to change in the future. This allows the browser to set up optimizations in advance, before the element is actually changed. For example, it might move the element to its own layer on the GPU. It should be used sparingly as it can be a performance cost if overused.",
        explanation: "It's a way to tell the browser 'get ready to animate this'."
    },
    {
        id: 134,
        testId: 7,
        difficulty: 'hard',
        question: "What is `ESLint` and why is it useful?",
        type: 'subjective',
        answer: "`ESLint` is a static analysis tool for identifying and fixing problems in JavaScript code. It's highly configurable and helps enforce code quality, style consistency, and prevent common errors. By analyzing code without executing it, it can catch bugs early in the development process.",
        explanation: "It's an essential tool for any modern JavaScript project, especially for teams."
    },
    {
        id: 135,
        testId: 7,
        difficulty: 'hard',
        question: "What is `git cherry-pick` used for?",
        type: 'subjective',
        answer: "`git cherry-pick` is a command used to apply a specific commit from one branch onto another branch. Instead of merging an entire branch, it allows you to select individual commits. This is useful for backporting a bug fix or applying a small feature from a development branch to a stable branch.",
        explanation: "It's a powerful tool for surgical changes between branches."
    },
    {
        id: 136,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between `Promise.all()` and `Promise.allSettled()`?",
        type: 'subjective',
        answer: "`Promise.all()` takes an iterable of promises and returns a single promise that resolves with an array of all resolved values. It is 'fail-fast', meaning it will reject immediately if any of the input promises reject. `Promise.allSettled()` also takes an iterable, but it waits for all promises to settle (either fulfill or reject) and returns a promise that resolves with an array of objects, each describing the outcome of a promise.",
        explanation: "Use `all()` when you need all promises to succeed. Use `allSettled()` when you need to know the outcome of every promise, regardless of success."
    },
    {
      id: 137,
      testId: 7,
      difficulty: 'hard',
      question: "Explain the concept of WebAssembly (Wasm) and its use cases.",
      type: 'subjective',
      answer: "WebAssembly is a binary instruction format for a stack-based virtual machine. It's designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications. It allows you to run code written in languages like C++, Rust, and Go on the web at near-native speed. Use cases include performance-intensive tasks like gaming, video editing, and scientific simulations.",
      explanation: "Wasm is not a replacement for JavaScript, but a complement for performance-critical parts of an application."
    },
    {
      id: 138,
      testId: 7,
      difficulty: 'hard',
      question: "What is a Content Delivery Network (CDN) and how does it improve website performance?",
      type: 'subjective',
      answer: "A CDN is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end-users. When a user requests a static asset (like an image, CSS, or JS file) from a site using a CDN, the request is routed to the server closest to the user. This reduces latency and speeds up content delivery.",
      explanation: "CDNs are essential for modern high-traffic websites to ensure fast load times for a global audience."
    },
    {
      id: 139,
      testId: 7,
      difficulty: 'hard',
      question: "What are HTTP/2 and HTTP/3, and what are their key improvements over HTTP/1.1?",
      type: 'subjective',
      answer: "HTTP/2 introduced multiplexing, allowing multiple requests and responses to be sent over a single TCP connection, solving the head-of-line blocking issue of HTTP/1.1. It also added header compression and server push. HTTP/3 builds on this by using QUIC instead of TCP, which further reduces latency, improves connection setup time, and handles packet loss more gracefully, making it more resilient on unstable networks.",
      explanation: "These newer protocols significantly improve web performance, especially on mobile and unreliable networks."
    },
    {
      id: 140,
      testId: 7,
      difficulty: 'hard',
      question: "Describe what happens from the moment you type a URL into your browser until the page is rendered.",
      type: 'subjective',
      answer: "The process involves several steps: 1) DNS Resolution to find the IP address. 2) A TCP connection is established with the server. 3) The browser sends an HTTP request. 4) The server processes the request and sends back an HTTP response with the HTML. 5) The browser parses the HTML to build the DOM tree. 6) It parses CSS to build the CSSOM tree. 7) The DOM and CSSOM are combined to form the Render Tree. 8) The browser performs Layout (calculating positions) and then Paint (drawing the pixels on the screen).",
      explanation: "This is a classic and comprehensive web knowledge question."
    },
     // Test 8: 40 Questions (24 MCQ, 16 Subjective) - Expert
     {
        id: 141,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'race condition' and how can it be mitigated in JavaScript?",
        type: 'mcq',
        options: [
            'A bug that occurs when the timing of asynchronous operations affects the outcome',
            'An error in the JavaScript engine',
            'A performance optimization technique',
            'A CSS layout issue'
        ],
        answer: 'A bug that occurs when the timing of asynchronous operations affects the outcome',
        explanation: 'Mitigation strategies include using async/await to ensure sequential execution, using a locking mechanism, or designing state updates to be atomic.'
    },
    {
        id: 142,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of the `bind` method in JavaScript?",
        type: 'mcq',
        options: [
            'To immediately invoke a function',
            'To create a new function that, when called, has its `this` keyword set to the provided value',
            'To attach an event listener',
            'To merge two objects'
        ],
        answer: 'To create a new function that, when called, has its `this` keyword set to the provided value',
        explanation: '`bind` is essential for controlling the execution context of a function, especially in event handlers or callbacks.'
    },
    {
        id: 143,
        testId: 8,
        difficulty: 'expert',
        question: "What is memoization?",
        type: 'mcq',
        options: [
            'A way to store data in `localStorage`',
            'An optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again',
            'A memory management technique',
            'A debugging process'
        ],
        answer: 'An optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again',
        explanation: 'React\'s `useMemo` and `useCallback` hooks are forms of memoization.'
    },
    {
        id: 144,
        testId: 8,
        difficulty: 'expert',
        question: "What is the main advantage of WebAssembly (Wasm)?",
        type: 'mcq',
        options: [
            'It provides better SEO than JavaScript',
            'It allows code written in languages like C++ and Rust to run on the web at near-native speed',
            'It is easier to write than JavaScript',
            'It replaces the need for HTML and CSS'
        ],
        answer: 'It allows code written in languages like C++ and Rust to run on the web at near-native speed',
        explanation: 'Wasm is a performance-focused complement to JavaScript, not a replacement.'
    },
    {
        id: 145,
        testId: 8,
        difficulty: 'expert',
        question: "What is an `AbortController` used for?",
        type: 'mcq',
        options: [
            'To stop a CSS animation',
            'To cancel a running `setTimeout`',
            'To provide a way to abort one or more web requests (e.g., `fetch`) as and when desired',
            'To forcefully close a WebSocket'
        ],
        answer: 'To provide a way to abort one or more web requests (e.g., `fetch`) as and when desired',
        explanation: 'This is useful for cleaning up pending requests when a user navigates away or a component unmounts.'
    },
    {
        id: 146,
        testId: 8,
        difficulty: 'expert',
        question: "What is the difference between `defer` and `async` attributes on a `<script>` tag?",
        type: 'mcq',
        options: [
            'There is no difference',
            '`async` scripts execute as soon as they are downloaded, while `defer` scripts execute after the document has been parsed',
            '`defer` scripts block HTML parsing, while `async` scripts do not',
            '`async` is for external scripts, `defer` is for inline scripts'
        ],
        answer: '`async` scripts execute as soon as they are downloaded, while `defer` scripts execute after the document has been parsed',
        explanation: 'Both download the script without blocking the HTML parser, but their execution timing differs. `defer` also guarantees the order of execution, while `async` does not.'
    },
    {
        id: 147,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'memory leak' in the context of a JavaScript application?",
        type: 'mcq',
        options: [
            'An error where data is written to the wrong memory address',
            'A situation where a program fails to release memory it no longer needs, leading to a gradual loss of available memory',
            'A security vulnerability where an attacker can read sensitive memory',
            'A hardware failure in the RAM'
        ],
        answer: 'A situation where a program fails to release memory it no longer needs, leading to a gradual loss of available memory',
        explanation: 'Common causes include dangling event listeners, uncleared intervals, and closures holding onto unnecessary references.'
    },
    {
        id: 148,
        testId: 8,
        difficulty: 'expert',
        question: "What is a Content Security Policy (CSP)?",
        type: 'mcq',
        options: [
            'A CSS feature for styling content',
            'An HTTP header that provides a whitelist of trusted content sources to prevent XSS and other injection attacks',
            'A JavaScript API for managing content',
            'A server configuration for caching'
        ],
        answer: 'An HTTP header that provides a whitelist of trusted content sources to prevent XSS and other injection attacks',
        explanation: 'CSP is a powerful, defense-in-depth security mechanism.'
    },
    {
        id: 149,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'Stale-While-Revalidate' caching strategy?",
        type: 'mcq',
        options: [
            'A strategy to never use cached data',
            'A strategy where stale (old) cached content is served immediately, while a fresh version is fetched in the background to update the cache for the next request',
            'A strategy that only caches data for a single session',
            'A strategy that always revalidates with the server before serving from cache'
        ],
        answer: 'A strategy where stale (old) cached content is served immediately, while a fresh version is fetched in the background to update the cache for the next request',
        explanation: 'This provides a good balance between performance (instant response) and freshness.'
    },
    {
        id: 150,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'B-Tree' and where is it commonly used?",
        type: 'mcq',
        options: [
            'A binary search tree',
            'A self-balancing tree data structure that maintains sorted data and is commonly used in databases and filesystems for indexing',
            'A data structure for rendering component trees in React',
            'A type of CSS layout'
        ],
        answer: 'A self-balancing tree data structure that maintains sorted data and is commonly used in databases and filesystems for indexing',
        explanation: 'B-Trees are optimized for systems that read and write large blocks of data, making them ideal for disk-based storage.'
    },
    {
        id: 151,
        testId: 8,
        difficulty: 'expert',
        question: "Which CSS display property creates a new block formatting context?",
        type: 'mcq',
        options: [
            'display: inline',
            'display: block',
            'display: flow-root',
            'display: none'
        ],
        answer: 'display: flow-root',
        explanation: 'While other properties like `overflow: hidden` can also create a new block formatting context (BFC), `display: flow-root` is the modern, dedicated way to do so without other side effects. A BFC is important for controlling layouts and clearing floats.'
    },
    {
        id: 152,
        testId: 8,
        difficulty: 'expert',
        question: "What is the difference between `Map` and `WeakMap` in JavaScript?",
        type: 'mcq',
        options: [
            'WeakMap keys can only be objects and are held weakly, allowing for garbage collection',
            'Map is faster than WeakMap',
            'WeakMap is immutable',
            'There is no difference'
        ],
        answer: 'WeakMap keys can only be objects and are held weakly, allowing for garbage collection',
        explanation: 'This makes WeakMaps useful for associating data with an object without preventing that object from being garbage collected if it\'s no longer referenced elsewhere.'
    },
    {
        id: 153,
        testId: 8,
        difficulty: 'expert',
        question: "In React, what problem does `React.memo` solve?",
        type: 'mcq',
        options: [
            'It manages component state',
            'It prevents a functional component from re-rendering if its props have not changed',
            'It fetches data from an API',
            'It creates a memo that can be shared between components'
        ],
        answer: 'It prevents a functional component from re-rendering if its props have not changed',
        explanation: 'It is a higher-order component that performs a shallow comparison of props to optimize performance.'
    },
    {
        id: 154,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of HTTP Strict Transport Security (HSTS)?",
        type: 'mcq',
        options: [
            'To encrypt all HTTP traffic',
            'To tell browsers that a site should only be accessed using HTTPS, instead of HTTP',
            'To block all traffic to a site',
            'To compress HTTP headers'
        ],
        answer: 'To tell browsers that a site should only be accessed using HTTPS, instead of HTTP',
        explanation: 'This helps prevent man-in-the-middle attacks, such as protocol downgrade attacks and cookie hijacking.'
    },
    {
        id: 155,
        testId: 8,
        difficulty: 'expert',
        question: "What is an 'iterator' in JavaScript?",
        type: 'mcq',
        options: [
            'A type of loop',
            'A function that generates random numbers',
            'An object that defines a sequence and potentially a return value upon its termination',
            'A way to manage memory'
        ],
        answer: 'An object that defines a sequence and potentially a return value upon its termination',
        explanation: 'An object is an iterator when it has a `next()` method. `for...of` loops work with iterable objects.'
    },
    {
        id: 156,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'optional chaining' (`?.`) in JavaScript?",
        type: 'mcq',
        options: [
            'A way to create optional function parameters',
            'A way to safely access nested object properties without having to explicitly validate that each reference in the chain is valid',
            'A security feature',
            'A new type of `if` statement'
        ],
        answer: 'A way to safely access nested object properties without having to explicitly validate that each reference in the chain is valid',
        explanation: 'It prevents errors when trying to access properties of `null` or `undefined`.'
    },
    {
        id: 157,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'port' in the context of networking?",
        type: 'mcq',
        options: [
            'A physical connection on a device',
            'A numerical identifier that specifies a particular process or service on a host computer',
            'A type of network cable',
            'A security protocol'
        ],
        answer: 'A numerical identifier that specifies a particular process or service on a host computer',
        explanation: 'Ports allow a single host to run multiple services, directing network traffic to the correct application (e.g., a web server on port 80).'
    },
    {
        id: 158,
        testId: 8,
        difficulty: 'expert',
        question: "Which of these is a primary goal of the 'SOLID' principles in software design?",
        type: 'mcq',
        options: [
            'To make software faster',
            'To reduce the amount of code written',
            'To create software that is more understandable, flexible, and maintainable',
            'To make software more secure'
        ],
        answer: 'To create software that is more understandable, flexible, and maintainable',
        explanation: 'SOLID principles guide developers in creating robust and scalable object-oriented designs.'
    },
    {
        id: 159,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'canary release' deployment strategy?",
        type: 'mcq',
        options: [
            'Deploying a new version to all users at once',
            'Deploying a new version to a small subset of users to test its performance and stability before a full rollout',
            'A deployment that happens only at night',
            'A deployment that is manually verified by a QA team'
        ],
        answer: 'Deploying a new version to a small subset of users to test its performance and stability before a full rollout',
        explanation: 'This strategy minimizes the risk and impact of deploying a faulty new version.'
    },
    {
        id: 160,
        testId: 8,
        difficulty: 'expert',
        question: "What does the `box-shadow` CSS property do?",
        type: 'mcq',
        options: [
            'It changes the shape of an element',
            'It adds shadow effects around an element\'s frame',
            'It adds a shadow to the text inside an element',
            'It controls the element\'s stacking order'
        ],
        answer: 'It adds shadow effects around an element\'s frame',
        explanation: '`box-shadow` is used to create depth and dimension in a layout, accepting values for offset, blur, spread, and color.'
    },
    {
        id: 161,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'currying' in functional programming?",
        type: 'mcq',
        options: [
            'A way to cook food',
            'The technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument',
            'A debugging technique',
            'A data encryption method'
        ],
        answer: 'The technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument',
        explanation: 'Currying allows for easier function composition and the creation of specialized, reusable functions.'
    },
    {
        id: 162,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of the `indexedDB` API in browsers?",
        type: 'mcq',
        options: [
            'To speed up database queries on the server',
            'To provide a transactional, client-side database for storing large amounts of structured data',
            'To index web pages for search engines',
            'To create visual indexes for images'
        ],
        answer: 'To provide a transactional, client-side database for storing large amounts of structured data',
        explanation: 'It is a more powerful alternative to `localStorage` and is essential for building offline-first applications.'
    },
    {
        id: 163,
        testId: 8,
        difficulty: 'expert',
        question: "In CSS, what is the 'stacking context'?",
        type: 'mcq',
        options: [
            'A data structure',
            'A three-dimensional conceptualization of HTML elements along the z-axis, where elements are placed on top of or behind each other',
            'A layout model like Flexbox or Grid',
            'A naming convention for CSS classes'
        ],
        answer: 'A three-dimensional conceptualization of HTML elements along the z-axis, where elements are placed on top of or behind each other',
        explanation: 'A new stacking context is created by properties like `position: relative` with a `z-index`, `opacity` less than 1, or `transform`.'
    },
    {
        id: 164,
        testId: 8,
        difficulty: 'expert',
        question: "Which of the following best describes 'GraphQL'?",
        type: 'mcq',
        options: [
            'A database technology',
            'A query language for APIs that allows clients to request exactly the data they need',
            'A graph visualization library',
            'A REST API standard'
        ],
        answer: 'A query language for APIs that allows clients to request exactly the data they need',
        explanation: 'GraphQL helps solve the problems of over-fetching and under-fetching common with traditional REST APIs.'
    },
    {
        id: 165,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the concept of 'concurrency' versus 'parallelism'.",
        type: 'subjective',
        answer: "Concurrency is about dealing with multiple tasks at once. For example, a single-core processor can be concurrent by switching between different tasks (context switching). Parallelism is about doing multiple tasks at the same time. This requires hardware with multiple cores or processors. An application can be concurrent without being parallel, but not vice-versa.",
        explanation: "Think of a chef (processor): concurrency is chopping vegetables while also keeping an eye on a simmering sauce. Parallelism is two chefs working on two different dishes simultaneously."
    },
    {
        id: 166,
        testId: 8,
        difficulty: 'expert',
        question: "What is a `prototype` in JavaScript and how does it relate to inheritance?",
        type: 'subjective',
        answer: "Every JavaScript object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on, until an object is reached with `null` as its prototype. This is called the prototype chain. When you try to access a property on an object, if it's not found, the JavaScript engine looks at the object's prototype, then the prototype's prototype, and so on, enabling prototypal inheritance.",
        explanation: "This is the mechanism that allows objects to inherit properties and methods from other objects in JavaScript."
    },
    {
        id: 167,
        testId: 8,
        difficulty: 'expert',
        question: "How do you prevent Cross-Site Request Forgery (CSRF) attacks?",
        type: 'subjective',
        answer: "The most common mitigation is the synchronizer token pattern. The server generates a unique, unpredictable token and includes it in a hidden field in forms. When the form is submitted, the server validates that the token from the request matches the one it expects for that user's session. Another defense is checking the `Origin` or `Referer` headers, and using the `SameSite` cookie attribute.",
        explanation: "CSRF tricks a logged-in user's browser into sending a forged request to a site the user trusts."
    },
    {
        id: 168,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'closure' in JavaScript and provide a practical example.",
        type: 'subjective',
        answer: "A closure is a function that remembers the environment in which it was created. It has access to its own scope, the outer function's scope, and the global scope. A practical example is a function factory: `function createCounter() { let count = 0; return function() { count++; return count; }; } const counter1 = createCounter(); console.log(counter1()); // 1` The inner function 'closes over' the `count` variable.",
        explanation: "Closures are powerful for creating private variables and stateful functions."
    },
    {
        id: 169,
        testId: 8,
        difficulty: 'expert',
        question: "What are the different types of database replication strategies and their trade-offs?",
        type: 'subjective',
        answer: "The main strategies are leader-based (master-slave), multi-leader, and leaderless. Leader-based is simple to reason about but the leader is a single point of failure. Multi-leader allows writes to multiple nodes, improving write availability but introducing potential write conflicts. Leaderless (e.g., using quorums) offers high availability and partition tolerance but may provide weaker consistency guarantees (eventual consistency).",
        explanation: "The choice depends on the CAP theorem trade-offs (Consistency, Availability, Partition Tolerance) that are acceptable for the application."
    },
    {
        id: 170,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the 'event loop' in Node.js.",
        type: 'subjective',
        answer: "The event loop allows Node.js to perform non-blocking I/O operations, despite being single-threaded. It offloads operations to the system kernel whenever possible. When an operation (like a database query or file read) is initiated, the callback is registered and the main thread continues. When the operation completes, its callback is placed in the event queue. The event loop continuously takes callbacks from the queue and pushes them onto the call stack for execution when the stack is empty.",
        explanation: "This model allows a single Node.js process to handle thousands of concurrent connections."
    },
    {
        id: 171,
        testId: 8,
        difficulty: 'expert',
        question: "What is the CAP theorem in distributed systems?",
        type: 'subjective',
        answer: "The CAP theorem states that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency (every read gets the most recent write), Availability (every request gets a response), and Partition Tolerance (the system works despite network partitions). Since network partitions are a given, the real trade-off is between consistency and availability (CP vs AP systems).",
        explanation: "This is a fundamental principle in the design of any distributed system."
    },
    {
        id: 172,
        testId: 8,
        difficulty: 'expert',
        question: "How does HTTPS work? Explain the TLS handshake.",
        type: 'subjective',
        answer: "HTTPS encrypts HTTP traffic using TLS/SSL. The TLS handshake process involves: 1) The client sends a 'hello' with its supported cipher suites. 2) The server responds with its SSL certificate and chosen cipher suite. 3) The client verifies the certificate with a trusted Certificate Authority. 4) The client generates a session key, encrypts it with the server's public key, and sends it to the server. 5) The server decrypts the session key with its private key. All subsequent communication is encrypted with this shared session key.",
        explanation: "This process establishes a secure, encrypted channel between the client and server."
    },
    {
        id: 173,
        testId: 8,
        difficulty: 'expert',
        question: "What is the difference between a process and a thread?",
        type: 'subjective',
        answer: "A process is an instance of a program with its own isolated memory space. A thread is the smallest unit of execution within a process. A single process can have multiple threads, which share the same memory space. This shared memory makes inter-thread communication fast, but also requires synchronization mechanisms (like mutexes) to prevent race conditions. Processes are more heavyweight and communication between them is more complex (IPC).",
        explanation: "This is a fundamental concept in operating systems and concurrent programming."
    },
    {
        id: 174,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'sidecar' pattern in microservices or container orchestration?",
        type: 'subjective',
        answer: "The sidecar pattern involves deploying a helper container alongside the main application container in the same pod or container group. This sidecar handles cross-cutting concerns like logging, monitoring, service discovery, or acting as a network proxy (e.g., in a service mesh like Istio). It separates auxiliary tasks from the main application logic, allowing for independent development and deployment of these concerns.",
        explanation: "It's a way to enhance an application without modifying its code."
    },
    {
        id: 175,
        testId: 8,
        difficulty: 'expert',
        question: "Explain different database indexing strategies and their use cases.",
        type: 'subjective',
        answer: "Common strategies include B-Tree indexes (the default for most databases, good for range queries), Hash indexes (good for exact equality lookups but not range queries), Full-text indexes (for searching text content), and Geospatial indexes (for location-based queries). The choice depends on the data type and the query patterns. For example, a B-Tree is ideal for finding all users between ages 20 and 30, while a Hash index would be better for finding a user by their exact email address.",
        explanation: "Proper indexing is the most critical factor in database query performance."
    },
    {
        id: 176,
        testId: 8,
        difficulty: 'expert',
        question: "What is the difference between 'black-box' and 'white-box' testing?",
        type: 'subjective',
        answer: "Black-box testing treats the system as a 'black box,' focusing only on inputs and outputs without any knowledge of the internal code or structure. It tests functionality from a user's perspective. White-box testing, on the other hand, is based on knowledge of the internal logic of the code. Testers use this knowledge to write tests that cover specific code paths, branches, and statements.",
        explanation: "Both are important. Black-box testing finds functional bugs, while white-box testing finds structural and implementation-specific bugs."
    },
    {
        id: 177,
        testId: 8,
        difficulty: 'expert',
        question: "How would you design a rate limiter for an API?",
        type: 'subjective',
        answer: "A common approach is the token bucket algorithm. Each user has a bucket with a certain capacity of tokens, and tokens are added to the bucket at a fixed rate. Each API request consumes a token. If the bucket is empty, the request is rejected. This can be implemented using an in-memory store like Redis, which provides atomic operations for incrementing/decrementing counts associated with a user ID.",
        explanation: "Rate limiting is crucial for API security, stability, and preventing abuse."
    },
    {
        id: 178,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'saga' pattern in distributed systems?",
        type: 'subjective',
        answer: "The saga pattern is a way to manage data consistency across multiple microservices without using distributed transactions. A saga is a sequence of local transactions. Each transaction updates the database in a single service and publishes an event to trigger the next transaction. If a local transaction fails, the saga executes a series of compensating transactions to undo the changes made by the preceding transactions.",
        explanation: "It's an event-driven approach to achieving transactional semantics in a distributed environment."
    },
    {
        id: 179,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'observability' and what are its three pillars?",
        type: 'subjective',
        answer: "Observability is the ability to measure a system's internal state by examining its external outputs. It's about being able to ask arbitrary questions about your system's behavior without having to ship new code. The three pillars of observability are: 1) Logs (detailed, timestamped records of events), 2) Metrics (aggregated numerical data over time, like request rate), and 3) Traces (a representation of a single request as it flows through all the services in a distributed system).",
        explanation: "Observability is crucial for debugging and understanding the performance of modern, complex systems."
    },
    {
        id: 180,
        testId: 8,
        difficulty: 'expert',
        question: "What is Infrastructure as Code (IaC) and what are its benefits?",
        type: 'subjective',
        answer: "IaC is the practice of managing and provisioning infrastructure (servers, databases, networks) through machine-readable definition files, rather than manual configuration. Tools like Terraform or CloudFormation are used. The benefits are significant: infrastructure can be version-controlled, tested, and automated. It allows for creating identical, repeatable environments, reducing configuration drift and human error.",
        explanation: "IaC brings the discipline and benefits of software development to infrastructure management."
    },
     // Test 9: 45 Questions (27 MCQ, 18 Subjective) - Expert
     {
        id: 181,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'Actor Model' of concurrency?",
        type: 'mcq',
        options: [
            'A design pattern for UI components',
            'A mathematical model of concurrent computation where 'actors' are the universal primitives, communicating through asynchronous messages',
            'A specific implementation of multithreading in Java',
            'A client-server networking model'
        ],
        answer: 'A mathematical model of concurrent computation where \'actors\' are the universal primitives, communicating through asynchronous messages',
        explanation: 'The Actor Model avoids shared state and locks, making it easier to build highly concurrent and fault-tolerant systems. Erlang and Akka are famous examples.'
    },
    {
        id: 182,
        testId: 9,
        difficulty: 'expert',
        question: "What problem does a 'service mesh' like Istio or Linkerd solve?",
        type: 'mcq',
        options: [
            'It helps with database migrations',
            'It provides a dedicated infrastructure layer to manage service-to-service communication, handling concerns like traffic management, security, and observability',
            'It is a tool for frontend state management',
            'It automates CI/CD pipelines'
        ],
        answer: 'It provides a dedicated infrastructure layer to manage service-to-service communication, handling concerns like traffic management, security, and observability',
        explanation: 'A service mesh abstracts the complexity of network communication away from the application code itself.'
    },
    {
        id: 183,
        testId: 9,
        difficulty: 'expert',
        question: "What is the primary function of a 'Bloom Filter'?",
        type: 'mcq',
        options: [
            'To sort data efficiently',
            'To encrypt data with perfect security',
            'To be a space-efficient, probabilistic data structure used to test whether an element is a member of a set, with a possibility of false positives',
            'To guarantee the uniqueness of elements in a set'
        ],
        answer: 'To be a space-efficient, probabilistic data structure used to test whether an element is a member of a set, with a possibility of false positives',
        explanation: 'It\'s used when a small chance of a false positive is acceptable in exchange for significant memory savings, e.g., checking for already-seen items in a web crawler.'
    },
    {
        id: 184,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS)?",
        type: 'mcq',
        options: [
            'A version of TLS with multiple layers of encryption',
            'A TLS handshake where only the client authenticates the server',
            'A process where both the client and server present certificates to authenticate each other',
            'A tool for managing TLS certificates'
        ],
        answer: 'A process where both the client and server present certificates to authenticate each other',
        explanation: 'mTLS is crucial for zero-trust networks and securing service-to-service communication.'
    },
    {
        id: 185,
        testId: 9,
        difficulty: 'expert',
        question: "Which of the following best describes 'eventual consistency'?",
        type: 'mcq',
        options: [
            'The system is always consistent',
            'A consistency model where, given no new updates, all replicas of a piece of data will eventually converge to the same value',
            'The system will eventually become inconsistent',
            'A model where data is only consistent during a specific event'
        ],
        answer: 'A consistency model where, given no new updates, all replicas of a piece of data will eventually converge to the same value',
        explanation: 'This model is often chosen in distributed systems that prioritize high availability and partition tolerance over strong consistency.'
    },
    {
        id: 186,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'distributed hash table' (DHT)?",
        type: 'mcq',
        options: [
            'A centralized database that uses hashing for keys',
            'A data structure used only in C++',
            'A decentralized distributed system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes',
            'A hashing algorithm for passwords'
        ],
        answer: 'A decentralized distributed system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes',
        explanation: 'DHTs are a core component of many peer-to-peer systems, like BitTorrent.'
    },
    {
        id: 187,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'Strangler Fig' pattern used for?",
        type: 'mcq',
        options: [
            'To debug memory leaks',
            'To incrementally migrate a legacy monolithic application to a microservices architecture',
            'To optimize database queries',
            'To design a user interface'
        ],
        answer: 'To incrementally migrate a legacy monolithic application to a microservices architecture',
        explanation: 'It involves gradually replacing pieces of the monolith with new services, routing traffic to them until the monolith is 'strangled' and can be retired.'
    },
    {
        id: 188,
        testId: 9,
        difficulty: 'expert',
        question: "What does the 'L' in the SOLID principles stand for?",
        type: 'mcq',
        options: [
            'Layered Architecture Principle',
            'Low Coupling Principle',
            'Liskov Substitution Principle',
            'Loose Typing Principle'
        ],
        answer: 'Liskov Substitution Principle',
        explanation: 'This principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.'
    },
    {
        id: 189,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'golden signal' for monitoring systems, according to Google's SRE book?",
        type: 'mcq',
        options: [
            'CPU Usage',
            'Latency',
            'Profitability',
            'Number of Deployments'
        ],
        answer: 'Latency',
        explanation: 'The four golden signals are Latency, Traffic, Errors, and Saturation. These provide a high-level overview of a service\'s health.'
    },
    {
        id: 190,
        testId: 9,
        difficulty: 'expert',
        question: "In CSS, what is the 'BFC' (Block Formatting Context)?",
        type: 'mcq',
        options: [
            'A block-level font container',
            'A part of a visual CSS rendering of a web page in which block-level boxes are laid out. It is an area that contains floats.',
            'A CSS variable',
            'A naming convention'
        ],
        answer: 'A part of a visual CSS rendering of a web page in which block-level boxes are laid out. It is an area that contains floats.',
        explanation: 'Creating a new BFC (e.g., with `display: flow-root`) is a way to solve layout issues like collapsing margins or containing floating elements.'
    },
    {
        id: 191,
        testId: 9,
        difficulty: 'expert',
        question: "What is the primary difference between `git merge` and `git rebase`?",
        type: 'mcq',
        options: [
            'They do the same thing',
            '`git merge` creates a new merge commit, preserving branch history, while `git rebase` rewrites commit history to create a linear sequence',
            '`git rebase` is safer than `git merge`',
            '`git merge` is for local branches, `git rebase` is for remote branches'
        ],
        answer: '`git merge` creates a new merge commit, preserving branch history, while `git rebase` rewrites commit history to create a linear sequence',
        explanation: 'Rebase results in a cleaner, linear history, but should not be used on public branches that others are working on.'
    },
    {
        id: 192,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'QUIC' and what is its role in HTTP/3?",
        type: 'mcq',
        options: [
            'A compression algorithm',
            'A new transport layer network protocol that serves as the foundation for HTTP/3, reducing latency and solving head-of-line blocking',
            'A security protocol',
            'A JavaScript framework'
        ],
        answer: 'A new transport layer network protocol that serves as the foundation for HTTP/3, reducing latency and solving head-of-line blocking',
        explanation: 'QUIC is built on top of UDP and is designed to make HTTP traffic faster and more reliable, especially on lossy networks.'
    },
    {
        id: 193,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        type: 'mcq',
        options: [
            'A type of database',
            'A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result',
            'An encryption algorithm',
            'A sorting algorithm'
        ],
        answer: 'A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result',
        explanation: 'CRDTs are crucial for building collaborative, real-time applications like Google Docs.'
    },
    {
        id: 194,
        testId: 9,
        difficulty: 'expert',
        question: "What is the purpose of 'tree shaking' in a modern JavaScript bundler?",
        type: 'mcq',
        options: [
            'To visualize the component tree',
            'To eliminate dead (unused) code from the final bundle by analyzing static `import` and `export` statements',
            'To reformat the code according to style guidelines',
            'To check for security vulnerabilities'
        ],
        answer: 'To eliminate dead (unused) code from the final bundle by analyzing static `import` and `export` statements',
        explanation: 'Tree shaking is a critical optimization for reducing the size of JavaScript bundles and improving application load times.'
    },
    {
        id: 195,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'tailwind CSS' and how does it differ from traditional CSS frameworks?",
        type: 'mcq',
        options: [
            'A component-based framework like Bootstrap',
            'A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup',
            'A CSS preprocessor like Sass',
            'A JavaScript library for styling'
        ],
        answer: 'A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup',
        explanation: 'Instead of pre-styled components like `.btn`, you compose designs with utilities like `bg-blue-500`, `px-4`, and `rounded`.'
    },
    {
        id: 196,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Server-Sent Events' (SSE)?",
        type: 'mcq',
        options: [
            'A bidirectional communication protocol',
            'A technology where a browser receives automatic updates from a server via a standard HTTP connection (unidirectional)',
            'An alias for WebSockets',
            'A database event system'
        ],
        answer: 'A technology where a browser receives automatic updates from a server via a standard HTTP connection (unidirectional)',
        explanation: 'SSE is simpler than WebSockets and is ideal for scenarios where the client only needs to receive data from the server, like a live news feed.'
    },
    {
        id: 197,
        testId: 9,
        difficulty: 'expert',
        question: "What is the `Same-Origin Policy` (SOP)?",
        type: 'mcq',
        options: [
            'A policy that ensures all servers are in the same data center',
            'A critical web browser security mechanism that restricts how a document or script from one origin can interact with a resource from another origin',
            'A CSS styling rule',
            'A rule for naming variables'
        ],
        answer: 'A critical web browser security mechanism that restricts how a document or script from one origin can interact with a resource from another origin',
        explanation: 'SOP is a cornerstone of web security, preventing malicious sites from reading sensitive data from other sites you may be logged into.'
    },
    {
        id: 198,
        testId: 9,
        difficulty: 'expert',
        question: "What does it mean for an operation to be 'atomic'?",
        type: 'mcq',
        options: [
            'The operation is very small',
            'The operation is part of an atomic bomb',
            'The operation is an indivisible and irreducible series of operations such that either all occur or none occur',
            'The operation is related to nuclear physics'
        ],
        answer: 'The operation is an indivisible and irreducible series of operations such that either all occur or none occur',
        explanation: 'Atomicity is the "A" in ACID, a key property of database transactions.'
    },
    {
        id: 199,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'lambda' function in languages like Python or Java?",
        type: 'mcq',
        options: [
            'A long, detailed function',
            'A small, anonymous function defined with the `lambda` keyword',
            'A function that runs on AWS Lambda',
            'A function used for mathematical calculations only'
        ],
        answer: 'A small, anonymous function defined with the `lambda` keyword',
        explanation: 'Lambda functions are useful for short, simple operations, especially when passed as arguments to higher-order functions.'
    },
    {
        id: 200,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'load balancer' and what are common load balancing algorithms?",
        type: 'mcq',
        options: [
            'A tool to balance the weight of servers',
            'A device that distributes network or application traffic across multiple servers. Common algorithms include Round Robin, Least Connections, and IP Hash.',
            'A database feature',
            'A frontend caching mechanism'
        ],
        answer: 'A device that distributes network or application traffic across multiple servers. Common algorithms include Round Robin, Least Connections, and IP Hash.',
        explanation: 'Load balancers are essential for achieving high availability and scalability.'
    },
    {
        id: 201,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'sharding' in a database context?",
        type: 'mcq',
        options: [
            'A way to encrypt data',
            'A type of horizontal partitioning where data is spread across multiple databases or servers',
            'A backup strategy',
            'A query optimization technique'
        ],
        answer: 'A type of horizontal partitioning where data is spread across multiple databases or servers',
        explanation: 'Sharding is a common technique for scaling out databases to handle massive amounts of data and traffic.'
    },
    {
        id: 202,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'n+1' query problem?",
        type: 'mcq',
        options: [
            'A security vulnerability',
            'A performance issue where an application makes one initial query to retrieve a list of items, and then makes 'n' additional queries to retrieve related data for each item',
            'A mathematical paradox',
            'An error that occurs when `n` is equal to -1'
        ],
        answer: 'A performance issue where an application makes one initial query to retrieve a list of items, and then makes \'n\' additional queries to retrieve related data for each item',
        explanation: 'This is a common performance bottleneck that can usually be solved by 'eager loading' the related data in the initial query.'
    },
    {
        id: 203,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'OAuth 2.0'?",
        type: 'mcq',
        options: [
            'An authentication protocol',
            'An authorization framework that enables a third-party application to obtain limited access to a user\'s resources without exposing their credentials',
            'A type of encryption',
            'A session management library'
        ],
        answer: 'An authorization framework that enables a third-party application to obtain limited access to a user\'s resources without exposing their credentials',
        explanation: 'OAuth 2.0 is the industry standard for delegated authorization.'
    },
    {
        id: 204,
        testId: 9,
        difficulty: 'expert',
        question: "What is the difference between 'authentication' and 'authorization'?",
        type: 'mcq',
        options: [
            'They are the same thing',
            'Authentication is verifying who a user is, while authorization is determining what they are allowed to do',
            'Authorization happens before authentication',
            'Authentication is for users, authorization is for services'
        ],
        answer: 'Authentication is verifying who a user is, while authorization is determining what they are allowed to do',
        explanation: 'You authenticate to get into the building, but you are authorized to enter only certain rooms.'
    },
    {
        id: 205,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'race condition'?",
        type: 'mcq',
        options: [
            'A bug in a racing game',
            'An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events',
            'A network performance issue',
            'A type of CPU'
        ],
        answer: 'An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events',
        explanation: 'Race conditions are a common and difficult problem in concurrent programming, often leading to corrupted data.'
    },
    {
        id: 206,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'two-phase commit' (2PC)?",
        type: 'mcq',
        options: [
            'A git workflow',
            'A distributed algorithm that coordinates all the processes in a distributed atomic transaction on whether to commit or abort',
            'A deployment strategy',
            'A security protocol'
        ],
        answer: 'A distributed algorithm that coordinates all the processes in a distributed atomic transaction on whether to commit or abort',
        explanation: 'While it guarantees atomicity, 2PC can be slow and is not fault-tolerant if the coordinator fails.'
    },
    {
        id: 207,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'vector clock'?",
        type: 'mcq',
        options: [
            'A physical clock used in vector graphics',
            'A data structure used in distributed systems to determine the partial causal ordering of events',
            'A CSS measurement unit',
            'A machine learning algorithm'
        ],
        answer: 'A data structure used in distributed systems to determine the partial causal ordering of events',
        explanation: 'Vector clocks are a mechanism for detecting causality violations and resolving conflicts in eventually consistent systems.'
    },
    {
        id: 208,
        testId: 9,
        difficulty: 'expert',
        question: "Explain the difference between optimistic and pessimistic locking in databases.",
        type: 'subjective',
        answer: "Pessimistic locking assumes conflicts are frequent and locks a resource before a transaction begins working with it, preventing other transactions from accessing it. This ensures consistency but can hurt concurrency. Optimistic locking assumes conflicts are rare. It does not lock resources, but before committing, it checks if the data has been modified by another transaction since it was read. If a conflict is found, the transaction is rolled back.",
        explanation: "Pessimistic locking is 'ask for permission,' while optimistic locking is 'ask for forgiveness.'"
    },
    {
        id: 209,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Chaos Engineering' and what is its purpose?",
        type: 'subjective',
        answer: "Chaos Engineering is the discipline of experimenting on a distributed system in order to build confidence in its capability to withstand turbulent conditions in production. It involves deliberately injecting controlled failures—like terminating servers, introducing network latency, or causing CPU spikes—to identify weaknesses and improve system resilience before those weaknesses cause real outages.",
        explanation: "The goal is to find failures before they find you. Netflix's 'Chaos Monkey' is a famous example."
    },
    {
        id: 210,
        testId: 9,
        difficulty: 'expert',
        question: "Describe the 'Saga' pattern for distributed transactions.",
        type: 'subjective',
        answer: "The Saga pattern is a way to manage data consistency across multiple microservices without using traditional distributed transactions. A saga is a sequence of local transactions where each transaction updates a single service and publishes an event to trigger the next one. If any local transaction fails, the saga executes a series of compensating transactions that undo the changes made by the preceding transactions, thereby maintaining consistency.",
        explanation: "It's an event-driven approach to achieving atomicity in a distributed environment."
    },
    {
        id: 211,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'Log-Structured Merge-Tree' (LSM-Tree)?",
        type: 'subjective',
        answer: "An LSM-Tree is a data structure optimized for write-heavy workloads, commonly used in NoSQL databases like Cassandra. It works by appending all writes to an in-memory table (memtable). When the memtable is full, it is flushed to disk as a sorted, immutable file (SSTable). In the background, these SSTables are periodically merged (compacted) to remove duplicates and deleted data. This approach avoids slow, random disk writes, making it highly performant for writes.",
        explanation: "This design favors fast write performance at the expense of more complex read operations."
    },
    {
        id: 212,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Domain-Driven Design' (DDD) and what is a 'ubiquitous language'?",
        type: 'subjective',
        answer: "Domain-Driven Design is an approach to software development that centers on creating a rich, expressive model of the core business domain. A key concept in DDD is the 'ubiquitous language,' which is a shared language developed by the team (developers, domain experts, stakeholders) to talk about the domain. This language is used in all communication and in the code itself to eliminate ambiguity and connect the software directly to the business concepts.",
        explanation: "DDD helps to manage complexity in large, enterprise systems."
    },
    {
        id: 213,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'end-to-end encryption' (E2EE)?",
        type: 'subjective',
        answer: "End-to-end encryption is a communication system where only the communicating users can read the messages. It prevents potential eavesdroppers, including the service provider itself, from accessing the cryptographic keys needed to decrypt the conversation. The server facilitates the connection but has no ability to read the message content. This ensures the highest level of confidentiality.",
        explanation: "Popular messaging apps like Signal and WhatsApp use E2EE."
    },
    {
        id: 214,
        testId: 9,
        difficulty: 'expert',
        question: "Explain 'Consistent Hashing' and its primary benefit.",
        type: 'subjective',
        answer: "Consistent hashing is a hashing technique where, when a hash table is resized, only a small number of keys need to be remapped. In a distributed system, this means when a server is added or removed, the number of objects that need to be relocated is minimized. This prevents a massive, system-wide reshuffling of data, making the system much more scalable and stable.",
        explanation: "It's essential for distributed caches and databases like DynamoDB and Cassandra."
    },
    {
        id: 215,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'thundering herd' problem and how can it be mitigated?",
        type: 'subjective',
        answer: "The 'thundering herd' problem occurs when a large number of processes or threads that are all waiting for the same event are awakened, but only one can actually handle it. This causes a massive spike in contention and context switching, degrading system performance. It can be mitigated by having only one process wait for the event and then wake up the others, or by using more modern kernel APIs that are designed to prevent this issue (e.g., Linux's `epoll`'s `EPOLLEXCLUSIVE` flag).",
        explanation: "This is a classic problem in high-concurrency systems."
    },
    {
        id: 216,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'publish-subscribe' (pub/sub) messaging pattern?",
        type: 'subjective',
        answer: "Pub/sub is a messaging pattern where senders (publishers) do not send messages directly to specific receivers (subscribers). Instead, they publish messages to topics or channels. Subscribers express interest in one or more topics and receive all messages published to those topics. This decouples the publisher and subscriber, allowing them to evolve independently and improving scalability.",
        explanation: "Systems like Apache Kafka, RabbitMQ, and Google Cloud Pub/Sub are built on this pattern."
    },
    {
        id: 217,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Test-Driven Development' (TDD)?",
        type: 'subjective',
        answer: "TDD is a software development process that follows a short, repetitive cycle: 1) Write a failing automated test case that defines a new function or improvement (Red). 2) Write the minimum amount of code necessary to pass the test (Green). 3) Refactor the code to improve its design and quality while ensuring the tests still pass (Refactor). This process helps ensure high test coverage and leads to more robust, modular code.",
        explanation: "The motto is 'Red, Green, Refactor'."
    },
    {
        id: 218,
        testId: 9,
        difficulty: 'expert',
        question: "What are 'serverless' functions and what are their trade-offs?",
        type: 'subjective',
        answer: "Serverless functions (like AWS Lambda or Google Cloud Functions) are a cloud computing model where you write and deploy code without managing any underlying server infrastructure. The main benefits are automatic scaling and a pay-per-use model. The trade-offs include potential vendor lock-in, statelessness (which can make some application designs difficult), and 'cold start' latency for infrequently used functions.",
        explanation: "Serverless is ideal for event-driven, short-lived tasks."
    },
    {
        id: 219,
        testId: 9,
        difficulty: 'expert',
        question: "How does 'blue-green deployment' work?",
        type: 'subjective',
        answer: "Blue-green deployment is a release strategy that reduces downtime and risk. You maintain two identical production environments: 'blue' (the current live version) and 'green' (the new version). You deploy and test the new version in the green environment. Once it's verified, you switch the router to send all live traffic to the green environment. This allows for instant, zero-downtime releases and a simple rollback strategy (just switch the router back to blue).",
        explanation: "It requires having double the infrastructure, which can be a cost consideration."
    },
    {
        id: 220,
        testId: 9,
        difficulty: 'expert',
        question: "Explain the difference between leader-based and leaderless database replication.",
        type: 'subjective',
        answer: "In leader-based replication, one replica (the leader or master) handles all write requests and propagates the changes to follower replicas. This provides strong consistency but the leader is a single point of failure. In leaderless replication, any replica can accept writes. This offers higher write availability and fault tolerance, but it makes consistency more complex to manage, often relying on quorums and read-repair mechanisms to resolve conflicts.",
        explanation: "Leader-based is simpler (e.g., PostgreSQL). Leaderless is more available (e.g., Cassandra)."
    },
    {
        id: 221,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'backpressure' in reactive streaming systems?",
        type: 'subjective',
        answer: "Backpressure is a flow control mechanism where a data consumer can signal to a data producer that it is becoming overwhelmed. This allows the consumer to request that the producer slow down or stop sending data temporarily, preventing buffer overflows and system instability. It allows the system to gracefully handle situations where the rate of production exceeds the rate of consumption.",
        explanation: "It's a crucial feature for building resilient, asynchronous data pipelines."
    },
    {
        id: 222,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'Raft' consensus algorithm?",
        type: 'subjective',
        answer: "Raft is a consensus algorithm designed to be more understandable than its predecessor, Paxos. It is used to manage a replicated log among a cluster of nodes. It works by electing a single leader, which is responsible for accepting client requests, appending them to its log, and replicating the log to follower nodes. This ensures that all nodes in the cluster agree on the same sequence of operations, providing strong consistency and fault tolerance.",
        explanation: "Raft is used in many modern distributed systems, including etcd and Consul."
    },
    {
        id: 223,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'subjective',
        answer: "CQRS is an architectural pattern that separates the models used for updating data (Commands) from the models used for reading data (Queries). This allows for independent optimization of the read and write sides of an application. For example, the write model might be a highly normalized relational schema, while the read model could be a denormalized view or a different type of database entirely, optimized for fast queries.",
        explanation: "CQRS is often used with Event Sourcing to build highly scalable and flexible systems."
    },
    {
        id: 224,
        testId: 9,
        difficulty: 'expert',
        question: "Explain what a 'service mesh' is and why it's useful.",
        type: 'subjective',
        answer: "A service mesh is a dedicated infrastructure layer for managing service-to-service communication in a microservices architecture. It works by injecting a 'sidecar' proxy next to each service instance. This proxy intercepts all network traffic, handling concerns like service discovery, load balancing, security (mTLS), traffic management (circuit breaking, retries), and observability (metrics, traces). This abstracts away complex networking logic from the application code, making services simpler and more resilient.",
        explanation: "Istio and Linkerd are popular service mesh implementations."
    },
    {
        id: 225,
        testId: 9,
        difficulty: 'expert',
        question: "How do JavaScript `async/await` and Promises relate to the event loop?",
        type: 'subjective',
        answer: "`async/await` and Promises are high-level abstractions for managing asynchronous operations that are powered by the event loop. When you `await` a Promise, the `async` function is paused, and its execution context is removed from the call stack. The underlying asynchronous operation (e.g., a fetch request) runs in the background. When the Promise settles, a task is placed in the microtask queue. The event loop prioritizes the microtask queue, so as soon as the call stack is clear, the async function's execution is resumed.",
        explanation: "They provide a synchronous-looking syntax for code that is fundamentally asynchronous and non-blocking."
    },
     // Test 10: 50 Questions (30 MCQ, 20 Subjective) - Expert
     {
        id: 226,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        type: 'mcq',
        options: [
            'A type of database',
            'A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result',
            'An encryption algorithm',
            'A sorting algorithm'
        ],
        answer: 'A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result',
        explanation: 'CRDTs are crucial for building collaborative, real-time applications like Google Docs.'
    },
    {
        id: 227,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'tail latency' and why is it important?",
        type: 'mcq',
        options: [
            'The latency of the last request in a sequence',
            'A measure of the latency experienced by the top 1% or 0.1% of slowest requests, which is important because in a microservices architecture, a user-facing operation can be slowed down by the slowest of its many backend dependencies',
            'The time it takes for a log tail to update',
            'A network hardware delay'
        ],
        answer: 'A measure of the latency experienced by the top 1% or 0.1% of slowest requests, which is important because in a microservices architecture, a user-facing operation can be slowed down by the slowest of its many backend dependencies',
        explanation: 'Focusing on average latency can hide significant problems that affect a meaningful number of users.'
    },
    {
        id: 228,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'idempotency' in the context of API design?",
        type: 'mcq',
        options: [
            'Ensuring an API is secure',
            'The property of an operation where making the same request multiple times has the same effect as making it once',
            'A performance optimization technique',
            'A way to version APIs'
        ],
        answer: 'The property of an operation where making the same request multiple times has the same effect as making it once',
        explanation: 'HTTP methods like GET, PUT, and DELETE are idempotent. This is crucial for building reliable systems where requests might be retried.'
    },
    {
        id: 229,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'gRPC'?",
        type: 'mcq',
        options: [
            'A REST API framework',
            'A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2',
            'A GraphQL client',
            'A database protocol'
        ],
        answer: 'A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2',
        explanation: 'gRPC is highly efficient and well-suited for communication between microservices.'
    },
    {
        id: 230,
        testId: 10,
        difficulty: 'expert',
        question: "In the context of CSS, what does `will-change` property do?",
        type: 'mcq',
        options: [
            'It prevents a property from being changed',
            'It animates a property change',
            'It hints to the browser about which properties are expected to change, allowing it to perform optimizations in advance',
            'It is an alias for `transform`'
        ],
        answer: 'It hints to the browser about which properties are expected to change, allowing it to perform optimizations in advance',
        explanation: 'Using `will-change` can improve animation performance by promoting the element to its own GPU layer, but it should be used sparingly.'
    },
    {
        id: 231,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary benefit of 'HTTP/2 multiplexing'?",
        type: 'mcq',
        options: [
            'It encrypts all traffic',
            'It allows multiple requests and responses to be sent in parallel over a single TCP connection, eliminating head-of-line blocking',
            'It compresses HTTP headers',
            'It is a caching mechanism'
        ],
        answer: 'It allows multiple requests and responses to be sent in parallel over a single TCP connection, eliminating head-of-line blocking',
        explanation: 'This is a major performance improvement over HTTP/1.1, which could only handle one request at a time per connection.'
    },
    {
        id: 232,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Kubernetes Operator'?",
        type: 'mcq',
        options: [
            'A person who operates a Kubernetes cluster',
            'A security policy for Kubernetes',
            'A method of packaging, deploying, and managing a Kubernetes application by extending the Kubernetes API with custom controllers',
            'A networking plugin for Kubernetes'
        ],
        answer: 'A method of packaging, deploying, and managing a Kubernetes application by extending the Kubernetes API with custom controllers',
        explanation: 'Operators encode human operational knowledge for managing stateful applications (like databases) on Kubernetes.'
    },
    {
        id: 233,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'semantic versioning' (SemVer)?",
        type: 'mcq',
        options: [
            'A way to add meaning to version numbers',
            'A versioning scheme (MAJOR.MINOR.PATCH) where MAJOR indicates breaking changes, MINOR adds functionality in a backward-compatible way, and PATCH is for backward-compatible bug fixes',
            'A versioning scheme based on dates',
            'A security scanning tool'
        ],
        answer: 'A versioning scheme (MAJOR.MINOR.PATCH) where MAJOR indicates breaking changes, MINOR adds functionality in a backward-compatible way, and PATCH is for backward-compatible bug fixes',
        explanation: 'SemVer provides a standard way to communicate the nature of changes in a new release.'
    },
    {
        id: 234,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'PaaS' (Platform as a Service)?",
        type: 'mcq',
        options: [
            'A service that provides virtual machines',
            'A cloud computing model that provides a platform for developers to build, run, and manage applications without dealing with the underlying infrastructure',
            'A complete software application delivered over the web',
            'A service for managing physical servers'
        ],
        answer: 'A cloud computing model that provides a platform for developers to build, run, and manage applications without dealing with the underlying infrastructure',
        explanation: 'PaaS abstracts away the operating system, servers, and networking. Heroku is a classic example.'
    },
    {
        id: 235,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'WebRTC'?",
        type: 'mcq',
        options: [
            'A new version of CSS',
            'A framework that enables real-time communication (video, voice, and generic data) to be sent directly between browsers and devices (peer-to-peer)',
            'A server-side rendering technology',
            'A security protocol'
        ],
        answer: 'A framework that enables real-time communication (video, voice, and generic data) to be sent directly between browsers and devices (peer-to-peer)',
        explanation: 'WebRTC is the technology that powers applications like Google Meet and Discord.'
    },
    {
        id: 236,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'garbage collection' in languages like Java or JavaScript?",
        type: 'mcq',
        options: [
            'A process of cleaning up unused files',
            'A form of automatic memory management that reclaims memory occupied by objects that are no longer in use by the program',
            'A debugging tool',
            'A code optimization technique'
        ],
        answer: 'A form of automatic memory management that reclaims memory occupied by objects that are no longer in use by the program',
        explanation: 'This frees the developer from manual memory management, but can sometimes introduce unpredictable pauses.'
    },
    {
        id: 237,
        testId: 10,
        difficulty: 'expert',
        question: "What does the 'ACID' acronym stand for in database transactions?",
        type: 'mcq',
        options: [
            'Atomicity, Concurrency, Integrity, Durability',
            'Availability, Consistency, Isolation, Durability',
            'Atomicity, Consistency, Isolation, Durability',
            'Association, Concurrency, Integrity, Distribution'
        ],
        answer: 'Atomicity, Consistency, Isolation, Durability',
        explanation: 'These four properties guarantee that database transactions are processed reliably.'
    },
    {
        id: 238,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'API versioning'?",
        type: 'mcq',
        options: [
            'A way to check the version of an API',
            'The practice of managing changes to an API to ensure that new changes do not break existing client applications',
            'A tool for documenting APIs',
            'A security feature for APIs'
        ],
        answer: 'The practice of managing changes to an API to ensure that new changes do not break existing client applications',
        explanation: 'This is often done by including a version number in the URL (e.g., `/v2/users`) or in a request header.'
    },
    {
        id: 239,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Jamstack' architecture?",
        type: 'mcq',
        options: [
            'A traditional server-rendered architecture',
            'A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup',
            'A backend framework for Java',
            'A mobile development stack'
        ],
        answer: 'A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup',
        explanation: 'Jamstack sites are often pre-rendered as static files and served from a CDN, making them very fast and secure.'
    },
    {
        id: 240,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Stateful' vs 'Stateless' architecture?",
        type: 'mcq',
        options: [
            'Stateful means the server stores client session data; stateless means each request must contain all necessary information',
            'Stateless applications cannot store any data',
            'Stateful applications are faster',
            'There is no difference'
        ],
        answer: 'Stateful means the server stores client session data; stateless means each request must contain all necessary information',
        explanation: 'Stateless architectures (a key principle of REST) are easier to scale horizontally, as any server can handle any request.'
    },
    {
        id: 241,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Singleton' design pattern?",
        type: 'mcq',
        options: [
            'A pattern for creating single-page applications',
            'A creational pattern that restricts the instantiation of a class to a single object',
            'A pattern for database connections',
            'A way to manage state in React'
        ],
        answer: 'A creational pattern that restricts the instantiation of a class to a single object',
        explanation: 'This is useful when exactly one object is needed to coordinate actions across a system, though it can be considered an anti-pattern as it introduces global state.'
    },
    {
        id: 242,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'dependency injection'?",
        type: 'mcq',
        options: [
            'A security vulnerability',
            'A design pattern in which a component\'s dependencies are provided to it from an external source rather than it creating them itself',
            'A way to manage `node_modules`',
            'A database management technique'
        ],
        answer: 'A design pattern in which a component\'s dependencies are provided to it from an external source rather than it creating them itself',
        explanation: 'This inverts the control, leading to more loosely coupled, modular, and testable code.'
    },
    {
        id: 243,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'polymorphism'?",
        type: 'mcq',
        options: [
            'A way to store many shapes',
            'A core concept of object-oriented programming that allows objects of different classes to be treated as objects of a common superclass',
            'A data encryption method',
            'A memory management technique'
        ],
        answer: 'A core concept of object-oriented programming that allows objects of different classes to be treated as objects of a common superclass',
        explanation: 'It allows for writing more generic and flexible code. Method overriding is a common way to achieve polymorphism.'
    },
    {
        id: 244,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'mutex'?",
        type: 'mcq',
        options: [
            'A type of database',
            'A synchronization primitive that provides 'mutual exclusion,' ensuring that only one thread can access a shared resource at a time',
            'A network hardware device',
            'An error in a program'
        ],
        answer: 'A synchronization primitive that provides \'mutual exclusion,\' ensuring that only one thread can access a shared resource at a time',
        explanation: 'Mutexes are a fundamental tool for preventing race conditions in multithreaded programming.'
    },
    {
        id: 245,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Big O notation' used for?",
        type: 'mcq',
        options: [
            'To measure the exact speed of an algorithm',
            'To describe the performance or complexity of an algorithm in terms of how its runtime or space requirements grow as the input size grows',
            'To write mathematical formulas in code',
            'To document code'
        ],
        answer: 'To describe the performance or complexity of an algorithm in terms of how its runtime or space requirements grow as the input size grows',
        explanation: 'It provides a high-level understanding of an algorithm\'s efficiency, such as O(n) for linear time or O(log n) for logarithmic time.'
    },
    {
        id: 246,
        testId: 10,
        difficulty: 'expert',
        question: "What is the `this` keyword in JavaScript?",
        type: 'mcq',
        options: [
            'It always refers to the global window object',
            'Its value is determined by how a function is called (the execution context)',
            'It refers to the function itself',
            'It is a reference to the `document` object'
        ],
        answer: 'Its value is determined by how a function is called (the execution context)',
        explanation: 'In a method, it\'s the object. In a simple function call, it can be the global object or `undefined` in strict mode. Arrow functions lexically bind `this`.'
    },
    {
        id: 247,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'JWT' (JSON Web Token)?",
        type: 'mcq',
        options: [
            'A session cookie',
            'A compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication and authorization',
            'An encryption standard',
            'A JavaScript object'
        ],
        answer: 'A compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication and authorization',
        explanation: 'A JWT is digitally signed, allowing the receiver to verify its authenticity.'
    },
    {
        id: 248,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Web Worker'?",
        type: 'mcq',
        options: [
            'A UI component for displaying user profiles',
            'A simple way for web content to run scripts in background threads, allowing for long-running, CPU-intensive tasks without blocking the main UI thread',
            'A security feature',
            'A CSS animation property'
        ],
        answer: 'A simple way for web content to run scripts in background threads, allowing for long-running, CPU-intensive tasks without blocking the main UI thread',
        explanation: 'Web Workers are essential for maintaining a responsive user interface during heavy computations.'
    },
    {
        id: 249,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Webpack'?",
        type: 'mcq',
        options: [
            'A JavaScript framework',
            'A static module bundler for modern JavaScript applications. It takes modules with dependencies and generates static assets representing those modules.',
            'A code editor',
            'A testing library'
        ],
        answer: 'A static module bundler for modern JavaScript applications. It takes modules with dependencies and generates static assets representing those modules.',
        explanation: 'Webpack is a fundamental tool in the modern frontend development toolchain, enabling features like code splitting, loaders, and plugins.'
    },
    {
        id: 250,
        testId: 10,
        difficulty: 'expert',
        question: "What is the `useMemo` hook in React?",
        type: 'mcq',
        options: [
            'A hook for managing component state',
            'A hook that memoizes the result of a function, re-computing it only when its dependencies change, to optimize performance',
            'A hook for handling side effects',
            'A hook for fetching data'
        ],
        answer: 'A hook that memoizes the result of a function, re-computing it only when its dependencies change, to optimize performance',
        explanation: 'It is used to prevent expensive calculations from being re-executed on every render.'
    },
    {
        id: 251,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Babel' in the context of JavaScript?",
        type: 'mcq',
        options: [
            'A package manager',
            'A JavaScript compiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backward-compatible version of JavaScript that can be run by older browsers',
            'A testing framework',
            'A linter'
        ],
        answer: 'A JavaScript compiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backward-compatible version of JavaScript that can be run by older browsers',
        explanation: 'Babel is a crucial tool that allows developers to use the latest JavaScript features while maintaining broad browser support.'
    },
    {
        id: 252,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'man-in-the-middle' (MITM) attack?",
        type: 'mcq',
        options: [
            'An attack where the attacker overloads a server',
            'An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other',
            'An attack that injects malicious scripts into a website',
            'An attack that tries to guess a user\'s password'
        ],
        answer: 'An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other',
        explanation: 'HTTPS is the primary defense against MITM attacks, as it encrypts the communication and verifies the server\'s identity.'
    },
    {
        id: 253,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'DNS' (Domain Name System)?",
        type: 'mcq',
        options: [
            'A protocol for sending email',
            'The system that translates human-readable domain names (like google.com) into machine-readable IP addresses',
            'A type of computer virus',
            'A file storage system'
        ],
        answer: 'The system that translates human-readable domain names (like google.com) into machine-readable IP addresses',
        explanation: 'DNS is often called the 'phonebook of the Internet' and is a fundamental component of how the web works.'
    },
    {
        id: 254,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Server-Side Rendering' (SSR)?",
        type: 'mcq',
        options: [
            'Rendering a web page entirely in the client\'s browser',
            'The process of rendering a client-side JavaScript application on the server and sending a fully rendered HTML page to the browser',
            'A technique for caching server responses',
            'A type of database'
        ],
        answer: 'The process of rendering a client-side JavaScript application on the server and sending a fully rendered HTML page to the browser',
        explanation: 'SSR improves initial page load performance (perceived speed) and is beneficial for SEO. Frameworks like Next.js specialize in this.'
    },
    {
        id: 255,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'container orchestration' tool like Kubernetes?",
        type: 'mcq',
        options: [
            'A tool for building container images',
            'A tool for automating the deployment, scaling, and management of containerized applications',
            'A monitoring tool for containers',
            'A container runtime like Docker'
        ],
        answer: 'A tool for automating the deployment, scaling, and management of containerized applications',
        explanation: 'Kubernetes manages the complexity of running applications across a cluster of machines, handling tasks like scheduling, networking, and service discovery.'
    },
    {
        id: 256,
        testId: 10,
        difficulty: 'expert',
        question: "How does 'public key cryptography' (asymmetric encryption) work?",
        type: 'subjective',
        answer: "Public key cryptography uses a pair of keys: a public key and a private key. The public key can be shared freely. A message encrypted with the public key can only be decrypted with the corresponding private key. This ensures confidentiality. It can also be used for digital signatures: a message signed with a private key can be verified by anyone with the public key, ensuring authenticity and non-repudiation.",
        explanation: "This is the foundation of modern secure communication, including HTTPS/TLS."
    },
    {
        id: 257,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'salting' in the context of password hashing and why is it important?",
        type: 'subjective',
        answer: "Salting is the process of adding a unique, randomly generated string (the salt) to each user's password before it is hashed. The salt is then stored along with the hash. This is important because it ensures that even if two users have the same password, their stored hashes will be different. This defeats 'rainbow table' attacks, which use precomputed hashes of common passwords.",
        explanation: "Without a unique salt for each password, security is significantly weakened."
    },
    {
        id: 258,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the difference between TCP and UDP.",
        type: 'subjective',
        answer: "TCP (Transmission Control Protocol) is a connection-oriented protocol that guarantees reliable, ordered delivery of data. It establishes a connection (handshake), numbers packets, and re-transmits lost packets. UDP (User Datagram Protocol) is a connectionless protocol that is faster but provides no guarantees about delivery, order, or duplication. TCP is used for applications like web browsing and email where reliability is key. UDP is used for applications like live video streaming or online gaming where speed is more critical than perfect reliability.",
        explanation: "TCP is like a registered letter; UDP is like a postcard."
    },
    {
        id: 259,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'DDoS' (Distributed Denial of Service) attack?",
        type: 'subjective',
        answer: "A DDoS attack is a malicious attempt to disrupt a service by overwhelming it with a flood of traffic from many different sources (a 'botnet'). The goal is to exhaust the target's resources (like bandwidth, CPU, or memory) so that it cannot respond to legitimate requests. Because the traffic comes from many distributed sources, it's difficult to block.",
        explanation: "Defenses involve services that can absorb and filter out the malicious traffic before it reaches the target server."
    },
    {
        id: 260,
        testId: 10,
        difficulty: 'expert',
        question: "What is a CI/CD pipeline?",
        type: 'subjective',
        answer: "A CI/CD pipeline is an automated workflow that developers use to build, test, and deploy their software. CI (Continuous Integration) is the practice of frequently merging code changes into a central repository, where automated builds and tests are run. CD (Continuous Delivery/Deployment) is the practice of automatically releasing the successfully tested code to a staging or production environment. The entire pipeline automates the path from code commit to production release.",
        explanation: "CI/CD is a core practice of DevOps, enabling faster and more reliable software delivery."
    },
    {
        id: 261,
        testId: 10,
        difficulty: 'expert',
        question: "Describe what happens, from a networking perspective, when you type a URL into your browser and press Enter.",
        type: 'subjective',
        answer: "1) **DNS Lookup:** The browser checks its cache for the domain's IP address. If not found, it queries a DNS server to resolve the domain name to an IP address. 2) **TCP Handshake:** The browser establishes a TCP connection with the server at that IP address using a three-way handshake (SYN, SYN-ACK, ACK). 3) **TLS Handshake:** For HTTPS, a TLS handshake occurs to establish a secure, encrypted channel. 4) **HTTP Request:** The browser sends an HTTP GET request to the server for the specified resource. 5) **HTTP Response:** The server processes the request and sends back an HTTP response, including the status code and the page's HTML content. 6) **Rendering:** The browser parses the HTML and begins rendering the page, making additional requests for assets like CSS, JS, and images.",
        explanation: "This is a fundamental and comprehensive question about how the web works."
    },
    {
        id: 262,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Infrastructure as Code' (IaC)?",
        type: 'subjective',
        answer: "IaC is the practice of managing and provisioning infrastructure (like servers, networks, and databases) using machine-readable definition files, rather than manual configuration. Tools like Terraform, Ansible, or AWS CloudFormation are used. This allows infrastructure to be version-controlled, tested, and automated, just like application code. It enables the creation of consistent, repeatable environments and reduces the risk of human error.",
        explanation: "IaC is a core principle of modern DevOps and cloud infrastructure management."
    },
    {
        id: 263,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the 'strangler fig' pattern for modernizing legacy systems.",
        type: 'subjective',
        answer: "The strangler fig pattern is a strategy for incrementally migrating a legacy monolithic application to a microservices architecture. It works by placing a proxy or router in front of the monolith. New functionality is built as a separate microservice. The proxy then intercepts requests for that functionality and routes them to the new service instead of the monolith. Over time, more and more functionality is 'strangled' out of the monolith and replaced by new services, until the monolith becomes small enough to be retired completely.",
        explanation: "This is a gradual, lower-risk approach compared to a 'big bang' rewrite."
    },
    {
        id: 264,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'service mesh' and what problems does it solve?",
        type: 'subjective',
        answer: "A service mesh is a dedicated infrastructure layer for managing service-to-service communication in a microservices architecture. It uses a 'sidecar' proxy deployed alongside each service to handle tasks like service discovery, load balancing, security (mTLS), traffic management (retries, circuit breakers), and observability (metrics, traces). This abstracts away complex networking logic from the application code, making services simpler, more resilient, and more secure.",
        explanation: "Istio and Linkerd are popular service mesh implementations."
    },
    {
        id: 265,
        testId: 10,
        difficulty: 'expert',
        question: "Explain database 'isolation levels' and the problems they prevent.",
        type: 'subjective',
        answer: "Isolation levels control the degree to which transactions are isolated from each other. They prevent concurrency issues like: 1) **Dirty Reads:** Reading uncommitted data from another transaction. 2) **Non-Repeatable Reads:** Getting different values for the same row if you read it multiple times in one transaction. 3) **Phantom Reads:** Seeing new rows appear in a query that were inserted by another transaction. Levels like `READ COMMITTED`, `REPEATABLE READ`, and `SERIALIZABLE` offer progressively stronger guarantees at the cost of reduced concurrency.",
        explanation: "Choosing the right isolation level is a trade-off between performance and data consistency."
    },
    {
        id: 266,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'event sourcing' as an architectural pattern?",
        type: 'subjective',
        answer: "Event sourcing is a pattern where all changes to application state are stored as a sequence of immutable events. Instead of storing the current state of an entity, you store the log of events that led to that state. The current state can be rebuilt at any time by replaying the events. This provides a full audit log, makes it easier to debug issues, and allows for powerful temporal queries (e.g., 'what was the state of this user a week ago?').",
        explanation: "It is often used with the CQRS pattern to build complex, scalable systems."
    },
    {
        id: 267,
        testId: 10,
        difficulty: 'expert',
        question: "How do you handle secrets management in a modern application?",
        type: 'subjective',
        answer: "Secrets like API keys and database credentials should never be stored in source code. Modern best practices involve using a dedicated secrets management tool like HashiCorp Vault, AWS Secrets Manager, or Google Secret Manager. These tools provide centralized storage, fine-grained access control, auditing, and dynamic secret rotation. Applications retrieve secrets at runtime through a secure API call or via injected environment variables in a secure environment like Kubernetes.",
        explanation: "Proper secrets management is a critical aspect of application security."
    },
    {
        id: 268,
        testId: 10,
        difficulty: 'expert',
        question: "Explain 'Chaos Engineering'.",
        type: 'subjective',
        answer: "Chaos Engineering is the discipline of experimenting on a distributed system in production to build confidence in its ability to withstand turbulent conditions. It involves proactively and deliberately injecting failures (like terminating servers, adding network latency, or causing CPU spikes) in a controlled manner. The goal is to identify and fix systemic weaknesses before they can cause a user-facing outage.",
        explanation: "This practice, pioneered by Netflix, aims to find failures before they find you."
    },
    {
        id: 269,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'GraphQL' and how does it compare to 'REST'?",
        type: 'subjective',
        answer: "GraphQL is a query language for APIs. Unlike REST, which has multiple endpoints for different resources, GraphQL typically has a single endpoint. The client sends a query specifying exactly the data it needs, and the server responds with only that data. This solves the problems of over-fetching (getting too much data) and under-fetching (needing to make multiple requests) that can occur with REST. However, it can make server-side caching and rate-limiting more complex.",
        explanation: "GraphQL gives more power to the client, while REST is simpler and leverages HTTP standards more directly."
    },
    {
        id: 270,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'blue-green deployment'?",
        type: 'subjective',
        answer: "Blue-green deployment is a release strategy that reduces downtime and risk. It involves maintaining two identical production environments: 'blue' (the current live version) and 'green' (the new version). The new version is deployed and tested in the green environment. Once it's fully verified, the router is switched to direct all live traffic to the green environment. The blue environment is kept on standby for a quick rollback if needed. This allows for zero-downtime releases.",
        explanation: "The main trade-off is the cost of maintaining double the infrastructure."
    },
    {
        id: 271,
        testId: 10,
        difficulty: 'expert',
        question: "Explain 'optimistic' vs 'pessimistic' locking.",
        type: 'subjective',
        answer: "Pessimistic locking assumes conflicts are likely and prevents them by acquiring a lock on a resource before modification, blocking other transactions. Optimistic locking assumes conflicts are rare. It allows transactions to proceed without locks but checks for conflicts (e.g., using a version number or timestamp) before committing. If a conflict is detected, the transaction is typically rolled back and retried. Pessimistic locking prioritizes consistency, while optimistic locking prioritizes concurrency.",
        explanation: "Pessimistic locking is 'ask for permission'; optimistic locking is 'ask for forgiveness'."
    },
    {
        id: 272,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'TDD' (Test-Driven Development)?",
        type: 'subjective',
        answer: "TDD is a software development process that follows a short, repetitive cycle: 1) **Red:** Write a failing automated test case that defines a new function or improvement. 2) **Green:** Write the minimum amount of code necessary to make the test pass. 3) **Refactor:** Clean up the new code to improve its design and quality, ensuring all tests continue to pass. This process encourages simple design and ensures high test coverage from the start.",
        explanation: "The core mantra of TDD is 'Red, Green, Refactor'."
    },
    {
        id: 273,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS) and where is it used?",
        type: 'subjective',
        answer: "Mutual TLS is an authentication method where both parties in a connection, the client and the server, authenticate each other's identity using X.509 certificates. This is different from standard TLS where only the client authenticates the server. mTLS is commonly used to secure service-to-service communication within a trusted environment, like a microservices architecture managed by a service mesh, to ensure that only authorized services can communicate with each other.",
        explanation: "It provides strong, certificate-based, two-way authentication."
    },
    {
        id: 274,
        testId: 10,
        difficulty: 'expert',
        question: "How do 'WebSockets' differ from traditional 'HTTP' requests?",
        type: 'subjective',
        answer: "HTTP is a unidirectional, request-response protocol. The client sends a request, and the server sends a response. WebSockets provide a full-duplex, bidirectional communication channel over a single, long-lived TCP connection. After an initial handshake, either the client or the server can send data at any time. This makes WebSockets ideal for real-time applications like live chat, online gaming, and financial data streams, avoiding the overhead of repeated HTTP polling.",
        explanation: "HTTP is like sending letters, while WebSockets are like having a continuous phone call."
    },
    {
        id: 275,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between a 'container' (like Docker) and a 'virtual machine' (VM)?",
        type: 'subjective',
        answer: "A VM virtualizes the hardware, running a full guest operating system on top of a hypervisor. A container virtualizes the operating system, allowing multiple containers to run on a single host OS kernel. This makes containers much more lightweight, faster to start, and less resource-intensive than VMs. VMs provide stronger isolation, while containers offer better efficiency and portability.",
        explanation: "Containers are like apartments in a building (sharing plumbing), while VMs are like separate houses on a street (each with its own plumbing)."
    }
  ],
  backend: [
    // Test 1: 5 Questions (3 MCQ, 2 Subjective) - Easy
    {
      "id": 276,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is an API?",
      "type": "mcq",
      "options": [
        "A programming language",
        "A database",
        "A set of rules for building and interacting with software applications",
        "A server"
      ],
      "answer": "A set of rules for building and interacting with software applications",
      "explanation": "An API (Application Programming Interface) defines how different software components should interact."
    },
    {
      "id": 277,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which HTTP method is typically used to retrieve data from a server?",
      "type": "mcq",
      "options": ["POST", "GET", "DELETE", "PUT"],
      "answer": "GET",
      "explanation": "The GET method is used to request data from a specified resource."
    },
    {
      "id": 278,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a database?",
      "type": "mcq",
      "options": [
        "A server",
        "A programming language",
        "An organized collection of data, generally stored and accessed electronically",
        "A web browser"
      ],
      "answer": "An organized collection of data, generally stored and accessed electronically",
      "explanation": "Databases are used to store and manage data for applications."
    },
    {
      "id": 279,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a server in the context of backend development?",
      "type": "subjective",
      "answer": "A server is a computer program or a device that provides functionality for other programs or devices, called clients. It processes requests from clients, such as fetching data from a database or running application logic, and returns a response.",
      "explanation": "Servers are the backbone of the backend, handling all the business logic and data management."
    },
    {
      "id": 280,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the difference between a relational (SQL) and a non-relational (NoSQL) database?",
      "type": "subjective",
      "answer": "A relational database (like MySQL) organizes data into tables with rows and columns and uses a structured query language (SQL). A non-relational database (like MongoDB) uses a variety of data models, such as document, key-value, or graph, and is more flexible in its schema.",
      "explanation": "The choice depends on the application's needs for structure, scalability, and flexibility."
    },
    // Test 2: 10 Questions (6 MCQ, 4 Subjective) - Easy
    {
      "id": 281,
      "testId": 2,
      "difficulty": "easy",
      "question": "Which of the following is a backend programming language?",
      "type": "mcq",
      "options": ["HTML", "CSS", "Node.js (JavaScript)", "React"],
      "answer": "Node.js (JavaScript)",
      "explanation": "Node.js allows JavaScript to be run on the server side."
    },
    {
      "id": 282,
      "testId": 2,
      "difficulty": "easy",
      "question": "What does the HTTP status code `200 OK` mean?",
      "type": "mcq",
      "options": ["The request failed", "The resource was not found", "The request has succeeded", "Access to the resource is forbidden"],
      "answer": "The request has succeeded",
      "explanation": "2xx status codes indicate success. `200 OK` is the standard response for successful HTTP requests."
    },
    {
      "id": 283,
      "testId": 2,
      "difficulty": "easy",
      "question": "What does SQL stand for?",
      "type": "mcq",
      "options": ["Structured Query Language", "Simple Query Language", "Standardized Query Language", "Server Query Language"],
      "answer": "Structured Query Language",
      "explanation": "SQL is the standard language for managing and querying relational databases."
    },
    {
      "id": 284,
      "testId": 2,
      "difficulty": "easy",
      "question": "Which HTTP method is used to create a new resource on a server?",
      "type": "mcq",
      "options": ["GET", "POST", "UPDATE", "CREATE"],
      "answer": "POST",
      "explanation": "POST is used to send data to a server to create a new resource."
    },
    {
      "id": 285,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is a 'route' in a web framework?",
      "type": "mcq",
      "options": ["A path to a file on the server", "A URL endpoint and the HTTP method it accepts", "A database connection string", "A CSS class"],
      "answer": "A URL endpoint and the HTTP method it accepts",
      "explanation": "Routes define how an application responds to a client request to a particular endpoint."
    },
    {
      "id": 286,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is authentication?",
      "type": "mcq",
      "options": ["Determining what a user can do", "Verifying the identity of a user", "Logging user actions", "Encrypting data"],
      "answer": "Verifying the identity of a user",
      "explanation": "Authentication is the process of proving that a user is who they claim to be."
    },
    {
      "id": 287,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is authorization?",
      "type": "subjective",
      "answer": "Authorization is the process of determining if an authenticated user has permission to access a specific resource or perform a specific action. It happens after authentication.",
      "explanation": "Authentication asks 'Who are you?', while authorization asks 'What are you allowed to do?'"
    },
    {
      "id": 288,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is an environment variable and why is it used?",
      "type": "subjective",
      "answer": "An environment variable is a variable whose value is set outside the program, typically in the operating system. They are used to store configuration settings like database credentials or API keys, keeping them separate from the application code for better security and flexibility.",
      "explanation": "This allows the same code to be run in different environments (development, production) with different settings."
    },
    {
      "id": 289,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is a 'port' in networking?",
      "type": "subjective",
      "answer": "A port is a number used to identify a specific process or service on a computer. When a request is sent to a server, it's addressed to an IP address and a port number, allowing the server to direct the request to the correct application (e.g., a web server on port 80 or 443).",
      "explanation": "It acts like an apartment number for a specific application on a computer."
    },
    {
      "id": 290,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is JSON?",
      "type": "subjective",
      "answer": "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. It's often used to send data between a server and a web application as an alternative to XML.",
      "explanation": "It's the most common format for data in REST APIs."
    },
    // Test 3: 15 Questions (9 MCQ, 6 Subjective) - Medium
    {
      "id": 291,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is a RESTful API?",
      "type": "mcq",
      "options": [
        "An API that is very fast",
        "An API that uses a specific programming language",
        "An architectural style for designing networked applications",
        "An API that only uses the POST method"
      ],
      "answer": "An architectural style for designing networked applications",
      "explanation": "REST (Representational State Transfer) is a set of constraints for building scalable web services."
    },
    {
      "id": 292,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is middleware in the context of a web framework like Express.js?",
      "type": "mcq",
      "options": [
        "A database",
        "A function that has access to the request, response, and the next middleware function",
        "A frontend component",
        "A templating engine"
      ],
      "answer": "A function that has access to the request, response, and the next middleware function",
      "explanation": "Middleware functions can execute code, make changes to the request and the response objects, and end the request-response cycle."
    },
    {
      "id": 293,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is the purpose of indexing in a database?",
      "type": "mcq",
      "options": [
        "To back up the database",
        "To speed up the retrieval of rows from a table",
        "To encrypt the data",
        "To delete data"
      ],
      "answer": "To speed up the retrieval of rows from a table",
      "explanation": "An index creates a data structure that makes searching for specific values much faster."
    },
    {
      "id": 294,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is an ORM?",
      "type": "mcq",
      "options": [
        "A type of database",
        "A technique for converting data between incompatible type systems in object-oriented programming languages",
        "A network protocol",
        "A server-side language"
      ],
      "answer": "A technique for converting data between incompatible type systems in object-oriented programming languages",
      "explanation": "ORM (Object-Relational Mapping) libraries like Sequelize or TypeORM allow you to interact with your database using objects in your preferred programming language."
    },
    {
      "id": 295,
      "testId": 3,
      "difficulty": "medium",
      "question": "Which HTTP status code indicates that a resource was not found?",
      "type": "mcq",
      "options": ["200", "404", "500", "301"],
      "answer": "404",
      "explanation": "A 404 Not Found error means the server could not find the requested resource."
    },
    {
      "id": 296,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is hashing in the context of password security?",
      "type": "mcq",
      "options": [
        "Encrypting a password",
        "Storing the password in plain text",
        "Transforming a password into a fixed-size string of characters, which is one-way",
        "Compressing a password"
      ],
      "answer": "Transforming a password into a fixed-size string of characters, which is one-way",
      "explanation": "Hashing is used to securely store passwords, as the original password cannot be easily recovered from the hash."
    },
    {
      "id": 297,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is the difference between `PUT` and `POST` HTTP methods?",
      "type": "mcq",
      "options": [
        "They are the same",
        "POST is for creating and PUT is for updating",
        "PUT is idempotent, POST is not",
        "Both B and C"
      ],
      "answer": "Both B and C",
      "explanation": "POST is generally used to create a new resource as a subordinate of another. PUT is used to create or replace a resource at a specific URL. Idempotent means multiple identical requests have the same effect as a single request."
    },
    {
      "id": 298,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is a session?",
      "type": "mcq",
      "options": [
        "A single request from a client",
        "A way to store information about a user across multiple requests",
        "A database table",
        "A type of cookie"
      ],
      "answer": "A way to store information about a user across multiple requests",
      "explanation": "Sessions allow servers to maintain state for a user's interaction with a web application."
    },
    {
      "id": 299,
      "testId": 3,
      "difficulty": "medium",
      "question": "What does it mean for a web service to be 'stateless'?",
      "type": "mcq",
      "options": [
        "It cannot store any data",
        "It doesn't store any client session data on the server",
        "It always returns the same response",
        "It is not running"
      ],
      "answer": "It doesn't store any client session data on the server",
      "explanation": "In a stateless architecture, each request from a client must contain all the information needed by the server to fulfill it. This is a key principle of REST."
    },
    {
      "id": 300,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is a 'foreign key' in a relational database?",
      "type": "subjective",
      "answer": "A foreign key is a field (or collection of fields) in one table that uniquely identifies a row of another table. It's used to establish and enforce a link between the data in two tables. The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.",
      "explanation": "Foreign keys are essential for maintaining data integrity and relationships in a relational database."
    },
    {
      "id": 301,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is a JWT (JSON Web Token)?",
      "type": "subjective",
      "answer": "A JWT is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.",
      "explanation": "JWTs are a common way to handle authentication and authorization in modern web applications."
    },
    {
      "id": 302,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is the N+1 problem in the context of ORMs?",
      "type": "subjective",
      "answer": "The N+1 problem occurs when an application makes N additional database queries to fetch the same data that could have been retrieved in a single query. For example, fetching a list of N authors and then making a separate query for each author's books, resulting in N+1 total queries. This can be solved by 'eager loading' the related data in the initial query.",
      "explanation": "This is a common performance bottleneck when using ORMs if not careful."
    },
    {
      "id": 303,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is CORS (Cross-Origin Resource Sharing)?",
      "type": "subjective",
      "answer": "CORS is a browser security feature that restricts cross-origin HTTP requests initiated from scripts. By default, browsers block these requests. To allow them, the server at the requested origin must include specific CORS headers (like `Access-Control-Allow-Origin`) in its response.",
      "explanation": "This prevents malicious sites from making unauthorized requests to your APIs on behalf of a user."
    },
    {
      "id": 304,
      "testId": 3,
      "difficulty": "medium",
      "question": "Explain the concept of 'salting' passwords.",
      "type": "subjective",
      "answer": "Salting is a security technique where a unique, randomly generated string (the salt) is added to each user's password before it is hashed. The salt is then stored along with the hashed password. This ensures that even if two users have the same password, their hashes will be different, which defeats rainbow table attacks.",
      "explanation": "Salting is a critical step in modern password storage."
    },
    {
      "id": 305,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is the purpose of an API Gateway?",
      "type": "subjective",
      "answer": "An API Gateway is a server that acts as a single entry point into a system for all clients. It can handle tasks such as request routing, composition, authentication, rate limiting, and logging. In a microservices architecture, it simplifies the client by providing a single endpoint to communicate with, instead of many individual services.",
      "explanation": "API Gateways are a common pattern for managing and securing access to backend services."
    },
    // Test 4: 20 Questions (12 MCQ, 8 Subjective) - Medium
    {
      "id": 306,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a 'race condition'?",
      "type": "mcq",
      "options": [
        "A performance bug",
        "A bug that occurs when the timing of events affects the correctness of a system",
        "A network error",
        "A database error"
      ],
      "answer": "A bug that occurs when the timing of events affects the correctness of a system",
      "explanation": "Race conditions happen in multi-threaded or distributed systems when shared resources are accessed without proper synchronization."
    },
    {
      "id": 307,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is the purpose of caching?",
      "type": "mcq",
      "options": [
        "To store data permanently",
        "To store frequently accessed data in a temporary, fast-access layer",
        "To encrypt data",
        "To log user actions"
      ],
      "answer": "To store frequently accessed data in a temporary, fast-access layer",
      "explanation": "Caching improves performance by reducing the need to fetch data from a slower data store, like a database or a remote API."
    },
    {
      "id": 308,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a load balancer?",
      "type": "mcq",
      "options": [
        "A database",
        "A server that distributes network traffic across multiple servers",
        "A caching server",
        "A firewall"
      ],
      "answer": "A server that distributes network traffic across multiple servers",
      "explanation": "Load balancers are used to improve the reliability and scalability of applications by preventing any single server from becoming a bottleneck."
    },
    {
      "id": 309,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is 'normalization' in the context of relational databases?",
      "type": "mcq",
      "options": [
        "A process of organizing columns and tables to minimize data redundancy",
        "A process of backing up the database",
        "A process of encrypting data",
        "A process of deleting old data"
      ],
      "answer": "A process of organizing columns and tables to minimize data redundancy",
      "explanation": "Normalization helps to improve data integrity and reduce anomalies during data modification."
    },
    {
      "id": 310,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a 'schema' in the context of databases?",
      "type": "mcq",
      "options": [
        "A query language",
        "A backup of the database",
        "The structure of a database, described in a formal language",
        "A database user"
      ],
      "answer": "The structure of a database, described in a formal language",
      "explanation": "The schema defines the tables, columns, data types, and relationships in a database."
    },
    {
      "id": 311,
      "testId": 4,
      "difficulty": "medium",
      "question": "Which of these is a popular in-memory data store, often used for caching?",
      "type": "mcq",
      "options": ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
      "answer": "Redis",
      "explanation": "Redis is known for its high performance and is commonly used as a cache, message broker, and session store."
    },
    {
      "id": 312,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is containerization (e.g., Docker)?",
      "type": "mcq",
      "options": [
        "A way to build frontend applications",
        "A method of running applications in isolated environments",
        "A type of database",
        "A programming language"
      ],
      "answer": "A method of running applications in isolated environments",
      "explanation": "Containers package an application and its dependencies, ensuring it runs consistently across different environments."
    },
    {
      "id": 313,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a 'database transaction'?",
      "type": "mcq",
      "options": [
        "A single query",
        "A sequence of operations performed as a single logical unit of work",
        "A backup of the database",
        "A database user"
      ],
      "answer": "A sequence of operations performed as a single logical unit of work",
      "explanation": "A transaction ensures that either all operations succeed, or none of them do (atomicity)."
    },
    {
      "id": 314,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is the purpose of a `.gitignore` file?",
      "type": "mcq",
      "options": [
        "To list files that Git should ignore",
        "To configure Git",
        "To store Git credentials",
        "To list project dependencies"
      ],
      "answer": "To list files that Git should ignore",
      "explanation": "This is used to prevent generated files, like dependencies or build artifacts, from being committed to the repository."
    },
    {
      "id": 315,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is 'scalability' in the context of backend systems?",
      "type": "mcq",
      "options": [
        "The speed of the application",
        "The security of the application",
        "The ability of the system to handle a growing amount of work",
        "The usability of the application"
      ],
      "answer": "The ability of the system to handle a growing amount of work",
      "explanation": "Scalability can be achieved by scaling vertically (adding more resources to a single server) or horizontally (adding more servers)."
    },
    {
      "id": 316,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is the purpose of a reverse proxy?",
      "type": "mcq",
      "options": [
        "To hide the client's IP address",
        "To retrieve resources on behalf of a client from one or more servers",
        "To connect to a database",
        "To run frontend code"
      ],
      "answer": "To retrieve resources on behalf of a client from one or more servers",
      "explanation": "Reverse proxies can provide load balancing, caching, and security by sitting in front of web servers."
    },
    {
      "id": 317,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a 'webhook'?",
      "type": "mcq",
      "options": [
        "A frontend JavaScript hook",
        "A way for an app to provide other applications with real-time information",
        "A type of database query",
        "A security vulnerability"
      ],
      "answer": "A way for an app to provide other applications with real-time information",
      "explanation": "A webhook is an HTTP callback that sends a notification to a URL when an event occurs, like a push to a Git repository."
    },
    {
      "id": 318,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a microservice architecture?",
      "type": "subjective",
      "answer": "A microservice architecture is a method of developing software applications as a suite of independently deployable, small, modular services. Each service runs its own process and communicates with other services through a well-defined, lightweight mechanism, such as an HTTP-based API.",
      "explanation": "This approach allows for greater flexibility, scalability, and easier maintenance compared to a monolithic architecture."
    },
    {
      "id": 319,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is the difference between TCP and UDP?",
      "type": "subjective",
      "answer": "TCP (Transmission Control Protocol) is a connection-oriented protocol that guarantees reliable, ordered delivery of data. UDP (User Datagram Protocol) is a connectionless protocol that is faster but does not guarantee delivery or order. TCP is used for applications like web browsing and email, while UDP is used for applications like video streaming and online gaming where speed is more important than perfect reliability.",
      "explanation": "This is a fundamental networking concept."
    },
    {
      "id": 320,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a DDoS attack?",
      "type": "subjective",
      "answer": "A Distributed Denial-of-Service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic. The traffic comes from many different sources, making it difficult to stop.",
      "explanation": "This is a common security threat for backend services."
    },
    {
      "id": 321,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is idempotency in the context of HTTP methods?",
      "type": "subjective",
      "answer": "An HTTP method is idempotent if an identical request can be made once or multiple times in a row with the same effect, while leaving the server in the same state. GET, PUT, and DELETE methods are idempotent. POST is not idempotent, as making the same POST request multiple times will typically create multiple new resources.",
      "explanation": "This is an important concept for designing robust and predictable APIs."
    },
    {
      "id": 322,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a thread in programming?",
      "type": "subjective",
      "answer": "A thread is the smallest sequence of programmed instructions that can be managed independently by a scheduler. Most programming languages can run on a single thread (like JavaScript in Node.js) or multiple threads. Multithreading allows for parallel execution of tasks, but introduces complexity related to synchronization and data sharing.",
      "explanation": "Understanding threads is key to understanding concurrency."
    },
    {
      "id": 323,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a DNS (Domain Name System)?",
      "type": "subjective",
      "answer": "DNS is the phonebook of the Internet. Humans access information online through domain names, like google.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.",
      "explanation": "It's a fundamental part of how the internet works."
    },
    {
      "id": 324,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is 'long polling'?",
      "type": "subjective",
      "answer": "Long polling is a technique where the client makes a request to the server, and the server holds the request open until new data is available. Once data is available, the server sends a response, and the client immediately makes another request. It's a way to simulate a push mechanism from server to client without using WebSockets.",
      "explanation": "It's more efficient than traditional polling, but less efficient than WebSockets."
    },
    {
      "id": 325,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a CI/CD pipeline?",
      "type": "subjective",
      "answer": "A CI/CD pipeline is a series of steps that must be performed in order to deliver a new version of software. CI (Continuous Integration) is the practice of automating the integration of code changes from multiple contributors into a single software project. CD (Continuous Delivery/Deployment) is the practice of automating the release of that software to production.",
      "explanation": "CI/CD is a core practice of modern DevOps."
    },
    // Test 5: 25 Questions (15 MCQ, 10 Subjective) - Medium
    {
      "id": 326,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is GraphQL?",
      "type": "mcq",
      "options": [
        "A database language",
        "A query language for APIs and a runtime for fulfilling those queries with your existing data",
        "A frontend framework",
        "A type of server"
      ],
      "answer": "A query language for APIs and a runtime for fulfilling those queries with your existing data",
      "explanation": "GraphQL allows clients to request exactly the data they need, making it an alternative to REST."
    },
    {
      "id": 327,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is a 'blocking' operation in a backend application?",
      "type": "mcq",
      "options": [
        "An operation that is very fast",
        "An operation that prevents other code from running until it completes",
        "An operation that runs in the background",
        "An operation that returns a promise"
      ],
      "answer": "An operation that prevents other code from running until it completes",
      "explanation": "In single-threaded environments like Node.js, blocking operations (like synchronous file I/O) can severely impact performance."
    },
    {
      "id": 328,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is 'sharding' in the context of databases?",
      "type": "mcq",
      "options": [
        "Backing up a database",
        "A type of database indexing",
        "Horizontally partitioning data across multiple databases",
        "Encrypting a database"
      ],
      "answer": "Horizontally partitioning data across multiple databases",
      "explanation": "Sharding is a technique for scaling databases by distributing a single logical database across a cluster of machines."
    },
    {
      "id": 329,
      "testId": 5,
      "difficulty": "medium",
      "question": "Which of these is NOT a principle of REST?",
      "type": "mcq",
      "options": ["Stateless", "Client-Server", "Layered System", "Tight Coupling"],
      "answer": "Tight Coupling",
      "explanation": "REST APIs are designed to be loosely coupled, allowing the client and server to evolve independently."
    },
    {
      "id": 330,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is a 'message queue' (e.g., RabbitMQ, Kafka)?",
      "type": "mcq",
      "options": [
        "A database",
        "A component that allows different parts of a system to communicate asynchronously",
        "A type of server",
        "A caching system"
      ],
      "answer": "A component that allows different parts of a system to communicate asynchronously",
      "explanation": "Message queues are used to decouple services and manage workloads in distributed systems."
    },
    {
      "id": 331,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the purpose of an SSL/TLS certificate?",
      "type": "mcq",
      "options": [
        "To speed up a website",
        "To enable secure, encrypted communication between a client and a server (HTTPS)",
        "To store user data",
        "To cache website content"
      ],
      "answer": "To enable secure, encrypted communication between a client and a server (HTTPS)",
      "explanation": "SSL/TLS certificates are essential for protecting sensitive data transmitted over the internet."
    },
    {
      "id": 332,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is a 'connection pool' for a database?",
      "type": "mcq",
      "options": [
        "A list of database users",
        "A cache of database connections that can be reused",
        "A backup of the database",
        "A tool for querying the database"
      ],
      "answer": "A cache of database connections that can be reused",
      "explanation": "Connection pooling improves performance by avoiding the overhead of establishing a new database connection for every request."
    },
    {
      "id": 333,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is 'dependency injection'?",
      "type": "mcq",
      "options": [
        "A way to manage project dependencies",
        "A design pattern where a component's dependencies are provided to it, rather than it creating them itself",
        "A security vulnerability",
        "A database feature"
      ],
      "answer": "A design pattern where a component's dependencies are provided to it, rather than it creating them itself",
      "explanation": "This promotes loose coupling and makes code more modular and testable."
    },
    {
      "id": 334,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is a 'serverless' architecture?",
      "type": "mcq",
      "options": [
        "An architecture with no servers",
        "An architecture where the cloud provider manages the server infrastructure, and code is run in stateless compute containers",
        "A frontend-only application",
        "A type of mobile application"
      ],
      "answer": "An architecture where the cloud provider manages the server infrastructure, and code is run in stateless compute containers",
      "explanation": "Serverless platforms like AWS Lambda or Google Cloud Functions automatically scale and you only pay for the compute time you consume."
    },
    {
      "id": 335,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the difference between 'white-box' and 'black-box' testing?",
      "type": "mcq",
      "options": [
        "White-box is for frontend, black-box is for backend",
        "White-box testing looks at the internal structure of the code, black-box testing focuses only on the input and output",
        "Black-box testing is automated, white-box is manual",
        "There is no difference"
      ],
      "answer": "White-box testing looks at the internal structure of the code, black-box testing focuses only on the input and output",
      "explanation": "Black-box testing tests functionality without any knowledge of the internal implementation."
    },
    {
      "id": 336,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is a 'cookie' in the context of web applications?",
      "type": "mcq",
      "options": [
        "A small piece of data sent from a website and stored on the user's computer by the browser",
        "A type of server",
        "A frontend JavaScript file",
        "A database table"
      ],
      "answer": "A small piece of data sent from a website and stored on the user's computer by the browser",
      "explanation": "Cookies are often used to remember stateful information, like whether a user is logged in."
    },
    {
      "id": 337,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is SQL Injection?",
      "type": "mcq",
      "options": [
        "A way to speed up database queries",
        "A code injection technique that might destroy your database",
        "A type of database",
        "A feature of ORMs"
      ],
      "answer": "A code injection technique that might destroy your database",
      "explanation": "It occurs when an attacker can manipulate a SQL query by inserting malicious SQL code into an input field."
    },
    {
      "id": 338,
      "testId": 5,
      "difficulty": "medium",
      "question": "What does ACID stand for in the context of database transactions?",
      "type": "mcq",
      "options": [
        "Atomicity, Consistency, Isolation, Durability",
        "Action, Consistency, Isolation, Durability",
        "Atomicity, Concurrency, Integrity, Durability",
        "Atomicity, Consistency, Integrity, Deployment"
      ],
      "answer": "Atomicity, Consistency, Isolation, Durability",
      "explanation": "ACID is a set of properties of database transactions intended to guarantee validity even in the event of errors or power failures."
    },
    {
      "id": 339,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is a 'linter'?",
      "type": "mcq",
      "options": [
        "A tool that compiles code",
        "A tool that analyzes source code to flag programming errors, bugs, and stylistic errors",
        "A tool for testing code",
        "A tool for deploying code"
      ],
      "answer": "A tool that analyzes source code to flag programming errors, bugs, and stylistic errors",
      "explanation": "Linters like ESLint help to improve code quality and enforce coding standards."
    },
    {
      "id": 340,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the 'event loop' in Node.js?",
      "type": "mcq",
      "options": [
        "A loop that listens for user interface events",
        "A mechanism that allows Node.js to perform non-blocking I/O operations",
        "A security feature",
        "A loop that iterates over an array"
      ],
      "answer": "A mechanism that allows Node.js to perform non-blocking I/O operations",
      "explanation": "Despite being single-threaded, the event loop allows Node.js to handle many concurrent operations efficiently."
    },
    {
      "id": 341,
      "testId": 5,
      "difficulty": "medium",
      "question": "Explain the difference between monolith and microservices architecture.",
      "type": "subjective",
      "answer": "A monolithic architecture is built as a single, unified unit. All components are tightly coupled and run as a single service. A microservices architecture structures an application as a collection of loosely coupled, independently deployable services. Each service is responsible for a specific business capability.",
      "explanation": "Microservices offer better scalability and flexibility, but are more complex to manage than monoliths."
    },
    {
      "id": 342,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the CAP theorem?",
      "type": "subjective",
      "answer": "The CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency (every read receives the most recent write or an error), Availability (every request receives a non-error response, without guarantee that it contains the most recent write), and Partition Tolerance (the system continues to operate despite an arbitrary number of messages being dropped or delayed between nodes).",
      "explanation": "This is a fundamental concept in designing distributed systems."
    },
    {
      "id": 343,
      "testId": 5,
      "difficulty": "medium",
      "question": "How do you prevent SQL injection attacks?",
      "type": "subjective",
      "answer": "The most effective way to prevent SQL injection is to use prepared statements (also known as parameterized queries). This technique separates the SQL code from the data, ensuring that user input is always treated as data and not as part of the SQL command. Using an ORM, which typically uses prepared statements under the hood, is also a good defense.",
      "explanation": "Never concatenate or format user input directly into SQL queries."
    },
    {
      "id": 344,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the purpose of a Dockerfile?",
      "type": "subjective",
      "answer": "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. It provides a set of instructions for building a Docker container image, such as specifying the base image, copying application files, installing dependencies, and defining the command to run when the container starts.",
      "explanation": "It automates the process of creating a Docker image."
    },
    {
      "id": 345,
      "testId": 5,
      "difficulty": "medium",
      "question": "What are the benefits of using a message queue?",
      "type": "subjective",
      "answer": "Message queues provide several benefits in a distributed system. They decouple services, allowing them to evolve independently. They improve reliability by persisting messages if a consumer service is down. They also help with scalability and load balancing by allowing you to add more consumers to process messages from the queue.",
      "explanation": "They enable asynchronous communication, which is key for building robust, scalable applications."
    },
    {
      "id": 346,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is a 'health check' endpoint?",
      "type": "subjective",
      "answer": "A health check endpoint is a special URL in a web service (e.g., `/health`) that is used by monitoring systems to determine if the service is running and healthy. A healthy response typically returns a 200 OK status code. Load balancers use health checks to decide whether to route traffic to a particular server instance.",
      "explanation": "This is a simple but critical part of maintaining a reliable service."
    },
    {
      "id": 347,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the difference between a process and a thread?",
      "type": "subjective",
      "answer": "A process is an instance of a computer program that is being executed. It has its own memory space. A thread is the smallest unit of execution within a process. A process can have multiple threads, which share the same memory space. This makes communication between threads easier but also introduces challenges like race conditions.",
      "explanation": "This is a fundamental concept in operating systems and concurrency."
    },
    {
      "id": 348,
      "testId": 5,
      "difficulty": "medium",
      "question": "Explain how HTTPS works.",
      "type": "subjective",
      "answer": "HTTPS (HTTP Secure) uses SSL/TLS to encrypt the communication between a client and a server. When a client connects to an HTTPS server, they perform an SSL/TLS handshake. The server provides its SSL certificate to the client, which the client verifies with a trusted Certificate Authority. Once verified, they negotiate an encryption key to encrypt all subsequent communication, ensuring confidentiality and integrity.",
      "explanation": "It's the standard for secure communication on the web."
    },
    {
      "id": 349,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is rate limiting and why is it important?",
      "type": "subjective",
      "answer": "Rate limiting is a technique used to control the amount of incoming traffic to a service. It restricts the number of requests a user can make in a given time period. This is important for preventing abuse (like brute-force attacks), ensuring fair usage among all users, and protecting backend services from being overwhelmed.",
      "explanation": "It's a crucial security and reliability feature for public APIs."
    },
    {
      "id": 350,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is 'infrastructure as code' (IaC)?",
      "type": "subjective",
      "answer": "Infrastructure as Code is the practice of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Tools like Terraform or AWS CloudFormation allow you to define your servers, databases, and networks in code, which can be version-controlled and automated.",
      "explanation": "IaC brings the benefits of software development practices to infrastructure management."
    },
     // Test 6: 30 Questions (18 MCQ, 12 Subjective) - Hard
    {
      "id": 351,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is the difference between concurrency and parallelism?",
      "type": "mcq",
      "options": [
        "They are the same thing",
        "Concurrency is about dealing with lots of things at once; parallelism is about doing lots of things at once",
        "Parallelism is for databases, concurrency is for servers",
        "Concurrency is a hardware property, parallelism is a software property"
      ],
      "answer": "Concurrency is about dealing with lots of things at once; parallelism is about doing lots of things at once",
      "explanation": "A single-core processor can be concurrent by switching between tasks, but it cannot be parallel. A multi-core processor can be both."
    },
    {
      "id": 352,
      "testId": 6,
      "difficulty": "hard",
      "question": "In a distributed system, what is 'eventual consistency'?",
      "type": "mcq",
      "options": [
        "The system will eventually fail",
        "A consistency model which guarantees that, if no new updates are made, all replicas will eventually converge to the same state",
        "A type of database error",
        "The system is never consistent"
      ],
      "answer": "A consistency model which guarantees that, if no new updates are made, all replicas will eventually converge to the same state",
      "explanation": "Many NoSQL databases favor availability over strong consistency, and thus use an eventual consistency model."
    },
    {
      "id": 353,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is a 'mutex'?",
      "type": "mcq",
      "options": [
        "A database transaction",
        "A synchronization primitive that prevents multiple threads from accessing a shared resource simultaneously",
        "A network protocol",
        "A type of CPU"
      ],
      "answer": "A synchronization primitive that prevents multiple threads from accessing a shared resource simultaneously",
      "explanation": "A mutex (mutual exclusion) is used to prevent race conditions."
    },
    {
      "id": 354,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is gRPC?",
      "type": "mcq",
      "options": [
        "A database",
        "A high-performance, open-source universal RPC framework",
        "A frontend framework",
        "A logging library"
      ],
      "answer": "A high-performance, open-source universal RPC framework",
      "explanation": "gRPC uses HTTP/2 for transport and Protocol Buffers as the interface description language, and provides features such as authentication, load balancing, and more."
    },
    {
      "id": 355,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is a 'deadlock' in concurrency?",
      "type": "mcq",
      "options": [
        "A thread that has finished executing",
        "A situation where two or more threads are blocked forever, waiting for each other",
        "A server that has crashed",
        "An unhandled error"
      ],
      "answer": "A situation where two or more threads are blocked forever, waiting for each other",
      "explanation": "Deadlock occurs when multiple threads need the same set of locks but obtain them in a different order."
    },
    {
      "id": 356,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is a 'sidecar' pattern in a microservices architecture?",
      "type": "mcq",
      "options": [
        "A pattern for deploying a monolith",
        "A pattern where a helper container is deployed alongside the main application container",
        "A database replication pattern",
        "A caching strategy"
      ],
      "answer": "A pattern where a helper container is deployed alongside the main application container",
      "explanation": "The sidecar can provide supporting features for the main application, such as logging, monitoring, or acting as a proxy."
    },
    {
      "id": 357,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is a 'circuit breaker' pattern?",
      "type": "mcq",
      "options": [
        "A security pattern to block IP addresses",
        "A database connection pattern",
        "A design pattern used to detect failures and prevent a failing service from being constantly retried",
        "A hardware component"
      ],
      "answer": "A design pattern used to detect failures and prevent a failing service from being constantly retried",
      "explanation": "If a service is failing, the circuit breaker 'trips' and subsequent calls fail immediately, preventing cascading failures."
    },
    {
      "id": 358,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'database replication'?",
      "type": "mcq",
      "options": [
        "Deleting a database",
        "The process of creating and maintaining multiple copies of a database",
        "Encrypting a database",
        "Indexing a database"
      ],
      "answer": "The process of creating and maintaining multiple copies of a database",
      "explanation": "Replication is used to improve read performance, availability, and data durability."
    },
    {
      "id": 359,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'blue-green deployment'?",
      "type": "mcq",
      "options": [
        "A deployment strategy where two identical environments are maintained: one live (blue) and one idle (green)",
        "A deployment strategy for frontend assets only",
        "A database migration strategy",
        "A way to color-code servers"
      ],
      "answer": "A deployment strategy where two identical environments are maintained: one live (blue) and one idle (green)",
      "explanation": "New code is deployed to the green environment, and traffic is switched over once it's verified, allowing for instant rollback if issues occur."
    },
    {
      "id": 360,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'observability' in the context of distributed systems?",
      "type": "mcq",
      "options": [
        "The ability to secure a system",
        "The ability to infer the internal state of a system from its external outputs",
        "The speed of a system",
        "The ability to deploy a system"
      ],
      "answer": "The ability to infer the internal state of a system from its external outputs",
      "explanation": "Observability is typically achieved through the 'three pillars': logs, metrics, and traces."
    },
    {
      "id": 361,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is Cross-Site Request Forgery (CSRF)?",
      "type": "mcq",
      "options": [
        "An attack that injects malicious scripts into a website",
        "An attack that tricks a user into submitting a malicious request",
        "An attack that steals cookies",
        "An attack that overloads a server"
      ],
      "answer": "An attack that tricks a user into submitting a malicious request",
      "explanation": "It exploits the trust a site has in a user's browser. CSRF tokens are a common defense."
    },
    {
      "id": 362,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is a 'canary release'?",
      "type": "mcq",
      "options": [
        "A strategy where a new version of software is gradually rolled out to a small subset of users",
        "A strategy where the old version is completely replaced by the new version",
        "A testing strategy",
        "A database backup strategy"
      ],
      "answer": "A strategy where a new version of software is gradually rolled out to a small subset of users",
      "explanation": "This allows you to monitor the new version for errors before rolling it out to everyone."
    },
    {
      "id": 363,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'service discovery' in a microservices architecture?",
      "type": "mcq",
      "options": [
        "A way to secure services",
        "The process of automatically detecting and locating services on a network",
        "A tool for debugging services",
        "A logging service"
      ],
      "answer": "The process of automatically detecting and locating services on a network",
      "explanation": "Tools like Consul or Eureka are used for service discovery, as service instances can be ephemeral and have dynamic IP addresses."
    },
    {
      "id": 364,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'event sourcing'?",
      "type": "mcq",
      "options": [
        "A way to log events",
        "A design pattern where state changes are stored as a sequence of events",
        "A caching strategy",
        "A database indexing method"
      ],
      "answer": "A design pattern where state changes are stored as a sequence of events",
      "explanation": "Instead of storing the current state of a system, you store the immutable events that led to that state. The current state can be rebuilt by replaying the events."
    },
    {
      "id": 365,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is the difference between a 'process' and a 'thread'?",
      "type": "mcq",
      "options": [
        "A process has its own memory space, while threads within a process share memory",
        "A thread has its own memory space, while processes share memory",
        "They are the same thing",
        "Processes are for frontend, threads are for backend"
      ],
      "answer": "A process has its own memory space, while threads within a process share memory",
      "explanation": "This distinction is fundamental to understanding concurrency and operating systems."
    },
    {
      "id": 366,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'idempotency'?",
      "type": "mcq",
      "options": [
        "An operation that can be performed multiple times without changing the result beyond the initial application",
        "An operation that is very fast",
        "An operation that is secure",
        "An operation that is reversible"
      ],
      "answer": "An operation that can be performed multiple times without changing the result beyond the initial application",
      "explanation": "HTTP methods like GET, PUT, and DELETE are idempotent, which is important for building reliable, distributed systems."
    },
    {
      "id": 367,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'backpressure' in the context of data streaming?",
      "type": "mcq",
      "options": [
        "A security mechanism",
        "A mechanism that allows a consumer to signal to a producer that it is overwhelmed and to slow down the rate of data production",
        "A way to compress data",
        "A database error"
      ],
      "answer": "A mechanism that allows a consumer to signal to a producer that it is overwhelmed and to slow down the rate of data production",
      "explanation": "Backpressure is crucial for building resilient streaming data pipelines."
    },
    {
      "id": 368,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is a 'saga' pattern in microservices?",
      "type": "mcq",
      "options": [
        "A long-running database transaction",
        "A way to manage transactions that span across multiple services",
        "A logging pattern",
        "A security pattern"
      ],
      "answer": "A way to manage transactions that span across multiple services",
      "explanation": "Since you can't have a single transaction across multiple databases, a saga coordinates a sequence of local transactions. If one fails, compensating transactions are executed to undo the preceding steps."
    },
    {
      "id": 369,
      "testId": 6,
      "difficulty": "hard",
      "question": "Explain the concept of a 'distributed hash table' (DHT).",
      "type": "subjective",
      "answer": "A DHT is a decentralized distributed system that provides a lookup service similar to a hash table. Key-value pairs are stored in the DHT, and any participating node can efficiently retrieve the value associated with a given key. Responsibility for maintaining the mapping from keys to values is distributed among the nodes, in a way that a change in the set of participants causes a minimal amount of disruption.",
      "explanation": "DHTs are a key component of many peer-to-peer systems, like BitTorrent."
    },
    {
      "id": 370,
      "testId": 6,
      "difficulty": "hard",
      "question": "What are the trade-offs between REST and GraphQL?",
      "type": "subjective",
      "answer": "REST is simpler to implement and leverages well-understood HTTP caching mechanisms. However, it can lead to over-fetching (getting more data than needed) or under-fetching (needing to make multiple requests). GraphQL solves these issues by allowing the client to specify exactly the data it needs, but it is more complex to set up, and caching is more difficult as all requests typically go to a single endpoint.",
      "explanation": "The choice depends on the specific needs of the application and its clients."
    },
    {
      "id": 371,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is a 'race condition' and how can you prevent it?",
      "type": "subjective",
      "answer": "A race condition is a bug that occurs when the outcome of a computation depends on the non-deterministic timing of concurrent operations. It happens when multiple threads or processes access a shared resource without proper synchronization. It can be prevented using synchronization primitives like mutexes (locks), semaphores, or by using atomic operations.",
      "explanation": "This is a common and difficult problem in concurrent programming."
    },
    {
      "id": 372,
      "testId": 6,
      "difficulty": "hard",
      "question": "Explain the actor model of concurrency.",
      "type": "subjective",
      "answer": "The actor model is a mathematical model of concurrent computation that treats 'actors' as the universal primitives of concurrent computation. An actor is a computational entity that, in response to a message it receives, can concurrently: send a finite number of messages to other actors; create a finite number of new actors; and designate the behavior to be used for the next message it receives. Actors do not share state, which avoids the need for locks and other synchronization primitives.",
      "explanation": "Languages like Erlang and frameworks like Akka are based on the actor model."
    },
    {
      "id": 373,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'consistent hashing'?",
      "type": "subjective",
      "answer": "Consistent hashing is a special kind of hashing such that when a hash table is resized, only a small number of keys need to be remapped on average. It's particularly useful in distributed systems, like CDNs or distributed databases, where adding or removing a server (node) should not require a complete re-shuffling of data across all servers.",
      "explanation": "It minimizes disruption when a distributed system scales up or down."
      },
      {
        "id": 374,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is the difference between leader-based and leaderless replication in databases?",
        "type": "subjective",
        "answer": "In leader-based replication, one replica is designated as the leader (or master), which handles all write operations. Other replicas (followers or slaves) receive a stream of changes from the leader. In leaderless replication, any replica can accept writes. This model is more fault-tolerant (as it doesn't have a single point of failure) but is more complex to manage consistency, often requiring 'read repair' or 'quorum' writes.",
        "explanation": "This is a fundamental design choice in distributed database systems."
      },
      {
        "id": 375,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is 'zero-downtime deployment'?",
        "type": "subjective",
        "answer": "Zero-downtime deployment is the process of releasing a new version of an application into a production environment without causing any visible service interruption for users. This is typically achieved using strategies like blue-green deployment or canary releases, often in combination with load balancers to gradually shift traffic to the new version.",
        "explanation": "This is a key goal for modern, highly-available web services."
      },
      {
        "id": 376,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is 'chaos engineering'?",
        "type": "subjective",
        "answer": "Chaos engineering is the discipline of experimenting on a distributed system in order to build confidence in the system's capability to withstand turbulent conditions in production. It involves proactively and deliberately injecting failures—like terminating servers or introducing network latency—to identify weaknesses before they cause a real outage.",
        "explanation": "Netflix is a famous pioneer of chaos engineering with its 'Chaos Monkey' tool."
      },
      {
        "id": 377,
        "testId": 6,
        "difficulty": "hard",
        "question": "Explain the 'strangler fig' pattern.",
        "type": "subjective",
        "answer": "The strangler fig pattern is a strategy for incrementally migrating a legacy monolithic application to a microservices architecture. A new service is built to replace a piece of functionality, and a router or proxy is put in front of the monolith to intercept requests and route them to the new service instead. Over time, more functionality is 'strangled' out of the monolith until it can be retired.",
        "explanation": "It's a gradual and less risky approach to modernization than a big-bang rewrite."
      },
      {
        "id": 378,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is 'end-to-end encryption'?",
        "type": "subjective",
        "answer": "End-to-end encryption (E2EE) is a system of communication where only the communicating users can read the messages. It prevents potential eavesdroppers – including telecom providers, Internet providers, and even the provider of the communication service – from being able to access the cryptographic keys needed to decrypt the conversation. The server only facilitates the connection but cannot read the content.",
        "explanation": "Messaging apps like Signal and WhatsApp use E2EE."
      },
      {
        "id": 379,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is a 'Bloom filter' and what is it used for?",
        "type": "subjective",
        "answer": "A Bloom filter is a space-efficient probabilistic data structure that is used to test whether an element is a member of a set. It can produce false positive matches (it might say an element is in the set when it's not) but cannot produce false negatives (if it says an element is not in the set, it's definitively not). They are used in situations where a small chance of a false positive is acceptable in exchange for significant space savings, such as checking for previously seen articles or unavailable usernames.",
        "explanation": "It's a clever trade-off between space and accuracy."
      },
      {
        "id": 380,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is 'two-phase commit' (2PC)?",
        "type": "subjective",
        "answer": "Two-phase commit is a distributed algorithm that coordinates all the processes that participate in a distributed atomic transaction on whether to commit or abort (roll back) the transaction. It involves a coordinator and participants. In the first phase (prepare), the coordinator asks all participants if they are ready to commit. In the second phase (commit), if all participants agreed, the coordinator tells them to commit; otherwise, it tells them to abort.",
        "explanation": "2PC is used to ensure atomicity in distributed transactions but can be slow and has blocking issues if the coordinator fails."
      },
    // Test 7: 35 Questions (21 MCQ, 14 Subjective) - Hard
    {
      "id": 381,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is the primary purpose of a service mesh (e.g., Istio, Linkerd)?",
      "type": "mcq",
      "options": [
        "To deploy services",
        "To provide a dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable",
        "To write application code",
        "To manage databases"
      ],
      "answer": "To provide a dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable",
      "explanation": "A service mesh handles things like traffic management, security, and observability at the platform level, rather than in each individual service."
    },
    {
      "id": 382,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is a 'vector clock' used for in distributed systems?",
      "type": "mcq",
      "options": [
        "To tell the time",
        "To determine the partial causal ordering of events",
        "To measure server performance",
        "To encrypt data"
      ],
      "answer": "To determine the partial causal ordering of events",
      "explanation": "Vector clocks are a mechanism for detecting causality violations and resolving conflicts in eventually consistent systems."
    },
    {
      "id": 383,
      "testId": 7,
      "difficulty": "hard",
      "question": "Which of the following is a key-value store?",
      "type": "mcq",
      "options": ["MySQL", "PostgreSQL", "DynamoDB", "SQL Server"],
      "answer": "DynamoDB",
      "explanation": "DynamoDB (along with others like Redis and Riak) is a popular key-value and document database, a type of NoSQL database."
    },
    {
      "id": 384,
      "testId": 7,
      "difficulty": "hard",
      "question": "What does a 'liveness' probe do in Kubernetes?",
      "type": "mcq",
      "options": [
        "Checks if a container is ready to accept traffic",
        "Checks if a container is running and healthy, and restarts it if it fails",
        "Checks the overall health of the cluster",
        "Checks the network connectivity"
      ],
      "answer": "Checks if a container is running and healthy, and restarts it if it fails",
      "explanation": "A 'readiness' probe, on the other hand, determines if a container is ready to serve traffic."
    },
    {
      "id": 385,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is 'CQRS'?",
      "type": "mcq",
      "options": [
        "A database language",
        "A security pattern",
        "An architectural pattern that separates read and update operations for a data store",
        "A caching strategy"
      ],
      "answer": "An architectural pattern that separates read and update operations for a data store",
      "explanation": "Command Query Responsibility Segregation (CQRS) uses different models for reading and writing data, which can optimize performance and scalability."
    },
    {
      "id": 386,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is a 'golden signal' in Site Reliability Engineering (SRE)?",
      "type": "mcq",
      "options": [
        "CPU Utilization",
        "Latency, Traffic, Errors, and Saturation",
        "Disk Space",
        "User Satisfaction"
      ],
      "answer": "Latency, Traffic, Errors, and Saturation",
      "explanation": "These four signals are considered the most important high-level indicators of a system's health."
    },
    {
      "id": 387,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is 'Infrastructure as a Service' (IaaS)?",
      "type": "mcq",
      "options": [
        "A service that provides a complete application",
        "A cloud computing model that provides virtualized computing resources over the internet",
        "A service for developing software",
        "A database service"
      ],
      "answer": "A cloud computing model that provides virtualized computing resources over the internet",
      "explanation": "IaaS provides the fundamental building blocks like virtual machines and storage. AWS EC2 is an example."
    },
    {
      "id": 388,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is the purpose of the `Content-Type` HTTP header?",
      "type": "mcq",
      "options": [
        "To indicate the length of the response",
        "To specify the media type of the resource in the body of the message",
        "To control caching",
        "To handle authentication"
      ],
      "answer": "To specify the media type of the resource in the body of the message",
      "explanation": "For example, `application/json` or `text/html`."
    },
    {
      "id": 389,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is a 'side-effect' in functional programming?",
      "type": "mcq",
      "options": [
        "The return value of a function",
        "Any interaction with the outside world from within a function, like modifying a global variable or writing to a database",
        "An error in a function",
        "A recursive function call"
      ],
      "answer": "Any interaction with the outside world from within a function, like modifying a global variable or writing to a database",
      "explanation": "Pure functions have no side-effects, which makes them easier to reason about and test."
    },
    {
      "id": 390,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is 'polymorphism' in object-oriented programming?",
      "type": "mcq",
      "options": [
        "The ability to hide implementation details",
        "The ability of an object to take on many forms",
        "The ability to bundle data and methods together",
        "The ability to inherit properties from a parent class"
      ],
      "answer": "The ability of an object to take on many forms",
      "explanation": "For example, a parent class reference can be used to refer to a child class object."
    },
    {
      "id": 391,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is a 'memory leak'?",
      "type": "mcq",
      "options": [
        "A security vulnerability",
        "A situation where a program fails to release memory that it no longer needs",
        "A hardware failure",
        "An error in the CPU"
      ],
      "answer": "A situation where a program fails to release memory that it no longer needs",
      "explanation": "Over time, memory leaks can consume all available memory and crash the application."
    },
    {
      "id": 392,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is the 'Twelve-Factor App' methodology?",
      "type": "mcq",
      "options": [
        "A list of 12 popular apps",
        "A methodology for building robust and scalable software-as-a-service apps",
        "A security checklist",
        "A UI design guide"
      ],
      "answer": "A methodology for building robust and scalable software-as-a-service apps",
      "explanation": "Its principles include storing config in the environment, treating logs as event streams, and keeping development, staging, and production as similar as possible."
    },
    {
      "id": 393,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is a 'paxos' algorithm?",
      "type": "mcq",
      "options": [
        "A sorting algorithm",
        "A family of protocols for reaching consensus in a network of unreliable processors",
        "A search algorithm",
        "An encryption algorithm"
      ],
      "answer": "A family of protocols for reaching consensus in a network of unreliable processors",
      "explanation": "Paxos is a fundamental algorithm for building fault-tolerant distributed systems, though it is famously difficult to understand. Raft is a more understandable alternative."
    },
    {
      "id": 394,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is a 'singleton' pattern?",
      "type": "mcq",
      "options": [
        "A pattern that restricts the instantiation of a class to one object",
        "A pattern for creating many objects",
        "A pattern for database connections",
        "A pattern for multithreading"
      ],
      "answer": "A pattern that restricts the instantiation of a class to one object",
      "explanation": "This is useful when exactly one object is needed to coordinate actions across the system, though it is often considered an anti-pattern as it introduces global state."
    },
    {
      "id": 395,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is a 'graph database' (e.g., Neo4j)?",
      "type": "mcq",
      "options": [
        "A database for storing images",
        "A database that uses graph structures for semantic queries with nodes, edges, and properties",
        "A relational database",
        "A key-value store"
      ],
      "answer": "A database that uses graph structures for semantic queries with nodes, edges, and properties",
      "explanation": "Graph databases are ideal for modeling and querying complex relationships, such as social networks or recommendation engines."
    },
    {
      "id": 396,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is 'big O notation'?",
      "type": "mcq",
      "options": [
        "A way to write comments",
        "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity",
        "A versioning scheme for software",
        "A type of API"
      ],
      "answer": "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity",
      "explanation": "In computer science, it's used to classify algorithms according to how their run time or space requirements grow as the input size grows (e.g., O(n), O(log n))."
    },
    {
      "id": 397,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is 'Platform as a Service' (PaaS)?",
      "type": "mcq",
      "options": [
        "A service that provides virtual machines",
        "A cloud computing model that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure",
        "A service that provides a complete software application",
        "A physical server rental service"
      ],
      "answer": "A cloud computing model that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure",
      "explanation": "PaaS is a layer above IaaS. Heroku and Google App Engine are examples."
    },
    {
      "id": 398,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is a 'semaphore'?",
      "type": "mcq",
      "options": [
        "A database index",
        "A synchronization primitive that controls access to a shared resource by multiple processes in a concurrent system",
        "A network packet",
        "A security certificate"
      ],
      "answer": "A synchronization primitive that controls access to a shared resource by multiple processes in a concurrent system",
      "explanation": "A semaphore is a variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system."
    },
    {
      "id": 399,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is 'semantic versioning' (SemVer)?",
      "type": "mcq",
      "options": [
        "A way to name variables",
        "A versioning scheme for software that uses a three-part version number (MAJOR.MINOR.PATCH)",
        "A type of database",
        "A design pattern"
      ],
      "answer": "A versioning scheme for software that uses a three-part version number (MAJOR.MINOR.PATCH)",
      "explanation": "MAJOR version is incremented for incompatible API changes, MINOR for new functionality in a backward-compatible manner, and PATCH for backward-compatible bug fixes."
    },
    {
      "id": 400,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is 'eventual consistency'?",
      "type": "mcq",
      "options": [
        "A guarantee that the system will eventually crash",
        "A consistency model where, if no new updates are made, all replicas will eventually converge",
        "A model where data is always strongly consistent",
        "A type of programming error"
      ],
      "answer": "A consistency model where, if no new updates are made, all replicas will eventually converge",
      "explanation": "This is a common model in highly available distributed systems where strong consistency is not a strict requirement."
    },
    {
      "id": 401,
      "testId": 7,
      "difficulty": "hard",
      "question": "What is 'idempotency' in API design?",
      "type": "mcq",
      "options": [
        "Making the same request multiple times has the same effect as making it once",
        "Ensuring the API is fast",
        "Securing the API",
        "The ability to reverse a request"
      ],
      "answer": "Making the same request multiple times has the same effect as making it once",
      "explanation": "Idempotent operations are crucial for building reliable systems, as they allow clients to safely retry requests without unintended side effects."
    },
      {
        "id": 402,
        "testId": 7,
        "difficulty": "hard",
        "question": "Explain the trade-offs of different database isolation levels.",
        "type": "subjective",
        "answer": "Database isolation levels (like Read Uncommitted, Read Committed, Repeatable Read, Serializable) control the degree to which transactions are isolated from each other. Lower levels (like Read Uncommitted) offer higher concurrency but can lead to phenomena like dirty reads, non-repeatable reads, and phantom reads. Higher levels (like Serializable) prevent these issues and provide strong consistency, but at the cost of reduced performance and increased contention (more locking). The choice is a trade-off between consistency and performance.",
        "explanation": "This is a core concept in database transaction management."
      },
      {
        "id": 403,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is a 'gossip protocol'?",
        "type": "subjective",
        "answer": "A gossip protocol is a procedure or process of computer peer-to-peer communication that is based on the way epidemics spread. A node in a distributed system periodically sends information to a set of random other nodes. This is a robust and scalable way to disseminate information and maintain consistency in a large, decentralized network, even with node failures.",
        "explanation": "It's used in systems like Apache Cassandra for service discovery and state synchronization."
      },
      {
        "id": 404,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'test-driven development' (TDD)?",
        "type": "subjective",
        "answer": "TDD is a software development process that relies on the repetition of a very short development cycle: first, the developer writes an (initially failing) automated test case that defines a desired improvement or new function. Then, the developer produces the minimum amount of code to pass that test. Finally, the developer refactors the new code to acceptable standards. This is often summarized as 'Red, Green, Refactor'.",
        "explanation": "TDD helps to ensure high test coverage and can lead to better-designed, more modular code."
      },
      {
        "id": 405,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'domain-driven design' (DDD)?",
        "type": "subjective",
        "answer": "Domain-driven design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain. The key idea is to create a 'ubiquitous language' that is shared between technical and domain experts. DDD is particularly suited for complex enterprise systems.",
        "explanation": "Concepts like 'bounded context' and 'aggregate' are central to DDD."
      },
      {
        "id": 406,
        "testId": 7,
        "difficulty": "hard",
        "question": "Explain the 'publish-subscribe' (pub/sub) pattern.",
        "type": "subjective",
        "answer": "The pub/sub pattern is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers. Instead, publishers categorize published messages into topics, without knowledge of which subscribers, if any, there may be. Subscribers express interest in one or more topics and only receive messages that are of interest, without knowledge of which publishers, if any, there are. This decouples the publishers and subscribers.",
        "explanation": "Message queues like Kafka and RabbitMQ are often used to implement this pattern."
      },
      {
        "id": 407,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'OAuth 2.0' and what problem does it solve?",
        "type": "subjective",
        "answer": "OAuth 2.0 is an authorization framework, not an authentication protocol. It solves the problem of 'delegated authorization,' where a user wants to grant a third-party application limited access to their account on another service, without sharing their password. It defines several 'flows' (e.g., Authorization Code Flow) for obtaining an access token, which the third-party app can then use to make API requests on behalf of the user.",
        "explanation": "It's the standard for third-party application authorization on the web."
      },
      {
        "id": 408,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is a 'content security policy' (CSP)?",
        "type": "subjective",
        "answer": "A CSP is a browser security feature, implemented via an HTTP header, that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. It allows you to specify which sources of content (scripts, styles, images, etc.) are trusted and can be loaded by the browser, effectively creating a whitelist of allowed content origins.",
        "explanation": "CSP is a powerful defense-in-depth mechanism against XSS."
      },
      {
        "id": 409,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'Server-Sent Events' (SSE)?",
        "type": "subjective",
        "answer": "Server-Sent Events is a technology where a web page automatically gets updates from a server. It provides a one-way communication channel from the server to the client over a standard HTTP connection. Unlike WebSockets, it is unidirectional and simpler to implement. It's ideal for situations where the client only needs to receive data from the server, such as live sports scores or stock tickers.",
        "explanation": "It's a simpler alternative to WebSockets for server-to-client streaming."
      },
      {
        "id": 410,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'A/B testing'?",
        "type": "subjective",
        "answer": "A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better. You show two variants (A and B) to similar groups of users at the same time. The one that gives a better conversion rate (e.g., more clicks or purchases) wins. This is a common way to test changes to a user interface to improve metrics.",
        "explanation": "It's a data-driven approach to product and feature development."
      },
      {
        "id": 411,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is a 'data warehouse'?",
        "type": "subjective",
        "answer": "A data warehouse is a large, centralized repository of data that is used for reporting and data analysis. Data is often aggregated from many different sources, such as transactional databases and log files. Unlike a transactional database (OLTP), a data warehouse is optimized for analytical queries (OLAP) and business intelligence.",
        "explanation": "Data warehouses are a key component of business intelligence."
      },
      {
        "id": 412,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'SOLID' in the context of object-oriented design?",
        "type": "subjective",
        "answer": "SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. The principles are: Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle.",
        "explanation": "Following SOLID principles leads to more robust and maintainable object-oriented code."
      },
      {
        "id": 413,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'API versioning' and why is it important?",
        "type": "subjective",
        "answer": "API versioning is the practice of managing changes to your API in a way that doesn't break existing client applications. This is important because as your API evolves, you might need to make breaking changes. By providing versioned endpoints (e.g., /api/v1/users, /api/v2/users), you can introduce new features or changes in v2 while allowing existing clients to continue using the stable v1.",
        "explanation": "It's crucial for maintaining backward compatibility for public or widely used APIs."
      },
      {
        "id": 414,
        "testId": 7,
        "difficulty": "hard",
        "question": "Explain 'public key cryptography'.",
        "type": "subjective",
        "answer": "Public key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys, which may be disseminated widely, and private keys, which are known only to the owner. A message encrypted with a public key can only be decrypted with the corresponding private key. It's also used for digital signatures, where a message signed with a private key can be verified by anyone who has the public key. This is the foundation of SSL/TLS and secure communication on the internet.",
        "explanation": "It's a fundamental concept in modern cryptography."
      },
      {
        "id": 415,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is a 'distributed lock'?",
        "type": "subjective",
        "answer": "A distributed lock is a synchronization primitive used in a distributed system to ensure that only one process can access a shared resource at a time, similar to a mutex in a multithreaded application. Implementing a reliable distributed lock is complex due to issues like network partitions and process failures. Systems like ZooKeeper or Redis (with algorithms like Redlock) are often used to implement them.",
        "explanation": "They are necessary for coordinating actions across multiple servers or services."
      },
    // Test 8: 40 Questions (24 MCQ, 16 Subjective) - Expert
    {
      "id": 416,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'log-structured merge-tree' (LSM-Tree)?",
      "type": "mcq",
      "options": [
        "A type of binary tree",
        "A data structure optimized for write-heavy workloads, commonly used in NoSQL databases",
        "A logging format",
        "A network topology"
      ],
      "answer": "A data structure optimized for write-heavy workloads, commonly used in NoSQL databases",
      "explanation": "LSM-Trees are used in databases like Cassandra and RocksDB. They batch writes in-memory and then flush them to disk sequentially, which is very efficient."
    },
    {
      "id": 417,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'Raft' in the context of distributed systems?",
      "type": "mcq",
      "options": [
        "A type of boat",
        "A consensus algorithm designed to be more understandable than Paxos",
        "A data encryption algorithm",
        "A load balancing algorithm"
      ],
      "answer": "A consensus algorithm designed to be more understandable than Paxos",
      "explanation": "Raft is used to manage a replicated log and ensure that all nodes in a cluster agree on the state of the system."
    },
    {
      "id": 418,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'sharding' in database architecture?",
      "type": "mcq",
      "options": [
        "A method for backing up data",
        "A type of horizontal partitioning that separates very large databases into smaller, faster, more easily managed parts",
        "A security feature",
        "A type of query optimization"
      ],
      "answer": "A type of horizontal partitioning that separates very large databases into smaller, faster, more easily managed parts",
      "explanation": "Sharding is a common technique for scaling out relational and NoSQL databases."
    },
    {
      "id": 419,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'zookeeper' used for?",
      "type": "mcq",
      "options": [
        "A web server",
        "A centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services",
        "A database",
        "A frontend framework"
      ],
      "answer": "A centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services",
      "explanation": "ZooKeeper is a foundational tool for building reliable distributed systems."
    },
    {
      "id": 420,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'etcd'?",
      "type": "mcq",
      "options": [
        "A text editor",
        "A distributed, reliable key-value store for the most critical data of a distributed system",
        "A CI/CD tool",
        "A package manager"
      ],
      "answer": "A distributed, reliable key-value store for the most critical data of a distributed system",
      "explanation": "etcd is a core component of Kubernetes, where it stores all cluster state."
    },
    {
      "id": 421,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is a 'sidecar proxy' in a service mesh?",
      "type": "mcq",
      "options": [
        "A proxy that runs on a separate machine",
        "A proxy that is deployed alongside each service instance to intercept all incoming and outgoing network traffic",
        "A proxy for frontend applications",
        "A database proxy"
      ],
      "answer": "A proxy that is deployed alongside each service instance to intercept all incoming and outgoing network traffic",
      "explanation": "This allows the service mesh to enforce policies, collect telemetry, and manage traffic without any changes to the application code."
    },
    {
      "id": 422,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'reactive programming'?",
      "type": "mcq",
      "options": [
        "A programming paradigm oriented around data flows and the propagation of change",
        "Programming with React",
        "A type of multithreading",
        "A database design pattern"
      ],
      "answer": "A programming paradigm oriented around data flows and the propagation of change",
      "explanation": "Libraries like RxJS are used for reactive programming, where you can create and subscribe to observable streams of data."
    },
    {
      "id": 423,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'mTLS' (Mutual TLS)?",
      "type": "mcq",
      "options": [
        "A less secure version of TLS",
        "A process where both the client and the server authenticate each other using certificates",
        "A type of load balancing",
        "A database encryption method"
      ],
      "answer": "A process where both the client and the server authenticate each other using certificates",
      "explanation": "mTLS is often used for secure service-to-service communication within a trusted network, like a service mesh."
    },
    {
      "id": 424,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is a 'namespace' in Kubernetes?",
      "type": "mcq",
      "options": [
        "A globally unique identifier for an object",
        "A way to divide cluster resources between multiple users",
        "A networking policy",
        "A type of storage"
      ],
      "answer": "A way to divide cluster resources between multiple users",
      "explanation": "Namespaces provide a scope for names and a way to attach authorization and policy to a subsection of the cluster."
    },
    {
      "id": 425,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'idempotent consumer' pattern?",
      "type": "mcq",
      "options": [
        "A consumer that can only process one message",
        "A pattern to ensure that processing the same message multiple times does not have unintended side effects",
        "A consumer that is very fast",
        "A consumer that ignores all messages"
      ],
      "answer": "A pattern to ensure that processing the same message multiple times does not have unintended side effects",
      "explanation": "This is crucial in message-based systems where a message might be delivered more than once."
    },
    {
      "id": 426,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'fanning out' in the context of messaging systems?",
      "type": "mcq",
      "options": [
        "A way to cool servers",
        "A pattern where a single message is delivered to multiple consumers",
        "A way to delete messages",
        "A performance bottleneck"
      ],
      "answer": "A pattern where a single message is delivered to multiple consumers",
      "explanation": "This is a key feature of pub/sub systems, where one event can trigger multiple different workflows."
    },
    {
      "id": 427,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'eventual consistency' in distributed systems?",
      "type": "mcq",
      "options": [
        "A guarantee that data will be strongly consistent",
        "A consistency model that guarantees if no new updates are made, all replicas will eventually converge",
        "A model where data is never consistent",
        "A type of system error"
      ],
      "answer": "A consistency model that guarantees if no new updates are made, all replicas will eventually converge",
      "explanation": "Many modern NoSQL databases trade strong consistency for higher availability and partition tolerance, relying on eventual consistency."
    },
    {
      "id": 428,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is a 'quorum' in distributed systems?",
      "type": "mcq",
      "options": [
        "The minimum number of nodes that must be running",
        "The minimum number of votes that a distributed transaction has to obtain in order to be allowed to perform an operation",
        "The total number of nodes in a cluster",
        "A type of database index"
      ],
      "answer": "The minimum number of votes that a distributed transaction has to obtain in order to be allowed to perform an operation",
      "explanation": "Quorums are used to ensure consistency in replicated systems. For example, W + R > N (where W is write quorum, R is read quorum, N is replicas) ensures strong consistency."
    },
    {
      "id": 429,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'idempotency' in the context of backend operations?",
      "type": "mcq",
      "options": [
        "An operation that is very efficient",
        "An operation that has the same result whether it's performed once or multiple times",
        "An operation that is secure",
        "An operation that is reversible"
      ],
      "answer": "An operation that has the same result whether it's performed once or multiple times",
      "explanation": "For example, setting a user's email to 'a@b.com' is idempotent. This is a critical property for building fault-tolerant systems where requests might be retried."
    },
    {
      "id": 430,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'Thundering Herd' problem?",
      "type": "mcq",
      "options": [
        "A large number of users accessing a service at once",
        "A problem where a large number of processes waiting for an event are awakened, but only one will be able to handle it",
        "A type of DDoS attack",
        "A hardware issue"
      ],
      "answer": "A problem where a large number of processes waiting for an event are awakened, but only one will be able to handle it",
      "explanation": "This can cause unnecessary context switching and contention, degrading system performance."
    },
    {
      "id": 431,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'gRPC' and how does it compare to REST?",
      "type": "mcq",
      "options": [
        "gRPC is a newer version of REST",
        "gRPC is a high-performance RPC framework, often using HTTP/2 and Protocol Buffers, while REST is an architectural style typically using HTTP/1.1 and JSON",
        "REST is faster than gRPC",
        "gRPC is only for internal services"
      ],
      "answer": "gRPC is a high-performance RPC framework, often using HTTP/2 and Protocol Buffers, while REST is an architectural style typically using HTTP/1.1 and JSON",
      "explanation": "gRPC is often favored for its performance and strongly-typed contracts, especially in microservice environments."
    },
    {
      "id": 432,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'ACID' compliance in databases?",
      "type": "mcq",
      "options": [
        "A set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee transaction validity",
        "A type of database",
        "A security standard",
        "A performance benchmark"
      ],
      "answer": "A set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee transaction validity",
      "explanation": "Traditional relational databases are typically ACID-compliant, ensuring reliability."
    },
    {
      "id": 433,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'Platform as a Service' (PaaS)?",
      "type": "mcq",
      "options": [
        "A service that provides virtual machines (IaaS)",
        "A service that provides a complete application (SaaS)",
        "A service that provides a platform for developers to build and run applications without managing the underlying infrastructure",
        "A physical server hosting service"
      ],
      "answer": "A service that provides a platform for developers to build and run applications without managing the underlying infrastructure",
      "explanation": "Examples include Heroku and Google App Engine. It abstracts away the OS, servers, and networking."
    },
    {
      "id": 434,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'observability'?",
      "type": "mcq",
      "options": [
        "The ability to deploy a system",
        "The ability to infer a system's internal state from its external outputs (logs, metrics, traces)",
        "The ability to secure a system",
        "The ability to scale a system"
      ],
      "answer": "The ability to infer a system's internal state from its external outputs (logs, metrics, traces)",
      "explanation": "Observability is crucial for debugging and understanding the behavior of complex, distributed systems."
    },
    {
      "id": 435,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is a 'sidecar' pattern?",
      "type": "mcq",
      "options": [
        "A database design pattern",
        "A deployment pattern where a helper container runs alongside the main application container",
        "A frontend state management pattern",
        "A CI/CD pattern"
      ],
      "answer": "A deployment pattern where a helper container runs alongside the main application container",
      "explanation": "Sidecars can handle cross-cutting concerns like logging, monitoring, and service discovery, separating them from the main application logic."
    },
    {
      "id": 436,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'Infrastructure as Code' (IaC)?",
      "type": "mcq",
      "options": [
        "Writing code for infrastructure components like load balancers",
        "Managing and provisioning infrastructure through machine-readable definition files",
        "A type of programming language",
        "A documentation standard"
      ],
      "answer": "Managing and provisioning infrastructure through machine-readable definition files",
      "explanation": "Tools like Terraform and CloudFormation allow infrastructure to be versioned, tested, and automated like application code."
    },
    {
      "id": 437,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'GraphQL'?",
      "type": "mcq",
      "options": [
        "A database management system",
        "A query language for your API, and a server-side runtime for executing queries",
        "A graph visualization tool",
        "A frontend JavaScript framework"
      ],
      "answer": "A query language for your API, and a server-side runtime for executing queries",
      "explanation": "GraphQL gives clients the power to ask for exactly what they need and nothing more, making it an efficient alternative to REST."
    },
    {
      "id": 438,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is a 'content delivery network' (CDN)?",
      "type": "mcq",
      "options": [
        "A database service",
        "A geographically distributed network of proxy servers to provide faster content delivery",
        "A CI/CD service",
        "A DNS provider"
      ],
      "answer": "A geographically distributed network of proxy servers to provide faster content delivery",
      "explanation": "CDNs cache content in locations closer to end users, reducing latency."
    },
    {
      "id": 439,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'blue-green deployment'?",
      "type": "mcq",
      "options": [
        "A database schema migration strategy",
        "A strategy for deploying new code to a separate, identical 'green' environment and then switching traffic to it",
        "A frontend color scheme",
        "A testing methodology"
      ],
      "answer": "A strategy for deploying new code to a separate, identical 'green' environment and then switching traffic to it",
      "explanation": "This allows for zero-downtime deployments and instant rollbacks."
    },
    {
      "id": 440,
      "testId": 8,
      "difficulty": "expert",
      "question": "Explain the difference between optimistic and pessimistic locking.",
      "type": "subjective",
      "answer": "Pessimistic locking assumes that conflicts are likely and prevents them by acquiring a lock on a resource before modifying it, blocking other transactions. Optimistic locking assumes conflicts are rare. It allows transactions to proceed without locks, but checks for conflicts (e.g., using a version number) before committing. If a conflict is detected, the transaction is rolled back.",
      "explanation": "Pessimistic locking prioritizes consistency over concurrency, while optimistic locking prioritizes concurrency over consistency."
    },
    {
      "id": 441,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is the 'saga' pattern and why is it used in microservices?",
      "type": "subjective",
      "answer": "The saga pattern is a way to manage data consistency across microservices in a distributed transaction. Since a single two-phase commit transaction is not feasible across multiple databases, a saga is a sequence of local transactions. Each local transaction updates the database and publishes a message or event to trigger the next transaction. If a transaction fails, compensating transactions are executed to undo the preceding work.",
      "explanation": "It's a way to achieve transactional guarantees in a loosely coupled, distributed system."
    },
    {
      "id": 442,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is a 'distributed hash table' (DHT)?",
      "type": "subjective",
      "answer": "A DHT is a decentralized distributed system that provides a lookup service similar to a hash table. Key-value pairs are stored across a network of participating nodes. Each node is responsible for a portion of the keys. When a lookup is performed, the system uses a consistent hashing algorithm to determine which node holds the key, allowing for efficient lookups without a central coordinator.",
      "explanation": "DHTs are fundamental to many peer-to-peer systems like BitTorrent."
    },
    {
      "id": 443,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'backpressure' in reactive systems?",
      "type": "subjective",
      "answer": "Backpressure is a mechanism that allows a consumer of a data stream to signal to the producer that it is overwhelmed and needs the rate of data production to slow down. This prevents the consumer from being flooded with data it cannot process, which could lead to buffer overflows and system instability. It's a form of flow control in asynchronous systems.",
      "explanation": "Reactive stream libraries like RxJS or Project Reactor have built-in support for handling backpressure."
    },
    {
      "id": 444,
      "testId": 8,
      "difficulty": "expert",
      "question": "How does a 'circuit breaker' pattern work?",
      "type": "subjective",
      "answer": "A circuit breaker is a design pattern that wraps a protected function call in a state machine. It monitors for failures and, if they exceed a certain threshold, it 'trips' the circuit, causing subsequent calls to fail immediately without attempting the operation. After a timeout period, the circuit goes into a 'half-open' state, allowing a trial request. If that succeeds, the circuit closes; if it fails, the timeout period restarts.",
      "explanation": "This prevents a client from repeatedly trying to call a service that is known to be failing, which can prevent cascading failures."
    },
    {
      "id": 445,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'event sourcing'?",
      "type": "subjective",
      "answer": "Event sourcing is an architectural pattern where all changes to application state are stored as a sequence of immutable events. Instead of storing the current state of an entity, you store the log of events that led to that state. The current state can be reconstructed at any time by replaying the events. This provides a full audit log, makes it easier to debug issues, and allows for temporal queries.",
      "explanation": "It's often used in conjunction with CQRS."
    },
    {
      "id": 446,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'consistent hashing' and why is it useful?",
      "type": "subjective",
      "answer": "Consistent hashing is a hashing technique where, when a hash table is resized, only a small number of keys need to be remapped on average. Unlike traditional hashing, where a change in the number of buckets causes nearly all keys to be remapped, consistent hashing minimizes this disruption. It's especially useful in distributed systems like caches or databases, where adding or removing a server should not trigger a massive reshuffling of data.",
      "explanation": "It's a key technique for building scalable distributed systems."
    },
    {
      "id": 447,
      "testId": 8,
      "difficulty": "expert",
      "question": "What are the trade-offs of using a 'serverless' architecture?",
      "type": "subjective",
      "answer": "The main benefits of serverless are reduced operational cost (no servers to manage) and pay-per-use pricing. The trade-offs include potential vendor lock-in, difficulties with local testing and debugging, and 'cold start' latency for infrequently used functions. It's also not suitable for long-running, stateful computations.",
      "explanation": "The choice to go serverless depends heavily on the specific workload and application requirements."
    },
    {
      "id": 448,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'chaos engineering'?",
      "type": "subjective",
      "answer": "Chaos engineering is the discipline of experimenting on a system in order to build confidence in its capability to withstand turbulent conditions in production. It involves proactively injecting failures (like killing servers, introducing network latency) to find weaknesses before they cause user-facing outages. The goal is to identify and fix systemic weaknesses.",
      "explanation": "Netflix famously pioneered this with their 'Chaos Monkey' tool."
    },
    {
      "id": 449,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is '2-phase commit' (2PC)?",
      "type": "subjective",
      "answer": "Two-phase commit is a distributed algorithm that coordinates all the processes that participate in a distributed atomic transaction on whether to commit or abort. It has a 'prepare' phase, where a coordinator asks all participants if they are ready to commit, and a 'commit' phase, where, if all participants agreed, the coordinator tells them to commit; otherwise, it tells them to abort. It ensures atomicity but is slow and has blocking issues if the coordinator fails.",
      "explanation": "It's a classic but often problematic approach to distributed transactions."
    },
    {
      "id": 450,
      "testId": 8,
      "difficulty": "expert",
      "question": "Explain the CAP theorem.",
      "type": "subjective",
      "answer": "The CAP theorem states that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency (every read gets the most recent write), Availability (every request gets a non-error response), and Partition Tolerance (the system works despite network partitions). In a real-world distributed system, network partitions are a fact of life, so the trade-off is always between consistency and availability (CP vs AP systems).",
      "explanation": "This is a fundamental principle guiding the design of all distributed systems."
    },
    {
      "id": 451,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is a 'log-structured merge-tree' (LSM-Tree)?",
      "type": "subjective",
      "answer": "An LSM-Tree is a data structure optimized for write-heavy workloads. Writes are first added to an in-memory table (memtable). When the memtable is full, it's flushed to disk as a sorted, immutable file called an SSTable. Over time, these SSTables are merged in the background (compaction) to remove duplicate or deleted data. This approach avoids slow, random disk I/O for writes, making it very performant for write-heavy systems like NoSQL databases.",
      "explanation": "Databases like Cassandra, LevelDB, and RocksDB are based on LSM-Trees."
    },
    {
      "id": 452,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'mTLS' (Mutual TLS)?",
      "type": "subjective",
      "answer": "Mutual TLS is an authentication method where both parties in a network connection, the client and the server, authenticate each other's identity using X.509 certificates. This is in contrast to standard TLS, where only the client verifies the server's certificate. mTLS is commonly used to secure communication between microservices within a trusted environment, ensuring that only authorized services can communicate with each other.",
      "explanation": "It provides strong, certificate-based authentication for service-to-service communication."
    },
    {
      "id": 453,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'Raft' consensus algorithm?",
      "type": "subjective",
      "answer": "Raft is a consensus algorithm designed to be more understandable than Paxos. It's used to manage a replicated log in a cluster of nodes. It works by electing a leader, which is responsible for managing the log and replicating it to follower nodes. If the leader fails, a new leader is elected. This ensures that all nodes agree on the sequence of operations, providing fault tolerance and consistency.",
      "explanation": "It's used in systems like etcd (Kubernetes's database) and Consul."
    },
    {
      "id": 454,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is 'CQRS' pattern?",
      "type": "subjective",
      "answer": "CQRS (Command Query Responsibility Segregation) is an architectural pattern that separates the model for reading data (Query) from the model for updating data (Command). This means you can have a highly normalized schema for writes to ensure consistency, and a denormalized, optimized schema for reads to improve performance. It's often used with event sourcing.",
      "explanation": "This separation allows for more flexibility and optimization of the read and write sides of a system."
    },
    {
      "id": 455,
      "testId": 8,
      "difficulty": "expert",
      "question": "What is a 'distributed transaction'?",
      "type": "subjective",
      "answer": "A distributed transaction is a transaction that affects several distinct resources, such as databases or message queues, which may be spread across multiple physical servers. The challenge is to ensure atomicity—that all parts of the transaction succeed, or all of them fail. This is difficult to achieve efficiently and reliably, and patterns like Sagas or protocols like Two-Phase Commit are used to manage them.",
      "explanation": "They are a notoriously difficult problem in distributed systems."
    },
     // Test 9: 45 Questions (27 MCQ, 18 Subjective) - Expert
    {
        "id": 456,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the 'Actor Model' of concurrency?",
        "type": "mcq",
        "options": [
            "A design pattern for UI components",
            "A mathematical model of concurrent computation where 'actors' are the universal primitives, communicating through asynchronous messages",
            "A specific implementation of multithreading in Java",
            "A client-server networking model"
        ],
        "answer": "A mathematical model of concurrent computation where 'actors' are the universal primitives, communicating through asynchronous messages",
        "explanation": "The Actor Model avoids shared state and locks, making it easier to build highly concurrent and fault-tolerant systems. Erlang and Akka are famous examples."
    },
    {
        "id": 457,
        "testId": 9,
        "difficulty": "expert",
        "question": "What problem does a 'service mesh' like Istio or Linkerd solve?",
        "type": "mcq",
        "options": [
            "It helps with database migrations",
            "It provides a dedicated infrastructure layer to manage service-to-service communication, handling concerns like traffic management, security, and observability",
            "It is a tool for frontend state management",
            "It automates CI/CD pipelines"
        ],
        "answer": "It provides a dedicated infrastructure layer to manage service-to-service communication, handling concerns like traffic management, security, and observability",
        "explanation": "A service mesh abstracts the complexity of network communication away from the application code itself."
    },
    {
        "id": 458,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the primary function of a 'Bloom Filter'?",
        "type": "mcq",
        "options": [
            "To sort data efficiently",
            "To encrypt data with perfect security",
            "To be a space-efficient, probabilistic data structure used to test whether an element is a member of a set, with a possibility of false positives",
            "To guarantee the uniqueness of elements in a set"
        ],
        "answer": "To be a space-efficient, probabilistic data structure used to test whether an element is a member of a set, with a possibility of false positives",
        "explanation": "It's used when a small chance of a false positive is acceptable in exchange for significant memory savings, e.g., checking for already-seen items in a web crawler."
    },
    {
        "id": 459,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'mTLS' (Mutual TLS)?",
        "type": "mcq",
        "options": [
            "A version of TLS with multiple layers of encryption",
            "A TLS handshake where only the client authenticates the server",
            "A process where both the client and server present certificates to authenticate each other",
            "A tool for managing TLS certificates"
        ],
        "answer": "A process where both the client and server present certificates to authenticate each other",
        "explanation": "mTLS is crucial for zero-trust networks and securing service-to-service communication."
    },
    {
        "id": 460,
        "testId": 9,
        "difficulty": "expert",
        "question": "Which of the following best describes 'eventual consistency'?",
        "type": "mcq",
        "options": [
            "The system is always consistent",
            "A consistency model where, given no new updates, all replicas of a piece of data will eventually converge to the same value",
            "The system will eventually become inconsistent",
            "A model where data is only consistent during a specific event"
        ],
        "answer": "A consistency model where, given no new updates, all replicas of a piece of data will eventually converge to the same value",
        "explanation": "This model is often chosen in distributed systems that prioritize high availability and partition tolerance over strong consistency."
    },
    {
        "id": 461,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'distributed hash table' (DHT)?",
        "type": "mcq",
        "options": [
            "A centralized database that uses hashing for keys",
            "A data structure used only in C++",
            "A decentralized distributed system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes",
            "A hashing algorithm for passwords"
        ],
        "answer": "A decentralized distributed system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes",
        "explanation": "DHTs are a core component of many peer-to-peer systems, like BitTorrent."
    },
    {
        "id": 462,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the 'Strangler Fig' pattern used for?",
        "type": "mcq",
        "options": [
            "To debug memory leaks",
            "To incrementally migrate a legacy monolithic application to a microservices architecture",
            "To optimize database queries",
            "To design a user interface"
        ],
        "answer": "To incrementally migrate a legacy monolithic application to a microservices architecture",
        "explanation": "It involves gradually replacing pieces of the monolith with new services, routing traffic to them until the monolith is 'strangled' and can be retired."
    },
    {
        "id": 463,
        "testId": 9,
        "difficulty": "expert",
        "question": "What does the 'L' in the SOLID principles stand for?",
        "type": "mcq",
        "options": [
            "Layered Architecture Principle",
            "Low Coupling Principle",
            "Liskov Substitution Principle",
            "Loose Typing Principle"
        ],
        "answer": "Liskov Substitution Principle",
        "explanation": "This principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program."
    },
    {
        "id": 464,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'golden signal' for monitoring systems, according to Google's SRE book?",
        "type": "mcq",
        "options": [
            "CPU Usage",
            "Latency",
            "Profitability",
            "Number of Deployments"
        ],
        "answer": "Latency",
        "explanation": "The four golden signals are Latency, Traffic, Errors, and Saturation. These provide a high-level overview of a service's health."
    },
    {
        "id": 465,
        "testId": 9,
        "difficulty": "expert",
        "question": "In CSS, what is the 'BFC' (Block Formatting Context)?",
        "type": "mcq",
        "options": [
            "A block-level font container",
            "A part of a visual CSS rendering of a web page in which block-level boxes are laid out. It is an area that contains floats.",
            "A CSS variable",
            "A naming convention"
        ],
        "answer": "A part of a visual CSS rendering of a web page in which block-level boxes are laid out. It is an area that contains floats.",
        "explanation": "Creating a new BFC (e.g., with `display: flow-root`) is a way to solve layout issues like collapsing margins or containing floating elements."
    },
    {
        "id": 466,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the primary difference between `git merge` and `git rebase`?",
        "type": "mcq",
        "options": [
            "They do the same thing",
            "`git merge` creates a new merge commit, preserving branch history, while `git rebase` rewrites commit history to create a linear sequence",
            "`git rebase` is safer than `git merge`",
            "`git merge` is for local branches, `git rebase` is for remote branches"
        ],
        "answer": "`git merge` creates a new merge commit, preserving branch history, while `git rebase` rewrites commit history to create a linear sequence",
        "explanation": "Rebase results in a cleaner, linear history, but should not be used on public branches that others are working on."
    },
    {
        "id": 467,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'QUIC' and what is its role in HTTP/3?",
        "type": "mcq",
        "options": [
            "A compression algorithm",
            "A new transport layer network protocol that serves as the foundation for HTTP/3, reducing latency and solving head-of-line blocking",
            "A security protocol",
            "A JavaScript framework"
        ],
        "answer": "A new transport layer network protocol that serves as the foundation for HTTP/3, reducing latency and solving head-of-line blocking",
        "explanation": "QUIC is built on top of UDP and is designed to make HTTP traffic faster and more reliable, especially on lossy networks."
    },
    {
        "id": 468,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        "type": "mcq",
        "options": [
            "A type of database",
            "A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result",
            "An encryption algorithm",
            "A sorting algorithm"
        ],
        "answer": "A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result",
        "explanation": "CRDTs are crucial for building collaborative, real-time applications like Google Docs."
    },
    {
        "id": 469,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the purpose of 'tree shaking' in a modern JavaScript bundler?",
        "type": "mcq",
        "options": [
            "To visualize the component tree",
            "To eliminate dead (unused) code from the final bundle by analyzing static `import` and `export` statements",
            "To reformat the code according to style guidelines",
            "To check for security vulnerabilities"
        ],
        "answer": "To eliminate dead (unused) code from the final bundle by analyzing static `import` and `export` statements",
        "explanation": "Tree shaking is a critical optimization for reducing the size of JavaScript bundles and improving application load times."
    },
    {
        "id": 470,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'tailwind CSS' and how does it differ from traditional CSS frameworks?",
        "type": "mcq",
        "options": [
            "A component-based framework like Bootstrap",
            "A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup",
            "A CSS preprocessor like Sass",
            "A JavaScript library for styling"
        ],
        "answer": "A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup",
        "explanation": "Instead of pre-styled components like `.btn`, you compose designs with utilities like `bg-blue-500`, `px-4`, and `rounded`."
    },
    {
        "id": 471,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'Server-Sent Events' (SSE)?",
        "type": "mcq",
        "options": [
            "A bidirectional communication protocol",
            "A technology where a browser receives automatic updates from a server via a standard HTTP connection (unidirectional)",
            "An alias for WebSockets",
            "A database event system"
        ],
        "answer": "A technology where a browser receives automatic updates from a server via a standard HTTP connection (unidirectional)",
        "explanation": "SSE is simpler than WebSockets and is ideal for scenarios where the client only needs to receive data from the server, like a live news feed."
    },
    {
        "id": 472,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the `Same-Origin Policy` (SOP)?",
        "type": "mcq",
        "options": [
            "A policy that ensures all servers are in the same data center",
            "A critical web browser security mechanism that restricts how a document or script from one origin can interact with a resource from another origin",
            "A CSS styling rule",
            "A rule for naming variables"
        ],
        "answer": "A critical web browser security mechanism that restricts how a document or script from one origin can interact with a resource from another origin",
        "explanation": "SOP is a cornerstone of web security, preventing malicious sites from reading sensitive data from other sites you may be logged into."
    },
    {
        "id": 473,
        "testId": 9,
        "difficulty": "expert",
        "question": "What does it mean for an operation to be 'atomic'?",
        "type": "mcq",
        "options": [
            "The operation is very small",
            "The operation is part of an atomic bomb",
            "The operation is an indivisible and irreducible series of operations such that either all occur or none occur",
            "The operation is related to nuclear physics"
        ],
        "answer": "The operation is an indivisible and irreducible series of operations such that either all occur or none occur",
        "explanation": "Atomicity is the 'A' in ACID, a key property of database transactions."
    },
    {
        "id": 474,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'lambda' function in languages like Python or Java?",
        "type": "mcq",
        "options": [
            "A long, detailed function",
            "A small, anonymous function defined with the `lambda` keyword",
            "A function that runs on AWS Lambda",
            "A function used for mathematical calculations only"
        ],
        "answer": "A small, anonymous function defined with the `lambda` keyword",
        "explanation": "Lambda functions are useful for short, simple operations, especially when passed as arguments to higher-order functions."
    },
    {
        "id": 475,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'load balancer' and what are common load balancing algorithms?",
        "type": "mcq",
        "options": [
            "A tool to balance the weight of servers",
            "A device that distributes network or application traffic across multiple servers. Common algorithms include Round Robin, Least Connections, and IP Hash.",
            "A database feature",
            "A frontend caching mechanism"
        ],
        "answer": "A device that distributes network or application traffic across multiple servers. Common algorithms include Round Robin, Least Connections, and IP Hash.",
        "explanation": "Load balancers are essential for achieving high availability and scalability."
    },
    {
        "id": 476,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'sharding' in a database context?",
        "type": "mcq",
        "options": [
            "A way to encrypt data",
            "A type of horizontal partitioning where data is spread across multiple databases or servers",
            "A backup strategy",
            "A query optimization technique"
        ],
        "answer": "A type of horizontal partitioning where data is spread across multiple databases or servers",
        "explanation": "Sharding is a common technique for scaling out databases to handle massive amounts of data and traffic."
    },
    {
        "id": 477,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the 'n+1' query problem?",
        "type": "mcq",
        "options": [
            "A security vulnerability",
            "A performance issue where an application makes one initial query to retrieve a list of items, and then makes 'n' additional queries to retrieve related data for each item",
            "A mathematical paradox",
            "An error that occurs when `n` is equal to -1"
        ],
        "answer": "A performance issue where an application makes one initial query to retrieve a list of items, and then makes 'n' additional queries to retrieve related data for each item",
        "explanation": "This is a common performance bottleneck that can usually be solved by 'eager loading' the related data in the initial query."
    },
    {
        "id": 478,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'OAuth 2.0'?",
        "type": "mcq",
        "options": [
            "An authentication protocol",
            "An authorization framework that enables a third-party application to obtain limited access to a user's resources without exposing their credentials",
            "A type of encryption",
            "A session management library"
        ],
        "answer": "An authorization framework that enables a third-party application to obtain limited access to a user's resources without exposing their credentials",
        "explanation": "OAuth 2.0 is the industry standard for delegated authorization."
    },
    {
        "id": 479,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the difference between 'authentication' and 'authorization'?",
        "type": "mcq",
        "options": [
            "They are the same thing",
            "Authentication is verifying who a user is, while authorization is determining what they are allowed to do",
            "Authorization happens before authentication",
            "Authentication is for users, authorization is for services"
        ],
        "answer": "Authentication is verifying who a user is, while authorization is determining what they are allowed to do",
        "explanation": "You authenticate to get into the building, but you are authorized to enter only certain rooms."
    },
    {
        "id": 480,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'race condition'?",
        "type": "mcq",
        "options": [
            "A bug in a racing game",
            "An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events",
            "A network performance issue",
            "A type of CPU"
        ],
        "answer": "An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events",
        "explanation": "Race conditions are a common and difficult problem in concurrent programming, often leading to corrupted data."
    },
    {
        "id": 481,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'two-phase commit' (2PC)?",
        "type": "mcq",
        "options": [
            "A git workflow",
            "A distributed algorithm that coordinates all the processes in a distributed atomic transaction on whether to commit or abort",
            "A deployment strategy",
            "A security protocol"
        ],
        "answer": "A distributed algorithm that coordinates all the processes in a distributed atomic transaction on whether to commit or abort",
        "explanation": "While it guarantees atomicity, 2PC can be slow and is not fault-tolerant if the coordinator fails."
    },
    {
        "id": 482,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'vector clock'?",
        "type": "mcq",
        "options": [
            "A physical clock used in vector graphics",
            "A data structure used in distributed systems to determine the partial causal ordering of events",
            "A CSS measurement unit",
            "A machine learning algorithm"
        ],
        "answer": "A data structure used in distributed systems to determine the partial causal ordering of events",
        "explanation": "Vector clocks are a mechanism for detecting causality violations and resolving conflicts in eventually consistent systems."
    },
    {
        "id": 483,
        "testId": 9,
        "difficulty": "expert",
        "question": "Explain the difference between optimistic and pessimistic locking in databases.",
        "type": "subjective",
        "answer": "Pessimistic locking assumes conflicts are frequent and locks a resource before a transaction begins working with it, preventing other transactions from accessing it. This ensures consistency but can hurt concurrency. Optimistic locking assumes conflicts are rare. It does not lock resources, but before committing, it checks if the data has been modified by another transaction since it was read. If a conflict is found, the transaction is rolled back.",
        "explanation": "Pessimistic locking is 'ask for permission,' while optimistic locking is 'ask for forgiveness.'"
    },
    {
        "id": 484,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'Chaos Engineering' and what is its purpose?",
        "type": "subjective",
        "answer": "Chaos Engineering is the discipline of experimenting on a distributed system in order to build confidence in its capability to withstand turbulent conditions in production. It involves deliberately injecting controlled failures—like terminating servers, introducing network latency, or causing CPU spikes—to identify weaknesses and improve system resilience before those weaknesses cause real outages.",
        "explanation": "The goal is to find failures before they find you. Netflix's 'Chaos Monkey' is a famous example."
    },
    {
        "id": 485,
        "testId": 9,
        "difficulty": "expert",
        "question": "Describe the 'Saga' pattern for distributed transactions.",
        "type": "subjective",
        "answer": "The Saga pattern is a way to manage data consistency across multiple microservices without using traditional distributed transactions. A saga is a sequence of local transactions where each transaction updates a single service and publishes an event to trigger the next one. If any local transaction fails, the saga executes a series of compensating transactions that undo the changes made by the preceding transactions, thereby maintaining consistency.",
        "explanation": "It's an event-driven approach to achieving atomicity in a distributed environment."
    },
    {
        "id": 486,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'Log-Structured Merge-Tree' (LSM-Tree)?",
        "type": "subjective",
        "answer": "An LSM-Tree is a data structure optimized for write-heavy workloads, commonly used in NoSQL databases like Cassandra. It works by appending all writes to an in-memory table (memtable). When the memtable is full, it is flushed to disk as a sorted, immutable file (SSTable). In the background, these SSTables are periodically merged (compacted) to remove duplicates and deleted data. This approach avoids slow, random disk writes, making it highly performant for writes.",
        "explanation": "This design favors fast write performance at the expense of more complex read operations."
    },
    {
        "id": 487,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'Domain-Driven Design' (DDD) and what is a 'ubiquitous language'?",
        "type": "subjective",
        "answer": "Domain-Driven Design is an approach to software development that centers on creating a rich, expressive model of the core business domain. A key concept in DDD is the 'ubiquitous language,' which is a shared language developed by the team (developers, domain experts, stakeholders) to talk about the domain. This language is used in all communication and in the code itself to eliminate ambiguity and connect the software directly to the business concepts.",
        "explanation": "DDD helps to manage complexity in large, enterprise systems."
    },
    {
        "id": 488,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'end-to-end encryption' (E2EE)?",
        "type": "subjective",
        "answer": "End-to-end encryption is a communication system where only the communicating users can read the messages. It prevents potential eavesdroppers, including the service provider itself, from accessing the cryptographic keys needed to decrypt the conversation. The server facilitates the connection but has no ability to read the message content. This ensures the highest level of confidentiality.",
        "explanation": "Popular messaging apps like Signal and WhatsApp use E2EE."
    },
    {
        "id": 489,
        "testId": 9,
        "difficulty": "expert",
        "question": "Explain 'Consistent Hashing' and its primary benefit.",
        "type": "subjective",
        "answer": "Consistent hashing is a hashing technique where, when a hash table is resized, only a small number of keys need to be remapped. In a distributed system, this means when a server is added or removed, the number of objects that need to be relocated is minimized. This prevents a massive, system-wide reshuffling of data, making the system much more scalable and stable.",
        "explanation": "It's essential for distributed caches and databases like DynamoDB and Cassandra."
    },
    {
        "id": 490,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is a 'thundering herd' problem and how can it be mitigated?",
        "type": "subjective",
        "answer": "The 'thundering herd' problem occurs when a large number of processes or threads that are all waiting for the same event are awakened, but only one can actually handle it. This causes a massive spike in contention and context switching, degrading system performance. It can be mitigated by having only one process wait for the event and then wake up the others, or by using more modern kernel APIs that are designed to prevent this issue (e.g., Linux's `epoll`'s `EPOLLEXCLUSIVE` flag).",
        "explanation": "This is a classic problem in high-concurrency systems."
    },
    {
        "id": 491,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the 'publish-subscribe' (pub/sub) messaging pattern?",
        "type": "subjective",
        "answer": "Pub/sub is a messaging pattern where senders (publishers) do not send messages directly to specific receivers (subscribers). Instead, they publish messages to topics or channels. Subscribers express interest in one or more topics and receive all messages published to those topics. This decouples the publisher and subscriber, allowing them to evolve independently and improving scalability.",
        "explanation": "Systems like Apache Kafka, RabbitMQ, and Google Cloud Pub/Sub are built on this pattern."
    },
    {
        "id": 492,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'Test-Driven Development' (TDD)?",
        "type": "subjective",
        "answer": "TDD is a software development process that follows a short, repetitive cycle: 1) Write a failing automated test case that defines a new function or improvement (Red). 2) Write the minimum amount of code necessary to pass the test (Green). 3) Refactor the code to improve its design and quality while ensuring the tests still pass (Refactor). This process helps ensure high test coverage and leads to more robust, modular code.",
        "explanation": "The motto is 'Red, Green, Refactor'."
    },
    {
        "id": 493,
        "testId": 9,
        "difficulty": "expert",
        "question": "What are 'serverless' functions and what are their trade-offs?",
        "type": "subjective",
        "answer": "Serverless functions (like AWS Lambda or Google Cloud Functions) are a cloud computing model where you write and deploy code without managing any underlying server infrastructure. The main benefits are automatic scaling and a pay-per-use model. The trade-offs include potential vendor lock-in, statelessness (which can make some application designs difficult), and 'cold start' latency for infrequently used functions.",
        "explanation": "Serverless is ideal for event-driven, short-lived tasks."
    },
    {
        id": 494,
        "testId": 9,
        "difficulty": "expert",
        "question": "How does 'blue-green deployment' work?",
        "type": "subjective",
        "answer": "Blue-green deployment is a release strategy that reduces downtime and risk. You maintain two identical production environments: 'blue' (the current live version) and 'green' (the new version). You deploy and test the new version in the green environment. Once it's verified, you switch the router to send all live traffic to the green environment. This allows for instant, zero-downtime releases and a simple rollback strategy (just switch the router back to blue).",
        "explanation": "It requires having double the infrastructure, which can be a cost consideration."
    },
    {
        "id": 495,
        "testId": 9,
        "difficulty": "expert",
        "question": "Explain the difference between leader-based and leaderless database replication.",
        "type": "subjective",
        "answer": "In leader-based replication, one replica (the leader or master) handles all write requests and propagates the changes to follower replicas. This provides strong consistency but the leader is a single point of failure. In leaderless replication, any replica can accept writes. This offers higher write availability and fault tolerance, but it makes consistency more complex to manage, often relying on quorums and read-repair mechanisms to resolve conflicts.",
        "explanation": "Leader-based is simpler (e.g., PostgreSQL). Leaderless is more available (e.g., Cassandra)."
    },
    {
        "id": 496,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'backpressure' in reactive streaming systems?",
        "type": "subjective",
        "answer": "Backpressure is a flow control mechanism where a data consumer can signal to a data producer that it is becoming overwhelmed. This allows the consumer to request that the producer slow down or stop sending data temporarily, preventing buffer overflows and system instability. It allows the system to gracefully handle situations where the rate of production exceeds the rate of consumption.",
        "explanation": "It's a crucial feature for building resilient, asynchronous data pipelines."
    },
    {
        "id": 497,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is the 'Raft' consensus algorithm?",
        "type": "subjective",
        "answer": "Raft is a consensus algorithm designed to be more understandable than its predecessor, Paxos. It is used to manage a replicated log among a cluster of nodes. It works by electing a single leader, which is responsible for accepting client requests, appending them to its log, and replicating the log to follower nodes. This ensures that all nodes in the cluster agree on the same sequence of operations, providing strong consistency and fault tolerance.",
        "explanation": "Raft is used in many modern distributed systems, including etcd and Consul."
    },
    {
        "id": 498,
        "testId": 9,
        "difficulty": "expert",
        "question": "What is 'CQRS' (Command Query Responsibility Segregation)?",
        "type": "subjective",
        "answer": "CQRS is an architectural pattern that separates the models used for updating data (Commands) from the models used for reading data (Queries). This allows for independent optimization of the read and write sides of an application. For example, the write model might be a highly normalized relational schema, while the read model could be a denormalized view or a different type of database entirely, optimized for fast queries.",
        "explanation": "CQRS is often used with Event Sourcing to build highly scalable and flexible systems."
    },
    {
        "id": 499,
        "testId": 9,
        "difficulty": "expert",
        "question": "Explain what a 'service mesh' is and why it's useful.",
        "type": "subjective",
        "answer": "A service mesh is a dedicated infrastructure layer for managing service-to-service communication in a microservices architecture. It works by injecting a 'sidecar' proxy next to each service instance. This proxy intercepts all network traffic, handling concerns like service discovery, load balancing, security (mTLS), traffic management (circuit breaking, retries), and observability (metrics, traces). This abstracts away complex networking logic from the application code, making services simpler and more resilient.",
        "explanation": "Istio and Linkerd are popular service mesh implementations."
    },
    {
        "id": 500,
        "testId": 9,
        "difficulty": "expert",
        "question": "How do JavaScript `async/await` and Promises relate to the event loop?",
        "type": "subjective",
        "answer": "async/await and Promises are high-level abstractions for managing asynchronous operations that are powered by the event loop. When you await a Promise, the async function is paused, and its execution context is removed from the call stack. The underlying asynchronous operation (e.g., a fetch request) runs in the background. When the Promise settles, a task is placed in the microtask queue. The event loop prioritizes the microtask queue, so as soon as the call stack is clear, the async function's execution is resumed.",
        "explanation": "They provide a synchronous-looking syntax for code that is fundamentally asynchronous and non-blocking."
    },
     // Test 10: 50 Questions (30 MCQ, 20 Subjective) - Expert
     {
        "id": 501,
        "testId": 10,
        "difficulty": "expert",
        "question": "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        "type": "mcq",
        "options": [
            "A type of database",
            "A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result",
            "An encryption algorithm",
            "A sorting algorithm"
        ],
        "answer": "A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result",
        "explanation": "CRDTs are crucial for building collaborative, real-time applications like Google Docs."
    },
    {
        "id": 502,
        "testId": 10,
        "difficulty": "expert",
        "question": "What is 'tail latency' and why is it important?",
        "type": "mcq",
        "options": [
            "The latency of the last request in a sequence",
            "A measure of the latency experienced by the top 1% or 0.1% of slowest requests, which is important because in a microservices architecture, a user-facing operation can be slowed down by the slowest of its many backend dependencies",
            "The time it takes for a log tail to update",
            "A network hardware delay"
        ],
        "answer": "A measure of the latency experienced by the top 1% or 0.1% of slowest requests, which is important because in a microservices architecture, a user-facing operation can be slowed down by the slowest of its many backend dependencies",
        "explanation": "Focusing on average latency can hide significant problems that affect a meaningful number of users."
    },
    {
        "id": 503,
        "testId": 10,
        "difficulty": "expert",
        "question": "What is 'idempotency' in the context of API design?",
        "type": "mcq",
        "options": [
            "Ensuring an API is secure",
            "The property of an operation where making the same request multiple times has the same effect as making it once",
            "A performance optimization technique",
            "A way to version APIs"
        ],
        "answer": "The property of an operation where making the same request multiple times has the same effect as making it once",
        "explanation": "HTTP methods like GET, PUT, and DELETE are idempotent. This is crucial for building reliable systems where requests might be retried."
    },
    {
        "id": 504,
        "testId": 10,
        "difficulty": "expert",
        "question": "What is 'gRPC'?",
        "type": "mcq",
        "options": [
            "A REST API framework",
            "A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2",
            "A GraphQL client",
            "A database protocol"
        ],
        "answer": "A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2",
        "explanation": "gRPC is highly efficient and well-suited for communication between microservices."
    },
    {
        id: 505,
        testId: 10,
        difficulty: 'expert',
        question: "In the context of CSS, what does `will-change` property do?",
        type: 'mcq',
        options: [
            'It prevents a property from being changed',
            'It animates a property change',
            'It hints to the browser about which properties are expected to change, allowing it to perform optimizations in advance',
            'It is an alias for `transform`'
        ],
        answer: 'It hints to the browser about which properties are expected to change, allowing it to perform optimizations in advance',
        explanation: 'Using `will-change` can improve animation performance by promoting the element to its own GPU layer, but it should be used sparingly.'
    },
    {
        id: 506,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary benefit of 'HTTP/2 multiplexing'?",
        type: 'mcq',
        options: [
            'It encrypts all traffic',
            'It allows multiple requests and responses to be sent in parallel over a single TCP connection, eliminating head-of-line blocking',
            'It compresses HTTP headers',
            'It is a caching mechanism'
        ],
        answer: 'It allows multiple requests and responses to be sent in parallel over a single TCP connection, eliminating head-of-line blocking',
        explanation: 'This is a major performance improvement over HTTP/1.1, which could only handle one request at a time per connection.'
    },
    {
        id: 507,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Kubernetes Operator'?",
        type: 'mcq',
        options: [
            'A person who operates a Kubernetes cluster',
            'A security policy for Kubernetes',
            'A method of packaging, deploying, and managing a Kubernetes application by extending the Kubernetes API with custom controllers',
            'A networking plugin for Kubernetes'
        ],
        answer: 'A method of packaging, deploying, and managing a Kubernetes application by extending the Kubernetes API with custom controllers',
        explanation: 'Operators encode human operational knowledge for managing stateful applications (like databases) on Kubernetes.'
    },
    {
        id: 508,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'semantic versioning' (SemVer)?",
        type: 'mcq',
        options: [
            'A way to add meaning to version numbers',
            'A versioning scheme (MAJOR.MINOR.PATCH) where MAJOR indicates breaking changes, MINOR adds functionality in a backward-compatible way, and PATCH is for backward-compatible bug fixes',
            'A versioning scheme based on dates',
            'A security scanning tool'
        ],
        answer: 'A versioning scheme (MAJOR.MINOR.PATCH) where MAJOR indicates breaking changes, MINOR adds functionality in a backward-compatible way, and PATCH is for backward-compatible bug fixes',
        explanation: 'SemVer provides a standard way to communicate the nature of changes in a new release.'
    },
    {
        id: 509,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'PaaS' (Platform as a Service)?",
        type: 'mcq',
        options: [
            'A service that provides virtual machines',
            'A cloud computing model that provides a platform for developers to build, run, and manage applications without dealing with the underlying infrastructure',
            'A complete software application delivered over the web',
            'A service for managing physical servers'
        ],
        answer: 'A cloud computing model that provides a platform for developers to build, run, and manage applications without dealing with the underlying infrastructure',
        explanation: 'PaaS abstracts away the operating system, servers, and networking. Heroku is a classic example.'
    },
    {
        id: 510,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'WebRTC'?",
        type: 'mcq',
        options: [
            'A new version of CSS',
            'A framework that enables real-time communication (video, voice, and generic data) to be sent directly between browsers and devices (peer-to-peer)',
            'A server-side rendering technology',
            'A security protocol'
        ],
        answer: 'A framework that enables real-time communication (video, voice, and generic data) to be sent directly between browsers and devices (peer-to-peer)',
        explanation: 'WebRTC is the technology that powers applications like Google Meet and Discord.'
    },
    {
        id: 511,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'garbage collection' in languages like Java or JavaScript?",
        type: 'mcq',
        options: [
            'A process of cleaning up unused files',
            'A form of automatic memory management that reclaims memory occupied by objects that are no longer in use by the program',
            'A debugging tool',
            'A code optimization technique'
        ],
        answer: 'A form of automatic memory management that reclaims memory occupied by objects that are no longer in use by the program',
        explanation: 'This frees the developer from manual memory management, but can sometimes introduce unpredictable pauses.'
    },
    {
        id: 512,
        testId: 10,
        difficulty: 'expert',
        question: "What does the 'ACID' acronym stand for in database transactions?",
        type: 'mcq',
        options: [
            'Atomicity, Concurrency, Integrity, Durability',
            'Availability, Consistency, Isolation, Durability',
            'Atomicity, Consistency, Isolation, Durability',
            'Association, Concurrency, Integrity, Distribution'
        ],
        answer: 'Atomicity, Consistency, Isolation, Durability',
        explanation: 'These four properties guarantee that database transactions are processed reliably.'
    },
    {
        id: 513,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'API versioning'?",
        type: 'mcq',
        options: [
            'A way to check the version of an API',
            'The practice of managing changes to an API to ensure that new changes do not break existing client applications',
            'A tool for documenting APIs',
            'A security feature for APIs'
        ],
        answer: 'The practice of managing changes to an API to ensure that new changes do not break existing client applications',
        explanation: 'This is often done by including a version number in the URL (e.g., `/v2/users`) or in a request header.'
    },
    {
        id: 514,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Jamstack' architecture?",
        type: 'mcq',
        options: [
            'A traditional server-rendered architecture',
            'A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup',
            'A backend framework for Java',
            'A mobile development stack'
        ],
        answer: 'A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup',
        explanation: 'Jamstack sites are often pre-rendered as static files and served from a CDN, making them very fast and secure.'
    },
    {
        id: 515,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Stateful' vs 'Stateless' architecture?",
        type: 'mcq',
        options: [
            'Stateful means the server stores client session data; stateless means each request must contain all necessary information',
            'Stateless applications cannot store any data',
            'Stateful applications are faster',
            'There is no difference'
        ],
        answer: 'Stateful means the server stores client session data; stateless means each request must contain all necessary information',
        explanation: 'Stateless architectures (a key principle of REST) are easier to scale horizontally, as any server can handle any request.'
    },
    {
        id: 516,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Singleton' design pattern?",
        type: 'mcq',
        options: [
            'A pattern for creating single-page applications',
            'A creational pattern that restricts the instantiation of a class to a single object',
            'A pattern for database connections',
            'A way to manage state in React'
        ],
        answer: 'A creational pattern that restricts the instantiation of a class to a single object',
        explanation: 'This is useful when exactly one object is needed to coordinate actions across a system, though it can be considered an anti-pattern as it introduces global state.'
    },
    {
        id: 517,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'dependency injection'?",
        type: 'mcq',
        options: [
            'A security vulnerability',
            'A design pattern in which a component\'s dependencies are provided to it from an external source rather than it creating them itself',
            'A way to manage `node_modules`',
            'A database management technique'
        ],
        answer: 'A design pattern in which a component\'s dependencies are provided to it from an external source rather than it creating them itself',
        explanation: 'This inverts the control, leading to more loosely coupled, modular, and testable code.'
    },
    {
        id: 518,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'polymorphism'?",
        type: 'mcq',
        options: [
            'A way to store many shapes',
            'A core concept of object-oriented programming that allows objects of different classes to be treated as objects of a common superclass',
            'A data encryption method',
            'A memory management technique'
        ],
        answer: 'A core concept of object-oriented programming that allows objects of different classes to be treated as objects of a common superclass',
        explanation: 'It allows for writing more generic and flexible code. Method overriding is a common way to achieve polymorphism.'
    },
    {
        id: 519,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'mutex'?",
        type: 'mcq',
        options: [
            'A type of database',
            'A synchronization primitive that provides \'mutual exclusion,\' ensuring that only one thread can access a shared resource at a time',
            'A network hardware device',
            'An error in a program'
        ],
        answer: 'A synchronization primitive that provides \'mutual exclusion,\' ensuring that only one thread can access a shared resource at a time',
        explanation: 'Mutexes are a fundamental tool for preventing race conditions in multithreaded programming.'
    },
    {
        id: 520,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Big O notation' used for?",
        type: 'mcq',
        options: [
            'To measure the exact speed of an algorithm',
            'To describe the performance or complexity of an algorithm in terms of how its runtime or space requirements grow as the input size grows',
            'To write mathematical formulas in code',
            'To document code'
        ],
        answer: 'To describe the performance or complexity of an algorithm in terms of how its runtime or space requirements grow as the input size grows',
        explanation: 'It provides a high-level understanding of an algorithm\'s efficiency, such as O(n) for linear time or O(log n) for logarithmic time.'
    },
    {
        id: 521,
        testId: 10,
        difficulty: 'expert',
        question: "What is the `this` keyword in JavaScript?",
        type: 'mcq',
        options: [
            'It always refers to the global window object',
            'Its value is determined by how a function is called (the execution context)',
            'It refers to the function itself',
            'It is a reference to the `document` object'
        ],
        answer: 'Its value is determined by how a function is called (the execution context)',
        explanation: 'In a method, it\'s the object. In a simple function call, it can be the global object or `undefined` in strict mode. Arrow functions lexically bind `this`.'
    },
    {
        id: 522,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'JWT' (JSON Web Token)?",
        type: 'mcq',
        options: [
            'A session cookie',
            'A compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication and authorization',
            'An encryption standard',
            'A JavaScript object'
        ],
        answer: 'A compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication and authorization',
        explanation: 'A JWT is digitally signed, allowing the receiver to verify its authenticity.'
    },
    {
        id: 523,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Web Worker'?",
        type: 'mcq',
        options: [
            'A UI component for displaying user profiles',
            'A simple way for web content to run scripts in background threads, allowing for long-running, CPU-intensive tasks without blocking the main UI thread',
            'A security feature',
            'A CSS animation property'
        ],
        answer: 'A simple way for web content to run scripts in background threads, allowing for long-running, CPU-intensive tasks without blocking the main UI thread',
        explanation: 'Web Workers are essential for maintaining a responsive user interface during heavy computations.'
    },
    {
        id: 524,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Webpack'?",
        type: 'mcq',
        options: [
            'A JavaScript framework',
            'A static module bundler for modern JavaScript applications. It takes modules with dependencies and generates static assets representing those modules.',
            'A code editor',
            'A testing library'
        ],
        answer: 'A static module bundler for modern JavaScript applications. It takes modules with dependencies and generates static assets representing those modules.',
        explanation: 'Webpack is a fundamental tool in the modern frontend development toolchain, enabling features like code splitting, loaders, and plugins.'
    },
    {
        id: 525,
        testId: 10,
        difficulty: 'expert',
        question: "What is the `useMemo` hook in React?",
        type: 'mcq',
        options: [
            'A hook for managing component state',
            'A hook that memoizes the result of a function, re-computing it only when its dependencies change, to optimize performance',
            'A hook for handling side effects',
            'A hook for fetching data'
        ],
        answer: 'A hook that memoizes the result of a function, re-computing it only when its dependencies change, to optimize performance',
        explanation: 'It is used to prevent expensive calculations from being re-executed on every render.'
    },
    {
        id: 526,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Babel' in the context of JavaScript?",
        type: 'mcq',
        options: [
            'A package manager',
            'A JavaScript compiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backward-compatible version of JavaScript that can be run by older browsers',
            'A testing framework',
            'A linter'
        ],
        answer: 'A JavaScript compiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backward-compatible version of JavaScript that can be run by older browsers',
        explanation: 'Babel is a crucial tool that allows developers to use the latest JavaScript features while maintaining broad browser support.'
    },
    {
        id: 527,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'man-in-the-middle' (MITM) attack?",
        type: 'mcq',
        options: [
            'An attack where the attacker overloads a server',
            'An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other',
            'An attack that injects malicious scripts into a website',
            'An attack that tries to guess a user\'s password'
        ],
        "answer": "An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other",
        "explanation": "HTTPS is the primary defense against MITM attacks, as it encrypts the communication and verifies the server's identity."
    },
    {
        id: 528,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'DNS' (Domain Name System)?",
        type: 'mcq',
        options: [
            'A protocol for sending email',
            'The system that translates human-readable domain names (like google.com) into machine-readable IP addresses',
            'A type of computer virus',
            'A file storage system'
        ],
        answer: 'The system that translates human-readable domain names (like google.com) into machine-readable IP addresses',
        explanation: 'DNS is often called the \'phonebook of the Internet\' and is a fundamental component of how the web works.'
    },
    {
        id: 529,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Server-Side Rendering' (SSR)?",
        type: 'mcq',
        options: [
            'Rendering a web page entirely in the client\'s browser',
            'The process of rendering a client-side JavaScript application on the server and sending a fully rendered HTML page to the browser',
            'A technique for caching server responses',
            'A type of database'
        ],
        answer: 'The process of rendering a client-side JavaScript application on the server and sending a fully rendered HTML page to the browser',
        explanation: 'SSR improves initial page load performance (perceived speed) and is beneficial for SEO. Frameworks like Next.js specialize in this.'
    },
    {
        id: 530,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'container orchestration' tool like Kubernetes?",
        type: 'mcq',
        options: [
            'A tool for building container images',
            'A tool for automating the deployment, scaling, and management of containerized applications',
            'A monitoring tool for containers',
            'A container runtime like Docker'
        ],
        answer: 'A tool for automating the deployment, scaling, and management of containerized applications',
        explanation: 'Kubernetes manages the complexity of running applications across a cluster of machines, handling tasks like scheduling, networking, and service discovery.'
    },
    {
        id: 531,
        testId: 10,
        difficulty: 'expert',
        question: "How does 'public key cryptography' (asymmetric encryption) work?",
        type: 'subjective',
        answer: "Public key cryptography uses a pair of keys: a public key and a private key. The public key can be shared freely. A message encrypted with the public key can only be decrypted with the corresponding private key. This ensures confidentiality. It can also be used for digital signatures: a message signed with a private key can be verified by anyone with the public key, ensuring authenticity and non-repudiation.",
        explanation: "This is the foundation of modern secure communication, including HTTPS/TLS."
    },
    {
        id: 532,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'salting' in the context of password hashing and why is it important?",
        type: 'subjective',
        answer: "Salting is the process of adding a unique, randomly generated string (the salt) to each user's password before it is hashed. The salt is then stored along with the hash. This is important because it ensures that even if two users have the same password, their stored hashes will be different. This defeats 'rainbow table' attacks, which use precomputed hashes of common passwords.",
        explanation: "Without a unique salt for each password, security is significantly weakened."
    },
    {
        id: 533,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the difference between TCP and UDP.",
        type: 'subjective',
        answer: "TCP (Transmission Control Protocol) is a connection-oriented protocol that guarantees reliable, ordered delivery of data. It establishes a connection (handshake), numbers packets, and re-transmits lost packets. UDP (User Datagram Protocol) is a connectionless protocol that is faster but provides no guarantees about delivery, order, or duplication. TCP is used for applications like web browsing and email where reliability is key. UDP is used for applications like live video streaming or online gaming where speed is more critical than perfect reliability.",
        explanation: "TCP is like a registered letter; UDP is like a postcard."
    },
    {
        id: 534,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'DDoS' (Distributed Denial of Service) attack?",
        type: 'subjective',
        answer: "A DDoS attack is a malicious attempt to disrupt a service by overwhelming it with a flood of traffic from many different sources (a 'botnet'). The goal is to exhaust the target's resources (like bandwidth, CPU, or memory) so that it cannot respond to legitimate requests. Because the traffic comes from many distributed sources, it's difficult to block.",
        explanation: "Defenses involve services that can absorb and filter out the malicious traffic before it reaches the target server."
    },
    {
        id: 535,
        testId: 10,
        difficulty: 'expert',
        question: "What is a CI/CD pipeline?",
        type: 'subjective',
        answer: "A CI/CD pipeline is an automated workflow that developers use to build, test, and deploy their software. CI (Continuous Integration) is the practice of frequently merging code changes into a central repository, where automated builds and tests are run. CD (Continuous Delivery/Deployment) is the practice of automatically releasing the successfully tested code to a staging or production environment. The entire pipeline automates the path from code commit to production release.",
        explanation: "CI/CD is a core practice of DevOps, enabling faster and more reliable software delivery."
    },
    {
        id: 536,
        testId: 10,
        difficulty: 'expert',
        question: "Describe what happens, from a networking perspective, when you type a URL into your browser and press Enter.",
        type: 'subjective',
        answer: "1) **DNS Lookup:** The browser checks its cache for the domain's IP address. If not found, it queries a DNS server to resolve the domain name to an IP address. 2) **TCP Handshake:** The browser establishes a TCP connection with the server at that IP address using a three-way handshake (SYN, SYN-ACK, ACK). 3) **TLS Handshake:** For HTTPS, a TLS handshake occurs to establish a secure, encrypted channel. 4) **HTTP Request:** The browser sends an HTTP GET request to the server for the specified resource. 5) **HTTP Response:** The server processes the request and sends back an HTTP response, including the status code and the page's HTML content. 6) **Rendering:** The browser parses the HTML and begins rendering the page, making additional requests for assets like CSS, JS, and images.",
        explanation: "This is a fundamental and comprehensive question about how the web works."
    },
    {
        id: 537,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Infrastructure as Code' (IaC)?",
        type: 'subjective',
        answer: "IaC is the practice of managing and provisioning infrastructure (like servers, networks, and databases) using machine-readable definition files, rather than manual configuration. Tools like Terraform, Ansible, or AWS CloudFormation are used. This allows infrastructure to be version-controlled, tested, and automated, just like application code. It enables the creation of consistent, repeatable environments and reduces the risk of human error.",
        explanation: "IaC brings the discipline and benefits of software development to infrastructure management."
    },
    {
        id: 538,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the 'strangler fig' pattern for modernizing legacy systems.",
        type: 'subjective',
        answer: "The strangler fig pattern is a strategy for incrementally migrating a legacy monolithic application to a microservices architecture. It works by placing a proxy or router in front of the monolith. New functionality is built as a separate microservice. The proxy then intercepts requests for that functionality and routes them to the new service instead of the monolith. Over time, more and more functionality is 'strangled' out of the monolith and replaced by new services, until the monolith becomes small enough to be retired completely.",
        explanation: "This is a gradual, lower-risk approach compared to a 'big bang' rewrite."
    },
    {
        id: 539,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'service mesh' and what problems does it solve?",
        type: 'subjective',
        answer: "A service mesh is a dedicated infrastructure layer for managing service-to-service communication in a microservices architecture. It uses a 'sidecar' proxy deployed alongside each service to handle tasks like service discovery, load balancing, security (mTLS), traffic management (retries, circuit breakers), and observability (metrics, traces). This abstracts away complex networking logic from the application code, making services simpler, more resilient, and more secure.",
        explanation: "Istio and Linkerd are popular service mesh implementations."
    },
    {
        id: 540,
        testId: 10,
        difficulty: 'expert',
        question: "Explain database 'isolation levels' and the problems they prevent.",
        type: 'subjective',
        answer: "Isolation levels control the degree to which transactions are isolated from each other. They prevent concurrency issues like: 1) **Dirty Reads:** Reading uncommitted data from another transaction. 2) **Non-Repeatable Reads:** Getting different values for the same row if you read it multiple times in one transaction. 3) **Phantom Reads:** Seeing new rows appear in a query that were inserted by another transaction. Levels like `READ COMMITTED`, `REPEATABLE READ`, and `SERIALIZABLE` offer progressively stronger guarantees at the cost of reduced concurrency.",
        explanation: "Choosing the right isolation level is a trade-off between performance and data consistency."
    },
    {
        id: 541,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'event sourcing' as an architectural pattern?",
        type: 'subjective',
        answer: "Event sourcing is a pattern where all changes to application state are stored as a sequence of immutable events. Instead of storing the current state of an entity, you store the log of events that led to that state. The current state can be rebuilt at any time by replaying the events. This provides a full audit log, makes it easier to debug issues, and allows for powerful temporal queries (e.g., 'what was the state of this user a week ago?').",
        explanation: "It is often used with the CQRS pattern to build complex, scalable systems."
    },
    {
        id: 542,
        testId: 10,
        difficulty: 'expert',
        question: "How do you handle secrets management in a modern application?",
        type: 'subjective',
        answer: "Secrets like API keys and database credentials should never be stored in source code. Modern best practices involve using a dedicated secrets management tool like HashiCorp Vault, AWS Secrets Manager, or Google Secret Manager. These tools provide centralized storage, fine-grained access control, auditing, and dynamic secret rotation. Applications retrieve secrets at runtime through a secure API call or via injected environment variables in a secure environment like Kubernetes.",
        explanation: "Proper secrets management is a critical aspect of application security."
    },
    {
        id: 543,
        testId: 10,
        difficulty: 'expert',
        question: "Explain 'Chaos Engineering'.",
        type: 'subjective',
        answer: "Chaos Engineering is the discipline of experimenting on a distributed system in production to build confidence in its ability to withstand turbulent conditions. It involves proactively and deliberately injecting failures (like terminating servers, adding network latency, or causing CPU spikes) in a controlled manner. The goal is to identify and fix systemic weaknesses before they can cause a user-facing outage.",
        explanation: "This practice, pioneered by Netflix, aims to find failures before they find you."
    },
    {
        id: 544,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'GraphQL' and how does it compare to 'REST'?",
        type: 'subjective',
        answer: "GraphQL is a query language for APIs. Unlike REST, which has multiple endpoints for different resources, GraphQL typically has a single endpoint. The client sends a query specifying exactly the data it needs, and the server responds with only that data. This solves the problems of over-fetching (getting too much data) and under-fetching (needing to make multiple requests) that can occur with REST. However, it can make server-side caching and rate-limiting more complex.",
        explanation: "GraphQL gives more power to the client, while REST is simpler and leverages HTTP standards more directly."
    },
    {
        id: 545,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'blue-green deployment'?",
        type: 'subjective',
        answer: "Blue-green deployment is a release strategy that reduces downtime and risk. It involves maintaining two identical production environments: 'blue' (the current live version) and 'green' (the new version). The new version is deployed and tested in the green environment. Once it's fully verified, the router is switched to direct all live traffic to the green environment. The blue environment is kept on standby for a quick rollback if needed. This allows for zero-downtime releases.",
        explanation: "The main trade-off is the cost of maintaining double the infrastructure."
    },
    {
        id: 546,
        testId: 10,
        difficulty: 'expert',
        question: "Explain 'optimistic' vs 'pessimistic' locking.",
        type: 'subjective',
        answer: "Pessimistic locking assumes conflicts are likely and prevents them by acquiring a lock on a resource before modification, blocking other transactions. Optimistic locking assumes conflicts are rare. It allows transactions to proceed without locks but checks for conflicts (e.g., using a version number or timestamp) before committing. If a conflict is detected, the transaction is typically rolled back and retried. Pessimistic locking prioritizes consistency, while optimistic locking prioritizes concurrency.",
        explanation: "Pessimistic locking is 'ask for permission'; optimistic locking is 'ask for forgiveness'."
    },
    {
        id: 547,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'TDD' (Test-Driven Development)?",
        type: 'subjective',
        answer: "TDD is a software development process that follows a short, repetitive cycle: 1) **Red:** Write a failing automated test case that defines a new function or improvement. 2) **Green:** Write the minimum amount of code necessary to make the test pass. 3) **Refactor:** Clean up the new code to improve its design and quality, ensuring all tests continue to pass. This process encourages simple design and ensures high test coverage from the start.",
        explanation: "The core mantra of TDD is 'Red, Green, Refactor'."
    },
    {
        id: 548,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS) and where is it used?",
        type: 'subjective',
        answer: "Mutual TLS is an authentication method where both parties in a connection, the client and the server, authenticate each other's identity using X.509 certificates. This is different from standard TLS where only the client authenticates the server. mTLS is commonly used to secure service-to-service communication within a trusted environment, like a microservices architecture managed by a service mesh, to ensure that only authorized services can communicate with each other.",
        explanation: "It provides strong, certificate-based, two-way authentication."
    },
    {
        id: 549,
        testId: 10,
        difficulty: 'expert',
        question: "How do 'WebSockets' differ from traditional 'HTTP' requests?",
        type: 'subjective',
        answer: "HTTP is a unidirectional, request-response protocol. The client sends a request, and the server sends a response. WebSockets provide a full-duplex, bidirectional communication channel over a single, long-lived TCP connection. After an initial handshake, either the client or the server can send data at any time. This makes WebSockets ideal for real-time applications like live chat, online gaming, and financial data streams, avoiding the overhead of repeated HTTP polling.",
        explanation: "HTTP is like sending letters, while WebSockets are like having a continuous phone call."
    },
    {
        id: 550,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between a 'container' (like Docker) and a 'virtual machine' (VM)?",
        type: 'subjective',
        answer: "A VM virtualizes the hardware, running a full guest operating system on top of a hypervisor. A container virtualizes the operating system, allowing multiple containers to run on a single host OS kernel. This makes containers much more lightweight, faster to start, and less resource-intensive than VMs. VMs provide stronger isolation, while containers offer better efficiency and portability.",
        explanation: "Containers are like apartments in a building (sharing plumbing), while VMs are like separate houses on a street (each with its own plumbing)."
    }
  ],
  'full-stack': [
    // Test 1: 5 Questions (3 MCQ, 2 Subjective) - Easy
    {
        id: 551,
        testId: 1,
        difficulty: 'easy',
        question: "What does 'Full-Stack' mean in web development?",
        type: 'mcq',
        options: [
            'A developer who only uses a specific stack of technologies',
            'A developer who works on both the frontend (client-side) and backend (server-side) of an application',
            'A developer who has mastered every programming language',
            'A developer who manages the server hardware'
        ],
        answer: 'A developer who works on both the frontend (client-side) and backend (server-side) of an application',
        explanation: 'A full-stack developer is comfortable working with all layers of an application, from the database to the user interface.'
    },
    {
        id: 552,
        testId: 1,
        difficulty: 'easy',
        question: "In a typical full-stack application, where is the user interface code executed?",
        type: 'mcq',
        options: [
            'In the database',
            'On the server',
            'In the client\'s web browser',
            'On a separate microservice'
        ],
        answer: 'In the client\'s web browser',
        explanation: 'Frontend code (HTML, CSS, JavaScript) is sent from the server to the client and executed in the browser to create the UI.'
    },
    {
        id: 553,
        testId: 1,
        difficulty: 'easy',
        question: "Which of the following is NOT typically part of a web application's backend?",
        type: 'mcq',
        options: [
            'Database',
            'Server-side logic',
            'User authentication',
            'CSS styles'
        ],
        answer: 'CSS styles',
        explanation: 'CSS is a styling language used for the frontend to define the look and feel of the application in the browser.'
    },
    {
        id: 554,
        testId: 1,
        difficulty: 'easy',
        question: "What is an API and why is it important in a full-stack application?",
        type: 'subjective',
        answer: "An API (Application Programming Interface) is a contract that allows the frontend and backend to communicate. The backend exposes endpoints (URLs) that the frontend can call to fetch, create, update, or delete data. This separation allows the frontend and backend to be developed and scaled independently.",
        explanation: 'The API is the glue that connects the client-side and server-side parts of an application.'
    },
    {
        id: 555,
        testId: 1,
        difficulty: 'easy',
        question: "Briefly describe the roles of HTML, CSS, and JavaScript in the frontend.",
        type: 'subjective',
        answer: "HTML (HyperText Markup Language) provides the fundamental structure and content of a web page. CSS (Cascading Style Sheets) is used to style that content, controlling its layout, colors, and fonts. JavaScript is used to make the page interactive, allowing it to respond to user actions and dynamically change content.",
        explanation: 'Think of HTML as the skeleton, CSS as the clothes, and JavaScript as the muscles and brain.'
    },
     // Test 2: 10 Questions (6 MCQ, 4 Subjective) - Easy
     {
        id: 556,
        testId: 2,
        difficulty: 'easy',
        question: "What is a 'stack' in the context of full-stack development?",
        type: 'mcq',
        options: [
            'A data structure',
            'The combination of technologies used to build an application (e.g., MERN, LAMP)',
            'A list of developer tasks',
            'A type of server'
        ],
        answer: 'The combination of technologies used to build an application (e.g., MERN, LAMP)',
        explanation: 'A stack typically includes the operating system, web server, database, and programming language.'
    },
    {
        id: 557,
        testId: 2,
        difficulty: 'easy',
        question: "Which HTTP method is idempotent and used to fully replace a resource?",
        type: 'mcq',
        options: [
            'POST',
            'GET',
            'PUT',
            'PATCH'
        ],
        answer: 'PUT',
        explanation: 'PUT requests are idempotent, meaning multiple identical requests have the same effect as one. They replace the entire target resource with the request payload.'
    },
    {
        id: 558,
        testId: 2,
        difficulty: 'easy',
        question: "What is Node.js?",
        type: 'mcq',
        options: [
            'A frontend framework',
            'A JavaScript runtime environment that lets you run JavaScript on the server',
            'A database',
            'A package manager'
        ],
        answer: 'A JavaScript runtime environment that lets you run JavaScript on the server',
        explanation: 'Node.js is a key technology for building backends with JavaScript, enabling full-stack development with a single language.'
    },
    {
        id: 559,
        testId: 2,
        difficulty: 'easy',
        question: "Which of these is a popular frontend framework/library?",
        type: 'mcq',
        options: [
            'Express.js',
            'React',
            'Django',
            'Laravel'
        ],
        answer: 'React',
        explanation: 'React is a JavaScript library for building user interfaces. Express, Django, and Laravel are all backend frameworks.'
    },
    {
        id: 560,
        testId: 2,
        difficulty: 'easy',
        question: "What is the purpose of `package.json` in a Node.js project?",
        type: 'mcq',
        options: [
            'To store user data',
            'To write HTML code',
            'To define project metadata and manage its dependencies',
            'To configure the server'
        ],
        answer: 'To define project metadata and manage its dependencies',
        explanation: 'It contains information like the project name, version, and lists of packages it needs to run.'
    },
    {
        id: 561,
        testId: 2,
        difficulty: 'easy',
        question: "In the MERN stack, what does the 'M' stand for?",
        type: 'mcq',
        options: [
            'MySQL',
            'MongoDB',
            'Microsoft',
            'Middleware'
        ],
        answer: 'MongoDB',
        explanation: 'MERN stands for MongoDB, Express.js, React, and Node.js.'
    },
    {
        id: 562,
        testId: 2,
        difficulty: 'easy',
        question: "What is the difference between the frontend and the backend?",
        type: 'subjective',
        answer: "The frontend is the part of the application that the user interacts with directly, typically running in the web browser. It's responsible for the user interface and user experience. The backend is the server-side of the application, responsible for business logic, database interactions, and authentication. It processes requests from the frontend and sends back data.",
        explanation: 'The frontend is the "presentation layer," while the backend is the "data access layer."'
    },
    {
        id: 563,
        testId: 2,
        difficulty: 'easy',
        question: "Why is it a bad practice to store sensitive information like API keys in frontend code?",
        type: 'subjective',
        answer: "Frontend code (HTML, CSS, JavaScript) is sent to and executed in the user's browser. This means anyone can view the source code and see any sensitive information embedded in it. API keys and other secrets should always be kept on the backend, which is a secure, controlled environment.",
        explanation: 'Frontend code is public; backend code is private.'
    },
    {
        id: 564,
        testId: 2,
        difficulty: 'easy',
        question: "What is a REST API?",
        type: 'subjective',
        answer: "A REST (Representational State Transfer) API is an architectural style for designing the communication between the frontend and backend. It uses standard HTTP methods (like GET, POST, PUT, DELETE), is stateless (each request is independent), and operates on resources identified by URLs (e.g., `/api/users/123`).",
        explanation: 'It is the most common architectural style for building web APIs.'
    },
    {
        id: 565,
        testId: 2,
        difficulty: 'easy',
        question: "What is a 'database' and what is its role in a full-stack application?",
        type: 'subjective',
        answer: "A database is an organized collection of data used to store and manage application information persistently. In a full-stack application, the backend server interacts with the database to store new user data, retrieve information for the frontend, update records, and delete data as needed. It's the long-term memory of the application.",
        explanation: 'Without a database, any data would be lost as soon as the server restarts.'
    },
    // Test 3: 15 Questions (9 MCQ, 6 Subjective)
    {
        id: 566,
        testId: 3,
        difficulty: 'medium',
        question: "What is CORS (Cross-Origin Resource Sharing) and why is it important?",
        type: 'mcq',
        options: [
            'A security feature that prevents frontend code from making requests to different domains than the one it was served from',
            'A technique for sharing resources between different backend services',
            'A caching mechanism in browsers',
            'A CSS styling methodology'
        ],
        answer: 'A security feature that prevents frontend code from making requests to different domains than the one it was served from',
        explanation: 'The backend server must explicitly allow requests from other origins by sending the correct CORS headers.'
    },
    {
        id: 567,
        testId: 3,
        difficulty: 'medium',
        question: "What is a JWT (JSON Web Token)?",
        type: 'mcq',
        options: [
            'A way to store JSON in a database',
            'A compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication',
            'A JavaScript object',
            'A type of cookie'
        ],
        answer: 'A compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication',
        explanation: 'JWTs allow the server to verify a user\'s identity without needing to store session information.'
    },
    {
        id: 568,
        testId: 3,
        difficulty: 'medium',
        question: "What is the primary purpose of an ORM (Object-Relational Mapper) like Mongoose or Sequelize?",
        type: 'mcq',
        options: [
            'To design the user interface',
            'To provide a way to interact with a database using object-oriented syntax instead of writing raw SQL or database queries',
            'To optimize frontend performance',
            'To manage server infrastructure'
        ],
        answer: 'To provide a way to interact with a database using object-oriented syntax instead of writing raw SQL or database queries',
        explanation: 'ORMs map database tables or collections to objects in your code, simplifying backend development.'
    },
    {
        id: 569,
        testId: 3,
        difficulty: 'medium',
        question: "What does it mean for an API to be 'stateless'?",
        type: 'mcq',
        options: [
            'The API has no functions',
            'The server does not store any information about the client session between requests',
            'The API cannot connect to a database',
            'The API does not return any data'
        ],
        answer: 'The server does not store any information about the client session between requests',
        explanation: 'In a stateless API, every request from a client must contain all the information needed by the server to fulfill it, often via a token like a JWT.'
    },
    {
        id: 570,
        testId: 3,
        difficulty: 'medium',
        question: "What is Server-Side Rendering (SSR)?",
        type: 'mcq',
        options: [
            'Rendering the entire application in the browser',
            'Rendering the initial HTML of a page on the server before sending it to the client',
            'A database rendering technique',
            'A way to style components on the server'
        ],
        answer: 'Rendering the initial HTML of a page on the server before sending it to the client',
        explanation: 'SSR can improve initial page load performance and is beneficial for SEO.'
    },
    {
        id: 571,
        testId: 3,
        difficulty: 'medium',
        question: "Which of these is a common way to handle password storage securely?",
        type: 'mcq',
        options: [
            'Store them in plain text',
            'Encrypt them with a reversible algorithm',
            'Hash and salt them using a strong, slow hashing algorithm like bcrypt',
            'Store them in frontend `localStorage`'
        ],
        answer: 'Hash and salt them using a strong, slow hashing algorithm like bcrypt',
        explanation: 'Hashing makes it computationally infeasible to reverse the password, and salting prevents rainbow table attacks.'
    },
    {
        id: 572,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of the `useEffect` hook in React?",
        type: 'mcq',
        options: [
            'To declare a state variable',
            'To perform side effects in a functional component, such as fetching data from an API',
            'To create a new component',
            'To handle conditional rendering'
        ],
        answer: 'To perform side effects in a functional component, such as fetching data from an API',
        explanation: 'Side effects are operations that interact with the outside world, beyond just rendering UI.'
    },
    {
        id: 573,
        testId: 3,
        difficulty: 'medium',
        question: "What is a 'middleware' in a backend framework like Express.js?",
        type: 'mcq',
        options: [
            'A frontend component',
            'A function that has access to the request and response objects, and can execute code, make changes, or pass control to the next middleware',
            'A database table',
            'A configuration file'
        ],
        answer: 'A function that has access to the request and response objects, and can execute code, make changes, or pass control to the next middleware',
        explanation: 'Middleware is used for tasks like logging, authentication, and parsing request bodies.'
    },
    {
        id: 574,
        testId: 3,
        difficulty: 'medium',
        question: "What is the `NODE_ENV` environment variable typically used for?",
        type: 'mcq',
        options: [
            'To set the version of Node.js',
            'To specify the user\'s location',
            'To determine whether the application is running in a `development` or `production` environment',
            'To configure the database host'
        ],
        answer: 'To determine whether the application is running in a `development` or `production` environment',
        explanation: 'Frameworks and libraries often use this variable to enable or disable optimizations and debugging features.'
    },
    {
        id: 575,
        testId: 3,
        difficulty: 'medium',
        question: "Describe the request-response cycle in a typical full-stack web application.",
        type: 'subjective',
        answer: "1. A user interacts with the frontend in their browser, triggering an HTTP request (e.g., clicking a button). 2. The browser sends the request to the backend server. 3. The backend server's router directs the request to the appropriate controller/handler. 4. The handler processes the request, performs business logic, and may interact with a database. 5. The server sends back an HTTP response, usually containing data in JSON format. 6. The frontend receives the response and updates the UI accordingly.",
        explanation: "This cycle is the fundamental interaction between the client and server."
    },
    {
        id: 576,
        testId: 3,
        difficulty: 'medium',
        question: "What is the difference between SQL and NoSQL databases?",
        type: 'subjective',
        answer: "SQL databases (like MySQL, PostgreSQL) are relational databases that use a structured schema with tables, rows, and columns. They enforce data integrity and use SQL for queries. NoSQL databases (like MongoDB, Redis) are non-relational and have dynamic schemas. They come in various types (document, key-value, graph) and are often more flexible and horizontally scalable.",
        explanation: "SQL databases prioritize consistency, while NoSQL databases often prioritize availability and flexibility."
    },
    {
        id: 577,
        testId: 3,
        difficulty: 'medium',
        question: "What is the 'Virtual DOM' and why is it useful?",
        type: 'subjective',
        answer: "The Virtual DOM is an in-memory representation of the real DOM used by frontend libraries like React. When state changes, a new Virtual DOM tree is created. This new tree is 'diffed' against the previous one, and React calculates the most efficient way to update the real DOM. This avoids slow, direct manipulation of the real DOM, leading to better performance.",
        explanation: "It's an abstraction that makes UI updates much more efficient."
    },
    {
        id: 578,
        testId: 3,
        difficulty: 'medium',
        question: "Explain what 'prop drilling' is in React and how you might solve it.",
        type: 'subjective',
        answer: "Prop drilling is the process of passing props down through multiple layers of nested components that do not need the props themselves, just to get them to a deeply nested child component. It can be solved using the React Context API, which allows you to 'provide' a value at a high level and consume it at any level below without passing it through intermediate components. For more complex state, a state management library like Redux or Zustand can also be used.",
        explanation: "Solving prop drilling makes components more reusable and easier to maintain."
    },
    {
        id: 579,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of a `Dockerfile`?",
        type: 'subjective',
        answer: "A Dockerfile is a text file that contains instructions for building a Docker image. It specifies a base image, copies application code, installs dependencies, and defines the command to run when a container is started from the image. It allows you to package an application and its entire environment into a single, portable unit.",
        explanation: "Dockerfiles are the blueprint for creating reproducible and isolated application environments."
    },
    {
        id: 580,
        testId: 3,
        difficulty: 'medium',
        question: "What are environment variables and why should you use them for configuration?",
        type: 'subjective',
        answer: "Environment variables are variables whose values are set outside the application code, in the environment where the process is running. They should be used for configuration (like API keys, database URLs, port numbers) to keep secrets out of source code and to allow the same application build to run in different environments (development, production) with different configurations without changing the code.",
        explanation: "This is a core principle of the Twelve-Factor App methodology."
    },
     // Test 4: 20 Questions (12 MCQ, 8 Subjective)
     {
        id: 581,
        testId: 4,
        difficulty: 'medium',
        question: "What is a primary key in a SQL database?",
        type: 'mcq',
        options: [
            'A key used for encryption',
            'A constraint that uniquely identifies each record in a table',
            'A key that links two tables together',
            'The first column in a table'
        ],
        answer: 'A constraint that uniquely identifies each record in a table',
        explanation: 'Primary keys must contain unique values and cannot contain NULL values.'
    },
    {
        id: 582,
        testId: 4,
        difficulty: 'medium',
        question: "In CSS Flexbox, what does `align-items: center` do?",
        type: 'mcq',
        options: [
            'Centers the items horizontally along the main axis',
            'Centers the items vertically along the cross axis',
            'Stretches the items to fill the container',
            'Adds space between the items'
        ],
        answer: 'Centers the items vertically along the cross axis',
        explanation: '`align-items` controls the alignment of items on the cross axis, which is the vertical axis by default.'
    },
    {
        id: 583,
        testId: 4,
        difficulty: 'medium',
        question: "Which of the following is a NoSQL database?",
        type: 'mcq',
        options: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
        answer: 'Redis',
        explanation: 'Redis is a popular in-memory key-value store, which is a type of NoSQL database.'
    },
    {
        id: 584,
        testId: 4,
        difficulty: 'medium',
        question: "What does a 401 Unauthorized HTTP status code mean?",
        type: 'mcq',
        options: [
            'The resource was not found',
            'The server encountered an error',
            'The client must authenticate itself to get the requested response',
            'The client does not have access rights to the content'
        ],
        answer: 'The client must authenticate itself to get the requested response',
        explanation: 'It indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.'
    },
    {
        id: 585,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'package manager' like npm or Yarn?",
        type: 'mcq',
        options: [
            'A tool for managing server packages',
            'A tool that automates the process of installing, upgrading, configuring, and removing software packages and dependencies for a project',
            'A database management tool',
            'A file compression utility'
        ],
        answer: 'A tool that automates the process of installing, upgrading, configuring, and removing software packages and dependencies for a project',
        explanation: 'Package managers are essential for managing the libraries and tools used in modern web development.'
    },
    {
        id: 586,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of a CSS preprocessor like Sass or Less?",
        type: 'mcq',
        options: [
            'To make CSS run faster in the browser',
            'To add features that do not exist in plain CSS, like variables, nesting, and mixins',
            'To automatically style a webpage',
            'To bundle CSS files together'
        ],
        answer: 'To add features that do not exist in plain CSS, like variables, nesting, and mixins',
        explanation: 'Preprocessors help write more maintainable and organized CSS that gets compiled into standard CSS for the browser.'
    },
    {
        id: 587,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'foreign key' in a SQL database?",
        type: 'mcq',
        options: [
            'A unique identifier for a row',
            'A key used to link two tables together',
            'An index on a table',
            'A key for another country\'s database'
        ],
        answer: 'A key used to link two tables together',
        explanation: 'A foreign key is a field in one table that refers to the primary key in another table, creating a relationship between them.'
    },
    {
        id: 588,
        testId: 4,
        difficulty: 'medium',
        question: "What is 'lifting state up' in React?",
        type: 'mcq',
        options: [
            'Storing state in a global variable',
            'Moving state to a higher-level parent component to share it among its children',
            'Using a state management library',
            'A performance optimization'
        ],
        answer: 'Moving state to a higher-level parent component to share it among its children',
        explanation: 'This is the standard React way to handle state that needs to be accessed by multiple sibling components.'
    },
    {
        id: 589,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'connection pool' in backend development?",
        type: 'mcq',
        options: [
            'A list of active users',
            'A cache of database connections that are kept alive and can be reused by the application',
            'A network of servers',
            'A security group'
        ],
        answer: 'A cache of database connections that are kept alive and can be reused by the application',
        explanation: 'Connection pooling avoids the performance overhead of establishing a new database connection for every request.'
    },
    {
        id: 590,
        testId: 4,
        difficulty: 'medium',
        question: "Which of the following is NOT a valid HTTP verb?",
        type: 'mcq',
        options: ['GET', 'POST', 'FETCH', 'DELETE'],
        answer: 'FETCH',
        explanation: 'FETCH is the name of a browser API for making HTTP requests, but it is not an HTTP method itself. Standard methods include GET, POST, PUT, DELETE, PATCH, etc.'
    },
    {
        id: 591,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'closure' in JavaScript?",
        type: 'mcq',
        options: [
            'The end of a function',
            'A security vulnerability',
            'A function that has access to its outer function\'s scope even after the outer function has returned',
            'A way to close a browser window'
        ],
        answer: 'A function that has access to its outer function\'s scope even after the outer function has returned',
        explanation: 'Closures are a fundamental concept in JavaScript, enabling patterns like data privacy and function factories.'
    },
    {
        id: 592,
        testId: 4,
        difficulty: 'medium',
        question: "What is 'responsive design'?",
        type: 'mcq',
        options: [
            'Designing websites that respond quickly',
            'Designing websites that work on all backend servers',
            'Designing websites that provide an optimal viewing experience across a wide range of devices, from mobile phones to desktop computers',
            'Designing websites with a lot of animations'
        ],
        answer: 'Designing websites that provide an optimal viewing experience across a wide range of devices, from mobile phones to desktop computers',
        explanation: 'This is typically achieved using media queries, flexible grids, and fluid images.'
    },
    {
        id: 593,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of a load balancer?",
        type: 'subjective',
        answer: "A load balancer is a device or service that distributes network or application traffic across multiple servers. Its purpose is to improve application availability and scalability by ensuring that no single server becomes a bottleneck. If one server fails, the load balancer can redirect traffic to the remaining healthy servers.",
        explanation: "Load balancers are essential for building highly available and scalable applications."
    },
    {
        id: 594,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between client-side rendering (CSR) and server-side rendering (SSR)?",
        type: 'subjective',
        answer: "In CSR (common in standard React apps), the browser downloads a minimal HTML file and a large JavaScript bundle. The JavaScript then runs to render the page and fetch data. In SSR (common in Next.js), the server renders the initial HTML for the page and sends it to the browser, which can display it immediately. CSR can have a slower initial load, while SSR is better for performance and SEO.",
        explanation: "Modern frameworks often use a hybrid approach called hydration."
    },
    {
        id: 595,
        testId: 4,
        difficulty: 'medium',
        question: "How do you handle asynchronous operations in JavaScript?",
        type: 'subjective',
        answer: "There are three main ways: 1) Callbacks, where you pass a function to be executed when the operation completes. This can lead to 'callback hell'. 2) Promises, which represent a future value and can be chained with `.then()` for success and `.catch()` for errors. 3) `async/await` syntax, which is syntactic sugar over Promises and allows you to write asynchronous code that looks and behaves more like synchronous code.",
        explanation: "`async/await` is the most modern and readable approach."
    },
    {
        id: 596,
        testId: 4,
        difficulty: 'medium',
        question: "What is 'containerization' and why is it useful?",
        type: 'subjective',
        answer: "Containerization (e.g., using Docker) is the process of packaging an application and all its dependencies into a standardized unit called a container. This is useful because it ensures the application runs the same way regardless of the environment it's deployed in, solving the 'it works on my machine' problem. Containers are lightweight and portable.",
        explanation: "Containers have become a standard for deploying modern applications."
    },
    {
        id: 597,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
        type: 'subjective',
        answer: "`var` is function-scoped and hoisted. `let` and `const` are block-scoped (they only exist within the block they are declared in) and are also hoisted but not initialized, creating a 'temporal dead zone'. `const` is like `let` but the variable cannot be reassigned after its initial declaration.",
        explanation: "In modern JavaScript, you should almost always prefer `const` and `let` over `var`."
    },
    {
        id: 598,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'database migration'?",
        type: 'subjective',
        answer: "A database migration is a way to manage incremental and reversible changes to a database schema. Each migration file contains code to apply a change (e.g., add a table or column) and code to revert that change. This allows the database schema to be version-controlled along with the application code, making it easy to update and rollback database structures in a controlled way.",
        explanation: "Migration tools are a standard part of most backend frameworks."
    },
    {
        id: 599,
        testId: 4,
        difficulty: 'medium',
        question: "What is the role of a 'reverse proxy' like Nginx or Apache?",
        type: 'subjective',
        answer: "A reverse proxy is a server that sits in front of one or more web servers, intercepting requests from clients. It can handle tasks like load balancing traffic across multiple application servers, serving static content, terminating SSL/TLS encryption, and caching responses. This protects and offloads work from the application servers.",
        explanation: "Reverse proxies are a crucial component of modern web architecture."
    },
    {
        id: 600,
        testId: 4,
        difficulty: 'medium',
        question: "What are the benefits of using a framework like React on the frontend and Express on the backend?",
        type: 'subjective',
        answer: "Frameworks provide structure and reusable components that speed up development. React offers a declarative, component-based way to build complex UIs and manage state efficiently with its Virtual DOM. Express provides a minimal and flexible set of features for building a robust backend, including routing, middleware, and request/response handling, simplifying the process of creating an API.",
        explanation: "Using frameworks prevents you from having to reinvent the wheel for common web development tasks."
    },
     // Test 5: 25 Questions (15 MCQ, 10 Subjective)
     {
        id: 601,
        testId: 5,
        difficulty: 'medium',
        question: "What is Webpack?",
        type: 'mcq',
        options: [
            'A JavaScript framework',
            'A static module bundler for modern JavaScript applications',
            'A code editor',
            'A testing library'
        ],
        answer: 'A static module bundler for modern JavaScript applications',
        explanation: 'Webpack takes modules with dependencies and generates static assets, enabling features like code splitting and loaders.'
    },
    {
        id: 602,
        testId: 5,
        difficulty: 'medium',
        question: "What is a major benefit of using TypeScript over plain JavaScript?",
        type: 'mcq',
        options: [
            'It runs faster in the browser',
            'It adds static typing, which can catch errors during development before the code is run',
            'It requires less code to write',
            'It has more built-in functions'
        ],
        answer: 'It adds static typing, which can catch errors during development before the code is run',
        explanation: 'Static types improve code quality, maintainability, and developer tooling (like autocompletion).'
    },
    {
        id: 603,
        testId: 5,
        difficulty: 'medium',
        question: "What is a CI/CD pipeline?",
        type: 'mcq',
        options: [
            'A physical pipeline for data transfer',
            'A database management process',
            'An automated workflow for building, testing, and deploying code changes',
            'A user interface design pattern'
        ],
        answer: 'An automated workflow for building, testing, and deploying code changes',
        explanation: 'CI/CD is a core practice of DevOps that enables faster and more reliable software delivery.'
    },
    {
        id: 604,
        testId: 5,
        difficulty: 'medium',
        question: "In a relational database, what is a 'JOIN' clause used for?",
        type: 'mcq',
        options: [
            'To delete data from multiple tables',
            'To combine rows from two or more tables based on a related column between them',
            'To create a new table',
            'To filter results in a single table'
        ],
        answer: 'To combine rows from two or more tables based on a related column between them',
        explanation: 'JOINs are fundamental to querying data across related tables in a relational database.'
    },
    {
        id: 605,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of the `useCallback` hook in React?",
        type: 'mcq',
        options: [
            'To fetch data',
            'To return a memoized version of a callback function to prevent unnecessary re-renders of child components',
            'To create a new callback function on every render',
            'To manage component lifecycle'
        ],
        answer: 'To return a memoized version of a callback function to prevent unnecessary re-renders of child components',
        explanation: 'It\'s an optimization that is useful when passing callbacks to components that are wrapped in `React.memo`.'
    },
    {
        id: 606,
        testId: 5,
        difficulty: 'medium',
        question: "What is the primary role of a 'message queue' like RabbitMQ or Kafka?",
        type: 'mcq',
        options: [
            'To store user session data',
            'To act as a real-time chat server',
            'To serve as a buffer and distribution system for asynchronous communication between different parts of an application (e.g., microservices)',
            'To cache database queries'
        ],
        answer: 'To serve as a buffer and distribution system for asynchronous communication between different parts of an application (e.g., microservices)',
        explanation: 'Message queues help to decouple services and improve the reliability and scalability of a distributed system.'
    },
    {
        id: 607,
        testId: 5,
        difficulty: 'medium',
        question: "Which of the following is a CSS architecture methodology?",
        type: 'mcq',
        options: ['REST', 'CRUD', 'BEM', 'JSON'],
        answer: 'BEM',
        explanation: 'BEM (Block, Element, Modifier) is a popular naming convention for CSS classes that helps create scalable and maintainable stylesheets.'
    },
    {
        id: 608,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'linter' (like ESLint)?",
        type: 'mcq',
        options: [
            'A tool that compiles code',
            'A static code analysis tool used to identify problematic patterns, bugs, and stylistic errors in code',
            'A testing framework',
            'A deployment script'
        ],
        answer: 'A static code analysis tool used to identify problematic patterns, bugs, and stylistic errors in code',
        explanation: 'Linters are essential for maintaining code quality and consistency, especially in team environments.'
    },
    {
        id: 609,
        testId: 5,
        difficulty: 'medium',
        question: "What does the 500 Internal Server Error status code indicate?",
        type: 'mcq',
        options: [
            'The request was successful',
            'The requested resource was not found',
            'The server encountered an unexpected condition that prevented it from fulfilling the request',
            'The client is not authorized to make the request'
        ],
        answer: 'The server encountered an unexpected condition that prevented it from fulfilling the request',
        explanation: 'This is a generic 'catch-all' error on the server side, indicating a problem with the backend code.'
    },
    {
        id: 610,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of `async/await` in JavaScript?",
        type: 'mcq',
        options: [
            'To make code run faster',
            'To provide a more synchronous-looking syntax for working with Promises, making asynchronous code easier to read and write',
            'To declare a variable that will be assigned later',
            'To run code on a separate thread'
        ],
        answer: 'To provide a more synchronous-looking syntax for working with Promises, making asynchronous code easier to read and write',
        explanation: 'It is syntactic sugar over Promises that helps avoid "callback hell" or long `.then()` chains.'
    },
    {
        id: 611,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'Web Worker'?",
        type: 'mcq',
        options: [
            'A UI component in React',
            'A JavaScript script that runs in the background, independently of other scripts, without affecting the performance of the page',
            'A CSS animation',
            'A type of server'
        ],
        answer: 'A JavaScript script that runs in the background, independently of other scripts, without affecting the performance of the page',
        explanation: 'Web Workers are useful for running CPU-intensive tasks without freezing the user interface.'
    },
    {
        id: 612,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between `localStorage` and `sessionStorage`?",
        type: 'mcq',
        options: [
            'localStorage is faster',
            'sessionStorage can store more data',
            'localStorage data persists even when the browser is closed and reopened, while sessionStorage data is cleared when the page session ends',
            'They are the same'
        ],
        answer: 'localStorage data persists even when the browser is closed and reopened, while sessionStorage data is cleared when the page session ends',
        explanation: '`localStorage` is for long-term storage, while `sessionStorage` is for temporary, session-specific data.'
    },
    {
        id: 613,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'normalization' in the context of SQL databases?",
        type: 'mcq',
        options: [
            'Making the database run normally',
            'A process of organizing tables and columns to minimize data redundancy and improve data integrity',
            'A backup process',
            'A performance tuning technique'
        ],
        answer: 'A process of organizing tables and columns to minimize data redundancy and improve data integrity',
        explanation: 'Normalization involves dividing larger tables into smaller, well-structured tables and defining relationships between them.'
    },
    {
        id: 614,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'semantic HTML'?",
        type: 'mcq',
        options: [
            'HTML that uses a lot of `<div>` tags',
            'A specific version of HTML',
            'The use of HTML tags that convey meaning about the content they contain, such as `<header>`, `<article>`, and `<footer>`',
            'HTML that is written in a specific language'
        ],
        answer: 'The use of HTML tags that convey meaning about the content they contain, such as `<header>`, `<article>`, and `<footer>`',
        explanation: 'Semantic HTML improves accessibility and SEO.'
    },
    {
        id: 615,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'dependency injection'?",
        type: 'mcq',
        options: [
            'A security vulnerability',
            'A design pattern where dependencies are provided to a component from an external source rather than it creating them itself',
            'A way to manage project dependencies in `package.json`',
            'A database feature'
        ],
        answer: 'A design pattern where dependencies are provided to a component from an external source rather than it creating them itself',
        explanation: 'This promotes loose coupling and makes code more modular, testable, and maintainable.'
    },
    {
        id: 616,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'salting' in the context of password security, and why is it important?",
        type: 'subjective',
        answer: "Salting is the process of adding a unique, randomly generated string of characters (the salt) to a user's password before it is hashed. This salt is then stored along with the hash. It's important because it ensures that even if two users have the same password, their stored hashes will be different, which defeats pre-computed hash attacks like rainbow tables.",
        explanation: "It's a crucial step for secure password storage."
    },
    {
        id: 617,
        testId: 5,
        difficulty: 'medium',
        question: "What is the 'N+1' query problem and how can you solve it?",
        type: 'subjective',
        answer: "The N+1 problem occurs when an application makes one query to retrieve a list of items and then makes 'N' subsequent queries to fetch related data for each of those items. This is very inefficient. It can be solved by using 'eager loading,' where the ORM or data access layer is instructed to fetch the related data in a single, more complex query (e.g., using a JOIN).",
        explanation: "This is a common performance bottleneck in applications that use an ORM."
    },
    {
        id: 618,
        testId: 5,
        difficulty: 'medium',
        question: "Explain the difference between a monolith and a microservices architecture.",
        type: 'subjective',
        answer: "A monolith is an application built as a single, unified unit. All components (UI, business logic, data access) are tightly coupled and deployed together. A microservices architecture structures an application as a collection of small, independent services, each responsible for a specific business capability. They communicate over a network, are deployed independently, and can be written in different languages.",
        explanation: "Monoliths are simpler to start with, while microservices offer better scalability and flexibility for large, complex applications."
    },
    {
        id: 619,
        testId: 5,
        difficulty: 'medium',
        question: "What is caching and what are some common caching strategies?",
        type: 'subjective',
        answer: "Caching is the practice of storing copies of frequently accessed data in a temporary, fast-access location (a cache) to reduce the need to fetch it from a slower source. Common strategies include: Cache-Aside (the application is responsible for reading from and writing to the cache), Read-Through (the cache itself fetches data from the database on a cache miss), and Write-Through (data is written to both the cache and the database simultaneously).",
        explanation: "Caching is a fundamental technique for improving application performance."
    },
    {
        id: 620,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of 'code splitting' in a frontend application?",
        type: 'subjective',
        answer: "Code splitting is a technique used by bundlers like Webpack to split a large JavaScript bundle into smaller chunks that can be loaded on demand. Instead of forcing the user to download the entire application's JavaScript at once, code splitting allows you to load code only for the route or component the user is currently viewing. This significantly improves the initial page load time.",
        explanation: "This is a critical performance optimization for modern single-page applications."
    },
    {
        id: 621,
        testId: 5,
        difficulty: 'medium',
        question: "What are some key principles of RESTful API design?",
        type: 'subjective',
        answer: "Key principles include: 1) Client-Server architecture. 2) Statelessness (each request is independent). 3) Cacheability. 4) A layered system. 5) A uniform interface, which includes using standard HTTP methods (GET, POST, PUT, DELETE), resource-based URLs (e.g., `/users/123`), and using JSON for data representation.",
        explanation: "Adhering to these principles helps create scalable and maintainable APIs."
    },
    {
        id: 622,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of an 'index' in a database?",
        type: 'subjective',
        answer: "A database index is a data structure that improves the speed of data retrieval operations on a database table. It works like an index in a book: instead of searching through every row in a table to find a specific value (a full table scan), the database can use the index to quickly look up the location of the desired rows. This comes at the cost of slower write operations and additional storage space.",
        explanation: "Proper indexing is the most important factor in database query performance."
    },
    {
        id: 623,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'debouncing' and what is a common use case for it?",
        type: 'subjective',
        answer: "Debouncing is a programming practice used to ensure that a function is not called too frequently. It forces a function to wait a certain amount of time without being called again before it is executed. A common use case is in a search bar: you wait until the user has stopped typing for a brief period (e.g., 300ms) before sending an API request, preventing a request from being sent for every single keystroke.",
        explanation: "It's a useful technique for optimizing performance related to user input."
    },
    {
        id: 624,
        testId: 5,
        difficulty: 'medium',
        question: "Explain what happens in a `git merge` operation.",
        type: 'subjective',
        answer: "A `git merge` operation takes the independent lines of development created by `git branch` and integrates them into a single branch. When you merge one branch into another, Git finds the common base commit between them and creates a new 'merge commit' that combines the changes from both branches. This new commit has two parent commits.",
        explanation: "It's a fundamental operation for combining work from different feature branches."
    },
    {
        id: 625,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between authentication and authorization?",
        type: 'subjective',
        answer: "Authentication is the process of verifying who a user is (e.g., by checking a username and password or a JWT). Authorization is the process of determining what an authenticated user is allowed to do (e.g., whether they have permission to access a specific resource or perform a certain action). Authentication always comes before authorization.",
        explanation: "Authentication is about identity, while authorization is about permissions."
    },
    // Test 6: 30 Questions (18 MCQ, 12 Subjective)
    {
        id: 626,
        testId: 6,
        difficulty: 'hard',
        question: "What is the 'event loop' in Node.js?",
        type: 'mcq',
        options: [
            "A loop that iterates over UI events",
            "A mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded",
            "A security feature",
            "A part of the V8 JavaScript engine for compiling code"
        ],
        answer: "A mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded",
        explanation: "The event loop offloads operations to the system kernel and processes their callbacks in a queue when they complete."
    },
    {
        id: 627,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'service worker'?",
        type: 'mcq',
        options: [
            "A backend microservice",
            "A script that your browser runs in the background, separate from a web page, enabling features like offline caching and push notifications",
            "A type of React component",
            "A CI/CD job"
        ],
        answer: "A script that your browser runs in the background, separate from a web page, enabling features like offline caching and push notifications",
        explanation: "Service workers are the foundation of Progressive Web Apps (PWAs)."
    },
    {
        id: 628,
        testId: 6,
        difficulty: 'hard',
        question: "What is GraphQL?",
        type: 'mcq',
        options: [
            "A graph database",
            "A query language for your API that allows clients to ask for exactly what they need",
            "A data visualization library",
            "A frontend state management library"
        ],
        answer: "A query language for your API that allows clients to ask for exactly what they need",
        explanation: "GraphQL solves the problems of over-fetching and under-fetching common in REST APIs."
    },
    {
        id: 629,
        testId: 6,
        difficulty: 'hard',
        question: "What does it mean for an HTTP method to be 'idempotent'?",
        type: 'mcq',
        options: [
            "The method is very fast",
            "The method can only be called once",
            "Making the same request multiple times has the same effect as making it once",
            "The method is secure"
        ],
        answer: "Making the same request multiple times has the same effect as making it once",
        explanation: "GET, PUT, and DELETE are idempotent methods, which is important for building reliable, fault-tolerant systems."
    },
    {
        id: 630,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'container orchestration' tool like Kubernetes used for?",
        type: 'mcq',
        options: [
            "To build container images",
            "To automate the deployment, scaling, and management of containerized applications",
            "To write application code",
            "To monitor network traffic"
        ],
        answer: "To automate the deployment, scaling, and management of containerized applications",
        explanation: "Kubernetes manages the complexity of running distributed applications across a cluster of machines."
    },
    {
        id: 631,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of the `useReducer` hook in React?",
        type: 'mcq',
        options: [
            "It's an alternative to `useState` for managing complex state logic, often involving multiple sub-values or when the next state depends on the previous one",
            "To reduce the bundle size of a component",
            "To handle routing",
            "To perform side effects"
        ],
        answer: "It's an alternative to `useState` for managing complex state logic, often involving multiple sub-values or when the next state depends on the previous one",
        explanation: "It is patterned after the reducers in Redux and promotes a more predictable state management flow."
    },
    {
        id: 632,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'reverse proxy'?",
        type: 'mcq',
        options: [
            "A proxy for client-side requests",
            "A server that sits in front of one or more web servers, forwarding client requests to the appropriate server",
            "A database connection proxy",
            "A type of firewall"
        ],
        answer: "A server that sits in front of one or more web servers, forwarding client requests to the appropriate server",
        explanation: "Reverse proxies are used for load balancing, SSL termination, caching, and security."
    },
    {
        id: 633,
        testId: 6,
        difficulty: 'hard',
        question: "What is `tree shaking`?",
        type: 'mcq',
        options: [
            "A debugging technique",
            "A process used by modern JavaScript bundlers to eliminate unused (dead) code from the final bundle",
            "A UI animation effect",
            "A database optimization"
        ],
        answer: "A process used by modern JavaScript bundlers to eliminate unused (dead) code from the final bundle",
        explanation: "Tree shaking relies on static `import` and `export` statements to determine which code is not being used."
    },
    {
        id: 634,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between `let` and `const` in JavaScript?",
        type: 'mcq',
        options: [
            "There is no difference",
            "`let` allows a variable to be reassigned, while `const` declares a variable that cannot be reassigned",
            "`const` is function-scoped, while `let` is block-scoped",
            "`let` is for numbers, `const` is for strings"
        ],
        answer: "`let` allows a variable to be reassigned, while `const` declares a variable that cannot be reassigned",
        explanation: "Both are block-scoped. You should prefer `const` by default and only use `let` when you know a variable needs to be reassigned."
    },
    {
        id: 635,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'database transaction'?",
        type: 'mcq',
        options: [
            "A single SQL query",
            "A sequence of operations performed as a single logical unit of work, where either all operations succeed or none do",
            "A backup of a database",
            "A user's session with a database"
        ],
        answer: "A sequence of operations performed as a single logical unit of work, where either all operations succeed or none do",
        explanation: "This is known as atomicity, a key property of ACID-compliant databases."
    },
    {
        id: 636,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of HTTP headers?",
        type: 'mcq',
        options: [
            "They contain the main content of a request or response",
            "They are used for styling the page",
            "They provide metadata about the HTTP request or response, such as content type, caching policies, and authentication tokens",
            "They are only used for security"
        ],
        answer: "They provide metadata about the HTTP request or response, such as content type, caching policies, and authentication tokens",
        explanation: "Headers are a critical part of the HTTP protocol, controlling how requests and responses are handled."
    },
    {
        id: 637,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'hydration' in the context of a framework like Next.js?",
        type: 'mcq',
        options: [
            "The process of drinking water",
            "The process where client-side JavaScript attaches event listeners to the static HTML that was rendered on the server, making it interactive",
            "A server-side caching technique",
            "A database connection process"
        ],
        answer: "The process where client-side JavaScript attaches event listeners to the static HTML that was rendered on the server, making it interactive",
        explanation: "Hydration 'brings to life' the server-rendered HTML, turning it into a full single-page application."
    },
    {
        id: 638,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between a `<div>` and a `<span>`?",
        type: 'mcq',
        options: [
            "There is no difference",
            "`<div>` is a block-level element, while `<span>` is an inline element",
            "`<span>` is for images, `<div>` is for text",
            "`<div>` has more styling options"
        ],
        answer: "`<div>` is a block-level element, while `<span>` is an inline element",
        explanation: "A block-level element starts on a new line and takes up the full width available, while an inline element does not and only takes up as much width as necessary."
    },
    {
        id: 639,
        testId: 6,
        difficulty: 'hard',
        question: "What does a 403 Forbidden HTTP status code signify?",
        type: 'mcq',
        options: [
            'The resource does not exist',
            'The server understands the request but refuses to authorize it',
            'The client must authenticate to get the response',
            'The server has an internal error'
        ],
        answer: 'The server understands the request but refuses to authorize it',
        explanation: 'This is different from a 401 Unauthorized, as it implies that the server knows the client\'s identity but is denying access anyway.'
    },
    {
        id: 640,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'higher-order component' (HOC) in React?",
        type: 'mcq',
        options: [
            'A component that uses a lot of memory',
            'A function that takes a component and returns a new, enhanced component',
            'The top-level component in an application',
            'A component that renders `<h1>` tags'
        ],
        answer: 'A function that takes a component and returns a new, enhanced component',
        explanation: 'HOCs are a pattern for reusing component logic, such as connecting a component to a Redux store.'
    },
    {
        id: 641,
        testId: 6,
        difficulty: 'hard',
        question: "What is the main benefit of using a CDN (Content Delivery Network)?",
        type: 'mcq',
        options: [
            'It makes your backend code more secure',
            'It provides a database for your application',
            'It improves website performance by caching static assets in geographically distributed servers, closer to users',
            'It helps with team collaboration'
        ],
        answer: 'It improves website performance by caching static assets in geographically distributed servers, closer to users',
        explanation: 'Using a CDN significantly reduces latency for users around the world.'
    },
    {
        id: 642,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'promise' in JavaScript?",
        type: 'mcq',
        options: [
            'A guarantee that a function will not have bugs',
            'A special type of variable',
            'An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value',
            'A callback function'
        ],
        answer: 'An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value',
        explanation: 'Promises are a core part of modern asynchronous JavaScript, allowing you to handle async operations in a more readable way than callbacks.'
    },
    {
        id: 643,
        testId: 6,
        difficulty: 'hard',
        question: "What is the role of `webpack-dev-server`?",
        type: 'mcq',
        options: [
            'To deploy an application to production',
            'To provide a live-reloading development server that uses webpack for bundling assets in memory',
            'To manage server infrastructure',
            'To run tests'
        ],
        answer: 'To provide a live-reloading development server that uses webpack for bundling assets in memory',
        explanation: 'It provides a fast and efficient development experience with features like Hot Module Replacement (HMR).'
    },
    {
        id: 644,
        testId: 6,
        difficulty: 'hard',
        question: "What is Cross-Site Scripting (XSS) and how can it be prevented?",
        type: 'subjective',
        answer: "XSS is a security vulnerability where an attacker injects malicious scripts into a web page viewed by other users. This can be used to steal session cookies or perform actions on behalf of the user. It can be prevented by: 1) Properly validating and sanitizing all user input on the server side. 2) Encoding output to escape HTML special characters (frameworks like React do this by default). 3) Using a Content Security Policy (CSP) header.",
        explanation: "Never trust user input and always encode output."
    },
    {
        id: 645,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between a 'process' and a 'thread'?",
        type: 'subjective',
        answer: "A process is an instance of a program with its own isolated memory space. A thread is a unit of execution within a process. A process can have multiple threads, which all share the same memory space. This shared memory makes inter-thread communication fast, but also requires synchronization mechanisms (like mutexes) to prevent race conditions. Processes are more heavyweight and isolated.",
        explanation: "This is a fundamental concept in operating systems and concurrent programming."
    },
    {
        id: 646,
        testId: 6,
        difficulty: 'hard',
        question: "How does 'public key cryptography' work?",
        type: 'subjective',
        answer: "Public key cryptography (or asymmetric encryption) uses a pair of keys: a public key that can be shared widely, and a private key that must be kept secret. A message encrypted with the public key can only be decrypted with the corresponding private key. This is used to ensure confidentiality. It is also used for digital signatures: a message signed with a private key can be verified by anyone with the public key, ensuring authenticity.",
        explanation: "This is the foundation of secure communication on the web (HTTPS/TLS)."
    },
    {
        id: 647,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'Infrastructure as Code' (IaC)?",
        type: 'subjective',
        answer: "IaC is the practice of managing and provisioning infrastructure (servers, databases, networks) through machine-readable definition files, rather than manual configuration. Tools like Terraform or AWS CloudFormation are used. This allows infrastructure to be version-controlled, tested, and automated, just like application code. It enables the creation of consistent, repeatable environments.",
        explanation: "IaC is a core principle of modern DevOps."
    },
    {
        id: 648,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'blue-green deployment'?",
        type: 'subjective',
        answer: "Blue-green deployment is a release strategy that reduces downtime. You maintain two identical production environments: 'blue' (the current live version) and 'green' (the new version). You deploy and test the new version in the green environment. Once verified, you switch the router to direct all live traffic to the green environment. This allows for instant releases and a simple rollback strategy (just switch back to blue).",
        explanation: "The main trade-off is the cost of maintaining double the infrastructure."
    },
    {
        id: 649,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'event delegation' in JavaScript?",
        type: 'subjective',
        answer: "Event delegation is a technique where you add a single event listener to a parent element to manage events for all of its children. When an event bubbles up from a child, the parent listener checks the `event.target` property to identify which child triggered the event and responds accordingly. This improves performance and memory usage by reducing the number of event listeners, and it also handles dynamically added child elements automatically.",
        explanation: "It's a powerful and efficient pattern for handling events on lists of items."
    },
    {
        id: 650,
        testId: 6,
        difficulty: 'hard',
        question: "What is the 'Same-Origin Policy' and why is it important for web security?",
        type: 'subjective',
        answer: "The Same-Origin Policy is a critical security mechanism in web browsers. It restricts how a document or script loaded from one 'origin' (defined by its protocol, domain, and port) can interact with a resource from another origin. For example, it prevents JavaScript on `evil.com` from making an API request to `yourbank.com` and reading the response. This is a fundamental protection against data theft between sites.",
        explanation: "CORS is the mechanism used to selectively relax this policy when needed."
    },
    {
        id: 651,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between `useMemo` and `useCallback` in React?",
        type: 'subjective',
        answer: "`useCallback` and `useMemo` are both optimization hooks. `useCallback(fn, deps)` returns a memoized version of the callback function `fn` itself. The function only changes if a dependency in `deps` has changed. `useMemo(fn, deps)` invokes the function `fn` and memoizes its return value. The value is only recomputed if a dependency changes. Use `useCallback` for functions, `useMemo` for values.",
        explanation: "They are used to prevent unnecessary re-renders in child components that rely on reference equality."
    },
    {
        id: 652,
        testId: 6,
        difficulty: 'hard',
        question: "Explain what a 'closure' is in JavaScript with a code example.",
        type: 'subjective',
        answer: "A closure is a function that remembers the environment (lexical scope) in which it was created. It has access to variables from its outer function, even after the outer function has finished executing. Example: `function createAdder(x) { return function(y) { return x + y; }; } const add5 = createAdder(5); console.log(add5(10)); // 15`. The inner function 'closes over' the `x` variable.",
        explanation: "Closures are a powerful feature for creating private data and function factories."
    },
    {
        id: 653,
        testId: 6,
        difficulty: 'hard',
        question: "What is the CAP theorem and how does it apply to database selection?",
        type: 'subjective',
        answer: "The CAP theorem states that a distributed data store can only provide two of three guarantees: Consistency (all nodes see the same data at the same time), Availability (every request receives a response), and Partition Tolerance (the system continues to operate despite network partitions). Since partition tolerance is a necessity in distributed systems, the choice is between Consistency (CP systems, like some SQL databases) and Availability (AP systems, like many NoSQL databases).",
        explanation: "This theorem forces architects to make a fundamental trade-off when designing distributed systems."
    },
    {
        id: 654,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of 'sharding' a database?",
        type: 'subjective',
        answer: "Sharding is a method of horizontal partitioning, where a large database is broken up into smaller, more manageable pieces called shards. Each shard is a separate database, but together they form a single logical database. The purpose is to scale a database horizontally to handle massive amounts of data and traffic that cannot be handled by a single server. Data is distributed across shards based on a shard key.",
        explanation: "Sharding is a common strategy for achieving massive scale with databases."
    },
    {
        id: 655,
        testId: 6,
        difficulty: 'hard',
        question: "What is a `Promise` in JavaScript and what states can it be in?",
        type: 'subjective',
        answer: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation. A Promise can be in one of three states: 1) **Pending:** the initial state, neither fulfilled nor rejected. 2) **Fulfilled:** the operation completed successfully. 3) **Rejected:** the operation failed. Promises allow you to associate handlers with an asynchronous action's eventual success value or failure reason.",
        explanation: "They are the foundation for modern asynchronous programming in JavaScript."
    },
    // Test 7: 35 Questions (21 MCQ, 14 Subjective)
    {
        id: 656,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'WebAssembly' (Wasm)?",
        type: 'mcq',
        options: [
            'A JavaScript framework',
            'A binary instruction format for a stack-based virtual machine, designed as a portable compilation target for high-level languages like C++ and Rust',
            'A new version of HTML',
            'A security protocol for the web'
        ],
        answer: 'A binary instruction format for a stack-based virtual machine, designed as a portable compilation target for high-level languages like C++ and Rust',
        explanation: 'Wasm allows you to run performance-critical code on the web at near-native speeds.'
    },
    {
        id: 657,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'Serverless Computing'?",
        type: 'mcq',
        options: [
            'Running a web application without a server',
            'A cloud computing model where the cloud provider dynamically manages the allocation of machine resources, and you only pay for the actual compute time consumed',
            'A frontend-only architecture',
            'A type of peer-to-peer networking'
        ],
        answer: 'A cloud computing model where the cloud provider dynamically manages the allocation of machine resources, and you only pay for the actual compute time consumed',
        explanation: 'Services like AWS Lambda and Google Cloud Functions are examples of serverless platforms.'
    },
    {
        id: 658,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of the `SameSite` cookie attribute?",
        type: 'mcq',
        options: [
            'To specify the cookie\'s value',
            'To set the cookie\'s expiration date',
            'To control whether a cookie is sent with cross-site requests, providing a defense against CSRF attacks',
            'To encrypt the cookie'
        ],
        answer: 'To control whether a cookie is sent with cross-site requests, providing a defense against CSRF attacks',
        explanation: 'Setting `SameSite` to `Strict` or `Lax` is a critical security measure.'
    },
    {
        id: 659,
        testId: 7,
        difficulty: 'hard',
        question: "In CSS, what is the difference between `em` and `rem` units?",
        type: 'mcq',
        options: [
            'They are interchangeable',
            '`em` is relative to the font-size of the parent element, while `rem` is relative to the font-size of the root (html) element',
            '`rem` is relative to the parent element, while `em` is relative to the root',
            '`em` is for width and `rem` is for height'
        ],
        answer: '`em` is relative to the font-size of the parent element, while `rem` is relative to the font-size of the root (html) element',
        explanation: 'Using `rem` is often easier for creating scalable and consistent layouts, as it avoids compounding issues from nested elements.'
    },
    {
        id: 660,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'race condition'?",
        type: 'mcq',
        options: [
            'A performance optimization',
            'A bug that occurs when the behavior of a system depends on the unpredictable timing of concurrent operations',
            'A network error',
            'A database constraint'
        ],
        answer: 'A bug that occurs when the behavior of a system depends on the unpredictable timing of concurrent operations',
        explanation: 'Race conditions can lead to corrupted data and are typically prevented using synchronization mechanisms like locks or mutexes.'
    },
    {
        id: 661,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'Infrastructure as a Service' (IaaS)?",
        type: 'mcq',
        options: [
            'A complete software application provided over the internet (SaaS)',
            'A platform for developers to build and run applications (PaaS)',
            'A cloud computing model that provides fundamental computing resources like virtual machines, storage, and networking',
            'A local server hosting service'
        ],
        answer: 'A cloud computing model that provides fundamental computing resources like virtual machines, storage, and networking',
        explanation: 'With IaaS, you are responsible for managing the operating system and applications. AWS EC2 is a prime example.'
    },
    {
        id: 662,
        testId: 7,
        difficulty: 'hard',
        question: "What does the `git rebase` command do?",
        type: 'mcq',
        options: [
            'It creates a merge commit to combine two branches',
            'It rewrites commit history by moving or combining a sequence of commits to a new base commit, creating a linear history',
            'It deletes a branch',
            'It archives a repository'
        ],
        answer: 'It rewrites commit history by moving or combining a sequence of commits to a new base commit, creating a linear history',
        explanation: 'Rebasing is a powerful tool for maintaining a clean project history but should be used with care on shared branches.'
    },
    {
        id: 663,
        testId: 7,
        difficulty: 'hard',
        question: "What is the primary function of a 'service mesh' like Istio?",
        type: 'mcq',
        options: [
            'To write business logic for microservices',
            'To provide a dedicated infrastructure layer for managing service-to-service communication, handling observability, security, and traffic control',
            'To deploy containers',
            'To manage databases'
        ],
        answer: 'To provide a dedicated infrastructure layer for managing service-to-service communication, handling observability, security, and traffic control',
        explanation: 'A service mesh abstracts complex networking concerns away from the application code.'
    },
    {
        id: 664,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'currying' in functional programming?",
        type: 'mcq',
        options: [
            'A debugging technique',
            'The process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument',
            'A way to optimize loops',
            'A data serialization format'
        ],
        answer: 'The process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument',
        explanation: 'For example, `add(x, y)` becomes `add(x)(y)`. This enables patterns like partial application.'
    },
    {
        id: 665,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of `Promise.allSettled()`?",
        type: 'mcq',
        options: [
            'It rejects as soon as one promise rejects',
            'It resolves when all promises resolve, and rejects otherwise',
            'It waits for all promises to settle (either fulfill or reject) and then resolves with an array of objects describing the outcome of each promise',
            'It is an alias for `Promise.all()`'
        ],
        answer: 'It waits for all promises to settle (either fulfill or reject) and then resolves with an array of objects describing the outcome of each promise',
        explanation: 'This is useful when you need to know the result of every promise, even if some of them fail.'
    },
    {
        id: 666,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'sidecar' pattern in a containerized environment?",
        type: 'mcq',
        options: [
            'A pattern for deploying two main application containers together',
            'A pattern where a helper container is deployed alongside the main application container to provide auxiliary functions like logging or monitoring',
            'A database replication strategy',
            'A frontend design pattern'
        ],
        answer: 'A pattern where a helper container is deployed alongside the main application container to provide auxiliary functions like logging or monitoring',
        explanation: 'The sidecar shares the same network and lifecycle as the main container, acting as a closely coupled helper process.'
    },
    {
        id: 667,
        testId: 7,
        difficulty: 'hard',
        question: "What is the main difference between a `Set` and an `Array` in JavaScript?",
        type: 'mcq',
        options: [
            'A `Set` is ordered, while an `Array` is not',
            'An `Array` can only store numbers',
            'A `Set` can only store unique values, while an `Array` can have duplicates',
            'They are functionally identical'
        ],
        answer: 'A `Set` can only store unique values, while an `Array` can have duplicates',
        explanation: 'Sets provide an efficient way to store and check for the existence of unique items.'
    },
    {
        id: 668,
        testId: 7,
        difficulty: 'hard',
        question: "What is `gzip` in the context of web performance?",
        type: 'mcq',
        options: [
            'A file format for images',
            'A file compression algorithm used by web servers and browsers to compress and decompress content, reducing the size of data transferred',
            'A JavaScript library',
            'A security protocol'
        ],
        answer: 'A file compression algorithm used by web servers and browsers to compress and decompress content, reducing the size of data transferred',
        explanation: 'Enabling `gzip` or `Brotli` compression is a standard practice for optimizing website load times.'
    },
    {
        id: 669,
        testId: 7,
        difficulty: 'hard',
        question: "What is the 'critical rendering path'?",
        type: 'mcq',
        options: [
            'The path a user takes through an application',
            'The sequence of steps a browser takes to convert HTML, CSS, and JavaScript into pixels on the screen',
            'The most important API endpoint',
            'A server-side rendering process'
        ],
        answer: 'The sequence of steps a browser takes to convert HTML, CSS, and JavaScript into pixels on the screen',
        explanation: 'Optimizing the critical rendering path (e.g., by minimizing render-blocking resources) is key to improving perceived page load speed.'
    },
    {
        id: 670,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'polymorphism' in object-oriented programming?",
        type: 'mcq',
        options: [
            'The process of creating many objects',
            'A principle where objects of different classes can be treated as objects of a common superclass',
            'A way to hide data within a class',
            'The structure of a class'
        ],
        answer: 'A principle where objects of different classes can be treated as objects of a common superclass',
        explanation: 'It allows for writing more generic and flexible code, often through method overriding or interfaces.'
    },
    {
        id: 671,
        testId: 7,
        difficulty: 'hard',
        question: "In Node.js, what is the difference between `child_process.fork()` and `child_process.spawn()`?",
        type: 'mcq',
        options: [
            'There is no difference',
            '`fork()` is a special case of `spawn()` for creating new Node.js processes, and it includes a built-in communication channel',
            '`spawn()` is for running shell commands, while `fork()` is for running scripts',
            '`fork()` is synchronous, while `spawn()` is asynchronous'
        ],
        answer: '`fork()` is a special case of `spawn()` for creating new Node.js processes, and it includes a built-in communication channel',
        explanation: '`fork()` is ideal for creating worker processes that need to communicate with the parent process.'
    },
    {
        id: 672,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'deadlock' in concurrent programming?",
        type: 'mcq',
        options: [
            'An error that crashes a program',
            'A situation where two or more threads are blocked forever, each waiting for the other to release a resource',
            'A terminated thread',
            'A security flaw'
        ],
        answer: 'A situation where two or more threads are blocked forever, each waiting for the other to release a resource',
        explanation: 'Deadlocks can be prevented by establishing a strict order for acquiring locks.'
    },
    {
        id: 673,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'canary release'?",
        type: 'mcq',
        options: [
            'A deployment to a test environment',
            'A deployment strategy where a new version is gradually rolled out to a small subset of users before a full release',
            'A type of bird',
            'A tool for monitoring releases'
        ],
        answer: 'A deployment strategy where a new version is gradually rolled out to a small subset of users before a full release',
        explanation: 'This minimizes the impact of potential bugs in the new version, acting as a "canary in a coal mine".'
    },
    {
        id: 674,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of the `useLayoutEffect` hook in React?",
        type: 'mcq',
        options: [
            'It is the same as `useEffect`',
            'It fires synchronously after all DOM mutations are complete but before the browser has painted the result',
            'It runs before the component mounts',
            'It is used for server-side effects only'
        ],
        answer: 'It fires synchronously after all DOM mutations are complete but before the browser has painted the result',
        explanation: 'This is useful for measuring DOM layout or synchronously re-rendering to avoid visual flickers.'
    },
    {
        id: 675,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'Bloom filter'?",
        type: 'mcq',
        options: [
            'A CSS image filter',
            'A probabilistic data structure for testing set membership that may have false positives but no false negatives',
            'A type of database index',
            'A network firewall rule'
        ],
        answer: 'A probabilistic data structure for testing set membership that may have false positives but no false negatives',
        explanation: 'They are very space-efficient and are used when a small chance of a false positive is acceptable.'
    },
    {
        id: 676,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'long polling'?",
        type: 'mcq',
        options: [
            'Making many short requests in a row',
            'A technique where the client makes a request and the server holds it open until it has new data to send',
            'A very slow HTTP request',
            'An alternative to WebSockets that is bidirectional'
        ],
        answer: 'A technique where the client makes a request and the server holds it open until it has new data to send',
        explanation: 'Long polling is a way to simulate a server push and is more efficient than traditional short polling, but less efficient than WebSockets.'
    },
    {
        id: 677,
        testId: 7,
        difficulty: 'hard',
        question: "Explain the concept of 'database sharding'.",
        type: 'subjective',
        answer: "Database sharding is a type of horizontal partitioning where a large database is broken into smaller, more manageable pieces called shards. Each shard is an independent database, and data is distributed across these shards based on a 'shard key'. This allows a database to scale horizontally across multiple servers, handling massive amounts of data and traffic that would be impossible for a single server to manage.",
        explanation: "Sharding is a common strategy for achieving massive database scalability."
    },
    {
        id: 678,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between a 'container' and a 'virtual machine'?",
        type: 'subjective',
        answer: "A Virtual Machine (VM) virtualizes the physical hardware, running a full guest operating system for each VM. A container virtualizes the operating system, allowing multiple containers to run on a single host OS kernel. This makes containers much more lightweight, faster to start, and less resource-intensive. VMs provide stronger isolation, while containers offer superior efficiency and portability.",
        explanation: "Think of containers as isolated processes on a shared OS, and VMs as entirely separate computers."
    },
    {
        id: 679,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'backpressure' in the context of data streaming and reactive systems?",
        type: 'subjective',
        answer: "Backpressure is a flow control mechanism where a data consumer that is becoming overwhelmed can signal to the data producer to slow down or pause the stream of data. This prevents the consumer's buffers from overflowing and the system from becoming unstable. It's a crucial concept for building resilient, asynchronous systems that can handle producers and consumers with different processing speeds.",
        explanation: "It's like telling someone 'whoa, slow down, I can't write that fast!'"
    },
    {
        id: 680,
        testId: 7,
        difficulty: 'hard',
        question: "How does a 'circuit breaker' pattern improve system resilience?",
        type: 'subjective',
        answer: "A circuit breaker wraps a potentially failing operation (like a network call to another service). It monitors for failures, and if they exceed a threshold, it 'trips' or 'opens' the circuit. While open, all subsequent calls fail immediately without even attempting the operation. This prevents the application from wasting resources on a failing service and avoids cascading failures. After a timeout, the circuit enters a 'half-open' state to test if the service has recovered.",
        explanation: "It's a critical pattern for building fault-tolerant microservice architectures."
    },
    {
        id: 681,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'idempotency' and why is it important in API design?",
        type: 'subjective',
        answer: "An operation is idempotent if making the same request multiple times has the same effect as making it once. For example, a `DELETE /users/123` request is idempotent. This is important for building reliable systems because it allows clients to safely retry requests in the case of network errors or timeouts, without causing unintended side effects like creating duplicate resources.",
        explanation: "HTTP methods like GET, PUT, and DELETE are idempotent by definition."
    },
    {
        id: 682,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'event sourcing' and what is one of its major benefits?",
        type: 'subjective',
        answer: "Event sourcing is an architectural pattern where all changes to application state are stored as a sequence of immutable events. Instead of storing the current state of an entity, you store the log of events that led to that state. A major benefit is that you have a complete, reliable audit log of every change that has ever occurred in the system. This makes debugging easier and allows you to reconstruct past states.",
        explanation: "It's often used with the CQRS pattern."
    },
    {
        id: 683,
        testId: 7,
        difficulty: 'hard',
        question: "What is Cross-Site Request Forgery (CSRF) and how is it prevented?",
        type: 'subjective',
        answer: "CSRF is an attack that tricks a logged-in user's browser into making a malicious request to a web application they trust (e.g., submitting a form to transfer money). The primary prevention method is the synchronizer token pattern, where the server sends a unique, unpredictable token with each form. When the form is submitted, the server checks that the token is present and valid. Checking the `Origin` header and using the `SameSite` cookie attribute are also key defenses.",
        explanation: "The attack works because the browser automatically includes authentication cookies with the forged request."
    },
    {
        id: 684,
        testId: 7,
        difficulty: 'hard',
        question: "Explain what `git rebase` does and a scenario where it is useful.",
        type: 'subjective',
        answer: "`git rebase` is a command that rewrites commit history. It takes a series of commits from one branch and reapplies them on top of another branch. This creates a linear history, which can be easier to read than the merge commit created by `git merge`. A common use case is updating a feature branch with the latest changes from the main branch before merging it, which avoids a 'merge bubble' and keeps the history clean.",
        explanation: "It should not be used on public, shared branches as it rewrites history."
    },
    {
        id: 685,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between a `process` and a `thread` in terms of memory and resources?",
        type: 'subjective',
        answer: "A process is an independent program with its own dedicated, isolated memory space. A thread is a unit of execution within a process. Multiple threads within the same process share the same memory space (heap, global variables). This makes inter-thread communication fast and efficient but also requires careful synchronization to avoid race conditions. Processes are more heavyweight and isolated from each other.",
        explanation: "This is a fundamental operating systems concept."
    },
    {
        id: 686,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'lambda' function (or anonymous function) and why are they useful?",
        type: 'subjective',
        answer: "A lambda function is a small, anonymous function that is not bound to an identifier. They are useful for short, simple operations where defining a full, named function would be overly verbose. They are commonly used in functional programming, for example, as arguments to higher-order functions like `map`, `filter`, and `reduce`.",
        explanation: "For example, `my_list.map(x => x * 2)` uses a lambda function."
    },
    {
        id: 687,
        testId: 7,
        difficulty: 'hard',
        question: "Explain the concept of 'memoization' as a performance optimization.",
        type: 'subjective',
        answer: "Memoization is an optimization technique where the results of expensive function calls are cached. When the same function is called again with the same inputs, the cached result is returned instead of re-computing the value. This can significantly speed up applications that have functions that are called repeatedly with the same arguments. React's `useMemo` hook is a form of memoization.",
        explanation: "It's a trade-off between memory (to store the cache) and CPU time (to re-compute)."
    },
    {
        id: 688,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of a 'liveness' probe in Kubernetes?",
        type: 'subjective',
        answer: "A liveness probe is a check that Kubernetes performs periodically to determine if a container is still running and healthy. If the liveness probe fails (e.g., the application has frozen or deadlocked), Kubernetes will automatically restart the container in an attempt to restore its functionality. This helps to improve the overall resilience of the application.",
        explanation: "It is different from a 'readiness' probe, which determines if a container is ready to start accepting traffic."
    },
    {
        id: 689,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'observability' and its three pillars?",
        type: 'subjective',
        answer: "Observability is the ability to understand the internal state of a system by examining its external outputs. It's about being able to ask arbitrary questions about your system's behavior. Its three pillars are: 1) **Logs:** Detailed, timestamped records of discrete events. 2) **Metrics:** Aggregated, numerical data over time (e.g., request count, CPU usage). 3) **Traces:** A representation of a single request as it flows through all the services in a distributed system.",
        explanation: "Observability is crucial for debugging and understanding the performance of modern, complex systems."
    },
    {
        id: 690,
        testId: 7,
        difficulty: 'hard',
        question: "How does HTTP/2 improve upon HTTP/1.1?",
        type: 'subjective',
        answer: "The main improvement of HTTP/2 is multiplexing, which allows multiple requests and responses to be sent in parallel over a single TCP connection. This solves the 'head-of-line blocking' problem of HTTP/1.1. Other improvements include binary framing (instead of text-based), header compression (using HPACK) to reduce overhead, and server push, where the server can proactively send resources to the client that it knows will be needed.",
        explanation: "These features result in significantly faster and more efficient web page loading."
    },
     // Test 8: 40 Questions (24 MCQ, 16 Subjective)
     {
        id: 691,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'tail latency' and why is it a critical metric in microservices?",
        type: 'mcq',
        options: [
            'The time it takes for a log to appear',
            'The average latency of all requests',
            'The latency of the 99th or 99.9th percentile of requests, which is critical because a user-facing operation is often only as fast as the slowest of its many backend dependencies',
            'The delay caused by network tails'
        ],
        answer: 'The latency of the 99th or 99.9th percentile of requests, which is critical because a user-facing operation is often only as fast as the slowest of its many backend dependencies',
        explanation: 'Focusing only on average latency can hide significant performance problems that affect a subset of users.'
    },
    {
        id: 692,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        type: 'mcq',
        options: [
            'A type of database schema',
            'A data structure that can be replicated and updated independently and concurrently, with a mathematical guarantee that inconsistencies can always be resolved',
            'An encryption algorithm for distributed systems',
            'A testing framework for concurrent applications'
        ],
        answer: 'A data structure that can be replicated and updated independently and concurrently, with a mathematical guarantee that inconsistencies can always be resolved',
        explanation: 'CRDTs are fundamental to building real-time collaborative applications like Google Docs.'
    },
    {
        id: 693,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'Raft' consensus algorithm?",
        type: 'mcq',
        options: [
            'A sorting algorithm',
            'A consensus algorithm designed to be more understandable than Paxos, used to manage a replicated log in a distributed system',
            'A load balancing algorithm',
            'A graph traversal algorithm'
        ],
        answer: 'A consensus algorithm designed to be more understandable than Paxos, used to manage a replicated log in a distributed system',
        explanation: 'Raft works by electing a leader to manage the log, ensuring all nodes agree on the state of the system.'
    },
    {
        id: 694,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'QUIC'?",
        type: 'mcq',
        options: [
            'A JavaScript framework',
            'A new transport layer protocol built on UDP that serves as the foundation for HTTP/3, designed to reduce latency and eliminate head-of-line blocking',
            'A compression algorithm',
            'A security standard'
        ],
        answer: 'A new transport layer protocol built on UDP that serves as the foundation for HTTP/3, designed to reduce latency and eliminate head-of-line blocking',
        explanation: 'QUIC provides significant performance improvements, especially on unreliable networks.'
    },
    {
        id: 695,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of a 'Log-Structured Merge-Tree' (LSM-Tree)?",
        type: 'mcq',
        options: [
            'To structure application logs',
            'To be a data structure highly optimized for write-heavy workloads, used in databases like Cassandra and RocksDB',
            'To render tree-like UIs',
            'To parse log files'
        ],
        answer: 'To be a data structure highly optimized for write-heavy workloads, used in databases like Cassandra and RocksDB',
        explanation: 'LSM-Trees achieve high write throughput by turning random writes into sequential writes on disk.'
    },
    {
        id: 696,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'Kubernetes Operator'?",
        type: 'mcq',
        options: [
            'A person certified to manage Kubernetes clusters',
            'A method of extending the Kubernetes API to create, configure, and manage instances of complex stateful applications on behalf of a user',
            'A network plugin for Kubernetes',
            'A security scanner for container images'
        ],
        answer: 'A method of extending the Kubernetes API to create, configure, and manage instances of complex stateful applications on behalf of a user',
        explanation: 'Operators encode human operational knowledge into software to automate the management of applications like databases.'
    },
    {
        id: 697,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'eBPF' (Extended Berkeley Packet Filter)?",
        type: 'mcq',
        options: [
            'A firewall technology',
            'A revolutionary technology that allows running sandboxed programs in the Linux kernel without changing kernel source code or loading kernel modules',
            'A text-based file format',
            'A JavaScript engine'
        ],
        answer: 'A revolutionary technology that allows running sandboxed programs in the Linux kernel without changing kernel source code or loading kernel modules',
        explanation: 'eBPF is used for high-performance networking, observability, and security tooling.'
    },
    {
        id: 698,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'serverless' architecture?",
        type: 'mcq',
        options: [
            'An application that runs entirely on the client',
            'A cloud-native development model that allows developers to build and run applications without having to manage servers',
            'An architecture with no backend',
            'A type of local development environment'
        ],
        answer: 'A cloud-native development model that allows developers to build and run applications without having to manage servers',
        explanation: 'In a serverless model, the cloud provider handles the provisioning and management of the infrastructure.'
    },
    {
        id: 699,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'Domain-Driven Design' (DDD)?",
        type: 'mcq',
        options: [
            'A UI design methodology',
            'An approach to software development that focuses on modeling the software to match a domain according to input from that domain\'s experts',
            'A database schema design pattern',
            'A project management framework'
        ],
        answer: 'An approach to software development that focuses on modeling the software to match a domain according to input from that domain\'s experts',
        explanation: 'DDD emphasizes a `ubiquitous language` and is well-suited for complex business domains.'
    },
    {
        id: 700,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'pessimistic lock' in a database?",
        type: 'mcq',
        options: [
            'A lock that assumes conflicts will happen and prevents them by locking a resource before use',
            'A lock that is not very effective',
            'A lock that assumes conflicts are rare and only checks for them upon commit',
            'A lock that lasts forever'
        ],
        answer: 'A lock that assumes conflicts will happen and prevents them by locking a resource before use',
        explanation: 'Pessimistic locking prioritizes consistency over concurrency.'
    },
    {
        id: 701,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'Actor Model'?",
        type: 'mcq',
        options: [
            'A UI design pattern',
            'A mathematical model of concurrent computation where 'actors' are universal primitives that communicate via asynchronous messages',
            'A method for role-based access control',
            'A software testing methodology'
        ],
        answer: 'A mathematical model of concurrent computation where \'actors\' are universal primitives that communicate via asynchronous messages',
        explanation: 'This model avoids shared state, thus eliminating the need for locks and simplifying concurrent programming.'
    },
    {
        id: 702,
        testId: 8,
        difficulty: 'expert',
        question: "What does the 'I' in the SOLID principles stand for?",
        type: 'mcq',
        options: [
            'Inversion of Control',
            'Interface Segregation Principle',
            'Inheritance Principle',
            'Immutability'
        ],
        answer: 'Interface Segregation Principle',
        explanation: 'This principle states that clients should not be forced to depend on interfaces they do not use.'
    },
    {
        id: 703,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'thundering herd' problem?",
        type: 'mcq',
        options: [
            'A type of DDoS attack',
            'A problem in concurrent programming where a large number of threads waiting for an event are awakened, causing contention and performance degradation',
            'A database connection issue',
            'A cache stampede'
        ],
        answer: 'A problem in concurrent programming where a large number of threads waiting for an event are awakened, causing contention and performance degradation',
        explanation: 'Modern OS kernels have mechanisms to mitigate this, but it can still be an issue in application-level code.'
    },
    {
        id: 704,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'sidecar' pattern?",
        type: 'mcq',
        options: [
            'A database design pattern',
            'A deployment pattern where a helper container is run alongside the main application container to provide auxiliary functions',
            'A caching strategy',
            'A frontend state management pattern'
        ],
        answer: 'A deployment pattern where a helper container is run alongside the main application container to provide auxiliary functions',
        explanation: 'Sidecars are commonly used for logging, monitoring, and as proxies in a service mesh.'
    },
    {
        id: 705,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'backpressure' in reactive streams?",
        type: 'mcq',
        options: [
            'A security feature',
            'A mechanism for a consumer to signal to a producer to slow down the rate of data emission',
            'A database error',
            'A form of data compression'
        ],
        answer: 'A mechanism for a consumer to signal to a producer to slow down the rate of data emission',
        explanation: 'Backpressure is a crucial flow-control mechanism for building resilient asynchronous systems.'
    },
    {
        id: 706,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'canary release'?",
        type: 'mcq',
        options: [
            'A full deployment of a new version',
            'A deployment strategy where a new version is rolled out to a small subset of users to monitor for issues before a full release',
            'A type of software test',
            'A security scan'
        ],
        answer: 'A deployment strategy where a new version is rolled out to a small subset of users to monitor for issues before a full release',
        explanation: 'This strategy minimizes the risk and impact of deploying a faulty new version.'
    },
    {
        id: 707,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'mcq',
        options: [
            'A database schema',
            'An architectural pattern that separates models for reading data (queries) from models for updating data (commands)',
            'A security protocol',
            'A testing methodology'
        ],
        answer: 'An architectural pattern that separates models for reading data (queries) from models for updating data (commands)',
        explanation: 'This allows for independent optimization of the read and write sides of an application.'
    },
    {
        id: 708,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'vector clock'?",
        type: 'mcq',
        options: [
            'A type of CPU clock',
            'A data structure used for determining the partial causal ordering of events in a distributed system',
            'A UI component for displaying time',
            'An animation timing function'
        ],
        answer: 'A data structure used for determining the partial causal ordering of events in a distributed system',
        explanation: 'Vector clocks help detect and resolve conflicts in eventually consistent systems.'
    },
    {
        id: 709,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'Test-Driven Development' (TDD)?",
        type: 'mcq',
        options: [
            'A development process where tests are written after the code',
            'A software development process that follows a short cycle of writing a failing test, writing the code to pass the test, and then refactoring',
            'A type of performance testing',
            'A methodology for manual testing'
        ],
        answer: 'A software development process that follows a short cycle of writing a failing test, writing the code to pass the test, and then refactoring',
        explanation: 'The TDD mantra is "Red, Green, Refactor".'
    },
    {
        id: 710,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'distributed lock'?",
        type: 'mcq',
        options: [
            'A physical lock for a data center',
            'A synchronization mechanism used in a distributed system to ensure that only one process can access a shared resource at a time',
            'A security feature of a firewall',
            'A type of database index'
        ],
        answer: 'A synchronization mechanism used in a distributed system to ensure that only one process can access a shared resource at a time',
        explanation: 'Implementing a reliable distributed lock is complex and often relies on tools like ZooKeeper or Redis.'
    },
    {
        id: 711,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'reactive programming'?",
        type: 'mcq',
        options: [
            'Programming with the React library',
            'A declarative programming paradigm concerned with data streams and the propagation of change',
            'A style of programming that reacts quickly to user input',
            'A backend programming paradigm only'
        ],
        answer: 'A declarative programming paradigm concerned with data streams and the propagation of change',
        explanation: 'Libraries like RxJS provide tools (Observables, operators) for reactive programming.'
    },
    {
        id: 712,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'two-phase commit' (2PC)?",
        type: 'mcq',
        options: [
            'A Git commit strategy',
            'A distributed algorithm that coordinates a transaction across multiple resources to ensure atomicity',
            'A deployment process',
            'A testing phase'
        ],
        answer: 'A distributed algorithm that coordinates a transaction across multiple resources to ensure atomicity',
        explanation: '2PC involves a 'prepare' phase and a 'commit' phase, but it can be slow and is not fault-tolerant if the coordinator fails.'
    },
    {
        id: 713,
        testId: 8,
        difficulty: 'expert',
        question: "What is the primary goal of a 'service mesh'?",
        type: 'mcq',
        options: [
            'To write application business logic',
            'To abstract the network layer and provide reliable, secure, and observable service-to-service communication',
            'To manage frontend state',
            'To build container images'
        ],
        answer: 'To abstract the network layer and provide reliable, secure, and observable service-to-service communication',
        explanation: 'A service mesh handles tasks like load balancing, retries, circuit breaking, and mTLS encryption.'
    },
    {
        id: 714,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'cache stampede'?",
        type: 'mcq',
        options: [
            'A type of DDoS attack',
            'A situation where a large number of concurrent requests cause a cache miss for the same item, leading to multiple fetches from the origin and overwhelming the backend',
            'A strategy for warming up a cache',
            'A hardware failure in a cache server'
        ],
        answer: 'A situation where a large number of concurrent requests cause a cache miss for the same item, leading to multiple fetches from the origin and overwhelming the backend',
        explanation: 'Mitigation strategies include using locks or promises to ensure only one fetch is made for an expired item.'
    },
    {
        id: 715,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the 'Saga' pattern for distributed transactions and compare it to two-phase commit.",
        type: 'subjective',
        answer: "A Saga is a sequence of local transactions where each transaction updates a single service and publishes an event to trigger the next one. If a transaction fails, compensating transactions are run to undo the previous steps. Unlike two-phase commit (2PC), which is a blocking protocol that locks resources, Sagas are asynchronous and non-blocking. Sagas are more scalable and resilient but only provide eventual consistency and are more complex to reason about than the strong consistency of 2PC.",
        explanation: "Sagas are a common pattern for achieving transactional guarantees in a microservices architecture."
    },
    {
        id: 716,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'Chaos Engineering' and what is its goal?",
        type: 'subjective',
        answer: "Chaos Engineering is the discipline of experimenting on a system to build confidence in its ability to withstand turbulent conditions in production. It involves deliberately injecting controlled failures (e.g., killing servers, introducing network latency) to proactively identify and fix weaknesses before they cause user-facing outages. The goal is not to break things, but to reveal hidden problems and improve system resilience.",
        explanation: "It's a proactive approach to improving reliability, famously practiced by Netflix."
    },
    {
        id: 717,
        testId: 8,
        difficulty: 'expert',
        question: "What is the difference between leader-based and leaderless database replication?",
        type: 'subjective',
        answer: "In leader-based (master-slave) replication, one replica (the leader) handles all write requests and propagates the changes to followers. This ensures strong consistency for reads from the leader but makes the leader a single point of failure. In leaderless replication, any replica can accept writes. This provides higher write availability and fault tolerance, but makes consistency more complex, often relying on quorums and read-repair mechanisms to resolve conflicts and achieve eventual consistency.",
        explanation: "This is a fundamental design trade-off in distributed databases, guided by the CAP theorem."
    },
    {
        id: 718,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS) and in what scenario is it commonly used?",
        type: 'subjective',
        answer: "Mutual TLS is an authentication method where both parties in a connection, the client and the server, authenticate each other's identity using X.509 certificates. This is different from standard TLS where only the client authenticates the server. A common scenario is securing service-to-service communication within a microservices architecture, ensuring that only authorized services can communicate with each other, creating a zero-trust network environment.",
        explanation: "It provides strong, two-way, certificate-based authentication."
    },
    {
        id: 719,
        testId: 8,
        difficulty: 'expert',
        question: "Explain what 'Consistent Hashing' is and why it's important for distributed systems.",
        type: 'subjective',
        answer: "Consistent hashing is a hashing technique where, when a hash table (or cluster of servers) is resized, only a small number of keys need to be remapped. In a distributed system like a cache or database, it means that when a server is added or removed, the number of data items that need to be moved is minimized. This prevents a massive, system-wide reshuffling of data, making the system much more scalable and stable during scaling events.",
        explanation: "It's a key algorithm for distributed caches like Redis and databases like Cassandra."
    },
    {
        id: 720,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type) and why is it useful?",
        type: 'subjective',
        answer: "A CRDT is a data structure that can be replicated across multiple computers and updated independently and concurrently, with a mathematical guarantee that any inconsistencies can always be resolved automatically. This is useful for building real-time collaborative applications (like Google Docs or Figma) where multiple users are making changes simultaneously. CRDTs merge concurrent changes without requiring complex conflict resolution logic from the developer.",
        explanation: "They are a powerful tool for achieving eventual consistency in collaborative software."
    },
    {
        id: 721,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'tail latency' and why is it a more important metric than average latency in many systems?",
        type: 'subjective',
        answer: "Tail latency refers to the latency of the slowest requests, typically the 99th or 99.9th percentile. It is more important than average latency in microservice architectures because a single user-facing operation can involve calls to dozens or hundreds of backend services. The user's experience is only as fast as the slowest of these dependencies. A good average latency can hide a poor tail latency that affects a significant number of user requests, so optimizing for the tail is crucial for a good user experience.",
        explanation: "Improving the P99 latency has a much greater impact on user experience than improving the average."
    },
    {
        id: 722,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'subjective',
        answer: "CQRS is an architectural pattern that separates the models for updating data (Commands) from the models for reading data (Queries). This allows the read and write sides of an application to be scaled and optimized independently. For example, the write model might be a normalized relational database, while the read model could be a highly denormalized view or a full-text search index, optimized for fast queries.",
        explanation: "CQRS is often used with Event Sourcing to build highly scalable and flexible systems."
    },
    {
        id: 723,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the 'Strangler Fig' pattern.",
        type: 'subjective',
        answer: "The Strangler Fig pattern is a strategy for incrementally migrating a legacy monolithic application. It involves placing a proxy in front of the monolith that intercepts requests. New functionality is built as separate microservices. The proxy is configured to route calls for the new functionality to the new services, while everything else continues to go to the monolith. Over time, more functionality is 'strangled' from the monolith until it can be safely retired.",
        explanation: "It's a gradual and lower-risk approach to modernization than a 'big bang' rewrite."
    },
    {
        id: 724,
        testId: 8,
        difficulty: 'expert',
        question: "How does 'QUIC' improve upon TCP for use in HTTP/3?",
        type: 'subjective',
        answer: "QUIC, which runs on top of UDP, was designed to solve some of TCP's limitations. Its key improvement is that it eliminates head-of-line blocking at the transport layer. In TCP, if one packet is lost, all streams are blocked waiting for it to be retransmitted. In QUIC, streams are independent, so only the stream with the lost packet is blocked. QUIC also has a faster connection establishment (0-RTT or 1-RTT handshake).",
        explanation: "This makes HTTP/3 significantly more performant, especially on lossy networks like mobile."
    },
    {
        id: 725,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'eBPF' and what are its use cases?",
        type: 'subjective',
        answer: "eBPF (Extended Berkeley Packet Filter) is a technology that allows you to run sandboxed programs inside the Linux kernel without changing the kernel code. It provides a safe and efficient way to hook into kernel functions. Its use cases are extensive and include high-performance networking (e.g., loading balancing, DDoS mitigation), advanced observability (e.g., tracing system calls), and security monitoring.",
        explanation: "eBPF is a powerful, revolutionary technology for kernel-level programmability."
    },
    {
        id: 726,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'cache stampede' and how can you prevent it?",
        type: 'subjective',
        answer: "A cache stampede occurs when a popular, cached item expires, and a large number of concurrent requests for that item all miss the cache simultaneously. This causes all of them to try to fetch the item from the origin database or service at the same time, overwhelming it. It can be prevented using techniques like a mutex or lock, where only the first request is allowed to fetch the data while others wait, or by using stale-while-revalidate strategies.",
        explanation: "This is a common problem in high-traffic systems with caching."
    },
    {
        id: 727,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'observability' and its three pillars?",
        type: 'subjective',
        answer: "Observability is the ability to understand the internal state of a system by examining its external outputs. It's about being able to ask arbitrary questions about your system's behavior without having to ship new code. Its three pillars are: 1) **Logs:** Detailed, timestamped records of discrete events. 2) **Metrics:** Aggregated, numerical data over time (e.g., request count, CPU usage). 3) **Traces:** A representation of a single request as it flows through all the services in a distributed system.",
        explanation: "Observability is crucial for debugging and understanding the performance of modern, complex systems."
    },
    {
        id: 728,
        testId: 8,
        difficulty: 'expert',
        question: "How do you handle secrets management in a modern application?",
        type: 'subjective',
        answer: "Secrets like API keys and database credentials should never be stored in source code. Modern best practices involve using a dedicated secrets management tool like HashiCorp Vault, AWS Secrets Manager, or Google Secret Manager. These tools provide centralized storage, fine-grained access control, auditing, and dynamic secret rotation. Applications retrieve secrets at runtime through a secure API call or via injected environment variables in a secure environment like Kubernetes.",
        explanation: "Proper secrets management is a critical aspect of application security."
    },
    {
        id: 729,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'blue-green deployment'?",
        type: 'subjective',
        answer: "Blue-green deployment is a release strategy that reduces downtime and risk. It involves maintaining two identical production environments: 'blue' (the current live version) and 'green' (the new version). The new version is deployed and tested in the green environment. Once it's fully verified, the router is switched to direct all live traffic to the green environment. The blue environment is kept on standby for a quick rollback if needed. This allows for zero-downtime releases.",
        explanation: "The main trade-off is the cost of maintaining double the infrastructure."
    },
    {
        id: 730,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'Test-Driven Development' (TDD)?",
        type: 'subjective',
        answer: "TDD is a software development process that follows a short, repetitive cycle: 1) **Red:** Write a failing automated test case that defines a new function or improvement. 2) **Green:** Write the minimum amount of code necessary to make the test pass. 3) **Refactor:** Clean up the new code to improve its design and quality, ensuring all tests continue to pass. This process encourages simple design and ensures high test coverage from the start.",
        explanation: "The core mantra of TDD is 'Red, Green, Refactor'."
    },
    // Test 9: 45 Questions (27 MCQ, 18 Subjective)
    {
        id: 731,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Event Sourcing'?",
        type: 'mcq',
        options: [
            'A logging framework',
            'An architectural pattern where state changes are stored as a sequence of immutable events',
            'A real-time event streaming platform',
            'A UI event handling system'
        ],
        answer: 'An architectural pattern where state changes are stored as a sequence of immutable events',
        explanation: 'Instead of storing the current state, you store the history of events that led to it, providing a full audit log and enabling temporal queries.'
    },
    {
        id: 732,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'distributed transaction'?",
        type: 'mcq',
        options: [
            'A transaction that happens in many places at once',
            'A transaction that involves multiple, separate network resources (e.g., two different databases) and must be treated as a single atomic operation',
            'A highly efficient database transaction',
            'A transaction that is not logged'
        ],
        answer: 'A transaction that involves multiple, separate network resources (e.g., two different databases) and must be treated as a single atomic operation',
        explanation: 'Ensuring atomicity in distributed transactions is a notoriously difficult problem, often managed with patterns like Sagas or 2PC.'
    },
    {
        id: 733,
        testId: 9,
        difficulty: 'expert',
        question: "Which problem does 'Consistent Hashing' primarily solve?",
        type: 'mcq',
        options: [
            'It guarantees hash collisions never happen',
            'It minimizes the number of keys that need to be remapped when a distributed hash table is resized (e.g., a server is added or removed)',
            'It makes hashing algorithms faster',
            'It encrypts the hashed data'
        ],
        answer: 'It minimizes the number of keys that need to be remapped when a distributed hash table is resized (e.g., a server is added or removed)',
        explanation: 'This is crucial for the stability and scalability of distributed systems like caches and databases.'
    },
    {
        id: 734,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'gossip protocol'?",
        type: 'mcq',
        options: [
            'A protocol for social media applications',
            'A decentralized communication protocol where nodes periodically exchange information with random other nodes, akin to the spread of gossip or a virus',
            'A secure chat protocol',
            'A formal protocol for server maintenance'
        ],
        answer: 'A decentralized communication protocol where nodes periodically exchange information with random other nodes, akin to the spread of gossip or a virus',
        explanation: 'Gossip protocols are robust and scalable, used for state dissemination and service discovery in systems like Cassandra.'
    },
    {
        id: 735,
        testId: 9,
        difficulty: 'expert',
        question: "What does 'I' in 'ACID' stand for?",
        type: 'mcq',
        options: ['Integrity', 'Isolation', 'Immutability', 'Idempotency'],
        answer: 'Isolation',
        explanation: 'Isolation ensures that concurrent transactions do not interfere with each other, making them appear to run serially.'
    },
    {
        id: 736,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'Log-Structured Merge-Tree' (LSM-Tree)?",
        type: 'mcq',
        options: [
            'A data structure for storing logs',
            'A data structure optimized for write-heavy workloads by appending writes to an in-memory table and flushing to disk sequentially',
            'A visualization of a Git log',
            'A binary tree for text'
        ],
        answer: 'A data structure optimized for write-heavy workloads by appending writes to an in-memory table and flushing to disk sequentially',
        explanation: 'LSM-Trees are the foundation of many NoSQL databases like RocksDB and Cassandra.'
    },
    {
        id: 737,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'optimistic locking'?",
        type: 'mcq',
        options: [
            'A locking strategy that is always successful',
            'A strategy that assumes conflicts are rare, proceeding without locks but checking for conflicts (e.g., via a version number) before committing',
            'A strategy that locks resources before use, assuming conflicts are likely',
            'A database feature that is not recommended'
        ],
        answer: 'A strategy that assumes conflicts are rare, proceeding without locks but checking for conflicts (e.g., via a version number) before committing',
        explanation: 'It prioritizes concurrency over strict consistency, rolling back a transaction if a conflict is detected.'
    },
    {
        id: 738,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'tail latency'?",
        type: 'mcq',
        options: [
            'The latency of the final packet in a request',
            'A measure of the latency for the slowest percentage of requests (e.g., p99)',
            'The average latency',
            'The time it takes for a log message to appear'
        ],
        answer: 'A measure of the latency for the slowest percentage of requests (e.g., p99)',
        explanation: 'Tail latency is a critical metric in microservices, as a single user request can be affected by the slowest of many internal calls.'
    },
    {
        id: 739,
        testId: 9,
        difficulty: 'expert',
        question: "What is the primary role of 'etcd' in a Kubernetes cluster?",
        type: 'mcq',
        options: [
            'To run user applications',
            'To act as the primary, consistent key-value store for all cluster data and state',
            'To manage networking between pods',
            'To schedule pods onto nodes'
        ],
        answer: 'To act as the primary, consistent key-value store for all cluster data and state',
        explanation: 'etcd is the "brain" of the Kubernetes control plane, storing the desired state of the entire cluster.'
    },
    {
        id: 740,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Webpack Module Federation'?",
        type: 'mcq',
        options: [
            'A way to manage different versions of a dependency',
            'A feature that allows a JavaScript application to dynamically load code from another, separately compiled application at runtime',
            'A security policy for JavaScript modules',
            'A tool for federated learning'
        ],
        answer: 'A feature that allows a JavaScript application to dynamically load code from another, separately compiled application at runtime',
        explanation: 'It is a key technology for building 'micro-frontend' architectures.'
    },
    {
        id: 741,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'readiness' probe in Kubernetes?",
        type: 'mcq',
        options: [
            'It checks if a container is still alive and restarts it if not',
            'It determines if a container is ready to start accepting traffic',
            'It checks if the Kubernetes cluster is ready',
            'It reads the logs from a container'
        ],
        answer: 'It determines if a container is ready to start accepting traffic',
        explanation: 'If a readiness probe fails, the container is not sent any traffic until it passes again. This is different from a liveness probe, which restarts the container.'
    },
    {
        id: 742,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'HTTP Strict Transport Security' (HSTS)?",
        type: 'mcq',
        options: [
            'A very strict form of HTTP',
            'A security policy mechanism that tells browsers to only interact with a site using HTTPS connections',
            'An encryption algorithm',
            'A firewall rule'
        ],
        answer: 'A security policy mechanism that tells browsers to only interact with a site using HTTPS connections',
        explanation: 'HSTS helps to prevent protocol downgrade attacks and cookie hijacking.'
    },
    {
        id: 743,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'null-coalescing' operator (`??`) in JavaScript?",
        type: 'mcq',
        options: [
            'It returns the right-hand side operand when the left-hand side operand is `null` or `undefined`, and otherwise returns the left-hand side operand',
            'It is the same as the logical OR (`||`) operator',
            'It checks if a value is null',
            'It converts a value to null'
        ],
        answer: 'It returns the right-hand side operand when the left-hand side operand is `null` or `undefined`, and otherwise returns the left-hand side operand',
        explanation: 'It is different from `||` because `||` returns the right-hand side for any "falsy" value (like `0`, `""`, `false`), not just `null` or `undefined`.'
    },
    {
        id: 744,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'PWA' (Progressive Web App)?",
        type: 'mcq',
        options: [
            'A very fast website',
            'A web application that uses modern web capabilities (like service workers) to deliver an app-like experience to users',
            'A mobile app built with web technologies',
            'A type of server application'
        ],
        answer: 'A web application that uses modern web capabilities (like service workers) to deliver an app-like experience to users',
        explanation: 'Key features of PWAs include being installable, working offline, and offering push notifications.'
    },
    {
        id: 745,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Brotli'?",
        type: 'mcq',
        options: [
            'A JavaScript framework',
            'A generic-purpose lossless compression algorithm that offers even better compression ratios than Gzip',
            'A type of bread',
            'A security protocol'
        ],
        answer: 'A generic-purpose lossless compression algorithm that offers even better compression ratios than Gzip',
        explanation: 'Brotli is widely supported by modern browsers and is a preferred compression method for web assets.'
    },
    {
        id: 746,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'Shadow DOM'?",
        type: 'mcq',
        options: [
            'A dark theme for the DOM',
            'A browser technology for encapsulating the internal structure and style of a web component, preventing styles from leaking in or out',
            'A virtual representation of the DOM',
            'A hidden section of a web page'
        ],
        answer: 'A browser technology for encapsulating the internal structure and style of a web component, preventing styles from leaking in or out',
        explanation: 'It is a key part of the Web Components standard and allows for creating truly reusable, encapsulated UI components.'
    },
    {
        id: 747,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'memoization'?",
        type: 'mcq',
        options: [
            'A memory management technique',
            'An optimization technique that caches the results of expensive function calls to avoid re-computation when the same inputs occur again',
            'A way to write memos in code',
            'A debugging process'
        ],
        answer: 'An optimization technique that caches the results of expensive function calls to avoid re-computation when the same inputs occur again',
        explanation: 'React\'s `useMemo` and `useCallback` hooks are examples of memoization.'
    },
    {
        id: 748,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'semaphore' in concurrent programming?",
        type: 'mcq',
        options: [
            'A type of network signal',
            'A synchronization primitive that controls access to a shared resource through the use of a counter',
            'A database object',
            'A flag used in code'
        ],
        answer: 'A synchronization primitive that controls access to a shared resource through the use of a counter',
        explanation: 'A semaphore can be used to allow a fixed number of threads to access a resource, whereas a mutex allows only one.'
    },
    {
        id: 749,
        testId: 9,
        difficulty: 'expert',
        question: "What does `git cherry-pick` do?",
        type: 'mcq',
        options: [
            'It merges a branch',
            'It deletes a commit',
            'It applies a specific commit from one branch onto another branch',
            'It reverts a commit'
        ],
        answer: 'It applies a specific commit from one branch onto another branch',
        explanation: 'It\'s useful for applying a hotfix to a release branch without merging the entire feature branch.'
    },
    {
        id: 750,
        testId: 9,
        difficulty: 'expert',
        question: "What is the difference between `Array.prototype.map` and `Array.prototype.forEach`?",
        type: 'mcq',
        options: [
            'There is no difference',
            '`map` returns a new array with the results of the callback function, while `forEach` executes a function for each element but does not return a new array',
            '`forEach` is faster than `map`',
            '`map` can modify the original array, while `forEach` cannot'
        ],
        answer: '`map` returns a new array with the results of the callback function, while `forEach` executes a function for each element but does not return a new array',
        explanation: 'Use `map` when you want to transform an array into a new one. Use `forEach` when you just want to iterate and perform a side effect.'
    },
    {
        id: 751,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'debouncing'?",
        type: 'mcq',
        options: [
            'A technique to ensure a function is called at a regular interval',
            'A technique to group a sequence of calls to a function into a single call after a certain period of inactivity',
            'A way to remove bounce from a web page',
            'A CSS animation effect'
        ],
        answer: 'A technique to group a sequence of calls to a function into a single call after a certain period of inactivity',
        explanation: 'Debouncing is commonly used for handling user input, such as in a search-as-you-type field.'
    },
    {
        id: 752,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'throttling'?",
        type: 'mcq',
        options: [
            'The same as debouncing',
            'A technique to guarantee that a function is executed at most once per specified time period',
            'A way to slow down a server',
            'A network security feature'
        ],
        answer: 'A technique to guarantee that a function is executed at most once per specified time period',
        explanation: 'Throttling is useful for rate-limiting events that fire rapidly, such as scroll or resize events.'
    },
    {
        id: 753,
        testId: 9,
        difficulty: 'expert',
        question: "What is the purpose of the `indexedDB` API?",
        type: 'mcq',
        options: [
            'To index a website for search engines',
            'To provide a large, transactional, client-side database for web applications',
            'To speed up server-side database queries',
            'To manage CSS indexes'
        ],
        answer: 'To provide a large, transactional, client-side database for web applications',
        explanation: 'IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs, and is essential for offline-first applications.'
    },
    {
        id: 754,
        testId: 9,
        difficulty: 'expert',
        question: "What is the primary advantage of using 'CSS Grid' over 'Flexbox'?",
        type: 'mcq',
        options: [
            'Grid is better for one-dimensional layouts',
            'Grid is designed for two-dimensional layouts (rows and columns), providing more powerful and direct control over the overall page layout',
            'Grid has better browser support',
            'Grid is simpler to use for all cases'
        ],
        answer: 'Grid is designed for two-dimensional layouts (rows and columns), providing more powerful and direct control over the overall page layout',
        explanation: 'Flexbox excels at one-dimensional layout (either a row or a column), while Grid excels at two-dimensional layout.'
    },
    {
        id: 755,
        testId: 9,
        difficulty: 'expert',
        question: "What is `Promise.race()` used for?",
        type: 'mcq',
        options: [
            'To run all promises and get all results',
            'To return a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects',
            'To create a race between two functions',
            'To cancel a promise'
        ],
        answer: 'To return a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects',
        explanation: 'It is useful when you want to get the result from the fastest of several asynchronous operations, such as timing out a request.'
    },
    {
        id: 756,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'A/B testing'?",
        type: 'mcq',
        options: [
            'A type of unit test',
            'A method of comparing two versions of a webpage or app against each other to determine which one performs better',
            'A security testing method',
            'A database testing strategy'
        ],
        answer: 'A method of comparing two versions of a webpage or app against each other to determine which one performs better',
        explanation: 'A/B testing is a data-driven approach to optimize user experience and conversion rates.'
    },
    {
        id: 757,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'WebRTC' used for?",
        type: 'mcq',
        options: [
            'To render 3D graphics',
            'To enable real-time, peer-to-peer communication (voice, video, data) directly between browsers',
            'To build web servers',
            'To manage state in frontend applications'
        ],
        answer: 'To enable real-time, peer-to-peer communication (voice, video, data) directly between browsers',
        explanation: 'WebRTC is the technology behind most modern video conferencing applications on the web.'
    },
    {
        id: 758,
        testId: 9,
        difficulty: 'expert',
        question: "Explain what a 'service mesh' is and the problems it solves in a microservices architecture.",
        type: 'subjective',
        answer: "A service mesh is a dedicated infrastructure layer for managing service-to-service communication. It works by injecting a 'sidecar' proxy alongside each service. This proxy intercepts all network traffic, handling cross-cutting concerns like service discovery, load balancing, security (mTLS), traffic control (retries, circuit breaking), and observability (metrics, traces). This abstracts away complex networking logic from the application code, making services simpler, more resilient, and more secure.",
        explanation: "Popular service meshes include Istio and Linkerd."
    },
    {
        id: 759,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'eventual consistency' and in what type of system is it commonly found?",
        type: 'subjective',
        answer: "Eventual consistency is a consistency model used in distributed systems that guarantees that, if no new updates are made, all replicas will eventually converge to the same state. It is commonly found in highly available, partition-tolerant systems (AP systems in the CAP theorem), such as many NoSQL databases like Cassandra and DynamoDB. It prioritizes availability over immediate, strong consistency.",
        explanation: "This model allows for higher availability and better performance at the cost of temporary data inconsistency."
    },
    {
        id: 760,
        testId: 9,
        difficulty: 'expert',
        question: "How does the 'Raft' consensus algorithm work at a high level?",
        type: 'subjective',
        answer: "Raft is a consensus algorithm that works by electing a single leader for a cluster of nodes. The leader is responsible for managing a replicated log. All client requests go to the leader, which appends them to its log and then replicates the log entries to follower nodes. An entry is committed once a majority of nodes have acknowledged it. This leader-based approach ensures that all nodes agree on the same sequence of operations, providing strong consistency and fault tolerance.",
        explanation: "It was designed to be more understandable than its predecessor, Paxos."
    },
    {
        id: 761,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Infrastructure as a Service' (IaaS), 'Platform as a Service' (PaaS), and 'Software as a Service' (SaaS)?",
        type: 'subjective',
        answer: "These are the three main models of cloud computing. IaaS (e.g., AWS EC2) provides fundamental resources like virtual machines and storage; you manage the OS and applications. PaaS (e.g., Heroku) provides a platform for you to deploy and manage your applications without worrying about the underlying infrastructure. SaaS (e.g., Google Workspace) provides a complete software application that you use directly.",
        explanation: "Each model represents a different level of abstraction and shared responsibility."
    },
    {
        id: 762,
        testId: 9,
        difficulty: 'expert',
        question: "Explain the 'publish-subscribe' (pub/sub) pattern and its advantages.",
        type: 'subjective',
        answer: "Pub/sub is a messaging pattern where senders (publishers) do not send messages directly to receivers (subscribers). Instead, they publish messages to topics or channels. Subscribers express interest in topics and receive all messages published to them. The main advantage is decoupling; publishers and subscribers do not need to know about each other. This improves scalability, flexibility, and resilience.",
        explanation: "Systems like Apache Kafka and Google Cloud Pub/Sub are built on this pattern."
    },
    {
        id: 763,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'dependency inversion principle' (the 'D' in SOLID)?",
        type: 'subjective',
        answer: "The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions (e.g., interfaces). Furthermore, abstractions should not depend on details; details should depend on abstractions. This inverts the typical flow of dependency, leading to more decoupled and flexible systems where implementations can be easily swapped.",
        explanation: "This is a key principle for creating modular and maintainable object-oriented software."
    },
    {
        id: 764,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'end-to-end encryption' (E2EE) and what security guarantee does it provide?",
        type: 'subjective',
        answer: "E2EE is a system where only the communicating users can read the messages. It ensures that the message is encrypted on the sender's device and can only be decrypted on the recipient's device. This provides the strongest guarantee of confidentiality, as it prevents eavesdroppers, including the service provider itself, from accessing the message content.",
        explanation: "Popular messaging apps like Signal and WhatsApp use E2EE."
    },
    {
        id: 765,
        testId: 9,
        difficulty: 'expert',
        question: "How does 'tree shaking' work in a JavaScript bundler?",
        type: 'subjective',
        answer: "Tree shaking is a dead code elimination technique. It works by leveraging the static structure of ES modules (`import` and `export`). The bundler starts at the application's entry point, analyzes the dependency graph, and identifies which exports from each module are actually being imported and used. Any code that is not part of this 'used' graph is considered dead code and is eliminated from the final bundle.",
        explanation: "This can significantly reduce the size of the JavaScript delivered to the client."
    },
    {
        id: 766,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'memory leak' in JavaScript and what is a common cause?",
        type: 'subjective',
        answer: "A memory leak is a situation where a program fails to release memory that it no longer needs, leading to a gradual loss of available memory and potential application crashes. A common cause in JavaScript is a dangling event listener. If you add an event listener to a DOM element and then remove that element without removing the listener, the listener and any variables it has closed over will remain in memory.",
        explanation: "Proper cleanup in lifecycle methods or `useEffect` return functions is crucial to prevent leaks."
    },
    {
        id: 767,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'HTTP/3' and what is its main advantage over HTTP/2?",
        type: 'subjective',
        answer: "HTTP/3 is the third major version of the HTTP protocol. Its main advantage is that it uses QUIC, a new transport protocol built on UDP, instead of TCP. This eliminates head-of-line blocking at the transport layer. In HTTP/2, if one TCP packet is lost, all streams on that connection are blocked. In HTTP/3, streams are independent, so only the affected stream is blocked. This provides a significant performance improvement, especially on unreliable networks.",
        explanation: "QUIC also features a faster connection setup (handshake)."
    },
    {
        id: 768,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'Domain-Driven Design' (DDD)?",
        type: 'subjective',
        answer: "DDD is an approach to software development that focuses on creating a rich, expressive model of the core business domain. It emphasizes collaboration between technical and domain experts to create a 'ubiquitous language' that is shared by all and used in the code. This helps to manage complexity and ensures that the software accurately reflects and serves the business's needs. Key patterns include Bounded Contexts, Aggregates, and Entities.",
        explanation: "It is particularly well-suited for large, complex enterprise systems."
    },
    {
        id: 769,
        testId: 9,
        difficulty: 'expert',
        question: "Explain how you would implement a 'rate limiter' for an API.",
        type: 'subjective',
        answer: "A common approach is the token bucket algorithm, implemented using a fast in-memory store like Redis. Each user (or IP address) has a key in Redis that stores a token count and a timestamp. For each request, you atomically check if tokens are available. If so, you decrement the count and process the request. Tokens are replenished at a fixed rate. If no tokens are available, you reject the request with a 429 Too Many Requests status code.",
        explanation: "Rate limiting is crucial for preventing abuse and ensuring API stability."
    },
    {
        id: 770,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'distributed hash table' (DHT)?",
        type: 'subjective',
        answer: "A DHT is a decentralized distributed system that provides a lookup service similar to a hash table. Key-value pairs are distributed across a network of participating nodes. It uses a consistent hashing algorithm to map a key to a specific node responsible for storing it. This allows any node in the network to efficiently locate the value for any given key without a central coordinator.",
        explanation: "DHTs are a core component of many peer-to-peer systems."
    },
    {
        id: 771,
        testId: 9,
        difficulty: 'expert',
        question: "What is the difference between a 'canary release' and a 'blue-green deployment'?",
        type: 'subjective',
        answer: "In a blue-green deployment, you have two identical production environments and switch all traffic at once to the new version. In a canary release, you gradually roll out the new version to a small subset of users. You monitor the 'canary' group for errors and performance issues. If it's stable, you gradually increase the traffic to the new version until all users are on it. A canary release is generally lower risk as it exposes fewer users to potential bugs.",
        explanation: "Both are strategies for reducing the risk of new deployments."
    },
    {
        id: 772,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'CQRS' and why would you use it?",
        type: 'subjective',
        answer: "CQRS (Command Query Responsibility Segregation) is a pattern that separates the models for updating data (Commands) from the models for reading data (Queries). You would use it to allow for independent scaling and optimization of the read and write sides of an application. For example, your write database could be highly normalized for consistency, while your read database could be a denormalized view optimized for fast, complex queries.",
        explanation: "It can add complexity but is very powerful for high-performance systems."
    },
    {
        id: 773,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'Kubernetes Operator'?",
        type: 'subjective',
        answer: "An Operator is a method of packaging, deploying, and managing a Kubernetes application. It is a custom controller that uses the Kubernetes API to manage a complex, stateful application (like a database) on behalf of a user. It encodes the operational knowledge of a human operator into software, automating tasks like backups, upgrades, and failure recovery.",
        explanation: "Operators make it possible to run complex stateful applications on Kubernetes in a cloud-native way."
    },
    {
        id: 774,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'cache stampede'?",
        type: 'subjective',
        answer: "A cache stampede (or dog-piling) occurs when a popular, cached item expires, and a large number of concurrent requests for that item all miss the cache at the same time. This causes all of them to try to fetch the item from the origin (e.g., a database) simultaneously, which can overwhelm the origin. It can be prevented with techniques like locking (only one process fetches the data) or by using a stale-while-revalidate caching strategy.",
        explanation: "It is a common issue in high-traffic systems that rely heavily on caching."
    },
    {
        id: 775,
        testId: 9,
        difficulty: 'expert',
        question: "How does 'backpressure' work in a reactive stream?",
        type: 'subjective',
        answer: "Backpressure is a flow control mechanism. In a reactive stream, the consumer (Subscriber) can signal to the producer (Publisher) how many items it is ready to process. The producer will then only emit up to that many items. As the consumer processes items, it can request more. This prevents a fast producer from overwhelming a slow consumer, avoiding buffer overflows and making the system more resilient.",
        explanation: "It's a key feature of reactive stream specifications like Reactive Streams or RxJS."
    },
    // Test 10: 50 Questions (30 MCQ, 20 Subjective)
    {
        id: 776,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Actor Model' of concurrency?",
        type: 'mcq',
        options: [
            'A design pattern for UI components',
            'A mathematical model of concurrent computation where 'actors' are the universal primitives, communicating through asynchronous messages',
            'A specific implementation of multithreading in Java',
            'A client-server networking model'
        ],
        answer: 'A mathematical model of concurrent computation where \'actors\' are the universal primitives, communicating through asynchronous messages',
        explanation: 'The Actor Model avoids shared state and locks, making it easier to build highly concurrent and fault-tolerant systems. Erlang and Akka are famous examples.'
    },
    {
        id: 777,
        testId: 10,
        difficulty: 'expert',
        question: "What problem does a 'service mesh' like Istio or Linkerd solve?",
        type: 'mcq',
        options: [
            'It helps with database migrations',
            'It provides a dedicated infrastructure layer to manage service-to-service communication, handling concerns like traffic management, security, and observability',
            'It is a tool for frontend state management',
            'It automates CI/CD pipelines'
        ],
        answer: 'It provides a dedicated infrastructure layer to manage service-to-service communication, handling concerns like traffic management, security, and observability',
        explanation: 'A service mesh abstracts the complexity of network communication away from the application code itself.'
    },
    {
        id: 778,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary function of a 'Bloom Filter'?",
        type: 'mcq',
        options: [
            'To sort data efficiently',
            'To encrypt data with perfect security',
            'To be a space-efficient, probabilistic data structure used to test whether an element is a member of a set, with a possibility of false positives',
            'To guarantee the uniqueness of elements in a set'
        ],
        answer: 'To be a space-efficient, probabilistic data structure used to test whether an element is a member of a set, with a possibility of false positives',
        explanation: 'It\'s used when a small chance of a false positive is acceptable in exchange for significant memory savings, e.g., checking for already-seen items in a web crawler.'
    },
    {
        id: 779,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS)?",
        type: 'mcq',
        options: [
            'A version of TLS with multiple layers of encryption',
            'A TLS handshake where only the client authenticates the server',
            'A process where both the client and server present certificates to authenticate each other',
            'A tool for managing TLS certificates'
        ],
        answer: 'A process where both the client and server present certificates to authenticate each other',
        explanation: 'mTLS is crucial for zero-trust networks and securing service-to-service communication.'
    },
    {
        id: 780,
        testId: 10,
        difficulty: 'expert',
        question: "Which of the following best describes 'eventual consistency'?",
        type: 'mcq',
        options: [
            'The system is always consistent',
            'A consistency model where, given no new updates, all replicas of a piece of data will eventually converge to the same value',
            'The system will eventually become inconsistent',
            'A model where data is only consistent during a specific event'
        ],
        answer: 'A consistency model where, given no new updates, all replicas of a piece of data will eventually converge to the same value',
        explanation: 'This model is often chosen in distributed systems that prioritize high availability and partition tolerance over strong consistency.'
    },
    {
        id: 781,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'distributed hash table' (DHT)?",
        type: 'mcq',
        options: [
            'A centralized database that uses hashing for keys',
            'A data structure used only in C++',
            'A decentralized distributed system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes',
            'A hashing algorithm for passwords'
        ],
        answer: 'A decentralized distributed system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes',
        explanation: 'DHTs are a core component of many peer-to-peer systems, like BitTorrent.'
    },
    {
        id: 782,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Strangler Fig' pattern used for?",
        type: 'mcq',
        options: [
            'To debug memory leaks',
            'To incrementally migrate a legacy monolithic application to a microservices architecture',
            'To optimize database queries',
            'To design a user interface'
        ],
        answer: 'To incrementally migrate a legacy monolithic application to a microservices architecture',
        explanation: 'It involves gradually replacing pieces of the monolith with new services, routing traffic to them until the monolith is 'strangled' and can be retired.'
    },
    {
        id: 783,
        testId: 10,
        difficulty: 'expert',
        question: "What does the 'L' in the SOLID principles stand for?",
        type: 'mcq',
        options: [
            'Layered Architecture Principle',
            'Low Coupling Principle',
            'Liskov Substitution Principle',
            'Loose Typing Principle'
        ],
        answer: 'Liskov Substitution Principle',
        explanation: 'This principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.'
    },
    {
        id: 784,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'golden signal' for monitoring systems, according to Google's SRE book?",
        type: 'mcq',
        options: [
            'CPU Usage',
            'Latency',
            'Profitability',
            'Number of Deployments'
        ],
        answer: 'Latency',
        explanation: 'The four golden signals are Latency, Traffic, Errors, and Saturation. These provide a high-level overview of a service\'s health.'
    },
    {
        id: 785,
        testId: 10,
        difficulty: 'expert',
        question: "In CSS, what is the 'BFC' (Block Formatting Context)?",
        type: 'mcq',
        options: [
            'A block-level font container',
            'A part of a visual CSS rendering of a web page in which block-level boxes are laid out. It is an area that contains floats.',
            'A CSS variable',
            'A naming convention'
        ],
        answer: 'A part of a visual CSS rendering of a web page in which block-level boxes are laid out. It is an area that contains floats.',
        explanation: 'Creating a new BFC (e.g., with `display: flow-root`) is a way to solve layout issues like collapsing margins or containing floating elements.'
    },
    {
        id: 786,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary difference between `git merge` and `git rebase`?",
        type: 'mcq',
        options: [
            'They do the same thing',
            '`git merge` creates a new merge commit, preserving branch history, while `git rebase` rewrites commit history to create a linear sequence',
            '`git rebase` is safer than `git merge`',
            '`git merge` is for local branches, `git rebase` is for remote branches'
        ],
        answer: '`git merge` creates a new merge commit, preserving branch history, while `git rebase` rewrites commit history to create a linear sequence',
        explanation: 'Rebase results in a cleaner, linear history, but should not be used on public branches that others are working on.'
    },
    {
        id: 787,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'QUIC' and what is its role in HTTP/3?",
        type: 'mcq',
        options: [
            'A compression algorithm',
            'A new transport layer network protocol that serves as the foundation for HTTP/3, reducing latency and solving head-of-line blocking',
            'A security protocol',
            'A JavaScript framework'
        ],
        answer: 'A new transport layer network protocol that serves as the foundation for HTTP/3, reducing latency and solving head-of-line blocking',
        explanation: 'QUIC is built on top of UDP and is designed to make HTTP traffic faster and more reliable, especially on lossy networks.'
    },
    {
        id: 788,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        type: 'mcq',
        options: [
            'A type of database',
            'A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result',
            'An encryption algorithm',
            'A sorting algorithm'
        ],
        answer: 'A data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination, and where it is always mathematically possible to resolve any inconsistencies that result',
        explanation: 'CRDTs are crucial for building collaborative, real-time applications like Google Docs.'
    },
    {
        id: 789,
        testId: 10,
        difficulty: 'expert',
        question: "What is the purpose of 'tree shaking' in a modern JavaScript bundler?",
        type: 'mcq',
        options: [
            'To visualize the component tree',
            'To eliminate dead (unused) code from the final bundle by analyzing static `import` and `export` statements',
            'To reformat the code according to style guidelines',
            'To check for security vulnerabilities'
        ],
        answer: 'To eliminate dead (unused) code from the final bundle by analyzing static `import` and `export` statements',
        explanation: 'Tree shaking is a critical optimization for reducing the size of JavaScript bundles and improving application load times.'
    },
    {
        id: 790,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'tailwind CSS' and how does it differ from traditional CSS frameworks?",
        type: 'mcq',
        options: [
            'A component-based framework like Bootstrap',
            'A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup',
            'A CSS preprocessor like Sass',
            'A JavaScript library for styling'
        ],
        answer: 'A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup',
        explanation: 'Instead of pre-styled components like `.btn`, you compose designs with utilities like `bg-blue-500`, `px-4`, and `rounded`.'
    },
    {
        id: 791,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Server-Sent Events' (SSE)?",
        type: 'mcq',
        options: [
            'A bidirectional communication protocol',
            'A technology where a browser receives automatic updates from a server via a standard HTTP connection (unidirectional)',
            'An alias for WebSockets',
            'A database event system'
        ],
        answer: 'A technology where a browser receives automatic updates from a server via a standard HTTP connection (unidirectional)',
        explanation: 'SSE is simpler than WebSockets and is ideal for scenarios where the client only needs to receive data from the server, like a live news feed.'
    },
    {
        id: 792,
        testId: 10,
        difficulty: 'expert',
        question: "What is the `Same-Origin Policy` (SOP)?",
        type: 'mcq',
        options: [
            'A policy that ensures all servers are in the same data center',
            'A critical web browser security mechanism that restricts how a document or script from one origin can interact with a resource from another origin',
            'A CSS styling rule',
            'A rule for naming variables'
        ],
        answer: 'A critical web browser security mechanism that restricts how a document or script from one origin can interact with a resource from another origin',
        explanation: 'SOP is a cornerstone of web security, preventing malicious sites from reading sensitive data from other sites you may be logged into.'
    },
    {
        id: 793,
        testId: 10,
        difficulty: 'expert',
        question: "What does it mean for an operation to be 'atomic'?",
        type: 'mcq',
        options: [
            'The operation is very small',
            'The operation is part of an atomic bomb',
            'The operation is an indivisible and irreducible series of operations such that either all occur or none occur',
            'The operation is related to nuclear physics'
        ],
        answer: 'The operation is an indivisible and irreducible series of operations such that either all occur or none occur',
        explanation: 'Atomicity is the "A" in ACID, a key property of database transactions.'
    },
    {
        id: 794,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'lambda' function in languages like Python or Java?",
        type: 'mcq',
        options: [
            'A long, detailed function',
            'A small, anonymous function defined with the `lambda` keyword',
            'A function that runs on AWS Lambda',
            'A function used for mathematical calculations only'
        ],
        answer: 'A small, anonymous function defined with the `lambda` keyword',
        explanation: 'Lambda functions are useful for short, simple operations, especially when passed as arguments to higher-order functions.'
    },
    {
        id: 795,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'load balancer' and what are common load balancing algorithms?",
        type: 'mcq',
        options: [
            'A tool to balance the weight of servers',
            'A device that distributes network or application traffic across multiple servers. Common algorithms include Round Robin, Least Connections, and IP Hash.',
            'A database feature',
            'A frontend caching mechanism'
        ],
        answer: 'A device that distributes network or application traffic across multiple servers. Common algorithms include Round Robin, Least Connections, and IP Hash.',
        explanation: 'Load balancers are essential for achieving high availability and scalability.'
    },
    {
        id: 796,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'sharding' in a database context?",
        type: 'mcq',
        options: [
            'A way to encrypt data',
            'A type of horizontal partitioning where data is spread across multiple databases or servers',
            'A backup strategy',
            'A query optimization technique'
        ],
        answer: 'A type of horizontal partitioning where data is spread across multiple databases or servers',
        explanation: 'Sharding is a common technique for scaling out databases to handle massive amounts of data and traffic.'
    },
    {
        id: 797,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'n+1' query problem?",
        type: 'mcq',
        options: [
            'A security vulnerability',
            'A performance issue where an application makes one initial query to retrieve a list of items, and then makes 'n' additional queries to retrieve related data for each item',
            'A mathematical paradox',
            'An error that occurs when `n` is equal to -1'
        ],
        answer: 'A performance issue where an application makes one initial query to retrieve a list of items, and then makes \'n\' additional queries to retrieve related data for each item',
        explanation: 'This is a common performance bottleneck that can usually be solved by 'eager loading' the related data in the initial query.'
    },
    {
        id: 798,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'OAuth 2.0'?",
        type: 'mcq',
        options: [
            'An authentication protocol',
            'An authorization framework that enables a third-party application to obtain limited access to a user\'s resources without exposing their credentials',
            'A type of encryption',
            'A session management library'
        ],
        answer: 'An authorization framework that enables a third-party application to obtain limited access to a user\'s resources without exposing their credentials',
        explanation: 'OAuth 2.0 is the industry standard for delegated authorization.'
    },
    {
        id: 799,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between 'authentication' and 'authorization'?",
        type: 'mcq',
        options: [
            'They are the same thing',
            'Authentication is verifying who a user is, while authorization is determining what they are allowed to do',
            'Authorization happens before authentication',
            'Authentication is for users, authorization is for services'
        ],
        answer: 'Authentication is verifying who a user is, while authorization is determining what they are allowed to do',
        explanation: 'You authenticate to get into the building, but you are authorized to enter only certain rooms.'
    },
    {
        id: 800,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'race condition'?",
        type: 'mcq',
        options: [
            'A bug in a racing game',
            'An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events',
            'A network performance issue',
            'A type of CPU'
        ],
        answer: 'An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events',
        explanation: 'Race conditions are a common and difficult problem in concurrent programming, often leading to corrupted data.'
    },
    {
        id: 801,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'two-phase commit' (2PC)?",
        type: 'mcq',
        options: [
            'A git workflow',
            'A distributed algorithm that coordinates all the processes in a distributed atomic transaction on whether to commit or abort',
            'A deployment strategy',
            'A security protocol'
        ],
        answer: 'A distributed algorithm that coordinates all the processes in a distributed atomic transaction on whether to commit or abort',
        explanation: 'While it guarantees atomicity, 2PC can be slow and is not fault-tolerant if the coordinator fails.'
    },
    {
        id: 802,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'vector clock'?",
        type: 'mcq',
        options: [
            'A physical clock used in vector graphics',
            'A data structure used in distributed systems to determine the partial causal ordering of events',
            'A CSS measurement unit',
            'A machine learning algorithm'
        ],
        answer: 'A data structure used in distributed systems to determine the partial causal ordering of events',
        explanation: 'Vector clocks are a mechanism for detecting causality violations and resolving conflicts in eventually consistent systems.'
    },
    {
        id: 803,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'optimistic locking'?",
        type: 'mcq',
        options: [
            'A locking strategy that is always successful',
            'A strategy that assumes conflicts are rare, proceeding without locks but checking for conflicts (e.g., via a version number) before committing',
            'A strategy that locks resources before use, assuming conflicts are likely',
            'A database feature that is not recommended'
        ],
        answer: 'A strategy that assumes conflicts are rare, proceeding without locks but checking for conflicts (e.g., via a version number) before committing',
        explanation: 'It prioritizes concurrency over strict consistency, rolling back a transaction if a conflict is detected.'
    },
    {
        id: 804,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'tail latency'?",
        type: 'mcq',
        options: [
            'The latency of the final packet in a request',
            'A measure of the latency for the slowest percentage of requests (e.g., p99)',
            'The average latency',
            'The time it takes for a log message to appear'
        ],
        answer: 'A measure of the latency for the slowest percentage of requests (e.g., p99)',
        explanation: 'Tail latency is a critical metric in microservices, as a single user request can be affected by the slowest of many internal calls.'
    },
    {
        id: 805,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary role of 'etcd' in a Kubernetes cluster?",
        type: 'mcq',
        options: [
            'To run user applications',
            'To act as the primary, consistent key-value store for all cluster data and state',
            'To manage networking between pods',
            'To schedule pods onto nodes'
        ],
        answer: 'To act as the primary, consistent key-value store for all cluster data and state',
        explanation: 'etcd is the "brain" of the Kubernetes control plane, storing the desired state of the entire cluster.'
    },
    {
        id: 806,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the 'Saga' pattern for distributed transactions and compare it to two-phase commit.",
        type: 'subjective',
        answer: "A Saga is a sequence of local transactions where each transaction updates a single service and publishes an event to trigger the next one. If a transaction fails, compensating transactions are run to undo the previous steps. Unlike two-phase commit (2PC), which is a blocking protocol that locks resources, Sagas are asynchronous and non-blocking. Sagas are more scalable and resilient but only provide eventual consistency and are more complex to reason about than the strong consistency of 2PC.",
        explanation: "Sagas are a common pattern for achieving transactional guarantees in a microservices architecture."
    },
    {
        id: 807,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Chaos Engineering' and what is its goal?",
        type: 'subjective',
        answer: "Chaos Engineering is the discipline of experimenting on a distributed system in order to build confidence in its capability to withstand turbulent conditions in production. It involves deliberately injecting controlled failures (e.g., killing servers, introducing network latency) to proactively identify and fix weaknesses before they cause user-facing outages. The goal is not to break things, but to reveal hidden problems and improve system resilience.",
        explanation: "It's a proactive approach to improving reliability, famously practiced by Netflix."
    },
    {
        id: 808,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between leader-based and leaderless database replication?",
        type: 'subjective',
        answer: "In leader-based (master-slave) replication, one replica (the leader) handles all write requests and propagates the changes to followers. This ensures strong consistency for reads from the leader but makes the leader a single point of failure. In leaderless replication, any replica can accept writes. This provides higher write availability and fault tolerance, but makes consistency more complex, often relying on quorums and read-repair mechanisms to resolve conflicts and achieve eventual consistency.",
        explanation: "This is a fundamental design trade-off in distributed databases, guided by the CAP theorem."
    },
    {
        id: 809,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS) and in what scenario is it commonly used?",
        type: 'subjective',
        answer: "Mutual TLS is an authentication method where both parties in a connection, the client and the server, authenticate each other's identity using X.509 certificates. This is different from standard TLS where only the client authenticates the server. A common scenario is securing service-to-service communication within a microservices architecture, ensuring that only authorized services can communicate with each other, creating a zero-trust network environment.",
        explanation: "It provides strong, two-way, certificate-based authentication."
    },
    {
        id: 810,
        testId: 10,
        difficulty: 'expert',
        question: "Explain what 'Consistent Hashing' is and why it's important for distributed systems.",
        type: 'subjective',
        answer: "Consistent hashing is a hashing technique where, when a hash table (or cluster of servers) is resized, only a small number of keys need to be remapped. In a distributed system like a cache or database, it means that when a server is added or removed, the number of data items that need to be moved is minimized. This prevents a massive, system-wide reshuffling of data, making the system much more scalable and stable during scaling events.",
        explanation: "It's a key algorithm for distributed caches like Redis and databases like Cassandra."
    },
    {
        id: 811,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type) and why is it useful?",
        type: 'subjective',
        answer: "A CRDT is a data structure that can be replicated across multiple computers and updated independently and concurrently, with a mathematical guarantee that any inconsistencies can always be resolved automatically. This is useful for building real-time collaborative applications (like Google Docs or Figma) where multiple users are making changes simultaneously. CRDTs merge concurrent changes without requiring complex conflict resolution logic from the developer.",
        explanation: "They are a powerful tool for achieving eventual consistency in collaborative software."
    },
    {
        id: 812,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'tail latency' and why is it a more important metric than average latency in many systems?",
        type: 'subjective',
        answer: "Tail latency refers to the latency of the slowest requests, typically the 99th or 99.9th percentile. It is more important than average latency in microservice architectures because a single user-facing operation can involve calls to dozens or hundreds of backend services. The user's experience is only as fast as the slowest of these dependencies. A good average latency can hide a poor tail latency that affects a significant number of user requests, so optimizing for the tail is crucial for a good user experience.",
        explanation: "Improving the P99 latency has a much greater impact on user experience than improving the average."
    },
    {
        id: 813,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'subjective',
        answer: "CQRS is an architectural pattern that separates the models for updating data (Commands) from the models for reading data (Queries). This allows the read and write sides of an application to be scaled and optimized independently. For example, the write model might be a normalized relational database, while the read model could be a denormalized view or a full-text search index, optimized for fast queries.",
        explanation: "CQRS is often used with Event Sourcing to build highly scalable and flexible systems."
    },
    {
        id: 814,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the 'Strangler Fig' pattern.",
        type: 'subjective',
        answer: "The Strangler Fig pattern is a strategy for incrementally migrating a legacy monolithic application. It involves placing a proxy in front of the monolith that intercepts requests. New functionality is built as separate microservices. The proxy is configured to route calls for the new functionality to the new services, while everything else continues to go to the monolith. Over time, more functionality is 'strangled' from the monolith until it can be safely retired.",
        explanation: "It's a gradual and lower-risk approach to modernization than a 'big bang' rewrite."
    },
    {
        id: 815,
        testId: 10,
        difficulty: 'expert',
        question: "How does 'QUIC' improve upon TCP for use in HTTP/3?",
        type: 'subjective',
        answer: "QUIC, which runs on top of UDP, was designed to solve some of TCP's limitations. Its key improvement is that it eliminates head-of-line blocking at the transport layer. In TCP, if one packet is lost, all streams are blocked waiting for it to be retransmitted. In QUIC, streams are independent, so only the affected stream is blocked. This provides a significant performance improvement, especially on lossy networks.",
        explanation: "QUIC also features a faster connection setup (handshake)."
    },
    {
        id: 816,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'eBPF' and what are its use cases?",
        type: 'subjective',
        answer: "eBPF (Extended Berkeley Packet Filter) is a technology that allows you to run sandboxed programs inside the Linux kernel without changing the kernel code. It provides a safe and efficient way to hook into kernel functions. Its use cases are extensive and include high-performance networking (e.g., loading balancing, DDoS mitigation), advanced observability (e.g., tracing system calls), and security monitoring.",
        explanation: "eBPF is a powerful, revolutionary technology for kernel-level programmability."
    },
    {
        id: 817,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'cache stampede' and how can you prevent it?",
        type: 'subjective',
        answer: "A cache stampede occurs when a popular, cached item expires, and a large number of concurrent requests for that item all miss the cache at the same time. This causes all of them to try to fetch the item from the origin (e.g., a database) simultaneously, which can overwhelm the origin. It can be prevented using techniques like a mutex or lock, where only one process fetches the data while others wait, or by using stale-while-revalidate strategies.",
        explanation: "It is a common issue in high-traffic systems that rely heavily on caching."
    },
    {
        id: 818,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'observability' and its three pillars?",
        type: 'subjective',
        answer: "Observability is the ability to understand the internal state of a system by examining its external outputs. It's about being able to ask arbitrary questions about your system's behavior without having to ship new code. Its three pillars are: 1) **Logs:** Detailed, timestamped records of discrete events. 2) **Metrics:** Aggregated, numerical data over time (e.g., request count, CPU usage). 3) **Traces:** A representation of a single request as it flows through all the services in a distributed system.",
        explanation: "Observability is crucial for debugging and understanding the performance of modern, complex systems."
    },
    {
        id: 819,
        testId: 10,
        difficulty: 'expert',
        question: "How do you handle secrets management in a modern application?",
        type: 'subjective',
        answer: "Secrets like API keys and database credentials should never be stored in source code. Modern best practices involve using a dedicated secrets management tool like HashiCorp Vault, AWS Secrets Manager, or Google Secret Manager. These tools provide centralized storage, fine-grained access control, auditing, and dynamic secret rotation. Applications retrieve secrets at runtime through a secure API call or via injected environment variables in a secure environment like Kubernetes.",
        explanation: "Proper secrets management is a critical aspect of application security."
    },
    {
        id: 820,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'blue-green deployment'?",
        type: 'subjective',
        answer: "Blue-green deployment is a release strategy that reduces downtime and risk. It involves maintaining two identical production environments: 'blue' (the current live version) and 'green' (the new version). The new version is deployed and tested in the green environment. Once it's fully verified, the router is switched to direct all live traffic to the green environment. The blue environment is kept on standby for a quick rollback if needed. This allows for zero-downtime releases.",
        explanation: "The main trade-off is the cost of maintaining double the infrastructure."
    },
    {
        id: 821,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Test-Driven Development' (TDD)?",
        type: 'subjective',
        answer: "TDD is a software development process that follows a short, repetitive cycle: 1) **Red:** Write a failing automated test case that defines a new function or improvement. 2) **Green:** Write the minimum amount of code necessary to make the test pass. 3) **Refactor:** Clean up the new code to improve its design and quality, ensuring all tests continue to pass. This process encourages simple design and ensures high test coverage from the start.",
        explanation: "The core mantra of TDD is 'Red, Green, Refactor'."
    },
    {
        id: 822,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'mTLS' (Mutual TLS) and where is it used?",
        type: 'subjective',
        answer: "Mutual TLS is an authentication method where both parties in a connection, the client and the server, authenticate each other's identity using X.509 certificates. This is different from standard TLS where only the client authenticates the server. mTLS is commonly used to secure service-to-service communication within a trusted environment, like a microservices architecture managed by a service mesh, to ensure that only authorized services can communicate with each other.",
        explanation: "It provides strong, certificate-based, two-way authentication."
    },
    {
        id: 823,
        testId: 10,
        difficulty: 'expert',
        question: "How do 'WebSockets' differ from traditional 'HTTP' requests?",
        type: 'subjective',
        answer: "HTTP is a unidirectional, request-response protocol. The client sends a request, and the server sends a response. WebSockets provide a full-duplex, bidirectional communication channel over a single, long-lived TCP connection. After an initial handshake, either the client or the server can send data at any time. This makes WebSockets ideal for real-time applications like live chat, online gaming, and financial data streams, avoiding the overhead of repeated HTTP polling.",
        explanation: "HTTP is like sending letters, while WebSockets are like having a continuous phone call."
    },
    {
        id: 824,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between a 'container' (like Docker) and a 'virtual machine' (VM)?",
        type: 'subjective',
        answer: "A VM virtualizes the hardware, running a full guest operating system on top of a hypervisor. A container virtualizes the operating system, allowing multiple containers to run on a single host OS kernel. This makes containers much more lightweight, faster to start, and less resource-intensive than VMs. VMs provide stronger isolation, while containers offer better efficiency and portability.",
        explanation: "Containers are like apartments in a building (sharing plumbing), while VMs are like separate houses on a street (each with its own plumbing)."
    },
    {
        id: 825,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the 'Saga' pattern for distributed transactions and compare it to two-phase commit.",
        type: 'subjective',
        answer: "A Saga is a sequence of local transactions where each transaction updates a single service and publishes an event to trigger the next one. If a transaction fails, compensating transactions are run to undo the previous steps. Unlike two-phase commit (2PC), which is a blocking protocol that locks resources, Sagas are asynchronous and non-blocking. Sagas are more scalable and resilient but only provide eventual consistency and are more complex to reason about than the strong consistency of 2PC.",
        explanation: "Sagas are a common pattern for achieving transactional guarantees in a microservices architecture."
    }
  ],
  'c-plus-plus': [
    {
      id: 826,
      testId: 1,
      difficulty: 'easy',
      question: "Which keyword is used to define a variable that cannot be modified in C++?",
      type: 'mcq',
      options: ["static", "final", "const", "let"],
      answer: "const",
      explanation: "The `const` keyword specifies that a variable's value is constant and tells the compiler to prevent the programmer from modifying it."
    },
    {
        id: 827,
        testId: 1,
        difficulty: 'easy',
        question: "How do you declare a pointer in C++?",
        type: 'mcq',
        options: [
            "int* p;",
            "pointer p;",
            "int& p;",
            "int p[];"
        ],
        answer: "int* p;",
        explanation: "An asterisk (`*`) is used after the data type to declare a pointer, which stores the memory address of another variable."
    },
    {
        id: 828,
        testId: 1,
        difficulty: 'easy',
        question: "What is the purpose of the `#include` directive in C++?",
        type: 'mcq',
        options: [
            "To compile the code",
            "To declare a variable",
            "To include the contents of another file, like a header file, into the current source file",
            "To define a function"
        ],
        answer: "To include the contents of another file, like a header file, into the current source file",
        explanation: "It's a preprocessor directive that is used to include standard library headers (e.g., `<iostream>`) or custom header files."
    },
    {
        id: 829,
        testId: 1,
        difficulty: 'easy',
        question: "What is the difference between a class and an object in C++?",
        type: 'subjective',
        answer: "A class is a blueprint or a template for creating objects. It defines a set of properties (data members) and methods (member functions). An object is an instance of a class. It is a concrete entity created from the class blueprint, with its own state and behavior.",
        explanation: "A class is the definition, while an object is a tangible realization of that definition."
    },
    {
        id: 830,
        testId: 1,
        difficulty: 'easy',
        question: "What is a reference in C++?",
        type: 'subjective',
        answer: "A reference is an alias or an alternative name for an existing variable. It is declared using an ampersand (`&`). Unlike a pointer, a reference must be initialized when it is declared and cannot be changed to refer to another variable. Any changes made through the reference affect the original variable.",
        explanation: "References provide a way to pass arguments to functions by reference, avoiding the overhead of copying large objects."
    },
     // Test 2: 10 Questions
     {
        id: 831,
        testId: 2,
        difficulty: 'easy',
        question: "Which operator is used to access members of a class through a pointer?",
        type: 'mcq',
        options: [".", "->", "::", "&"],
        answer: "->",
        explanation: "The arrow operator (`->`) is used to access members of an object when you have a pointer to that object."
    },
    {
        id: 832,
        testId: 2,
        difficulty: 'easy',
        question: "What is the function of the `new` keyword in C++?",
        type: 'mcq',
        options: [
            "To create a new file",
            "To declare a new data type",
            "To allocate memory for an object or variable on the heap",
            "To start a new thread"
        ],
        answer: "To allocate memory for an object or variable on the heap",
        explanation: "Memory allocated with `new` must be deallocated with `delete` to prevent memory leaks."
    },
    {
        id: 833,
        testId: 2,
        difficulty: 'easy',
        question: "Which of the following is the correct way to define a destructor for a class named `MyClass`?",
        type: 'mcq',
        options: ["destructor MyClass()", "void ~MyClass()", "~MyClass()", "delete MyClass()"],
        answer: "~MyClass()",
        explanation: "A destructor is a special member function with the same name as the class, preceded by a tilde (~). It is called when an object is destroyed."
    },
    {
        id: 834,
        testId: 2,
        difficulty: 'easy',
        question: "What is the standard library container for a dynamic array in C++?",
        type: 'mcq',
        options: ["Array", "List", "vector", "collection"],
        answer: "vector",
        explanation: "`std::vector` is a sequence container that can change its size dynamically."
    },
    {
        id: 835,
        testId: 2,
        difficulty: 'easy',
        question: "How do you write 'Hello, World!' to the console in C++?",
        type: 'mcq',
        options: [
            "printf('Hello, World!');",
            "console.log('Hello, World!');",
            "cout << 'Hello, World!';",
            "System.out.println('Hello, World!');"
        ],
        answer: "cout << 'Hello, World!';",
        explanation: "Using `std::cout` from the `<iostream>` header is the standard C++ way to perform console output."
    },
    {
        id: 836,
        testId: 2,
        difficulty: 'easy',
        question: "Which keyword is used to start a loop that iterates over a range of values?",
        type: 'mcq',
        options: ["for", "while", "loop", "repeat"],
        answer: "for",
        explanation: "The `for` loop is commonly used for iteration, including range-based for loops introduced in C++11."
    },
    {
        id: 837,
        testId: 2,
        difficulty: 'easy',
        question: "What is a 'header file' in C++?",
        type: 'subjective',
        answer: "A header file (usually with a `.h` or `.hpp` extension) is a file that contains declarations for functions, classes, and variables. It is included in source files (`.cpp`) using the `#include` directive so that the compiler knows about the declarations before they are used.",
        explanation: "Header files are essential for organizing code into multiple files and sharing declarations between them."
    },
    {
        id: 838,
        testId: 2,
        difficulty: 'easy',
        question: "What is the difference between `public`, `private`, and `protected` access specifiers in a class?",
        type: 'subjective',
        answer: "`public` members can be accessed from anywhere. `private` members can only be accessed by member functions of the same class. `protected` members can be accessed by member functions of the same class and by member functions of its derived classes.",
        explanation: "Access specifiers are fundamental to encapsulation in C++."
    },
    {
        id: 839,
        testId: 2,
        difficulty: 'easy',
        question: "What is the purpose of a constructor in C++?",
        type: 'subjective',
        answer: "A constructor is a special member function of a class that is automatically called when an object of that class is created. Its primary purpose is to initialize the data members of the new object to valid states. A constructor has the same name as the class and no return type.",
        explanation: "Constructors ensure that objects are created in a valid and predictable state."
    },
    {
        id: 840,
        testId: 2,
        difficulty: 'easy',
        question: "What does the `sizeof` operator do?",
        type: 'subjective',
        answer: "The `sizeof` operator is a compile-time operator that returns the size, in bytes, of a variable or a data type. It can be used to determine the amount of memory allocated for a particular type or object on a specific platform.",
        explanation: "For example, `sizeof(int)` might return 4 on a 32-bit system."
    },
    // Test 3: 15 Questions
    {
        id: 841,
        testId: 3,
        difficulty: 'medium',
        question: "What is 'inheritance' in C++?",
        type: 'mcq',
        options: [
            'A process of creating new objects',
            'A mechanism where a new class (derived class) inherits properties and behaviors from an existing class (base class)',
            'A way to manage memory',
            'A type of loop'
        ],
        answer: 'A mechanism where a new class (derived class) inherits properties and behaviors from an existing class (base class)',
        explanation: 'Inheritance is one of the key pillars of object-oriented programming, promoting code reuse.'
    },
    {
        id: 842,
        testId: 3,
        difficulty: 'medium',
        question: "What is a 'virtual function' in C++?",
        type: 'mcq',
        options: [
            'A function that does not exist',
            'A member function in a base class that you expect to be redefined in derived classes',
            'A function that cannot be overridden',
            'A function that belongs to no class'
        ],
        answer: 'A member function in a base class that you expect to be redefined in derived classes',
        explanation: 'Virtual functions are the mechanism for enabling polymorphism and dynamic dispatch in C++.'
    },
    {
        id: 843,
        testId: 3,
        difficulty: 'medium',
        question: "What is the difference between a pointer and a reference?",
        type: 'mcq',
        options: [
            'There is no difference',
            'A pointer can be null and can be reassigned; a reference cannot be null and cannot be reassigned after initialization',
            'A reference stores a memory address, while a pointer stores a value',
            'Pointers are safer than references'
        ],
        answer: 'A pointer can be null and can be reassigned; a reference cannot be null and cannot be reassigned after initialization',
        explanation: 'References are generally safer and easier to use, while pointers offer more flexibility.'
    },
    {
        id: 844,
        testId: 3,
        difficulty: 'medium',
        question: "What is the 'STL' in C++?",
        type: 'mcq',
        options: [
            'Standard Template Language',
            'A graphics library',
            'A part of the C++ Standard Library that provides a collection of template classes for common data structures and algorithms',
            'A build system'
        ],
        answer: 'A part of the C++ Standard Library that provides a collection of template classes for common data structures and algorithms',
        explanation: 'The STL includes containers (like vector, map), iterators, and algorithms (like sort, find).'
    },
    {
        id: 845,
        testId: 3,
        difficulty: 'medium',
        question: "What is 'RAII' (Resource Acquisition Is Initialization)?",
        type: 'mcq',
        options: [
            'A memory allocation technique',
            'A design pattern where resource management (like memory or file handles) is tied to the lifetime of an object',
            'A type of inheritance',
            'A compiler optimization'
        ],
        answer: 'A design pattern where resource management (like memory or file handles) is tied to the lifetime of an object',
        explanation: 'Resources are acquired in a constructor and released in the destructor, ensuring no resource leaks. Smart pointers are an example of RAII.'
    },
    {
        id: 846,
        testId: 3,
        difficulty: 'medium',
        question: "What is a 'template' in C++?",
        type: 'mcq',
        options: [
            'A blueprint for a class',
            'A feature that allows functions and classes to operate with generic types',
            'A type of comment',
            'A file format'
        ],
        answer: 'A feature that allows functions and classes to operate with generic types',
        explanation: 'Templates enable you to write generic code that works with different data types without being rewritten.'
    },
    {
        id: 847,
        testId: 3,
        difficulty: 'medium',
        question: "What does the `static` keyword do when used with a class member variable?",
        type: 'mcq',
        options: [
            'It makes the variable constant',
            'It creates a variable that is shared by all objects of the class, rather than each object having its own copy',
            'It makes the variable private',
            'It allocates the variable on the heap'
        ],
        answer: 'It creates a variable that is shared by all objects of the class, rather than each object having its own copy',
        explanation: 'A static member variable exists as a single copy for the entire class.'
    },
    {
        id: 848,
        testId: 3,
        difficulty: 'medium',
        question: "What is 'operator overloading'?",
        type: 'mcq',
        options: [
            'A syntax error',
            'A feature that allows you to redefine the behavior of operators (like +, -, ==) for custom types (classes)',
            'Overloading the system with too many operations',
            'A type of compiler'
        ],
        answer: 'A feature that allows you to redefine the behavior of operators (like +, -, ==) for custom types (classes)',
        explanation: 'It allows custom types to behave more like built-in types, improving code readability.'
    },
    {
        id: 849,
        testId: 3,
        difficulty: 'medium',
        question: "Which of the following is a smart pointer in modern C++?",
        type: 'mcq',
        options: ['`int*`', '`std::unique_ptr`', '`raw_ptr`', '`auto*`'],
        answer: '`std::unique_ptr`',
        explanation: '`std::unique_ptr`, `std::shared_ptr`, and `std::weak_ptr` are smart pointers that automate memory management and prevent leaks through RAII.'
    },
    {
        id: 850,
        testId: 3,
        difficulty: 'medium',
        question: "What is polymorphism?",
        type: 'subjective',
        answer: "Polymorphism is a core concept of OOP that means 'many forms'. It allows objects of different classes to be treated as objects of a common superclass. In C++, this is typically achieved through virtual functions, where a call to a member function will cause a different function to be executed depending on the dynamic type of the object.",
        explanation: "This enables writing flexible and extensible code."
    },
    {
        id: 851,
        testId: 3,
        difficulty: 'medium',
        question: "Explain the difference between stack and heap memory.",
        type: 'subjective',
        answer: "Stack memory is a region of memory used for static memory allocation. It stores local variables and function call information. Allocation and deallocation are automatic and very fast. Heap memory is used for dynamic memory allocation, for objects whose lifetime is not tied to a specific function scope. Memory on the heap is allocated using `new` and must be manually deallocated using `delete` (or managed by smart pointers).",
        explanation: "Stack is fast and automatic; heap is flexible but requires careful management."
    },
    {
        id: 852,
        testId: 3,
        difficulty: 'medium',
        question: "What is a 'vtable' (virtual table) and how does it relate to virtual functions?",
        type: 'subjective',
        answer: "A vtable is a mechanism used to support dynamic dispatch (or runtime polymorphism). A class that has one or more virtual functions has a hidden pointer to a vtable. This vtable is an array of function pointers, one for each virtual function in the class. When a virtual function is called through a base class pointer, the vtable is used to look up the correct function to call at runtime.",
        explanation: "It's the underlying implementation that makes polymorphism work in C++."
    },
    {
        id: 853,
        testId: 3,
        difficulty: 'medium',
        question: "What is the 'rule of three/five/zero'?",
        type: 'subjective',
        answer: "It's a rule of thumb in C++ for class design. The Rule of Three states that if a class defines any of a destructor, copy constructor, or copy assignment operator, it should probably define all three. The Rule of Five extends this to include the move constructor and move assignment operator. The Rule of Zero states that you should design classes in a way that you don't need to define any of these, typically by using RAII and smart pointers.",
        explanation: "These rules help to ensure correct resource management and prevent common bugs."
    },
    {
        id: 854,
        testId: 3,
        difficulty: 'medium',
        question: "What is a 'lambda expression' in modern C++?",
        type: 'subjective',
        answer: "A lambda expression is a convenient way to define an anonymous function object right at the location where it is invoked or passed as an argument. It has a capture list (`[]`), an optional parameter list (`()`), and a body (`{}`). Lambdas are often used with STL algorithms that take function objects as arguments, like `std::sort` or `std::for_each`.",
        explanation: "They provide a concise syntax for creating small, local function objects."
    },
    {
        id: 855,
        testId: 3,
        difficulty: 'medium',
        question: "What is the difference between `struct` and `class` in C++?",
        type: 'subjective',
        answer: "The only technical difference between a `struct` and a `class` in C++ is the default access level. For a `struct`, the default access for members and base classes is `public`. For a `class`, it is `private`. By convention, `structs` are typically used for simple data aggregates with public members, while `classes` are used for objects with methods and private data.",
        explanation: "Functionally, they are almost identical."
    },
     // Test 4: 20 Questions
     {
        id: 856,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'pure virtual function'?",
        type: 'mcq',
        options: [
            'A virtual function with a default implementation',
            'A virtual function that a derived class is required to implement, indicated by `= 0`',
            'A non-virtual function',
            'A static virtual function'
        ],
        answer: 'A virtual function that a derived class is required to implement, indicated by `= 0`',
        explanation: 'A class with one or more pure virtual functions is called an abstract class and cannot be instantiated.'
    },
    {
        id: 857,
        testId: 4,
        difficulty: 'medium',
        question: "What does the `auto` keyword do in modern C++?",
        type: 'mcq',
        options: [
            'It defines an automatic car',
            'It is a storage class specifier',
            'It deduces the type of a variable from its initializer',
            'It creates a global variable'
        ],
        answer: 'It deduces the type of a variable from its initializer',
        explanation: '`auto` simplifies code and is particularly useful for complex types like iterators.'
    },
    {
        id: 858,
        testId: 4,
        difficulty: 'medium',
        question: "What is 'SFINAE' (Substitution Failure Is Not An Error)?",
        type: 'mcq',
        options: [
            'A type of runtime error',
            'A principle in C++ template metaprogramming where an invalid substitution of template parameters is not an error, but simply removes that overload from consideration',
            'A memory leak',
            'A compiler warning'
        ],
        answer: 'A principle in C++ template metaprogramming where an invalid substitution of template parameters is not an error, but simply removes that overload from consideration',
        explanation: 'SFINAE is a powerful mechanism for compile-time introspection and conditional compilation.'
    },
    {
        id: 859,
        testId: 4,
        difficulty: 'medium',
        question: "Which smart pointer should be used to express exclusive ownership of a resource?",
        type: 'mcq',
        options: ['`std::shared_ptr`', '`std::weak_ptr`', '`std::unique_ptr`', '`raw_ptr`'],
        answer: '`std::unique_ptr`',
        explanation: '`std::unique_ptr` ensures that only one pointer can own the resource at a time. It cannot be copied, only moved.'
    },
    {
        id: 860,
        testId: 4,
        difficulty: 'medium',
        question: "What is the 'diamond problem' in multiple inheritance?",
        type: 'mcq',
        options: [
            'A problem with geometric shapes',
            'An ambiguity that arises when a class inherits from two classes that both inherit from the same base class',
            'A performance issue',
            'A linking error'
        ],
        answer: 'An ambiguity that arises when a class inherits from two classes that both inherit from the same base class',
        explanation: 'C++ solves this problem using virtual inheritance.'
    },
    {
        id: 861,
        testId: 4,
        difficulty: 'medium',
        question: "What is `std::map` in the C++ STL?",
        type: 'mcq',
        options: [
            'A dynamic array',
            'A container that stores elements in a mapped fashion, where each element is a key-value pair',
            'A sequence of characters',
            'A queue'
        ],
        answer: 'A container that stores elements in a mapped fashion, where each element is a key-value pair',
        explanation: '`std::map` is typically implemented as a balanced binary search tree and keeps its elements sorted by key.'
    },
    {
        id: 862,
        testId: 4,
        difficulty: 'medium',
        question: "What is an 'lvalue' vs an 'rvalue'?",
        type: 'mcq',
        options: [
            'lvalue is on the left, rvalue is on the right',
            'An lvalue is an expression that refers to a memory location and can appear on the left-hand side of an assignment, while an rvalue is a temporary value that cannot',
            'lvalues are for integers, rvalues are for floats',
            'There is no difference'
        ],
        answer: 'An lvalue is an expression that refers to a memory location and can appear on the left-hand side of an assignment, while an rvalue is a temporary value that cannot',
        explanation: 'Understanding this distinction is crucial for move semantics in modern C++.'
    },
    {
        id: 863,
        testId: 4,
        difficulty: 'medium',
        question: "What is 'exception handling' in C++?",
        type: 'mcq',
        options: [
            'A way to handle hardware exceptions',
            'A mechanism for responding to runtime errors using `try`, `catch`, and `throw` blocks',
            'Ignoring errors',
            'A compiler feature'
        ],
        answer: 'A mechanism for responding to runtime errors using `try`, `catch`, and `throw` blocks',
        explanation: 'It allows for a clean separation of error handling code from normal program logic.'
    },
    {
        id: 864,
        testId: 4,
        difficulty: 'medium',
        question: "What is `const correctness`?",
        type: 'mcq',
        options: [
            'Making all variables constant',
            'A programming practice of using the `const` keyword to prevent unintended modifications to variables and to specify which member functions do not modify the object\'s state',
            'A compiler setting',
            'A type of testing'
        ],
        answer: 'A programming practice of using the `const` keyword to prevent unintended modifications to variables and to specify which member functions do not modify the object\'s state',
        explanation: 'It helps the compiler enforce design contracts and can lead to safer, more readable code.'
    },
    {
        id: 865,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'friend' function or class in C++?",
        type: 'mcq',
        options: [
            'A function that is very helpful',
            'A function or class that is granted access to the `private` and `protected` members of another class',
            'A base class',
            'A derived class'
        ],
        answer: 'A function or class that is granted access to the `private` and `protected` members of another class',
        explanation: 'Friendship is not transitive or inherited and can break encapsulation if used improperly.'
    },
    {
        id: 866,
        testId: 4,
        difficulty: 'medium',
        question: "Which C++11 feature provides a safer alternative to `NULL`?",
        type: 'mcq',
        options: ['`nullptr`', '`0`', '`void*`', '`NIL`'],
        answer: '`nullptr`',
        explanation: '`nullptr` is a prvalue of type `std::nullptr_t` that is a null pointer constant. It solves ambiguity issues that `NULL` (often just `0`) had, especially in function overloading.'
    },
    {
        id: 867,
        testId: 4,
        difficulty: 'medium',
        question: "What is 'template specialization'?",
        type: 'mcq',
        options: [
            'A way to specialize in using templates',
            'A C++ feature that allows you to define a specific implementation of a template for a particular data type',
            'A syntax error',
            'A compiler warning'
        ],
        answer: 'A C++ feature that allows you to define a specific implementation of a template for a particular data type',
        explanation: 'This is useful when the generic template implementation is not suitable or efficient for a specific type.'
    },
    {
        id: 868,
        testId: 4,
        difficulty: 'medium',
        question: "Explain what an 'abstract class' is in C++.",
        type: 'subjective',
        answer: "An abstract class is a class that has at least one pure virtual function (a virtual function declared with `= 0`). Abstract classes cannot be instantiated on their own. They are designed to be used as base classes, forcing derived classes to provide implementations for the pure virtual functions. They define an interface.",
        explanation: "They are a key tool for creating class hierarchies and defining common interfaces."
    },
    {
        id: 869,
        testId: 4,
        difficulty: 'medium',
        question: "What is 'move semantics' and why is it useful?",
        type: 'subjective',
        answer: "Move semantics, introduced in C++11, is a technique that allows resources to be transferred from one object to another without copying. It is useful for optimizing performance by avoiding expensive deep copies of objects that are about to be destroyed anyway (temporary rvalues). It is implemented using rvalue references (`&&`) and a move constructor/move assignment operator.",
        explanation: "It's crucial for the efficient implementation of STL containers and smart pointers."
    },
    {
        id: 870,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between `std::vector` and `std::list`?",
        type: 'subjective',
        answer: "`std::vector` stores elements in a contiguous block of memory, providing fast random access (O(1)) but slow insertion/deletion in the middle (O(n)). `std::list` is a doubly-linked list, storing elements in non-contiguous memory. It provides slow random access (O(n)) but fast insertion/deletion anywhere in the list (O(1)).",
        explanation: "The choice depends on whether you need fast random access or fast insertions/deletions."
    },
    {
        id: 871,
        testId: 4,
        difficulty: 'medium',
        question: "What happens during a 'static_cast' vs a 'dynamic_cast'?",
        type: 'subjective',
        answer: "`static_cast` is a compile-time cast used for conversions between related types, like between pointers in a class hierarchy. It does not perform any runtime checks. `dynamic_cast` is used for safely downcasting pointers or references in a class hierarchy. It performs a runtime check to ensure the conversion is valid. If it fails for a pointer, it returns `nullptr`; if it fails for a reference, it throws `std::bad_cast`.",
        explanation: "`dynamic_cast` is safer but has a runtime performance cost."
    },
    {
        id: 872,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'dangling pointer'?",
        type: 'subjective',
        answer: "A dangling pointer is a pointer that points to a memory location that has been deallocated or freed. Accessing the memory through a dangling pointer results in undefined behavior, which can lead to data corruption or program crashes. This can happen if you `delete` a pointer and then try to use it again without setting it to `nullptr`.",
        explanation: "Smart pointers largely eliminate the problem of dangling pointers."
    },
    {
        id: 873,
        testId: 4,
        difficulty: 'medium',
        question: "What is the One Definition Rule (ODR)?",
        type: 'subjective',
        answer: "The One Definition Rule is a fundamental rule in C++ that states that any variable, function, class type, or template must have exactly one definition in the program. Violating the ODR, for example by defining the same non-inline function in multiple source files, will typically result in a linker error.",
        explanation: "This rule ensures consistency and prevents ambiguity in a program."
    },
    {
        id: 874,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'smart pointer' and why is it preferred over a raw pointer?",
        type: 'subjective',
        answer: "A smart pointer is a class that wraps a raw pointer and manages its lifetime using RAII principles. It automatically deallocates the memory when the smart pointer object goes out of scope. This is preferred because it automates memory management, preventing common errors like memory leaks (forgetting to `delete`) and double-deletes. `std::unique_ptr` and `std::shared_ptr` are the primary examples.",
        explanation: "Using smart pointers is a cornerstone of modern, safe C++ programming."
    },
    {
        id: 875,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'namespace' and what problem does it solve?",
        type: 'subjective',
        answer: "A namespace provides a scope for identifiers (names of types, functions, variables, etc.). It solves the problem of 'name collisions' that can occur when different libraries or parts of a large program define identifiers with the same name. By placing code within a namespace, you avoid these conflicts. The `std` namespace is where the entire C++ Standard Library resides.",
        explanation: "Namespaces are essential for organizing large codebases."
    },
     // Test 5: 25 Questions
     {
        id: 876,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between `delete` and `delete[]`?",
        type: 'mcq',
        options: [
            'There is no difference',
            '`delete` is for single objects, `delete[]` is for arrays of objects',
            '`delete[]` is faster',
            '`delete` is for pointers, `delete[]` is for references'
        ],
        answer: '`delete` is for single objects, `delete[]` is for arrays of objects',
        explanation: 'Using the wrong form results in undefined behavior, often leading to memory leaks or corruption.'
    },
    {
        id: 877,
        testId: 5,
        difficulty: 'medium',
        question: "What is an 'iterator' in the C++ STL?",
        type: 'mcq',
        options: [
            'A type of loop',
            'An object that behaves like a pointer and is used to iterate through the elements of a container',
            'A function for sorting',
            'A container'
        ],
        answer: 'An object that behaves like a pointer and is used to iterate through the elements of a container',
        explanation: 'Iterators provide a generic way to access elements, allowing algorithms to work with any container type.'
    },
    {
        id: 878,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `this` pointer?",
        type: 'mcq',
        options: [
            'A pointer to the current function',
            'A pointer to the global object',
            'An implicit pointer available in every non-static member function that points to the object on which the function was called',
            'A null pointer'
        ],
        answer: 'An implicit pointer available in every non-static member function that points to the object on which the function was called',
        explanation: 'It is used to access the object\'s member variables and functions.'
    },
    {
        id: 879,
        testId: 5,
        difficulty: 'medium',
        question: "Which header file is needed for `std::vector`?",
        type: 'mcq',
        options: ['`<iostream>`', '`<vector>`', '`<string>`', '`<algorithm>`'],
        answer: '`<vector>`',
        explanation: 'The `<vector>` header contains the definition for the `std::vector` container.'
    },
    {
        id: 880,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'lambda expression' in C++11?",
        type: 'mcq',
        options: [
            'A way to define a new class',
            'A concise way to define an anonymous function object',
            'A type of comment',
            'A preprocessor directive'
        ],
        answer: 'A concise way to define an anonymous function object',
        explanation: 'Lambdas are extremely useful for passing short, simple functions as arguments to algorithms.'
    },
    {
        id: 881,
        testId: 5,
        difficulty: 'medium',
        question: "What does the `explicit` keyword do for a constructor?",
        type: 'mcq',
        options: [
            'It makes the constructor public',
            'It prevents the constructor from being used for implicit type conversions',
            'It makes the constructor inline',
            'It deletes the constructor'
        ],
        answer: 'It prevents the constructor from being used for implicit type conversions',
        explanation: 'This can prevent subtle bugs by forcing the programmer to be explicit about conversions.'
    },
    {
        id: 882,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'function overloading'?",
        type: 'mcq',
        options: [
            'Creating a function that is too long',
            'Defining multiple functions with the same name but with different parameter lists',
            'A syntax error',
            'Redefining a function in a derived class'
        ],
        answer: 'Defining multiple functions with the same name but with different parameter lists',
        explanation: 'The compiler determines which version of the function to call based on the arguments provided.'
    },
    {
        id: 883,
        testId: 5,
        difficulty: 'medium',
        question: "What is `std::unordered_map`?",
        type: 'mcq',
        options: [
            'A sorted key-value container',
            'A key-value container that uses a hash table for storage, providing average O(1) lookups',
            'A dynamic array',
            'A linked list'
        ],
        answer: 'A key-value container that uses a hash table for storage, providing average O(1) lookups',
        explanation: 'It is generally faster than `std::map` for lookups but does not keep its elements in sorted order.'
    },
    {
        id: 884,
        testId: 5,
        difficulty: 'medium',
        question: "How is a 'reference' different from a 'pointer'?",
        type: 'mcq',
        options: [
            'References can be null',
            'References must be initialized upon declaration and cannot be changed to refer to another object',
            'Pointers are safer',
            'There is no difference'
        ],
        answer: 'References must be initialized upon declaration and cannot be changed to refer to another object',
        explanation: 'References are aliases for existing objects, while pointers store memory addresses and are more flexible but less safe.'
    },
    {
        id: 885,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'header guard'?",
        type: 'mcq',
        options: [
            'A security feature',
            'A preprocessor directive construct used to prevent a header file from being included multiple times in the same source file',
            'A comment at the top of a file',
            'A C++ keyword'
        ],
        answer: 'A preprocessor directive construct used to prevent a header file from being included multiple times in the same source file',
        explanation: 'The common form is `#ifndef MY_HEADER_H #define MY_HEADER_H ... #endif`, or more modernly, `#pragma once`.'
    },
    {
        id: 886,
        testId: 5,
        difficulty: 'medium',
        question: "What is `const_cast` used for?",
        type: 'mcq',
        options: [
            'To cast away the `const` qualifier of a variable',
            'To convert a float to an int',
            'To perform a safe downcast',
            'To create a constant variable'
        ],
        answer: 'To cast away the `const` qualifier of a variable',
        explanation: '`const_cast` is generally considered dangerous and should be used with extreme caution, as modifying a truly constant object results in undefined behavior.'
    },
    {
        id: 887,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `volatile` keyword used for?",
        type: 'mcq',
        options: [
            'To make a variable constant',
            'To tell the compiler that a variable\'s value may change at any time without any action being taken by the code the compiler finds nearby',
            'To make a variable thread-safe',
            'To create a temporary variable'
        ],
        answer: 'To tell the compiler that a variable\'s value may change at any time without any action being taken by the code the compiler finds nearby',
        explanation: 'This prevents the compiler from optimizing away reads or writes to the variable. It is used for memory-mapped hardware or variables modified by external threads.'
    },
    {
        id: 888,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'move constructor'?",
        type: 'mcq',
        options: [
            'A constructor that moves an object in memory',
            'A constructor that transfers ownership of resources from a temporary (rvalue) object to a new object',
            'A constructor with no parameters',
            'A copy constructor'
        ],
        answer: 'A constructor that transfers ownership of resources from a temporary (rvalue) object to a new object',
        explanation: 'Move constructors are a key part of move semantics, allowing for significant performance optimizations by avoiding deep copies.'
    },
    {
        id: 889,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'functor' (function object)?",
        type: 'mcq',
        options: [
            'A fun function',
            'An object of a class that has overloaded the function-call operator (`operator()`)',
            'A pointer to a function',
            'A C++ keyword'
        ],
        answer: 'An object of a class that has overloaded the function-call operator (`operator()`)',
        explanation: 'Functors can be used just like regular functions but have the advantage of being able to store state.'
    },
    {
        id: 890,
        testId: 5,
        difficulty: 'medium',
        question: "What is an 'abstract class'?",
        type: 'mcq',
        options: [
            'A class that is very difficult to understand',
            'A class that has no member variables',
            'A class that cannot be instantiated and is meant to be used as a base class, typically containing at least one pure virtual function',
            'A class with only static members'
        ],
        answer: 'A class that cannot be instantiated and is meant to be used as a base class, typically containing at least one pure virtual function',
        explanation: 'Abstract classes are used to define interfaces in C++.'
    },
    {
        id: 891,
        testId: 5,
        difficulty: 'medium',
        question: "What is RAII (Resource Acquisition Is Initialization)?",
        type: 'subjective',
        answer: "RAII is a core C++ programming technique where resource management (like memory, file handles, or network sockets) is tied to the lifetime of an object. The resource is acquired in the object's constructor and released in its destructor. This guarantees that the resource is properly released whenever the object goes out of scope, preventing resource leaks.",
        explanation: "Smart pointers like `std::unique_ptr` and file stream objects like `std::ifstream` are prime examples of the RAII pattern."
    },
    {
        id: 892,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between a `std::map` and a `std::unordered_map`?",
        type: 'subjective',
        answer: "`std::map` stores key-value pairs in a sorted order based on the key. It is typically implemented as a balanced binary search tree (like a red-black tree), which gives it O(log n) complexity for insertion, deletion, and lookup. `std::unordered_map` uses a hash table, providing average O(1) complexity for these operations, but it does not keep the elements in any particular order.",
        explanation: "Use `std::map` when you need sorted order; use `std::unordered_map` when you need maximum performance for lookups."
    },
    {
        id: 893,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'virtual inheritance' and what problem does it solve?",
        type: 'subjective',
        answer: "Virtual inheritance is a C++ technique used to solve the 'diamond problem' in multiple inheritance. This problem occurs when a class D inherits from two classes B and C, and both B and C inherit from a common base class A. Without virtual inheritance, D would contain two copies of A's members. By having B and C inherit virtually from A (`class B : virtual public A`), it ensures that D contains only one copy of A's members.",
        explanation: "It's a mechanism to handle ambiguity in multiple inheritance hierarchies."
    },
    {
        id: 894,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'template metaprogramming'?",
        type: 'subjective',
        answer: "Template metaprogramming (TMP) is a technique that uses C++ templates to perform computations at compile time rather than at runtime. The templates are used as a turing-complete functional language that the compiler executes. This can be used to generate code, perform optimizations, and enforce constraints at compile time.",
        explanation: "It's an advanced technique that can lead to highly efficient code at the cost of increased complexity and compile times."
    },
    {
        id: 895,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'dangling pointer' and how can smart pointers help prevent it?",
        type: 'subjective',
        answer: "A dangling pointer is a pointer that points to a memory location that has been deallocated or freed. Using such a pointer leads to undefined behavior. Smart pointers like `std::unique_ptr` and `std::shared_ptr` help prevent this by managing the lifetime of the pointed-to object. When the smart pointer (or the last `shared_ptr`) goes out of scope, the memory is automatically deallocated, making it impossible to have a valid pointer to now-invalid memory.",
        explanation: "RAII is the principle that makes smart pointers effective against dangling pointers and memory leaks."
    },
    {
        id: 896,
        testId: 5,
        difficulty: 'medium',
        question: "Explain the difference between overloading and overriding a function.",
        type: 'subjective',
        answer: "Overloading means defining multiple functions in the same scope with the same name but different parameter lists (number or type of arguments). The compiler selects the correct version at compile time. Overriding occurs in an inheritance hierarchy. It means a derived class provides a specific implementation for a virtual function that is already defined in its base class. The correct version is selected at runtime based on the object's dynamic type.",
        explanation: "Overloading is compile-time polymorphism; overriding is runtime polymorphism."
    },
    {
        id: 897,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of the `inline` keyword?",
        type: 'subjective',
        answer: "The `inline` keyword suggests to the compiler that a function's body should be inserted directly into the code at the point of each call, rather than performing a normal function call. This can eliminate the overhead of a function call for very small functions, potentially improving performance. It also allows function definitions to be placed in header files without violating the One Definition Rule (ODR).",
        explanation: "Modern compilers are often smart enough to inline functions on their own, so it is mainly used now for ODR purposes."
    },
    {
        id: 898,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `explicit` keyword used for?",
        type: 'subjective',
        answer: "The `explicit` keyword is used on a constructor to prevent it from being used for implicit type conversions. For example, if a constructor `MyClass(int x)` is not explicit, you could write `MyClass obj = 10;`, which might be unintentional. Marking it as `explicit` forces the clearer syntax `MyClass obj(10);`, preventing surprising behavior.",
        explanation: "It's good practice to make single-argument constructors explicit unless you specifically want the implicit conversion."
    },
    {
        id: 899,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'range-based for loop' in C++11?",
        type: 'subjective',
        answer: "A range-based for loop provides a simpler and safer way to iterate over the elements of a container or range. The syntax is `for (declaration : range) { ... }`. It automatically handles the iteration from beginning to end, avoiding common errors associated with traditional iterator or index-based loops, such as off-by-one errors.",
        explanation: "Example: `for (int i : my_vector) { std::cout << i; }`."
    },
    {
        id: 900,
        testId: 5,
        difficulty: 'medium',
        question: "What is the 'Rule of Three' in C++?",
        type: 'subjective',
        answer: "The Rule of Three is a rule of thumb for classes that manage a resource. It states that if a class defines any of the following special member functions, it should probably define all three: 1) Destructor, 2) Copy Constructor, 3) Copy Assignment Operator. This is because a custom destructor usually implies that the default copy operations would be incorrect (e.g., they would only do a shallow copy of a pointer).",
        explanation: "In modern C++, this is often extended to the 'Rule of Five' to include move operations."
    },
    // Test 6: 30 Questions
    {
        id: 901,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'SFINAE'?",
        type: 'mcq',
        options: [
            'A type of runtime error',
            'A principle in C++ template metaprogramming where an invalid substitution of template parameters is not an error, but simply removes that overload from consideration',
            'A memory leak',
            'A compiler warning'
        ],
        answer: 'A principle in C++ template metaprogramming where an invalid substitution of template parameters is not an error, but simply removes that overload from consideration',
        explanation: 'SFINAE (Substitution Failure Is Not An Error) is a powerful mechanism for compile-time introspection and conditional compilation.'
    },
    {
        id: 902,
        testId: 6,
        difficulty: 'hard',
        question: "What is the primary difference between `std::shared_ptr` and `std::unique_ptr`?",
        type: 'mcq',
        options: [
            '`shared_ptr` is faster',
            '`unique_ptr` is for arrays only',
            '`unique_ptr` enforces exclusive ownership, while `shared_ptr` allows for multiple owners of the same resource',
            '`shared_ptr` does not manage memory'
        ],
        answer: '`unique_ptr` enforces exclusive ownership, while `shared_ptr` allows for multiple owners of the same resource',
        explanation: '`shared_ptr` uses a reference count to determine when to deallocate the resource, while `unique_ptr` deallocates it as soon as the `unique_ptr` itself is destroyed.'
    },
    {
        id: 903,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'perfect forwarding'?",
        type: 'mcq',
        options: [
            'A network protocol',
            'A C++11 feature that allows a function template to pass its arguments to another function while preserving their value categories (lvalue/rvalue)',
            'A compiler optimization',
            'A way to forward emails'
        ],
        answer: 'A C++11 feature that allows a function template to pass its arguments to another function while preserving their value categories (lvalue/rvalue)',
        explanation: 'It is implemented using `std::forward` and forwarding references (`T&&`) and is crucial for writing generic factory functions.'
    },
    {
        id: 904,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'variadic template'?",
        type: 'mcq',
        options: [
            'A template with a variable number of arguments',
            'A template for variables',
            'A buggy template',
            'A template for specific types only'
        ],
        answer: 'A template with a variable number of arguments',
        explanation: 'Introduced in C++11, variadic templates allow classes and functions to take an arbitrary number of template arguments.'
    },
    {
        id: 905,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of `std::move`?",
        type: 'mcq',
        options: [
            'It physically moves an object in memory',
            'It is a cast that unconditionally converts its argument to an rvalue reference, enabling a move operation to be invoked',
            'It copies an object',
            'It deletes an object'
        ],
        answer: 'It is a cast that unconditionally converts its argument to an rvalue reference, enabling a move operation to be invoked',
        explanation: '`std::move` itself doesn\'t move anything; it just signals the possibility of moving from the object.'
    },
    {
        id: 906,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between a `std::map` and `std::unordered_map`?",
        type: 'mcq',
        options: [
            'There is no difference',
            '`map` is sorted and provides O(log n) lookups; `unordered_map` is not sorted and provides average O(1) lookups',
            '`unordered_map` is always faster',
            '`map` uses a hash table, `unordered_map` uses a tree'
        ],
        answer: '`map` is sorted and provides O(log n) lookups; `unordered_map` is not sorted and provides average O(1) lookups',
        explanation: 'The choice depends on whether you need sorted order or the fastest possible lookup performance.'
    },
    {
        id: 907,
        testId: 6,
        difficulty: 'hard',
        question: "What is `constexpr` in C++11 and later?",
        type: 'mcq',
        options: [
            'A replacement for `const`',
            'A keyword that indicates a value or function can be evaluated at compile time',
            'A keyword for creating expressions',
            'A type of comment'
        ],
        answer: 'A keyword that indicates a value or function can be evaluated at compile time',
        explanation: '`constexpr` allows for more powerful compile-time computation, improving performance and enabling new metaprogramming techniques.'
    },
    {
        id: 908,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'copy-and-swap' idiom?",
        type: 'mcq',
        options: [
            'A memory-copying function',
            'A common C++ idiom for implementing a strong exception-safe copy assignment operator',
            'A version control strategy',
            'A sorting algorithm'
        ],
        answer: 'A common C++ idiom for implementing a strong exception-safe copy assignment operator',
        explanation: 'It involves implementing the assignment operator in terms of a copy constructor and a non-throwing `swap` function.'
    },
    {
        id: 909,
        testId: 6,
        difficulty: 'hard',
        question: "What is the role of `std::weak_ptr`?",
        type: 'mcq',
        options: [
            'A pointer that is easily broken',
            'A smart pointer that holds a non-owning ('weak') reference to an object managed by a `std::shared_ptr`, used to break circular dependencies',
            'An alias for `std::unique_ptr`',
            'A pointer to a weak object'
        ],
        answer: 'A smart pointer that holds a non-owning (\'weak\') reference to an object managed by a `std::shared_ptr`, used to break circular dependencies',
        explanation: 'A `weak_ptr` does not affect the reference count of a `shared_ptr`, thus preventing reference cycles that would lead to memory leaks.'
    },
    {
        id: 910,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between `reinterpret_cast` and `static_cast`?",
        type: 'mcq',
        options: [
            'They are the same',
            '`static_cast` performs safe, compile-time conversions, while `reinterpret_cast` performs a low-level, unsafe reinterpretation of a bit pattern',
            '`reinterpret_cast` is safer',
            '`static_cast` is for integers only'
        ],
        answer: '`static_cast` performs safe, compile-time conversions, while `reinterpret_cast` performs a low-level, unsafe reinterpretation of a bit pattern',
        explanation: '`reinterpret_cast` is the most dangerous cast and should be used with extreme caution as it is highly implementation-defined.'
    },
    {
        id: 911,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'vtable' (virtual dispatch table)?",
        type: 'mcq',
        options: [
            'A table of vegetables',
            'A mechanism used to support dynamic dispatch (runtime polymorphism) by providing a lookup table of function pointers for virtual functions',
            'A database table',
            'A user interface component'
        ],
        answer: 'A mechanism used to support dynamic dispatch (runtime polymorphism) by providing a lookup table of function pointers for virtual functions',
        explanation: 'A class with virtual functions has a hidden pointer to a vtable, which is used to resolve virtual function calls at runtime.'
    },
    {
        id: 912,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of 'placement new'?",
        type: 'mcq',
        options: [
            'To place an object at a specific location in a UI',
            'An overload of the `new` operator that allows you to construct an object at a pre-allocated memory address',
            'To create a new file',
            'To allocate memory on the stack'
        ],
        answer: 'An overload of the `new` operator that allows you to construct an object at a pre-allocated memory address',
        explanation: 'It is used in memory pools, allocators, and other low-level memory management tasks.'
    },
    {
        id: 913,
        testId: 6,
        difficulty: 'hard',
        question: "What does 'POD' (Plain Old Data) type mean in C++?",
        type: 'mcq',
        options: [
            'A class with many members',
            'A class or struct that is a simple data aggregate with no user-defined constructors, destructors, or virtual functions',
            'A type of vegetable',
            'A deprecated feature'
        ],
        answer: 'A class or struct that is a simple data aggregate with no user-defined constructors, destructors, or virtual functions',
        explanation: 'POD types have a layout compatible with C structs and can be safely manipulated with functions like `memcpy`.'
    },
    {
        id: 914,
        testId: 6,
        difficulty: 'hard',
        question: "What is a `std::mutex`?",
        type: 'mcq',
        options: [
            'A type of data container',
            'A synchronization primitive used to protect shared data from being simultaneously accessed by multiple threads',
            'A mathematical function',
            'A compiler option'
        ],
        answer: 'A synchronization primitive used to protect shared data from being simultaneously accessed by multiple threads',
        explanation: 'A mutex (mutual exclusion) ensures that only one thread can acquire its lock at a time, preventing race conditions.'
    },
    {
        id: 915,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'forward declaration'?",
        type: 'mcq',
        options: [
            'Declaring a variable before its use',
            'A declaration of an identifier (like a class name) before it is fully defined, used to break circular dependencies between header files',
            'A C++20 feature',
            'A type of loop'
        ],
        answer: 'A declaration of an identifier (like a class name) before it is fully defined, used to break circular dependencies between header files',
        explanation: 'For example, `class B;` allows you to declare pointers or references to B (`B*`) without needing the full definition of class B.'
    },
    {
        id: 916,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between `std::array` and a C-style array?",
        type: 'mcq',
        options: [
            'There is no difference',
            '`std::array` is a container that encapsulates a fixed-size array and provides an interface similar to other STL containers (e.g., `size()`, iterators)',
            'C-style arrays are safer',
            '`std::array` is dynamically sized'
        ],
        answer: '`std::array` is a container that encapsulates a fixed-size array and provides an interface similar to other STL containers (e.g., `size()`, iterators)',
        explanation: '`std::array` does not decay to a pointer and carries its size information, making it safer and easier to use.'
    },
    {
        id: 917,
        testId: 6,
        difficulty: 'hard',
        question: "What does the `noexcept` specifier do?",
        type: 'mcq',
        options: [
            'It indicates a function may throw any exception',
            'It specifies that a function will not throw any exceptions, allowing for potential compiler optimizations',
            'It is a type of comment',
            'It enables exceptions'
        ],
        answer: 'It specifies that a function will not throw any exceptions, allowing for potential compiler optimizations',
        explanation: 'It is particularly important for move constructors and move assignment operators to be `noexcept` for them to be used by STL containers.'
    },
    {
        id: 918,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'Name Mangling' in C++?",
        type: 'mcq',
        options: [
            'A coding style error',
            'A process used by the compiler to encode function and variable names with additional information about their type and scope, to support features like function overloading',
            'Renaming variables to be confusing',
            'A security attack'
        ],
        answer: 'A process used by the compiler to encode function and variable names with additional information about their type and scope, to support features like function overloading',
        explanation: 'The `extern "C"` linkage specifier is used to prevent name mangling, allowing C++ code to link with C code.'
    },
    {
        id: 919,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'SFINAE' and provide a simple example of its use.",
        type: 'subjective',
        answer: "SFINAE stands for 'Substitution Failure Is Not An Error'. It's a C++ principle where an invalid substitution of template parameters during overload resolution doesn't cause a compile error. Instead, that specific overload is simply removed from the set of candidate functions. It's often used with `std::enable_if` to conditionally enable a function template only if a certain type trait is true. For example, you could have a function that only compiles for integral types.",
        explanation: "It's a foundational concept in template metaprogramming."
    },
    {
        id: 920,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between a `std::unique_ptr`, `std::shared_ptr`, and `std::weak_ptr`?",
        type: 'subjective',
        answer: "`std::unique_ptr` provides exclusive ownership; only one `unique_ptr` can point to a resource, and it's deallocated when the pointer goes out of scope. `std::shared_ptr` allows for shared ownership using a reference count; the resource is deallocated when the last `shared_ptr` is destroyed. `std::weak_ptr` is a non-owning smart pointer that holds a weak reference to an object managed by a `shared_ptr`. It is used to break circular dependencies between `shared_ptr`s.",
        explanation: "Choosing the right smart pointer is key to modern C++ resource management."
    },
    {
        id: 921,
        testId: 6,
        difficulty: 'hard',
        question: "Explain what 'move semantics' and 'rvalue references' are and why they are important.",
        type: 'subjective',
        answer: "Rvalue references (`&&`) are a C++11 feature that allows binding to temporary objects (rvalues). Move semantics uses this to 'steal' resources (like heap-allocated memory) from temporary objects instead of performing expensive deep copies. A 'move constructor' or 'move assignment operator' takes an rvalue reference and transfers ownership of the resources. This is important for a huge performance boost, especially with containers and resource-heavy objects.",
        explanation: "It allows for 'cheap' moves instead of 'expensive' copies."
    },
    {
        id: 922,
        testId: 6,
        difficulty: 'hard',
        question: "What is the 'diamond problem' and how does C++ solve it?",
        type: 'subjective',
        answer: "The diamond problem is an ambiguity that arises in multiple inheritance when a class D inherits from two classes, B and C, which both inherit from a common base class, A. This would normally cause D to inherit two copies of A's members. C++ solves this using 'virtual inheritance'. When B and C inherit from A using the `virtual` keyword, the compiler ensures that only a single instance of the base class A is included in the final derived class D.",
        explanation: "Virtual inheritance is a specific tool to resolve this multiple inheritance ambiguity."
    },
    {
        id: 923,
        testId: 6,
        difficulty: 'hard',
        question: "What is RAII (Resource Acquisition Is Initialization) and why is it a central idiom in C++?",
        type: 'subjective',
        answer: "RAII is a programming idiom where resource management is tied to object lifetime. A resource (like memory, a file handle, or a lock) is acquired in an object's constructor, and released in its destructor. This guarantees that the resource is properly released whenever the object goes out of scope, whether by normal execution, a `return` statement, or an exception being thrown. It makes code safer and prevents resource leaks.",
        explanation: "Smart pointers and lock guards are common examples of the RAII idiom."
    },
    {
        id: 924,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'perfect forwarding' and what problem does it solve?",
        type: 'subjective',
        answer: "Perfect forwarding is a technique that allows a function template to pass its arguments to another function while preserving their original value categories (lvalue or rvalue). It solves the problem of writing a generic wrapper or factory function that needs to forward its arguments perfectly without making unnecessary copies or losing information. It is implemented using forwarding references (also called universal references, `T&&`) and `std::forward`.",
        explanation: "It's essential for writing highly generic and efficient template code."
    },
    {
        id: 925,
        testId: 6,
        difficulty: 'hard',
        question: "Explain the difference between a `std::mutex` and a `std::lock_guard`.",
        type: 'subjective',
        answer: "A `std::mutex` is a synchronization primitive that provides mutual exclusion, which a thread can `lock()` and `unlock()`. However, managing this manually is error-prone (e.g., forgetting to unlock). A `std::lock_guard` is a RAII wrapper for a mutex. When you create a `lock_guard` object, it locks the provided mutex in its constructor. When the `lock_guard` goes out of scope, its destructor is automatically called, which unlocks the mutex. This guarantees the mutex is always released.",
        explanation: "Always prefer RAII wrappers like `lock_guard` or `unique_lock` over manual locking."
    },
    {
        id: 926,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'constexpr function' and how does it differ from a regular function?",
        type: 'subjective',
        answer: "A `constexpr` function is a function that can be evaluated at compile time if its arguments are known at compile time. If its arguments are only known at runtime, it will be executed at runtime like a regular function. This allows for compile-time computations, which can improve performance and enable certain metaprogramming techniques, like using the function's result to declare an array size.",
        explanation: "It allows a single function to be used for both compile-time and runtime evaluation."
    },
    {
        id: 927,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'undefined behavior' (UB) in C++?",
        type: 'subjective',
        answer: "Undefined behavior is behavior that results from executing code whose semantics are not defined by the C++ standard. Examples include dereferencing a null pointer, accessing an array out of bounds, or a signed integer overflow. When UB occurs, the program is allowed to do anything – it might crash, it might produce incorrect results, or it might appear to work correctly, making the bug very difficult to find.",
        explanation: "Avoiding UB is a primary goal when writing safe C++ code."
    },
    {
        id: 928,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'vtable' and how does it enable polymorphism?",
        type: 'subjective',
        answer: "A vtable (virtual table) is a lookup table of function pointers used to resolve virtual function calls at runtime. A class with at least one virtual function has a hidden pointer (the vptr) to its vtable. When a virtual function is called through a base class pointer, the program uses the object's vptr to find its vtable and then calls the correct function from that table. This mechanism, known as dynamic dispatch, is what enables polymorphism.",
        explanation: "It's the runtime mechanism that allows a base class pointer to call the correct derived class's overridden function."
    },
    {
        id: 929,
        testId: 6,
        difficulty: 'hard',
        question: "What is the 'copy-and-swap' idiom?",
        type: 'subjective',
        answer: "The copy-and-swap idiom is a technique for implementing a strong exception-safe copy assignment operator (`operator=`). It involves implementing a non-throwing `swap` member function that swaps the internal state of two objects. The assignment operator is then implemented by creating a temporary copy of the source object (using the copy constructor) and then swapping its contents with the current object (`*this`). The temporary object's destructor then cleans up the old state.",
        explanation: "This idiom unifies copy and move assignment and provides strong exception safety."
    },
    {
        id: 930,
        testId: 6,
        difficulty: 'hard',
        question: "What are 'lvalue references' and 'rvalue references'?",
        type: 'subjective',
        answer: "An lvalue is an expression that has an identifiable location in memory (e.g., a variable). An lvalue reference (`&`) binds to an lvalue. An rvalue is a temporary expression that does not have an identifiable location (e.g., a literal or a temporary object). An rvalue reference (`&&`) can bind to an rvalue. Rvalue references are the key feature that enables move semantics in C++11.",
        explanation: "Understanding this value category distinction is crucial for modern C++."
    },
    // Test 7: 35 Questions
    {
        id: 931,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'forwarding reference' (or 'universal reference')?",
        type: 'mcq',
        options: [
            'A reference to a forwarded email',
            'A special type of rvalue reference (`T&&`) that appears in a context where type deduction occurs, allowing it to bind to both lvalues and rvalues',
            'An alias for a `const` reference',
            'A pointer to a reference'
        ],
        answer: 'A special type of rvalue reference (`T&&`) that appears in a context where type deduction occurs, allowing it to bind to both lvalues and rvalues',
        explanation: 'Forwarding references are the key to implementing perfect forwarding.'
    },
    {
        id: 932,
        testId: 7,
        difficulty: 'hard',
        question: "What does `std::atomic` provide?",
        type: 'mcq',
        options: [
            'Atomic bombs',
            'A template class that provides atomic operations for a given type, ensuring that operations are indivisible and free from race conditions in a multithreaded context',
            'A way to make code smaller',
            'A special type of variable'
        ],
        answer: 'A template class that provides atomic operations for a given type, ensuring that operations are indivisible and free from race conditions in a multithreaded context',
        explanation: '`std::atomic` is a fundamental tool for lock-free programming.'
    },
    {
        id: 933,
        testId: 7,
        difficulty: 'hard',
        question: "What is the 'C++ Core Guidelines'?",
        type: 'mcq',
        options: [
            'A part of the C++ standard',
            'A set of guidelines and best practices for writing modern C++, initiated by Bjarne Stroustrup and Herb Sutter',
            'A book about C++ history',
            'A compiler for C++'
        ],
        answer: 'A set of guidelines and best practices for writing modern C++, initiated by Bjarne Stroustrup and Herb Sutter',
        explanation: 'The guidelines aim to help developers write safer, more efficient, and more maintainable C++ code.'
    },
    {
        id: 934,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'header-only' library?",
        type: 'mcq',
        options: [
            'A library with no code',
            'A library where the entire implementation is contained within header files, typically using templates',
            'A library with only one header file',
            'A deprecated type of library'
        ],
        answer: 'A library where the entire implementation is contained within header files, typically using templates',
        explanation: 'Header-only libraries are easy to integrate into a project (just `#include` them) as they do not require separate compilation and linking. Boost is a famous example.'
    },
    {
        id: 935,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'thread pool'?",
        type: 'mcq',
        options: [
            'A swimming pool for threads',
            'A collection of pre-created, idle threads that stand ready to be given work',
            'A synchronization primitive',
            'A C++20 feature'
        ],
        answer: 'A collection of pre-created, idle threads that stand ready to be given work',
        explanation: 'Thread pools are used to reduce the overhead of creating and destroying threads for short-lived tasks.'
    },
    {
        id: 936,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'type erasure'?",
        type: 'mcq',
        options: [
            'Deleting a type',
            'A programming technique that allows you to store objects of different concrete types under a uniform interface, hiding the specific type details',
            'A syntax error',
            'A compiler optimization'
        ],
        answer: 'A programming technique that allows you to store objects of different concrete types under a uniform interface, hiding the specific type details',
        explanation: '`std::function` and `std::any` are examples of type erasure in the standard library.'
    },
    {
        id: 937,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'concept' in C++20?",
        type: 'mcq',
        options: [
            'A general idea',
            'A feature that allows you to place constraints on template parameters, improving compile-time error messages and code clarity',
            'A type of variable',
            'A comment'
        ],
        answer: 'A feature that allows you to place constraints on template parameters, improving compile-time error messages and code clarity',
        explanation: 'Concepts formalize the requirements on template arguments, making generic code easier to write and use correctly.'
    },
    {
        id: 938,
        testId: 7,
        difficulty: 'hard',
        question: "What is the 'PIMPL' (Pointer to Implementation) idiom?",
        type: 'mcq',
        options: [
            'A way to decorate a class',
            'A C++ programming technique that hides the private members of a class in a separate implementation file, reducing compile-time dependencies',
            'A debugging tool',
            'A type of smart pointer'
        ],
        answer: 'A C++ programming technique that hides the private members of a class in a separate implementation file, reducing compile-time dependencies',
        explanation: 'The public class holds only a pointer to its implementation, which allows the implementation to change without forcing recompilation of all client code.'
    },
    {
        id: 939,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between a `std::thread` and `std::async`?",
        type: 'mcq',
        options: [
            'There is no difference',
            '`std::thread` is a low-level tool for creating threads, while `std::async` is a higher-level tool for running a function asynchronously and getting its result via a `std::future`',
            '`std::async` is faster',
            '`std::thread` is for Windows, `std::async` is for Linux'
        ],
        answer: '`std::thread` is a low-level tool for creating threads, while `std::async` is a higher-level tool for running a function asynchronously and getting its result via a `std::future`',
        explanation: '`std::async` is often easier and safer to use for task-based parallelism as it handles details of thread management and result retrieval.'
    },
    {
        id: 940,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'structured binding' in C++17?",
        type: 'mcq',
        options: [
            'A way to bind network sockets',
            'A feature that allows you to declare multiple variables that are initialized from the elements of a tuple or struct',
            'A memory binding technique',
            'A way to structure `if` statements'
        ],
        answer: 'A feature that allows you to declare multiple variables that are initialized from the elements of a tuple or struct',
        explanation: 'It provides a more convenient syntax for unpacking data, e.g., `auto [key, value] = my_map.front();`'
    },
    {
        id: 941,
        testId: 7,
        difficulty: 'hard',
        question: "What is `std::optional` in C++17?",
        type: 'mcq',
        options: [
            'A way to make function parameters optional',
            'A template class that represents an optional value, i.e., a value that may or may not be present',
            'A boolean type',
            'A configuration option'
        ],
        answer: 'A template class that represents an optional value, i.e., a value that may or may not be present',
        explanation: 'It provides a safer and more expressive alternative to using special values (like -1) or pointers (like `nullptr`) to indicate the absence of a value.'
    },
    {
        id: 942,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'coroutine' in C++20?",
        type: 'mcq',
        options: [
            'A daily routine for code',
            'A function that can be suspended and resumed, allowing for cooperative multitasking and simplified asynchronous programming',
            'A sub-routine in a program',
            'A security routine'
        ],
        answer: 'A function that can be suspended and resumed, allowing for cooperative multitasking and simplified asynchronous programming',
        explanation: 'Coroutines provide a powerful alternative to callbacks or promise chains for writing asynchronous code.'
    },
    {
        id: 943,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'ADL' (Argument-Dependent Lookup)?",
        type: 'mcq',
        options: [
            'A debugging log',
            'A set of rules for looking up unqualified function names, which considers the namespaces of the function\'s arguments',
            'A type of linked list',
            'A compiler error'
        ],
        answer: 'A set of rules for looking up unqualified function names, which considers the namespaces of the function\'s arguments',
        explanation: 'ADL is why you can call `std::swap(a, b)` without qualifying it as `std::`, if `a` and `b` are standard library types.'
    },
    {
        id: 944,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'linkage' in C++?",
        type: 'mcq',
        options: [
            'The process of creating a linked list',
            'A property of a name that determines whether it refers to the same entity across different translation units',
            'Connecting to the internet',
            'A version control feature'
        ],
        answer: 'A property of a name that determines whether it refers to the same entity across different translation units',
        explanation: '`extern` gives a name external linkage, while `static` at global scope gives it internal linkage.'
    },
    {
        id: 945,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'CRTP' (Curiously Recurring Template Pattern)?",
        type: 'mcq',
        options: [
            'A runtime polymorphism pattern',
            'An idiom in which a class `X` derives from a template class instantiated with `X` itself (`class X : public Base<X>`)',
            'A memory management pattern',
            'A way to create recursive functions'
        ],
        answer: 'An idiom in which a class `X` derives from a template class instantiated with `X` itself (`class X : public Base<X>`)',
        explanation: 'CRTP can be used to achieve static (compile-time) polymorphism.'
    },
    {
        id: 946,
        testId: 7,
        difficulty: 'hard',
        question: "What does `std::string_view` (C++17) provide?",
        type: 'mcq',
        options: [
            'A mutable string',
            'A non-owning, read-only view of a sequence of characters',
            'A user interface component for viewing strings',
            'An alias for `std::string`'
        ],
        answer: 'A non-owning, read-only view of a sequence of characters',
        explanation: 'It provides a lightweight way to pass string-like data to functions without incurring the cost of creating a new `std::string` object.'
    },
    {
        id: 947,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'user-defined literal'?",
        type: 'mcq',
        options: [
            'A literal defined by the user in a config file',
            'A C++11 feature that allows you to define a suffix for literals to create objects of a custom type',
            'A comment',
            'A type of variable'
        ],
        answer: 'A C++11 feature that allows you to define a suffix for literals to create objects of a custom type',
        explanation: 'For example, you could define `operator"" _s` to create a `MyString` object from `"hello"_s`.'
    },
    {
        id: 948,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between `std::thread` and `std::jthread` (C++20)?",
        type: 'mcq',
        options: [
            'There is no difference',
            '`std::jthread` is a joining thread; its destructor automatically joins, preventing the program from terminating with a running thread',
            '`jthread` is for Java integration',
            '`jthread` is faster'
        ],
        answer: '`std::jthread` is a joining thread; its destructor automatically joins, preventing the program from terminating with a running thread',
        explanation: '`std::jthread` also supports cooperative interruption, making it a safer and more robust tool for thread management.'
    },
    {
        id: 949,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'promise' and a 'future' in C++ concurrency?",
        type: 'mcq',
        options: [
            'A guarantee that code will work',
            'A mechanism for communicating a result between asynchronous tasks. A `promise` is used to write the result, and a `future` is used to read it.',
            'A security feature',
            'A way to schedule tasks'
        ],
        answer: 'A mechanism for communicating a result between asynchronous tasks. A `promise` is used to write the result, and a `future` is used to read it.',
        explanation: 'The `future` allows a thread to wait for the result produced by another thread.'
    },
    {
        id: 950,
        testId: 7,
        difficulty: 'hard',
        question: "What are 'fold expressions' in C++17?",
        type: 'mcq',
        options: [
            'A way to fold paper',
            'A concise syntax for applying a binary operator to all the arguments of a parameter pack in a variadic template',
            'A UI component',
            'A file compression technique'
        ],
        answer: 'A concise syntax for applying a binary operator to all the arguments of a parameter pack in a variadic template',
        explanation: 'For example, `(pack + ...)` could sum all the numbers in a parameter pack.'
    },
    {
        id: 951,
        testId: 7,
        difficulty: 'hard',
        question: "What is the `[[nodiscard]]` attribute?",
        type: 'mcq',
        options: [
            'It indicates a card that should not be discarded',
            'An attribute that can be applied to a function to encourage the compiler to issue a warning if the function\'s return value is ignored',
            'It deletes the return value',
            'It marks a function as deprecated'
        ],
        answer: 'An attribute that can be applied to a function to encourage the compiler to issue a warning if the function\'s return value is ignored',
        explanation: 'It is useful for functions that return an error code or an object whose only purpose is its RAII side-effect (like a lock guard).'
    },
    {
        id: 952,
        testId: 7,
        difficulty: 'hard',
        question: "What is the 'Rule of Zero' and how is it achieved?",
        type: 'subjective',
        answer: "The Rule of Zero is a C++ guideline stating that a class should not need to define any of the special member functions (destructor, copy/move constructors, copy/move assignment operators). It is achieved by composing the class from members that already manage their own resources correctly, primarily through the use of standard library containers and smart pointers (`std::vector`, `std::string`, `std::unique_ptr`, `std::shared_ptr`).",
        explanation: "Following the Rule of Zero leads to simpler, safer, and more maintainable code."
    },
    {
        id: 953,
        testId: 7,
        difficulty: 'hard',
        question: "Explain what happens when an exception is thrown. What is 'stack unwinding'?",
        type: 'subjective',
        answer: "When an exception is thrown, the normal flow of control is interrupted. The runtime system looks up the call stack for a matching `catch` block. As it searches, it exits each function scope in a process called 'stack unwinding'. During stack unwinding, destructors for all local objects that have been constructed in the exited scopes are called. This ensures that resources are properly released, a key guarantee of the RAII idiom.",
        explanation: "Proper exception handling and RAII are crucial for writing robust C++ applications."
    },
    {
        id: 954,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between a `std::thread` and `std::async`?",
        type: 'subjective',
        answer: "`std::thread` is a low-level construct that directly represents a system thread of execution. You are responsible for managing its lifecycle (joining or detaching). `std::async` is a higher-level task-based abstraction. It runs a function asynchronously (potentially in a new thread, or deferred) and returns a `std::future` which can be used to retrieve the function's return value. `std::async` handles thread management and result passing automatically.",
        explanation: "For task-based parallelism where you need a return value, `std::async` is generally preferred."
    },
    {
        id: 955,
        testId: 7,
        difficulty: 'hard',
        question: "What is the PIMPL (Pointer to Implementation) idiom and what are its benefits?",
        type: 'subjective',
        answer: "The PIMPL idiom is a technique where the private data members of a class are hidden away in a separate implementation class, and the public class only holds a pointer to this implementation. The main benefit is that it decouples the class's interface from its implementation, reducing compile-time dependencies. Changes to the private implementation do not require client code that uses the class to be recompiled, only relinked.",
        explanation: "This is crucial for speeding up build times in large C++ projects."
    },
    {
        id: 956,
        testId: 7,
        difficulty: 'hard',
        question: "What is the 'static initialization order fiasco'?",
        type: 'subjective',
        answer: "This is a problem that can occur when the initialization of a static object in one translation unit depends on another static object in a different translation unit. The C++ standard does not guarantee the order of initialization of static objects across different translation units. This can lead to crashes or undefined behavior if an object is used before it is constructed. A common solution is the 'Construct on First Use' idiom, where the static object is wrapped in a function and created the first time the function is called.",
        explanation: "It's a subtle but dangerous issue in C++ programs with global state."
    },
    {
        id: 957,
        testId: 7,
        difficulty: 'hard',
        question: "What is a `std::future` and how is it used?",
        type: 'subjective',
        answer: "A `std::future` is a concurrency mechanism that represents the result of an asynchronous operation. You can obtain a future from `std::async`, `std::packaged_task`, or `std::promise`. The thread that has the future can call its `.get()` method, which will block until the asynchronous operation completes and the result is available. It's a way to retrieve a value from a task running in a different thread.",
        explanation: "Futures are a key component of task-based concurrency in C++."
    },
    {
        id: 958,
        testId: 7,
        difficulty: 'hard',
        question: "What are concepts in C++20 and how do they improve on SFINAE?",
        type: 'subjective',
        answer: "Concepts are a C++20 feature that allows you to specify constraints on template parameters. They formalize the requirements for a type to be used with a template. This greatly improves upon SFINAE by providing much clearer, more direct error messages at compile time when a type does not meet the template's requirements. Instead of a cascade of cryptic template substitution errors, the compiler can state that a type 'does not satisfy the concept X'.",
        explanation: "Concepts make writing and using templates significantly easier and safer."
    },
    {
        id: 959,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'type erasure' and give an example from the standard library.",
        type: 'subjective',
        answer: "Type erasure is a technique where you hide the specific type details of an object and expose it through a uniform, generic interface. This allows you to store objects of different concrete types in a collection. A prime example from the standard library is `std::function`. A `std::function<void()>` object can store any callable entity (a raw function pointer, a lambda, a functor) that takes no arguments and returns void, 'erasing' the details of its specific type.",
        explanation: "`std::any` is another example of type erasure."
    },
    {
        id: 960,
        testId: 7,
        difficulty: 'hard',
        question: "What are some advantages and disadvantages of multiple inheritance?",
        type: 'subjective',
        answer: "The main advantage of multiple inheritance is that it allows a class to inherit and combine behaviors from multiple base classes, which can be a powerful modeling tool. The main disadvantages are increased complexity and the potential for ambiguity, most notably the 'diamond problem'. It can make class hierarchies difficult to understand and can lead to name collisions if different base classes have members with the same name.",
        explanation: "Due to its complexity, many languages like Java and C# opt for single inheritance with multiple interface implementation instead."
    },
    {
        id: 961,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between a `std::mutex` and a `std::atomic`?",
        type: 'subjective',
        answer: "A `std::mutex` is a heavyweight synchronization primitive used to protect a critical section of code, ensuring that only one thread can execute it at a time. It involves locking and unlocking. A `std::atomic` is a template used to provide atomic (indivisible) operations on a single variable (like an integer or a pointer). Atomic operations are typically implemented using special hardware instructions and are much faster than using a mutex for simple operations like incrementing a counter.",
        explanation: "Use atomics for simple, single-variable operations; use mutexes to protect larger, more complex data structures or code blocks."
    },
    {
        id: 962,
        testId: 7,
        difficulty: 'hard',
        question: "What is 'Name Mangling' and why does C++ use it?",
        type: 'subjective',
        answer: "Name mangling is a process where the C++ compiler encodes function and variable names with additional information about their type, namespace, and parameters. This is necessary to support features like function overloading, where multiple functions can have the same name but different parameter lists. The mangled names ensure that each distinct function has a unique identifier for the linker.",
        explanation: "The `extern \"C\"` linkage specifier is used to tell the compiler not to mangle a name, allowing C++ code to interface with C code."
    },
    {
        id: 963,
        testId: 7,
        difficulty: 'hard',
        question: "What is CRTP (Curiously Recurring Template Pattern)?",
        type: 'subjective',
        answer: "CRTP is a C++ idiom where a class `X` derives from a base class template that is instantiated with `X` itself (e.g., `class X : public Base<X>`). This pattern can be used to achieve static (compile-time) polymorphism. The base class template can `static_cast` its `this` pointer to a pointer of the derived type (`X*`) to call methods on the derived class, avoiding the overhead of virtual function calls.",
        explanation: "It's an advanced technique for compile-time code generation and optimization."
    },
    {
        id: 964,
        testId: 7,
        difficulty: 'hard',
        question: "What are 'fold expressions' in C++17?",
        type: 'subjective',
        answer: "Fold expressions provide a concise syntax for applying a binary operator to all the arguments of a parameter pack in a variadic template. For example, to sum all arguments in a pack, you could write a function that simply returns `(pack + ...)`. This eliminates the need for complex recursive template code that was required in C++11/14 to achieve the same result.",
        explanation: "They significantly simplify working with variadic templates."
    },
    {
        id: 965,
        testId: 7,
        difficulty: 'hard',
        question: "What are coroutines in C++20?",
        type: 'subjective',
        answer: "Coroutines are a feature in C++20 that allow a function to be suspended and resumed. A coroutine is a function that can pause its execution by using the `co_await`, `co_yield`, or `co_return` keywords and be resumed later. This provides a powerful, stackless mechanism for writing asynchronous code that looks more like synchronous code, avoiding issues like 'callback hell'.",
        explanation: "They are a fundamental building block for modern asynchronous programming in C++."
    },
     // Test 8: 40 Questions
     {
        id: 966,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'AddressSanitizer' (ASan)?",
        type: 'mcq',
        options: [
            'A tool for cleaning addresses',
            'A compile-time and run-time tool for detecting memory access errors, such as out-of-bounds access and use-after-free bugs',
            'A C++ standard library feature',
            'A type of smart pointer'
        ],
        answer: 'A compile-time and run-time tool for detecting memory access errors, such as out-of-bounds access and use-after-free bugs',
        explanation: 'ASan is a powerful debugging tool integrated into compilers like Clang and GCC that helps find common and difficult memory bugs.'
    },
    {
        id: 967,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of the `extern \"C\"` linkage specifier?",
        type: 'mcq',
        options: [
            'To indicate external storage',
            'To prevent the C++ compiler from name-mangling a function\'s name, allowing it to be called from C code',
            'To import a C library',
            'To create a C-style struct'
        ],
        answer: 'To prevent the C++ compiler from name-mangling a function\'s name, allowing it to be called from C code',
        explanation: 'It is essential for creating C-compatible libraries from C++ or calling C functions from C++.'
    },
    {
        id: 968,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'memory barrier' (or 'memory fence')?",
        type: 'mcq',
        options: [
            'A physical barrier in RAM',
            'A low-level instruction that ensures memory operations before the barrier are completed before memory operations after the barrier are started',
            'A security feature',
            'A C++ keyword'
        ],
        answer: 'A low-level instruction that ensures memory operations before the barrier are completed before memory operations after the barrier are started',
        explanation: 'Memory barriers are crucial for enforcing memory ordering in lock-free concurrent programming, preventing issues caused by compiler reordering or CPU out-of-order execution.'
    },
    {
        id: 969,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'SIMD'?",
        type: 'mcq',
        options: [
            'A simple instruction set',
            'Single Instruction, Multiple Data - a class of parallel computers that allows a single instruction to operate on multiple data points simultaneously',
            'A C++ library',
            'A debugging tool'
        ],
        answer: 'Single Instruction, Multiple Data - a class of parallel computers that allows a single instruction to operate on multiple data points simultaneously',
        explanation: 'Modern CPUs have SIMD instruction sets (like SSE, AVX) that can be used to significantly speed up numerical and data-processing tasks.'
    },
    {
        id: 970,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'trivial' class in C++?",
        type: 'mcq',
        options: [
            'A class that is easy to understand',
            'A class with a simple layout and default special member functions, allowing it to be safely copied with `memcpy`',
            'A class with no member functions',
            'A base class'
        ],
        answer: 'A class with a simple layout and default special member functions, allowing it to be safely copied with `memcpy`',
        explanation: 'Triviality is a formal property of a type that the compiler can use for optimizations.'
    },
    {
        id: 971,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'Three-Way Comparison' operator (`<=>`) in C++20?",
        type: 'mcq',
        options: [
            'A spaceship operator from a game',
            'An operator that compares two values and returns a result indicating whether the left operand is less than, equal to, or greater than the right operand',
            'A complex assignment operator',
            'A bitwise operator'
        ],
        answer: 'An operator that compares two values and returns a result indicating whether the left operand is less than, equal to, or greater than the right operand',
        explanation: 'It simplifies the implementation of all comparison operators (`<`, `>`, `==`, etc.) by allowing the compiler to generate them from a single `operator<=>`.'
    },
    {
        id: 972,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'aliasing' in the context of pointers?",
        type: 'mcq',
        options: [
            'Giving a pointer a nickname',
            'A situation where two or more different pointers refer to the same memory location',
            'A compiler error',
            'Creating an alias for a data type'
        ],
        answer: 'A situation where two or more different pointers refer to the same memory location',
        explanation: 'Strict aliasing rules in C++ allow the compiler to make optimizations, but violating them (e.g., accessing an `int` through a `float*`) leads to undefined behavior.'
    },
    {
        id: 973,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'placement delete'?",
        type: 'mcq',
        options: [
            'A way to delete files',
            'The corresponding operator for 'placement new', used to call an object\'s destructor without deallocating its memory',
            'A syntax error',
            'A feature for deleting parts of an object'
        ],
        answer: 'The corresponding operator for \'placement new\', used to call an object\'s destructor without deallocating its memory',
        explanation: 'It is necessary when you have constructed an object in pre-allocated memory and need to destroy it before the memory block itself is freed.'
    },
    {
        id: 974,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'thread sanitizer' (TSan)?",
        type: 'mcq',
        options: [
            'A tool for cleaning threads',
            'A dynamic analysis tool for detecting data races in multithreaded code',
            'A static analysis tool',
            'A C++ library'
        ],
        answer: 'A dynamic analysis tool for detecting data races in multithreaded code',
        explanation: 'Like ASan, TSan is integrated into compilers like Clang and GCC and is invaluable for debugging concurrent C++ code.'
    },
    {
        id: 975,
        testId: 8,
        difficulty: 'expert',
        question: "What is `std::variant` (C++17)?",
        type: 'mcq',
        options: [
            'A variable that can change',
            'A type-safe union that can hold a value from a set of specified alternative types',
            'A dynamic array',
            'A string type'
        ],
        answer: 'A type-safe union that can hold a value from a set of specified alternative types',
        explanation: 'It provides a safe way to store one of several different types in a single object, unlike a traditional C-style union.'
    },
    {
        id: 976,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of `std::launder` in C++17?",
        type: 'mcq',
        options: [
            'To clean up memory',
            'A function used in very specific low-level situations to obtain a valid pointer to a new object created within the storage of an old object',
            'To hide a pointer\'s value',
            'To format code'
        ],
        answer: 'A function used in very specific low-level situations to obtain a valid pointer to a new object created within the storage of an old object',
        explanation: 'It is an escape hatch for certain pointer optimization rules and is needed only in rare, advanced memory management scenarios.'
    },
    {
        id: 977,
        testId: 8,
        difficulty: 'expert',
        question: "What does `final` specifier do on a class or a virtual function?",
        type: 'mcq',
        options: [
            'It makes the class or function the last one in the file',
            'On a class, it prevents it from being inherited from. On a virtual function, it prevents it from being overridden in derived classes.',
            'It is a comment indicating the code is final',
            'It deletes the class or function'
        ],
        answer: 'On a class, it prevents it from being inherited from. On a virtual function, it prevents it from being overridden in derived classes.',
        explanation: '`final` is a useful tool for controlling class hierarchies and can enable compiler optimizations.'
    },
    {
        id: 978,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'copy elision'?",
        type: 'mcq',
        options: [
            'A syntax error',
            'A compiler optimization technique that eliminates unnecessary copying of objects, especially when returning a value from a function',
            'A way to delete a copy of an object',
            'A memory allocation strategy'
        ],
        answer: 'A compiler optimization technique that eliminates unnecessary copying of objects, especially when returning a value from a function',
        explanation: 'Modern C++ standards have made copy elision mandatory in certain situations (guaranteed copy elision), improving performance.'
    },
    {
        id: 979,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'lock-free' data structure?",
        type: 'mcq',
        options: [
            'A data structure that is not secure',
            'A concurrent data structure that guarantees that at least one thread will make progress, without using traditional locks like mutexes',
            'A data structure that cannot be locked',
            'A single-threaded data structure'
        ],
        answer: 'A concurrent data structure that guarantees that at least one thread will make progress, without using traditional locks like mutexes',
        explanation: 'Lock-free programming is very difficult but can offer significant performance benefits by avoiding lock contention. It relies on atomic operations.'
    },
    {
        id: 980,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'static assert'?",
        type: 'mcq',
        options: [
            'An assertion that is always true',
            'A mechanism for checking a condition at compile time, causing a compile error if the condition is false',
            'A runtime assertion',
            'A comment'
        ],
        answer: 'A mechanism for checking a condition at compile time, causing a compile error if the condition is false',
        explanation: '`static_assert` is used to validate compile-time properties, such as type traits or template parameters.'
    },
    {
        id: 981,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'decorator' pattern in C++?",
        type: 'mcq',
        options: [
            'A way to style UI components',
            'A design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class',
            'A function for decorating text',
            'A memory allocation pattern'
        ],
        answer: 'A design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class',
        explanation: 'It is often implemented by creating a wrapper class that has a pointer to the decorated object and adds its own functionality.'
    },
    {
        id: 982,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'memory model' in C++?",
        type: 'mcq',
        options: [
            'A 3D model of a RAM stick',
            'A set of rules that define how memory operations from different threads appear to be ordered, crucial for correct multithreaded programming',
            'A memory allocation library',
            'A guideline for memory usage'
        ],
        answer: 'A set of rules that define how memory operations from different threads appear to be ordered, crucial for correct multithreaded programming',
        explanation: 'The C++11 memory model provides guarantees for atomic operations and data races, enabling portable concurrent code.'
    },
    {
        id: 983,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'tag dispatch'?",
        type: 'mcq',
        options: [
            'Dispatching a task to a person with a name tag',
            'A C++ technique that uses empty classes (tags) to select a specific function overload based on properties of a type, typically an iterator category',
            'A network protocol',
            'A UI event system'
        ],
        answer: 'A C++ technique that uses empty classes (tags) to select a specific function overload based on properties of a type, typically an iterator category',
        explanation: 'It allows a generic algorithm to choose an optimized implementation based on the capabilities of the iterator it is given.'
    },
    {
        id: 984,
        testId: 8,
        difficulty: 'expert',
        question: "What are 'modules' in C++20?",
        type: 'mcq',
        options: [
            'A new way to write classes',
            'A modern alternative to header files for organizing code, offering faster compilation times and better isolation',
            'A physical hardware component',
            'A package manager'
        ],
        answer: 'A modern alternative to header files for organizing code, offering faster compilation times and better isolation',
        explanation: 'Modules address many of the long-standing problems with the C++ preprocessor and `#include` system.'
    },
    {
        id: 985,
        testId: 8,
        difficulty: 'expert',
        question: "What is the `[[fallthrough]]` attribute in C++17?",
        type: 'mcq',
        options: [
            'It indicates a function will fail',
            'An attribute used in a `switch` statement to indicate that a fall-through from one case label to another is intentional, suppressing compiler warnings',
            'It causes a program to crash',
            'It is a comment'
        ],
        answer: 'An attribute used in a `switch` statement to indicate that a fall-through from one case label to another is intentional, suppressing compiler warnings',
        explanation: 'It makes the intent of the code clearer and prevents accidental fall-through bugs.'
    },
    {
        id: 986,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'volatile' member function?",
        type: 'mcq',
        options: [
            'A function that changes often',
            'A member function that can be called on `volatile`-qualified objects',
            'A function that is unsafe',
            'There is no such thing'
        ],
        answer: 'A member function that can be called on `volatile`-qualified objects',
        explanation: 'Similar to `const` member functions, a `volatile` member function is declared with the `volatile` keyword and is used in specific low-level contexts like interacting with memory-mapped hardware.'
    },
    {
        id: 987,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'A' in 'RAII'?",
        type: 'mcq',
        options: ['Acquisition', 'Allocation', 'Automatic', 'Asynchronous'],
        answer: 'Acquisition',
        explanation: 'RAII stands for "Resource Acquisition Is Initialization", a core C++ idiom for resource management.'
    },
    {
        id: 988,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'POD' type and why is it significant?",
        type: 'mcq',
        options: [
            'A type for storing peas',
            'Plain Old Data: a type that is a simple data aggregate, compatible with C memory layout, and can be safely manipulated with `memcpy`',
            'A deprecated type',
            'A type with virtual functions'
        ],
        answer: 'Plain Old Data: a type that is a simple data aggregate, compatible with C memory layout, and can be safely manipulated with `memcpy`',
        explanation: 'Knowing a type is POD allows for certain low-level optimizations and C-language interoperability.'
    },
    {
        id: 989,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'Elvis operator' (`?:`) also known as?",
        type: 'mcq',
        options: ['The spaceship operator', 'The ternary conditional operator', 'The scope resolution operator', 'The dereference operator'],
        answer: 'The ternary conditional operator',
        explanation: 'It is a concise way to write a simple if-else statement: `condition ? value_if_true : value_if_false`.'
    },
    {
        id: 990,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the C++ memory model and its importance for concurrent programming.",
        type: 'subjective',
        answer: "The C++ memory model, introduced in C++11, defines the semantics of memory access in a multithreaded environment. It specifies rules for how and when writes by one thread become visible to other threads. It provides tools like `std::atomic` and memory ordering options (e.g., `memory_order_relaxed`, `memory_order_acquire`, `memory_order_seq_cst`) to control this. Its importance lies in enabling portable, race-condition-free concurrent code that works correctly across different CPU architectures and compiler optimizations.",
        explanation: "Without a formal memory model, multithreaded programming would be non-portable and highly error-prone."
    },
    {
        id: 991,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'vptr' and a 'vtable', and how do they work together to enable dynamic polymorphism?",
        type: 'subjective',
        answer: "A 'vptr' (virtual pointer) is a hidden pointer added by the compiler to every object of a class that has virtual functions. This vptr points to a 'vtable' (virtual table), which is a static array of function pointers for that class. The vtable contains the addresses of the correct virtual functions to call for that specific class. When a virtual function is called through a base class pointer, the runtime system uses the object's vptr to find its vtable and then calls the function at the appropriate index in that table. This indirection is what allows the correct derived class method to be called.",
        explanation: "This is the low-level mechanism that implements runtime polymorphism in C++."
    },
    {
        id: 992,
        testId: 8,
        difficulty: 'expert',
        question: "What is the 'Rule of Zero' and how does it relate to RAII?",
        type: 'subjective',
        answer: "The Rule of Zero is a guideline that says a class should not need to declare any of the five special member functions (destructor, copy/move constructors, copy/move assignment operators). This is achieved by composing the class exclusively from members that correctly manage their own resources (like standard library containers and smart pointers). It relates directly to RAII because by using types that already follow RAII, the custom class automatically gets correct resource management behavior without needing to write it manually.",
        explanation: "It's the modern ideal for C++ class design, leading to simpler and safer code."
    },
    {
        id: 993,
        testId: 8,
        difficulty: 'expert',
        question: "What are forwarding references (universal references) and how do they enable perfect forwarding?",
        type: 'subjective',
        answer: "A forwarding reference is an rvalue reference (`T&&`) declared for a template type parameter `T` where `T` is deduced. In this specific context, special reference collapsing rules apply, allowing the parameter to bind to both lvalues and rvalues. Perfect forwarding is the technique of passing these arguments to another function while preserving their original value category (lvalue or rvalue). This is achieved by using `std::forward<T>` to cast the reference back to its original category.",
        explanation: "This is crucial for writing generic factory functions or wrappers that don't interfere with move semantics."
    },
    {
        id: 994,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the difference between `std::thread` and `std::jthread` (C++20).",
        type: 'subjective',
        answer: "A `std::thread` represents a raw OS thread. If its destructor is called while it is still joinable (not joined or detached), the program terminates. This makes it error-prone. A `std::jthread` (joining thread) is a C++20 improvement. Its destructor automatically calls `join()`, ensuring the thread completes before the `jthread` object is destroyed. `jthread` also has built-in support for cooperative interruption via a `stop_token`, making it a much safer and more robust threading primitive.",
        explanation: "In C++20 and later, `std::jthread` should be preferred over `std::thread`."
    },
    {
        id: 995,
        testId: 8,
        difficulty: 'expert',
        question: "What are some of the challenges and solutions for exception safety in C++?",
        type: 'subjective',
        answer: "The main challenge is ensuring that resources are not leaked and that the program remains in a valid state when an exception is thrown. The primary solution is the RAII idiom, where resource ownership is tied to object lifetime, guaranteeing cleanup via destructors during stack unwinding. Another technique is the copy-and-swap idiom for assignment operators, which provides the strong exception guarantee (the operation either succeeds completely or has no effect).",
        explanation: "Writing exception-safe code is a core discipline in C++."
    },
    {
        id: 996,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'type erasure' and what is an example of it in the C++ standard library?",
        type: 'subjective',
        answer: "Type erasure is a programming technique that allows for storing and manipulating objects of different concrete types through a common, uniform interface, hiding the specific type details. An example is `std::function`, which can wrap any callable entity (function pointer, lambda, functor) that matches a given signature. A `std::function<int(int)>` can hold any of these, 'erasing' their original distinct types and providing a single `operator()` interface.",
        explanation: "`std::any` and `std::shared_ptr` with a custom deleter are other examples."
    },
    {
        id: 997,
        testId: 8,
        difficulty: 'expert',
        question: "How do C++20 Concepts improve upon SFINAE?",
        type: 'subjective',
        answer: "SFINAE is a complex, indirect way to constrain templates that often results in long, cryptic compiler errors. C++20 Concepts provide a direct, formal way to specify constraints on template parameters. Instead of relying on substitution failures, you define a `concept` that names a set of requirements. When a template argument fails to meet a concept, the compiler can immediately issue a clear error message stating that the type does not satisfy the named concept.",
        explanation: "Concepts make generic programming more accessible, safer, and easier to debug."
    },
    {
        id: 998,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'lock-free' data structure? What are the challenges in implementing one?",
        type: 'subjective',
        answer: "A lock-free data structure is a concurrent data structure that guarantees that at least one thread will make progress in a finite number of steps, without using traditional mutual exclusion locks (mutexes). The challenges are immense: it requires a deep understanding of the C++ memory model, atomic operations (like compare-and-swap), and careful management of memory ordering to prevent subtle race conditions. The ABA problem is another significant challenge that must be addressed.",
        explanation: "Lock-free programming is extremely difficult but can offer superior performance in highly contended scenarios."
    },
    {
        id: 999,
        testId: 8,
        difficulty: 'expert',
        question: "Explain the 'static initialization order fiasco' and a common solution.",
        type: 'subjective',
        answer: "This problem occurs when a static object in one source file depends on another static object in a different source file. The C++ standard does not guarantee the order of initialization of static objects across different translation units, so one object might be used before it's constructed. The common solution is the 'Construct on First Use' idiom, where the global object is replaced by a static object inside a function that returns a reference to it. This ensures the object is constructed the first time the function is called.",
        explanation: "This avoids the ambiguity of initialization order for non-local static objects."
    },
    {
        id: 1000,
        testId: 8,
        difficulty: 'expert',
        question: "What is the PIMPL idiom and what are its primary benefits?",
        type: 'subjective',
        answer: "The PIMPL (Pointer to Implementation) idiom is a technique where the private members of a class are moved into a separate implementation struct, and the main class holds only a pointer (usually a `std::unique_ptr`) to this implementation. The primary benefit is reduced compile-time dependencies. Since the private implementation details are not in the header file, any changes to them do not require client code that includes the header to be recompiled, only relinked. It also provides a strong binary compatibility guarantee.",
        explanation: "It's a powerful tool for reducing build times in large C++ projects."
    },
    {
        id: 1001,
        testId: 8,
        difficulty: 'expert',
        question: "What are coroutines in C++20?",
        type: 'subjective',
        answer: "Coroutines are functions that can be suspended and resumed. They generalize subroutines by allowing for multiple entry points. In C++20, a function becomes a coroutine if it uses the `co_await`, `co_yield`, or `co_return` keywords. They are a powerful tool for writing asynchronous code (like network I/O or event loops) in a more sequential, readable style, avoiding 'callback hell'.",
        explanation: "Coroutines provide a foundation for stackless, cooperative multitasking."
    },
    {
        id: 1002,
        testId: 8,
        difficulty: 'expert',
        question: "What are the different memory ordering options for `std::atomic` and why do they matter?",
        type: 'subjective',
        answer: "The memory ordering options (`memory_order_relaxed`, `acquire`, `release`, `acq_rel`, `seq_cst`) specify synchronization constraints on atomic operations with respect to other memory accesses. They matter because they allow you to control the trade-off between performance and correctness. `relaxed` provides no guarantees and is fastest, while `seq_cst` (sequentially consistent) provides the strongest guarantees (a single global total order) but is slowest. Using the correct, minimal ordering required is key to writing efficient and correct lock-free code.",
        explanation: "Incorrect memory ordering can lead to subtle and difficult-to-debug race conditions."
    },
    {
        id: 1003,
        testId: 8,
        difficulty: 'expert',
        question: "What is 'aliasing' and the 'strict aliasing rule'?",
        type: 'subjective',
        answer: "Aliasing is when two or more pointers refer to the same memory location. The strict aliasing rule in C++ states that accessing an object through a pointer of an incompatible type is undefined behavior. This rule allows the compiler to make significant optimizations, assuming that pointers of different types do not point to the same memory. Violating this rule can lead to bizarre and non-deterministic bugs.",
        explanation: "For example, it's UB to write to an `int` location through a `float*`."
    },
    {
        id: 1004,
        testId: 8,
        difficulty: 'expert',
        question: "What is the difference between `std::vector`'s `size()` and `capacity()`?",
        type: 'subjective',
        answer: "`size()` returns the number of elements currently stored in the vector. `capacity()` returns the number of elements the vector can hold before it needs to reallocate its internal memory buffer. The capacity is always greater than or equal to the size. When you push an element into a full vector (size == capacity), it triggers a reallocation, which is an expensive operation.",
        explanation: "Understanding this difference is important for performance tuning when using `std::vector`."
    },
    {
        id: 1005,
        testId: 8,
        difficulty: 'expert',
        question: "What is the purpose of the three-way comparison operator `<=>` in C++20?",
        type: 'subjective',
        answer: "The three-way comparison operator (or 'spaceship operator') `operator<=>` performs a single comparison that determines if the left operand is less than, greater than, or equal to the right operand. Its main purpose is to simplify the implementation of comparison operators. By defining a single `operator<=>`, the compiler can automatically generate the corresponding `==`, `!=`, `<`, `>`, `<=`, and `>=` operators for you.",
        explanation: "It significantly reduces boilerplate code for classes that need to be comparable."
    },
    // Test 9: 45 Questions
    {
        id: 1006,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'placement new' expression and in what scenario is it used?",
        type: 'mcq',
        options: [
            'To create objects on the stack',
            'An expression that constructs an object in a pre-allocated buffer of memory',
            'A C++20 feature for placing objects',
            'A way to create global objects'
        ],
        answer: 'An expression that constructs an object in a pre-allocated buffer of memory',
        explanation: 'Placement new is used in specialized situations like implementing custom memory allocators or memory pools.'
    },
    {
        id: 1007,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'ABA problem' in lock-free programming?",
        type: 'mcq',
        options: [
            'A problem with the band ABBA',
            'A concurrency bug where a location is read twice, has the same value (A), but was changed to B and then back to A in between, leading to incorrect assumptions',
            'A syntax error',
            'A problem with the letter B'
        ],
        answer: 'A concurrency bug where a location is read twice, has the same value (A), but was changed to B and then back to A in between, leading to incorrect assumptions',
        explanation: 'This can defeat simple compare-and-swap (CAS) loops. It is often solved using hazard pointers or by tagging pointers with a version count.'
    },
    {
        id: 1008,
        testId: 9,
        difficulty: 'expert',
        question: "What is the purpose of the `volatile` keyword?",
        type: 'mcq',
        options: [
            'To make a variable immutable',
            'To indicate to the compiler that a variable can be modified by something outside the program flow (e.g., hardware), preventing optimizations that might remove reads/writes to it',
            'To create a temporary variable',
            'To make a function virtual'
        ],
        answer: 'To indicate to the compiler that a variable can be modified by something outside the program flow (e.g., hardware), preventing optimizations that might remove reads/writes to it',
        explanation: '`volatile` is primarily used for memory-mapped I/O and interacting with hardware registers.'
    },
    {
        id: 1009,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'forwarding reference'?",
        type: 'mcq',
        options: [
            'A const lvalue reference',
            'An rvalue reference (`T&&`) in a context where type `T` is deduced, allowing it to bind to both lvalues and rvalues',
            'A pointer to a reference',
            'A deprecated C++ feature'
        ],
        answer: 'An rvalue reference (`T&&`) in a context where type `T` is deduced, allowing it to bind to both lvalues and rvalues',
        explanation: 'Also known as 'universal references', they are the key mechanism behind perfect forwarding.'
    },
    {
        id: 1010,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'linkage' in C++?",
        type: 'mcq',
        options: [
            'The process of creating a `std::list`',
            'A property of an identifier that determines whether it refers to the same entity across different translation units',
            'The connection between a class and its base class',
            'A compiler setting'
        ],
        answer: 'A property of an identifier that determines whether it refers to the same entity across different translation units',
        explanation: 'Global non-static variables have external linkage, while global static variables have internal linkage.'
    },
    {
        id: 1011,
        testId: 9,
        difficulty: 'expert',
        question: "What are 'modules' in C++20?",
        type: 'mcq',
        options: [
            'A package manager for C++',
            'A modern replacement for header files that offers better isolation, faster compile times, and explicit control over what is exported',
            'A type of class',
            'A third-party library'
        ],
        answer: 'A modern replacement for header files that offers better isolation, faster compile times, and explicit control over what is exported',
        explanation: 'Modules aim to solve many of the long-standing problems of the preprocessor-based `#include` system.'
    },
    {
        id: 1012,
        testId: 9,
        difficulty: 'expert',
        question: "What is the purpose of `std::any` (C++17)?",
        type: 'mcq',
        options: [
            'To represent any number',
            'A type-safe container for single values of any type',
            'To check if any element in a container matches a condition',
            'A pointer to any type'
        ],
        answer: 'A type-safe container for single values of any type',
        explanation: 'It provides a way to hold a value of any copyable type, and its type can be queried at runtime using `any_cast`.'
    },
    {
        id: 1013,
        testId: 9,
        difficulty: 'expert',
        question: "What is the `[[nodiscard]]` attribute for?",
        type: 'mcq',
        options: [
            'To indicate a function\'s return value is not important',
            'To encourage the compiler to issue a warning if the return value of a function is ignored',
            'To delete the return value',
            'To mark a function as obsolete'
        ],
        answer: 'To encourage the compiler to issue a warning if the return value of a function is ignored',
        explanation: 'This is useful for functions whose primary purpose is to return a value or an object that manages a resource (like a lock guard).'
    },
    {
        id: 1014,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'SIMD'?",
        type: 'mcq',
        options: [
            'A simple method definition',
            'Single Instruction, Multiple Data: A class of parallel execution where one instruction operates on multiple data points simultaneously',
            'A software design pattern',
            'A debugging technique'
        ],
        answer: 'Single Instruction, Multiple Data: A class of parallel execution where one instruction operates on multiple data points simultaneously',
        explanation: 'Modern CPUs use SIMD instruction sets (like SSE and AVX) to drastically speed up numerical and vectorized computations.'
    },
    {
        id: 1015,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'PIMPL Idiom'?",
        type: 'mcq',
        options: [
            'A simple programming trick',
            'A technique to hide the private implementation of a class by holding a pointer to it, reducing compile-time dependencies',
            'A UI design pattern',
            'A memory management strategy'
        ],
        answer: 'A technique to hide the private implementation of a class by holding a pointer to it, reducing compile-time dependencies',
        explanation: 'PIMPL (Pointer to Implementation) improves build times in large projects by decoupling the interface from the implementation.'
    },
    {
        id: 1016,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'C++ Coroutine' (C++20)?",
        type: 'mcq',
        options: [
            'A daily task for a C++ developer',
            'A function that can be suspended and resumed, used for writing asynchronous code in a sequential style',
            'A type of routine maintenance',
            'A multithreaded function'
        ],
        answer: 'A function that can be suspended and resumed, used for writing asynchronous code in a sequential style',
        explanation: 'Coroutines use `co_await`, `co_yield`, and `co_return` to manage their state and are a powerful tool for async programming.'
    },
    {
        id: 1017,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'structured binding' (C++17)?",
        type: 'mcq',
        options: [
            'A way to structure `if` statements',
            'A way to declare multiple variables initialized from the members of a struct or tuple',
            'A memory allocation technique',
            'A type of `struct`'
        ],
        answer: 'A way to declare multiple variables initialized from the members of a struct or tuple',
        explanation: 'It provides a more convenient syntax for unpacking data, e.g., `auto [x, y] = my_pair;`.'
    },
    {
        id: 1018,
        testId: 9,
        difficulty: 'expert',
        question: "What is the primary motivation for using `std::string_view` over `const std::string&`?",
        type: 'mcq',
        options: [
            'It is mutable',
            'It avoids memory allocations by providing a non-owning view of a string, making it more efficient for passing substrings or C-style strings to functions',
            'It has more member functions',
            'It is safer'
        ],
        answer: 'It avoids memory allocations by providing a non-owning view of a string, making it more efficient for passing substrings or C-style strings to functions',
        explanation: 'It\'s a lightweight object that acts as a view into an existing character sequence.'
    },
    {
        id: 1019,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'variadic template'?",
        type: 'mcq',
        options: [
            'A template for variables',
            'A template that can take a variable number of template arguments',
            'A template with a lot of variations',
            'A buggy template'
        ],
        answer: 'A template that can take a variable number of template arguments',
        explanation: 'Introduced in C++11, they are used to write functions like `printf` or `make_tuple` that can accept any number of arguments.'
    },
    {
        id: 1020,
        testId: 9,
        difficulty: 'expert',
        question: "What is the difference between `std::jthread` and `std::thread`?",
        type: 'mcq',
        options: [
            '`jthread` is for Java',
            '`jthread` (C++20) is a joining thread whose destructor automatically joins, and it supports cooperative interruption',
            'They are the same',
            '`thread` is more modern'
        ],
        answer: '`jthread` (C++20) is a joining thread whose destructor automatically joins, and it supports cooperative interruption',
        explanation: '`jthread` is a safer, more robust replacement for `std::thread`.'
    },
    {
        id: 1021,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'tag dispatching'?",
        type: 'mcq',
        options: [
            'A network routing protocol',
            'A compile-time polymorphism technique that uses empty 'tag' structs to select a specific function overload based on type properties',
            'A UI event handling system',
            'A file system feature'
        ],
        answer: 'A compile-time polymorphism technique that uses empty \'tag\' structs to select a specific function overload based on type properties',
        explanation: 'It is commonly used in the STL to select an optimized algorithm based on iterator category.'
    },
    {
        id: 1022,
        testId: 9,
        difficulty: 'expert',
        question: "What is a `std::promise` in C++?",
        type: 'mcq',
        options: [
            'A guarantee of code quality',
            'A concurrency primitive that can store a value to be retrieved asynchronously by a corresponding `std::future`',
            'A function that never returns',
            'A C++ keyword'
        ],
        answer: 'A concurrency primitive that can store a value to be retrieved asynchronously by a corresponding `std::future`',
        explanation: 'A `promise` is used by the producer thread to set the value, while the consumer thread uses the `future` to get it.'
    },
    {
        id: 1023,
        testId: 9,
        difficulty: 'expert',
        question: "What does the `override` specifier do?",
        type: 'mcq',
        options: [
            'It redefines a non-virtual function',
            'It indicates that a member function is meant to override a virtual function in a base class, causing a compile error if it doesn\'t',
            'It overrides the default compiler behavior',
            'It is an alias for `virtual`'
        ],
        answer: 'It indicates that a member function is meant to override a virtual function in a base class, causing a compile error if it doesn\'t',
        explanation: 'Using `override` is a best practice that prevents subtle bugs from typos in function signatures.'
    },
    {
        id: 1024,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'user-defined literal'?",
        type: 'mcq',
        options: [
            'A literal value defined in a user config file',
            'A C++11 feature allowing the creation of custom literal suffixes to produce objects of user-defined types',
            'A long comment',
            'A special type of variable'
        ],
        answer: 'A C++11 feature allowing the creation of custom literal suffixes to produce objects of user-defined types',
        explanation: 'For example, you could define `operator"" _km` to create a `Distance` object from `10.0_km`.'
    },
    {
        id: 1025,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'memory model'?",
        type: 'mcq',
        options: [
            'A diagram of a computer\'s memory',
            'The specification in a programming language that defines how memory operations by different threads are ordered and visible to each other',
            'A memory allocation library',
            'A hardware component'
        ],
        answer: 'The specification in a programming language that defines how memory operations by different threads are ordered and visible to each other',
        explanation: 'The C++11 memory model is what makes portable lock-free programming possible.'
    },
    {
        id: 1026,
        testId: 9,
        difficulty: 'expert',
        question: "What is the `final` specifier used for?",
        type: 'mcq',
        options: [
            'To indicate the final version of a program',
            'To prevent a class from being inherited from, or a virtual function from being overridden',
            'To finalize an object\'s state',
            'A comment'
        ],
        answer: 'To prevent a class from being inherited from, or a virtual function from being overridden',
        explanation: '`final` allows developers to control the extension points of their class hierarchies.'
    },
    {
        id: 1027,
        testId: 9,
        difficulty: 'expert',
        question: "What is `std::any` (C++17)?",
        type: 'mcq',
        options: [
            'A pointer to `void`',
            'A type-safe container for single values of any copyable type',
            'A boolean that can be true or false',
            'A container for any number of elements'
        ],
        answer: 'A type-safe container for single values of any copyable type',
        explanation: 'It provides a safe, modern alternative to using `void*` for storing objects of unknown type.'
    },
    {
        id: 1028,
        testId: 9,
        difficulty: 'expert',
        question: "What is a 'functor'?",
        type: 'mcq',
        options: [
            'A function pointer',
            'An object of a class that overloads the function-call operator `operator()`',
            'A C++ keyword',
            'A lambda expression'
        ],
        answer: 'An object of a class that overloads the function-call operator `operator()`',
        explanation: 'Functors can be used like functions but have the advantage of being able to store state as member variables.'
    },
    {
        id: 1029,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'ADL' (Argument-Dependent Lookup)?",
        type: 'mcq',
        options: [
            'A debugging tool',
            'A set of rules for looking up unqualified function names, which considers the namespaces of the function\'s arguments',
            'A memory profiling technique',
            'A linker setting'
        ],
        answer: 'A set of rules for looking up unqualified function names, which considers the namespaces of the function\'s arguments',
        explanation: 'ADL is why code like `std::cout << my_object;` can find a custom `operator<<` in your object\'s namespace.'
    },
    {
        id: 1030,
        testId: 9,
        difficulty: 'expert',
        question: "What is `std::variant`?",
        type: 'mcq',
        options: [
            'A variable that changes',
            'A C++17 type-safe union that can hold a value from a specified set of alternative types',
            'A dynamic array',
            'A key-value map'
        ],
        answer: 'A C++17 type-safe union that can hold a value from a specified set of alternative types',
        explanation: 'It provides a safe way to represent a value that can be one of several distinct types.'
    },
    {
        id: 1031,
        testId: 9,
        difficulty: 'expert',
        question: "What does it mean for a constructor to be `explicit`?",
        type: 'mcq',
        options: [
            'The constructor is public',
            'It prevents the constructor from being used for implicit type conversions',
            'The constructor is defined outside the class',
            'The constructor is deleted'
        ],
        answer: 'It prevents the constructor from being used for implicit type conversions',
        explanation: 'This forces more explicit and often safer code by preventing surprising, unintended conversions.'
    },
    {
        id: 1032,
        testId: 9,
        difficulty: 'expert',
        question: "What is the purpose of `std::chrono`?",
        type: 'mcq',
        options: [
            'To work with character sets',
            'A C++ library for working with time durations, time points, and clocks in a type-safe way',
            'To create chronographs',
            'To manage threads'
        ],
        answer: 'A C++ library for working with time durations, time points, and clocks in a type-safe way',
        explanation: 'It provides a robust and portable way to handle time-related programming.'
    },
    {
        id: 1033,
        testId: 9,
        difficulty: 'expert',
        question: "Explain the purpose and mechanics of the PIMPL (Pointer to Implementation) idiom.",
        type: 'subjective',
        answer: "The PIMPL idiom is a technique to decouple a class's interface from its implementation. The public class (handle) holds only a private pointer (usually a `std::unique_ptr`) to a separate implementation class (body) which contains all the private data members and methods. This reduces compile-time dependencies, as client code only depends on the handle's header file. Changes to the implementation only require relinking, not recompiling all clients, which drastically speeds up builds in large projects.",
        explanation: "It's a powerful tool for creating stable binary interfaces (ABIs) and reducing build times."
    },
    {
        id: 1034,
        testId: 9,
        difficulty: 'expert',
        question: "What is SFINAE and why are C++20 Concepts considered an improvement?",
        type: 'subjective',
        answer: "SFINAE (Substitution Failure Is Not An Error) is a template metaprogramming principle where an invalid substitution of template parameters during overload resolution is not a compile error, but simply removes that overload from consideration. Concepts are a C++20 feature that provides a direct and formal way to specify constraints on template parameters. Concepts are an improvement because they provide vastly clearer error messages. Instead of a cascade of cryptic template errors, the compiler can directly state that a type 'does not satisfy concept X'.",
        explanation: "Concepts make generic programming safer and much easier to debug."
    },
    {
        id: 1035,
        testId: 9,
        difficulty: 'expert',
        question: "What is the 'static initialization order fiasco' and how is it solved?",
        type: 'subjective',
        answer: "This problem occurs when the constructor of a static object in one source file depends on another static object in a different source file. The C++ standard does not guarantee the initialization order of static objects across different translation units, leading to undefined behavior if one is used before it's constructed. The common solution is the 'Construct on First Use' idiom, where the global object is replaced by a static object inside a function that returns a reference to it. This ensures the object is constructed only when the function is first called.",
        explanation: "This is a classic problem related to global state in C++."
    },
    {
        id: 1036,
        testId: 9,
        difficulty: 'expert',
        question: "Describe the difference between `std::mutex`, `std::recursive_mutex`, and `std::shared_mutex`.",
        type: 'subjective',
        answer: "`std::mutex` is a standard mutual exclusion lock. `std::recursive_mutex` allows the same thread to lock the mutex multiple times (recursively) without deadlocking. `std::shared_mutex` (a reader-writer lock) allows for two levels of access: shared (multiple threads can acquire a shared lock for reading) and exclusive (only one thread can acquire an exclusive lock for writing).",
        explanation: "Choosing the correct mutex type is important for performance and correctness in multithreaded code."
    },
    {
        id: 1037,
        testId: 9,
        difficulty: 'expert',
        question: "What is `std::forward` and how does it relate to perfect forwarding?",
        type: 'subjective',
        answer: "`std::forward` is a utility function used to cast a forwarding reference (or universal reference) back to its original value category (lvalue or rvalue). This is the key mechanism that enables perfect forwarding, which is the ability of a function template to pass its arguments to another function while preserving their lvalue/rvalue nature. This avoids unnecessary copies and allows move semantics to work through wrapper functions.",
        explanation: "It's a conditional cast to an rvalue reference."
    },
    {
        id: 1038,
        testId: 9,
        difficulty: 'expert',
        question: "What is the ABA problem in lock-free programming?",
        type: 'subjective',
        answer: "The ABA problem is a concurrency bug where a memory location is read twice by a thread using a compare-and-swap (CAS) operation. The thread sees value A both times and assumes nothing has changed. However, in between the reads, another thread changed the value to B and then back to A. This can lead to data corruption. It is often solved by using a 'tagged pointer' or a version counter along with the value.",
        explanation: "It's a subtle but critical problem to solve when implementing lock-free data structures."
    },
    {
        id: 1039,
        testId: 9,
        difficulty: 'expert',
        question: "What are the C++ memory ordering guarantees (`std::memory_order`)?",
        type: 'subjective',
        answer: "They are options for atomic operations that specify synchronization constraints with respect to other memory accesses. They range from `memory_order_relaxed` (no ordering guarantees, just atomicity) to `memory_order_seq_cst` (sequentially consistent, the strongest guarantee). Acquire-release ordering (`memory_order_acquire`, `memory_order_release`) is used to synchronize memory between threads. These are essential for writing correct and efficient lock-free code.",
        explanation: "Incorrect memory ordering can lead to very subtle race conditions."
    },
    {
        id: 1040,
        testId: 9,
        difficulty: 'expert',
        question: "Explain what happens during a `dynamic_cast` and when it should be used.",
        type: 'subjective',
        answer: "`dynamic_cast` is used for safely downcasting a base class pointer or reference to a derived class pointer or reference. It performs a runtime check to ensure that the object being pointed to is actually an instance of the target derived class. If the cast is successful, it returns a valid pointer; otherwise, for pointers, it returns `nullptr`. For references, it throws `std::bad_cast` on failure. It should be used when you need to perform a downcast and are unsure of the object's dynamic type.",
        explanation: "It requires the base class to be polymorphic (have at least one virtual function)."
    },
    {
        id: 1041,
        testId: 9,
        difficulty: 'expert',
        question: "What are C++20 coroutines and how do they differ from threads?",
        type: 'subjective',
        answer: "Coroutines are functions that can be suspended and resumed, providing a form of cooperative, stackless multitasking. A thread is a pre-emptive, OS-level construct with its own stack. Coroutines are much more lightweight than threads. They don't block; instead, they suspend execution and return control to the caller. This makes them ideal for I/O-bound asynchronous operations, allowing a single thread to manage thousands of concurrent operations efficiently.",
        explanation: "Threads are for parallelism; coroutines are for concurrency."
    },
    {
        id: 1042,
        testId: 9,
        difficulty: 'expert',
        question: "What is the purpose of the 'spaceship operator' (`<=>`) in C++20?",
        type: 'subjective',
        answer: "The three-way comparison operator (`<=>`) performs a single comparison that determines if one value is less than, equal to, or greater than another. Its main purpose is to simplify the implementation of comparison operators for a class. By defining a single `operator<=>`, the compiler can automatically generate the corresponding `==`, `!=`, `<`, `>`, `<=`, and `>=` operators for you, significantly reducing boilerplate code.",
        explanation: "It simplifies the process of making a custom type fully comparable."
    },
    {
        id: 1043,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'undefined behavior' (UB) and why is it so dangerous in C++?",
        type: 'subjective',
        answer: "Undefined behavior is behavior that results from code whose semantics are not defined by the C++ standard (e.g., dereferencing a null pointer, signed integer overflow). It is dangerous because the standard places no requirements on the compiler's behavior. The program could crash, produce incorrect results, corrupt data, or appear to work correctly, only to fail later in a completely different part of the code. This makes UB bugs extremely difficult to diagnose and reason about.",
        explanation: "Avoiding UB is a primary goal when writing safe and reliable C++ code."
    },
    {
        id: 1044,
        testId: 9,
        difficulty: 'expert',
        question: "How does the 'copy-and-swap' idiom provide strong exception safety?",
        type: 'subjective',
        answer: "The idiom works by implementing the assignment operator via a by-value parameter, which triggers the copy constructor to create a local copy. Then, a non-throwing `swap` function is called to exchange the state of the current object with the local copy. When the local copy goes out of scope, its destructor cleans up the old state. If the initial copy construction throws an exception, the original object is left unmodified. Because the `swap` is non-throwing, the operation either succeeds completely or has no effect.",
        explanation: "It provides the 'all or nothing' guarantee."
    },
    {
        id: 1045,
        testId: 9,
        difficulty: 'expert',
        question: "What is 'tag dispatching' and how is it used in the STL?",
        type: 'subjective',
        answer: "Tag dispatching is a compile-time polymorphism technique. It uses empty structs (tags) to represent properties of a type. A generic function can then have multiple overloads that take these different tag types as an argument. This allows the compiler to select the most efficient implementation based on the properties of the type. In the STL, it's used to select optimized algorithms based on iterator category (e.g., a fast version for random-access iterators and a slower one for input iterators).",
        explanation: "It's a way to achieve compile-time optimization through function overloading."
    },
    {
        id: 1046,
        testId: 9,
        difficulty: 'expert',
        question: "What is the difference between a `union` and a `std::variant`?",
        type: 'subjective',
        answer: "A `union` is a C-style feature that can hold values of different types in the same memory location, but it is not type-safe; it does not keep track of which type is currently active. A `std::variant` (C++17) is a type-safe union. It can hold a value from a specified set of types, and it always knows which type it currently holds. Accessing the wrong type is a compile-time or runtime error, making it much safer than a raw union.",
        explanation: "Always prefer `std::variant` over a raw `union` in modern C++."
    },
    {
        id: 1047,
        testId: 9,
        difficulty: 'expert',
        question: "What is the strict aliasing rule?",
        type: 'subjective',
        answer: "The strict aliasing rule is a C++ rule that allows the compiler to make optimizations based on the assumption that pointers of different, incompatible types do not point to (alias) the same memory location. Accessing an object through a pointer of an incompatible type (e.g., reading an `int` through a `float*`) is undefined behavior. This rule enables aggressive optimizations but requires careful pointer usage from the programmer.",
        explanation: "Violating this rule can lead to very strange and hard-to-debug optimizer-induced bugs."
    },
    {
        id: 1048,
        testId: 9,
        difficulty: 'expert',
        question: "What is the difference between a `std::lock_guard` and `std::unique_lock`?",
        type: 'subjective',
        answer: "`std::lock_guard` is a simple RAII wrapper for a mutex. It locks the mutex in its constructor and unlocks it in its destructor. It cannot be unlocked early or moved. `std::unique_lock` is a more flexible RAII wrapper. It also locks/unlocks automatically, but it allows for manual unlocking, deferred locking, and can be moved. This flexibility makes it necessary for use with condition variables.",
        explanation: "Use `lock_guard` for simple cases; use `unique_lock` when you need more control."
    },
    {
        id: 1049,
        testId: 9,
        difficulty: 'expert',
        question: "What are some of the potential pitfalls of multiple inheritance?",
        type: 'subjective',
        answer: "The main pitfalls are increased complexity and ambiguity. The 'diamond problem' is the classic example of ambiguity, where a class inherits from two classes that share a common base. This can lead to ambiguity in member access, which must be resolved with virtual inheritance. It can also lead to name collisions if different base classes have members with the same name. Because of this complexity, it is often used sparingly.",
        explanation: "Many modern languages opt for single inheritance with multiple interface implementation to avoid these issues."
    },
    {
        id: 1050,
        testId: 9,
        difficulty: 'expert',
        question: "What is CRTP (Curiously Recurring Template Pattern)?",
        type: 'subjective',
        answer: "CRTP is a C++ idiom where a class `X` derives from a base class template that is instantiated with `X` itself (e.g., `class X : public Base<X>`). This pattern can be used to achieve static (compile-time) polymorphism. The base class template can `static_cast` its `this` pointer to a pointer of the derived type (`X*`) to call methods on the derived class, avoiding the overhead of virtual function calls.",
        explanation: "It's an advanced technique for compile-time code generation and optimization."
    },
    // Test 10: 50 Questions
    {
        id: 1051,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between `std::map` and `std::unordered_map` in terms of performance and memory usage?",
        type: 'mcq',
        options: [
            '`map` is always faster',
            '`unordered_map` has average O(1) lookups but can have higher memory overhead due to the hash table, while `map` has O(log n) lookups and is more memory-compact',
            '`unordered_map` uses less memory',
            'They have identical performance and memory usage'
        ],
        answer: '`unordered_map` has average O(1) lookups but can have higher memory overhead due to the hash table, while `map` has O(log n) lookups and is more memory-compact',
        explanation: '`unordered_map` is generally preferred for performance unless sorted iteration is required.'
    },
    {
        id: 1052,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'forwarding reference' (also known as a 'universal reference')?",
        type: 'mcq',
        options: [
            'A `const&`',
            'An rvalue reference (`T&&`) in a templated context where `T` is deduced, allowing it to bind to both lvalues and rvalues',
            'A pointer to a reference',
            'A reference that is always moved'
        ],
        answer: 'An rvalue reference (`T&&`) in a templated context where `T` is deduced, allowing it to bind to both lvalues and rvalues',
        explanation: 'This is the key mechanism that, combined with `std::forward`, enables perfect forwarding.'
    },
    {
        id: 1053,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary purpose of the `volatile` keyword?",
        type: 'mcq',
        options: [
            'To make a variable constant',
            'To inform the compiler that a variable can be modified by external means, preventing certain optimizations',
            'To create a temporary variable',
            'To make a variable thread-safe'
        ],
        answer: 'To inform the compiler that a variable can be modified by external means, preventing certain optimizations',
        explanation: 'It is used for memory-mapped hardware or variables modified by signal handlers or other threads without synchronization.'
    },
    {
        id: 1054,
        testId: 10,
        difficulty: 'expert',
        question: "What is the ABA problem?",
        type: 'mcq',
        options: [
            'A compiler error',
            'A concurrency bug where a value is read as A, changed to B, then back to A, fooling a compare-and-swap loop',
            'A problem with musical bands',
            'A memory allocation issue'
        ],
        answer: 'A concurrency bug where a value is read as A, changed to B, then back to A, fooling a compare-and-swap loop',
        explanation: 'This is a subtle but critical issue in lock-free programming.'
    },
    {
        id: 1055,
        testId: 10,
        difficulty: 'expert',
        question: "What is the main advantage of C++20 Modules over header files?",
        type: 'mcq',
        options: [
            'They support more data types',
            'They offer better isolation (no macro leakage) and can significantly improve compile times',
            'They are easier to write',
            'They are required for object-oriented programming'
        ],
        answer: 'They offer better isolation (no macro leakage) and can significantly improve compile times',
        explanation: 'Modules are a modern, more robust way to organize C++ code.'
    },
    {
        id: 1056,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'concept' in C++20?",
        type: 'mcq',
        options: [
            'A general idea',
            'A named set of requirements on a template parameter, which improves compiler errors and code clarity',
            'A type of variable',
            'A design pattern'
        ],
        answer: 'A named set of requirements on a template parameter, which improves compiler errors and code clarity',
        explanation: 'Concepts provide a direct way to express constraints on generic code.'
    },
    {
        id: 1057,
        testId: 10,
        difficulty: 'expert',
        question: "What is the purpose of `std::jthread` from C++20?",
        type: 'mcq',
        options: [
            'It is a thread for Java integration',
            'It is a safer version of `std::thread` that automatically joins on destruction and supports cooperative interruption',
            'It is a faster thread',
            'It is a thread for UI operations'
        ],
        answer: 'It is a safer version of `std::thread` that automatically joins on destruction and supports cooperative interruption',
        explanation: '`jthread` helps to prevent common bugs associated with raw thread management.'
    },
    {
        id: 1058,
        testId: 10,
        difficulty: 'expert',
        question: "What does 'SFINAE' stand for?",
        type: 'mcq',
        options: [
            'Standard Failure Is Not An Exception',
            'Substitution Failure Is Not An Error',
            'Software Failure Is Never an Error',
            'Simple Function Invocation And Execution'
        ],
        answer: 'Substitution Failure Is Not An Error',
        explanation: 'It is a C++ principle that makes advanced template metaprogramming techniques possible.'
    },
    {
        id: 1059,
        testId: 10,
        difficulty: 'expert',
        question: "What is the return type of the spaceship operator (`<=>`)?",
        type: 'mcq',
        options: [
            'bool',
            'int',
            'A comparison category type, like `std::strong_ordering`',
            'void'
        ],
        answer: 'A comparison category type, like `std::strong_ordering`',
        explanation: 'The return type indicates whether the left operand is less, equal, or greater than the right.'
    },
    {
        id: 1060,
        testId: 10,
        difficulty: 'expert',
        question: "What is a `std::atomic_flag`?",
        type: 'mcq',
        options: [
            'A boolean variable',
            'A simple atomic boolean type that is guaranteed to be lock-free',
            'A flag for the compiler',
            'A debugging tool'
        ],
        answer: 'A simple atomic boolean type that is guaranteed to be lock-free',
        explanation: 'It is the simplest standard atomic type and can be used as a building block for other synchronization primitives.'
    },
    {
        id: 1061,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'placement new'?",
        type: 'mcq',
        options: [
            'A way to create new placements',
            'An overload of the `new` operator that constructs an object in a pre-allocated memory buffer',
            'A keyword for memory allocation',
            'A C++23 feature'
        ],
        answer: 'An overload of the `new` operator that constructs an object in a pre-allocated memory buffer',
        explanation: 'It is used for custom memory management schemes.'
    },
    {
        id: 1062,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'PIMPL' idiom?",
        type: 'mcq',
        options: [
            'A simple coding style',
            'Pointer to Implementation: a technique to hide a class\'s private members to reduce compile-time dependencies',
            'A performance optimization',
            'A debugging technique'
        ],
        answer: 'Pointer to Implementation: a technique to hide a class\'s private members to reduce compile-time dependencies',
        explanation: 'This improves build times in large projects by separating the interface from the implementation.'
    },
    {
        id: 1063,
        testId: 10,
        difficulty: 'expert',
        question: "Which of the following is NOT a standard C++ smart pointer?",
        type: 'mcq',
        options: ['`std::unique_ptr`', '`std::shared_ptr`', '`std::auto_ptr`', '`std::weak_ptr`'],
        answer: '`std::auto_ptr`',
        explanation: '`std::auto_ptr` was deprecated in C++11 and removed in C++17 due to its unsafe copy semantics. It was replaced by `std::unique_ptr`.'
    },
    {
        id: 1064,
        testId: 10,
        difficulty: 'expert',
        question: "What is the primary use case for `std::weak_ptr`?",
        type: 'mcq',
        options: [
            'To create weak references in general',
            'To break circular dependencies between `std::shared_ptr` instances',
            'To point to weak objects',
            'As a replacement for raw pointers'
        ],
        answer: 'To break circular dependencies between `std::shared_ptr` instances',
        explanation: 'A `weak_ptr` holds a non-owning reference and does not increase the reference count, preventing memory leaks from reference cycles.'
    },
    {
        id: 1065,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Argument-Dependent Lookup' (ADL)?",
        type: 'mcq',
        options: [
            'A runtime lookup mechanism',
            'A set of rules for looking up unqualified function names based on the namespaces of their arguments',
            'A debugging feature',
            'A way to find function arguments'
        ],
        answer: 'A set of rules for looking up unqualified function names based on the namespaces of their arguments',
        explanation: 'ADL is why you can often call functions like `swap` without the `std::` prefix on standard library types.'
    },
    {
        id: 1066,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'variadic template'?",
        type: 'mcq',
        options: [
            'A template that is very varied',
            'A template that can accept a variable number of template arguments',
            'A template for variables',
            'A deprecated template feature'
        ],
        answer: 'A template that can accept a variable number of template arguments',
        explanation: 'They are essential for writing generic functions that take an arbitrary number of arguments, like `std::make_tuple`.'
    },
    {
        id: 1067,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'type erasure'?",
        type: 'mcq',
        options: [
            'Deleting a `typedef`',
            'A technique to hide the specific type of an object and interact with it through a generic interface',
            'A compile-time error',
            'A memory-saving technique'
        ],
        answer: 'A technique to hide the specific type of an object and interact with it through a generic interface',
        explanation: '`std::function` and `std::any` are prime examples of type erasure in the C++ standard library.'
    },
    {
        id: 1068,
        testId: 10,
        difficulty: 'expert',
        question: "What is the purpose of the `noexcept` specifier?",
        type: 'mcq',
        options: [
            'To allow exceptions',
            'To specify that a function does not throw exceptions, allowing for compiler optimizations',
            'To handle exceptions',
            'To log exceptions'
        ],
        answer: 'To specify that a function does not throw exceptions, allowing for compiler optimizations',
        explanation: 'It is particularly important for move constructors/assignments to be `noexcept` to enable certain optimizations in STL containers.'
    },
    {
        id: 1069,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between a `union` and `std::variant`?",
        type: 'mcq',
        options: [
            '`union` is type-safe, `variant` is not',
            '`std::variant` is a type-safe union that knows which type it currently holds, while a `union` does not',
            'They are the same',
            '`union` can hold more types'
        ],
        answer: '`std::variant` is a type-safe union that knows which type it currently holds, while a `union` does not',
        explanation: '`std::variant` (C++17) should always be preferred over raw unions for safety.'
    },
    {
        id: 1070,
        testId: 10,
        difficulty: 'expert',
        question: "What does `[[fallthrough]]` attribute do?",
        type: 'mcq',
        options: [
            'Causes a function to fail',
            'Indicates intentional fall-through in a `switch` statement to suppress compiler warnings',
            'Marks a code block for optimization',
            'A comment'
        ],
        answer: 'Indicates intentional fall-through in a `switch` statement to suppress compiler warnings',
        explanation: 'This C++17 attribute makes code clearer and safer by making fall-through explicit.'
    },
    {
        id: 1071,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'friend' function in C++?",
        type: 'mcq',
        options: [
            'A helpful utility function',
            'A non-member function that is granted access to the private and protected members of a class',
            'A member function of a base class',
            'A function from a different library'
        ],
        answer: 'A non-member function that is granted access to the private and protected members of a class',
        explanation: 'Friendship breaks encapsulation and should be used sparingly.'
    },
    {
        id: 1072,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'CRTP' (Curiously Recurring Template Pattern)?",
        type: 'mcq',
        options: [
            'A runtime design pattern',
            'An idiom where a class derives from a template instantiated with itself, used to achieve static polymorphism',
            'A cryptographic pattern',
            'A memory management technique'
        ],
        answer: 'An idiom where a class derives from a template instantiated with itself, used to achieve static polymorphism',
        explanation: 'CRTP avoids the overhead of virtual function calls by resolving them at compile time.'
    },
    {
        id: 1073,
        testId: 10,
        difficulty: 'expert',
        question: "What is `std::string_view`?",
        type: 'mcq',
        options: [
            'A mutable string type',
            'A non-owning, read-only view of a sequence of characters that avoids memory allocations',
            'A UI component for displaying strings',
            'An old, deprecated string class'
        ],
        answer: 'A non-owning, read-only view of a sequence of characters that avoids memory allocations',
        explanation: 'It provides an efficient way to pass string-like data to functions.'
    },
    {
        id: 1074,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'static assert'?",
        type: 'mcq',
        options: [
            'A runtime check',
            'An assertion that is checked at compile time, causing a compilation error if the condition is false',
            'A comment that asserts something',
            'A thread-safe assertion'
        ],
        answer: 'An assertion that is checked at compile time, causing a compilation error if the condition is false',
        explanation: '`static_assert` is used to validate compile-time properties, like type traits.'
    },
    {
        id: 1075,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Name Mangling'?",
        type: 'mcq',
        options: [
            'A bad coding practice',
            'The process a C++ compiler uses to encode function names with type information to support function overloading',
            'A security attack',
            'A way to rename variables'
        ],
        answer: 'The process a C++ compiler uses to encode function names with type information to support function overloading',
        explanation: 'It ensures that each distinct function has a unique name for the linker.'
    },
    {
        id: 1076,
        testId: 10,
        difficulty: 'expert',
        question: "What is `std::optional` for?",
        type: 'mcq',
        options: [
            'To make function arguments optional',
            'A type-safe wrapper for a value that may or may not be present',
            'A boolean type',
            'A configuration class'
        ],
        answer: 'A type-safe wrapper for a value that may or may not be present',
        explanation: 'It avoids the use of special values (like -1) or null pointers to indicate the absence of a value.'
    },
    {
        id: 1077,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'lambda capture clause'?",
        type: 'mcq',
        options: [
            'A part of a regular expression',
            'The `[]` part of a lambda expression that specifies which variables from the surrounding scope are accessible inside the lambda',
            'A debugging breakpoint',
            'A type of exception'
        ],
        answer: 'The `[]` part of a lambda expression that specifies which variables from the surrounding scope are accessible inside the lambda',
        explanation: 'Variables can be captured by value (`[=]`) or by reference (`[&]`).'
    },
    {
        id: 1078,
        testId: 10,
        difficulty: 'expert',
        question: "What does the `final` keyword do when applied to a class?",
        type: 'mcq',
        options: [
            'Indicates the class is complete',
            'Prevents the class from being used as a base class',
            'Deletes the class',
            'Marks the class for final optimization'
        ],
        answer: 'Prevents the class from being used as a base class',
        explanation: 'It is a way to control the design of a class hierarchy and prevent further derivation.'
    },
    {
        id: 1079,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'pure virtual function'?",
        type: 'mcq',
        options: [
            'A very clean function',
            'A virtual function in a base class that has no implementation and must be overridden by derived classes',
            'A non-virtual function',
            'A static function'
        ],
        answer: 'A virtual function in a base class that has no implementation and must be overridden by derived classes',
        explanation: 'A class containing a pure virtual function is an abstract class and cannot be instantiated.'
    },
    {
        id: 1080,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'One Definition Rule' (ODR)?",
        type: 'mcq',
        options: [
            'You can only define one thing',
            'A rule stating that any variable, function, or class must have exactly one definition in a program',
            'A guideline for writing comments',
            'A file naming convention'
        ],
        answer: 'A rule stating that any variable, function, or class must have exactly one definition in a program',
        explanation: 'Violating the ODR typically results in a linker error.'
    },
    {
        id: 1081,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between SFINAE and C++20 Concepts?",
        type: 'subjective',
        answer: "SFINAE (Substitution Failure Is Not An Error) is a metaprogramming technique that works by creating invalid code in a template's signature to remove it from overload resolution. It's an indirect and often complex way to constrain templates, leading to cryptic error messages. Concepts (C++20) are a direct, language-level feature for specifying named sets of requirements on template parameters. They provide much clearer error messages and make generic code easier to write, read, and understand.",
        explanation: "Concepts are a major improvement in usability and safety for generic programming over SFINAE."
    },
    {
        id: 1082,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the C++ memory model and memory ordering.",
        type: 'subjective',
        answer: "The C++ memory model defines the semantics of memory access in a multithreaded environment, specifying how writes by one thread become visible to others. It provides atomic types (`std::atomic`) and memory ordering options (`memory_order_relaxed`, `acquire`, `release`, `seq_cst`) to control this. These options allow developers to make a trade-off between performance and the strength of consistency guarantees, which is essential for writing correct, portable, lock-free code.",
        explanation: "Understanding the memory model is crucial for advanced concurrent programming."
    },
    {
        id: 1083,
        testId: 10,
        difficulty: 'expert',
        question: "How does a `std::shared_ptr` work internally? What are the control block and reference count?",
        type: 'subjective',
        answer: "A `std::shared_ptr` manages shared ownership of an object through a dynamically allocated control block. This control block contains a pointer to the managed object, a 'strong' reference count (tracking how many `shared_ptr`s own the object), and a 'weak' reference count (tracking how many `weak_ptr`s refer to it). When a `shared_ptr` is copied, the strong count increments. When a `shared_ptr` is destroyed, the strong count decrements. The object is deleted when the strong count reaches zero.",
        explanation: "The control block is the key to how shared ownership is managed."
    },
    {
        id: 1084,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'PIMPL' idiom, and what are its pros and cons?",
        type: 'subjective',
        answer: "The PIMPL (Pointer to Implementation) idiom hides a class's private members in a separate implementation class, which is accessed via a private pointer in the main class. Pros: It drastically reduces compile-time dependencies (improving build times) and creates a stable binary interface. Cons: It adds a layer of indirection, which can have a minor runtime performance cost, and it adds some boilerplate code to forward calls to the implementation.",
        explanation: "It's a trade-off between compile-time performance and runtime performance."
    },
    {
        id: 1085,
        testId: 10,
        difficulty: 'expert',
        question: "What is perfect forwarding and how is it implemented?",
        type: 'subjective',
        answer: "Perfect forwarding is the ability to pass arguments to another function while preserving their original value category (lvalue or rvalue). It is implemented using 'forwarding references' (a `T&&` in a deduced context) and `std::forward`. The forwarding reference can bind to both lvalues and rvalues. Inside the function, `std::forward<T>` is used to cast the argument back to its original value category, ensuring that move semantics are preserved if the original argument was a temporary.",
        explanation: "It's essential for writing generic factory functions and wrappers correctly."
    },
    {
        id: 1086,
        testId: 10,
        difficulty: 'expert',
        question: "What are the different categories of iterators in the C++ STL?",
        type: 'subjective',
        answer: "The iterator categories, from least to most powerful, are: 1) Input Iterator (read-only, single-pass), 2) Output Iterator (write-only, single-pass), 3) Forward Iterator (read/write, multi-pass forward), 4) Bidirectional Iterator (like forward, but can also move backward), and 5) Random Access Iterator (like bidirectional, but supports pointer arithmetic for O(1) access).",
        explanation: "The category of an iterator determines which algorithms can be used with it efficiently."
    },
    {
        id: 1087,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'static initialization order fiasco' and how do you solve it?",
        type: 'subjective',
        answer: "This is a problem where the initialization of a non-local static object in one source file depends on another non-local static object in a different file. C++ does not guarantee the initialization order across these files. The solution is the 'Construct on First Use' idiom: wrap the static object in a function and return a reference to it. The object will be constructed the first time the function is called, guaranteeing initialization order.",
        explanation: "It's a subtle but critical issue to be aware of when dealing with global static objects."
    },
    {
        id: 1088,
        testId: 10,
        difficulty: 'expert',
        question: "Explain what C++20 Coroutines are and a use case.",
        type: 'subjective',
        answer: "Coroutines are functions that can be suspended and resumed. They allow for writing asynchronous, non-blocking code in a sequential style. A common use case is handling network I/O. Instead of using callbacks, a coroutine can `co_await` a network read operation. This suspends the coroutine, freeing up the thread to do other work. When the data arrives, the coroutine is resumed exactly where it left off, making the code much easier to read and reason about than callback chains.",
        explanation: "They are a powerful tool for asynchronous and generator-style programming."
    },
    {
        id: 1089,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between a `std::mutex` and a `std::shared_mutex`?",
        type: 'subjective',
        answer: "A `std::mutex` provides exclusive ownership; only one thread can lock it at a time. A `std::shared_mutex` is a reader-writer lock. It allows multiple threads to acquire a 'shared' lock simultaneously (for reading), but only one thread can acquire an 'exclusive' lock (for writing). This can improve performance in scenarios with many readers and infrequent writers, as readers do not block each other.",
        explanation: "It's an optimization for read-heavy concurrent data access."
    },
    {
        id: 1090,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Rule of Five'?",
        type: 'subjective',
        answer: "The Rule of Five is an extension of the Rule of Three. It states that if a class defines any of the five special member functions (destructor, copy constructor, copy assignment operator, move constructor, move assignment operator), it should probably define all five. This is because defining one of them often implies that the compiler-generated versions of the others would be incorrect for managing the class's resources.",
        explanation: "The 'Rule of Zero' is the modern ideal, where the class needs none of these by using RAII types."
    },
    {
        id: 1091,
        testId: 10,
        difficulty: 'expert',
        question: "How do `std::promise` and `std::future` work together?",
        type: 'subjective',
        answer: "They are a one-time communication channel between threads. One thread (the 'producer') creates a `std::promise` and gets a `std::future` from it. The producer thread can then set a value or an exception on the promise. Another thread (the 'consumer') holds the `std::future` and can call its `.get()` method. This call will block until the producer sets the value on the promise, at which point `.get()` returns the value.",
        explanation: "They are a key mechanism for returning results from asynchronous tasks."
    },
    {
        id: 1092,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'diamond problem' and how is it solved in C++?",
        type: 'subjective',
        answer: "The diamond problem is an ambiguity that arises in multiple inheritance when a class D inherits from two classes B and C, and both B and C inherit from a common base class A. This would normally cause D to contain two copies of A's members. C++ solves this using 'virtual inheritance'. When B and C inherit from A using the `virtual` keyword, the compiler ensures that only a single instance of the base class A is included in the final derived class D.",
        explanation: "Virtual inheritance is a specific tool to resolve this multiple inheritance ambiguity."
    },
    {
        id: 1093,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'visitor' design pattern and how can it be implemented in C++?",
        type: 'subjective',
        answer: "The visitor pattern is a way of separating an algorithm from an object structure on which it operates. It allows adding new operations to existing class hierarchies without modifying the classes. In C++, it's often implemented using a visitor base class with a `visit` method for each concrete element type. The elements have an `accept` method that takes a visitor and calls the appropriate `visit` method on it (`accept(Visitor& v) { v.visit(*this); }`). This technique uses double dispatch.",
        explanation: "It's useful when you have a stable class hierarchy but need to add new operations frequently."
    },
    {
        id: 1094,
        testId: 10,
        difficulty: 'expert',
        question: "Explain what happens during 'stack unwinding' when an exception is thrown.",
        type: 'subjective',
        answer: "When an exception is thrown, the normal flow of control is halted. The runtime searches up the call stack for a suitable `catch` handler. As it moves up the stack, it exits each function scope. This process is called 'stack unwinding'. Crucially, as each scope is exited, the destructors for all fully constructed local objects in that scope are called. This ensures that resources are properly released, which is the core guarantee of the RAII idiom.",
        explanation: "This automatic cleanup is a key feature of C++ exception handling."
    },
    {
        id: 1095,
        testId: 10,
        difficulty: 'expert',
        question: "What is the strict aliasing rule and why does it exist?",
        type: 'subjective',
        answer: "The strict aliasing rule in C++ states that accessing an object through a pointer of an incompatible type is undefined behavior. For example, you cannot write to an `int` location through a `float*`. This rule exists to allow the compiler to make aggressive optimizations. The compiler can assume that pointers of different types do not point to the same memory, which allows it to reorder reads and writes more freely without worrying about aliasing.",
        explanation: "Violating this rule can lead to subtle bugs that only appear in optimized builds."
    },
    {
        id: 1096,
        testId: 10,
        difficulty: 'expert',
        question: "What is CRTP (Curiously Recurring Template Pattern) and what is it used for?",
        type: 'subjective',
        answer: "CRTP is a C++ idiom where a class `X` derives from a base class template that is instantiated with `X` itself (e.g., `class X : public Base<X>`). It is primarily used to achieve static (compile-time) polymorphism. The base class template can `static_cast` its `this` pointer to the derived type (`X*`) to call methods defined in the derived class, avoiding the runtime overhead and memory cost of virtual functions.",
        explanation: "It's an advanced technique for implementing compile-time generic programming patterns."
    },
    {
        id: 1097,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between `std::any`, `std::variant`, and `std::optional`?",
        type: 'subjective',
        answer: "`std::optional` can hold a value or nothing. `std::variant` can hold a value from a specified, closed set of alternative types. `std::any` can hold a value of any copyable type. `optional` is for representing the potential absence of a value. `variant` is for representing a value that is one of a specific set of types. `any` is for when you need to store a value of a completely unknown type.",
        explanation: "These C++17 types provide modern, type-safe ways to handle optionality and polymorphism."
    },
    {
        id: 1098,
        testId: 10,
        difficulty: 'expert',
        question: "What are 'fold expressions' in C++17 and why are they useful?",
        type: 'subjective',
        answer: "Fold expressions provide a concise syntax for applying a binary operator over all the arguments in a parameter pack of a variadic template. For example, `(pack + ...)` will sum all arguments in the pack. They are useful because they eliminate the need for complex recursive template code that was previously required to perform such operations, making variadic template code much simpler and more readable.",
        explanation: "They are a major quality-of-life improvement for generic programming."
    },
    {
        id: 1099,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between `const T*`, `T* const`, and `const T* const`?",
        type: 'subjective',
        answer: "Read from right to left: 1) `const T*`: A pointer to a `const T`. The data pointed to cannot be changed, but the pointer itself can be changed to point to something else. 2) `T* const`: A `const` pointer to a `T`. The pointer cannot be changed to point to something else, but the data it points to can be modified. 3) `const T* const`: A `const` pointer to a `const T`. Neither the pointer nor the data it points to can be changed.",
        explanation: "This is a fundamental concept for understanding `const` correctness with pointers."
    },
    {
        id: 1100,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'placement delete' and when must it be used?",
        type: 'subjective',
        answer: "A 'placement delete' is the corresponding deallocation function for a 'placement new'. If you construct an object in a pre-allocated memory buffer using placement new (`new(buffer) MyObject`), you must explicitly call its destructor (`obj->~MyObject()`). If the constructor threw an exception, the C++ runtime looks for a corresponding placement delete `operator delete(void*, void*)` to deallocate the memory, so you must provide one if custom deallocation logic is needed.",
        explanation: "It's a necessary part of manual memory management when using placement new."
    }
  ],
  devops: [
    {
      "id": 1101,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the primary goal of DevOps?",
      "type": "mcq",
      "options": [
        "To write code faster",
        "To shorten the systems development life cycle and provide continuous delivery with high software quality",
        "To manage server hardware",
        "To only focus on testing"
      ],
      "answer": "To shorten the systems development life cycle and provide continuous delivery with high software quality",
      "explanation": "DevOps is a culture and set of practices that combines software development (Dev) and IT operations (Ops) to improve collaboration and productivity."
    },
    {
      "id": 1102,
      "testId": 1,
      "difficulty": "easy",
      "question": "What does 'CI' in CI/CD stand for?",
      "type": "mcq",
      "options": ["Continuous Integration", "Code Integration", "Continuous Input", "Code Input"],
      "answer": "Continuous Integration",
      "explanation": "Continuous Integration is the practice of frequently merging all developers' working copies to a shared mainline several times a day."
    },
    {
      "id": 1103,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which of the following is a popular CI/CD tool?",
      "type": "mcq",
      "options": ["Docker", "Kubernetes", "Jenkins", "Ansible"],
      "answer": "Jenkins",
      "explanation": "Jenkins is a widely used open-source automation server for building, testing, and deploying software."
    },
    {
      "id": 1104,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is Infrastructure as Code (IaC)?",
      "type": "subjective",
      "answer": "Infrastructure as Code is the practice of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Tools like Terraform, Ansible, or AWS CloudFormation are used to define infrastructure in code.",
      "explanation": "IaC allows infrastructure to be versioned, tested, and automated, just like application code."
    },
    {
      "id": 1105,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a container (e.g., Docker container)?",
      "type": "subjective",
      "answer": "A container is a lightweight, standalone, executable package of software that includes everything needed to run it: code, runtime, system tools, system libraries, and settings. It isolates the application from its environment, ensuring that it works uniformly regardless of where it is deployed.",
      "explanation": "Containers are a foundational technology in modern DevOps and cloud-native applications."
    }
  ],
  'data-science': [
    {
      "id": 1106,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the difference between supervised and unsupervised learning?",
      "type": "mcq",
      "options": [
        "Supervised learning uses labeled data, while unsupervised learning uses unlabeled data",
        "Unsupervised learning is faster than supervised learning",
        "Supervised learning is for regression, unsupervised is for classification",
        "There is no difference"
      ],
      "answer": "Supervised learning uses labeled data, while unsupervised learning uses unlabeled data",
      "explanation": "In supervised learning, the algorithm learns from data that already has the correct answers (labels). In unsupervised learning, the algorithm tries to find patterns in data without any pre-existing labels."
    },
    {
      "id": 1107,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which of the following is a classification algorithm?",
      "type": "mcq",
      "options": ["Linear Regression", "K-Means Clustering", "Logistic Regression", "Principal Component Analysis"],
      "answer": "Logistic Regression",
      "explanation": "Logistic Regression is used to predict a categorical outcome (e.g., yes/no, true/false). Linear Regression is for continuous values, and K-Means and PCA are unsupervised algorithms."
    },
    {
      "id": 1108,
      "testId": 1,
      "difficulty": "easy",
      "question": "What does 'Pandas' refer to in the context of data science?",
      "type": "mcq",
      "options": [
        "A type of machine learning model",
        "A Python library for data manipulation and analysis",
        "A data visualization tool",
        "A statistical test"
      ],
      "answer": "A Python library for data manipulation and analysis",
      "explanation": "Pandas provides data structures like the DataFrame, which are essential for cleaning, transforming, and analyzing data in Python."
    },
    {
      "id": 1109,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is 'overfitting' in machine learning?",
      "type": "subjective",
      "answer": "Overfitting occurs when a machine learning model learns the training data too well, including its noise and random fluctuations. As a result, the model performs poorly on new, unseen data because it has failed to generalize. It has high variance and low bias.",
      "explanation": "Overfitting is like memorizing the answers to a test instead of learning the concepts."
    },
    {
      "id": 1110,
      "testId": 1,
      "difficulty": "easy",
      "question": "What are the 'mean', 'median', and 'mode'?",
      "type": "subjective",
      "answer": "They are three measures of central tendency. The 'mean' is the average of all numbers in a dataset. The 'median' is the middle value in a sorted dataset. The 'mode' is the value that appears most frequently in a dataset.",
      "explanation": "These are fundamental statistical concepts for summarizing data."
    }
  ],
  'ai-ml': [
    {
      "id": 1111,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is Artificial Intelligence (AI)?",
      "type": "mcq",
      "options": [
        "A specific algorithm",
        "The simulation of human intelligence in machines",
        "A type of computer hardware",
        "A database"
      ],
      "answer": "The simulation of human intelligence in machines",
      "explanation": "AI is a broad field of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence."
    },
    {
      "id": 1112,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the relationship between AI, Machine Learning (ML), and Deep Learning (DL)?",
      "type": "mcq",
      "options": [
        "They are all separate, unrelated fields",
        "AI is a subset of ML, which is a subset of DL",
        "DL is a subset of ML, which is a subset of AI",
        "ML and DL are the same thing"
      ],
      "answer": "DL is a subset of ML, which is a subset of AI",
      "explanation": "AI is the broadest field. Machine Learning is a subfield of AI that uses data to learn. Deep Learning is a subfield of ML that uses neural networks with many layers."
    },
    {
      "id": 1113,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a 'neural network'?",
      "type": "mcq",
      "options": [
        "A computer network",
        "A biological brain",
        "A computing system inspired by the structure of the human brain, composed of interconnected nodes or 'neurons'",
        "A type of data structure"
      ],
      "answer": "A computing system inspired by the structure of the human brain, composed of interconnected nodes or 'neurons'",
      "explanation": "Neural networks are the foundational technology behind deep learning."
    },
    {
      "id": 1114,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is 'training data' in machine learning?",
      "type": "subjective",
      "answer": "Training data is the dataset used to train a machine learning model. The model learns to find patterns, make predictions, or make decisions by analyzing this data. For supervised learning, the training data includes both the input features and the correct output labels.",
      "explanation": "The quality and quantity of training data are crucial for a model's performance."
    },
    {
      "id": 1115,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the difference between classification and regression in supervised learning?",
      "type": "subjective",
      "answer": "Classification is used to predict a discrete, categorical output (e.g., 'cat' or 'dog', 'spam' or 'not spam'). Regression is used to predict a continuous, numerical output (e.g., the price of a house, the temperature tomorrow).",
      "explanation": "Classification predicts a label, while regression predicts a quantity."
    }
  ],
  'cloud-computing': [
    {
      "id": 1116,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is Cloud Computing?",
      "type": "mcq",
      "options": [
        "Storing files on your computer",
        "The on-demand delivery of IT resources over the Internet with pay-as-you-go pricing",
        "A type of network cable",
        "A personal computer"
      ],
      "answer": "The on-demand delivery of IT resources over the Internet with pay-as-you-go pricing",
      "explanation": "Instead of buying and owning your own data centers, you can access services like computing power and storage from a cloud provider like AWS, Google Cloud, or Azure."
    },
    {
      "id": 1117,
      "testId": 1,
      "difficulty": "easy",
      "question": "What does 'IaaS' stand for?",
      "type": "mcq",
      "options": ["Infrastructure as a Service", "Internet as a Service", "Integration as a Service", "Infrastructure as a Standard"],
      "answer": "Infrastructure as a Service",
      "explanation": "IaaS is a cloud computing model where a provider hosts the fundamental infrastructure components, such as virtual machines, storage, and networking."
    },
    {
      "id": 1118,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which of the following is a major benefit of cloud computing?",
      "type": "mcq",
      "options": ["High upfront cost", "Slow deployment", "Elasticity and Scalability", "Limited global reach"],
      "answer": "Elasticity and Scalability",
      "explanation": "The cloud allows you to scale your resources up or down easily to meet changing demands, and you only pay for what you use."
    },
    {
      "id": 1119,
      "testId": 1,
      "difficulty": "easy",
      "question": "What are the three main service models of cloud computing?",
      "type": "subjective",
      "answer": "The three main service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS provides basic computing resources, PaaS provides a platform for developers to build applications, and SaaS provides complete software applications over the internet.",
      "explanation": "Each model represents a different level of abstraction and management by the cloud provider."
    },
    {
      "id": 1120,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a 'region' in a cloud provider like AWS or Google Cloud?",
      "type": "subjective",
      "answer": "A region is a specific geographical location where a cloud provider hosts its data centers. For example, 'us-east-1' or 'europe-west-2'. Deploying resources in different regions can reduce latency for users in those areas and provide disaster recovery.",
      "explanation": "Each region is isolated from the others."
    }
  ],
  'mobile-development': [
    {
      "id": 1121,
      "testId": 1,
      "difficulty": "easy",
      "question": "What are the two primary mobile operating systems today?",
      "type": "mcq",
      "options": ["iOS and Android", "Windows Phone and BlackBerry OS", "iOS and Symbian", "Android and Windows Phone"],
      "answer": "iOS and Android",
      "explanation": "iOS (by Apple) and Android (by Google) dominate the mobile OS market."
    },
    {
      "id": 1122,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is 'native' mobile development?",
      "type": "mcq",
      "options": [
        "Building web apps that look like mobile apps",
        "Building apps using the official programming language and tools for a specific platform (e.g., Swift/Kotlin)",
        "Building apps that work on both iOS and Android with one codebase",
        "Building apps that don't require an internet connection"
      ],
      "answer": "Building apps using the official programming language and tools for a specific platform (e.g., Swift/Kotlin)",
      "explanation": "Native development generally offers the best performance and access to platform-specific features."
    },
    {
      "id": 1123,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which programming language is officially supported by Google for native Android development?",
      "type": "mcq",
      "options": ["Java", "Swift", "Kotlin", "C#"],
      "answer": "Kotlin",
      "explanation": "While Java is still used, Kotlin is now Google's recommended language for Android development."
    },
    {
      "id": 1124,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is Xcode?",
      "type": "subjective",
      "answer": "Xcode is the integrated development environment (IDE) provided by Apple for developing software for macOS, iOS, iPadOS, watchOS, and tvOS. It includes a suite of tools for writing, compiling, debugging, and testing applications, primarily in Swift or Objective-C.",
      "explanation": "It is the primary tool for any iOS developer."
    },
    {
      "id": 1125,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a 'cross-platform' development framework?",
      "type": "subjective",
      "answer": "A cross-platform framework, like React Native or Flutter, allows developers to write code once and deploy it on multiple platforms (e.g., iOS and Android). This can save time and resources compared to building separate native apps for each platform.",
      "explanation": "The trade-off can sometimes be performance or limited access to some native features."
    }
  ],
  cybersecurity: [
    // Test 1: 5 Questions (3 MCQ, 2 Subjective) - Easy
    {
        id: 1126,
        testId: 1,
        difficulty: 'easy',
        question: "What does 'CIA' stand for in the context of cybersecurity?",
        type: 'mcq',
        options: [
            "Central Intelligence Agency",
            "Confidentiality, Integrity, and Availability",
            "Cybersecurity Intelligence Association",
            "Certified Information Auditor"
        ],
        answer: "Confidentiality, Integrity, and Availability",
        explanation: "The CIA triad is a foundational model that guides security policies. Confidentiality ensures data is accessible only to authorized users, Integrity ensures data is accurate and trustworthy, and Availability ensures data is accessible when needed."
    },
    {
        id: 1127,
        testId: 1,
        difficulty: 'easy',
        question: "What is malware?",
        type: 'mcq',
        options: [
            "A physical computer component",
            "A type of network protocol",
            "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system",
            "A security certificate"
        ],
        answer: "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system",
        explanation: "Malware is a broad term that includes viruses, worms, trojans, ransomware, and spyware."
    },
    {
        id: 1128,
        testId: 1,
        difficulty: 'easy',
        question: "What is phishing?",
        type: 'mcq',
        options: [
            "A method of catching fish",
            "A type of server hardware",
            "A cyberattack that uses disguised email as a weapon to trick a recipient into revealing sensitive information",
            "A network firewall"
        ],
        answer: "A cyberattack that uses disguised email as a weapon to trick a recipient into revealing sensitive information",
        explanation: "Phishing attacks are a common form of social engineering, often leading to credential theft or malware installation."
    },
    {
        id: 1129,
        testId: 1,
        difficulty: 'easy',
        question: "What is the principle of 'least privilege'?",
        type: 'subjective',
        answer: "The principle of least privilege requires that a user or process should only be given the minimum levels of access – or permissions – needed to perform its job functions. For example, a user who only needs to read data should not be given permissions to write or delete it.",
        explanation: "This principle helps to limit the damage that can be caused by an accident, error, or malicious attack."
    },
    {
        id: 1130,
        testId: 1,
        difficulty: 'easy',
        question: "What is a firewall?",
        type: 'subjective',
        answer: "A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules. It acts as a barrier between a trusted internal network and an untrusted external network, such as the Internet.",
        explanation: "Firewalls are a fundamental component of network security."
    }
  ]
};

