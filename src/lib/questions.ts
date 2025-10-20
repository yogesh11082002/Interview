
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
            'It allows code written in languages like C++ and Rust to run on the web at near-native speed',
            'It is easier to write than JavaScript',
            'It replaces the need for HTML and CSS'
        ],
        answer: 'It allows code written in languages like C++ and Rust to run on the web at near-native speed',
        explanation: 'Wasm is a performance-focused complement to JavaScript, not a replacement.'
    },
    {
        id: 232,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'Kubernetes Operator'?",
        type: 'mcq',
        options: [
            'A network proxy configuration',
            'An object used to define custom behavior for fundamental operations (e.g., property lookup)',
            'A placeholder for a future value',
            'A security feature'
        ],
        answer: 'An object used to define custom behavior for fundamental operations (e.g., property lookup)',
        explanation: "Proxies enable powerful metaprogramming patterns, such as reactivity in frameworks like Vue."
    },
    {
        id: 233,
        testId: 10,
        difficulty: 'expert',
        question: "Which CSS property can be used to prevent text from wrapping?",
        type: 'mcq',
        options: ['`text-wrap: no-wrap`', '`word-break: break-all`', '`white-space: nowrap`', '`overflow: hidden`'],
        answer: 'white-space: nowrap',
        explanation: "It collapses white space and prevents line breaks."
    },
    {
        id: 234,
        testId: 10,
        difficulty: 'expert',
        question: "Which is a valid way to create a private class field in modern JavaScript?",
        type: 'mcq',
        options: ['`let myVar`', '`this._myVar`', '`const myVar`', '`#myVar`'],
        answer: '`#myVar`',
        explanation: "The `#` prefix makes a field private to the class, inaccessible from outside."
    },
    {
        id: 235,
        testId: 10,
        difficulty: 'expert',
        question: "What is a `PureComponent` in React?",
        type: 'mcq',
        options: ['A component with no state', 'A component that only contains pure functions', 'A class component that implements a shallow prop and state comparison to prevent unnecessary re-renders', 'A functional component'],
        answer: 'A class component that implements a shallow prop and state comparison to prevent unnecessary re-renders',
        explanation: "`React.memo` is the equivalent for functional components."
    },
    {
        id: 236,
        testId: 10,
        difficulty: 'expert',
        question: "What is a `Symbol` in JavaScript used for?",
        type: 'mcq',
        options: ['To create unique object properties to avoid name collisions', 'To store special characters', 'To create vector graphics', 'To perform mathematical operations'],
        answer: 'To create unique object properties to avoid name collisions',
        explanation: "They are a primitive data type that is guaranteed to be unique."
    },
    {
        id: 237,
        testId: 10,
        difficulty: 'expert',
        question: "Why is `requestAnimationFrame` better for animations than `setTimeout`?",
        type: 'mcq',
        options: ['It runs code after a specified delay with higher priority', 'It synchronizes with the browser\'s repaint cycle for smoother animations', 'It is a newer version of `setInterval`', 'It is used exclusively for network requests'],
        answer: 'It synchronizes with the browser\'s repaint cycle for smoother animations',
        explanation: "This prevents layout thrashing and results in more efficient, smoother animations."
    },
    {
        id: 238,
        testId: 10,
        difficulty: 'expert',
        question: "What is webpack's Module Federation?",
        type: 'mcq',
        options: ['A way to manage different versions of the same module', 'A method for loading modules from a CDN', 'A feature that allows a JavaScript application to dynamically load code from another application', 'A security policy for modules'],
        answer: 'A feature that allows a JavaScript application to dynamically load code from another application',
        explanation: "It enables micro-frontend architectures by allowing separately built applications to share code."
    },
    {
        id: 239,
        testId: 10,
        difficulty: 'expert',
        question: "What is a `WeakMap` in JavaScript?",
        type: 'mcq',
        options: ["A Map that cannot be iterated", "A Map that only holds weak references to its keys, allowing them to be garbage collected", "A less performant version of Map", "An alias for an Object"],
        answer: "A Map that only holds weak references to its keys, allowing them to be garbage collected",
        explanation: "This prevents memory leaks when the only reference to an object is the WeakMap key."
    },
    {
        id: 240,
        testId: 10,
        difficulty: 'expert',
        question: "What is the purpose of `rel='noopener'` attribute on a link?",
        type: 'mcq',
        options: ["To stop search engines from following the link", "To prevent the new page from being able to access the `window.opener` property for security", "To open the link in a special popup", "To load the link content in the background"],
        answer: "To prevent the new page from being able to access the `window.opener` property for security",
        explanation: "This is a security measure to prevent malicious pages from manipulating the original page."
    },
    {
        id: 241,
        testId: 10,
        difficulty: 'expert',
        question: "What is the `for...of` loop used for in JavaScript?",
        type: 'mcq',
        options: ["Iterating over the properties of an object", "Iterating over the values of an iterable object (like an Array or String)", "Creating a loop that runs a specific number of times", "It is an alias for the `for...in` loop"],
        answer: "Iterating over the values of an iterable object (like an Array or String)",
        explanation: "`for...in` iterates over keys, while `for...of` iterates over values."
    },
    {
        id: 242,
        testId: 10,
        difficulty: 'expert',
        question: "What is CSS Containment?",
        type: 'mcq',
        options: ["A property to contain elements within the viewport", "A property (`contain`) that allows you to isolate a part of the page for performance optimization", "A security feature to contain scripts", "A way to group CSS variables"],
        answer: "A property (`contain`) that allows you to isolate a part of the page for performance optimization",
        explanation: "It tells the browser that an element's subtree is independent, allowing for rendering optimizations."
    },
    {
        id: 243,
        testId: 10,
        difficulty: 'expert',
        question: "What is `git stash` used for?",
        type: 'mcq',
        options: ["To delete uncommitted changes", "To save uncommitted changes temporarily without committing them", "To merge branches", "To create a new commit"],
        answer: "To save uncommitted changes temporarily without committing them",
        explanation: "It's useful for quickly switching contexts without making a commit."
    },
    {
        id: 244,
        testId: 10,
        difficulty: 'expert',
        question: "What is `requestAnimationFrame` primarily used for?",
        type: 'mcq',
        options: ["Fetching data from an API", "Running background tasks", "Performing smooth animations in the browser", "Debouncing user input"],
        answer: "Performing smooth animations in the browser",
        explanation: "It schedules a function to be called just before the next browser repaint."
    },
    {
        id: 245,
        testId: 10,
        difficulty: 'expert',
        question: "Describe the JavaScript event loop.",
        type: 'subjective',
        answer: "The event loop is a mechanism that allows JavaScript's single thread to handle asynchronous operations. It consists of a call stack, a message queue (or callback queue), and Web APIs. When an async operation completes (e.g., a `setTimeout`), its callback is placed in the queue. The event loop continuously checks if the call stack is empty. If it is, it takes the first message from the queue and pushes its callback onto the stack to be executed.",
        explanation: "This model allows for non-blocking I/O in a single-threaded environment."
    },
    {
        id: 246,
        testId: 10,
        difficulty: 'expert',
        question: "What are WebSockets?",
        type: 'subjective',
        answer: "WebSockets provide a full-duplex communication channel over a single, long-lived TCP connection. Unlike traditional HTTP, which is request-response based, WebSockets allow for real-time, two-way communication between the client and server, making them ideal for applications like live chat, real-time gaming, and live data feeds.",
        explanation: "They solve the limitations of HTTP polling and long-polling."
    },
    {
        id: 247,
        testId: 10,
        difficulty: 'expert',
        question: "How would you debounce a function in JavaScript?",
        type: 'subjective',
        answer: "You would create a wrapper function that uses `setTimeout`. Inside the wrapper, you first clear any existing timeout with `clearTimeout`, then set a new timeout to execute the original function after a specified delay. This ensures the function only runs once after a burst of calls has ended.",
        explanation: "Commonly used for handling user input, like in a search bar."
    },
    {
        id: 248,
        testId: 10,
        difficulty: 'expert',
        question: "Explain how the `this` keyword works in JavaScript.",
        type: 'subjective',
        answer: "The value of `this` is determined by how a function is called (its execution context). In a method (e.g., `obj.myMethod()`), `this` refers to the owner object. In a regular function, `this` refers to the global object (`window` in browsers) or `undefined` in strict mode. In an event handler, `this` refers to the element that received the event. Arrow functions do not have their own `this`; they lexically bind it from their parent scope.",
        explanation: "The behavior of `this` is one of the most frequently misunderstood parts of JavaScript."
    },
    {
        id: 249,
        testId: 10,
        difficulty: 'expert',
        question: "What are CSS Custom Properties (Variables) and what are their benefits?",
        type: 'subjective',
        answer: "CSS Custom Properties are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: #ff0000;`) and are accessed using the `var()` function. Benefits include DRY (Don't Repeat Yourself) code, easier theming, and the ability to be read and changed dynamically via JavaScript.",
        explanation: "They are a powerful feature for creating maintainable and dynamic stylesheets."
    },
    {
        id: 250,
        testId: 10,
        difficulty: 'expert',
        question: "What is hydration in the context of SSR with React?",
        type: 'subjective',
        answer: "Hydration is the process of attaching event listeners and making the static HTML received from a server-side rendering (SSR) process interactive. React 'hydrates' the server-rendered HTML by building its virtual DOM in memory, comparing it to the existing HTML, and then attaching the necessary JavaScript logic and event listeners to the markup.",
        explanation: "It turns a static page into a dynamic single-page application."
    },
    {
        id: 251,
        testId: 10,
        difficulty: 'expert',
        question: "Explain event delegation in JavaScript.",
        type: 'subjective',
        answer: 'Event delegation is a technique where you add a single event listener to a parent element to manage events for all of its children, including dynamically added ones. When an event bubbles up from a child, the parent listener can check the `event.target` property to identify which child triggered the event and respond accordingly. This improves performance by reducing the number of event listeners.',
        explanation: "It's a memory-efficient way to handle events on many elements."
    },
    {
        id: 252,
        testId: 10,
        difficulty: 'expert',
        question: "How does React's reconciliation algorithm work?",
        type: 'subjective',
        answer: "Reconciliation is the process through which React updates the DOM. When a component's state or props change, React creates a new virtual DOM tree. It then compares ('diffs') this new tree with the previous one using a heuristic algorithm. Based on this comparison, it computes the most efficient, minimal set of changes needed to update the real DOM and applies them in a batch.",
        explanation: "The key assumption is that different component types produce different trees and that developers can hint at stable elements using the `key` prop."
    },
    {
        id: 253,
        testId: 10,
        difficulty: 'expert',
        question: "What are render props in React?",
        type: 'subjective',
        answer: "The term 'render prop' refers to a technique for sharing code between React components using a prop whose value is a function that returns a React element. A component with a render prop (e.g., `<DataProvider render={data => <h1>{data.name}</h1>} />`) calls this function to delegate its rendering logic, enabling powerful and flexible composition.",
        explanation: "It's a pattern for sharing logic, similar in purpose to hooks and HOCs."
    },
    {
        id: 254,
        testId: 10,
        difficulty: 'expert',
        question: "What is the difference between throttling and debouncing?",
        type: 'subjective',
        answer: "Throttling guarantees that a function is executed at most once per specified time period (e.g., once every 100ms). Debouncing ensures that a function is only called after a certain period of inactivity (e.g., after the user stops typing for 300ms). Throttling is about limiting the rate, while debouncing is about waiting for a pause.",
        explanation: "Throttling is good for scroll events, while debouncing is good for search input."
    },
    {
        id: 255,
        testId: 10,
        difficulty: 'expert',
        question: "What is a Progressive Web App (PWA)?",
        type: 'subjective',
        answer: "A PWA is a web application that uses modern web capabilities to deliver an app-like experience. Key features include being installable on the user's home screen, working offline via a service worker, and offering push notifications. They aim to combine the reach of the web with the user experience of a native app.",
        explanation: "They represent the evolution of web apps to be more capable and reliable."
    },
    {
        id: 256,
        testId: 10,
        difficulty: 'expert',
        question: "What is the `Same-Origin Policy` and why is it important?",
        type: 'subjective',
        answer: 'The Same-Origin Policy (SOP) is a critical security mechanism in web browsers. It restricts how a document or script loaded from one origin (domain, protocol, port) can interact with a resource from another origin. This helps prevent malicious scripts on one page from accessing sensitive data on another page.',
        explanation: "It's a cornerstone of web security."
    },
    // Test 7: 35 Questions (21 MCQ, 14 Subjective) - Hard
    {
        id: 257,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'CRDT' (Conflict-free Replicated Data Type)?",
        type: 'subjective',
        answer: "A `Symbol` is a unique and immutable primitive data type introduced in ES6. Symbols are often used as keys for object properties to avoid name collisions, as each symbol value returned from `Symbol()` is guaranteed to be unique.",
        explanation: "This is useful for defining 'private' or internal properties on objects."
    },
    {
      id: 258,
      testId: 10,
      difficulty: 'hard',
      question: 'What is "code splitting"?',
      type: 'subjective',
      answer: "Code splitting is a feature supported by bundlers like Webpack or Rollup which can create multiple bundles that can be dynamically loaded at runtime. Instead of one massive bundle, you can split code by route or component. This is crucial for improving initial page load time, as the user only downloads the code needed for the initial view.",
      explanation: "`React.lazy` and dynamic `import()` are common ways to implement code splitting."
    },
    {
      id: 259,
      testId: 10,
      difficulty: 'hard',
      question: "What are ES modules (ESM)?",
      type: 'subjective',
      answer: 'ES Modules are the official, standardized module system for JavaScript, introduced in ES6. They use the `import` and `export` statements. Unlike older systems like CommonJS, ESM is resolved statically at parse time, which allows for powerful optimizations like tree shaking. They are the standard for modern browsers and Node.js.',
      explanation: "They offer a cleaner syntax and better performance than older module systems."
    },
    {
      id: 260,
      testId: 10,
      difficulty: 'hard',
      question: "What is OAuth 2.0?",
      type: 'subjective',
      answer: "OAuth 2.0 is an authorization framework, not an authentication protocol. It enables a third-party application to obtain limited access to a user's account on an HTTP service. It works by delegating user authentication to the service that hosts the user account and authorizing the third-party application to access the user account via access tokens, rather than sharing the user's credentials.",
      explanation: "It's the industry standard for authorization, used by Google, Facebook, and others."
    },
    {
      id: 261,
      testId: 10,
      difficulty: 'hard',
      question: "What is a `WeakMap` in JavaScript?",
      type: 'subjective',
      answer: "A `WeakMap` only accepts objects as keys and holds 'weak' references, meaning if there are no other references to an object used as a key, it can be garbage collected. This is its main difference from a regular `Map`, which holds strong references. `WeakMap` is not iterable and is primarily used to prevent memory leaks by associating data with an object without preventing its collection.",
      explanation: "It's an advanced feature for specific memory management scenarios."
    },
    {
      id: 262,
      testId: 10,
      difficulty: 'hard',
      question: "What is the purpose of `Array.prototype.flat()`?",
      type: 'subjective',
      answer: "The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to a specified depth. The default depth is 1. This is useful for simplifying nested arrays into a single, flat array.",
      explanation: "For example, `[1, [2, 3], [4, [5]]].flat()` results in `[1, 2, 3, 4, [5]]`."
    },
    {
      id: 263,
      testId: 10,
      difficulty: 'hard',
      question: "What is the `will-change` CSS property used for?",
      type: 'subjective',
      answer: "The `will-change` property provides a hint to the browser about what properties of an element are expected to change in the future. This allows the browser to set up optimizations in advance, before the element is actually changed. For example, it might move the element to its own layer on the GPU. It should be used sparingly as it can be a performance cost if overused.",
      explanation: "It's a way to tell the browser 'get ready to animate this'."
    },
    {
      id: 264,
      testId: 10,
      difficulty: 'hard',
      question: "What is `ESLint` and why is it useful?",
      type: 'subjective',
      answer: "`ESLint` is a static analysis tool for identifying and fixing problems in JavaScript code. It's highly configurable and helps enforce code quality, style consistency, and prevent common errors. By analyzing code without executing it, it can catch bugs early in the development process.",
      explanation: "It's an essential tool for any modern JavaScript project, especially for teams."
    },
    {
      id: 265,
      testId: 10,
      difficulty: 'hard',
      question: "What is `git cherry-pick` used for?",
      type: 'subjective',
      answer: "`git cherry-pick` is a command used to apply a specific commit from one branch onto another branch. Instead of merging an entire branch, it allows you to select individual commits. This is useful for backporting a bug fix or applying a small feature from a development branch to a stable branch.",
      explanation: "It's a powerful tool for surgical changes between branches."
    },
    {
      id: 266,
      testId: 10,
      difficulty: 'hard',
      question: "What is the difference between `Promise.all()` and `Promise.allSettled()`?",
      type: 'subjective',
      answer: "`Promise.all()` takes an iterable of promises and returns a single promise that resolves with an array of all resolved values. It is 'fail-fast', meaning it will reject immediately if any of the input promises reject. `Promise.allSettled()` also takes an iterable, but it waits for all promises to settle (either fulfill or reject) and returns a promise that resolves with an array of objects, each describing the outcome of a promise.",
      explanation: "Use `all()` when you need all promises to succeed. Use `allSettled()` when you need to know the outcome of every promise, regardless of success."
    },
    {
      id: 267,
      testId: 10,
      difficulty: 'hard',
      question: "Explain the concept of WebAssembly (Wasm) and its use cases.",
      type: 'subjective',
      answer: "WebAssembly is a binary instruction format for a stack-based virtual machine. It's designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications. It allows you to run code written in languages like C++, Rust, and Go on the web at near-native speed. Use cases include performance-intensive tasks like gaming, video editing, and scientific simulations.",
      explanation: "Wasm is not a replacement for JavaScript, but a complement for performance-critical parts of an application."
    },
    {
      id: 268,
      testId: 10,
      difficulty: 'hard',
      question: "What is a Content Delivery Network (CDN) and how does it improve website performance?",
      type: 'subjective',
      answer: "A CDN is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end-users. When a user requests a static asset (like an image, CSS, or JS file) from a site using a CDN, the request is routed to the server closest to the user. This reduces latency and speeds up content delivery.",
      explanation: "CDNs are essential for modern high-traffic websites to ensure fast load times for a global audience."
    },
    {
      id: 269,
      testId: 10,
      difficulty: 'hard',
      question: "What are HTTP/2 and HTTP/3, and what are their key improvements over HTTP/1.1?",
      type: 'subjective',
      answer: "HTTP/2 introduced multiplexing, allowing multiple requests and responses to be sent over a single TCP connection, solving the head-of-line blocking issue of HTTP/1.1. It also added header compression and server push. HTTP/3 builds on this by using QUIC instead of TCP, which further reduces latency, improves connection setup time, and handles packet loss more gracefully, making it more resilient on unstable networks.",
      explanation: "These newer protocols significantly improve web performance, especially on mobile and unreliable networks."
    },
    {
      id: 270,
      testId: 10,
      difficulty: 'hard',
      question: "Describe what happens from the moment you type a URL into your browser until the page is rendered.",
      type: 'subjective',
      answer: "The process involves several steps: 1) DNS Resolution to find the IP address. 2) A TCP connection is established with the server. 3) The browser sends an HTTP request. 4) The server processes the request and sends back an HTTP response with the HTML. 5) The browser parses the HTML to build the DOM tree. 6) It parses CSS to build the CSSOM tree. 7) The DOM and CSSOM are combined to form the Render Tree. 8) The browser performs Layout (calculating positions) and then Paint (drawing the pixels on the screen).",
      explanation: "This is a classic and comprehensive web knowledge question."
    },
     // Test 8: 40 Questions (24 MCQ, 16 Subjective) - Expert
     {
        id: 271,
        testId: 10,
        difficulty: 'expert',
        question: "What is a 'race condition' and how can it be mitigated in JavaScript?",
        type: 'subjective',
        answer: "An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events.",
        explanation: "Mitigation strategies include using async/await to ensure sequential execution, using a locking mechanism, or designing state updates to be atomic."
    },
    {
        id: 272,
        testId: 10,
        difficulty: 'expert',
        question: "What are WebSockets?",
        type: 'subjective',
        answer: "A full-duplex communication channel over a single, long-lived TCP connection.",
        explanation: "Solve the limitations of HTTP polling and long-polling."
    },
    {
        id: 273,
        testId: 10,
        difficulty: 'expert',
        question: "How would you debounce a function in JavaScript?",
        type: 'subjective',
        answer: "You would create a wrapper function that uses `setTimeout`. Inside the wrapper, you first clear any existing timeout with `clearTimeout`, then set a new timeout to execute the original function after a specified delay. This ensures the function only runs once after a burst of calls has ended.",
        explanation: "Commonly used for handling user input, like in a search bar."
    },
    {
        id: 274,
        testId: 10,
        difficulty: 'expert',
        question: "Describe the JavaScript event loop.",
        type: 'subjective',
        answer: "Mechanism that allows JavaScript's single thread to handle asynchronous operations.",
        explanation: "Allows for non-blocking I/O in a single-threaded environment."
    },
    {
        id: 275,
        testId: 10,
        difficulty: 'expert',
        question: "In the context of networking, what is a 'port'?",
        type: 'subjective',
        answer: "A numerical identifier that specifies a particular process or service on a host computer.",
        explanation: "Ports allow a single host to run multiple services, directing network traffic to the correct application (e.g., a web server on port 80)."
    }
  ],
  backend: [
    // Test 1: 5 Questions (3 MCQ, 2 Subjective) - Easy
    {
        id: 276,
        testId: 1,
        difficulty: 'easy',
        question: "What is an API?",
        type: 'mcq',
        options: ['A type of database', 'Application Programming Interface', 'A user interface', 'A server'],
        answer: 'Application Programming Interface',
        explanation: 'An API is a set of rules and protocols that allows different software applications to communicate with each other.'
    },
    {
        id: 277,
        testId: 1,
        difficulty: 'easy',
        question: "Which of the following is a common backend programming language?",
        type: 'mcq',
        options: ['HTML', 'CSS', 'Node.js (JavaScript)', 'React'],
        answer: 'Node.js (JavaScript)',
        explanation: 'Node.js allows JavaScript to be run on the server side. Python, Java, Ruby, and Go are also common backend languages.'
    },
    {
        id: 278,
        testId: 1,
        difficulty: 'easy',
        question: "What does SQL stand for?",
        type: 'mcq',
        options: ['Structured Query Language', 'Simple Question Language', 'Server Quality Logic', 'Standard Query Language'],
        answer: 'Structured Query Language',
        explanation: 'SQL is the standard language for managing and manipulating data in relational databases.'
    },
    {
        id: 279,
        testId: 1,
        difficulty: 'easy',
        question: "What is the purpose of a database?",
        type: 'subjective',
        answer: "The purpose of a database is to store, organize, manage, and retrieve data efficiently and persistently. It provides a structured way to handle large amounts of information, ensuring data integrity and security.",
        explanation: "Databases are a core component of almost every backend system."
    },
    {
        id: 280,
        testId: 1,
        difficulty: 'easy',
        question: "What is a server in the context of web development?",
        type: 'subjective',
        answer: "A server is a computer program or a physical machine that provides services to other computers, known as clients. In web development, a web server processes incoming requests from clients (browsers) and sends back responses, such as HTML pages, data, or other resources.",
        explanation: "The server is the 'backend' that powers the 'frontend' you see in a browser."
    },
    // Test 2: 10 Questions (6 MCQ, 4 Subjective) - Easy
    {
        id: 281,
        testId: 2,
        difficulty: 'easy',
        question: "What is a primary key in a database table?",
        type: 'mcq',
        options: ['A key used to encrypt the data', 'The first column in a table', 'A unique identifier for each record in a table', 'A key that links to another table'],
        answer: 'A unique identifier for each record in a table',
        explanation: 'A primary key must contain unique values and cannot contain NULL values.'
    },
    {
        id: 282,
        testId: 2,
        difficulty: 'easy',
        question: "Which HTTP method is typically used for retrieving data from a server?",
        type: 'mcq',
        options: ['POST', 'GET', 'PUT', 'DELETE'],
        answer: 'GET',
        explanation: 'GET requests are used to request data from a specified resource and should have no other effect.'
    },
    {
        id: 283,
        testId: 2,
        difficulty: 'easy',
        question: "What is a 'route' in a backend framework like Express.js?",
        type: 'mcq',
        options: ['A path to a file on the server', 'A way to define how the application responds to a client request to a particular endpoint (URI)', 'A connection to the database', 'A type of middleware'],
        answer: 'A way to define how the application responds to a client request to a particular endpoint (URI)',
        explanation: 'Routes are fundamental to defining the functionality of an API.'
    },
    {
        id: 284,
        testId: 2,
        difficulty: 'easy',
        question: "What does 'localhost' refer to?",
        type: 'mcq',
        options: ['A remote server', 'The public internet', 'The current computer you are working on', 'A type of database'],
        answer: 'The current computer you are working on',
        explanation: 'Localhost is a hostname that means "this computer," and its IP address is typically 127.0.0.1.'
    },
    {
        id: 285,
        testId: 2,
        difficulty: 'easy',
        question: "What is Node.js?",
        type: 'mcq',
        options: ['A frontend framework', 'A JavaScript runtime environment that executes JavaScript code outside a web browser', 'A database', 'A programming language'],
        answer: 'A JavaScript runtime environment that executes JavaScript code outside a web browser',
        explanation: 'Node.js is what allows developers to use JavaScript for backend development.'
    },
    {
        id: 286,
        testId: 2,
        difficulty: 'easy',
        question: "Which of the following is a NoSQL database?",
        type: 'mcq',
        options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
        answer: 'MongoDB',
        explanation: 'MongoDB is a document-oriented NoSQL database, while the others are relational (SQL) databases.'
    },
    {
        id: 287,
        testId: 2,
        difficulty: 'easy',
        question: "What is a REST API?",
        type: 'subjective',
        answer: "A REST (Representational State Transfer) API is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, almost always HTTP. It uses standard HTTP methods (GET, POST, PUT, DELETE) and is based on the idea of resources identified by URLs.",
        explanation: 'REST is the most common architectural style for building web APIs.'
    },
    {
        id: 288,
        testId: 2,
        difficulty: 'easy',
        question: "What is the purpose of `npm` (Node Package Manager)?",
        type: 'subjective',
        answer: "npm is the default package manager for Node.js. Its primary purpose is to install and manage external libraries and packages (dependencies) that a project needs to run. It also includes a command-line client to interact with the npm registry.",
        explanation: 'npm makes it easy to share and reuse code.'
    },
    {
        id: 289,
        testId: 2,
        difficulty: 'easy',
        question: "What is the difference between HTTP and HTTPS?",
        type: 'subjective',
        answer: "The main difference is security. HTTP (Hypertext Transfer Protocol) is unencrypted, meaning data is sent in plain text. HTTPS (HTTP Secure) uses TLS/SSL to encrypt the communication between the client and the server, ensuring confidentiality and integrity of the data.",
        explanation: 'HTTPS is the standard for all modern websites to protect user data.'
    },
    {
        id: 290,
        testId: 2,
        difficulty: 'easy',
        question: "What is JSON?",
        type: 'subjective',
        answer: "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. It is often used to send data between a server and a web application as an alternative to XML.",
        explanation: 'JSON is the de facto standard format for data in web APIs.'
    },
    // Test 3: 15 Questions (9 MCQ, 6 Subjective) - Medium
    {
        id: 291,
        testId: 3,
        difficulty: 'medium',
        question: "What is 'middleware' in the context of a backend framework like Express.js?",
        type: 'mcq',
        options: ['A database', 'Functions that have access to the request object, the response object, and the next middleware function in the application\'s request-response cycle', 'A user interface component', 'A type of server'],
        answer: 'Functions that have access to the request object, the response object, and the next middleware function in the application\'s request-response cycle',
        explanation: 'Middleware is used for tasks like logging, authentication, and parsing request bodies.'
    },
    {
        id: 292,
        testId: 3,
        difficulty: 'medium',
        question: "What is a foreign key in a relational database?",
        type: 'mcq',
        options: ['A key that is not from your country', 'A field in one table that uniquely identifies a row of another table', 'The main key of a table', 'An encrypted key'],
        answer: 'A field in one table that uniquely identifies a row of another table',
        explanation: 'Foreign keys are used to link tables together and enforce referential integrity.'
    },
    {
        id: 293,
        testId: 3,
        difficulty: 'medium',
        question: "What is an 'environment variable'?",
        type: 'mcq',
        options: ['A variable that describes the weather', 'A variable whose value is set outside the program, typically in the operating system, to configure its behavior', 'A variable that can only be used in the browser', 'A variable that is always a string'],
        answer: 'A variable whose value is set outside the program, typically in the operating system, to configure its behavior',
        explanation: 'Environment variables are commonly used for storing configuration like API keys or database connection strings, keeping them separate from the code.'
    },
    {
        id: 294,
        testId: 3,
        difficulty: 'medium',
        question: "What is hashing in the context of password security?",
        type: 'mcq',
        options: ['Encrypting a password', 'A one-way function that transforms a password into a fixed-size string of characters, which cannot be reversed', 'Storing a password in plain text', 'Compressing a password'],
        answer: 'A one-way function that transforms a password into a fixed-size string of characters, which cannot be reversed',
        explanation: 'Hashing is a fundamental security practice. Passwords should never be stored in plain text.'
    },
    {
        id: 295,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of an ORM (Object-Relational Mapping)?",
        type: 'mcq',
        options: ['To optimize database queries', 'A technique for converting data between incompatible type systems in object-oriented programming languages', 'To create user interfaces', 'To manage server infrastructure'],
        answer: 'A technique for converting data between incompatible type systems in object-oriented programming languages',
        explanation: 'ORMs like Prisma, Sequelize, or TypeORM allow developers to interact with their database using an object-oriented paradigm instead of writing raw SQL.'
    },
    {
        id: 296,
        testId: 3,
        difficulty: 'medium',
        question: "What does the HTTP status code `200 OK` signify?",
        type: 'mcq',
        options: ['The request was successful', 'The resource was not found', 'There was a server error', 'The request was created'],
        answer: 'The request was successful',
        explanation: '`200 OK` is the standard response for successful HTTP requests.'
    },
    {
        id: 297,
        testId: 3,
        difficulty: 'medium',
        question: "What does the SQL `JOIN` clause do?",
        type: 'mcq',
        options: ['It adds a new row to a table', 'It deletes a table', 'It combines rows from two or more tables based on a related column between them', 'It updates a record'],
        answer: 'It combines rows from two or more tables based on a related column between them',
        explanation: 'JOINs are fundamental to querying data from a relational database.'
    },
    {
        id: 298,
        testId: 3,
        difficulty: 'medium',
        question: "In Node.js, what is the purpose of the `package.json` file?",
        type: 'mcq',
        options: ['To store application data', 'To list the project\'s dependencies and store other metadata', 'To write the main application logic', 'To configure the server'],
        answer: 'To list the project\'s dependencies and store other metadata',
        explanation: 'It serves as a manifest for the project, defining its properties, scripts, and dependencies.'
    },
    {
        id: 299,
        testId: 3,
        difficulty: 'medium',
        question: "What is a JWT (JSON Web Token)?",
        type: 'mcq',
        options: ['A type of database', 'A compact, URL-safe means of representing claims to be transferred between two parties', 'A session management tool', 'A server framework'],
        answer: 'A compact, URL-safe means of representing claims to be transferred between two parties',
        explanation: 'JWTs are commonly used for stateless authentication and authorization in APIs.'
    },
    {
        id: 300,
        testId: 3,
        difficulty: 'medium',
        question: "What is the difference between a relational (SQL) and a non-relational (NoSQL) database?",
        type: 'subjective',
        answer: "Relational databases (like MySQL, PostgreSQL) store data in tables with a predefined schema, enforcing relationships between tables. They are good for structured data. Non-relational databases (like MongoDB, Redis) store data in various formats (documents, key-value pairs) with dynamic schemas, offering more flexibility and scalability for unstructured or semi-structured data.",
        explanation: 'The choice depends on the application\'s data structure, scalability, and consistency requirements.'
    },
    {
        id: 301,
        testId: 3,
        difficulty: 'medium',
        question: "Explain the request-response cycle in a typical web application.",
        type: 'subjective',
        answer: "The cycle begins when a client (e.g., a browser) sends an HTTP request to a server's URL. The server receives the request, processes it (which may involve running business logic, querying a database, or calling other services), generates an HTTP response (containing a status code, headers, and a body like HTML or JSON), and sends it back to the client. The client then processes the response (e.g., rendering the HTML).",
        explanation: 'This is the fundamental interaction model of the web.'
    },
    {
        id: 302,
        testId: 3,
        difficulty: 'medium',
        question: "What is 'salting' passwords and why is it important?",
        type: 'subjective',
        answer: "Salting is the process of adding a unique, random string of characters (the salt) to each user's password before it is hashed. The salt is then stored along with the hash. This is important because it ensures that even if two users have the same password, their stored hashes will be different. This defeats 'rainbow table' attacks, which use pre-computed hashes of common passwords.",
        explanation: 'Salting is a critical security measure for storing user credentials.'
    },
    {
        id: 303,
        testId: 3,
        difficulty: 'medium',
        question: "What is the role of an 'index' in a database?",
        type: 'subjective',
        answer: "A database index is a data structure that improves the speed of data retrieval operations on a database table. It works like an index in a book: instead of searching through every row in the table (a full table scan), the database can use the index to quickly locate the data. While indexes speed up reads, they can slow down writes, as the index also needs to be updated.",
        explanation: 'Proper indexing is the most important factor in database query performance.'
    },
    {
        id: 304,
        testId: 3,
        difficulty: 'medium',
        question: "What is 'authentication' vs 'authorization'?",
        type: 'subjective',
        answer: "Authentication is the process of verifying who a user is (e.g., by checking their username and password). Authorization is the process of determining what an authenticated user is allowed to do (e.g., checking if a user has permission to delete a record). Authentication comes before authorization.",
        explanation: 'A helpful analogy: authentication is showing your ID to enter a building; authorization is checking which rooms your keycard can open.'
    },
    {
        id: 305,
        testId: 3,
        difficulty: 'medium',
        question: "What is asynchronous programming, and why is it important for Node.js?",
        type: 'subjective',
        answer: "Asynchronous programming is a model where operations can run in the background without blocking the main application thread. Node.js is built on a single-threaded, event-driven architecture. Asynchronous I/O operations (like reading a file or making a database query) allow the single thread to handle other requests while waiting for the operation to complete, making it highly efficient and scalable for I/O-bound applications.",
        explanation: 'This non-blocking nature is the key to Node.js\'s performance.'
    },
     // Test 4: 20 Questions (12 MCQ, 8 Subjective) - Medium
    {
        id: 306,
        testId: 4,
        difficulty: 'medium',
        question: "Which HTTP status code indicates that a resource was not found?",
        type: 'mcq',
        options: ['200 OK', '404 Not Found', '500 Internal Server Error', '301 Moved Permanently'],
        answer: '404 Not Found',
        explanation: 'A 404 is the standard code for when a server cannot find the requested resource.'
    },
    {
        id: 307,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of 'caching'?",
        type: 'mcq',
        options: ['To secure data', 'To store a copy of data in a temporary, fast-access location to speed up subsequent requests', 'To log server activity', 'To validate user input'],
        answer: 'To store a copy of data in a temporary, fast-access location to speed up subsequent requests',
        explanation: 'Caching is a critical technique for improving application performance and reducing server load.'
    },
    {
        id: 308,
        testId: 4,
        difficulty: 'medium',
        question: "In the context of APIs, what does 'stateless' mean?",
        type: 'mcq',
        options: ['The server has no memory', 'Each request from a client to the server must contain all the information needed to understand and process the request', 'The server cannot store any data', 'The API does not have a state management library'],
        answer: 'Each request from a client to the server must contain all the information needed to understand and process the request',
        explanation: 'Statelessness is a key principle of REST architecture, which simplifies server design and improves scalability.'
    },
    {
        id: 309,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'Dockerfile' used for?",
        type: 'mcq',
        options: ['To configure a database', 'To write application code', 'A text document that contains all the commands a user could call on the command line to assemble a Docker container image', 'To manage user permissions'],
        answer: 'A text document that contains all the commands a user could call on the command line to assemble a Docker container image',
        explanation: 'A Dockerfile is the recipe for building a portable, self-contained application environment.'
    },
    {
        id: 310,
        testId: 4,
        difficulty: 'medium',
        question: "Which of the following is a key-value store database?",
        type: 'mcq',
        options: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
        answer: 'Redis',
        explanation: 'Redis is an in-memory data structure store, used as a database, cache, and message broker. It is a prime example of a key-value store.'
    },
    {
        id: 311,
        testId: 4,
        difficulty: 'medium',
        question: "What is the `event loop` in Node.js?",
        type: 'mcq',
        options: ['It listens for frontend UI events', 'A mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded', 'A security feature', 'A tool for managing event logs'],
        answer: 'A mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded',
        explanation: 'The event loop is the core of Node.js\'s asynchronous, non-blocking architecture.'
    },
    {
        id: 312,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of the `async` and `await` keywords in JavaScript?",
        type: 'mcq',
        options: ['To make code run on a separate thread', 'To provide a more synchronous-looking syntax for handling asynchronous Promise-based code', 'To declare asynchronous variables', 'To create a new thread'],
        answer: 'To provide a more synchronous-looking syntax for handling asynchronous Promise-based code',
        explanation: 'They are syntactic sugar over Promises, making asynchronous code easier to write and read.'
    },
    {
        id: 313,
        testId: 4,
        difficulty: 'medium',
        question: "What does 'database normalization' mean?",
        type: 'mcq',
        options: ['Making the database normal', 'The process of organizing columns and tables in a relational database to minimize data redundancy', 'Deleting old data from a database', 'A backup procedure for a database'],
        answer: 'The process of organizing columns and tables in a relational database to minimize data redundancy',
        explanation: 'Normalization involves dividing larger tables into smaller, well-structured tables and defining relationships between them.'
    },
    {
        id: 314,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of a 'linter' like ESLint?",
        type: 'mcq',
        options: ['To compile code', 'To run tests', 'To statically analyze code to find problems, bugs, and stylistic errors', 'To deploy an application'],
        answer: 'To statically analyze code to find problems, bugs, and stylistic errors',
        explanation: 'Linters help enforce code quality and consistency across a project.'
    },
    {
        id: 315,
        testId: 4,
        difficulty: 'medium',
        question: "Which of the following is NOT a principle of REST?",
        type: 'mcq',
        options: ['Stateless', 'Client-Server architecture', 'Stateful', 'Cacheable'],
        answer: 'Stateful',
        explanation: 'Statelessness is a core constraint of REST. The server should not store any client context between requests.'
    },
    {
        id: 316,
        testId: 4,
        difficulty: 'medium',
        question: "What is CORS (Cross-Origin Resource Sharing)?",
        type: 'mcq',
        options: ['A type of encryption', 'A security mechanism that uses HTTP headers to allow a server to indicate any origins other than its own from which a browser should permit loading resources', 'A database technology', 'A JavaScript framework'],
        answer: 'A security mechanism that uses HTTP headers to allow a server to indicate any origins other than its own from which a browser should permit loading resources',
        explanation: 'CORS is necessary to allow frontend applications on one domain to make API requests to a backend on another domain.'
    },
    {
        id: 317,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'Promise' in JavaScript?",
        type: 'mcq',
        options: ['A guarantee that a function will execute', 'An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value', 'A type of variable', 'A security feature'],
        answer: 'An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value',
        explanation: 'Promises are a fundamental part of modern asynchronous JavaScript.'
    },
    {
        id: 318,
        testId: 4,
        difficulty: 'medium',
        question: "What is the 'N+1' query problem and how can you solve it?",
        type: 'subjective',
        answer: "The N+1 query problem is a performance issue where an application makes one initial query to retrieve a list of items, and then makes 'N' additional queries to retrieve related data for each of those items. It can be solved by 'eager loading,' where the related data is fetched in a single, more complex query (e.g., using a SQL JOIN) along with the initial items.",
        explanation: 'This is a common performance bottleneck in applications that use an ORM.'
    },
    {
        id: 319,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of a reverse proxy?",
        type: 'subjective',
        answer: "A reverse proxy is a server that sits in front of one or more web servers, intercepting requests from clients. It is used for several purposes, including load balancing traffic across multiple backend servers, providing SSL termination (offloading encryption), caching static content, and enhancing security by hiding the identity of the backend servers.",
        explanation: 'NGINX and Apache are common examples of software used as reverse proxies.'
    },
    {
        id: 320,
        testId: 4,
        difficulty: 'medium',
        question: "What is dependency injection?",
        type: 'subjective',
        answer: "Dependency Injection (DI) is a design pattern in which a component's dependencies (the other objects it needs to work) are provided to it from an external source rather than it creating them itself. This 'inverts' the control of dependency management, leading to more loosely coupled, modular, and easily testable code.",
        explanation: 'Frameworks like NestJS and Spring make heavy use of DI.'
    },
    {
        id: 321,
        testId: 4,
        difficulty: 'medium',
        question: "Explain what a 'cookie' is and how it is used for session management.",
        type: 'subjective',
        answer: "A cookie is a small piece of data that a server sends to a user's web browser. The browser may store it and send it back with subsequent requests to the same server. For session management, after a user logs in, the server creates a unique session ID, sends it to the client as a cookie, and the client includes this cookie in future requests to identify itself as authenticated.",
        explanation: 'Cookies are a fundamental mechanism for maintaining state in the stateless HTTP protocol.'
    },
    {
        id: 322,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'container' (like Docker) and what problem does it solve?",
        type: 'subjective',
        answer: "A container is a lightweight, standalone, executable package of software that includes everything needed to run it: code, runtime, system tools, libraries, and settings. It solves the 'it works on my machine' problem by creating a consistent and reproducible environment for an application, ensuring it runs the same way regardless of where it is deployed.",
        explanation: 'Containers virtualize the operating system, making them more efficient than traditional virtual machines.'
    },
    {
        id: 323,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between a `let` and `const` in JavaScript?",
        type: 'subjective',
        answer: "Both `let` and `const` are block-scoped variable declarations. The main difference is that a variable declared with `let` can be reassigned a new value, while a variable declared with `const` cannot be reassigned after its initial declaration. Note that for objects and arrays declared with `const`, their properties or elements can still be modified.",
        explanation: '`const` should be preferred for variables that will not be reassigned, as it makes the code easier to reason about.'
    },
    {
        id: 324,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of a `.env` file?",
        type: 'subjective',
        answer: "A `.env` file is used to store environment-specific variables, such as database credentials, API keys, and port numbers. This practice allows developers to keep sensitive configuration data separate from the source code, which is important for security and for maintaining different configurations for development, staging, and production environments.",
        explanation: 'The `.env` file should never be committed to version control.'
    },
    {
        id: 325,
        testId: 4,
        difficulty: 'medium',
        question: "What is a unit test in backend development?",
        type: 'subjective',
        answer: "A unit test is a type of automated test that isolates and verifies the functionality of a small, specific 'unit' of code, such as a single function or method, in isolation from the rest of the application. Dependencies like databases or external APIs are typically 'mocked' or 'stubbed' out. The goal is to ensure that each individual unit of code works correctly on its own.",
        explanation: 'Unit tests form the foundation of a solid testing strategy.'
    },
     // Test 5: 25 Questions (15 MCQ, 10 Subjective) - Medium
    {
        id: 326,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'schema' in the context of a database?",
        type: 'mcq',
        options: ['A type of query', 'The blueprint or structure of the database, defining its tables, columns, data types, and relationships', 'A backup of the database', 'A user permission level'],
        answer: 'The blueprint or structure of the database, defining its tables, columns, data types, and relationships',
        explanation: 'The schema enforces the structure and integrity of the data.'
    },
    {
        id: 327,
        testId: 5,
        difficulty: 'medium',
        question: "What does it mean for an API to be 'idempotent'?",
        type: 'mcq',
        options: ['The API is secure', 'Making the same request multiple times has the same effect as making it once', 'The API is very fast', 'The API can only be called once'],
        answer: 'Making the same request multiple times has the same effect as making it once',
        explanation: 'HTTP methods like GET, PUT, and DELETE are idempotent. This is important for building reliable systems that may retry requests.'
    },
    {
        id: 328,
        testId: 5,
        difficulty: 'medium',
        question: "Which of the following is a primary benefit of using a message queue (e.g., RabbitMQ, Kafka)?",
        type: 'mcq',
        options: ['To make database queries faster', 'To decouple services and handle asynchronous communication between them', 'To store user session data', 'To serve static files'],
        answer: 'To decouple services and handle asynchronous communication between them',
        explanation: 'Message queues allow different parts of a system to communicate without being directly connected, improving scalability and resilience.'
    },
    {
        id: 329,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of the `finally` block in a `try...catch...finally` statement?",
        type: 'mcq',
        options: ['It executes only if an error occurs', 'It executes only if no error occurs', 'It always executes after the `try` and `catch` blocks, regardless of whether an error occurred', 'It is an alias for the `catch` block'],
        answer: 'It always executes after the `try` and `catch` blocks, regardless of whether an error occurred',
        explanation: 'The `finally` block is useful for cleanup code, like closing a file or database connection.'
    },
    {
        id: 330,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'callback function' in asynchronous programming?",
        type: 'mcq',
        options: ['A function that calls another function', 'A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action', 'A function that always returns a value', 'A function that blocks the main thread'],
        answer: 'A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action',
        explanation: 'Callbacks are a fundamental pattern for handling asynchronous operations in JavaScript, though Promises and async/await are now more common.'
    },
    {
        id: 331,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'WebHook'?",
        type: 'mcq',
        options: ['A frontend JavaScript library', 'An automated message sent from apps when something happens. It has a message (payload) which is sent to a unique URL.', 'A type of fishing lure', 'A security vulnerability'],
        answer: 'An automated message sent from apps when something happens. It has a message (payload) which is sent to a unique URL.',
        explanation: 'WebHooks are a way for one system to notify another system about an event, instead of the other system having to continuously poll for changes.'
    },
    {
        id: 332,
        testId: 5,
        difficulty: 'medium',
        question: "Which of the following best describes 'microservices architecture'?",
        type: 'mcq',
        options: ['Building a single, large application', 'An architectural style that structures an application as a collection of small, independent, and loosely coupled services', 'A frontend design pattern', 'A database schema design'],
        answer: 'An architectural style that structures an application as a collection of small, independent, and loosely coupled services',
        explanation: 'Microservices allow for independent deployment, scaling, and technology choices for different parts of an application.'
    },
    {
        id: 333,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'ACID' in the context of databases?",
        type: 'mcq',
        options: ['A type of chemical', 'A set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee database transactions are processed reliably', 'A query language', 'A security standard'],
        answer: 'A set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee database transactions are processed reliably',
        explanation: 'ACID compliance is a key feature of most relational databases.'
    },
    {
        id: 334,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of `git clone`?",
        type: 'mcq',
        options: ['To create a new branch', 'To create a local copy of a remote repository', 'To merge two branches', 'To delete a repository'],
        answer: 'To create a local copy of a remote repository',
        explanation: '`git clone` is the standard way to start working on a project that already exists on a remote server like GitHub.'
    },
    {
        id: 335,
        testId: 5,
        difficulty: 'medium',
        question: "In SQL, what is the difference between `DELETE` and `TRUNCATE`?",
        type: 'mcq',
        options: ['There is no difference', '`DELETE` removes all rows from a table, while `TRUNCATE` removes the table itself', '`DELETE` is a row-level operation that can be rolled back, while `TRUNCATE` is a faster, non-logged operation that removes all rows', '`TRUNCATE` can be used with a `WHERE` clause, but `DELETE` cannot'],
        answer: '`DELETE` is a row-level operation that can be rolled back, while `TRUNCATE` is a faster, non-logged operation that removes all rows',
        explanation: '`TRUNCATE` is much faster for deleting all rows from a large table as it doesn\'t log each row deletion.'
    },
    {
        id: 336,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `Content-Type` header in an HTTP response used for?",
        type: 'mcq',
        options: ['To specify the length of the response body', 'To indicate the media type of the resource (e.g., `application/json` or `text/html`)', 'To control caching', 'To set a cookie'],
        answer: 'To indicate the media type of the resource (e.g., `application/json` or `text/html`)',
        explanation: 'This header tells the client how to parse and interpret the response body.'
    },
    {
        id: 337,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'scalability'?",
        type: 'mcq',
        options: ['The security of a system', 'The ability of a system to handle a growing amount of work by adding resources', 'The speed of a system', 'The user-friendliness of a system'],
        answer: 'The ability of a system to handle a growing amount of work by adding resources',
        explanation: 'Backend systems are often designed with scalability in mind, either vertically (adding more power to a single server) or horizontally (adding more servers).'
    },
    {
        id: 338,
        testId: 5,
        difficulty: 'medium',
        question: "What is an 'endpoint' in an API?",
        type: 'mcq',
        options: ['The start of the API', 'A specific URL where an API can be accessed to perform an operation', 'The database connection', 'A security key'],
        answer: 'A specific URL where an API can be accessed to perform an operation',
        explanation: 'For example, `/api/users/123` is an endpoint for retrieving a specific user.'
    },
    {
        id: 339,
        testId: 5,
        difficulty: 'medium',
        question: "Which of the following is a common use case for WebSockets?",
        type: 'mcq',
        options: ['Serving a static website', 'Building a real-time chat application', 'Storing user preferences', 'Processing batch jobs'],
        answer: 'Building a real-time chat application',
        explanation: 'WebSockets provide a persistent, bidirectional communication channel, which is ideal for real-time applications.'
    },
    {
        id: 340,
        testId: 5,
        difficulty: 'medium',
        question: "What does the HTTP status code `500 Internal Server Error` mean?",
        type: 'mcq',
        options: ['The request was successful', 'The client made an invalid request', 'The server encountered an unexpected condition that prevented it from fulfilling the request', 'The requested resource was not found'],
        answer: 'The server encountered an unexpected condition that prevented it from fulfilling the request',
        explanation: 'This is a generic error message indicating a problem on the server-side.'
    },
    {
        id: 341,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'load balancer' and why is it used?",
        type: 'subjective',
        answer: "A load balancer is a device or software that distributes network or application traffic across multiple servers. It is used to improve the availability and scalability of an application by ensuring that no single server is overwhelmed with too many requests. If one server fails, the load balancer can redirect traffic to the remaining healthy servers.",
        explanation: 'Load balancing is a fundamental technique for building highly available systems.'
    },
    {
        id: 342,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between SQL and NoSQL databases?",
        type: 'subjective',
        answer: "SQL databases are relational, storing data in structured tables with predefined schemas and using SQL for queries. They are good for complex queries and ensuring data integrity. NoSQL databases are non-relational and can have dynamic schemas, storing data as documents, key-value pairs, or graphs. They generally scale horizontally more easily and are often used for large-scale, unstructured data.",
        explanation: 'The choice depends on the specific needs of the application regarding structure, scalability, and consistency.'
    },
    {
        id: 343,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of 'API rate limiting'?",
        type: 'subjective',
        answer: "API rate limiting is a technique used to control the number of requests a client can make to an API within a certain time frame. Its purposes are to prevent abuse or misuse (both intentional and accidental), ensure fair usage for all clients, protect the backend services from being overwhelmed, and manage operational costs.",
        explanation: 'It is a crucial feature for any public-facing API.'
    },
    {
        id: 344,
        testId: 5,
        difficulty: 'medium',
        question: "Explain what a 'Connection Pool' is for a database.",
        type: 'subjective',
        answer: "A connection pool is a cache of database connections maintained by the server so that the connections can be reused for future requests. Opening and closing a database connection is an expensive operation. A connection pool improves performance by avoiding this overhead, reusing existing connections instead of creating new ones for each request.",
        explanation: 'Connection pooling is a standard practice for improving the performance of database-driven applications.'
    },
    {
        id: 345,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between a `let` and a `const` in JavaScript?",
        type: 'subjective',
        answer: "Both `let` and `const` are block-scoped variable declarations. The main difference is that a variable declared with `let` can be reassigned a new value, while a variable declared with `const` cannot be reassigned after its initial declaration. Note that for objects and arrays declared with `const`, their properties or elements can still be modified.",
        explanation: '`const` should be preferred for variables that will not be reassigned, as it makes the code easier to reason about.'
    },
    {
        id: 346,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of a `.gitignore` file?",
        type: 'subjective',
        answer: "A `.gitignore` file specifies intentionally untracked files that Git should ignore. This is used to prevent files that are generated by the build process (like `node_modules` or compiled code) or files that contain sensitive information (like `.env` files) from being accidentally committed to the version control repository.",
        explanation: 'It helps keep the repository clean and secure.'
    },
    {
        id: 347,
        testId: 5,
        difficulty: 'medium',
        question: "What are some common security vulnerabilities in a web application backend?",
        type: 'subjective',
        answer: "Common vulnerabilities include SQL Injection (where an attacker can manipulate database queries), Cross-Site Scripting (XSS, injecting malicious scripts), Cross-Site Request Forgery (CSRF, forcing a user to execute unwanted actions), insecure authentication/session management, and insecure direct object references (accessing unauthorized data by manipulating IDs).",
        explanation: 'A strong understanding of common vulnerabilities is essential for any backend developer.'
    },
    {
        id: 348,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'monolithic' architecture?",
        type: 'subjective',
        answer: "A monolithic architecture is a traditional model where an application is built as a single, unified unit. The entire application—including the user interface, business logic, and data access layer—is deployed as one large codebase. While simpler to develop and deploy initially, monoliths can become difficult to scale, maintain, and update as they grow in complexity.",
        explanation: 'The microservices architecture is an alternative to the monolithic approach.'
    },
    {
        id: 349,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of `bcrypt` when hashing passwords?",
        type: 'subjective',
        answer: "`bcrypt` is a password hashing function designed to be slow and computationally intensive. This slowness is a feature, as it makes brute-force attacks (trying many passwords) very time-consuming and expensive for an attacker. It also includes a salt automatically to protect against rainbow table attacks.",
        explanation: 'Modern, slow hashing algorithms like bcrypt or Argon2 are the standard for password security.'
    },
    {
        id: 350,
        testId: 5,
        difficulty: 'medium',
        question: "Explain what 'sharding' is in a database context.",
        type: 'subjective',
        answer: "Sharding is a type of database partitioning, also known as horizontal partitioning. It involves splitting a large database into smaller, faster, more manageable parts called shards. Each shard is a separate database, and the data is distributed across these shards. This is a common technique for scaling out databases to handle massive amounts of data and traffic.",
        explanation: 'Sharding allows a database to scale horizontally by adding more servers.'
    },
      // Test 6: 30 Questions (18 MCQ, 12 Subjective) - Hard
    {
        id: 351,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'race condition' in concurrent programming?",
        type: 'mcq',
        options: ['A performance bug in racing games', 'An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events', 'A network latency issue', 'A type of CPU error'],
        answer: 'An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events',
        explanation: 'Race conditions are a common and difficult problem in concurrent systems, often leading to corrupted data. They are typically mitigated using locks or atomic operations.'
    },
    {
        id: 352,
        testId: 6,
        difficulty: 'hard',
        question: "What is the primary purpose of a 'service mesh' like Istio or Linkerd?",
        type: 'mcq',
        options: ['To manage database migrations', 'To provide a dedicated infrastructure layer for managing service-to-service communication, handling concerns like traffic management, security, and observability', 'To build user interfaces', 'To automate CI/CD pipelines'],
        answer: 'To provide a dedicated infrastructure layer for managing service-to-service communication, handling concerns like traffic management, security, and observability',
        explanation: 'A service mesh abstracts the complexity of network communication away from the application code by using sidecar proxies.'
    },
    {
        id: 353,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'gRPC'?",
        type: 'mcq',
        options: ['A GraphQL client library', 'A REST API framework', 'A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2', 'A database protocol'],
        answer: 'A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2',
        explanation: 'gRPC is highly efficient and well-suited for low-latency communication between microservices.'
    },
    {
        id: 354,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'eventual consistency'?",
        type: 'mcq',
        options: ['A model where the system is always consistent', 'A consistency model where, if no new updates are made, all replicas of a piece of data will eventually converge to the same value', 'A model where data becomes inconsistent over time', 'A database transaction property'],
        answer: 'A consistency model where, if no new updates are made, all replicas of a piece of data will eventually converge to the same value',
        explanation: 'This model is often chosen in distributed systems that prioritize high availability and partition tolerance over strong, immediate consistency.'
    },
    {
        id: 355,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between a `process` and a `thread`?",
        type: 'mcq',
        options: ['They are the same thing', 'A process has its own isolated memory space, while multiple threads can exist within a single process and share its memory space', 'A thread is a heavyweight operation, while a process is lightweight', 'Processes are for frontend, threads are for backend'],
        answer: 'A process has its own isolated memory space, while multiple threads can exist within a single process and share its memory space',
        explanation: 'This is a fundamental concept in operating systems and concurrent programming.'
    },
    {
        id: 356,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'idempotency' in API design?",
        type: 'mcq',
        options: ['The API is secure', 'The property of an operation where making the same request multiple times has the same effect as making it once', 'The API is very fast', 'The API can only be called once'],
        answer: 'The property of an operation where making the same request multiple times has the same effect as making it once',
        explanation: 'Idempotency is crucial for building reliable systems where requests might be retried due to network failures.'
    },
    {
        id: 357,
        testId: 6,
        difficulty: 'hard',
        question: "What problem does a 'circuit breaker' pattern solve?",
        type: 'mcq',
        options: ['It secures the application from electrical surges', 'It prevents an application from repeatedly trying to execute an operation that is likely to fail, allowing it to fail fast and prevent system-wide cascading failures', 'It helps with debugging', 'It encrypts network traffic'],
        answer: 'It prevents an application from repeatedly trying to execute an operation that is likely to fail, allowing it to fail fast and prevent system-wide cascading failures',
        explanation: 'The circuit breaker trips after a certain number of failures and will only allow requests through again after a timeout.'
    },
    {
        id: 358,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'distributed hash table' (DHT)?",
        type: 'mcq',
        options: ['A centralized database using hashing', 'A data structure used only in C++', 'A decentralized system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes', 'A hashing algorithm for passwords'],
        answer: 'A decentralized system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes',
        explanation: 'DHTs are a core component of many peer-to-peer systems, like BitTorrent.'
    },
    {
        id: 359,
        testId: 6,
        difficulty: 'hard',
        question: "What is the main benefit of HTTP/2 over HTTP/1.1?",
        type: 'mcq',
        options: ['It is more secure by default', 'It uses a different syntax for requests', 'Multiplexing, which allows multiple requests and responses to be sent in parallel over a single TCP connection', 'It only works with JSON'],
        answer: 'Multiplexing, which allows multiple requests and responses to be sent in parallel over a single TCP connection',
        explanation: 'This eliminates the head-of-line blocking problem and significantly improves performance.'
    },
    {
        id: 360,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of 'database migration' scripts?",
        type: 'mcq',
        options: ['To move a database to a different server', 'To manage and version control the evolution of the database schema over time', 'To back up the database', 'To optimize query performance'],
        answer: 'To manage and version control the evolution of the database schema over time',
        explanation: 'Migration scripts allow for automated, repeatable, and reversible changes to the database structure.'
    },
    {
        id: 361,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'mcq',
        options: ['A security pattern', 'An architectural pattern that separates the models for updating data (Commands) from the models for reading data (Queries)', 'A database technology', 'A testing methodology'],
        answer: 'An architectural pattern that separates the models for updating data (Commands) from the models for reading data (Queries)',
        explanation: 'CQRS allows for independent optimization of the read and write sides of an application.'
    },
    {
        id: 362,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'OAuth 2.0' primarily used for?",
        type: 'mcq',
        options: ['Authentication (verifying who a user is)', 'Authorization (granting a third-party application limited access to a user\'s resources)', 'Encryption', 'Session management'],
        answer: 'Authorization (granting a third-party application limited access to a user\'s resources)',
        explanation: 'OAuth 2.0 is about delegating access, not about authenticating the user directly.'
    },
    {
        id: 363,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'mutex'?",
        type: 'mcq',
        options: ['A type of database', 'A synchronization primitive that provides \'mutual exclusion,\' ensuring that only one thread can access a shared resource at a time', 'A network hardware device', 'An error in a program'],
        answer: 'A synchronization primitive that provides \'mutual exclusion,\' ensuring that only one thread can access a shared resource at a time',
        explanation: 'Mutexes are a fundamental tool for preventing race conditions in multithreaded programming.'
    },
    {
        id: 364,
        testId: 6,
        difficulty: 'hard',
        question: "In the context of 'SOLID' principles, what does the 'D' stand for?",
        type: 'mcq',
        options: ['Data-oriented design', 'Dependency Inversion Principle', 'Don\'t repeat yourself', 'Dynamic typing'],
        answer: 'Dependency Inversion Principle',
        explanation: 'This principle states that high-level modules should not depend on low-level modules; both should depend on abstractions.'
    },
    {
        id: 365,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'Big O notation' used for?",
        type: 'mcq',
        options: ['To measure the exact speed of an algorithm', 'To describe the performance or complexity of an algorithm in terms of how its runtime or space requirements grow as the input size grows', 'To write mathematical formulas in code', 'To document code'],
        answer: 'To describe the performance or complexity of an algorithm in terms of how its runtime or space requirements grow as the input size grows',
        explanation: 'It provides a high-level understanding of an algorithm\'s efficiency, such as O(n) for linear time or O(log n) for logarithmic time.'
    },
    {
        id: 366,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'Web Worker' in JavaScript?",
        type: 'mcq',
        options: ['A UI component for displaying user profiles', 'A simple way for web content to run scripts in background threads, allowing for long-running, CPU-intensive tasks without blocking the main UI thread', 'A security feature', 'A CSS animation property'],
        answer: 'A simple way for web content to run scripts in background threads, allowing for long-running, CPU-intensive tasks without blocking the main UI thread',
        explanation: 'Web Workers are essential for maintaining a responsive user interface during heavy computations.'
    },
    {
        id: 367,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'canary release'?",
        type: 'mcq',
        options: ['Deploying to all users at once', 'Deploying a new version to a small subset of users to test its performance and stability before a full rollout', 'A deployment that happens only at night', 'A deployment that is manually verified by a QA team'],
        answer: 'Deploying a new version to a small subset of users to test its performance and stability before a full rollout',
        explanation: 'This strategy minimizes the risk and impact of deploying a faulty new version.'
    },
    {
        id: 368,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'Infrastructure as Code' (IaC)?",
        type: 'mcq',
        options: ['Writing infrastructure code in JavaScript', 'A method of managing and provisioning infrastructure through machine-readable definition files, rather than manual configuration', 'A physical server with code on it', 'A networking protocol'],
        answer: 'A method of managing and provisioning infrastructure through machine-readable definition files, rather than manual configuration',
        explanation: 'IaC allows infrastructure to be version-controlled, tested, and automated. Terraform and CloudFormation are popular IaC tools.'
    },
    {
        id: 369,
        testId: 6,
        difficulty: 'hard',
        question: "What is the CAP theorem in distributed systems?",
        type: 'subjective',
        answer: "The CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency (every read receives the most recent write or an error), Availability (every request receives a non-error response, without guarantee that it contains the most recent write), and Partition Tolerance (the system continues to operate despite network partitions). Since network partitions are a given, the real trade-off is between consistency and availability.",
        explanation: "This is a fundamental principle in the design of any distributed system."
    },
    {
        id: 370,
        testId: 6,
        difficulty: 'hard',
        question: "Explain the difference between TCP and UDP.",
        type: 'subjective',
        answer: "TCP (Transmission Control Protocol) is a connection-oriented protocol that guarantees reliable, ordered delivery of data. It establishes a connection via a three-way handshake and handles error checking and re-transmission of lost packets. UDP (User Datagram Protocol) is a connectionless protocol that is faster but provides no guarantees about delivery, order, or error correction. TCP is used for applications like web browsing and email where reliability is critical. UDP is used for applications like live video streaming or online gaming where speed is more important than perfect reliability.",
        explanation: 'TCP is like a registered letter; UDP is like a postcard.'
    },
    {
        id: 371,
        testId: 6,
        difficulty: 'hard',
        question: "How does HTTPS work? Explain the TLS handshake.",
        type: 'subjective',
        answer: "HTTPS encrypts HTTP traffic using TLS/SSL. The TLS handshake process involves: 1) The client sends a 'ClientHello' message with its supported cipher suites. 2) The server responds with a 'ServerHello', its SSL certificate, and the chosen cipher suite. 3) The client verifies the server's certificate with a trusted Certificate Authority. 4) The client generates a session key, encrypts it with the server's public key (from the certificate), and sends it to the server. 5) The server decrypts the session key with its private key. All subsequent communication is then encrypted with this shared session key.",
        explanation: "This process establishes a secure, encrypted channel, ensuring confidentiality and integrity."
    },
    {
        id: 372,
        testId: 6,
        difficulty: 'hard',
        question: "What is the 'Saga' pattern and when would you use it?",
        type: 'subjective',
        answer: "The Saga pattern is a way to manage data consistency across multiple microservices without using traditional distributed transactions. A saga is a sequence of local transactions where each transaction updates a single service and publishes an event to trigger the next one. If a local transaction fails, the saga executes a series of compensating transactions that undo the changes made by the preceding transactions. It is used in distributed systems where you need to maintain consistency across services but want to avoid the tight coupling and performance issues of two-phase commits.",
        explanation: 'It\'s an event-driven approach to achieving atomicity in a microservices architecture.'
    },
    {
        id: 373,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'load balancer' and what are two common load balancing algorithms?",
        type: 'subjective',
        answer: "A load balancer distributes incoming network traffic across multiple backend servers to ensure no single server is overwhelmed. Two common algorithms are: 1) **Round Robin**, which simply cycles through the list of servers sequentially. 2) **Least Connections**, which directs traffic to the server with the fewest active connections. This is often more effective than Round Robin if requests have varying complexity.",
        explanation: 'Load balancers are essential for achieving high availability, reliability, and scalability.'
    },
    {
        id: 374,
        testId: 6,
        difficulty: 'hard',
        question: "Explain optimistic vs. pessimistic locking.",
        type: 'subjective',
        answer: "Pessimistic locking assumes conflicts are likely and prevents them by acquiring a lock on a resource before modification, blocking other transactions. It's like saying, 'I'm working on this, nobody else touch it.' Optimistic locking assumes conflicts are rare. It allows transactions to proceed without locks but checks for conflicts (e.g., using a version number) before committing. If a conflict is detected, the transaction is rolled back. Optimistic locking generally offers better concurrency.",
        explanation: 'Pessimistic locking is "ask for permission," while optimistic locking is "ask for forgiveness."'
    },
    {
        id: 375,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'backpressure' in a streaming data system?",
        type: 'subjective',
        answer: "Backpressure is a flow control mechanism where a data consumer can signal to a data producer that it is becoming overwhelmed and needs the producer to slow down or stop sending data temporarily. This prevents the consumer's buffers from overflowing and the system from becoming unstable. It's a crucial feature for building resilient, asynchronous data pipelines where the rate of production and consumption can vary.",
        explanation: 'It\'s like a downstream worker telling an upstream worker to slow down the assembly line.'
    },
    {
        id: 376,
        testId: 6,
        difficulty: 'hard',
        question: "How do you prevent SQL injection attacks?",
        type: 'subjective',
        answer: "The most effective way to prevent SQL injection is to use prepared statements (also known as parameterized queries). With prepared statements, the SQL query template is sent to the database separately from the user-supplied parameters. The database can distinguish between the query logic and the data, so it does not interpret the user input as executable SQL. Using an ORM that handles this automatically is also a common and effective strategy. Input validation and sanitization are good secondary defenses.",
        explanation: 'Never concatenate user input directly into SQL strings.'
    },
    {
        id: 377,
        testId: 6,
        difficulty: 'hard',
        question: "What are database 'transactions' and why are they important?",
        type: 'subjective',
        answer: "A database transaction is a sequence of one or more database operations that are executed as a single, atomic unit of work. They are important because they guarantee that either all of the operations in the sequence succeed, or none of them do. If any operation fails, the entire transaction is rolled back to its initial state. This ensures the database remains in a consistent state and upholds data integrity, which is critical for operations like financial transfers.",
        explanation: 'Transactions are defined by the ACID properties: Atomicity, Consistency, Isolation, Durability.'
    },
    {
        id: 378,
        testId: 6,
        difficulty: 'hard',
        question: "What is the role of a 'message broker' like RabbitMQ or Kafka?",
        type: 'subjective',
        answer: "A message broker is an intermediary software that facilitates asynchronous communication between different services. Senders (producers) publish messages to the broker, which then delivers them to interested receivers (consumers). This decouples the services, meaning the producer and consumer don't need to know about each other or be online at the same time. This pattern improves system resilience, scalability, and allows for more flexible architectures.",
        explanation: 'They are the backbone of many event-driven and microservices architectures.'
    },
    {
        id: 379,
        testId: 6,
        difficulty: 'hard',
        question: "Explain the 'publish-subscribe' (pub/sub) messaging pattern.",
        type: 'subjective',
        answer: "Pub/sub is a messaging pattern where senders (publishers) do not send messages directly to specific receivers (subscribers). Instead, they publish messages to topics or channels without knowledge of what, if any, subscribers there may be. Subscribers express interest in one or more topics and receive all messages published to those topics. This decouples publishers and subscribers, allowing them to evolve independently and improving scalability and flexibility.",
        explanation: 'This is different from a point-to-point queue, where a message is typically consumed by only one receiver.'
    },
    {
        id: 380,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'cache invalidation' strategy, and why is it considered a hard problem?",
        type: 'subjective',
        answer: "Cache invalidation is the process of declaring cached data as invalid and removing or replacing it. Common strategies include write-through (update cache and DB simultaneously), write-back (update cache and mark as 'dirty', write to DB later), and time-to-live (TTL, where data expires after a set time). It's considered one of the hard problems in computer science because it's difficult to ensure that the cache and the source of truth (the database) are perfectly in sync without sacrificing performance, especially in a distributed system.",
        explanation: '"There are only two hard things in Computer Science: cache invalidation and naming things." - Phil Karlton'
    },
    // Test 7: 35 Questions (21 MCQ, 14 Subjective) - Hard
    {
        id: 381,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'blue-green deployment' strategy?",
        type: 'mcq',
        options: ['Deploying to two data centers at once', 'A release strategy that reduces downtime by maintaining two identical production environments ("blue" and "green") and switching traffic between them', 'A deployment that uses blue and green themes', 'A testing strategy for UI components'],
        answer: 'A release strategy that reduces downtime by maintaining two identical production environments ("blue" and "green") and switching traffic between them',
        explanation: 'This allows for instant releases and simple rollbacks, but requires double the infrastructure.'
    },
    {
        id: 382,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of 'mTLS' (Mutual TLS)?",
        type: 'mcq',
        options: ['A more secure version of TLS', 'A process where both the client and server present certificates to authenticate each other', 'A TLS handshake where only the client authenticates the server', 'A tool for managing TLS certificates'],
        answer: 'A process where both the client and server present certificates to authenticate each other',
        explanation: 'mTLS is crucial for zero-trust networks and securing service-to-service communication.'
    },
    {
        id: 383,
        testId: 7,
        difficulty: 'hard',
        question: "What is the 'Strangler Fig' pattern used for in software architecture?",
        type: 'mcq',
        options: ['To debug memory leaks', 'To incrementally migrate a legacy monolithic application to a microservices architecture', 'To optimize database queries', 'To design a user interface'],
        answer: 'To incrementally migrate a legacy monolithic application to a microservices architecture',
        explanation: 'It involves gradually replacing pieces of the monolith with new services until the monolith is \'strangled\' and can be retired.'
    },
    {
        id: 384,
        testId: 7,
        difficulty: 'hard',
        question: "In Node.js, which of the following is true about the event loop?",
        type: 'mcq',
        options: ['It runs on multiple threads', 'It blocks for long-running I/O operations', 'It allows Node.js to perform non-blocking I/O operations, making it highly scalable', 'It is only used for handling HTTP requests'],
        answer: 'It allows Node.js to perform non-blocking I/O operations, making it highly scalable',
        explanation: 'The event loop is the core of Node.js\'s asynchronous, non-blocking architecture.'
    },
    {
        id: 385,
        testId: 7,
        difficulty: 'hard',
        question: "What is the 'n+1' query problem?",
        type: 'mcq',
        options: ['A security vulnerability', 'A performance issue where an application makes one initial query, and then \'n\' additional queries to retrieve related data for each item', 'A mathematical paradox', 'An error that occurs when `n` is equal to -1'],
        answer: 'A performance issue where an application makes one initial query, and then \'n\' additional queries to retrieve related data for each item',
        explanation: 'This is a common performance bottleneck that can be solved by "eager loading" the related data.'
    },
    {
        id: 386,
        testId: 7,
        difficulty: 'hard',
        question: "What does 'database sharding' refer to?",
        type: 'mcq',
        options: ['A way to encrypt data', 'A type of horizontal partitioning where data is spread across multiple databases or servers', 'A backup strategy', 'A query optimization technique'],
        answer: 'A type of horizontal partitioning where data is spread across multiple databases or servers',
        explanation: 'Sharding is a common technique for scaling out databases to handle massive amounts of data and traffic.'
    },
    {
        id: 387,
        testId: 7,
        difficulty: 'hard',
        question: "What is the difference between 'authentication' and 'authorization'?",
        type: 'mcq',
        options: ['They are the same thing', 'Authentication is verifying who a user is, while authorization is determining what they are allowed to do', 'Authorization happens before authentication', 'Authentication is for users, authorization is for services'],
        answer: 'Authentication is verifying who a user is, while authorization is determining what they are allowed to do',
        explanation: 'You authenticate to get into the building, but you are authorized to enter only certain rooms.'
    },
    {
        id: 388,
        testId: 7,
        difficulty: 'hard',
        question: "What is `Promise.race()`?",
        type: 'mcq',
        options: ['It returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects', 'It runs all promises in parallel and returns the fastest one', 'It is a syntax error', 'It returns a random promise from the iterable'],
        answer: "It returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects",
        explanation: "It's a race to the first settled promise."
    },
    {
        id: 389,
        testId: 7,
        difficulty: 'hard',
        question: "What is the `useLayoutEffect` hook in React and how does it differ from `useEffect`?",
        type: 'mcq',
        options: ["It runs before the component renders", "It fires synchronously after all DOM mutations, but before the browser has painted", "It's an alias for `useEffect`", "It only runs on the server"],
        answer: "It fires synchronously after all DOM mutations, but before the browser has painted",
        explanation: "This makes it suitable for reading layout from the DOM and synchronously re-rendering to avoid visual flickers. `useEffect` runs asynchronously after the paint."
    },
    {
        id: 390,
        testId: 7,
        difficulty: 'hard',
        question: "What is a `WeakMap` in JavaScript?",
        type: 'mcq',
        options: ["A Map that cannot be iterated", "A Map that only holds weak references to its keys, allowing them to be garbage collected", "A less performant version of Map", "An alias for an Object"],
        answer: "A Map that only holds weak references to its keys, allowing them to be garbage collected",
        explanation: "This prevents memory leaks when the only reference to an object is the WeakMap key."
    },
    {
        id: 391,
        testId: 7,
        difficulty: 'hard',
        question: "Which of the following is NOT a core concept of Redux?",
        type: 'mcq',
        options: ['Store', 'Action', 'Reducer', 'Component'],
        answer: 'Component',
        explanation: "While Redux is used with components (e.g., in React), the component itself is not a part of the core Redux architecture."
    },
    {
        id: 392,
        testId: 7,
        difficulty: 'hard',
        question: "Which CSS value is used to make a flex item grow and shrink as needed, ignoring its initial size?",
        type: 'mcq',
        options: ['`flex: 1`', '`flex: auto`', '`flex: initial`', '`flex: none`'],
        answer: '`flex: 1`',
        explanation: "`flex: 1` is shorthand for `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0%`."
    },
    {
        id: 393,
        testId: 7,
        difficulty: 'hard',
        question: "Which is a valid way to create a private class field in modern JavaScript?",
        type: 'mcq',
        options: ['`let myVar`', '`this._myVar`', '`const myVar`', '`#myVar`'],
        answer: '`#myVar`',
        explanation: "The `#` prefix makes a field private to the class, inaccessible from outside."
    },
    {
        id: 394,
        testId: 7,
        difficulty: 'hard',
        question: "In CSS Grid, what is the `fr` unit?",
        type: 'mcq',
        options: ['A fixed unit equal to 1 pixel', 'A unit representing a fraction of the free space in the grid container', 'A percentage of the viewport width', 'A unit relative to the font size'],
        answer: 'A unit representing a fraction of the free space in the grid container',
        explanation: "It allows for flexible and proportional grid layouts."
    },
    {
        id: 395,
        testId: 7,
        difficulty: 'hard',
        question: "What is a 'Generator' function in JavaScript (`function*`)?",
        type: 'mcq',
        options: ['A function that generates random numbers', 'A function that can be paused and resumed using the `yield` keyword', 'A function that automatically generates documentation', 'A function for generating HTML'],
        answer: 'A function that can be paused and resumed using the `yield` keyword',
        explanation: "They are useful for creating iterators and managing complex asynchronous flows."
    },
    {
        id: 396,
        testId: 7,
        difficulty: 'hard',
        question: "What does the `async` keyword do in a JavaScript function declaration?",
        type: 'mcq',
        options: ['It makes the function run on a separate thread', 'It ensures the function always returns a `Promise`', 'It blocks the execution of the code', 'It indicates the function is a security risk'],
        answer: 'It ensures the function always returns a `Promise`',
        explanation: "It also allows the `await` keyword to be used inside the function."
    },
    {
        id: 397,
        testId: 7,
        difficulty: 'hard',
        question: "Which CSS value is used to make a flex item grow and shrink as needed, ignoring its initial size?",
        type: 'mcq',
        options: ['`flex: 1`', '`flex: auto`', '`flex: initial`', '`flex: none`'],
        answer: '`flex: 1`',
        explanation: "`flex: 1` is shorthand for `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0%`."
    },
    {
        id: 398,
        testId: 7,
        difficulty: 'hard',
        question: "Which of these is a structural pseudo-class in CSS?",
        type: 'mcq',
        options: [':hover', ':active', ':nth-child(n)', ':focus'],
        answer: ":nth-child(n)",
        explanation: "Structural pseudo-classes select elements based on their position in the document tree, not their state."
    },
    {
        id: 399,
        testId: 7,
        difficulty: 'hard',
        question: "Which CSS value is used to make a flex item grow and shrink as needed, ignoring its initial size?",
        type: 'mcq',
        options: ['`flex: 1`', '`flex: auto`', '`flex: initial`', '`flex: none`'],
        answer: '`flex: 1`',
        explanation: "`flex: 1` is shorthand for `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0%`."
    },
    {
        id: 400,
        testId: 7,
        difficulty: 'hard',
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
        id: 401,
        testId: 7,
        difficulty: 'hard',
        question: "The purpose of a `webpack loader` is to?",
        type: 'mcq',
        options: ['to run tasks before or after the build', 'to transform files from a different language (like TypeScript or Sass) into JavaScript/CSS', 'to bundle multiple files into one', 'to optimize images'],
        answer: "To transform files from a different language (like TypeScript or Sass) into JavaScript/CSS",
        explanation: "Loaders allow webpack to process more than just JavaScript files."
    },
        {
        id: 402,
        testId: 7,
        difficulty: 'hard',
        question: "Explain the concept of 'hoisting' in JavaScript.",
        type: 'subjective',
        answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. `var` declarations are hoisted and initialized with `undefined`. `let` and `const` are hoisted but not initialized, which creates a 'Temporal Dead Zone' where they cannot be accessed before their declaration.",
        explanation: "This is why you can call a function declared with `function` before its definition, but not a function assigned to a `let` variable."
    },
    {
        id: 403,
        testId: 7,
        difficulty: 'hard',
        question: "What are WebSockets?",
        type: 'subjective',
        answer: "WebSockets provide a full-duplex communication channel over a single, long-lived TCP connection. Unlike traditional HTTP, which is request-response based, WebSockets allow for real-time, two-way communication between the client and server, making them ideal for applications like live chat, real-time gaming, and live data feeds.",
        explanation: "They solve the limitations of HTTP polling and long-polling."
    },
    {
        id: 404,
        testId: 7,
        difficulty: 'hard',
        question: "What is the purpose of the `Promise.all()` method?",
        type: 'subjective',
        answer: "`Promise.all()` takes an iterable of promises and returns a single Promise that resolves when all of the promises in the iterable have resolved. The resolved value is an array of the results. If any of the promises reject, the returned promise immediately rejects with the reason of the first promise that rejected.",
        explanation: "It's useful for aggregating the results of multiple asynchronous operations."
    },
     {
        id: 405,
        testId: 7,
        difficulty: 'hard',
        question: "How would you debounce a function in JavaScript?",
        type: 'subjective',
        answer: "You would create a wrapper function that uses `setTimeout`. Inside the wrapper, you first clear any existing timeout with `clearTimeout`, then set a new timeout to execute the original function after a specified delay. This ensures the function only runs once after a burst of calls has ended.",
        explanation: "It's commonly used for handling user input, like in a search bar."
    },
    {
        id: 406,
        testId: 7,
        difficulty: 'hard',
        question: "What are CSS Custom Properties (Variables) and what are their benefits?",
        type: 'subjective',
        answer: "CSS Custom Properties are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: #ff0000;`) and are accessed using the `var()` function. Benefits include DRY (Don't Repeat Yourself) code, easier theming, and the ability to be read and changed dynamically via JavaScript.",
        explanation: "They are a powerful feature for creating maintainable and dynamic stylesheets."
    },
    {
        id: 407,
        testId: 7,
        difficulty: 'hard',
        question: "Explain event delegation in JavaScript.",
        type: 'subjective',
        answer: 'Event delegation is a technique where you add a single event listener to a parent element to manage events for all of its children, including dynamically added ones. When an event bubbles up from a child, the parent listener can check the `event.target` property to identify which child triggered the event and respond accordingly. This improves performance by reducing the number of event listeners.',
        explanation: "It's a memory-efficient way to handle events on many elements."
    },
    {
        id: 408,
        testId: 7,
        difficulty: 'hard',
        question: "What is a PWA?",
        type: 'subjective',
        answer: "A PWA is a web application that uses modern web capabilities to deliver an app-like experience. Key features include being installable on the user's home screen, working offline via a service worker, and offering push notifications. They aim to combine the reach of the web with the user experience of a native app.",
        explanation: "They represent the evolution of web apps to be more capable and reliable."
    },
    {
        id: 409,
        testId: 7,
        difficulty: 'hard',
        question: "Explain the concept of WebAssembly (Wasm) and its use cases.",
        type: 'subjective',
        answer: "WebAssembly is a binary instruction format for a stack-based virtual machine. It's designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications. It allows you to run code written in languages like C++, Rust, and Go on the web at near-native speed. Use cases include performance-intensive tasks like gaming, video editing, and scientific simulations.",
        explanation: "Wasm is not a replacement for JavaScript, but a complement for performance-critical parts of an application."
    },
    {
      id: 410,
      testId: 7,
      difficulty: 'hard',
      question: "What is `git cherry-pick` used for?",
      type: 'subjective',
      answer: "`git cherry-pick` is a command used to apply a specific commit from one branch onto another branch. Instead of merging an entire branch, it allows you to select individual commits. This is useful for backporting a bug fix or applying a small feature from a development branch to a stable branch.",
      explanation: "It's a powerful tool for surgical changes between branches."
    },
    {
      id: 411,
      testId: 7,
      difficulty: 'hard',
      question: "What is the purpose of `Array.prototype.flat()`?",
      type: 'subjective',
      answer: "The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to a specified depth. The default depth is 1. This is useful for simplifying nested arrays into a single, flat array.",
      explanation: "For example, `[1, [2, 3], [4, [5]]].flat()` results in `[1, 2, 3, 4, [5]]`."
    },
    {
      id: 412,
      testId: 7,
      difficulty: 'hard',
      question: "What is `ESLint` and why is it useful?",
      type: 'subjective',
      answer: "`ESLint` is a static analysis tool for identifying and fixing problems in JavaScript code. It's highly configurable and helps enforce code quality, style consistency, and prevent common errors. By analyzing code without executing it, it can catch bugs early in the development process.",
      explanation: "It's an essential tool for any modern JavaScript project, especially for teams."
    },
    {
      id: 413,
      testId: 7,
      difficulty: 'hard',
      question: "What is the difference between `Promise.all()` and `Promise.allSettled()`?",
      type: 'subjective',
      answer: "`Promise.all()` takes an iterable of promises and returns a single promise that resolves with an array of all resolved values. It is 'fail-fast', meaning it will reject immediately if any of the input promises reject. `Promise.allSettled()` also takes an iterable, but it waits for all promises to settle (either fulfill or reject) and returns a promise that resolves with an array of objects, each describing the outcome of a promise.",
      explanation: "Use `all()` when you need all promises to succeed. Use `allSettled()` when you need to know the outcome of every promise, regardless of success."
    },
    {
      id: 414,
      testId: 7,
      difficulty: 'hard',
      question: "How does a 'Service Worker' work in a browser?",
      type: 'subjective',
      answer: "Service workers are scripts that your browser runs in the background, separate from a web page, enabling features that don't need a web page or user interaction. Key features include offline capabilities (caching assets), background sync, and push notifications. They are a core part of Progressive Web Apps (PWAs).",
      explanation: "They act as a proxy between the web app, the browser, and the network."
    },
    {
      id: 415,
      testId: 7,
      difficulty: 'hard',
      question: "How does JavaScript `async/await` relate to the event loop and Promises?",
      type: 'subjective',
      answer: "async/await and Promises are high-level abstractions for managing asynchronous operations that are powered by the event loop. When you await a Promise, the async function is paused, and its execution context is removed from the call stack. The underlying asynchronous operation (e.g., a fetch request) runs in the background. When the Promise settles, a task is placed in the microtask queue. The event loop prioritizes the microtask queue, so as soon as the call stack is clear, the async function's execution is resumed.",
      explanation: "They provide a synchronous-looking syntax for code that is fundamentally asynchronous and non-blocking."
    },
       // Test 8: 40 Questions (24 MCQ, 16 Subjective) - Expert
     {
        id: 416,
        testId: 8,
        difficulty: 'expert',
        question: "What is a 'race condition' and how can it be mitigated in JavaScript?",
        type: 'subjective',
        answer: "An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events.",
        explanation: "Mitigation strategies include using async/await to ensure sequential execution, using a locking mechanism, or designing state updates to be atomic."
    },
    {
        id: 417,
        testId: 8,
        difficulty: 'expert',
        question: "What are WebSockets?",
        type: 'subjective',
        answer: "A full-duplex communication channel over a single, long-lived TCP connection.",
        explanation: "Solve the limitations of HTTP polling and long-polling."
    },
    {
        id: 418,
        testId: 8,
        difficulty: 'expert',
        question: "How would you debounce a function in JavaScript?",
        type: 'subjective',
        answer: "You would create a wrapper function that uses `setTimeout`. Inside the wrapper, you first clear any existing timeout with `clearTimeout`, then set a new timeout to execute the original function after a specified delay. This ensures the function only runs once after a burst of calls has ended.",
        explanation: "Commonly used for handling user input, like in a search bar."
    },
    {
        id: 419,
        testId: 8,
        difficulty: 'expert',
        question: "Describe the JavaScript event loop.",
        type: 'subjective',
        answer: "Mechanism that allows JavaScript's single thread to handle asynchronous operations.",
        explanation: "Allows for non-blocking I/O in a single-threaded environment."
    },
    {
        id: 420,
        testId: 8,
        difficulty: 'expert',
        question: "In the context of networking, what is a 'port'?",
        type: 'subjective',
        answer: "A numerical identifier that specifies a particular process or service on a host computer.",
        explanation: "Ports allow a single host to run multiple services, directing network traffic to the correct application (e.g., a web server on port 80)."
    }
  ],
  'full-stack': [
    // Test 1: 5 Questions (3 MCQ, 2 Subjective) - Easy
    {
        id: 421,
        testId: 1,
        difficulty: 'easy',
        question: "What is a full-stack developer?",
        type: 'mcq',
        options: ['A developer who only works on the frontend', 'A developer who only works on the backend', 'A developer comfortable working with both frontend and backend technologies', 'A developer who manages the server hardware'],
        answer: 'A developer comfortable working with both frontend and backend technologies',
        explanation: 'A full-stack developer has a broad range of skills covering the entire software stack, from the user interface to the database.'
    },
    {
        id: 422,
        testId: 1,
        difficulty: 'easy',
        question: "Which of the following is NOT typically part of a full-stack developer's skillset?",
        type: 'mcq',
        options: ['HTML/CSS', 'Database Management (SQL/NoSQL)', 'Graphic Design', 'Backend Language (e.g., Node.js, Python)'],
        answer: 'Graphic Design',
        explanation: 'While understanding UI/UX principles is helpful, graphic design is a separate discipline. A full-stack developer implements the design, but doesn\'t usually create it.'
    },
    {
        id: 423,
        testId: 1,
        difficulty: 'easy',
        question: "What does 'API' stand for?",
        type: 'mcq',
        options: ['Application Programming Interface', 'Advanced Programming Integration', 'Application Process Interaction', 'Automated Program Interface'],
        answer: 'Application Programming Interface',
        explanation: 'An API is a crucial component that allows the frontend and backend of an application to communicate with each other.'
    },
    {
        id: 424,
        testId: 1,
        difficulty: 'easy',
        question: "What is the difference between the frontend and the backend?",
        type: 'subjective',
        answer: "The frontend is the part of the application that the user interacts with directly, also known as the client-side. It includes everything the user sees in their browser. The backend is the server-side, responsible for storing and organizing data, and handling the application's logic. It processes requests from the frontend and sends back the necessary information.",
        explanation: 'Frontend is what you see; backend is how it works.'
    },
    {
        id: 425,
        testId: 1,
        difficulty: 'easy',
        question: "What is a database?",
        type: 'subjective',
        answer: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system. It is managed by a Database Management System (DBMS). In a full-stack application, the backend uses a database to store and retrieve data like user profiles, posts, or product information.",
        explanation: 'Databases are essential for any application that needs to store data persistently.'
    },
    // Test 2: 10 Questions (6 MCQ, 4 Subjective) - Easy
    {
        id: 426,
        testId: 2,
        difficulty: 'easy',
        question: "Which technology is used for styling the frontend of a web application?",
        type: 'mcq',
        options: ['HTML', 'SQL', 'CSS', 'Node.js'],
        answer: 'CSS',
        explanation: 'CSS (Cascading Style Sheets) is used to describe the presentation and styling of a document written in HTML.'
    },
    {
        id: 427,
        testId: 2,
        difficulty: 'easy',
        question: "What is Node.js?",
        type: 'mcq',
        options: ['A frontend framework', 'A JavaScript runtime environment for executing JavaScript on the server side', 'A database', 'A programming language'],
        answer: 'A JavaScript runtime environment for executing JavaScript code outside a web browser',
        explanation: 'Node.js is a very popular choice for building backends, allowing developers to use JavaScript for the full stack.'
    },
    {
        id: 428,
        testId: 2,
        difficulty: 'easy',
        question: "Which of the following is a popular frontend JavaScript framework?",
        type: 'mcq',
        options: ['Express.js', 'React', 'Django', 'Laravel'],
        answer: 'React',
        explanation: 'React is a library for building user interfaces. Express.js, Django, and Laravel are all backend frameworks.'
    },
    {
        id: 429,
        testId: 2,
        difficulty: 'easy',
        question: "What does a `GET` HTTP request typically do?",
        type: 'mcq',
        options: ['Create a new resource', 'Update an existing resource', 'Retrieve a resource from the server', 'Delete a resource'],
        answer: 'Retrieve a resource from the server',
        explanation: 'GET requests are used by the frontend to fetch data from the backend API.'
    },
    {
        id: 430,
        testId: 2,
        difficulty: 'easy',
        question: "What is `git`?",
        type: 'mcq',
        options: ['A backend programming language', 'A database', 'A distributed version control system', 'A cloud hosting provider'],
        answer: 'A distributed version control system',
        explanation: 'Git is an essential tool for almost every developer, used to track changes in code and collaborate with others.'
    },
    {
        id: 431,
        testId: 2,
        difficulty: 'easy',
        question: "Which of the following is a relational (SQL) database?",
        type: 'mcq',
        options: ['MongoDB', 'Redis', 'PostgreSQL', 'Cassandra'],
        answer: 'PostgreSQL',
        explanation: 'PostgreSQL is a popular open-source relational database. The others are examples of NoSQL databases.'
    },
    {
        id: 432,
        testId: 2,
        difficulty: 'easy',
        question: "How does a frontend application get data from the backend?",
        type: 'subjective',
        answer: "A frontend application gets data from the backend by making an API call, which is typically an HTTP request to a specific URL (endpoint) on the server. The frontend might use the browser's built-in `fetch` API or a library like Axios to make the request. The backend then processes the request and sends the data back, usually in JSON format.",
        explanation: 'This communication via API is the core of how full-stack applications work.'
    },
    {
        id: 433,
        testId: 2,
        difficulty: 'easy',
        question: "What is the purpose of `npm`?",
        type: 'subjective',
        answer: "npm (Node Package Manager) is the default package manager for Node.js. It is used to install, manage, and share reusable code packages (dependencies) for a project. A `package.json` file in the project root lists the dependencies, allowing any developer to install the exact same set of tools.",
        explanation: 'npm is a fundamental tool for managing project dependencies in the JavaScript ecosystem.'
    },
    {
        id: 434,
        testId: 2,
        difficulty: 'easy',
        question: "What is JSON?",
        type: 'subjective',
        answer: "JSON (JavaScript Object Notation) is a lightweight, text-based format for data interchange. It is easy for humans to read and for machines to parse. In full-stack development, it is the most common format for sending data between the backend API and the frontend application.",
        explanation: 'JSON uses key-value pairs, similar to JavaScript objects.'
    },
    {
        id: 435,
        testId: 2,
        difficulty: 'easy',
        question: "What is 'localhost'?",
        type: 'subjective',
        answer: "Localhost is a hostname that refers to the current computer being used. When you are developing an application on your machine, both the frontend and backend servers often run on localhost. The browser can then access the application by navigating to a URL like `http://localhost:3000`.",
        explanation: 'It allows developers to test their applications locally without needing an internet connection.'
    },
     // Test 3: 15 Questions (9 MCQ, 6 Subjective) - Medium
    {
        id: 436,
        testId: 3,
        difficulty: 'medium',
        question: "What is a REST API?",
        type: 'mcq',
        options: ['A database', 'An architectural style for designing networked applications that uses standard HTTP methods', 'A frontend framework', 'A server deployment method'],
        answer: 'An architectural style for designing networked applications that uses standard HTTP methods',
        explanation: 'REST (Representational State Transfer) is the most common architectural style for building APIs that allow the frontend and backend to communicate.'
    },
    {
        id: 437,
        testId: 3,
        difficulty: 'medium',
        question: "In a MERN stack application, what does the 'E' stand for?",
        type: 'mcq',
        options: ['ECMAScript', 'Elasticsearch', 'Express.js', 'EJS'],
        answer: 'Express.js',
        explanation: 'MERN stands for MongoDB, Express.js, React, and Node.js. Express.js is the backend web application framework.'
    },
    {
        id: 438,
        testId: 3,
        difficulty: 'medium',
        question: "What is an ORM (Object-Relational Mapping)?",
        type: 'mcq',
        options: ['A UI component library', 'A technique for converting data between a relational database and an object-oriented programming language', 'A performance monitoring tool', 'A type of API'],
        answer: 'A technique for converting data between a relational database and an object-oriented programming language',
        explanation: 'ORMs like Prisma or Sequelize allow developers to work with their database using familiar object-oriented syntax instead of writing raw SQL.'
    },
    {
        id: 439,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of an environment variable (`.env`) file?",
        type: 'mcq',
        options: ['To store the application\'s HTML code', 'To store sensitive configuration data like API keys and database URLs outside of the source code', 'To define CSS styles', 'To list project dependencies'],
        answer: 'To store sensitive configuration data like API keys and database URLs outside of the source code',
        explanation: 'This practice is crucial for security and for managing different configurations for development and production.'
    },
    {
        id: 440,
        testId: 3,
        difficulty: 'medium',
        question: "What is CORS (Cross-Origin Resource Sharing)?",
        type: 'mcq',
        options: ['A type of encryption', 'A browser security feature that restricts cross-origin HTTP requests, which a server must explicitly allow via HTTP headers', 'A database technology', 'A JavaScript framework'],
        answer: 'A browser security feature that restricts cross-origin HTTP requests, which a server must explicitly allow via HTTP headers',
        explanation: 'CORS is a common issue full-stack developers must handle to allow their frontend and backend (on different origins) to communicate.'
    },
    {
        id: 441,
        testId: 3,
        difficulty: 'medium',
        question: "Which of the following is NOT a benefit of Server-Side Rendering (SSR)?",
        type: 'mcq',
        options: ['Improved SEO', 'Faster initial page load (perceived performance)', 'Reduced server load', 'Better experience on slow devices'],
        answer: 'Reduced server load',
        explanation: 'SSR actually increases server load, as the server has to render the HTML for each request instead of just sending static files.'
    },
    {
        id: 442,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of 'middleware' in a backend framework like Express.js?",
        type: 'mcq',
        options: ['To manage the database', 'Functions that execute during the request-response cycle to perform tasks like authentication, logging, or parsing request bodies', 'A UI component', 'A type of server'],
        answer: 'Functions that execute during the request-response cycle to perform tasks like authentication, logging, or parsing request bodies',
        explanation: 'Middleware is a core concept in many backend frameworks for handling cross-cutting concerns.'
    },
    {
        id: 443,
        testId: 3,
        difficulty: 'medium',
        question: "What does 'database normalization' mean?",
        type: 'mcq',
        options: ['Making the database normal', 'The process of organizing columns and tables in a relational database to minimize data redundancy', 'Deleting old data from a database', 'A backup procedure for a database'],
        answer: 'The process of organizing columns and tables in a relational database to minimize data redundancy',
        explanation: 'Normalization helps prevent data anomalies and makes the database more efficient.'
    },
    {
        id: 444,
        testId: 3,
        difficulty: 'medium',
        question: "What is a JWT (JSON Web Token)?",
        type: 'mcq',
        options: ['A type of database', 'A compact, URL-safe means of representing claims to be transferred between two parties', 'A session management tool', 'A server framework'],
        answer: 'A compact, URL-safe means of representing claims to be transferred between two parties',
        explanation: 'JWTs are commonly used for stateless authentication and authorization in APIs.'
    },
    {
        id: 445,
        testId: 3,
        difficulty: 'medium',
        question: "Explain the difference between SQL and NoSQL databases.",
        type: 'subjective',
        answer: "SQL databases are relational, storing data in structured tables with predefined schemas and using SQL for queries. They are good for complex queries and ensuring data integrity (ACID compliance). NoSQL databases are non-relational, have dynamic schemas, and store data in various formats like documents, key-value pairs, or graphs. They generally scale horizontally more easily and are often used for large-scale, unstructured data.",
        explanation: 'The choice depends on the specific needs of the application regarding structure, scalability, and consistency.'
    },
    {
        id: 446,
        testId: 3,
        difficulty: 'medium',
        question: "What is a 'Promise' in JavaScript and why is it useful?",
        type: 'subjective',
        answer: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It is useful because it provides a cleaner way to handle asynchronous code than traditional callbacks, avoiding 'callback hell.' Promises can be chained together and have dedicated methods for handling success (`.then()`) and failure (`.catch()`).",
        explanation: 'Promises, along with async/await, are fundamental to modern asynchronous JavaScript.'
    },
    {
        id: 447,
        testId: 3,
        difficulty: 'medium',
        question: "What is the role of a 'package.json' file?",
        type: 'subjective',
        answer: "The `package.json` file is the manifest for a Node.js project. It serves several purposes: it lists the project's dependencies (both for production and development), defines scripts for common tasks (like starting the server or running tests), provides metadata about the project (like its name and version), and ensures that builds are reproducible by locking dependency versions.",
        explanation: 'It is the central configuration file for any JavaScript/Node.js project.'
    },
    {
        id: 448,
        testId: 3,
        difficulty: 'medium',
        question: "What is 'authentication' versus 'authorization'?",
        type: 'subjective',
        answer: "Authentication is the process of verifying a user's identity (proving they are who they say they are), typically by checking a username and password. Authorization is the process of determining what an authenticated user is allowed to do (their permissions). Authentication always comes before authorization.",
        explanation: 'A helpful analogy: authentication is showing your ID to enter a building; authorization is checking which rooms your keycard can open.'
    },
    {
        id: 449,
        testId: 3,
        difficulty: 'medium',
        question: "Explain what a 'container' (like Docker) is and the problem it solves.",
        type: 'subjective',
        answer: "A container is a lightweight, standalone, executable package of software that includes everything needed to run it: code, runtime, system tools, and libraries. It solves the classic 'it works on my machine' problem by creating a consistent and reproducible environment for an application, ensuring it runs the same way regardless of where it is deployed (development, testing, or production).",
        explanation: 'Containers have become a standard for deploying modern applications.'
    },
    {
        id: 450,
        testId: 3,
        difficulty: 'medium',
        question: "What is the purpose of hashing and salting passwords?",
        type: 'subjective',
        answer: "Hashing is a one-way process that transforms a password into an irreversible, fixed-length string. This ensures the original password is never stored. Salting involves adding a unique, random string to each user's password before hashing it. This is crucial because it ensures that even if two users have the same password, their stored hashes will be different, which defeats attacks using pre-computed 'rainbow tables'.",
        explanation: 'This two-step process is a fundamental security practice for storing user credentials.'
    },
     // Test 4: 20 Questions (12 MCQ, 8 Subjective) - Medium
    {
        id: 451,
        testId: 4,
        difficulty: 'medium',
        question: "What is the primary role of an 'API Gateway'?",
        type: 'mcq',
        options: ['To store API data', 'A single entry point for all clients that handles concerns like routing, authentication, and rate limiting', 'A database for APIs', 'A monitoring tool for APIs'],
        answer: 'A single entry point for all clients that handles concerns like routing, authentication, and rate limiting',
        explanation: 'An API Gateway simplifies the client-side code and encapsulates the internal microservice architecture.'
    },
    {
        id: 452,
        testId: 4,
        difficulty: 'medium',
        question: "Which of these is NOT a valid HTTP status code category?",
        type: 'mcq',
        options: ['2xx (Success)', '3xx (Redirection)', '4xx (Client Error)', '6xx (Custom Error)'],
        answer: '6xx (Custom Error)',
        explanation: 'The standard HTTP status code categories are 1xx, 2xx, 3xx, 4xx, and 5xx.'
    },
    {
        id: 453,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of 'caching'?",
        type: 'mcq',
        options: ['To secure data', 'To store a copy of data in a temporary, fast-access location to speed up subsequent requests', 'To log server activity', 'To validate user input'],
        answer: 'To store a copy of data in a temporary, fast-access location to speed up subsequent requests',
        explanation: 'Caching can happen at multiple levels: in the browser, at a CDN, or on the backend (e.g., with Redis).'
    },
    {
        id: 454,
        testId: 4,
        difficulty: 'medium',
        question: "In the context of APIs, what does 'stateless' mean?",
        type: 'mcq',
        options: ['The server has no memory', 'Each request from a client to the server must contain all the information needed to understand and process the request', 'The server cannot store any data', 'The API does not have a state management library'],
        answer: 'Each request from a client to the server must contain all the information needed to understand and process the request',
        explanation: 'Statelessness is a key principle of REST architecture, which simplifies server design and improves scalability.'
    },
    {
        id: 455,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of the `async` and `await` keywords in JavaScript?",
        type: 'mcq',
        options: ['To make code run faster', 'To provide a more synchronous-looking syntax for handling asynchronous Promise-based code', 'To declare asynchronous variables', 'To create a new thread'],
        answer: 'To provide a more synchronous-looking syntax for handling asynchronous Promise-based code',
        explanation: 'They are syntactic sugar over Promises, making asynchronous code easier to write and read.'
    },
    {
        id: 456,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'Dockerfile' used for?",
        type: 'mcq',
        options: ['To configure a database', 'To write application code', 'A text document that contains all the commands a user could call on the command line to assemble a Docker container image', 'To manage user permissions'],
        answer: 'A text document that contains all the commands a user could call on the command line to assemble a Docker container image',
        explanation: 'A Dockerfile is the recipe for building a portable, self-contained application environment.'
    },
    {
        id: 457,
        testId: 4,
        difficulty: 'medium',
        question: "Which of the following is a key-value store database?",
        type: 'mcq',
        options: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
        answer: 'Redis',
        explanation: 'Redis is an in-memory data structure store, used as a database, cache, and message broker. It is a prime example of a key-value store.'
    },
    {
        id: 458,
        testId: 4,
        difficulty: 'medium',
        question: "What is the `event loop` in Node.js?",
        type: 'mcq',
        options: ['It listens for frontend UI events', 'A mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded', 'A security feature', 'A tool for managing event logs'],
        answer: 'A mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded',
        explanation: 'The event loop is the core of Node.js\'s asynchronous, non-blocking architecture.'
    },
    {
        id: 459,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of a 'linter' like ESLint?",
        type: 'mcq',
        options: ['To compile code', 'To run tests', 'To statically analyze code to find problems, bugs, and stylistic errors', 'To deploy an application'],
        answer: 'To statically analyze code to find problems, bugs, and stylistic errors',
        explanation: 'Linters help enforce code quality and consistency across a project.'
    },
    {
        id: 460,
        testId: 4,
        difficulty: 'medium',
        question: "Which of the following is NOT a principle of REST?",
        type: 'mcq',
        options: ['Stateless', 'Client-Server architecture', 'Stateful', 'Cacheable'],
        answer: 'Stateful',
        explanation: 'Statelessness is a core constraint of REST. The server should not store any client context between requests.'
    },
    {
        id: 461,
        testId: 4,
        difficulty: 'medium',
        question: "What is CORS (Cross-Origin Resource Sharing)?",
        type: 'mcq',
        options: ['A type of encryption', 'A security mechanism that uses HTTP headers to allow a server to indicate any origins other than its own from which a browser should permit loading resources', 'A database technology', 'A JavaScript framework'],
        answer: 'A security mechanism that uses HTTP headers to allow a server to indicate any origins other than its own from which a browser should permit loading resources',
        explanation: 'CORS is necessary to allow frontend applications on one domain to make API requests to a backend on another domain.'
    },
    {
        id: 462,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'Promise' in JavaScript?",
        type: 'mcq',
        options: ['A guarantee that a function will execute', 'An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value', 'A type of variable', 'A security feature'],
        answer: 'An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value',
        explanation: 'Promises are a fundamental part of modern asynchronous JavaScript.'
    },
    {
        id: 463,
        testId: 4,
        difficulty: 'medium',
        question: "What is the 'N+1' query problem and how can you solve it?",
        type: 'subjective',
        answer: "The N+1 query problem is a performance issue where an application makes one initial query to retrieve a list of items, and then makes 'N' additional queries to retrieve related data for each of those items. It can be solved by 'eager loading,' where the related data is fetched in a single, more complex query (e.g., using a SQL JOIN) along with the initial items.",
        explanation: 'This is a common performance bottleneck in applications that use an ORM.'
    },
    {
        id: 464,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of a reverse proxy?",
        type: 'subjective',
        answer: "A reverse proxy is a server that sits in front of one or more web servers, intercepting requests from clients. It is used for several purposes, including load balancing traffic across multiple backend servers, providing SSL termination (offloading encryption), caching static content, and enhancing security by hiding the identity of the backend servers.",
        explanation: 'NGINX and Apache are common examples of software used as reverse proxies.'
    },
    {
        id: 465,
        testId: 4,
        difficulty: 'medium',
        question: "What is dependency injection?",
        type: 'subjective',
        answer: "Dependency Injection (DI) is a design pattern in which a component's dependencies (the other objects it needs to work) are provided to it from an external source rather than it creating them itself. This 'inverts' the control of dependency management, leading to more loosely coupled, modular, and easily testable code.",
        explanation: 'Frameworks like NestJS and Spring make heavy use of DI.'
    },
    {
        id: 466,
        testId: 4,
        difficulty: 'medium',
        question: "Explain what a 'cookie' is and how it is used for session management.",
        type: 'subjective',
        answer: "A cookie is a small piece of data that a server sends to a user's web browser. The browser may store it and send it back with subsequent requests to the same server. For session management, after a user logs in, the server creates a unique session ID, sends it to the client as a cookie, and the client includes this cookie in future requests to identify itself as authenticated.",
        explanation: 'Cookies are a fundamental mechanism for maintaining state in the stateless HTTP protocol.'
    },
    {
        id: 467,
        testId: 4,
        difficulty: 'medium',
        question: "What is a 'container' (like Docker) and what problem does it solve?",
        type: 'subjective',
        answer: "A container is a lightweight, standalone, executable package of software that includes everything needed to run it: code, runtime, system tools, libraries, and settings. It solves the 'it works on my machine' problem by creating a consistent and reproducible environment for an application, ensuring it runs the same way regardless of where it is deployed.",
        explanation: 'Containers virtualize the operating system, making them more efficient than traditional virtual machines.'
    },
    {
        id: 468,
        testId: 4,
        difficulty: 'medium',
        question: "What is the difference between a `let` and `const` in JavaScript?",
        type: 'subjective',
        answer: "Both `let` and `const` are block-scoped variable declarations. The main difference is that a variable declared with `let` can be reassigned a new value, while a variable declared with `const` cannot be reassigned after its initial declaration. Note that for objects and arrays declared with `const`, their properties or elements can still be modified.",
        explanation: '`const` should be preferred for variables that will not be reassigned, as it makes the code easier to reason about.'
    },
    {
        id: 469,
        testId: 4,
        difficulty: 'medium',
        question: "What is the purpose of a `.gitignore` file?",
        type: 'subjective',
        answer: "A `.gitignore` file specifies intentionally untracked files that Git should ignore. This is used to prevent files that are generated by the build process (like `node_modules` or compiled code) or files that contain sensitive information (like `.env` files) from being accidentally committed to the version control repository.",
        explanation: 'It helps keep the repository clean and secure.'
    },
    {
        id: 470,
        testId: 4,
        difficulty: 'medium',
        question: "What are some common security vulnerabilities in a web application backend?",
        type: 'subjective',
        answer: "Common vulnerabilities include SQL Injection (where an attacker can manipulate database queries), Cross-Site Scripting (XSS, injecting malicious scripts), Cross-Site Request Forgery (CSRF, forcing a user to execute unwanted actions), insecure authentication/session management, and insecure direct object references (accessing unauthorized data by manipulating IDs).",
        explanation: 'A strong understanding of common vulnerabilities is essential for any backend developer.'
    },
     // Test 5: 25 Questions (15 MCQ, 10 Subjective) - Medium
    {
        id: 471,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'schema' in the context of a database?",
        type: 'mcq',
        options: ['A type of query', 'The blueprint or structure of the database, defining its tables, columns, data types, and relationships', 'A backup of the database', 'A user permission level'],
        answer: 'The blueprint or structure of the database, defining its tables, columns, data types, and relationships',
        explanation: 'The schema enforces the structure and integrity of the data.'
    },
    {
        id: 472,
        testId: 5,
        difficulty: 'medium',
        question: "What does it mean for an API to be 'idempotent'?",
        type: 'mcq',
        options: ['The API is secure', 'Making the same request multiple times has the same effect as making it once', 'The API is very fast', 'The API can only be called once'],
        answer: 'Making the same request multiple times has the same effect as making it once',
        explanation: 'HTTP methods like GET, PUT, and DELETE are idempotent. This is important for building reliable systems that may retry requests.'
    },
    {
        id: 473,
        testId: 5,
        difficulty: 'medium',
        question: "Which of the following is a primary benefit of using a message queue (e.g., RabbitMQ, Kafka)?",
        type: 'mcq',
        options: ['To make database queries faster', 'To decouple services and handle asynchronous communication between them', 'To store user session data', 'To serve static files'],
        answer: 'To decouple services and handle asynchronous communication between them',
        explanation: 'Message queues allow different parts of a system to communicate without being directly connected, improving scalability and resilience.'
    },
    {
        id: 474,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of the `finally` block in a `try...catch...finally` statement?",
        type: 'mcq',
        options: ['It executes only if an error occurs', 'It executes only if no error occurs', 'It always executes after the `try` and `catch` blocks, regardless of whether an error occurred', 'It is an alias for the `catch` block'],
        answer: 'It always executes after the `try` and `catch` blocks, regardless of whether an error occurred',
        explanation: 'The `finally` block is useful for cleanup code, like closing a file or database connection.'
    },
    {
        id: 475,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'callback function' in asynchronous programming?",
        type: 'mcq',
        options: ['A function that calls another function', 'A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action', 'A function that always returns a value', 'A function that blocks the main thread'],
        answer: 'A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action',
        explanation: 'Callbacks are a fundamental pattern for handling asynchronous operations in JavaScript, though Promises and async/await are now more common.'
    },
    {
        id: 476,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'WebHook'?",
        type: 'mcq',
        options: ['A frontend JavaScript library', 'An automated message sent from apps when something happens. It has a message (payload) which is sent to a unique URL.', 'A type of fishing lure', 'A security vulnerability'],
        answer: 'An automated message sent from apps when something happens. It has a message (payload) which is sent to a unique URL.',
        explanation: 'WebHooks are a way for one system to notify another system about an event, instead of the other system having to continuously poll for changes.'
    },
    {
        id: 477,
        testId: 5,
        difficulty: 'medium',
        question: "Which of the following best describes 'microservices architecture'?",
        type: 'mcq',
        options: ['Building a single, large application', 'An architectural style that structures an application as a collection of small, independent, and loosely coupled services', 'A frontend design pattern', 'A database schema design'],
        answer: 'An architectural style that structures an application as a collection of small, independent, and loosely coupled services',
        explanation: 'Microservices allow for independent deployment, scaling, and technology choices for different parts of an application.'
    },
    {
        id: 478,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'ACID' in the context of databases?",
        type: 'mcq',
        options: ['A type of chemical', 'A set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee database transactions are processed reliably', 'A query language', 'A security standard'],
        answer: 'A set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee database transactions are processed reliably',
        explanation: 'ACID compliance is a key feature of most relational databases.'
    },
    {
        id: 479,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of `git clone`?",
        type: 'mcq',
        options: ['To create a new branch', 'To create a local copy of a remote repository', 'To merge two branches', 'To delete a repository'],
        answer: 'To create a local copy of a remote repository',
        explanation: '`git clone` is the standard way to start working on a project that already exists on a remote server like GitHub.'
    },
    {
        id: 480,
        testId: 5,
        difficulty: 'medium',
        question: "In SQL, what is the difference between `DELETE` and `TRUNCATE`?",
        type: 'mcq',
        options: ['There is no difference', '`DELETE` removes all rows from a table, while `TRUNCATE` removes the table itself', '`DELETE` is a row-level operation that can be rolled back, while `TRUNCATE` is a faster, non-logged operation that removes all rows', '`TRUNCATE` can be used with a `WHERE` clause, but `DELETE` cannot'],
        answer: '`DELETE` is a row-level operation that can be rolled back, while `TRUNCATE` is a faster, non-logged operation that removes all rows',
        explanation: '`TRUNCATE` is much faster for deleting all rows from a large table as it doesn\'t log each row deletion.'
    },
    {
        id: 481,
        testId: 5,
        difficulty: 'medium',
        question: "What is the `Content-Type` header in an HTTP response used for?",
        type: 'mcq',
        options: ['To specify the length of the response body', 'To indicate the media type of the resource (e.g., `application/json` or `text/html`)', 'To control caching', 'To set a cookie'],
        answer: 'To indicate the media type of the resource (e.g., `application/json` or `text/html`)',
        explanation: 'This header tells the client how to parse and interpret the response body.'
    },
    {
        id: 482,
        testId: 5,
        difficulty: 'medium',
        question: "What is 'scalability'?",
        type: 'mcq',
        options: ['The security of a system', 'The ability of a system to handle a growing amount of work by adding resources', 'The speed of a system', 'The user-friendliness of a system'],
        answer: 'The ability of a system to handle a growing amount of work by adding resources',
        explanation: 'Backend systems are often designed with scalability in mind, either vertically (adding more power to a single server) or horizontally (adding more servers).'
    },
    {
        id: 483,
        testId: 5,
        difficulty: 'medium',
        question: "What is an 'endpoint' in an API?",
        type: 'mcq',
        options: ['The start of the API', 'A specific URL where an API can be accessed to perform an operation', 'The database connection', 'A security key'],
        answer: 'A specific URL where an API can be accessed to perform an operation',
        explanation: 'For example, `/api/users/123` is an endpoint for retrieving a specific user.'
    },
    {
        id: 484,
        testId: 5,
        difficulty: 'medium',
        question: "Which of the following is a common use case for WebSockets?",
        type: 'mcq',
        options: ['Serving a static website', 'Building a real-time chat application', 'Storing user preferences', 'Processing batch jobs'],
        answer: 'Building a real-time chat application',
        explanation: 'WebSockets provide a persistent, bidirectional communication channel, which is ideal for real-time applications.'
    },
    {
        id: 485,
        testId: 5,
        difficulty: 'medium',
        question: "What does the HTTP status code `500 Internal Server Error` mean?",
        type: 'mcq',
        options: ['The request was successful', 'The client made an invalid request', 'The server encountered an unexpected condition that prevented it from fulfilling the request', 'The requested resource was not found'],
        answer: 'The server encountered an unexpected condition that prevented it from fulfilling the request',
        explanation: 'This is a generic error message indicating a problem on the server-side.'
    },
    {
        id: 486,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'load balancer' and why is it used?",
        type: 'subjective',
        answer: "A load balancer is a device or software that distributes network or application traffic across multiple servers. It is used to improve the availability and scalability of an application by ensuring that no single server is overwhelmed with too many requests. If one server fails, the load balancer can redirect traffic to the remaining healthy servers.",
        explanation: 'Load balancing is a fundamental technique for building highly available systems.'
    },
    {
        id: 487,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between SQL and NoSQL databases?",
        type: 'subjective',
        answer: "SQL databases are relational, storing data in structured tables with predefined schemas and using SQL for queries. They are good for complex queries and ensuring data integrity. NoSQL databases are non-relational and can have dynamic schemas, storing data as documents, key-value pairs, or graphs. They generally scale horizontally more easily and are often used for large-scale, unstructured data.",
        explanation: 'The choice depends on the specific needs of the application regarding structure, scalability, and consistency.'
    },
    {
        id: 488,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of 'API rate limiting'?",
        type: 'subjective',
        answer: "API rate limiting is a technique used to control the number of requests a client can make to an API within a certain time frame. Its purposes are to prevent abuse or misuse (both intentional and accidental), ensure fair usage for all clients, protect the backend services from being overwhelmed, and manage operational costs.",
        explanation: 'It is a crucial feature for any public-facing API.'
    },
    {
        id: 489,
        testId: 5,
        difficulty: 'medium',
        question: "Explain what a 'Connection Pool' is for a database.",
        type: 'subjective',
        answer: "A connection pool is a cache of database connections maintained by the server so that the connections can be reused for future requests. Opening and closing a database connection is an expensive operation. A connection pool improves performance by avoiding this overhead, reusing existing connections instead of creating new ones for each request.",
        explanation: 'Connection pooling is a standard practice for improving the performance of database-driven applications.'
    },
    {
        id: 490,
        testId: 5,
        difficulty: 'medium',
        question: "What is the difference between a `let` and a `const` in JavaScript?",
        type: 'subjective',
        answer: "Both `let` and `const` are block-scoped variable declarations. The main difference is that a variable declared with `let` can be reassigned a new value, while a variable declared with `const` cannot be reassigned after its initial declaration. Note that for objects and arrays declared with `const`, their properties or elements can still be modified.",
        explanation: '`const` should be preferred for variables that will not be reassigned, as it makes the code easier to reason about.'
    },
    {
        id: 491,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of a `.gitignore` file?",
        type: 'subjective',
        answer: "A `.gitignore` file specifies intentionally untracked files that Git should ignore. This is used to prevent files that are generated by the build process (like `node_modules` or compiled code) or files that contain sensitive information (like `.env` files) from being accidentally committed to the version control repository.",
        explanation: 'It helps keep the repository clean and secure.'
    },
    {
        id: 492,
        testId: 5,
        difficulty: 'medium',
        question: "What are some common security vulnerabilities in a web application backend?",
        type: 'subjective',
        answer: "Common vulnerabilities include SQL Injection (where an attacker can manipulate database queries), Cross-Site Scripting (XSS, injecting malicious scripts), Cross-Site Request Forgery (CSRF, forcing a user to execute unwanted actions), insecure authentication/session management, and insecure direct object references (accessing unauthorized data by manipulating IDs).",
        explanation: 'A strong understanding of common vulnerabilities is essential for any backend developer.'
    },
    {
        id: 493,
        testId: 5,
        difficulty: 'medium',
        question: "What is a 'monolithic' architecture?",
        type: 'subjective',
        answer: "A monolithic architecture is a traditional model where an application is built as a single, unified unit. The entire application—including the user interface, business logic, and data access layer—is deployed as one large codebase. While simpler to develop and deploy initially, monoliths can become difficult to scale, maintain, and update as they grow in complexity.",
        explanation: 'The microservices architecture is an alternative to the monolithic approach.'
    },
    {
        id: 494,
        testId: 5,
        difficulty: 'medium',
        question: "What is the purpose of `bcrypt` when hashing passwords?",
        type: 'subjective',
        answer: "`bcrypt` is a password hashing function designed to be slow and computationally intensive. This slowness is a feature, as it makes brute-force attacks (trying many passwords) very time-consuming and expensive for an attacker. It also includes a salt automatically to protect against rainbow table attacks.",
        explanation: 'Modern, slow hashing algorithms like bcrypt or Argon2 are the standard for password security.'
    },
    {
        id: 495,
        testId: 5,
        difficulty: 'medium',
        question: "Explain what 'sharding' is in a database context.",
        type: 'subjective',
        answer: "Sharding is a type of database partitioning, also known as horizontal partitioning. It involves splitting a large database into smaller, faster, more manageable parts called shards. Each shard is a separate database, and the data is distributed across these shards. This is a common technique for scaling out databases to handle massive amounts of data and traffic.",
        explanation: 'Sharding allows a database to scale horizontally by adding more servers.'
    },
      // Test 6: 30 Questions (18 MCQ, 12 Subjective) - Hard
    {
        id: 496,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'race condition' in concurrent programming?",
        type: 'mcq',
        options: ['A performance bug in racing games', 'An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events', 'A network latency issue', 'A type of CPU error'],
        answer: 'An error condition that occurs when the behavior of a system depends on the unpredictable sequence or timing of other events',
        explanation: 'Race conditions are a common and difficult problem in concurrent systems, often leading to corrupted data. They are typically mitigated using locks or atomic operations.'
    },
    {
        id: 497,
        testId: 6,
        difficulty: 'hard',
        question: "What is the primary purpose of a 'service mesh' like Istio or Linkerd?",
        type: 'mcq',
        options: ['To manage database migrations', 'To provide a dedicated infrastructure layer for managing service-to-service communication, handling concerns like traffic management, security, and observability', 'To build user interfaces', 'To automate CI/CD pipelines'],
        answer: 'To provide a dedicated infrastructure layer for managing service-to-service communication, handling concerns like traffic management, security, and observability',
        explanation: 'A service mesh abstracts the complexity of network communication away from the application code by using sidecar proxies.'
    },
    {
        id: 498,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'gRPC'?",
        type: 'mcq',
        options: ['A GraphQL client library', 'A REST API framework', 'A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2', 'A database protocol'],
        answer: 'A high-performance, open-source universal RPC framework that uses Protocol Buffers and HTTP/2',
        explanation: 'gRPC is highly efficient and well-suited for low-latency communication between microservices.'
    },
    {
        id: 499,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'eventual consistency'?",
        type: 'mcq',
        options: ['A model where the system is always consistent', 'A consistency model where, if no new updates are made, all replicas of a piece of data will eventually converge to the same value', 'A model where data becomes inconsistent over time', 'A database transaction property'],
        answer: 'A consistency model where, if no new updates are made, all replicas of a piece of data will eventually converge to the same value',
        explanation: 'This model is often chosen in distributed systems that prioritize high availability and partition tolerance over strong, immediate consistency.'
    },
    {
        id: 500,
        testId: 6,
        difficulty: 'hard',
        question: "What is the difference between a `process` and a `thread`?",
        type: 'mcq',
        options: ['They are the same thing', 'A process has its own isolated memory space, while multiple threads can exist within a single process and share its memory space', 'A thread is a heavyweight operation, while a process is lightweight', 'Processes are for frontend, threads are for backend'],
        answer: 'A process has its own isolated memory space, while multiple threads can exist within a single process and share its memory space',
        explanation: 'This is a fundamental concept in operating systems and concurrent programming.'
    },
    {
        id: 501,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'idempotency' in API design?",
        type: 'mcq',
        options: ['The API is secure', 'The property of an operation where making the same request multiple times has the same effect as making it once', 'The API is very fast', 'The API can only be called once'],
        answer: 'The property of an operation where making the same request multiple times has the same effect as making it once',
        explanation: 'Idempotency is crucial for building reliable systems where requests might be retried due to network failures.'
    },
    {
        id: 502,
        testId: 6,
        difficulty: 'hard',
        question: "What problem does a 'circuit breaker' pattern solve?",
        type: 'mcq',
        options: ['It secures the application from electrical surges', 'It prevents an application from repeatedly trying to execute an operation that is likely to fail, allowing it to fail fast and prevent system-wide cascading failures', 'It helps with debugging', 'It encrypts network traffic'],
        answer: 'It prevents an application from repeatedly trying to execute an operation that is likely to fail, allowing it to fail fast and prevent system-wide cascading failures',
        explanation: 'The circuit breaker trips after a certain number of failures and will only allow requests through again after a timeout.'
    },
    {
        id: 503,
        testId: 6,
        difficulty: 'hard',
        question: "What is a 'distributed hash table' (DHT)?",
        type: 'mcq',
        options: ['A centralized database using hashing', 'A data structure used only in C++', 'A decentralized system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes', 'A hashing algorithm for passwords'],
        answer: 'A decentralized system that provides a lookup service similar to a hash table, distributing key-value pairs across a network of nodes',
        explanation: 'DHTs are a core component of many peer-to-peer systems, like BitTorrent.'
    },
    {
        id: 504,
        testId: 6,
        difficulty: 'hard',
        question: "What is the main benefit of HTTP/2 over HTTP/1.1?",
        type: 'mcq',
        options: ['It is more secure by default', 'It uses a different syntax for requests', 'Multiplexing, which allows multiple requests and responses to be sent in parallel over a single TCP connection', 'It only works with JSON'],
        answer: 'Multiplexing, which allows multiple requests and responses to be sent in parallel over a single TCP connection',
        explanation: 'This eliminates the head-of-line blocking problem and significantly improves performance.'
    },
    {
        id: 505,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of 'database migration' scripts?",
        type: 'mcq',
        options: ['To move a database to a different server', 'To manage and version control the evolution of the database schema over time', 'To back up the database', 'To optimize query performance'],
        answer: 'To manage and version control the evolution of the database schema over time',
        explanation: 'Migration scripts allow for automated, repeatable, and reversible changes to the database structure.'
    },
    {
        id: 506,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
        type: 'mcq',
        options: ['A security pattern', 'An architectural pattern that separates the models for updating data (Commands) from the models for reading data (Queries)', 'A database technology', 'A testing methodology'],
        answer: 'An architectural pattern that separates the models for updating data (Commands) from the models for reading data (Queries)',
        explanation: 'CQRS allows for independent optimization of the read and write sides of an application.'
    },
    {
        id: 507,
        testId: 6,
        difficulty: 'hard',
        question: "What is 'OAuth 2.0' primarily used for?",
        type: 'mcq',
        options: ['Authentication (verifying who a user is)', 'Authorization (granting a third-party application limited access to a user\'s resources)', 'Encryption', 'Session management'],
        answer: 'Authorization (granting a third-party application limited access to a user\'s resources)',
        explanation: 'OAuth 2.0 is about delegating access, not about authenticating the user directly.'
    },
    {
        id: 508,
        testId: 6,
        difficulty: 'hard',
        question: "What is the purpose of the `useLayoutEffect` hook in React and how does it differ from `useEffect`?",
        type: 'mcq',
        options: ["It runs before the component renders", "It fires synchronously after all DOM mutations, but before the browser has painted", "It's an alias for `useEffect`", "It only runs on the server"],
        answer: "It fires synchronously after all DOM mutations, but before the browser has painted",
        explanation: "This makes it suitable for reading layout from the DOM and synchronously re-rendering to avoid visual flickers. `useEffect` runs asynchronously after the paint."
    },
    {
        id: 509,
        testId: 6,
        difficulty: 'hard',
        question: "What is a `WeakMap` in JavaScript?",
        type: 'mcq',
        options: ["A Map that cannot be iterated", "A Map that only holds weak references to its keys, allowing them to be garbage collected", "A less performant version of Map", "An alias for an Object"],
        answer: "A Map that only holds weak references to its keys, allowing them to be garbage collected",
        explanation: "This prevents memory leaks when the only reference to an object is the WeakMap key."
    },
    {
        id: 510,
        testId: 6,
        difficulty: 'hard',
        question: "What is webpack's Module Federation?",
        type: 'mcq',
        options: ['A way to manage different versions of the same module', 'A method for loading modules from a CDN', 'A feature that allows a JavaScript application to dynamically load code from another, separately built application', 'A security policy for modules'],
        answer: 'A feature that allows a JavaScript application to dynamically load code from another, separately built application',
        explanation: "It is a key technology for enabling micro-frontend architectures."
    },
    {
        id: 511,
        testId: 6,
        difficulty: 'hard',
        question: "Why is `requestAnimationFrame` better for animations than `setTimeout`?",
        type: 'mcq',
        options: ['It runs code after a specified delay with higher priority', 'It synchronizes with the browser\'s repaint cycle for smoother animations', 'It is a newer version of `setInterval`', 'It is used exclusively for network requests'],
        answer: 'It synchronizes with the browser\'s repaint cycle for smoother animations',
        explanation: "This prevents layout thrashing and results in more efficient, smoother animations."
    },
    {
        id: 512,
        testId: 6,
        difficulty: 'hard',
        question: "What is the main difference between PUT and PATCH HTTP methods?",
        type: 'mcq',
        options: ['`PUT` is for creating, `PATCH` is for updating', '`PUT` replaces the entire resource, while `PATCH` applies a partial update', '`PATCH` is more secure than `PUT`', 'There is no difference'],
        answer: '`PUT` replaces the entire resource, while `PATCH` applies a partial update',
        explanation: "`PUT` is idempotent, meaning multiple identical requests have the same effect as one. `PATCH` is not necessarily idempotent."
    },
    {
        id: 513,
        testId: 6,
        difficulty: 'hard',
        question: "What is CSS Containment?",
        type: 'mcq',
        options: ["A property to contain elements within the viewport", "A property (`contain`) that allows you to isolate a part of the page for performance optimization", "A security feature to contain scripts", "A way to group CSS variables"],
        answer: "A property (`contain`) that allows you to isolate a part of the page for performance optimization",
        explanation: "It tells the browser that an element's subtree is independent, allowing for rendering optimizations as changes inside won't affect the outside."
    },
    {
        id: 514,
        testId: 6,
        difficulty: 'hard',
        question: "Explain the JavaScript event loop.",
        type: 'subjective',
        answer: "The event loop is a mechanism that allows JavaScript's single thread to handle asynchronous operations. It consists of a call stack, a message queue (or callback queue), and Web APIs. When an async operation completes (e.g., a `setTimeout`), its callback is placed in the queue. The event loop continuously checks if the call stack is empty. If it is, it takes the first message from the queue and pushes its callback onto the stack to be executed.",
        explanation: "This model allows for non-blocking I/O in a single-threaded environment."
    },
    {
        id: 515,
        testId: 6,
        difficulty: 'hard',
        question: "How do you avoid 'prop drilling' in React?",
        type: 'subjective',
        answer: "Prop drilling can be avoided by using state management solutions. For global or widely shared state, a library like Redux or Zustand is common. For state shared between a few nested components, the built-in React Context API is an excellent choice. It allows you to 'provide' a value at a high level and consume it at any lower level without passing it through intermediate components.",
        explanation: "Context API is the idiomatic React solution for this problem."
    },
    {
        id: 516,
        testId: 6,
        difficulty: 'hard',
        question: "How does a 'distributed lock manager' (e.g., using Zookeeper or Redis) work?",
        type: 'subjective',
        answer: "A distributed lock manager is used to coordinate access to a shared resource across multiple services. Using a system like Redis, a service can attempt to acquire a lock by setting a key with a unique value and a time-to-live (TTL). The operation must be atomic (e.g., using `SET key value NX PX ttl` in Redis). If the key is set successfully, the service has the lock. Other services will fail to set the key and must wait. The TTL ensures that the lock is automatically released if the service holding it crashes.",
        explanation: "This is a common pattern for ensuring mutual exclusion in a distributed environment."
    },
    {
        id: 517,
        testId: 6,
        difficulty: 'hard',
        question: "Explain what ARIA attributes are and why they are important.",
        type: 'subjective',
        answer: "ARIA (Accessible Rich Internet Applications) is a set of attributes you can add to HTML elements to improve their accessibility. They provide additional semantics for assistive technologies like screen readers, especially for dynamic content and complex UI controls that native HTML doesn't cover. For example, `role='alert'` or `aria-expanded='true'`.",
        explanation: "Proper ARIA usage is essential for creating accessible web applications."
    },
    {
        id: 518,
        testId: 6,
        difficulty: 'hard',
        question: "How does React's reconciliation algorithm work?",
        type: 'subjective',
        answer: "Reconciliation is the process through which React updates the DOM. When a component's state or props change, React creates a new virtual DOM tree. It then compares ('diffs') this new tree with the previous one using a heuristic algorithm. Based on this comparison, it computes the most efficient, minimal set of changes needed to update the real DOM and applies them in a batch.",
        explanation: "The key assumption is that different component types produce different trees and that developers can hint at stable elements using the `key` prop."
    },
    {
        id: 519,
        testId: 6,
        difficulty: 'hard',
        question: "Describe the purpose of a service worker in Progressive Web Apps (PWAs) and their advantages.",
        type: 'subjective',
        answer: "Service workers are scripts that your browser runs in the background, separate from a web page, enabling features that don't need a web page or user interaction. Key features include offline capabilities (caching assets), background sync, and push notifications. They act as a proxy between the web app, the browser, and the network. Advantages: reliability, engaging user experience, and improved performance.",
        explanation: "They are the backbone of PWAs, providing app-like functionalities on the web."
    },
    {
        id: 520,
        testId: 6,
        difficulty: 'hard',
        question: "Explain the concept of hoisting in JavaScript and provide an example.",
        type: 'subjective',
        answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. `var` declarations are hoisted and initialized with `undefined`. `let` and `const` are hoisted but not initialized, which creates a 'Temporal Dead Zone' where they cannot be accessed before their declaration. This is why you can call a function declared with `function` before its definition, but not a function assigned to a `let` variable.",
        explanation: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution"
    },
    {
        id: 521,
        testId: 6,
        difficulty: 'hard',
        question: "In terms of SEO, why would SSR be favored to CSR?",
        type: 'subjective',
        answer: "Web crawlers cannot execute Javascript like normal Browsers, and they rely on HTML for indexing. CSR delivers blank HTML, and then relies on javascript to fill it with content. SSR is an improved SEO, because, SSR makes the initial content crawlable, meaning crawlers can find key links and content before the page is loaded, enabling search engines to index them. It improves crawlability and indexability.",
        explanation: "In terms of SEO, why would SSR be favored to CSR?"
    },
    {
        id: 522,
        testId: 6,
        difficulty: 'hard',
        question: "What does it mean if an API is stateless?",
        type: 'subjective',
        answer: "In a stateless API, the server doesn't store any client session data between requests. Each request from a client to the server must contain all the information the server needs to understand and process it. This simplifies server design, improves reliability, scalability, and consistency, as every request is treated as independent. In other words, the client must pass session state to the server with each request",
        explanation: "Explain the concept of stateless API",
    },
    {
        id: 523,
        testId: 6,
        difficulty: 'hard',
        question: "Explain the concept of Inversion of Control",
        type: 'subjective',
        answer: 'A design principle where the control of a system is inverted to a framework or container. Instead of a library user calling a function, the framework or container calls the library. In the context of the framework, framework or container call functions of the injected class as needed to respond to events.',
        explanation: "What is the purpose of the Dependency Injection Pattern?"
    },
    {
        id: 524,
        testId: 6,
        difficulty: 'hard',
        question: "In terms of a database/backend, describe Normalisation",
        type: 'subjective',
        answer: 'The procedure of organizing data in a database. It involves creating tables and defining relationships between tables according to rules designed both to protect the data and to make the database more flexible by removing the repetitiveness and redundancy and inconsistent dependency',
        explanation: "In terms of a database/backend, describe Normalisation",
    },
    {
        id: 525,
        testId: 6,
        difficulty: 'hard',
        question: "Explain the use of JWT in authentication",
        type: 'subjective',
        answer: "JSON Web Token is a standard for securely transferring data between a server and a client as a JSON object. The benefit of using JWTs for authentication is that they are stateless. There is no database query. When a user sends a JWT to the server, the server checks the signature, extracts claims, and then returns the appropriate resource or denies the request.",
        explanation: "Explain the use of JWT in authentication",
    }
];
for (const key in questions) {
  if (Object.prototype.hasOwnProperty.call(questions, key)) {
    if (key !== 'frontend' && key !== 'backend' && key !== 'full-stack') {
        questions[key] = [];
    }
  }
}

    