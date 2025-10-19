
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
    }
  ],
  backend: [
    {
      "id": 141,
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
      "id": 142,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which HTTP method is typically used to retrieve data from a server?",
      "type": "mcq",
      "options": ["POST", "GET", "DELETE", "PUT"],
      "answer": "GET",
      "explanation": "The GET method is used to request data from a specified resource."
    },
    {
      "id": 143,
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
      "id": 144,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a server in the context of backend development?",
      "type": "subjective",
      "answer": "A server is a computer program or a device that provides functionality for other programs or devices, called clients. It processes requests from clients, such as fetching data from a database or running application logic, and returns a response.",
      "explanation": "Servers are the backbone of the backend, handling all the business logic and data management."
    },
    {
      "id": 145,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the difference between a relational (SQL) and a non-relational (NoSQL) database?",
      "type": "subjective",
      "answer": "A relational database (like MySQL) organizes data into tables with rows and columns and uses a structured query language (SQL). A non-relational database (like MongoDB) uses a variety of data models, such as document, key-value, or graph, and is more flexible in its schema.",
      "explanation": "The choice depends on the application's needs for structure, scalability, and flexibility."
    },
    {
      "id": 146,
      "testId": 2,
      "difficulty": "easy",
      "question": "Which of the following is a backend programming language?",
      "type": "mcq",
      "options": ["HTML", "CSS", "Node.js (JavaScript)", "React"],
      "answer": "Node.js (JavaScript)",
      "explanation": "Node.js allows JavaScript to be run on the server side."
    },
    {
      "id": 147,
      "testId": 2,
      "difficulty": "easy",
      "question": "What does the HTTP status code `200 OK` mean?",
      "type": "mcq",
      "options": ["The request failed", "The resource was not found", "The request has succeeded", "Access to the resource is forbidden"],
      "answer": "The request has succeeded",
      "explanation": "2xx status codes indicate success. `200 OK` is the standard response for successful HTTP requests."
    },
    {
      "id": 148,
      "testId": 2,
      "difficulty": "easy",
      "question": "What does SQL stand for?",
      "type": "mcq",
      "options": ["Structured Query Language", "Simple Query Language", "Standardized Query Language", "Server Query Language"],
      "answer": "Structured Query Language",
      "explanation": "SQL is the standard language for managing and querying relational databases."
    },
    {
      "id": 149,
      "testId": 2,
      "difficulty": "easy",
      "question": "Which HTTP method is used to create a new resource on a server?",
      "type": "mcq",
      "options": ["GET", "POST", "UPDATE", "CREATE"],
      "answer": "POST",
      "explanation": "POST is used to send data to a server to create a new resource."
    },
    {
      "id": 150,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is a 'route' in a web framework?",
      "type": "mcq",
      "options": ["A path to a file on the server", "A URL endpoint and the HTTP method it accepts", "A database connection string", "A CSS class"],
      "answer": "A URL endpoint and the HTTP method it accepts",
      "explanation": "Routes define how an application responds to a client request to a particular endpoint."
    },
    {
      "id": 151,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is authentication?",
      "type": "mcq",
      "options": ["Determining what a user can do", "Verifying the identity of a user", "Logging user actions", "Encrypting data"],
      "answer": "Verifying the identity of a user",
      "explanation": "Authentication is the process of proving that a user is who they claim to be."
    },
    {
      "id": 152,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is authorization?",
      "type": "subjective",
      "answer": "Authorization is the process of determining if an authenticated user has permission to access a specific resource or perform a specific action. It happens after authentication.",
      "explanation": "Authentication asks 'Who are you?', while authorization asks 'What are you allowed to do?'"
    },
    {
      "id": 153,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is an environment variable and why is it used?",
      "type": "subjective",
      "answer": "An environment variable is a variable whose value is set outside the program, typically in the operating system. They are used to store configuration settings like database credentials or API keys, keeping them separate from the application code for better security and flexibility.",
      "explanation": "This allows the same code to be run in different environments (development, production) with different settings."
    },
    {
      "id": 154,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is a 'port' in networking?",
      "type": "subjective",
      "answer": "A port is a number used to identify a specific process or service on a computer. When a request is sent to a server, it's addressed to an IP address and a port number, allowing the server to direct the request to the correct application (e.g., a web server on port 80 or 443).",
      "explanation": "It acts like an apartment number for a specific application on a computer."
    },
    {
      "id": 155,
      "testId": 2,
      "difficulty": "easy",
      "question": "What is JSON?",
      "type": "subjective",
      "answer": "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. It's often used to send data between a server and a web application as an alternative to XML.",
      "explanation": "It's the most common format for data in REST APIs."
    },
    {
      "id": 156,
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
      "id": 157,
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
      "id": 158,
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
      "id": 159,
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
      "id": 160,
      "testId": 3,
      "difficulty": "medium",
      "question": "Which HTTP status code indicates that a resource was not found?",
      "type": "mcq",
      "options": ["200", "404", "500", "301"],
      "answer": "404",
      "explanation": "A 404 Not Found error means the server could not find the requested resource."
    },
    {
      "id": 161,
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
      "id": 162,
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
      "id": 163,
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
      "id": 164,
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
      "id": 165,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is a 'foreign key' in a relational database?",
      "type": "subjective",
      "answer": "A foreign key is a field (or collection of fields) in one table that uniquely identifies a row of another table. It's used to establish and enforce a link between the data in two tables. The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.",
      "explanation": "Foreign keys are essential for maintaining data integrity and relationships in a relational database."
    },
    {
      "id": 166,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is a JWT (JSON Web Token)?",
      "type": "subjective",
      "answer": "A JWT is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.",
      "explanation": "JWTs are a common way to handle authentication and authorization in modern web applications."
    },
    {
      "id": 167,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is the N+1 problem in the context of ORMs?",
      "type": "subjective",
      "answer": "The N+1 problem occurs when an application makes N additional database queries to fetch the same data that could have been retrieved in a single query. For example, fetching a list of N authors and then making a separate query for each author's books, resulting in N+1 total queries. This can be solved by 'eager loading' the related data in the initial query.",
      "explanation": "This is a common performance bottleneck when using ORMs if not careful."
    },
    {
      "id": 168,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is CORS (Cross-Origin Resource Sharing)?",
      "type": "subjective",
      "answer": "CORS is a browser security feature that restricts cross-origin HTTP requests initiated from scripts. By default, browsers block these requests. To allow them, the server at the requested origin must include specific CORS headers (like `Access-Control-Allow-Origin`) in its response.",
      "explanation": "This prevents malicious sites from making unauthorized requests to your APIs on behalf of a user."
    },
    {
      "id": 169,
      "testId": 3,
      "difficulty": "medium",
      "question": "Explain the concept of 'salting' passwords.",
      "type": "subjective",
      "answer": "Salting is a security technique where a unique, randomly generated string (the salt) is added to each user's password before it is hashed. The salt is then stored along with the hashed password. This ensures that even if two users have the same password, their hashes will be different, which defeats rainbow table attacks.",
      "explanation": "Salting is a critical step in modern password storage."
    },
    {
      "id": 170,
      "testId": 3,
      "difficulty": "medium",
      "question": "What is the purpose of an API Gateway?",
      "type": "subjective",
      "answer": "An API Gateway is a server that acts as a single entry point into a system for all clients. It can handle tasks such as request routing, composition, authentication, rate limiting, and logging. In a microservices architecture, it simplifies the client by providing a single endpoint to communicate with, instead of many individual services.",
      "explanation": "API Gateways are a common pattern for managing and securing access to backend services."
    },
    {
      "id": 171,
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
      "id": 172,
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
      "id": 173,
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
      "id": 174,
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
      "id": 175,
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
      "id": 176,
      "testId": 4,
      "difficulty": "medium",
      "question": "Which of these is a popular in-memory data store, often used for caching?",
      "type": "mcq",
      "options": ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
      "answer": "Redis",
      "explanation": "Redis is known for its high performance and is commonly used as a cache, message broker, and session store."
    },
    {
      "id": 177,
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
      "id": 178,
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
      "id": 179,
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
      "id": 180,
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
      "id": 181,
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
      "id": 182,
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
      "id": 183,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a microservice architecture?",
      "type": "subjective",
      "answer": "A microservice architecture is a method of developing software applications as a suite of independently deployable, small, modular services. Each service runs its own process and communicates with other services through a well-defined, lightweight mechanism, such as an HTTP-based API.",
      "explanation": "This approach allows for greater flexibility, scalability, and easier maintenance compared to a monolithic architecture."
    },
    {
      "id": 184,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is the difference between TCP and UDP?",
      "type": "subjective",
      "answer": "TCP (Transmission Control Protocol) is a connection-oriented protocol that guarantees reliable, ordered delivery of data. UDP (User Datagram Protocol) is a connectionless protocol that is faster but does not guarantee delivery or order. TCP is used for applications like web browsing and email, while UDP is used for applications like video streaming and online gaming where speed is more important than perfect reliability.",
      "explanation": "This is a fundamental networking concept."
    },
    {
      "id": 185,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a DDoS attack?",
      "type": "subjective",
      "answer": "A Distributed Denial-of-Service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic. The traffic comes from many different sources, making it difficult to stop.",
      "explanation": "This is a common security threat for backend services."
    },
    {
      "id": 186,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is idempotency in the context of HTTP methods?",
      "type": "subjective",
      "answer": "An HTTP method is idempotent if an identical request can be made once or multiple times in a row with the same effect, while leaving the server in the same state. GET, PUT, and DELETE methods are idempotent. POST is not idempotent, as making the same POST request multiple times will typically create multiple new resources.",
      "explanation": "This is an important concept for designing robust and predictable APIs."
    },
    {
      "id": 187,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a thread in programming?",
      "type": "subjective",
      "answer": "A thread is the smallest sequence of programmed instructions that can be managed independently by a scheduler. Most programming languages can run on a single thread (like JavaScript in Node.js) or multiple threads. Multithreading allows for parallel execution of tasks, but introduces complexity related to synchronization and data sharing.",
      "explanation": "Understanding threads is key to understanding concurrency."
    },
    {
      "id": 188,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a DNS (Domain Name System)?",
      "type": "subjective",
      "answer": "DNS is the phonebook of the Internet. Humans access information online through domain names, like google.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.",
      "explanation": "It's a fundamental part of how the internet works."
    },
    {
      "id": 189,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is 'long polling'?",
      "type": "subjective",
      "answer": "Long polling is a technique where the client makes a request to the server, and the server holds the request open until new data is available. Once data is available, the server sends a response, and the client immediately makes another request. It's a way to simulate a push mechanism from server to client without using WebSockets.",
      "explanation": "It's more efficient than traditional polling, but less efficient than WebSockets."
    },
    {
      "id": 190,
      "testId": 4,
      "difficulty": "medium",
      "question": "What is a CI/CD pipeline?",
      "type": "subjective",
      "answer": "A CI/CD pipeline is a series of steps that must be performed in order to deliver a new version of software. CI (Continuous Integration) is the practice of automating the integration of code changes from multiple contributors into a single software project. CD (Continuous Delivery/Deployment) is the practice of automating the release of that software to production.",
      "explanation": "CI/CD is a core practice of modern DevOps."
    },
    {
      "id": 191,
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
      "id": 192,
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
      "id": 193,
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
      "id": 194,
      "testId": 5,
      "difficulty": "medium",
      "question": "Which of these is NOT a principle of REST?",
      "type": "mcq",
      "options": ["Stateless", "Client-Server", "Layered System", "Tight Coupling"],
      "answer": "Tight Coupling",
      "explanation": "REST APIs are designed to be loosely coupled, allowing the client and server to evolve independently."
    },
    {
      "id": 195,
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
      "id": 196,
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
      "id": 197,
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
      "id": 198,
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
      "id": 199,
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
      "id": 200,
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
      "id": 201,
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
      "id": 202,
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
      "id": 203,
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
      "id": 204,
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
      "id": 205,
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
      "id": 206,
      "testId": 5,
      "difficulty": "medium",
      "question": "Explain the difference between monolith and microservices architecture.",
      "type": "subjective",
      "answer": "A monolithic architecture is built as a single, unified unit. All components are tightly coupled and run as a single service. A microservices architecture structures an application as a collection of loosely coupled, independently deployable services. Each service is responsible for a specific business capability.",
      "explanation": "Microservices offer better scalability and flexibility, but are more complex to manage than monoliths."
    },
    {
      "id": 207,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the CAP theorem?",
      "type": "subjective",
      "answer": "The CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency (every read receives the most recent write or an error), Availability (every request receives a non-error response, without guarantee that it contains the most recent write), and Partition Tolerance (the system continues to operate despite an arbitrary number of messages being dropped or delayed between nodes).",
      "explanation": "This is a fundamental concept in designing distributed systems."
    },
    {
      "id": 208,
      "testId": 5,
      "difficulty": "medium",
      "question": "How do you prevent SQL injection attacks?",
      "type": "subjective",
      "answer": "The most effective way to prevent SQL injection is to use prepared statements (also known as parameterized queries). This technique separates the SQL code from the data, ensuring that user input is always treated as data and not as part of the SQL command. Using an ORM, which typically uses prepared statements under the hood, is also a good defense.",
      "explanation": "Never concatenate or format user input directly into SQL queries."
    },
    {
      "id": 209,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the purpose of a Dockerfile?",
      "type": "subjective",
      "answer": "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. It provides a set of instructions for building a Docker container image, such as specifying the base image, copying application files, installing dependencies, and defining the command to run when the container starts.",
      "explanation": "It automates the process of creating a Docker image."
    },
    {
      "id": 210,
      "testId": 5,
      "difficulty": "medium",
      "question": "What are the benefits of using a message queue?",
      "type": "subjective",
      "answer": "Message queues provide several benefits in a distributed system. They decouple services, allowing them to evolve independently. They improve reliability by persisting messages if a consumer service is down. They also help with scalability and load balancing by allowing you to add more consumers to process messages from the queue.",
      "explanation": "They enable asynchronous communication, which is key for building robust, scalable applications."
    },
    {
      "id": 211,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is a 'health check' endpoint?",
      "type": "subjective",
      "answer": "A health check endpoint is a special URL in a web service (e.g., `/health`) that is used by monitoring systems to determine if the service is running and healthy. A healthy response typically returns a 200 OK status code. Load balancers use health checks to decide whether to route traffic to a particular server instance.",
      "explanation": "This is a simple but critical part of maintaining a reliable service."
    },
    {
      "id": 212,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is the difference between a process and a thread?",
      "type": "subjective",
      "answer": "A process is an instance of a computer program that is being executed. It has its own memory space. A thread is the smallest unit of execution within a process. A process can have multiple threads, which share the same memory space. This makes communication between threads easier but also introduces challenges like race conditions.",
      "explanation": "This is a fundamental concept in operating systems and concurrency."
    },
    {
      "id": 213,
      "testId": 5,
      "difficulty": "medium",
      "question": "Explain how HTTPS works.",
      "type": "subjective",
      "answer": "HTTPS (HTTP Secure) uses SSL/TLS to encrypt the communication between a client and a server. When a client connects to an HTTPS server, they perform an SSL/TLS handshake. The server provides its SSL certificate to the client, which the client verifies with a trusted Certificate Authority. Once verified, they negotiate an encryption key to encrypt all subsequent communication, ensuring confidentiality and integrity.",
      "explanation": "It's the standard for secure communication on the web."
    },
    {
      "id": 214,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is rate limiting and why is it important?",
      "type": "subjective",
      "answer": "Rate limiting is a technique used to control the amount of incoming traffic to a service. It restricts the number of requests a user can make in a given time period. This is important for preventing abuse (like brute-force attacks), ensuring fair usage among all users, and protecting backend services from being overwhelmed.",
      "explanation": "It's a crucial security and reliability feature for public APIs."
    },
    {
      "id": 215,
      "testId": 5,
      "difficulty": "medium",
      "question": "What is 'infrastructure as code' (IaC)?",
      "type": "subjective",
      "answer": "Infrastructure as Code is the practice of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Tools like Terraform or AWS CloudFormation allow you to define your servers, databases, and networks in code, which can be version-controlled and automated.",
      "explanation": "IaC brings the benefits of software development practices to infrastructure management."
    },
    {
      "id": 216,
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
      "id": 217,
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
      "id": 218,
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
      "id": 219,
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
      "id": 220,
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
      "id": 221,
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
      "id": 222,
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
      "id": 223,
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
      "id": 224,
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
      "id": 225,
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
      "id": 226,
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
      "id": 227,
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
      "id": 228,
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
      "id": 229,
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
      "id": 230,
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
      "id": 231,
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
      "id": 232,
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
      "id": 233,
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
      "id": 234,
      "testId": 6,
      "difficulty": "hard",
      "question": "Explain the concept of a 'distributed hash table' (DHT).",
      "type": "subjective",
      "answer": "A DHT is a decentralized distributed system that provides a lookup service similar to a hash table. Key-value pairs are stored in the DHT, and any participating node can efficiently retrieve the value associated with a given key. Responsibility for maintaining the mapping from keys to values is distributed among the nodes, in a way that a change in the set of participants causes a minimal amount of disruption.",
      "explanation": "DHTs are a key component of many peer-to-peer systems, like BitTorrent."
    },
    {
      "id": 235,
      "testId": 6,
      "difficulty": "hard",
      "question": "What are the trade-offs between REST and GraphQL?",
      "type": "subjective",
      "answer": "REST is simpler to implement and leverages well-understood HTTP caching mechanisms. However, it can lead to over-fetching (getting more data than needed) or under-fetching (needing to make multiple requests). GraphQL solves these issues by allowing the client to specify exactly the data it needs, but it is more complex to set up, and caching is more difficult as all requests typically go to a single endpoint.",
      "explanation": "The choice depends on the specific needs of the application and its clients."
    },
    {
      "id": 236,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is a 'race condition' and how can you prevent it?",
      "type": "subjective",
      "answer": "A race condition is a bug that occurs when the outcome of a computation depends on the non-deterministic timing of concurrent operations. It happens when multiple threads or processes access a shared resource without proper synchronization. It can be prevented using synchronization primitives like mutexes (locks), semaphores, or by using atomic operations.",
      "explanation": "This is a common and difficult problem in concurrent programming."
    },
    {
      "id": 237,
      "testId": 6,
      "difficulty": "hard",
      "question": "Explain the actor model of concurrency.",
      "type": "subjective",
      "answer": "The actor model is a mathematical model of concurrent computation that treats 'actors' as the universal primitives of concurrent computation. An actor is a computational entity that, in response to a message it receives, can concurrently: send a finite number of messages to other actors; create a finite number of new actors; and designate the behavior to be used for the next message it receives. Actors do not share state, which avoids the need for locks and other synchronization primitives.",
      "explanation": "Languages like Erlang and frameworks like Akka are based on the actor model."
    },
    {
      "id": 238,
      "testId": 6,
      "difficulty": "hard",
      "question": "What is 'consistent hashing'?",
      "type": "subjective",
      "answer": "Consistent hashing is a special kind of hashing such that when a hash table is resized, only a small number of keys need to be remapped on average. It's particularly useful in distributed systems, like CDNs or distributed databases, where adding or removing a server (node) should not require a complete re-shuffling of data across all servers.",
      "explanation": "It minimizes disruption when a distributed system scales up or down."
      },
      {
        "id": 239,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is the difference between leader-based and leaderless replication in databases?",
        "type": "subjective",
        "answer": "In leader-based replication, one replica is designated as the leader (or master), which handles all write operations. Other replicas (followers or slaves) receive a stream of changes from the leader. In leaderless replication, any replica can accept writes. This model is more fault-tolerant (as it doesn't have a single point of failure) but is more complex to manage consistency, often requiring 'read repair' or 'quorum' writes.",
        "explanation": "This is a fundamental design choice in distributed database systems."
      },
      {
        "id": 240,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is 'zero-downtime deployment'?",
        "type": "subjective",
        "answer": "Zero-downtime deployment is the process of releasing a new version of an application into a production environment without causing any visible service interruption for users. This is typically achieved using strategies like blue-green deployment or canary releases, often in combination with load balancers to gradually shift traffic to the new version.",
        "explanation": "This is a key goal for modern, highly-available web services."
      },
      {
        "id": 241,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is 'chaos engineering'?",
        "type": "subjective",
        "answer": "Chaos engineering is the discipline of experimenting on a distributed system in order to build confidence in the system's capability to withstand turbulent conditions in production. It involves proactively and deliberately injecting failures—like terminating servers or introducing network latency—to identify weaknesses before they cause a real outage.",
        "explanation": "Netflix is a famous pioneer of chaos engineering with its 'Chaos Monkey' tool."
      },
      {
        "id": 242,
        "testId": 6,
        "difficulty": "hard",
        "question": "Explain the 'strangler fig' pattern.",
        "type": "subjective",
        "answer": "The strangler fig pattern is a strategy for incrementally migrating a legacy monolithic application to a microservices architecture. A new service is built to replace a piece of functionality, and a router or proxy is put in front of the monolith to intercept requests and route them to the new service instead. Over time, more functionality is 'strangled' out of the monolith until it can be retired.",
        "explanation": "It's a gradual and less risky approach to modernization than a big-bang rewrite."
      },
      {
        "id": 243,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is 'end-to-end encryption'?",
        "type": "subjective",
        "answer": "End-to-end encryption (E2EE) is a system of communication where only the communicating users can read the messages. It prevents potential eavesdroppers – including telecom providers, Internet providers, and even the provider of the communication service – from being able to access the cryptographic keys needed to decrypt the conversation. The server only facilitates the connection but cannot read the content.",
        "explanation": "Messaging apps like Signal and WhatsApp use E2EE."
      },
      {
        "id": 244,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is a 'Bloom filter' and what is it used for?",
        "type": "subjective",
        "answer": "A Bloom filter is a space-efficient probabilistic data structure that is used to test whether an element is a member of a set. It can produce false positive matches (it might say an element is in the set when it's not) but cannot produce false negatives (if it says an element is not in the set, it's definitively not). They are used in situations where a small chance of a false positive is acceptable in exchange for significant space savings, such as checking for previously seen articles or unavailable usernames.",
        "explanation": "It's a clever trade-off between space and accuracy."
      },
      {
        "id": 245,
        "testId": 6,
        "difficulty": "hard",
        "question": "What is 'two-phase commit' (2PC)?",
        "type": "subjective",
        "answer": "Two-phase commit is a distributed algorithm that coordinates all the processes that participate in a distributed atomic transaction on whether to commit or abort (roll back) the transaction. It involves a coordinator and participants. In the first phase (prepare), the coordinator asks all participants if they are ready to commit. In the second phase (commit), if all participants agreed, the coordinator tells them to commit; otherwise, it tells them to abort.",
        "explanation": "2PC is used to ensure atomicity in distributed transactions but can be slow and has blocking issues if the coordinator fails."
      },
      {
        "id": 246,
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
        "id": 247,
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
        "id": 248,
        "testId": 7,
        "difficulty": "hard",
        "question": "Which of the following is a key-value store?",
        "type": "mcq",
        "options": ["MySQL", "PostgreSQL", "DynamoDB", "SQL Server"],
        "answer": "DynamoDB",
        "explanation": "DynamoDB (along with others like Redis and Riak) is a popular key-value and document database, a type of NoSQL database."
      },
      {
        "id": 249,
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
        "id": 250,
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
        "id": 251,
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
        "id": 252,
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
        "id": 253,
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
        "id": 254,
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
        "id": 255,
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
        "id": 256,
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
        "id": 257,
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
        "id": 258,
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
        "id": 259,
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
        "id": 260,
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
        "id": 261,
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
        "id": 262,
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
        "id": 263,
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
        "id": 264,
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
        "id": 265,
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
        "id": 266,
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
        "id": 267,
        "testId": 7,
        "difficulty": "hard",
        "question": "Explain the trade-offs of different database isolation levels.",
        "type": "subjective",
        "answer": "Database isolation levels (like Read Uncommitted, Read Committed, Repeatable Read, Serializable) control the degree to which transactions are isolated from each other. Lower levels (like Read Uncommitted) offer higher concurrency but can lead to phenomena like dirty reads, non-repeatable reads, and phantom reads. Higher levels (like Serializable) prevent these issues and provide strong consistency, but at the cost of reduced performance and increased contention (more locking). The choice is a trade-off between consistency and performance.",
        "explanation": "This is a core concept in database transaction management."
      },
      {
        "id": 268,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is a 'gossip protocol'?",
        "type." : "subjective",
        "answer": "A gossip protocol is a procedure or process of computer peer-to-peer communication that is based on the way epidemics spread. A node in a distributed system periodically sends information to a set of random other nodes. This is a robust and scalable way to disseminate information and maintain consistency in a large, decentralized network, even with node failures.",
        "explanation": "It's used in systems like Apache Cassandra for service discovery and state synchronization."
      },
      {
        "id": 269,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'test-driven development' (TDD)?",
        "type": "subjective",
        "answer": "TDD is a software development process that relies on the repetition of a very short development cycle: first, the developer writes an (initially failing) automated test case that defines a desired improvement or new function. Then, the developer produces the minimum amount of code to pass that test. Finally, the developer refactors the new code to acceptable standards. This is often summarized as 'Red, Green, Refactor'.",
        "explanation": "TDD helps to ensure high test coverage and can lead to better-designed, more modular code."
      },
      {
        "id": 270,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'domain-driven design' (DDD)?",
        "type": "subjective",
        "answer": "Domain-driven design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain. The key idea is to create a 'ubiquitous language' that is shared between technical and domain experts. DDD is particularly suited for complex enterprise systems.",
        "explanation": "Concepts like 'bounded context' and 'aggregate' are central to DDD."
      },
      {
        "id": 271,
        "testId": 7,
        "difficulty": "hard",
        "question": "Explain the 'publish-subscribe' (pub/sub) pattern.",
        "type": "subjective",
        "answer": "The pub/sub pattern is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers. Instead, publishers categorize published messages into topics, without knowledge of which subscribers, if any, there may be. Subscribers express interest in one or more topics and only receive messages that are of interest, without knowledge of which publishers, if any, there are. This decouples the publishers and subscribers.",
        "explanation": "Message queues like Kafka and RabbitMQ are often used to implement this pattern."
      },
      {
        "id": 272,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'OAuth 2.0' and what problem does it solve?",
        "type": "subjective",
        "answer": "OAuth 2.0 is an authorization framework, not an authentication protocol. It solves the problem of 'delegated authorization,' where a user wants to grant a third-party application limited access to their account on another service, without sharing their password. It defines several 'flows' (e.g., Authorization Code Flow) for obtaining an access token, which the third-party app can then use to make API requests on behalf of the user.",
        "explanation": "It's the standard for third-party application authorization on the web."
      },
      {
        "id": 273,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is a 'content security policy' (CSP)?",
        "type": "subjective",
        "answer": "A CSP is a browser security feature, implemented via an HTTP header, that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. It allows you to specify which sources of content (scripts, styles, images, etc.) are trusted and can be loaded by the browser, effectively creating a whitelist of allowed content origins.",
        "explanation": "CSP is a powerful defense-in-depth mechanism against XSS."
      },
      {
        "id": 274,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'Server-Sent Events' (SSE)?",
        "type": "subjective",
        "answer": "Server-Sent Events is a technology where a web page automatically gets updates from a server. It provides a one-way communication channel from the server to the client over a standard HTTP connection. Unlike WebSockets, it is unidirectional and simpler to implement. It's ideal for situations where the client only needs to receive data from the server, such as live sports scores or stock tickers.",
        "explanation": "It's a simpler alternative to WebSockets for server-to-client streaming."
      },
      {
        "id": 275,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'A/B testing'?",
        "type": "subjective",
        "answer": "A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better. You show two variants (A and B) to similar groups of users at the same time. The one that gives a better conversion rate (e.g., more clicks or purchases) wins. This is a common way to test changes to a user interface to improve metrics.",
        "explanation": "It's a data-driven approach to product and feature development."
      },
      {
        "id": 276,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is a 'data warehouse'?",
        "type": "subjective",
        "answer": "A data warehouse is a large, centralized repository of data that is used for reporting and data analysis. Data is often aggregated from many different sources, such as transactional databases and log files. Unlike a transactional database (OLTP), a data warehouse is optimized for analytical queries (OLAP) and business intelligence.",
        "explanation": "Data warehouses are a key component of business intelligence."
      },
      {
        "id": 277,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'SOLID' in the context of object-oriented design?",
        "type": "subjective",
        "answer": "SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. The principles are: Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle.",
        "explanation": "Following SOLID principles leads to more robust and maintainable object-oriented code."
      },
      {
        "id": 278,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is 'API versioning' and why is it important?",
        "type": "subjective",
        "answer": "API versioning is the practice of managing changes to your API in a way that doesn't break existing client applications. This is important because as your API evolves, you might need to make breaking changes. By providing versioned endpoints (e.g., /api/v1/users, /api/v2/users), you can introduce new features or changes in v2 while allowing existing clients to continue using the stable v1.",
        "explanation": "It's crucial for maintaining backward compatibility for public or widely used APIs."
      },
      {
        "id": 279,
        "testId": 7,
        "difficulty": "hard",
        "question": "Explain 'public key cryptography'.",
        "type": "subjective",
        "answer": "Public key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys, which may be disseminated widely, and private keys, which are known only to the owner. A message encrypted with a public key can only be decrypted with the corresponding private key. It's also used for digital signatures, where a message signed with a private key can be verified by anyone who has the public key. This is the foundation of SSL/TLS and secure communication on the internet.",
        "explanation": "It's a fundamental concept in modern cryptography."
      },
      {
        "id": 280,
        "testId": 7,
        "difficulty": "hard",
        "question": "What is a 'distributed lock'?",
        "type": "subjective",
        "answer": "A distributed lock is a synchronization primitive used in a distributed system to ensure that only one process can access a shared resource at a time, similar to a mutex in a multithreaded application. Implementing a reliable distributed lock is complex due to issues like network partitions and process failures. Systems like ZooKeeper or Redis (with algorithms like Redlock) are often used to implement them.",
        "explanation": "They are necessary for coordinating actions across multiple servers or services."
      },
      {
        "id": 281,
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
        "id": 282,
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
        "id": 283,
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
        "id": 284,
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
        "id": 285,
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
        "id": 286,
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
        "id": 287,
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
        "id": 288,
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
        "id": 289,
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
        "id": 290,
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
        "id": 291,
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
        "id": 292,
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
        "id": 293,
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
        "id": 294,
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
        "id": 295,
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
        "id": 296,
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
        "id": 297,
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
        "id": 298,
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
        "id": 299,
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
        "id": 300,
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
        "id": 301,
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
        "id": 302,
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
        "id": 303,
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
        "id": 304,
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
        "id": 305,
        "testId": 8,
        "difficulty": "expert",
        "question": "Explain the difference between optimistic and pessimistic locking.",
        "type": "subjective",
        "answer": "Pessimistic locking assumes that conflicts are likely and prevents them by acquiring a lock on a resource before modifying it, blocking other transactions. Optimistic locking assumes conflicts are rare. It allows transactions to proceed without locks, but checks for conflicts (e.g., using a version number) before committing. If a conflict is detected, the transaction is rolled back.",
        "explanation": "Pessimistic locking prioritizes consistency over concurrency, while optimistic locking prioritizes concurrency over consistency."
      },
      {
        "id": 306,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is the 'saga' pattern and why is it used in microservices?",
        "type": "subjective",
        "answer": "The saga pattern is a way to manage data consistency across microservices in a distributed transaction. Since a single two-phase commit transaction is not feasible across multiple databases, a saga is a sequence of local transactions. Each local transaction updates the database and publishes a message or event to trigger the next transaction. If a transaction fails, compensating transactions are executed to undo the preceding work.",
        "explanation": "It's a way to achieve transactional guarantees in a loosely coupled, distributed system."
      },
      {
        "id": 307,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is a 'distributed hash table' (DHT)?",
        "type": "subjective",
        "answer": "A DHT is a decentralized distributed system that provides a lookup service similar to a hash table. Key-value pairs are stored across a network of participating nodes. Each node is responsible for a portion of the keys. When a lookup is performed, the system uses a consistent hashing algorithm to determine which node holds the key, allowing for efficient lookups without a central coordinator.",
        "explanation": "DHTs are fundamental to many peer-to-peer systems like BitTorrent."
      },
      {
        "id": 308,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is 'backpressure' in reactive systems?",
        "type": "subjective",
        "answer": "Backpressure is a mechanism that allows a consumer of a data stream to signal to the producer that it is overwhelmed and needs the rate of data production to slow down. This prevents the consumer from being flooded with data it cannot process, which could lead to buffer overflows and system instability. It's a form of flow control in asynchronous systems.",
        "explanation": "Reactive stream libraries like RxJS or Project Reactor have built-in support for handling backpressure."
      },
      {
        "id": 309,
        "testId": 8,
        "difficulty": "expert",
        "question": "How does a 'circuit breaker' pattern work?",
        "type": "subjective",
        "answer": "A circuit breaker is a design pattern that wraps a protected function call in a state machine. It monitors for failures and, if they exceed a certain threshold, it 'trips' the circuit, causing subsequent calls to fail immediately without attempting the operation. After a timeout period, the circuit goes into a 'half-open' state, allowing a trial request. If that succeeds, the circuit closes; if it fails, the timeout period restarts.",
        "explanation": "This prevents a client from repeatedly trying to call a service that is known to be failing, which can prevent cascading failures."
      },
      {
        "id": 310,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is 'event sourcing'?",
        "type": "subjective",
        "answer": "Event sourcing is an architectural pattern where all changes to application state are stored as a sequence of immutable events. Instead of storing the current state of an entity, you store the log of events that led to that state. The current state can be reconstructed at any time by replaying the events. This provides a full audit log, makes it easier to debug issues, and allows for temporal queries.",
        "explanation": "It's often used in conjunction with CQRS."
      },
      {
        "id": 311,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is 'consistent hashing' and why is it useful?",
        "type": "subjective",
        "answer": "Consistent hashing is a hashing technique where, when a hash table is resized, only a small number of keys need to be remapped on average. Unlike traditional hashing, where a change in the number of buckets causes nearly all keys to be remapped, consistent hashing minimizes this disruption. It's especially useful in distributed systems like caches or databases, where adding or removing a server should not trigger a massive reshuffling of data.",
        "explanation": "It's a key technique for building scalable distributed systems."
      },
      {
        "id": 312,
        "testId": 8,
        "difficulty": "expert",
        "question": "What are the trade-offs of using a 'serverless' architecture?",
        "type": "subjective",
        "answer": "The main benefits of serverless are reduced operational cost (no servers to manage) and pay-per-use pricing. The trade-offs include potential vendor lock-in, difficulties with local testing and debugging, and 'cold start' latency for infrequently used functions. It's also not suitable for long-running, stateful computations.",
        "explanation": "The choice to go serverless depends heavily on the specific workload and application requirements."
      },
      {
        "id": 313,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is 'chaos engineering'?",
        "type": "subjective",
        "answer": "Chaos engineering is the discipline of experimenting on a system in order to build confidence in its capability to withstand turbulent conditions in production. It involves proactively injecting failures (like killing servers, introducing network latency) to find weaknesses before they cause user-facing outages. The goal is to identify and fix systemic weaknesses.",
        "explanation": "Netflix famously pioneered this with their 'Chaos Monkey' tool."
      },
      {
        "id": 314,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is '2-phase commit' (2PC)?",
        "type": "subjective",
        "answer": "Two-phase commit is a distributed algorithm that coordinates all the processes that participate in a distributed atomic transaction on whether to commit or abort. It has a 'prepare' phase, where a coordinator asks all participants if they are ready to commit, and a 'commit' phase, where, if all participants agreed, the coordinator tells them to commit; otherwise, it tells them to abort. It ensures atomicity but is slow and has blocking issues if the coordinator fails.",
        "explanation": "It's a classic but often problematic approach to distributed transactions."
      },
      {
        "id": 315,
        "testId": 8,
        "difficulty": "expert",
        "question": "Explain the CAP theorem.",
        "type": "subjective",
        "answer": "The CAP theorem states that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency (every read gets the most recent write), Availability (every request gets a non-error response), and Partition Tolerance (the system works despite network partitions). In a real-world distributed system, network partitions are a fact of life, so the trade-off is always between consistency and availability.",
        "explanation": "This is a fundamental principle guiding the design of all distributed systems."
      },
      {
        "id": 316,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is a 'log-structured merge-tree' (LSM-Tree)?",
        "type": "subjective",
        "answer": "An LSM-Tree is a data structure optimized for write-heavy workloads. Writes are first added to an in-memory table (memtable). When the memtable is full, it's flushed to disk as a sorted, immutable file called an SSTable. Over time, these SSTables are merged in the background (compaction) to remove duplicate or deleted data. This approach avoids slow, random disk I/O for writes, making it very performant for write-heavy systems like NoSQL databases.",
        "explanation": "Databases like Cassandra, LevelDB, and RocksDB are based on LSM-Trees."
      },
      {
        "id": 317,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is 'mTLS' (Mutual TLS)?",
        "type": "subjective",
        "answer": "Mutual TLS is an authentication method where both parties in a network connection, the client and the server, authenticate each other's identity using X.509 certificates. This is in contrast to standard TLS, where only the client verifies the server's certificate. mTLS is commonly used to secure communication between microservices within a trusted environment, ensuring that only authorized services can communicate with each other.",
        "explanation": "It provides strong, certificate-based authentication for service-to-service communication."
      },
      {
        "id": 318,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is 'Raft' consensus algorithm?",
        "type": "subjective",
        "answer": "Raft is a consensus algorithm designed to be more understandable than Paxos. It's used to manage a replicated log in a cluster of nodes. It works by electing a leader, which is responsible for managing the log and replicating it to follower nodes. If the leader fails, a new leader is elected. This ensures that all nodes agree on the sequence of operations, providing fault tolerance and consistency.",
        "explanation": "It's used in systems like etcd (Kubernetes's database) and Consul."
      },
      {
        "id": 319,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is 'CQRS' pattern?",
        "type": "subjective",
        "answer": "CQRS (Command Query Responsibility Segregation) is an architectural pattern that separates the model for reading data (Query) from the model for updating data (Command). This means you can have a highly normalized schema for writes to ensure consistency, and a denormalized, optimized schema for reads to improve performance. It's often used with event sourcing.",
        "explanation": "This separation allows for more flexibility and optimization of the read and write sides of a system."
      },
      {
        "id": 320,
        "testId": 8,
        "difficulty": "expert",
        "question": "What is a 'distributed transaction'?",
        "type": "subjective",
        "answer": "A distributed transaction is a transaction that affects several distinct resources, such as databases or message queues, which may be spread across multiple physical servers. The challenge is to ensure atomicity—that all parts of the transaction succeed, or all of them fail. This is difficult to achieve efficiently and reliably, and patterns like Sagas or protocols like Two-Phase Commit are used to manage them.",
        "explanation": "They are a notoriously difficult problem in distributed systems."
      }
  ],
  'full-stack': [
    // Questions for full-stack...
    // Test 1: 5 Questions (3 MCQ, 2 Subjective) - Easy
    {
        id: 321,
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
        id: 322,
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
        id: 323,
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
        id: 324,
        testId: 1,
        difficulty: 'easy',
        question: "What is an API and why is it important in a full-stack application?",
        type: 'subjective',
        answer: "An API (Application Programming Interface) is a contract that allows the frontend and backend to communicate. The backend exposes endpoints (URLs) that the frontend can call to fetch, create, update, or delete data. This separation allows the frontend and backend to be developed and scaled independently.",
        explanation: 'The API is the glue that connects the client-side and server-side parts of an application.'
    },
    {
        id: 325,
        testId: 1,
        difficulty: 'easy',
        question: "Briefly describe the roles of HTML, CSS, and JavaScript in the frontend.",
        type: 'subjective',
        answer: "HTML (HyperText Markup Language) provides the fundamental structure and content of a web page. CSS (Cascading Style Sheets) is used to style that content, controlling its layout, colors, and fonts. JavaScript is used to make the page interactive, allowing it to respond to user actions and dynamically change content.",
        explanation: 'Think of HTML as the skeleton, CSS as the clothes, and JavaScript as the muscles and brain.'
    },
     // Test 2: 10 Questions (6 MCQ, 4 Subjective) - Easy
     {
        id: 326,
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
        id: 327,
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
        id: 328,
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
        id: 329,
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
        id: 330,
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
        id: 331,
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
        id: 332,
        testId: 2,
        difficulty: 'easy',
        question: "What is the difference between the frontend and the backend?",
        type: 'subjective',
        answer: "The frontend is the part of the application that the user interacts with directly, typically running in the web browser. It's responsible for the user interface and user experience. The backend is the server-side of the application, responsible for business logic, database interactions, and authentication. It processes requests from the frontend and sends back data.",
        explanation: 'The frontend is the "presentation layer," while the backend is the "data access layer."'
    },
    {
        id: 333,
        testId: 2,
        difficulty: 'easy',
        question: "Why is it a bad practice to store sensitive information like API keys in frontend code?",
        type: 'subjective',
        answer: "Frontend code (HTML, CSS, JavaScript) is sent to and executed in the user's browser. This means anyone can view the source code and see any sensitive information embedded in it. API keys and other secrets should always be kept on the backend, which is a secure, controlled environment.",
        explanation: 'Frontend code is public; backend code is private.'
    },
    {
        id: 334,
        testId: 2,
        difficulty: 'easy',
        question: "What is a REST API?",
        type: 'subjective',
        answer: "A REST (Representational State Transfer) API is an architectural style for designing the communication between the frontend and backend. It uses standard HTTP methods (like GET, POST, PUT, DELETE), is stateless (each request is independent), and operates on resources identified by URLs (e.g., `/api/users/123`).",
        explanation: 'It is the most common architectural style for building web APIs.'
    },
    {
        id: 335,
        testId: 2,
        difficulty: 'easy',
        question: "What is a 'database' and what is its role in a full-stack application?",
        type: 'subjective',
        answer: "A database is an organized collection of data used to store and manage application information persistently. In a full-stack application, the backend server interacts with the database to store new user data, retrieve information for the frontend, update records, and delete data as needed. It's the long-term memory of the application.",
        explanation: 'Without a database, any data would be lost as soon as the server restarts.'
    },
  ],
  'next-js': [
    {
      "id": 1001,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is Next.js?",
      "type": "mcq",
      "options": [
        "A JavaScript library for building user interfaces",
        "A React framework for production",
        "A backend framework for Node.js",
        "A CSS framework"
      ],
      "answer": "A React framework for production",
      "explanation": "Next.js is a framework built on top of React, providing features like server-side rendering, static site generation, and file-based routing out of the box."
    },
    {
      "id": 1002,
      "testId": 1,
      "difficulty": "easy",
      "question": "How do you create a new page in Next.js using the App Router?",
      "type": "mcq",
      "options": [
        "Create a file in the `pages` directory",
        "Create a `page.tsx` file inside a new folder in the `app` directory",
        "Add a route to a configuration file",
        "Create a component and register it as a page"
      ],
      "answer": "Create a `page.tsx` file inside a new folder in the `app` directory",
      "explanation": "The App Router uses a file-system based routing system where folders define route segments and `page.tsx` files define the UI for that route."
    },
    {
      "id": 1003,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which component is used for client-side navigation between pages in Next.js?",
      "type": "mcq",
      "options": ["<a href='/...'>", "<Link href='/...'>", "<Route to='/...'>", "<Navigate to='/...'>"],
      "answer": "<Link href='/...'>",
      "explanation": "The `<Link>` component from `next/link` enables fast, client-side transitions between routes without a full page reload."
    },
    {
      "id": 1004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a Server Component in Next.js?",
      "type": "subjective",
      "answer": "A Server Component is a React component that runs exclusively on the server. It can directly access backend resources like databases or file systems and is never sent to the client's browser. This reduces the amount of JavaScript sent to the client, improving performance.",
      "explanation": "By default, all components in the Next.js App Router are Server Components."
    },
    {
      "id": 1005,
      "testId": 1,
      "difficulty": "easy",
      "question": "How do you make a component a Client Component in Next.js?",
      "type": "subjective",
      "answer": "To make a component a Client Component, you add the `'use client'` directive at the very top of the file. This tells Next.js to send the component's JavaScript to the client, allowing it to use state, effects, and browser-only APIs.",
      "explanation": "Client Components are necessary for any interactive UI elements."
    }
  ],
  java: [
    {
      "id": 2001,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the main method in Java?",
      "type": "mcq",
      "options": [
        "The first method defined in a class",
        "A method that must be named 'start'",
        "The entry point for any Java application",
        "A method for mathematical calculations"
      ],
      "answer": "The entry point for any Java application",
      "explanation": "The Java Virtual Machine (JVM) starts execution by looking for and calling the `public static void main(String[] args)` method."
    },
    {
      "id": 2002,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which keyword is used to define a class in Java?",
      "type": "mcq",
      "options": ["class", "object", "struct", "define"],
      "answer": "class",
      "explanation": "The `class` keyword is used to declare a new class, which is a blueprint for creating objects."
    },
    {
      "id": 2003,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which of these is a primitive data type in Java?",
      "type": "mcq",
      "options": ["String", "Array", "int", "Object"],
      "answer": "int",
      "explanation": "Java has 8 primitive types: byte, short, int, long, float, double, boolean, and char. `String` is a class, not a primitive."
    },
    {
      "id": 2004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the difference between `==` and `.equals()` for comparing objects in Java?",
      "type": "subjective",
      "answer": "The `==` operator compares object references, checking if two variables point to the exact same object in memory. The `.equals()` method, by default, also does this. However, it is often overridden in classes (like `String`) to compare the actual content or state of the objects to see if they are logically equivalent.",
      "explanation": "For objects, you almost always want to use `.equals()` to compare for logical equality."
    },
    {
      "id": 2005,
      "testId": 1,
      "difficulty": "easy",
      "question": "What are the three main concepts of Object-Oriented Programming (OOP)?",
      "type": "subjective",
      "answer": "The three core concepts of OOP are Encapsulation (bundling data and methods that operate on the data into a single unit, or class), Inheritance (allowing a new class to inherit properties and methods from an existing class), and Polymorphism (allowing an object to take on many forms, often through method overriding or interfaces).",
      "explanation": "These principles help create modular, reusable, and maintainable code."
    }
  ],
  python: [
    {
      "id": 3001,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which data type is used to store a sequence of characters in Python?",
      "type": "mcq",
      "options": ["char", "String", "str", "character"],
      "answer": "str",
      "explanation": "In Python, strings are represented by the `str` class."
    },
    {
      "id": 3002,
      "testId": 1,
      "difficulty": "easy",
      "question": "How do you start a single-line comment in Python?",
      "type": "mcq",
      "options": ["//", "/*", "#", "<!--"],
      "answer": "#",
      "explanation": "The hash symbol (`#`) is used to start a comment that lasts until the end of the line."
    },
    {
      "id": 3003,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which of the following is used to define a function in Python?",
      "type": "mcq",
      "options": ["function", "def", "fun", "define"],
      "answer": "def",
      "explanation": "The `def` keyword is used to start a function definition."
    },
    {
      "id": 3004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the difference between a list and a tuple in Python?",
      "type": "subjective",
      "answer": "The main difference is that lists are mutable, meaning their elements can be changed, added, or removed after creation. Tuples are immutable, meaning they cannot be modified once they are created. Lists are defined with square brackets `[]` while tuples use parentheses `()`.",
      "explanation": "Use tuples for data that should not change, and lists for collections that you intend to modify."
    },
    {
      "id": 3005,
      "testId": 1,
      "difficulty": "easy",
      "question": "How do you get the number of items in a list in Python?",
      "type": "subjective",
      "answer": "You can get the number of items in a list by using the built-in `len()` function. For example, if you have a list named `my_list`, you would call `len(my_list)` to get its length.",
      "explanation": "The `len()` function works on any sequence or collection type, not just lists."
    }
  ],
  'mern': [
    {
      "id": 4001,
      "testId": 1,
      "difficulty": "easy",
      "question": "What does MERN stand for?",
      "type": "mcq",
      "options": [
        "MySQL, Express, React, Node.js",
        "MongoDB, Express, React, Node.js",
        "MongoDB, Ember, React, Node.js",
        "MariaDB, Express, Redux, Node.js"
      ],
      "answer": "MongoDB, Express, React, Node.js",
      "explanation": "MERN is a popular full-stack technology stack composed of MongoDB, Express.js, React, and Node.js."
    },
    {
      "id": 4002,
      "testId": 1,
      "difficulty": "easy",
      "question": "In the MERN stack, which component is the database?",
      "type": "mcq",
      "options": ["Express", "React", "Node.js", "MongoDB"],
      "answer": "MongoDB",
      "explanation": "MongoDB is a NoSQL, document-oriented database used to store application data in a JSON-like format."
    },
    {
      "id": 4003,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which part of the MERN stack is a frontend library for building user interfaces?",
      "type": "mcq",
      "options": ["MongoDB", "Express", "React", "Node.js"],
      "answer": "React",
      "explanation": "React is a JavaScript library used to build the client-side user interface of a MERN application."
    },
    {
      "id": 4004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the role of Express.js in the MERN stack?",
      "type": "subjective",
      "answer": "Express.js is a backend web application framework for Node.js. Its role is to build the server-side application, create the REST API that the React frontend consumes, and handle HTTP requests and routing.",
      "explanation": "Express provides the structure and tools for building the API and server logic."
    },
    {
      "id": 4005,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the role of Node.js in the MERN stack?",
      "type": "subjective",
      "answer": "Node.js is the JavaScript runtime environment. It allows the Express.js framework to run on the server, executing JavaScript code outside of a web browser. It provides the foundation for the entire backend of the MERN stack.",
      "explanation": "Node.js is what makes it possible to use JavaScript for both the frontend and backend."
    }
  ],
  'c-plus-plus': [
    {
      "id": 5001,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which keyword is used to define a variable that cannot be modified in C++?",
      "type": "mcq",
      "options": ["static", "final", "const", "let"],
      "answer": "const",
      "explanation": "The `const` keyword specifies that a variable's value is constant and tells the compiler to prevent the programmer from modifying it."
    },
    {
      "id": 5002,
      "testId": 1,
      "difficulty": "easy",
      "question": "How do you declare a pointer in C++?",
      "type": "mcq",
      "options": [
        "int* p;",
        "pointer p;",
        "int& p;",
        "int p[];"
      ],
      "answer": "int* p;",
      "explanation": "An asterisk (`*`) is used after the data type to declare a pointer, which stores the memory address of another variable."
    },
    {
      "id": 5003,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the purpose of the `#include` directive in C++?",
      "type": "mcq",
      "options": [
        "To compile the code",
        "To declare a variable",
        "To include the contents of another file, like a header file, into the current source file",
        "To define a function"
      ],
      "answer": "To include the contents of another file, like a header file, into the current source file",
      "explanation": "It's a preprocessor directive that is used to include standard library headers (e.g., `<iostream>`) or custom header files."
    },
    {
      "id": 5004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is the difference between a class and an object in C++?",
      "type": "subjective",
      "answer": "A class is a blueprint or a template for creating objects. It defines a set of properties (data members) and methods (member functions). An object is an instance of a class. It is a concrete entity created from the class blueprint, with its own state and behavior.",
      "explanation": "A class is the definition, while an object is a tangible realization of that definition."
    },
    {
      "id": 5005,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is a reference in C++?",
      "type": "subjective",
      "answer": "A reference is an alias or an alternative name for an existing variable. It is declared using an ampersand (`&`). Unlike a pointer, a reference must be initialized when it is declared and cannot be changed to refer to another variable. Any changes made through the reference affect the original variable.",
      "explanation": "References provide a way to pass arguments to functions by reference, avoiding the overhead of copying large objects."
    }
  ],
  devops: [
    {
      "id": 6001,
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
      "id": 6002,
      "testId": 1,
      "difficulty": "easy",
      "question": "What does 'CI' in CI/CD stand for?",
      "type": "mcq",
      "options": ["Continuous Integration", "Code Integration", "Continuous Input", "Code Input"],
      "answer": "Continuous Integration",
      "explanation": "Continuous Integration is the practice of frequently merging all developers' working copies to a shared mainline several times a day."
    },
    {
      "id": 6003,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which of the following is a popular CI/CD tool?",
      "type": "mcq",
      "options": ["Docker", "Kubernetes", "Jenkins", "Ansible"],
      "answer": "Jenkins",
      "explanation": "Jenkins is a widely used open-source automation server for building, testing, and deploying software."
    },
    {
      "id": 6004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is Infrastructure as Code (IaC)?",
      "type": "subjective",
      "answer": "Infrastructure as Code is the practice of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Tools like Terraform, Ansible, or AWS CloudFormation are used to define infrastructure in code.",
      "explanation": "IaC allows infrastructure to be versioned, tested, and automated, just like application code."
    },
    {
      "id": 6005,
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
      "id": 7001,
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
      "id": 7002,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which of the following is a classification algorithm?",
      "type": "mcq",
      "options": ["Linear Regression", "K-Means Clustering", "Logistic Regression", "Principal Component Analysis"],
      "answer": "Logistic Regression",
      "explanation": "Logistic Regression is used to predict a categorical outcome (e.g., yes/no, true/false). Linear Regression is for continuous values, and K-Means and PCA are unsupervised algorithms."
    },
    {
      "id": 7003,
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
      "id": 7004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is 'overfitting' in machine learning?",
      "type": "subjective",
      "answer": "Overfitting occurs when a machine learning model learns the training data too well, including its noise and random fluctuations. As a result, the model performs poorly on new, unseen data because it has failed to generalize. It has high variance and low bias.",
      "explanation": "Overfitting is like memorizing the answers to a test instead of learning the concepts."
    },
    {
      "id": 7005,
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
      "id": 8001,
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
      "id": 8002,
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
      "id": 8003,
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
      "id": 8004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is 'training data' in machine learning?",
      "type": "subjective",
      "answer": "Training data is the dataset used to train a machine learning model. The model learns to find patterns, make predictions, or make decisions by analyzing this data. For supervised learning, the training data includes both the input features and the correct output labels.",
      "explanation": "The quality and quantity of training data are crucial for a model's performance."
    },
    {
      "id": 8005,
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
      "id": 9001,
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
      "id": 9002,
      "testId": 1,
      "difficulty": "easy",
      "question": "What does 'IaaS' stand for?",
      "type": "mcq",
      "options": ["Infrastructure as a Service", "Internet as a Service", "Integration as a Service", "Infrastructure as a Standard"],
      "answer": "Infrastructure as a Service",
      "explanation": "IaaS is a cloud computing model where a provider hosts the fundamental infrastructure components, such as virtual machines, storage, and networking."
    },
    {
      "id": 9003,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which of the following is a major benefit of cloud computing?",
      "type": "mcq",
      "options": ["High upfront cost", "Slow deployment", "Elasticity and Scalability", "Limited global reach"],
      "answer": "Elasticity and Scalability",
      "explanation": "The cloud allows you to scale your resources up or down easily to meet changing demands, and you only pay for what you use."
    },
    {
      "id": 9004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What are the three main service models of cloud computing?",
      "type": "subjective",
      "answer": "The three main service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS provides basic computing resources, PaaS provides a platform for developers to build applications, and SaaS provides complete software applications over the internet.",
      "explanation": "Each model represents a different level of abstraction and management by the cloud provider."
    },
    {
      "id": 9005,
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
      "id": 10001,
      "testId": 1,
      "difficulty": "easy",
      "question": "What are the two primary mobile operating systems today?",
      "type": "mcq",
      "options": ["iOS and Android", "Windows Phone and BlackBerry OS", "iOS and Symbian", "Android and Windows Phone"],
      "answer": "iOS and Android",
      "explanation": "iOS (by Apple) and Android (by Google) dominate the mobile OS market."
    },
    {
      "id": 10002,
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
      "id": 10003,
      "testId": 1,
      "difficulty": "easy",
      "question": "Which programming language is officially supported by Google for native Android development?",
      "type": "mcq",
      "options": ["Java", "Swift", "Kotlin", "C#"],
      "answer": "Kotlin",
      "explanation": "While Java is still used, Kotlin is now Google's recommended language for Android development."
    },
    {
      "id": 10004,
      "testId": 1,
      "difficulty": "easy",
      "question": "What is Xcode?",
      "type": "subjective",
      "answer": "Xcode is the integrated development environment (IDE) provided by Apple for developing software for macOS, iOS, iPadOS, watchOS, and tvOS. It includes a suite of tools for writing, compiling, debugging, and testing applications, primarily in Swift or Objective-C.",
      "explanation": "It is the primary tool for any iOS developer."
    },
    {
      "id": 10005,
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
        id: 11001,
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
        id: 11002,
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
        id: 11003,
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
        id: 11004,
        testId: 1,
        difficulty: 'easy',
        question: "What is the principle of 'least privilege'?",
        type: 'subjective',
        answer: "The principle of least privilege requires that a user or process should only be given the minimum levels of access – or permissions – needed to perform its job functions. For example, a user who only needs to read data should not be given permissions to write or delete it.",
        explanation: "This principle helps to limit the damage that can be caused by an accident, error, or malicious attack."
    },
    {
        id: 11005,
        testId: 1,
        difficulty: 'easy',
        question: "What is a firewall?",
        type: 'subjective',
        answer: "A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules. It acts as a barrier between a trusted internal network and an untrusted external network, such as the Internet.",
        explanation: "Firewalls are a fundamental component of network security."
    }
  ]
};

