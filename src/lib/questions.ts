
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
        explanation: "It helps enforce code quality and style consistency."
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
        question: "Explain how the 'event loop' in Node.js works.",
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
            'A mathematical model of concurrent computation where \'actors\' are the universal primitives, communicating through asynchronous messages',
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
        explanation: 'It involves gradually replacing pieces of the monolith with new services, routing traffic to them until the monolith is \'strangled\' and can be retired.'
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
        explanation: 'Rebasing results in a cleaner, linear history, but should not be used on public branches that others are working on.'
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
            'A JavaScript framework',
            'A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup',
            'A CSS preprocessor',
            'A type of CSS selector'
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
            'A function for generating HTML'],
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
            'A performance issue where an application makes one initial query to retrieve a list of items, and then makes \'n\' additional queries to retrieve related data for each item',
            'A mathematical paradox',
            'An error that occurs when `n` is equal to -1'
        ],
        answer: 'A performance issue where an application makes one initial query to retrieve a list of items, and then makes \'n\' additional queries to retrieve related data for each item',
        explanation: 'This is a common performance bottleneck that can usually be solved by \'eager loading\' the related data in the initial query.'
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
        explanation: "It's an event-driven approach to achieving transactional semantics in a distributed environment."
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
        answer: "async/await and Promises are high-level abstractions for managing asynchronous operations that are powered by the event loop. When you await a Promise, the async function is paused, and its execution context is removed from the call stack. The underlying asynchronous operation (e.g., a `fetch` request) runs in the background. When the Promise settles, a task is placed in the microtask queue. The event loop prioritizes the microtask queue, so as soon as the call stack is clear, the async function's execution is resumed.",
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
            'It prevents a property from changing',
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
            'It provides better SEO than JavaScript',
            'It allows multiple requests and responses to be sent in parallel over a single TCP connection, eliminating head-of-line blocking',
            'It is easier to write than JavaScript',
            'It replaces the need for HTML and CSS'
        ],
        answer: 'It allows multiple requests and responses to be sent in parallel over a single TCP connection, eliminating head-of-line blocking',
        explanation: 'Multiplexing is a key feature of HTTP/2 that significantly improves web performance.'
    },
    {
        id: 232,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Kubernetes Operator'?",
        type: 'mcq',
        options: [
            'A person who operates a Kubernetes cluster',
            'A method of packaging, deploying, and managing a Kubernetes application by extending the Kubernetes API',
            'A built-in Kubernetes component for scheduling pods',
            'A security feature in Kubernetes'
        ],
        answer: 'A method of packaging, deploying, and managing a Kubernetes application by extending the Kubernetes API',
        explanation: 'Operators encode human operational knowledge into software to automate the lifecycle of complex stateful applications.'
    },
    {
        id: 233,
        testId: 10,
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
        id: 234,
        testId: 10,
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
        id: 235,
        testId: 10,
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
        id: 236,
        testId: 10,
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
        id: 237,
        testId: 10,
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
        id: 238,
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
        id: 239,
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
        id: 240,
        testId: 10,
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
        id: 241,
        testId: 10,
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
        id: 242,
        testId: 10,
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
        id: 243,
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
        explanation: 'Rebasing results in a cleaner, linear history, but should not be used on public branches that others are working on.'
    },
    {
        id: 244,
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
        id: 245,
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
        id: 246,
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
        id: 247,
        testId: 10,
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
        id: 248,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'n+1' query problem?",
        type: 'mcq',
        options: [
            'A security vulnerability',
            'A performance issue where an application makes one initial query to retrieve a list of items, and then makes \'n\' additional queries to retrieve related data for each item',
            'A mathematical paradox',
            'An error that occurs when `n` is equal to -1'
        ],
        answer: 'A performance issue where an application makes one initial query to retrieve a list of items, and then makes \'n\' additional queries to retrieve related data for each item',
        explanation: 'This is a common performance bottleneck that can usually be solved by \'eager loading\' the related data in the initial query.'
    },
    {
        id: 249,
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
        id: 250,
        testId: 10,
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
        id: 251,
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
        id: 252,
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
        id: 253,
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
        id: 254,
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
        id: 255,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Test-Driven Development' (TDD)?",
        type: 'mcq',
        options: [
            'A debugging method',
            'A software development process that follows a \'Red, Green, Refactor\' cycle, starting with writing a failing test',
            'A type of performance testing',
            'A methodology for manual testing'
        ],
        answer: 'A software development process that follows a \'Red, Green, Refactor\' cycle, starting with writing a failing test',
        explanation: 'TDD helps ensure high test coverage and leads to more robust, modular code.'
    },
    {
        id: 256,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the difference between optimistic and pessimistic locking in databases.",
        type: 'subjective',
        answer: "Pessimistic locking assumes conflicts are frequent and locks a resource before a transaction begins working with it, preventing other transactions from accessing it. This ensures consistency but can hurt concurrency. Optimistic locking assumes conflicts are rare. It does not lock resources, but before committing, it checks if the data has been modified by another transaction since it was read. If a conflict is found, the transaction is rolled back.",
        explanation: "Pessimistic locking is 'ask for permission,' while optimistic locking is 'ask for forgiveness.'"
    },
    {
        id: 257,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Chaos Engineering' and what is its purpose?",
        type: 'subjective',
        answer: "Chaos Engineering is the discipline of experimenting on a distributed system in order to build confidence in its capability to withstand turbulent conditions in production. It involves deliberately injecting controlled failures—like terminating servers, introducing network latency, or causing CPU spikes—to identify weaknesses and improve system resilience before those weaknesses cause real outages.",
        explanation: "The goal is to find failures before they find you. Netflix's 'Chaos Monkey' is a famous example."
    },
    {
        id: 258,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Log-Structured Merge-Tree' (LSM-Tree)?",
        type: 'subjective',
        answer: "An LSM-Tree is a data structure optimized for write-heavy workloads, commonly used in NoSQL databases like Cassandra. It works by appending all writes to an in-memory table (memtable). When the memtable is full, it is flushed to disk as a sorted, immutable file (SSTable). In the background, these SSTables are periodically merged (compacted) to remove duplicates and deleted data. This approach avoids slow, random disk writes, making it highly performant for writes.",
        explanation: "This design favors fast write performance at the expense of more complex read operations."
    },
    {
        id: 259,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'Domain-Driven Design' (DDD) and what is a 'ubiquitous language'?",
        type: 'subjective',
        answer: "Domain-Driven Design is an approach to software development that centers on creating a rich, expressive model of the core business domain. A key concept in DDD is the 'ubiquitous language,' which is a shared language developed by the team (developers, domain experts, stakeholders) to talk about the domain. This language is used in all communication and in the code itself to eliminate ambiguity and connect the software directly to the business concepts.",
        explanation: "DDD helps to manage complexity in large, enterprise systems."
    },
    {
        id: 260,
        testId: 10,
        difficulty: 'expert',
        question: "Explain 'Consistent Hashing' and its primary benefit.",
        type: 'subjective',
        answer: "Consistent hashing is a hashing technique where, when a hash table is resized, only a small number of keys need to be remapped. In a distributed system, this means when a server is added or removed, the number of objects that need to be relocated is minimized. This prevents a massive, system-wide reshuffling of data, making the system much more scalable and stable.",
        explanation: "It's essential for distributed caches and databases like DynamoDB and Cassandra."
    },
    {
        id: 261,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'thundering herd' problem and how can it be mitigated?",
        type: 'subjective',
        answer: "The 'thundering herd' problem occurs when a large number of processes or threads that are all waiting for the same event are awakened, but only one can actually handle it. This causes a massive spike in contention and context switching, degrading system performance. It can be mitigated by having only one process wait for the event and then wake up the others, or by using more modern kernel APIs that are designed to prevent this issue (e.g., Linux's `epoll`'s `EPOLLEXCLUSIVE` flag).",
        explanation: "This is a classic problem in high-concurrency systems."
    },
    {
        id: 262,
        testId: 10,
        difficulty: 'expert',
        question: "How does 'blue-green deployment' work?",
        type: 'subjective',
        answer: "Blue-green deployment is a release strategy that reduces downtime and risk. You maintain two identical production environments: 'blue' (the current live version) and 'green' (the new version). You deploy and test the new version in the green environment. Once it's verified, you switch the router to send all live traffic to the green environment. This allows for instant, zero-downtime releases and a simple rollback strategy (just switch the router back to blue).",
        explanation: "It requires having double the infrastructure, which can be a cost consideration."
    },
    {
        id: 263,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'backpressure' in reactive streaming systems?",
        type: 'subjective',
        answer: "Backpressure is a flow control mechanism where a data consumer can signal to a data producer that it is becoming overwhelmed. This allows the consumer to request that the producer slow down or stop sending data temporarily, preventing buffer overflows and system instability. It allows the system to gracefully handle situations where the rate of production exceeds the rate of consumption.",
        explanation: "It's a crucial feature for building resilient, asynchronous data pipelines."
    },
    {
        id: 264,
        testId: 10,
        difficulty: 'expert',
        question: "What is the 'Raft' consensus algorithm?",
        type: 'subjective',
        answer: "Raft is a consensus algorithm designed to be more understandable than its predecessor, Paxos. It is used to manage a replicated log among a cluster of nodes. It works by electing a single leader, which is responsible for accepting client requests, appending them to its log, and replicating the log to follower nodes. This ensures that all nodes in the cluster agree on the same sequence of operations, providing strong consistency and fault tolerance.",
        explanation: "Raft is used in many modern distributed systems, including etcd and Consul."
    },
    {
        id: 265,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the difference between leader-based and leaderless database replication.",
        type: 'subjective',
        answer: "In leader-based replication, one replica (the leader or master) handles all write requests and propagates the changes to follower replicas. This provides strong consistency but the leader is a single point of failure. In leaderless replication, any replica can accept writes. This offers higher write availability and fault tolerance, but it makes consistency more complex to manage, often relying on quorums and read-repair mechanisms to resolve conflicts.",
        explanation: "Leader-based is simpler (e.g., PostgreSQL). Leaderless is more available (e.g., Cassandra)."
    },
    {
        id: 266,
        testId: 10,
        difficulty: 'expert',
        question: "What is 'end-to-end encryption' (E2EE)?",
        type: 'subjective',
        answer: "End-to-end encryption is a communication system where only the communicating users can read the messages. It prevents potential eavesdroppers, including the service provider itself, from accessing the cryptographic keys needed to decrypt the conversation. The server facilitates the connection but has no ability to read the message content. This ensures the highest level of confidentiality.",
        explanation: "Popular messaging apps like Signal and WhatsApp use E2EE."
    },
    {
        id: 267,
        testId: 10,
        difficulty: 'expert',
        question: "How do JavaScript `async/await` and Promises relate to the event loop?",
        type: 'subjective',
        answer: "async/await and Promises are high-level abstractions for managing asynchronous operations that are powered by the event loop. When you await a Promise, the async function is paused, and its execution context is removed from the call stack. The underlying asynchronous operation (e.g., a `fetch` request) runs in the background. When the Promise settles, a task is placed in the microtask queue. The event loop prioritizes the microtask queue, so as soon as the call stack is clear, the async function's execution is resumed.",
        explanation: "They provide a synchronous-looking syntax for code that is fundamentally asynchronous and non-blocking."
    },
    {
        id: 268,
        testId: 10,
        difficulty: 'expert',
        question: "Explain the concept of 'concurrency' versus 'parallelism'.",
        type: 'subjective',
        answer: "Concurrency is about dealing with multiple tasks at once. For example, a single-core processor can be concurrent by switching between different tasks (context switching). Parallelism is about doing multiple tasks at the same time. This requires hardware with multiple cores or processors. An application can be concurrent without being parallel, but not vice-versa.",
        explanation: "Think of a chef (processor): concurrency is chopping vegetables while also keeping an eye on a simmering sauce. Parallelism is two chefs working on two different dishes simultaneously."
    },
    {
        id: 269,
        testId: 10,
        difficulty: 'expert',
        question: "What is a `prototype` in JavaScript and how does it relate to inheritance?",
        type: 'subjective',
        answer: "Every JavaScript object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on, until an object is reached with `null` as its prototype. This is called the prototype chain. When you try to access a property on an object, if it's not found, the JavaScript engine looks at the object's prototype, then the prototype's prototype, and so on, enabling prototypal inheritance.",
        explanation: "This is the mechanism that allows objects to inherit properties and methods from other objects in JavaScript."
    },
    {
        id: 270,
        testId: 10,
        difficulty: 'expert',
        question: "How do you prevent Cross-Site Request Forgery (CSRF) attacks?",
        type: 'subjective',
        answer: "The most common mitigation is the synchronizer token pattern. The server generates a unique, unpredictable token and includes it in a hidden field in forms. When the form is submitted, the server validates that the token from the request matches the one it expects for that user's session. Another defense is checking the `Origin` or `Referer` headers, and using the `SameSite` cookie attribute.",
        explanation: "CSRF tricks a logged-in user's browser into sending a forged request to a site the user trusts."
    },
    {
        id: 271,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'closure' in JavaScript and provide a practical example.",
        type: 'subjective',
        answer: "A closure is a function that remembers the environment in which it was created. It has access to its own scope, the outer function's scope, and the global scope. A practical example is a function factory: `function createCounter() { let count = 0; return function() { count++; return count; }; } const counter1 = createCounter(); console.log(counter1()); // 1` The inner function 'closes over' the `count` variable.",
        explanation: "Closures are powerful for creating private variables and stateful functions."
    },
    {
        id: 272,
        testId: 10,
        difficulty: 'expert',
        question: "What are the different types of database replication strategies and their trade-offs?",
        type: 'subjective',
        answer: "The main strategies are leader-based (master-slave), multi-leader, and leaderless. Leader-based is simple to reason about but the leader is a single point of failure. Multi-leader allows writes to multiple nodes, improving write availability but introducing potential write conflicts. Leaderless (e.g., using quorums) offers high availability and partition tolerance but may provide weaker consistency guarantees (eventual consistency).",
        explanation: "The choice depends on the CAP theorem trade-offs (Consistency, Availability, Partition Tolerance) that are acceptable for the application."
    },
    {
        id: 273,
        testId: 10,
        difficulty: 'expert',
        question: "Explain how the 'event loop' in Node.js works.",
        type: 'subjective',
        answer: "The event loop allows Node.js to perform non-blocking I/O operations, despite being single-threaded. It offloads operations to the system kernel whenever possible. When an operation (like a database query or file read) is initiated, the callback is registered and the main thread continues. When the operation completes, its callback is placed in the event queue. The event loop continuously takes callbacks from the queue and pushes them onto the call stack for execution when the stack is empty.",
        explanation: "This model allows a single Node.js process to handle thousands of concurrent connections."
    },
    {
        id: 274,
        testId: 10,
        difficulty: 'expert',
        question: "What is the CAP theorem in distributed systems?",
        type: 'subjective',
        answer: "The CAP theorem states that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency (every read gets the most recent write), Availability (every request gets a response), and Partition Tolerance (the system works despite network partitions). Since network partitions are a given, the real trade-off is between consistency and availability (CP vs AP systems).",
        explanation: "This is a fundamental principle in the design of any distributed system."
    },
    {
        id: 275,
        testId: 10,
        difficulty: 'expert',
        question: "How does HTTPS work? Explain the TLS handshake.",
        type: 'subjective',
        answer: "HTTPS encrypts HTTP traffic using TLS/SSL. The TLS handshake process involves: 1) The client sends a 'hello' with its supported cipher suites. 2) The server responds with its SSL certificate and chosen cipher suite. 3) The client verifies the certificate with a trusted Certificate Authority. 4) The client generates a session key, encrypts it with the server's public key, and sends it to the server. 5) The server decrypts the session key with its private key. All subsequent communication is encrypted with this shared session key.",
        explanation: "This process establishes a secure, encrypted channel between the client and server."
    }
  ],
  backend: [],
  'full-stack': [],
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
  cybersecurity: []
};

// This is a simplified example of how you might generate questions.
// In a real application, you'd want a more robust templating system.
const questionTemplates = questions.frontend;

const keywordMapping: Record<string, Record<string, string>> = {
    'backend': { 'frontend': 'backend', 'Frontend': 'Backend', 'React': 'Express.js', 'DOM': 'database', 'browser': 'server', 'component': 'service', 'UI': 'API', 'CSS': 'SQL', 'HTML': 'data model', 'website': 'application', 'web page': 'endpoint', 'user interface': 'service layer', 'rendering': 'processing', 'clicking': 'requesting' },
    'full-stack': { 'React': 'MERN stack', 'frontend': 'full-stack', 'Frontend': 'Full-Stack', 'component': 'application', 'UI': 'system' },
    'next-js': { 'React': 'Next.js', 'component': 'page', 'client-side routing': 'file-based routing', 'CSR': 'SSR/SSG' },
    'java': { 'JavaScript': 'Java', 'React': 'Spring Boot', 'component': 'bean', 'DOM': 'JVM memory', 'Node.js': 'the JVM', 'variable': 'variable', 'let': 'var' },
    'python': { 'JavaScript': 'Python', 'React': 'Django', 'component': 'module', 'array': 'list', 'Node.js': 'Python runtime' },
    'mern': { 'frontend': 'MERN stack', 'React': 'the MERN stack' },
    'c-plus-plus': { 'JavaScript': 'C++', 'React': 'a C++ framework', 'Node.js': 'a native application', 'component': 'object', 'array': 'vector' },
    'devops': { 'application': 'pipeline', 'React': 'Kubernetes', 'component': 'container', 'code': 'infrastructure', 'server': 'cluster', 'deployment': 'CI/CD pipeline' },
    'data-science': { 'component': 'model', 'React': 'pandas', 'data': 'dataset', 'API': 'Jupyter notebook', 'function': 'algorithm' },
    'ai-ml': { 'component': 'neural network', 'function': 'model', 'React': 'TensorFlow', 'data': 'training data', 'API': 'inference API' },
    'cloud-computing': { 'server': 'EC2 instance', 'application': 'serverless function', 'React': 'AWS Lambda', 'database': 'DynamoDB', 'deployment': 'CloudFormation stack' },
    'mobile-development': { 'React': 'SwiftUI', 'web page': 'screen', 'component': 'view controller', 'browser': 'mobile app', 'website': 'application' },
    'cybersecurity': { 'application': 'system', 'React': 'firewall configuration', 'user': 'threat actor', 'data': 'sensitive data', 'API': 'network protocol', 'vulnerability': 'exploit' }
};

function generateQuestionsForCategory(category: string, keywordMap: Record<string, string>): Question[] {
    const newQuestions: Question[] = [];
    questionTemplates.forEach(template => {
        let newQuestionText = template.question;
        let newAnswerText = template.answer;
        let newExplanationText = template.explanation || '';

        for (const [key, value] of Object.entries(keywordMap)) {
            newQuestionText = newQuestionText.replace(new RegExp(`\\b${key}\\b`, 'gi'), value);
            newAnswerText = newAnswerText.replace(new RegExp(`\\b${key}\\b`, 'gi'), value);
            newExplanationText = newExplanationText.replace(new RegExp(`\\b${key}\\b`, 'gi'), value);
        }

        const newQuestion: Question = { ...template, question: newQuestionText, answer: newAnswerText, explanation: newExplanationText };
        
        if (template.options) {
            newQuestion.options = template.options.map(option => {
                let newOption = option;
                for (const [key, value] of Object.entries(keywordMap)) {
                    newOption = newOption.replace(new RegExp(`\\b${key}\\b`, 'gi'), value);
                }
                return newOption;
            });
        }
        newQuestions.push(newQuestion);
    });
    return newQuestions;
}

for (const category in keywordMapping) {
    if (Object.prototype.hasOwnProperty.call(keywordMapping, category)) {
        questions[category] = generateQuestionsForCategory(category, keywordMapping[category]);
    }
}

