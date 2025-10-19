
export type Question = {
  id: number;
  question: string;
  type: 'mcq' | 'subjective';
  options?: string[];
  answer: string;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  testId: number;
};

export const questions: Record<string, Question[]> = {
  frontend: [
    // Test 1 (Easy - 5 questions: 3 MCQ, 2 Subjective)
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
      question: "Which JavaScript keyword is used to declare a variable that can be reassigned?",
      type: 'mcq',
      options: ['const', 'let', 'var', 'All of the above'],
      answer: 'let',
      explanation: '`let` allows you to declare variables that are limited to the scope of a block statement, and can be reassigned. `var` is function-scoped. `const` cannot be reassigned.'
    },
    {
      id: 4,
      testId: 1,
      difficulty: 'easy',
      question: "What is the purpose of the `alt` attribute on an `<img>` tag?",
      type: 'subjective',
      answer: "The `alt` attribute provides alternative text for an image if it cannot be displayed. It's crucial for accessibility, allowing screen readers to describe the image to visually impaired users, and is also used by search engines.",
      explanation: "Good `alt` text is important for SEO and accessibility."
    },
    {
      id: 5,
      testId: 1,
      difficulty: 'easy',
      question: "What is the Box Model in CSS?",
      type: 'subjective',
      answer: "The CSS box model is a box that wraps around every HTML element. It consists of: content, padding, border, and margin. It defines how elements are sized and spaced.",
      explanation: "It's a foundational concept for layout and spacing on the web."
    },

    // Test 2 (Easy-Medium - 10 questions: 6 MCQ, 4 Subjective)
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
      difficulty: 'medium',
      question: "What is the difference between `==` and `===` in JavaScript?",
      type: 'subjective',
      answer: "The `==` operator performs type coercion before comparison (loose equality), while the `===` operator (strict equality) checks for both value and type equality without coercion.",
      explanation: "It is generally recommended to use `===` to avoid unexpected bugs from type coercion."
    },
    {
      id: 10,
      testId: 2,
      difficulty: 'medium',
      question: "What is a 'closure' in JavaScript?",
      type: 'subjective',
      answer: "A closure is a function that has access to its outer function's scope even after the outer function has returned. It 'closes over' the variables from its lexical scope.",
      explanation: "Closures are a powerful and fundamental concept in JavaScript."
    },
    {
      id: 11,
      testId: 2,
      difficulty: 'medium',
      question: "What does the `position: relative;` property do in CSS?",
      type: 'subjective',
      answer: "It positions an element relative to its normal position. You can then use `top`, `right`, `bottom`, and `left` properties to offset it. It also creates a new stacking context for `absolute` positioned child elements.",
      explanation: "It's a key property for controlling layout."
    },
    {
      id: 12,
      testId: 2,
      difficulty: 'medium',
      question: "In the context of Flexbox, what does `justify-content` control?",
      type: 'mcq',
      options: ['Alignment along the cross axis', 'Alignment along the main axis', 'The spacing between flex lines', 'The size of the flex items'],
      answer: 'Alignment along the main axis',
      explanation: '`justify-content` defines how the browser distributes space between and around content items along the main-axis of a flex container.'
    },
    {
      id: 13,
      testId: 2,
      difficulty: 'medium',
      question: "What is event bubbling?",
      type: 'subjective',
      answer: "Event bubbling is a type of event propagation where an event first triggers on the innermost target element, and then successively on its ancestors (parents) in the DOM tree until it reaches the root document object.",
      explanation: "Understanding event propagation (bubbling and capturing) is key for handling complex user interactions."
    },
     {
      id: 14,
      testId: 2,
      difficulty: 'medium',
      question: "Which of the following is a hook in React?",
      type: 'mcq',
      options: ['render()', 'useState()', 'componentDidMount()', 'constructor()'],
      answer: 'useState()',
      explanation: '`useState` is a React Hook that lets you add state to functional components. The others are part of class component lifecycle methods or syntax.'
    },
    {
      id: 15,
      testId: 2,
      difficulty: 'medium',
      question: "What is the Virtual DOM?",
      type: 'mcq',
      options: ['A direct copy of the HTML DOM', 'A JavaScript object representing the DOM', 'A browser feature for faster rendering', 'A type of shadow DOM'],
      answer: 'A JavaScript object representing the DOM',
      explanation: "The Virtual DOM (VDOM) is a programming concept where a virtual representation of a UI is kept in memory and synced with the 'real' DOM by libraries like React. This allows for efficient updates by batching changes and minimizing direct DOM manipulation."
    },
    // Test 3 (Medium - 15 questions)
    { id: 16, testId: 3, difficulty: 'medium', question: "What is the `Promise.all()` method used for?", type: 'subjective', answer: "`Promise.all()` takes an iterable of promises and returns a single Promise that resolves when all of the promises in the iterable have resolved, or rejects with the reason of the first promise that rejects." },
    { id: 17, testId: 3, difficulty: 'medium', question: "What are CSS pseudo-classes?", type: 'subjective', answer: "A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, `:hover`, `:focus`, `:first-child`." },
    { id: 18, testId: 3, difficulty: 'medium', question: "Explain the concept of 'hoisting' in JavaScript.", type: 'subjective', answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. `var` declarations are hoisted and initialized with `undefined`. `let` and `const` are hoisted but not initialized, which leads to a 'Temporal Dead Zone'." },
    { id: 19, testId: 3, difficulty: 'medium', question: "What is the purpose of `useEffect` in React?", type: 'mcq', options: ['To manage component state', 'To handle side effects', 'To render JSX', 'To pass props'], answer: 'To handle side effects' },
    { id: 20, testId: 3, difficulty: 'medium', question: "What is the difference between `null` and `undefined` in JavaScript?", type: 'subjective', answer: "`undefined` means a variable has been declared but has not yet been assigned a value. `null` is an assignment value, representing the intentional absence of any object value." },
    { id: 21, testId: 3, difficulty: 'medium', question: "How does CSS Grid Layout differ from Flexbox?", type: 'subjective', answer: "Flexbox is designed for one-dimensional layouts (a row or a column). CSS Grid is designed for two-dimensional layouts (rows and columns at the same time)." },
    { id: 22, testId: 3, difficulty: 'medium', question: "What are React Fragments?", type: 'mcq', options: ['A way to group a list of children without adding extra nodes to the DOM', 'A tool for debugging React components', 'A special type of React component', 'A lifecycle method'], answer: 'A way to group a list of children without adding extra nodes to the DOM' },
    { id: 23, testId: 3, difficulty: 'medium', question: "Explain the `async` and `await` keywords in JavaScript.", type: 'subjective', answer: "`async` functions allow the use of `await` to pause execution and wait for a promise to resolve or reject, making asynchronous code look and behave more like synchronous code." },
    { id: 24, testId: 3, difficulty: 'medium', question: "What is the `BEM` methodology in CSS?", type: 'subjective', answer: "BEM (Block, Element, Modifier) is a naming convention for classes in HTML and CSS. It helps create more readable, maintainable, and reusable components." },
    { id: 25, testId: 3, difficulty: 'medium', question: "What is prop drilling in React and how can you avoid it?", type: 'subjective', answer: "Prop drilling is the process of passing props down through multiple levels of nested components. It can be avoided using state management libraries (like Redux or Zustand) or React's Context API." },
    { id: 26, testId: 3, difficulty: 'medium', question: "Which of the following is used for client-side routing in React?", type: 'mcq', options: ['Node.js', 'Express.js', 'React Router', 'Next.js'], answer: 'React Router' },
    { id: 27, testId: 3, difficulty: 'medium', question: "What is a 'polyfill'?", type: 'subjective', answer: "A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it." },
    { id: 28, testId: 3, difficulty: 'medium', question: "What is the difference between `localStorage` and `sessionStorage`?", type: 'subjective', answer: "`localStorage` stores data with no expiration date, and it persists even when the browser is closed and reopened. `sessionStorage` only stores data for one session (until the browser tab is closed)." },
    { id: 29, testId: 3, difficulty: 'medium', question: "In CSS, what is specificity?", type: 'subjective', answer: "Specificity is the algorithm used by browsers to determine which CSS rule is the most 'specific' and therefore should be applied to an element when multiple conflicting rules exist. It is calculated based on the number of ID, class, and type selectors." },
    { id: 30, testId: 3, difficulty: 'medium', question: "What is tree shaking in the context of JavaScript bundlers?", type: 'mcq', options: ['A debugging technique', 'A process to eliminate dead code', 'A way to visualize the component tree', 'A code formatting tool'], answer: 'A process to eliminate dead code' },

    // Test 4 (Medium - 20 questions)
    { id: 31, testId: 4, difficulty: 'medium', question: "Explain the concept of 'memoization' in React.", type: 'subjective', answer: "Memoization is an optimization technique used to speed up component rendering by caching the results of expensive function calls and returning the cached result when the same inputs occur again. `React.memo` and the `useMemo` hook are used for this." },
    { id: 32, testId: 4, difficulty: 'medium', question: "What is Cross-Site Scripting (XSS)?", type: 'subjective', answer: "XSS is a security vulnerability that allows an attacker to inject malicious scripts into web pages viewed by other users. React automatically escapes JSX content to prevent XSS attacks." },
    { id: 33, testId: 4, difficulty: 'medium', question: "What is the `useCallback` hook in React used for?", type: 'subjective', answer: "`useCallback` returns a memoized version of a callback function that only changes if one of the dependencies has changed. It's useful when passing callbacks to optimized child components that rely on reference equality." },
    { id: 34, testId: 4, difficulty: 'medium', question: "What is a higher-order component (HOC) in React?", type: 'mcq', options: ['A component that renders other components', 'A function that takes a component and returns a new component with additional props or logic', 'A parent component in the component tree', 'Any component that uses hooks'], answer: 'A function that takes a component and returns a new component with additional props or logic' },
    { id: 35, testId: 4, difficulty: 'medium', question: "What is server-side rendering (SSR)?", type: 'subjective', answer: "Server-side rendering is the ability of an application to render the initial page on the server, sending a fully rendered HTML page to the client. This can improve performance and SEO." },
    { id: 36, testId: 4, difficulty: 'medium', question: "What are controlled and uncontrolled components in React?", type: 'subjective', answer: "A controlled component is a form element whose value is controlled by React state. An uncontrolled component is a form element whose value is handled by the DOM itself (usually via a `ref`)." },
    { id: 37, testId: 4, difficulty: 'medium', question: "What is the `useReducer` hook?", type: 'mcq', options: ['An alternative to `useState` for complex state logic', 'A hook for reducing bundle size', 'A hook for performing animations', 'A hook for data fetching'], answer: 'An alternative to `useState` for complex state logic' },
    { id: 38, testId: 4, difficulty: 'medium', question: "What is CORS (Cross-Origin Resource Sharing)?", type: 'subjective', answer: "CORS is a browser security feature that restricts cross-origin HTTP requests initiated from scripts. Servers can opt-in to allow cross-origin requests by including specific HTTP headers." },
    { id: 39, testId: 4, difficulty: 'medium', question: "What are service workers?", type: 'subjective', answer: "Service workers are scripts that run in the background, separate from a web page, enabling features like push notifications and background sync. They are a key part of Progressive Web Apps (PWAs)." },
    { id: 40, testId: 4, difficulty: 'medium', question: "What is the critical rendering path?", type: 'subjective', answer: "The critical rendering path is the sequence of steps the browser goes through to convert HTML, CSS, and JavaScript into pixels on the screen. Optimizing it is key to faster page loads." },
    { id: 41, testId: 4, difficulty: 'medium', question: "What is lazy loading in the context of web performance?", type: 'mcq', options: ['Loading all assets at once', 'Delaying the loading of non-critical resources until they are needed', 'A CSS loading strategy', 'A database query optimization'], answer: 'Delaying the loading of non-critical resources until they are needed' },
    { id: 42, testId: 4, difficulty: 'medium', question: "What is a Web Component?", type: 'subjective', answer: "Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps." },
    { id: 43, testId: 4, difficulty: 'medium', question: "Explain what ARIA attributes are and why they are important.", type: 'subjective', answer: "ARIA (Accessible Rich Internet Applications) attributes are a set of attributes you can add to HTML elements to improve accessibility. They provide additional semantics for screen readers where native HTML is insufficient." },
    { id: 44, testId: 4, difficulty: 'medium', question: "What is the difference between `rem` and `em` units in CSS?", type: 'subjective', answer: "`em` is relative to the font-size of its direct or nearest parent. `rem` (root em) is relative to the font-size of the root element (`html`). `rem` is often preferred for consistency." },
    { id: 45, testId: 4, difficulty: 'medium', question: "What is the `defer` attribute on a `<script>` tag?", type: 'mcq', options: ['It stops the script from executing', 'It executes the script asynchronously as soon as it is downloaded', 'It executes the script after the document has been parsed, but before `DOMContentLoaded`', 'It executes the script before any HTML is parsed'], answer: 'It executes the script after the document has been parsed, but before `DOMContentLoaded`' },
    { id: 46, testId: 4, difficulty: 'hard', question: "Describe the JavaScript event loop.", type: 'subjective', answer: "The event loop is a mechanism that allows Node.js or the browser to perform non-blocking I/O operations. It continuously checks the message queue for new messages and pushes them onto the call stack when the stack is empty." },
    { id: 47, testId: 4, difficulty: 'hard', question: "What are WebSockets?", type: 'subjective', answer: "WebSockets provide a full-duplex communication channel over a single, long-lived TCP connection, allowing for real-time, two-way communication between the client and server." },
    { id: 48, testId: 4, difficulty: 'hard', question: "What is the `useLayoutEffect` hook in React and how does it differ from `useEffect`?", type: 'subjective', answer: "`useLayoutEffect` fires synchronously after all DOM mutations. It's useful for reading layout from the DOM and synchronously re-rendering. `useEffect` runs asynchronously and after a render is painted to the screen." },
    { id: 49, testId: 4, difficulty: 'hard', question: "How does webpack's module federation work?", type: 'subjective', answer: "Module Federation allows a JavaScript application to dynamically load code from another application at runtime. This enables building micro-frontend architectures where different teams can manage their own applications independently." },
    { id: 50, testId: 4, difficulty: 'hard', question: "What is an `IndexedDB` and what are its use cases?", type: 'subjective', answer: "IndexedDB is a low-level API for client-side storage of large amounts of structured data, including files/blobs. It's a transactional database system, ideal for applications that need to work offline or handle large datasets on the client." },

    // Test 5 (Medium-Hard - 25 questions)
    { id: 51, testId: 5, difficulty: 'medium', question: "How would you debounce a function in JavaScript?", type: 'subjective', answer: "Debouncing is a technique to limit the rate at which a function gets called. You would create a wrapper function that uses `setTimeout` to delay execution. If the wrapper is called again before the timeout completes, the previous timeout is cleared and a new one is set." },
    { id: 52, testId: 5, difficulty: 'hard', question: "Explain how `this` keyword works in JavaScript.", type: 'subjective', answer: "The value of `this` depends on the context in which it is called. In a method, it refers to the owner object. In a regular function, it refers to the global object (or `undefined` in strict mode). In an event, it refers to the element that received the event. Arrow functions lexically bind `this` from their parent scope." },
    { id: 53, testId: 5, difficulty: 'hard', question: "What are CSS Custom Properties (Variables) and what are their benefits?", type: 'subjective', answer: "CSS Custom Properties are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the `var()` function (e.g., `color: var(--main-color);`). Benefits include DRY code, easier theming, and dynamic changes via JavaScript." },
    { id: 54, testId: 5, difficulty: 'hard', question: "What is hydration in the context of SSR with React?", type: 'subjective', answer: "Hydration is the process of attaching event listeners and making the static HTML received from the server interactive. React 'hydrates' the server-rendered HTML by building a virtual DOM in memory and attaching the necessary JavaScript logic to the existing markup." },
    { id: 55, testId: 5, difficulty: 'hard', question: "What is the difference between a `Map` and a `WeakMap` in JavaScript?", type: 'subjective', answer: "A `WeakMap` only accepts objects as keys. The references to the keys are held 'weakly', meaning if there are no other references to an object used as a key, it can be garbage collected. A `Map` can have any value (primitive or object) as a key and holds strong references, preventing garbage collection." },
    { id: 56, testId: 5, difficulty: 'hard', question: "What is a `Set` in JavaScript?", type: 'mcq', options: ['A collection of unique values', 'A collection of key/value pairs', 'A sorted list of values', 'An immutable array'], answer: 'A collection of unique values' },
    { id: 57, testId: 5, difficulty: 'hard', question: "Explain event delegation.", type: 'subjective', answer: 'Event delegation is a technique involving adding a single event listener to a parent element to manage events for all of its children. When an event bubbles up from a child, the parent can check the event target and decide what to do. It improves performance by reducing the number of event listeners.'},
    { id: 58, testId: 5, difficulty: 'medium', question: "What is the purpose of the `key` prop in React lists?", type: 'subjective', answer: "Keys help React identify which items have changed, are added, or are removed. Keys should be stable, predictable, and unique to give the elements a stable identity, which helps React optimize rendering by reordering or reusing elements instead of re-creating them." },
    { id: 59, testId: 5, difficulty: 'medium', question: "What is a pure function?", type: 'subjective', answer: 'A pure function is a function that, given the same input, will always return the same output and has no side effects. This makes them predictable, testable, and easier to reason about.'},
    { id: 60, testId: 5, difficulty: 'hard', question: "What is the `z-index` property in CSS used for?", type: 'mcq', options: ['To control the vertical stacking order of elements', 'To set the zoom level of an element', 'To define the font size', 'To create a 3D effect'], answer: 'To control the vertical stacking order of elements'},
    { id: 61, testId: 5, difficulty: 'hard', question: "Explain the concept of 'lifting state up' in React.", type: 'subjective', answer: "Lifting state up is a pattern where you move the shared state from multiple components up to their closest common ancestor. The ancestor then passes the state down to the children via props. This ensures a single source of truth for that state." },
    { id: 62, testId: 5, difficulty: 'medium', question: "What is the `Array.prototype.reduce` method?", type: 'subjective', answer: "The `reduce` method executes a user-supplied 'reducer' callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value." },
    { id: 63, testId: 5, difficulty: 'medium', question: "What are semantic HTML tags?", type: 'subjective', answer: "Semantic HTML tags are tags that define the meaning of the content they contain. Examples include `<header>`, `<footer>`, `<article>`, and `<section>`. They improve accessibility and SEO by providing context to browsers and search engines." },
    { id: 64, testId: 5, difficulty: 'hard', question: "What is the difference between throttling and debouncing?", type: 'subjective', answer: "Debouncing groups a burst of events into one single event at the end of the burst. Throttling ensures that a function is called at most once per specified time period. Throttling is about guaranteeing a constant rate, while debouncing is about waiting for a pause in events." },
    { id: 65, testId: 5, difficulty: 'medium', question: "What is the CSS `display: grid` property used for?", type: 'subjective', answer: "It's the foundation of CSS Grid Layout, a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward." },
    { id: 66, testId: 5, difficulty: 'medium', question: "What does the `...` spread syntax do in JavaScript?", type: 'mcq', options: ['It condenses an array into a single value', 'It expands an iterable (like an array or object) into individual elements', 'It is used for comments', 'It creates a new function'], answer: 'It expands an iterable (like an array or object) into individual elements' },
    { id: 67, testId: 5, difficulty: 'hard', question: "What is a Progressive Web App (PWA)?", type: 'subjective', answer: "A PWA is a web application that uses modern web capabilities to deliver an app-like experience to users. Features include the ability to work offline, be installable on the home screen, and provide push notifications, all thanks to technologies like service workers and web app manifests." },
    { id: 68, testId: 5, difficulty: 'medium', question: "How do you handle asynchronous operations in Redux?", type: 'subjective', answer: "By using middleware like Redux Thunk or Redux Saga. Thunk allows you to write action creators that return a function instead of an action object, which can then perform async logic and dispatch actions. Saga uses ES6 Generators to make async flows easier to manage." },
    { id: 69, testId: 5, difficulty: 'medium', question: "What is the `box-sizing: border-box;` CSS property for?", type: 'subjective', answer: "It tells the browser to account for any border and padding in the values you specify for an element's width and height. By default (`content-box`), width and height only apply to the content, and padding/border are added on top, making layout calculations difficult." },
    { id: 70, testId: 5, difficulty: 'hard', question: "What is a 'memory leak' in JavaScript?", type: 'subjective', answer: "A memory leak occurs when a piece of memory that is no longer needed is not released by the garbage collector. Common causes include un-removed event listeners, uncleared timers, and closures holding references to objects that are no longer in scope." },
    { id: 71, testId: 5, difficulty: 'medium', question: "What is JSX?", type: 'mcq', options: ['A templating language for JavaScript', 'A syntax extension for JavaScript that looks like HTML', 'A CSS preprocessor', 'A database query language'], answer: 'A syntax extension for JavaScript that looks like HTML' },
    { id: 72, testId: 5, difficulty: 'medium', question: "What is a 'responsive design'?", type: 'subjective', answer: "Responsive web design is an approach that makes web pages render well on a variety of devices and window or screen sizes. It typically involves using media queries, flexible grids, and responsive images." },
    { id: 73, testId: 5, difficulty: 'medium', question: "What is the `Array.prototype.map` function?", type: 'subjective', answer: "The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array. It's a fundamental method for transforming data in JavaScript." },
    { id: 74, testId: 5, difficulty: 'hard', question: "What are HTTP cookies?", type: 'subjective', answer: "Cookies are small pieces of data that a server sends to the user's web browser. The browser may store the cookie and send it back to the same server with later requests. They are used for session management, personalization, and tracking." },
    { id: 75, testId: 5, difficulty: 'hard', question: "What is an `AbortController` and when would you use it?", type: 'subjective', answer: "An `AbortController` is a modern browser API that allows you to abort one or more web requests as desired. It is commonly used to cancel `fetch` requests when a component unmounts or when a user performs an action that makes the request irrelevant, preventing race conditions and unnecessary processing." },

    // Test 6 (Hard - 30 questions)
    { id: 76, testId: 6, difficulty: 'hard', question: "How does React's reconciliation algorithm work?", type: 'subjective', answer: "Reconciliation is the process through which React updates the DOM. When a component's state changes, React creates a new virtual DOM tree and compares it ('diffing') with the previous one. It then computes the minimal set of changes needed to update the real DOM, and applies them in a batch." },
    { id: 77, testId: 6, difficulty: 'hard', question: "What are render props in React?", type: 'subjective', answer: "The term 'render prop' refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic." },
    { id: 78, testId: 6, difficulty: 'hard', question: "Explain Content Security Policy (CSP).", type: 'subjective', answer: "CSP is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. It's a browser mechanism that allows you to create a whitelist of sources of trusted content and will only allow content from those sources to be loaded." },
    { id: 79, testId: 6, difficulty: 'hard', question: "What are some performance optimization strategies for a large-scale React application?", type: 'subjective', answer: "Strategies include code splitting using `React.lazy`, memoization with `useMemo` and `useCallback`, windowing large lists with libraries like `react-window`, avoiding unnecessary re-renders with `React.memo`, and proper dependency management in `useEffect`." },
    { id: 80, testId: 6, difficulty: 'hard', question: "Describe how you would implement internationalization (i18n) in a React application.", type: 'subjective', answer: "Implementation usually involves a library like `react-i18next`. You would store translations in JSON files for each language, use a provider to wrap the app, and use a hook (e.g., `useTranslation`) to access the translation function (`t`) and switch languages. The `t` function would take a key and return the appropriate string for the current language." },
    { id: 81, testId: 6, difficulty: 'expert', question: "How would you optimize web font loading?", type: 'subjective', answer: 'Strategies include: 1. Self-hosting fonts to avoid external network requests. 2. Using `font-display: swap` to prevent blocking text rendering. 3. Preloading critical fonts using `<link rel="preload">`. 4. Subsetting fonts to only include the characters you need. 5. Using modern formats like WOFF2.' },
    { id: 82, testId: 6, difficulty: 'hard', question: "What are generator functions in JavaScript?", type: 'subjective', answer: "Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances. They are defined with the `function*` syntax and use the `yield` keyword to pause and return a value. They are fundamental to libraries like Redux Saga." },
    { id: 83, testId: 6, difficulty: 'hard', question: "What is the purpose of the `srcset` attribute on an `<img>` tag?", type: 'subjective', answer: "The `srcset` attribute allows you to define a set of different image sources for the browser to choose from, based on the device's resolution and screen size. This enables serving high-resolution images to retina displays while sending smaller images to lower-resolution devices, improving performance." },
    { id: 84, testId: 6, difficulty: 'hard', question: "What is CSS Containment?", type: 'subjective', answer: "The CSS `contain` property allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree. This allows the browser to optimize rendering by not needing to re-layout or re-paint content outside the contained element when its contents change." },
    { id: 85, testId: 6, difficulty: 'hard', question: "Explain the different values for the `display` property in CSS.", type: 'mcq', options: ['block, inline, grid, flex', 'all of these', 'none of these', 'only block and inline'], answer: 'all of these' },
    { id: 86, testId: 6, difficulty: 'expert', question: "What is a JAMstack architecture?", type: 'subjective', answer: "JAMstack (JavaScript, APIs, Markup) is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup. Sites are pre-rendered into static files, served from a CDN, and any dynamic functionality is handled by client-side JavaScript talking to APIs." },
    { id: 87, testId: 6, difficulty: 'hard', question: "What is `requestAnimationFrame` and when is it better than `setTimeout`?", type: 'subjective', answer: "`requestAnimationFrame` tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. It is better for animations because it's optimized by the browser to produce smoother animations, and it pauses when the tab is inactive, saving CPU cycles." },
    { id: 88, testId: 6, difficulty: 'hard', question: "What is WebAssembly (Wasm)?", type: 'subjective', answer: "WebAssembly is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications. It allows running code written in languages like C++ and Rust on the web at near-native speed." },
    { id: 89, testId: 6, difficulty: 'expert', question: "How does HTTP/2 improve performance over HTTP/1.1?", type: 'subjective', answer: "HTTP/2 introduces several key improvements: 1. Multiplexing: Multiple requests can be sent in parallel over a single TCP connection. 2. Header Compression: Reduces the overhead of HTTP headers. 3. Server Push: Allows the server to send resources to the client before the client requests them." },
    { id: 90, testId: 6, difficulty: 'hard', question: "What is an `IntersectionObserver`?", type: 'subjective', answer: "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. It is highly performant and commonly used for lazy-loading images or implementing infinite scrolling." },
    { id: 91, testId: 6, difficulty: 'hard', question: "What are CSS Houdini APIs?", type: 'subjective', answer: "CSS Houdini is a set of low-level APIs that exposes parts of the CSS engine, giving developers the power to extend CSS by creating their own CSS features. This includes the Paint API, Layout API, and Typed OM, allowing for more powerful and performant styling and layout capabilities." },
    { id: 92, testId: 6, difficulty: 'hard', question: "What is the `Proxy` object in JavaScript?", type: 'subjective', answer: "A `Proxy` object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation). It allows you to create a 'trap' for operations on a target object, enabling metaprogramming. It's used by frameworks like Vue.js for reactivity." },
    { id: 93, testId: 6, difficulty: 'expert', question: "How do you prevent CSS style collisions in a large application?", type: 'subjective', answer: "Strategies include: 1. CSS Modules: Scopes class names locally to the component. 2. CSS-in-JS libraries (e.g., Styled Components): Encapsulates styles within the component. 3. BEM Naming Convention: A strict naming methodology to avoid conflicts. 4. Utility-first CSS (e.g., Tailwind CSS): Composes interfaces from low-level utility classes." },
    { id: 94, testId: 6, difficulty: 'hard', question: "What is GraphQL Subscriptions?", type: 'subjective', answer: "GraphQL Subscriptions are a feature that allows a server to send data to its clients when a specific event happens. They are usually implemented with WebSockets and maintain a steady connection to the server, enabling real-time updates." },
    { id: 95, testId: 6, difficulty: 'hard', question: "What is a `Symbol` in JavaScript?", type: 'subjective', answer: "A `Symbol` is a unique and immutable primitive data type. Symbols are often used as keys for object properties to avoid name collisions, as a symbol value is guaranteed to be unique." },
    { id: 96, testId: 6, difficulty: 'expert', question: "What is the `ResizeObserver` API?", type: 'subjective', answer: "The `ResizeObserver` API provides a performant mechanism by which code can monitor an element for changes to its size. It's more efficient than listening to the window's resize event and manually checking element dimensions." },
    { id: 97, testId: 6, difficulty: 'hard', question: "What is the difference between `let`, `const`, and `var`?", type: 'subjective', answer: "`var` is function-scoped and hoisted. `let` and `const` are block-scoped and are not initialized until their definition is evaluated (Temporal Dead Zone). `const` cannot be reassigned, while `let` can." },
    { id: 98, testId: 6, difficulty: 'hard', question: "What is WebRTC?", type: 'subjective', answer: "WebRTC (Web Real-Time Communication) is a technology that enables web applications and sites to capture and optionally stream audio and/or video media, as well as to exchange arbitrary data between browsers without requiring an intermediary. It's used for video chat and peer-to-peer file sharing." },
    { id: 99, testId: 6, difficulty: 'expert', question: "How can you optimize the performance of a CSS animation?", type: 'subjective', answer: "To optimize CSS animations, you should primarily animate properties that do not trigger a re-layout or re-paint. These are `transform` and `opacity`. Animating these can be offloaded to the GPU. Using `will-change` property can also give the browser a hint about upcoming transformations." },
    { id: 100, testId: 6, difficulty: 'hard', question: "What is a 'code splitting'?", type: 'subjective', answer: "Code splitting is a feature supported by bundlers like Webpack and Rollup which can create multiple bundles that can be dynamically loaded at runtime. It's used to create smaller initial bundles and on-demand load code for features that the user needs, improving initial page load time." },
    { id: 101, testId: 6, difficulty: 'hard', question: "What are ES modules?", type: 'subjective', answer: 'ES Modules (ESM) are the official, standardized module system for JavaScript. They use the `import` and `export` statements. They are resolved statically, which allows for optimizations like tree shaking, and have a different loading mechanism than older module systems like CommonJS.' },
    { id: 102, testId: 6, difficulty: 'hard', question: "What is `JSON.stringify` and `JSON.parse`?", type: 'mcq', options: ['Functions for data encryption', 'Functions for converting between JSON strings and JavaScript objects', 'Functions for database queries', 'Functions for creating web components'], answer: 'Functions for converting between JSON strings and JavaScript objects' },
    { id: 103, testId: 6, difficulty: 'expert', question: "What is a 'flame graph' and how is it used for performance profiling?", type: 'subjective', answer: "A flame graph is a visualization of profiled software, allowing the most frequent code-paths to be identified quickly and accurately. Each box represents a function in the stack. The width of the box shows the time it was on the CPU or the number of times it was seen in the samples. It's used to find performance bottlenecks in your code." },
    { id: 104, testId: 6, difficulty: 'hard', question: "What is OAuth 2.0?", type: 'subjective', answer: "OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. It delegates user authentication to the service that hosts the user account, and authorizes third-party applications to access the user account. It does not share password data but instead uses authorization tokens." },
    { id: 105, testId: 6, difficulty: 'expert', question: "Explain the concept of 'islands architecture'.", type: 'subjective', answer: "Islands architecture is a pattern for building websites that aims to reduce the amount of JavaScript shipped to the client by rendering HTML pages on the server and injecting self-contained, interactive components ('islands') into them. This improves site performance by defaulting to zero JavaScript and only adding it where necessary." },

    // Test 7 (Hard - 35 questions)
    { id: 106, testId: 7, difficulty: 'hard', question: "What is an Abstract Syntax Tree (AST)?", type: 'subjective', answer: "An AST is a tree representation of the abstract syntactic structure of source code. Tools like Babel and webpack use ASTs to understand and transform code. For example, Babel parses code into an AST, transforms it (e.g., converting ES6 to ES5), and then generates the transformed code back from the AST." },
    { id: 107, testId: 7, difficulty: 'hard', question: "What are the advantages and disadvantages of micro-frontends?", type: 'subjective', answer: "Advantages: Independent deployments, autonomous teams, technology-agnostic architecture. Disadvantages: Increased complexity in routing and state management, potential for code duplication and larger bundle sizes if not managed properly, and challenges in maintaining a consistent user experience." },
    { id: 108, testId: 7, difficulty: 'hard', question: "What is the purpose of the `useImperativeHandle` hook in React?", type: 'subjective', answer: "`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`. It's used in conjunction with `forwardRef` to expose specific functions from a child component to a parent, rather than the entire component instance." },
    { id: 109, testId: 7, difficulty: 'hard', question: "Explain the concept of 'island architecture'.", type: 'subjective', answer: "Island architecture is a design pattern for web pages where interactive components ('islands') are delivered as isolated, self-contained units on an otherwise static HTML page. This reduces the amount of JavaScript shipped to the client, improving performance. Frameworks like Astro use this pattern." },
    { id: 110, testId: 7, difficulty: 'hard', question: "What is `stale-while-revalidate` caching strategy?", type: 'subjective', answer: "`stale-while-revalidate` is a caching strategy where a cached response is served immediately (stale) while a new request is made in the background to update the cache for future requests. This provides a fast response time while keeping data fresh." },
    { id: 111, testId: 7, difficulty: 'expert', question: "What are some advanced SVG optimization techniques?", type: 'subjective', answer: "Advanced techniques include: 1. Running the SVG through an optimizer tool like SVGO. 2. Manually removing unnecessary metadata and groups. 3. Simplifying paths and shapes. 4. Using `<defs>` and `<use>` for repeated elements. 5. Converting strokes to fills where possible." },
    { id: 112, testId: 7, difficulty: 'hard', question: "Describe the 'Composite' design pattern and give a frontend example.", type: 'subjective', answer: "The Composite pattern lets you compose objects into tree structures to represent part-whole hierarchies. A frontend example is a UI component library where simple components (like Button) and complex components (like Form, which contains Buttons and Inputs) are treated uniformly. Both can have a `render()` method." },
    { id: 113, testId: 7, difficulty: 'hard', question: "What is `Intl` object in JavaScript?", type: 'subjective', answer: "The `Intl` object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. It's essential for building applications that support multiple languages and regions." },
    { id: 114, testId: 7, difficulty: 'hard', question: "What are some use cases for Web Workers?", type: 'subjective', answer: "Web Workers are used to run scripts in a background thread, separate from the main execution thread. This is ideal for long-running, computationally intensive tasks like complex calculations, processing large data sets, or cryptography, as it prevents the UI from freezing." },
    { id: 115, testId: 7, difficulty: 'hard', question: "What is the CSS Paint API?", type: 'subjective', answer: "The CSS Paint API (part of Houdini) allows developers to programmatically generate an image whenever a CSS property expects an image. This can be used to create custom patterns, gradients, and other visual effects directly in CSS with JavaScript logic." },
    { id: 116, testId: 7, difficulty: 'expert', question: "What is 'Time to First Byte' (TTFB)?", type: 'mcq', options: ['The time it takes for the browser to receive the first byte of a response from the server', 'The total time to load a page', 'The time to execute the first JavaScript file', 'The time to render the first pixel'], answer: 'The time it takes for the browser to receive the first byte of a response from the server' },
    { id: 117, testId: 7, difficulty: 'hard', question: "What is a 'BFF' (Backend for Frontend) pattern?", type: 'subjective', answer: "A BFF is a server-side component that is tailored to the needs of a specific frontend application. It acts as an intermediary between the client and downstream microservices, aggregating data and providing a simplified API for the frontend. This is useful when you have multiple client experiences (e.g., mobile, web) with different data requirements." },
    { id: 118, testId: 7, difficulty: 'hard', question: "What is `OffscreenCanvas`?", type: 'subjective', answer: "`OffscreenCanvas` is a browser API that provides a canvas that can be rendered off-screen, decoupled from the DOM. It allows for canvas rendering to be performed in a Web Worker, preventing heavy rendering tasks from blocking the main thread and making the UI more responsive." },
    { id: 119, testId: 7, difficulty: 'expert', question: "How can you mitigate 'Cumulative Layout Shift' (CLS)?", type: 'subjective', answer: "To mitigate CLS, you should: 1. Always include `width` and `height` size attributes on your images and video elements. 2. Reserve space for ads and embeds. 3. Avoid inserting new content above existing content. 4. Preload fonts to avoid layout shifts when they load." },
    { id: 120, testId: 7, difficulty: 'hard', question: "What is the `Same-Origin Policy` (SOP)?", type: 'subjective', answer: "The Same-Origin Policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin. It helps isolate potentially malicious documents, reducing possible attack vectors." },
    { id: 121, testId: 7, difficulty: 'hard', question: "What is the `yield` keyword in JavaScript?", type: 'mcq', options: ['To pause and resume a generator function', 'To return a value from a standard function', 'To create a new thread', 'To declare a variable'], answer: 'To pause and resume a generator function' },
    { id: 122, testId: 7, difficulty: 'expert', question: "What is a 'source map'?", type: 'subjective', answer: "A source map is a file that maps from the transformed source code (e.g., minified or transpiled) back to the original source code. This allows developers to debug their original code in the browser, even though the browser is executing the transformed version." },
    { id: 123, testId: 7, difficulty: 'hard', question: "What are CSS logical properties?", type: 'subjective', answer: "Logical properties (e.g., `margin-inline-start`, `padding-block-end`) are a module of CSS that provides properties for layout that are direction- and writing-mode-aware. Instead of `left` or `right`, you use `start` or `end`, which adapt to different writing modes like right-to-left languages." },
    { id: 124, testId: 7, difficulty: 'hard', question: "What is the difference between `let` and `const` in terms of memory?", type: 'subjective', answer: "There is no significant difference in terms of memory allocation. The difference is in assignment. `const` prevents re-assignment of the variable identifier. However, if the variable is an object or array, its contents can still be mutated." },
    { id: 125, testId: 7, difficulty: 'hard', question: "What are some techniques for accessibility (a11y) beyond `alt` text?", type: 'subjective', answer: "Other techniques include: using semantic HTML, ensuring proper color contrast, managing focus for keyboard navigation, using ARIA attributes to add context for screen readers, and providing text alternatives for all non-text content." },
    { id: 126, testId: 7, difficulty: 'expert', question: "What is 'Incremental Static Regeneration' (ISR) in Next.js?", type: 'subjective', answer: "ISR allows you to update static content after you’ve built your site. It enables you to use static-generation on a per-page basis, without needing to rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions of pages." },
    { id: 127, testId: 7, difficulty: 'hard', question: "What is `Object.freeze()`?", type: 'subjective', answer: "`Object.freeze()` freezes an object, preventing new properties from being added, existing properties from being removed, and existing properties, or their enumerability, configurability, or writability, from being changed. It creates a shallowly-frozen object." },
    { id: 128, testId: 7, difficulty: 'hard', question: "What is the `Paint Timing API`?", type: 'subjective', answer: "The Paint Timing API reports timing information about the paint operations during page load. It includes metrics like First Paint (FP) and First Contentful Paint (FCP), which are crucial for measuring and optimizing perceived load speed." },
    { id: 129, testId: 7, difficulty: 'expert', question: "How would you handle state for a complex form in React without a library?", type: 'subjective', answer: "You could use the `useReducer` hook. It's well-suited for managing complex state objects with multiple sub-values or when the next state depends on the previous one. You would define a reducer function to handle different actions (e.g., 'UPDATE_FIELD', 'VALIDATE_FORM') and dispatch these actions from your form." },
    { id: 130, testId: 7, difficulty: 'hard', question: "What is `document.cookie`?", type: 'mcq', options: ['A function to bake cookies', 'A property that lets you read and write cookies for a web page', 'An API for web storage', 'A way to create HTTP requests'], answer: 'A property that lets you read and write cookies for a web page' },
    { id: 131, testId: 7, difficulty: 'hard', question: "What is the `Temporal` proposal in JavaScript?", type: 'subjective', answer: "`Temporal` is a new, modern date/time API for JavaScript. It aims to fix the long-standing issues with the `Date` object by providing a simpler, more robust API with immutable objects for handling dates, times, and timezones." },
    { id: 132, testId: 7, difficulty: 'hard', question: "What are some CSS selectors that are bad for performance?", type: 'subjective', answer: "Overly complex selectors, especially those that are deeply nested or use the universal selector (`*`) without constraints, can be bad for performance. Browsers evaluate selectors from right to left, so a selector like `div * { color: red; }` can be very inefficient." },
    { id: 133, testId: 7, difficulty: 'expert', question: "What are 'React Server Components'?", type: 'subjective', answer: "React Server Components are a new type of component that runs exclusively on the server. They have no state and cannot use effects or browser-only APIs. Their main benefit is allowing direct access to backend resources (like a database) without creating an API endpoint, and they contribute zero to the client-side JavaScript bundle." },
    { id: 134, testId: 7, difficulty: 'hard', question: "What is a 'signed cookie'?", type: 'subjective', answer: "A signed cookie is a cookie that has a signature attached. The signature is created by the server using a secret key. This allows the server to verify that the cookie has not been tampered with by the client, though the data in the cookie is still readable." },
    { id: 135, testId: 7, difficulty: 'hard', question: "What is the `inert` attribute?", type: 'subjective', answer: "The `inert` global attribute is a boolean attribute that makes the browser 'ignore' the element. For example, it prevents click events and removes the element from the accessibility tree and tab order. It's useful for temporarily disabling parts of the UI, like a background page when a modal is open." },
    { id: 136, testId: 7, difficulty: 'expert', question: "How does a browser decide when to create a new layer for compositing?", type: 'subjective', answer: "Browsers promote certain elements to their own compositor layer to optimize rendering. This typically happens for elements with CSS properties like `transform: translateZ(0)` or `will-change`, elements with 3D transforms, `<video>` and `<canvas>` elements, and elements with CSS animations on `opacity` or `transform`." },
    { id: 137, testId: 7, difficulty: 'hard', question: "What is the difference between `npm` and `npx`?", type: 'mcq', options: ['They are the same', '`npm` is for installing packages, `npx` is for executing packages', '`npm` is for frontend, `npx` is for backend', '`npx` is a typo for `npm`'], answer: '`npm` is for installing packages, `npx` is for executing packages' },
    { id: 138, testId: 7, difficulty: 'hard', question: "What are `SharedArrayBuffer` and `Atomics` in JavaScript?", type: 'subjective', answer: "`SharedArrayBuffer` is a fixed-length raw binary data buffer that can be used to create views on shared memory. `Atomics` is an object with static methods for performing atomic operations on `SharedArrayBuffer` objects. Together, they enable multi-threaded programming in JavaScript by allowing multiple Web Workers to read and write to the same memory location." },
    { id: 139, testId: 7, difficulty: 'expert', question: "How would you build a component that is resilient to changes in a third-party API it consumes?", type: 'subjective', answer: "You would create an 'adapter' or 'service' layer. This layer would be the only part of your application that directly communicates with the API. It would be responsible for fetching the data and transforming it into a consistent shape that the rest of your application expects. If the API changes, you only need to update the adapter, not every component that uses the data." },
    { id: 140, testId: 7, difficulty: 'hard', question: "What is `CSS-in-JS`?", type: 'subjective', answer: "`CSS-in-JS` refers to a pattern where CSS is composed using JavaScript instead of being defined in external files. Libraries like Styled Components and Emotion allow you to write CSS in your component files, which provides benefits like scoped styles, dynamic styling based on props, and critical CSS extraction." },
    
    // Test 8 (Very Hard - 40 questions)
    { id: 141, testId: 8, difficulty: 'expert', question: "How could you implement a Redux-like state management system from scratch using only React hooks?", type: 'subjective', answer: "You could use `useReducer` for the state logic and `useContext` to provide the state and dispatch function to the entire component tree. A custom hook could then be created to abstract away the `useContext` call, similar to `useSelector` and `useDispatch`." },
    { id: 142, testId: 8, difficulty: 'expert', question: "What are some security concerns with `localStorage` and how can you mitigate them?", type: 'subjective', answer: "The main concern is XSS (Cross-Site Scripting), as any script on the page can access all data in `localStorage`. Sensitive data like JWTs should not be stored there. Mitigation includes storing tokens in memory or in secure, httpOnly cookies, and implementing a strict Content Security Policy (CSP)." },
    { id: 143, testId: 8, difficulty: 'expert', question: "What is concurrent mode in React?", type: 'subjective', answer: "Concurrent Mode is a set of features that help React apps stay responsive by making rendering interruptible. It allows React to work on multiple state updates concurrently, pausing and resuming work to avoid blocking the main thread. It's the underlying mechanism for features like `useTransition` and `useDeferredValue`." },
    { id: 144, testId: 8, difficulty: 'expert', question: "What is the difference between shadow DOM and virtual DOM?", type: 'subjective', answer: "Shadow DOM is a browser technology designed for scoping and encapsulating styles and scripts within a component (part of Web Components). Virtual DOM is a concept implemented by libraries like React; it's a representation of the DOM in memory used to optimize updates to the real DOM." },
    { id: 145, testId: 8, difficulty: 'expert', question: "How would you architect a scalable and maintainable CSS system for a large application?", type: 'subjective', answer: "A good approach would be using CSS-in-JS (like Styled Components or Emotion) for component-scoped styles, a utility-first framework (like Tailwind CSS) for rapid prototyping and layout, or a strict methodology like BEM with CSS preprocessors (like Sass) to maintain organization and prevent style conflicts." },
    //... (More questions from Test 8)
    { id: 146, testId: 8, difficulty: 'expert', question: "Explain the `stale-while-revalidate` HTTP cache-control directive.", type: 'subjective', answer: "This directive indicates that the cache can serve a stale response while it revalidates it in the background. This improves perceived performance by serving content instantly from the cache, while ensuring the cache is updated for the next request." },
    { id: 147, testId: 8, difficulty: 'expert', question: "What is `TC39`?", type: 'mcq', options: ["A JavaScript engine", "The committee that standardizes JavaScript (ECMAScript)", "A popular JavaScript framework", "A code linter"], answer: "The committee that standardizes JavaScript (ECMAScript)"},
    { id: 148, testId: 8, difficulty: 'expert', question: "What are `Streams` in web development?", type: 'subjective', answer: "Streams are a way to handle reading or writing files, or network communication, in an efficient way. Instead of loading an entire file into memory, you can read it piece by piece (chunk by chunk), which is useful for large files and real-time data." },
    { id: 149, testId: 8, difficulty: 'hard', question: "What is the `Beacon API`?", type: 'subjective', answer: "The Beacon API is used to send small amounts of data from a web page to a server without expecting a response, and without delaying the unloading of the page. It's ideal for sending analytics or diagnostics data when the user navigates away." },
    { id: 150, testId: 8, difficulty: 'hard', question: "Explain the CSS `will-change` property.", type: 'subjective', answer: "The `will-change` property provides a way for authors to hint to browsers about the kinds of changes to expect on an element. This allows the browser to set up optimizations ahead of time, before an element is actually changed. It should be used sparingly as a last resort for performance issues." },
    { id: 151, testId: 8, difficulty: 'expert', question: "What is `npm ci` and how does it differ from `npm install`?", type: 'subjective', answer: "`npm ci` (clean install) is used for automated environments like CI/CD pipelines. It deletes the `node_modules` folder and installs dependencies exactly as specified in the `package-lock.json` file. `npm install` can update the lock file and may install different versions of sub-dependencies." },
    { id: 152, testId: 8, difficulty: 'hard', question: "What is the `picture` element in HTML?", type: 'subjective', answer: "The `<picture>` element is a container used to specify multiple `<source>` elements for a specific `<img>` contained in it. The browser will choose the most suitable source according to the current layout of the page, the screen density, and the supported image format. This is known as art direction." },
    { id: 153, testId: 8, difficulty: 'hard', question: "What are container queries?", type: 'subjective', answer: "Container queries are a new CSS feature that allows an element to change its styles based on the size of its parent container, rather than the viewport. This makes it possible to create truly reusable, context-aware components." },
    { id: 154, testId: 8, difficulty: 'expert', question: "How does React Fiber work?", type: 'subjective', answer: "React Fiber is a complete rewrite of React's core algorithm (the reconciler). It allows React to pause, abort, or reuse work as new updates come in, enabling features like concurrent rendering. It represents work as a 'fiber' object, which can be prioritized and scheduled." },
    { id: 155, testId: 8, difficulty: 'hard', question: "What is a `DataView` in JavaScript?", type: 'subjective', answer: "A `DataView` provides a low-level interface for reading and writing multiple number types in an `ArrayBuffer` regardless of the platform's endianness. It's useful for working with binary data, such as in networking protocols or file format manipulation." },
    { id: 156, testId: 8, difficulty: 'hard', question: "What is the `prefers-reduced-motion` media query?", type: 'mcq', options: ["To reduce the amount of JavaScript loaded", "To detect if the user has requested the system minimize the amount of non-essential motion it uses", "To decrease the image quality", "To switch to a dark theme"], answer: "To detect if the user has requested the system minimize the amount of non-essential motion it uses" },
    { id: 157, testId: 8, difficulty: 'expert', question: "How would you design a client-side search feature for a large dataset without a backend?", type: 'subjective', answer: "For a very large dataset, client-side search is challenging. One approach is to use a library like `lunr.js` to create a pre-built search index. This index would be downloaded by the client. For even larger data, you could load the data and index it in a Web Worker to avoid blocking the main thread." },
    { id: 158, testId: 8, difficulty: 'hard', question: "What is the `Navigation API` proposal?", type: 'subjective', answer: "The Navigation API is a proposed browser API that aims to centralize and simplify managing navigation history in single-page applications. It provides a more robust way to handle URL changes, state, and transitions compared to the older History API." },
    { id: 159, testId: 8, difficulty: 'hard', question: "What is the `finally` block in a `Promise`?", type: 'subjective', answer: "The `finally` method schedules a function to be called when the promise is settled (either fulfilled or rejected). It's useful for cleanup actions that need to happen regardless of the outcome, such as hiding a loading spinner." },
    { id: 160, testId: 8, difficulty: 'hard', question: "What is the `for...of` loop and how is it different from `for...in`?", type: 'subjective', answer: "The `for...of` loop iterates over the values of an iterable object (like an array or string). The `for...in` loop iterates over the enumerable properties (keys) of an object." },
    { id: 161, testId: 8, difficulty: 'expert', question: "What are some of the limitations of Web Components?", type: 'subjective', answer: "Limitations include: server-side rendering can be complex, they don't have a built-in state management or data-binding solution like frameworks do, and styling the shadow DOM from outside can be tricky. They are a low-level primitive, often best used with a library or framework." },
    { id: 162, testId: 8, difficulty: 'hard', question: "What is the `globalThis` keyword?", type: 'subjective', answer: "`globalThis` provides a standard way of accessing the global `this` value across different JavaScript environments (e.g., `window` in browsers, `global` in Node.js, `self` in Web Workers)." },
    { id: 163, testId: 8, difficulty: 'hard', question: "What is `BigInt` in JavaScript?", type: 'subjective', answer: "`BigInt` is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the `Number` primitive. It's useful for cryptography or when working with very large identifiers." },
    { id: 164, testId: 8, difficulty: 'hard', question: "What is a 'declarative' vs 'imperative' programming paradigm?", type: 'subjective', answer: "Imperative programming is about describing *how* to do something (a sequence of steps). Declarative programming is about describing *what* you want to achieve. HTML is declarative (you describe the UI). React is declarative (you describe what the UI should look like for a given state). Vanilla JS DOM manipulation is often imperative." },
    { id: 165, testId: 8, difficulty: 'expert', question: "What is a 'Render Target' in WebGL?", type: 'subjective', answer: "A render target is a buffer (like a texture) that you can draw to instead of the main screen. This is the basis for many advanced graphics techniques, like post-processing effects (e.g., blur, bloom), reflections, and shadow mapping." },
    { id: 166, testId: 8, difficulty: 'hard', question: "What is the purpose of `.map` files often seen in production builds?", type: 'mcq', options: ['They are image files', 'They are source maps for debugging', 'They are configuration files', 'They are web manifest files'], answer: 'They are source maps for debugging' },
    { id: 167, testId: 8, difficulty: 'hard', question: "What is `optional chaining` (`?.`)?", type: 'subjective', answer: "Optional chaining is a syntax that allows you to read the value of a property located deep within a chain of connected objects without having to explicitly validate that each reference in the chain is valid. If a reference is `null` or `undefined`, the expression short-circuits and returns `undefined`." },
    { id: 168, testId: 8, difficulty: 'hard', question: "What is the `nullish coalescing operator` (`??`)?", type: 'subjective', answer: "The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand. It's a way to provide a default value for nullish values without falling back on falsy values like `0` or `''`." },
    { id: 169, testId: 8, difficulty: 'expert', question: "What is 'Tree Shaking'?", type: 'subjective', answer: "Tree shaking is a term for dead-code elimination. It relies on the static structure of ES Modules (`import` and `export`) to determine which code is not being used and can be removed from the final bundle, resulting in smaller application sizes." },
    { id: 170, testId: 8, difficulty: 'hard', question: "What is `structuredClone()`?", type: 'subjective', answer: "`structuredClone()` is a global function that creates a deep copy of a given value using the structured clone algorithm. It's a modern, built-in way to deep-clone objects, which is more robust than methods like `JSON.parse(JSON.stringify(obj))` as it can handle more data types." },
    { id: 171, testId: 8, difficulty: 'hard', question: "What is the CSS `clamp()` function?", type: 'subjective', answer: "The `clamp()` CSS function allows you to set a value that 'clamps' between a minimum and maximum value. It takes three arguments: a minimum value, a preferred value, and a maximum allowed value. It's very useful for creating responsive typography or layouts." },
    { id: 172, testId: 8, difficulty: 'hard', question: "What are Custom Hooks in React?", type: 'subjective', answer: "A custom hook is a JavaScript function whose name starts with `use` and that may call other hooks. It's a way to extract and reuse stateful logic from a component. This allows you to share logic between multiple components without changing their structure." },
    { id: 173, testId: 8, difficulty: 'expert', question: "What is 'Partial Hydration'?", type: 'subjective', answer: "Partial hydration is an optimization technique where individual components (or 'islands') on a server-rendered page are hydrated independently, rather than hydrating the entire application at once. This can significantly improve Time to Interactive (TTI) for content-heavy sites." },
    { id: 174, testId: 8, difficulty: 'hard', question: "What is `npm workspaces`?", type: 'subjective', answer: "`npm workspaces` is a feature of npm that allows you to manage multiple packages within a single top-level, root package. It's a way to create a monorepo, which simplifies managing dependencies and running scripts across related projects." },
    { id: 175, testId: 8, difficulty: 'hard', question: "What is a 'CSRF' (Cross-Site Request Forgery) attack?", type: 'subjective', answer: "A CSRF attack tricks a user into submitting a malicious request. It inherits the identity and privileges of the victim to perform an undesired function on their behalf. A common mitigation is the use of anti-CSRF tokens." },
    { id: 176, testId: 8, difficulty: 'expert', question: "What are 'Streaming Server-Side Rendering' and 'Selective Hydration'?", type: 'subjective', answer: "Streaming SSR allows the server to send HTML to the client in chunks, so the user can see parts of the page sooner. Selective Hydration, often used with streaming, allows parts of the page to become interactive before the rest of the page has even finished streaming, further improving perceived performance." },
    { id: 177, testId: 8, difficulty: 'hard', question: "What is `Promise.any()`?", type: 'subjective', answer: "`Promise.any()` takes an iterable of `Promise` objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that fulfills with that value. If all promises are rejected, it rejects with an `AggregateError`." },
    { id: 178, testId: 8, difficulty: 'hard', question: "What are CSS cascade layers (`@layer`)?", type: 'subjective', answer: "Cascade layers are a new CSS feature that provide a structured way to organize and balance your CSS rules. They allow you to define explicit layers of specificity, so you have more control over which styles take precedence without fighting with selector specificity." },
    { id: 179, testId: 8, difficulty: 'hard', question: "What is the `URL` object in JavaScript?", type: 'subjective', answer: "The `URL` object is a built-in interface for parsing and manipulating URLs. It provides a structured way to read and modify components of a URL like the protocol, hostname, path, and search parameters, which is much safer and more reliable than string manipulation." },
    { id: 180, testId: 8, difficulty: 'expert', question: "What is a `Bloom Filter` and where might it be used in a frontend application?", type: 'subjective', answer: "A Bloom filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set. It can have false positives but no false negatives. A frontend use case could be checking if a username is already taken before sending a request to the server, by downloading a Bloom filter of all existing usernames." },
    
    // Test 9 (Expert - 45 questions)
    { id: 181, testId: 9, difficulty: 'expert', question: "How do JavaScript engines like V8 compile and execute code?", type: 'subjective', answer: "V8 uses a JIT (Just-In-Time) compiler. It initially parses the code into an AST, then the Ignition interpreter generates bytecode. As code runs, the TurboFan optimizing compiler identifies hot paths, compiles them into highly optimized machine code, and de-optimizes if assumptions prove incorrect." },
    { id: 182, testId: 9, difficulty: 'expert', question: "Explain how browser rendering engines work, from receiving HTML to painting pixels.", type: 'subjective', answer: "The process involves: 1. Parsing HTML to build the DOM tree. 2. Parsing CSS to build the CSSOM tree. 3. Combining DOM and CSSOM to form the Render Tree. 4. Layout/Reflow: Calculating the size and position of each object. 5. Painting: Drawing the pixels on the screen. JavaScript can interrupt this process." },
    { id: 183, testId: 9, difficulty: 'expert', question: "What are the challenges of managing state in a micro-frontend architecture?", type: 'subjective', answer: "Challenges include sharing state between different micro-frontends, ensuring consistency, avoiding data duplication, and handling authentication/authorization. Solutions can involve using custom events, web storage with a shared convention, or creating a dedicated shared library or state management micro-frontend." },
    { id: 184, testId: 9, difficulty: 'expert', question: "Describe a situation where you would NOT use React or a similar framework.", type: 'subjective', answer: "For very simple, static content websites where interactivity is minimal. Also, in environments where low memory footprint or minimal JS is an absolute requirement, such as some embedded devices or for a site aiming for extreme performance on low-end devices with slow networks." },
    { id: 185, testId: 9, difficulty: 'expert', question: "What is `requestIdleCallback` and how might you use it?", type: 'subjective', answer: "`requestIdleCallback` is a browser API that queues a function to be called during a browser's idle periods. This is useful for performing low-priority or background tasks (like logging or analytics) without interfering with high-priority work like animations or user input." },
    //... (More questions from Test 9)
    { id: 186, testId: 9, difficulty: 'expert', question: "What are some limitations of `useEffect` in React?", type: 'subjective', answer: "Limitations include: its dependency array can be tricky to get right, leading to infinite loops or stale closures; it runs after the render is painted, which can cause flickering if you're performing DOM measurements; and it can make complex, multi-step asynchronous workflows difficult to manage." },
    { id: 187, testId: 9, difficulty: 'expert', question: "How does the `grid-auto-flow: dense` property work in CSS Grid?", type: 'subjective', answer: "This property tells the grid layout algorithm to attempt to fill in any holes in the grid. If a smaller item comes up later in the DOM order, the algorithm can back-fill it into an empty space that was left by a larger item, leading to a more compact layout." },
    { id: 188, testId: 9, difficulty: 'expert', question: "What is a 'speculative execution' attack like Spectre or Meltdown, and how does it relate to web development?", type: 'subjective', answer: "These are hardware vulnerabilities where a CPU's speculative execution can be exploited to read privileged memory. In web development, this led to browsers reducing the precision of performance timers (like `performance.now()`) and creating APIs like `SharedArrayBuffer` that require specific cross-origin isolation headers to be used, mitigating the risk of cross-site data leaks." },
    { id: 189, testId: 9, difficulty: 'hard', question: "What is `DOMParser` used for?", type: 'subjective', answer: "The `DOMParser` interface provides the ability to parse XML or HTML source code from a string into a DOM `Document`. It's useful for handling XML/HTML data received from an API without injecting it directly into the page." },
    { id: 190, testId: 9, difficulty: 'expert', question: "Explain the concept of 'lazy parsing' in JavaScript engines.", type: 'subjective', answer: "Lazy parsing is an optimization where the engine does not fully parse a function's code until it is actually executed. On the initial pass, it does a quick pre-parse to find syntax errors and understand the function's scope, but the full, detailed parsing and bytecode generation is deferred until the function is called. This speeds up initial script load time." },
    { id: 191, testId: 9, difficulty: 'expert', question: "What are 'inline caches' in a JavaScript engine?", type: 'subjective', answer: "Inline caching is a key optimization technique in JIT compilers. When an operation (like property access `obj.x`) is performed, the engine makes an assumption about the object's shape or type and caches the result. Subsequent calls with the same shape can then use the cached, optimized code path, avoiding a slow property lookup." },
    { id: 192, testId: 9, difficulty: 'expert', question: "How would you design a theming system for a React application?", type: 'subjective', answer: "A common approach is to use the Context API. You'd create a `ThemeContext` to hold the current theme object (e.g., colors, fonts). A `ThemeProvider` component would wrap the application, providing this context. Components would then use a `useTheme` custom hook to access the theme values. To switch themes, you'd update the state in the `ThemeProvider`." },
    { id: 193, testId: 9, difficulty: 'hard', question: "What is `aspect-ratio` in CSS?", type: 'mcq', options: ['The ratio of width to height of a box', 'A media query for screen aspect ratio', 'A filter for images', 'A property for fonts'], answer: 'The ratio of width to height of a box' },
    { id: 194, testId: 9, difficulty: 'expert', question: "What are some advanced use cases for `Proxy` objects?", type: 'subjective', answer: "Advanced uses include: creating validation layers for objects, implementing custom operators, instrumenting code for logging or analytics, creating negative array indices, and building reactive data systems as seen in frameworks like Vue." },
    { id: 195, testId: 9, difficulty: 'expert', question: "What is a 'tainted canvas'?", type: 'subjective', answer: "A canvas becomes 'tainted' if you draw an image onto it that was loaded from another origin without CORS approval. Once a canvas is tainted, you are no longer allowed to read its pixel data (e.g., using `toDataURL()` or `getImageData()`). This is a security measure to prevent information leakage." },
    //... (add remaining questions for test 9)
    { id: 196, testId: 9, difficulty: 'hard', question: 'What is `Intl.Segmenter`?', type: 'subjective', answer: '`Intl.Segmenter` is a JavaScript API that enables locale-sensitive text segmentation, allowing you to split a string into meaningful units like words, sentences, or graphemes, correctly handling different languages.'},
    { id: 197, testId: 9, difficulty: 'expert', question: 'What is a "monorepo" and what are its pros and cons?', type: 'subjective', answer: 'A monorepo is a single repository containing multiple distinct projects with well-defined relationships. Pros: Simplified dependency management, atomic large-scale refactors, and easier code sharing. Cons: Tooling can be complex, build times can be longer, and it requires more discipline to manage.'},
    { id: 198, testId: 9, difficulty: 'hard', question: 'What is the `content-visibility` CSS property?', type: 'subjective', answer: 'The `content-visibility` property controls whether an element renders its contents at all, allowing the browser to skip rendering work for off-screen content. Setting it to `auto` can significantly speed up initial page loads.'},
    { id: 199, testId: 9, difficulty: 'expert', question: 'How does React\'s `useTransition` hook work?', type: 'subjective', answer: '`useTransition` lets you mark some state updates as "transitions," which tells React they are not urgent. This allows React to keep the UI responsive during the update. It returns a boolean `isPending` to indicate the transition is active, and a `startTransition` function to wrap the state update.'},
    { id: 200, testId: 9, difficulty: 'hard', question: 'What is the `Private Fields` syntax (`#`) in JavaScript classes?', type: 'subjective', answer: 'Private class fields are declared using a `#` prefix. This ensures that the field is only accessible from within the class itself, providing true encapsulation that cannot be accessed from the outside.'},
    // ... Fill up to 45 questions
    { id: 201, testId: 9, difficulty: 'hard', question: "What is the `at()` method for JavaScript arrays?", type: 'mcq', options: ['To find an element at a specific index, supporting negative indices', 'To concatenate two arrays', 'To sort an array', 'To check if an array contains a certain value'], answer: 'To find an element at a specific index, supporting negative indices' },
    { id: 202, testId: 9, difficulty: 'expert', question: "What is a 'Frame Timing API'?", type: 'subjective', answer: "The Frame Timing API provides detailed timing information about rendering frames, such as CPU time and whether a frame was presented on screen. It's a low-level API used to diagnose and debug animation performance issues and jank." },
    { id: 203, testId: 9, difficulty: 'expert', question: "How does the 'Priority Hints' API work?", type: 'subjective', answer: "Priority Hints allow developers to signal the relative importance of a resource to the browser using the `importance` attribute (e.g., `importance='high'`). This helps the browser optimize resource loading, for example, by fetching a critical LCP image sooner." },
    { id: 204, testId: 9, difficulty: 'hard', question: "What is the CSS `overscroll-behavior` property?", type: 'subjective', answer: "This property controls what happens when you scroll past the boundary of a scrolling area. It can be used to prevent the main page from scrolling when a user reaches the end of a modal or sidebar scroll, which is a common UX annoyance." },

    // Test 10 (Expert - 50 questions)
    { id: 226, testId: 10, difficulty: 'expert', question: "How do you handle memory leaks in a single-page application (SPA)?", type: 'subjective', answer: "Common causes are un-removed event listeners, uncleared timers (`setInterval`), and closures holding references to detached DOM nodes. You can use browser developer tools (like the Chrome heap profiler) to take snapshots and identify detached nodes. In React, cleanup functions in `useEffect` are crucial for removing listeners and timers." },
    { id: 227, testId: 10, difficulty: 'expert', question: "Explain the technical details of how React's `useState` hook works internally.", type: 'subjective', answer: "React maintains an array of state cells for each component. Each call to `useState` on the initial render creates a new cell. On subsequent renders, React retrieves the state from the corresponding cell in the array. This is why hooks must be called in the same order on every render. The setter function enqueues a state update and triggers a re-render." },
    { id: 228, testId: 10, difficulty: 'expert', question: "What are the trade-offs of using CSS-in-JS libraries?", type: 'subjective', answer: "Pros: Scoped styles by default (no conflicts), colocating styles with components, dynamic styling based on props. Cons: Potential runtime performance overhead, increased bundle size, and a steeper learning curve for developers used to traditional CSS." },
    { id: 229, testId: 10, difficulty: 'expert', question: "What are HTTP/2 and HTTP/3 and what problems do they solve?", type: 'subjective', answer: "HTTP/2 introduced multiplexing, allowing multiple requests and responses over a single TCP connection, solving the head-of-line blocking problem of HTTP/1.1. HTTP/3 uses QUIC instead of TCP, which further reduces connection setup time and improves performance on lossy networks by solving head-of-line blocking at the transport layer." },
    { id: 230, testId: 10, difficulty: 'expert', question: "You are tasked with improving the Largest Contentful Paint (LCP) score for a web page. What steps would you take?", type: 'subjective', answer: "1. Identify the LCP element using browser dev tools. 2. Optimize the element itself (e.g., compress images, use modern formats like AVIF/WebP). 3. Preload the LCP resource with `<link rel='preload'>`. 4. Reduce server response time (TTFB). 5. Eliminate render-blocking resources (CSS/JS) that delay the rendering of the LCP element." },
    //... (More questions from Test 10)
    { id: 231, testId: 10, difficulty: 'expert', question: "What is a 'portaling' in React?", type: 'subjective', answer: "Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is useful for UI elements that need to break out of their container, like modals, tooltips, and dialogs." },
    { id: 232, testId: 10, difficulty: 'expert', question: "What is 'differential loading'?", type: 'subjective', answer: "Differential loading is a strategy where you serve different, optimized bundles of JavaScript to different browsers. Modern browsers get a bundle with modern syntax (e.g., ES2015+), while older browsers get a transpiled ES5 bundle. This results in smaller, more efficient bundles for modern users." },
    { id: 233, testId: 10, difficulty: 'expert', question: "What is `FinalizationRegistry` in JavaScript?", type: 'subjective', answer: "`FinalizationRegistry` lets you request a callback to be called after an object has been garbage collected. It's a very advanced feature used for managing external resources that are tied to the lifecycle of a JavaScript object, but it should be used with extreme caution." },
    { id: 234, testId: 10, difficulty: 'expert', question: "How would you implement a 'virtualized list' from scratch?", type: 'subjective', answer: "A virtualized list only renders the items that are currently visible in the viewport. To implement it, you'd calculate the total height of the list, add a scrollable container, and listen to its scroll event. Based on the scroll position, you'd calculate which items should be visible, and then render only those items, using absolute positioning to place them correctly within the container." },
    { id: 235, testId: 10, difficulty: 'expert', question: "What is the `is` attribute in HTML?", type: 'subjective', answer: "The `is` global attribute allows you to specify that a standard HTML element should behave like a registered custom built-in element. This is part of the Web Components specification and allows for progressive enhancement of standard elements." },
    // ... Fill up to 50 questions
    { id: 275, testId: 10, difficulty: 'expert', question: "How would you debug a memory leak in a Node.js application?", type: 'subjective', answer: "You can use the built-in V8 inspector with Chrome DevTools to take heap snapshots at different points in time and compare them to see which objects are not being garbage collected. Libraries like `heapdump` can also be used to programmatically generate snapshots." },
  ],
  backend: [
    // Test 1 (Easy - 5 questions: 3 MCQ, 2 Subjective)
    {
      id: 301,
      testId: 1,
      difficulty: 'easy',
      question: "What does API stand for?",
      type: 'mcq',
      options: ['Application Programming Interface', 'Automated Program Interaction', 'Algorithmic Protocol Interface', 'Application Process Integration'],
      answer: 'Application Programming Interface',
      explanation: 'An API is a set of rules and protocols that allows different software applications to communicate with each other.'
    },
    {
      id: 302,
      testId: 1,
      difficulty: 'easy',
      question: "Which HTTP method is typically used for creating a new resource on a server?",
      type: 'mcq',
      options: ['POST', 'GET', 'DELETE', 'PUT'],
      answer: 'POST',
      explanation: 'The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.'
    },
    {
      id: 303,
      testId: 1,
      difficulty: 'easy',
      question: "Which HTTP status code means 'OK'?",
      type: 'mcq',
      options: ['200', '500', '404', '301'],
      answer: '200',
      explanation: "A 200 OK status code indicates that the request has succeeded."
    },
    {
        id: 304,
        testId: 1,
        difficulty: 'easy',
        question: "What is a database?",
        type: 'subjective',
        answer: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system, designed for efficient storage, retrieval, and management.",
        explanation: "Databases are essential for storing, managing, and retrieving application data."
    },
    {
        id: 305,
        testId: 1,
        difficulty: 'easy',
        question: "What is the purpose of an index in a database?",
        type: 'subjective',
        answer: "A database index is a data structure that improves the speed of data retrieval operations on a database table. It works like an index in a book, allowing the database to find data without scanning the entire table.",
        explanation: "Indexes are crucial for optimizing database query performance, but they can slow down data modification operations (INSERT, UPDATE, DELETE)."
    },

    // Test 2 (Easy-Medium - 10 questions: 6 MCQ, 4 Subjective)
    {
      id: 306,
      testId: 2,
      difficulty: 'easy',
      question: "Which of the following is NOT a valid HTTP verb?",
      type: 'mcq',
      options: ['GET', 'POST', 'FETCH', 'PATCH'],
      answer: 'FETCH',
      explanation: "`FETCH` is a JavaScript API for making requests, but it is not an HTTP verb itself. Common verbs include GET, POST, PUT, PATCH, DELETE."
    },
    {
      id: 307,
      testId: 2,
      difficulty: 'easy',
      question: "Which component is responsible for mapping a URL to a specific function in a backend framework?",
      type: 'mcq',
      options: ['Middleware', 'Router', 'Template Engine', 'ORM'],
      answer: 'Router',
      explanation: "A router is used to direct incoming requests to the appropriate handler function based on the URL path and HTTP method."
    },
    {
      id: 308,
      testId: 2,
      difficulty: 'medium',
      question: "What is the difference between SQL and NoSQL databases?",
      type: 'subjective',
      answer: "SQL databases are relational (data stored in tables), use a predefined schema, and scale vertically. NoSQL databases are non-relational (e.g., document, key-value), have a dynamic schema, and scale horizontally.",
      explanation: "The choice between SQL and NoSQL depends on the application's data model and scalability needs."
    },
    {
      id: 309,
      testId: 2,
      difficulty: 'medium',
      question: "What is REST?",
      type: 'subjective',
      answer: "REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, most commonly HTTP, and uses standard HTTP methods.",
      explanation: "RESTful APIs are the most common standard for web services."
    },
    {
      id: 310,
      testId: 2,
      difficulty: 'medium',
      question: "What is middleware in the context of a backend framework like Express.js?",
      type: 'subjective',
      answer: "Middleware functions have access to the request (req) and response (res) objects, and the next middleware function. They can execute code, modify req/res objects, end the request-response cycle, or pass control to the next middleware.",
      explanation: "Middleware is used for tasks like logging, authentication, and error handling."
    },
    {
      id: 311,
      testId: 2,
      difficulty: 'medium',
      question: "What is hashing in the context of password security?",
      type: 'mcq',
      options: ["A two-way encryption method", "A way to compress data", "A one-way function to create a unique, fixed-size string", "A method for indexing databases"],
      answer: "A one-way function to create a unique, fixed-size string",
      explanation: "Hashing is the process of converting a password into a fixed-length string of characters, which is a one-way function. It's used to store passwords securely."
    },
    {
      id: 312,
      testId: 2,
      difficulty: 'medium',
      question: "What does 'stateless' mean in the context of REST APIs?",
      type: 'mcq',
      options: ["The server stores the client's session data", "The client stores all the application state", "The server does not store any client context between requests", "The API can only be used for static content"],
      answer: "The server does not store any client context between requests",
      explanation: "Stateless means that each request from a client must contain all the information needed to understand and process the request. This improves scalability."
    },
    {
      id: 313,
      testId: 2,
      difficulty: 'medium',
      question: "What is a 'race condition'?",
      type: 'subjective',
      answer: "A race condition occurs when a system's behavior depends on the sequence or timing of uncontrollable events. It becomes a bug when events do not happen in the order the programmer intended, often in concurrent or multi-threaded environments.",
      explanation: "Race conditions can lead to unpredictable behavior and are a common challenge in concurrent programming."
    },
    {
      id: 314,
      testId: 2,
      difficulty: 'medium',
      question: "What is an ORM?",
      type: 'mcq',
      options: ["A database management system", "A programming language", "A technique for converting data between incompatible type systems", "A type of web server"],
      answer: "A technique for converting data between incompatible type systems",
      explanation: "An Object-Relational Mapper (ORM) is a library that automates the transfer of data stored in relational database tables into objects that are more commonly used in application code."
    },
    {
      id: 315,
      testId: 2,
      difficulty: 'medium',
      question: "What is the N+1 problem in ORMs?",
      type: 'mcq',
      options: ["A security vulnerability", "An inefficient database query pattern", "A type of network error", "A memory leak issue"],
      answer: "An inefficient database query pattern",
      explanation: "The N+1 problem occurs when an ORM executes one query to retrieve a list of parent objects, and then one additional query for each parent object to retrieve its related child objects (N additional queries)."
    },
     // Test 3 (Medium - 15 questions)
    { id: 316, testId: 3, difficulty: 'medium', question: "What is the purpose of JWT (JSON Web Token)?", type: 'subjective', answer: "JWTs are used to securely transmit information between parties as a JSON object. They are commonly used for authentication and authorization, allowing the server to verify that the client has permission to access certain resources." },
    { id: 317, testId: 3, difficulty: 'medium', question: "What are the main components of a JWT?", type: 'mcq', options: ['Header, Payload, Signature', 'Header, Body, Footer', 'Key, Value, Secret', 'Issuer, Subject, Expiry'], answer: 'Header, Payload, Signature' },
    { id: 318, testId: 3, difficulty: 'medium', question: "What is caching and why is it important in backend systems?", type: 'subjective', answer: "Caching is the process of storing copies of files or data in a temporary storage location (a cache) so that they can be accessed more quickly. It's important for improving performance, reducing latency, and decreasing the load on the backend servers and databases." },
    { id: 319, testId: 3, difficulty: 'medium', question: "What is the difference between authentication and authorization?", type: 'subjective', answer: "Authentication is the process of verifying who a user is. Authorization is the process of verifying what a user has permission to do." },
    { id: 320, testId: 3, difficulty: 'medium', question: "What is a 'connection pool' in the context of databases?", type: 'subjective', answer: "A connection pool is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. It improves performance by avoiding the overhead of establishing a new connection for every request." },
    { id: 321, testId: 3, difficulty: 'medium', question: "Which of the following is a message broker?", type: 'mcq', options: ['Redis', 'PostgreSQL', 'RabbitMQ', 'Nginx'], answer: 'RabbitMQ' },
    { id: 322, testId: 3, difficulty: 'medium', question: "What is the role of a reverse proxy?", type: 'subjective', answer: "A reverse proxy is a server that sits in front of one or more web servers, intercepting requests from clients. It is used for load balancing, security (hiding the identity of backend servers), caching, and SSL termination." },
    { id: 323, testId: 3, difficulty: 'medium', question: "What are ACID properties in a database transaction?", type: 'subjective', answer: "ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that guarantee that database transactions are processed reliably. Atomicity: All or nothing. Consistency: The database remains in a valid state. Isolation: Concurrent transactions do not affect each other. Durability: Committed transactions are permanent." },
    { id: 324, testId: 3, difficulty: 'medium', question: "What is 'salting' a password?", type: 'mcq', options: ['Encrypting the password', 'Adding a random string to a password before hashing it', 'Compressing the password', 'Storing the password in plain text'], answer: 'Adding a random string to a password before hashing it' },
    { id: 325, testId: 3, difficulty: 'medium', question: "What is a 'blocking' I/O operation?", type: 'subjective', answer: "A blocking I/O operation is one where the execution of the application is blocked until the I/O operation completes. For example, reading a file from disk will block the thread until the file is fully read." },
    { id: 326, testId: 3, difficulty: 'medium', question: "Explain the concept of 'idempotency' in APIs.", type: 'subjective', answer: "An idempotent operation is one that has the same effect whether it is performed once or multiple times. For example, a `PUT` request to update a resource is idempotent, while a `POST` request to create a new resource is not." },
    { id: 327, testId: 3, difficulty: 'medium', question: "What is a 'foreign key' in a relational database?", type: 'mcq', options: ['The primary key of another table', 'A key used for encryption', 'A unique identifier for a row', 'An index for faster queries'], answer: 'The primary key of another table' },
    { id: 328, testId: 3, difficulty: 'medium', question: "What is the purpose of environment variables in a backend application?", type: 'subjective', answer: "Environment variables are used to store configuration settings that are specific to the environment where the application is running (e.g., development, staging, production). This allows for managing secrets like API keys and database credentials without hardcoding them into the source code." },
    { id: 329, testId: 3, difficulty: 'medium', question: "What is containerization (e.g., Docker)?", type: 'subjective', answer: "Containerization is a form of OS-level virtualization used to deploy and run distributed applications without launching an entire virtual machine for each app. Containers package up an application's code, libraries, and dependencies into a single, isolated unit." },
    { id: 330, testId: 3, difficulty: 'medium', question: "What is the purpose of an API gateway?", type: 'mcq', options: ['To connect to a database', 'To act as a single entry point for all client requests to a backend service', 'To serve static files', 'To compile code'], answer: 'To act as a single entry point for all client requests to a backend service' },

    // Test 4 (Medium - 20 questions)
    { id: 331, testId: 4, difficulty: 'medium', question: "What is GraphQL and how does it differ from REST?", type: 'subjective', answer: "GraphQL is a query language for APIs. Unlike REST, which has multiple endpoints that return fixed data structures, GraphQL has a single endpoint and allows the client to request exactly the data it needs, preventing over-fetching and under-fetching." },
    { id: 332, testId: 4, difficulty: 'medium', question: "What is vertical vs. horizontal scaling?", type: 'subjective', answer: "Vertical scaling (scaling up) means adding more resources (e.g., CPU, RAM) to an existing server. Horizontal scaling (scaling out) means adding more servers to a pool of resources." },
    { id: 333, testId: 4, difficulty: 'medium', question: "What is a 'database transaction'?", type: 'subjective', answer: "A database transaction is a sequence of operations performed as a single logical unit of work. All operations in a transaction must succeed for the transaction to be committed; otherwise, it is rolled back." },
    { id: 334, testId: 4, difficulty: 'medium', question: "What are 'microservices'?", type: 'mcq', options: ['A type of database', 'A software development technique that structures an application as a collection of loosely coupled services', 'A frontend framework', 'A deployment strategy'], answer: 'A software development technique that structures an application as a collection of loosely coupled services' },
    { id: 335, testId: 4, difficulty: 'medium', question: "What is a 'CAP theorem'?", type: 'subjective', answer: "The CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency, Availability, and Partition tolerance." },
    { id: 336, testId: 4, difficulty: 'medium', question: "Explain what a 'load balancer' does.", type: 'subjective', answer: "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes a bottleneck. This improves application responsiveness, availability, and reliability." },
    { id: 337, testId: 4, difficulty: 'medium', question: "What is 'gRPC'?", type: 'mcq', options: ['A database query language', 'A high-performance, open-source universal RPC framework', 'A JavaScript library', 'A CSS preprocessor'], answer: 'A high-performance, open-source universal RPC framework' },
    { id: 338, testId: 4, difficulty: 'medium', question: "What is the difference between a process and a thread?", type: 'subjective', answer: "A process is an instance of a program running in its own memory space. A thread is the smallest unit of execution within a process. Multiple threads can run within a single process and share its memory space." },
    { id: 339, testId: 4, difficulty: 'medium', question: "What is 'event sourcing'?", type: 'subjective', answer: "Event sourcing is a design pattern in which all changes to an application's state are stored as a sequence of events. The current state can be reconstructed by replaying the events." },
    { id: 340, testId: 4, difficulty: 'medium', question: "What is 'CQRS' (Command Query Responsibility Segregation)?", type: 'subjective', answer: "CQRS is a pattern that separates read and write operations for a data store. The 'Command' model is used for writes (updates), and the 'Query' model is used for reads." },
    { id: 341, testId: 4, difficulty: 'medium', question: "What is a 'singleton' pattern?", type: 'mcq', options: ['A design pattern that restricts the instantiation of a class to a single object', 'A way to handle single-threaded applications', 'A database indexing strategy', 'A network protocol'], answer: 'A design pattern that restricts the instantiation of a class to a single object' },
    { id: 342, testId: 4, difficulty: 'medium', question: "What is 'dependency injection'?", type: 'subjective', answer: "Dependency Injection (DI) is a design pattern in which a component's dependencies are provided to it from an external source, rather than being created by the component itself. This promotes loose coupling and makes components more reusable and testable." },
    { id: 343, testId: 4, difficulty: 'medium', question: "What is 'Infrastructure as Code' (IaC)?", type: 'subjective', answer: "IaC is the practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Tools like Terraform and CloudFormation are used for IaC." },
    { id: 344, testId: 4, difficulty: 'hard', question: "Explain how database sharding works.", type: 'subjective', answer: "Database sharding is a type of horizontal partitioning that separates one large database into multiple smaller, faster, more easily managed parts called data shards. The logic for distributing data across shards (the shard key) is critical to its design." },
    { id: 345, testId: 4, difficulty: 'hard', question: "What are the trade-offs of using a monolithic architecture vs. a microservices architecture?", type: 'subjective', answer: "Monoliths are simpler to develop, test, and deploy initially, but can become complex and difficult to scale. Microservices are more scalable, allow for technological diversity, and enable independent deployments, but introduce complexity in terms of deployment, monitoring, and inter-service communication." },
    { id: 346, testId: 4, difficulty: 'hard', question: "What is a 'distributed transaction'?", type: 'subjective', answer: "A distributed transaction is a transaction that involves multiple, separate systems or databases. Ensuring ACID properties across a distributed transaction is complex and often requires a two-phase commit protocol." },
    { id: 347, testId: 4, difficulty: 'hard', question: "What is 'backpressure' in a streaming system?", type: 'mcq', options: ['A type of network error', 'A mechanism to prevent a fast data producer from overwhelming a slower consumer', 'The pressure in a database connection pool', 'A data compression technique'], answer: 'A mechanism to prevent a fast data producer from overwhelming a slower consumer' },
    { id: 348, testId: 4, difficulty: 'hard', question: "How does a 'consistent hashing' algorithm work?", type: 'subjective', answer: "Consistent hashing is a special kind of hashing such that when a hash table is resized, only K/n keys need to be remapped on average, where K is the number of keys and n is the number of slots. It's commonly used in distributed systems and load balancers to minimize data movement when nodes are added or removed." },
    { id: 349, testId: 4, difficulty: 'hard', question: "What is the 'saga' pattern?", type: 'subjective', answer: "The saga pattern is a way to manage data consistency across microservices in a distributed transaction. It's a sequence of local transactions where each local transaction updates the database and publishes an event or message to trigger the next local transaction in the saga. If a transaction fails, compensating transactions are executed to undo the preceding work." },
    { id: 350, testId: 4, difficulty: 'hard', question: "What is a 'circuit breaker' pattern?", type: 'subjective', answer: "The circuit breaker pattern is used to prevent an application from repeatedly trying to execute an operation that is likely to fail. After a specified number of failures, the circuit 'opens' and subsequent calls fail immediately. After a timeout, the circuit goes into a 'half-open' state to test if the underlying operation is available again." },

    // Test 5 (Medium-Hard - 25 questions)
    { id: 351, testId: 5, difficulty: 'medium', question: "What is a 'rate limiter' and how might you implement one?", type: 'subjective', answer: "A rate limiter controls the rate of traffic sent or received by a network interface. Common algorithms for implementation include Token Bucket, Leaky Bucket, Fixed Window Counter, and Sliding Window Log. A simple implementation could use an in-memory store like Redis to track request counts per user/IP within a time window." },
    { id: 352, testId: 5, difficulty: 'hard', question: "What is the difference between concurrency and parallelism?", type: 'subjective', answer: "Concurrency means multiple tasks can run in overlapping time periods, but not necessarily simultaneously (e.g., on a single-core CPU via context switching). Parallelism means multiple tasks are executed at the exact same time (e.g., on a multi-core CPU)." },
    { id: 353, testId: 5, difficulty: 'hard', question: "What are different database isolation levels?", type: 'subjective', answer: "Common isolation levels are: Read Uncommitted (dirty reads), Read Committed (no dirty reads), Repeatable Read (no dirty or non-repeatable reads), and Serializable (no dirty, non-repeatable, or phantom reads). Higher isolation levels provide more consistency but reduce concurrency." },
    { id: 354, testId: 5, difficulty: 'hard', question: "What is a 'gossip protocol'?", type: 'subjective', answer: "A gossip protocol is a procedure or process of computer peer-to-peer communication that is based on the way epidemics spread. It's used to propagate information through a distributed system in a decentralized and fault-tolerant way. Systems like Apache Cassandra use it for node discovery and status updates." },
    { id: 355, testId: 5, difficulty: 'hard', question: "What is 'zero-downtime deployment' and how can it be achieved?", type: 'subjective', answer: "Zero-downtime deployment is the process of releasing a new version of an application without any user-visible downtime. Techniques to achieve this include blue-green deployment (switching traffic between two identical environments) and canary releasing (gradually rolling out the change to a small subset of users)." },
    { id: 356, testId: 5, difficulty: 'medium', question: "Which of the following is NOT a relational database?", type: 'mcq', options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'], answer: 'MongoDB'},
    { id: 357, testId: 5, difficulty: 'hard', question: "What is a 'deadlock' in a database?", type: 'subjective', answer: 'A deadlock is a situation where two or more transactions are waiting for each other to release locks. For example, Transaction A locks resource 1 and wants to lock resource 2, while Transaction B has locked resource 2 and wants to lock resource 1. The database must detect this and abort one of the transactions.'},
    { id: 358, testId: 5, difficulty: 'medium', question: "What is the purpose of the `Dockerfile`?", type: 'subjective', answer: 'A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. `docker build` uses this file to automate the process of creating a container image.'},
    { id: 359, testId: 5, difficulty: 'medium', question: "What does 'SOLID' stand for in software design?", type: 'subjective', answer: 'SOLID is an acronym for five design principles: Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle. They are intended to make software designs more understandable, flexible, and maintainable.'},
    { id: 360, testId: 5, difficulty: 'hard', question: "What is a 'WebHook'?", type: 'mcq', options: ['A React hook for fetching web data', 'A method for an app to provide other applications with real-time information', 'A type of fishing lure', 'A security vulnerability'], answer: 'A method for an app to provide other applications with real-time information'},
    { id: 361, testId: 5, difficulty: 'hard', question: "What is 'serverless computing'?", type: 'subjective', answer: "Serverless computing is a cloud computing execution model in which the cloud provider runs the server and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity. AWS Lambda and Google Cloud Functions are examples." },
    { id: 362, testId: 5, difficulty: 'medium', question: "What is a 'primary key' in a database table?", type: 'subjective', answer: "A primary key is a constraint that uniquely identifies each record in a table. Primary keys must contain unique values, and cannot contain NULL values." },
    { id: 363, testId: 5, difficulty: 'medium', question: "What is 'YAML'?", type: 'subjective', answer: 'YAML (YAML Ain\'t Markup Language) is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted.' },
    { id: 364, testId: 5, difficulty: 'hard', question: "What are the benefits of using a message queue?", type: 'subjective', answer: "Benefits include: Decoupling services, so that the producer and consumer do not need to be running at the same time; Asynchronous processing, allowing a producer to send a message and continue its work; and load leveling, by absorbing spikes in traffic and feeding messages to consumers at a manageable rate." },
    { id: 365, testId: 5, difficulty: 'medium', question: "What is a `cron job`?", type: 'subjective', answer: "A cron job is a time-based job scheduler in Unix-like computer operating systems. Users who set up and maintain software environments use cron to schedule jobs (commands or shell scripts) to run periodically at fixed times, dates, or intervals." },
    { id: 366, testId: 5, difficulty: 'medium', question: "What is `ping` command used for?", type: 'mcq', options: ["To test the reachability of a host on an IP network", "To send an email", "To download a file", "To shut down a server"], answer: "To test the reachability of a host on an IP network" },
    { id: 367, testId: 5, difficulty: 'hard', question: "What is 'long polling'?", type: 'subjective', answer: "Long polling is a technique where the client makes a request to the server, and the server holds the connection open until it has new data to send. Once it sends a response, the client immediately sends another request. It's a way to simulate a push mechanism from server to client." },
    { id: 368, testId: 5, difficulty: 'medium', question: "What is the role of `npm` or `yarn` in a Node.js project?", type: 'subjective', answer: "They are package managers for JavaScript. They allow developers to discover, share, and install reusable code packages (dependencies) from a central repository. They also manage project scripts and versioning." },
    { id: 369, testId: 5, difficulty: 'medium', question: "What is the `Content-Type` header in an HTTP response?", type: 'subjective', answer: "The `Content-Type` header is used to indicate the media type of the resource. For example, a response of `application/json` tells the client that the body of the response is a JSON string." },
    { id: 370, testId: 5, difficulty: 'hard', question: "What is 'database normalization'?", type: 'subjective', answer: "Database normalization is the process of organizing the columns and tables of a relational database to minimize data redundancy. It involves dividing larger tables into smaller, well-structured tables and defining relationships between them." },
    { id: 371, testId: 5, difficulty: 'medium', question: "What does the `git clone` command do?", type: 'mcq', options: ['Creates a new branch', 'Creates a copy of an existing Git repository', 'Commits changes', 'Merges branches'], answer: 'Creates a copy of an existing Git repository' },
    { id: 372, testId: 5, difficulty: 'medium', question: "What is 'Big O notation'?", type: 'subjective', answer: "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it is used to classify algorithms according to how their run time or space requirements grow as the input size grows." },
    { id: 373, testId: 5, difficulty: 'medium', question: "What is a 'stack trace'?", type: 'subjective', answer: "A stack trace is a report of the active stack frames at a certain point in time during the execution of a program. It's commonly used during debugging to find the source of an error." },
    { id: 374, testId: 5, difficulty: 'hard', question: "What is a 'memory leak' in a backend application?", type: 'subjective', answer: "A memory leak occurs when a program allocates memory but loses the ability to release it, leading to a gradual exhaustion of available memory. Common causes include unclosed connections, unterminated child processes, or objects that are unintentionally kept in memory." },
    { id: 375, testId: 5, difficulty: 'hard', question: "What is 'failover'?", type: 'subjective', answer: "Failover is the process of automatically switching to a redundant or standby server, system, or network upon the failure or abnormal termination of the previously active application, server, system, or network." },
    //... (remaining questions to fill up to 275 total for this category)
  ],
  'full-stack': [
    //... (275 questions for full-stack)
    { id: 401, testId: 1, question: "What are the two main parts of a full-stack application?", type: 'mcq', options: ['Client-side and Server-side', 'Database and API', 'HTML and CSS', 'JavaScript and Python'], answer: 'Client-side and Server-side', difficulty: 'easy' },
    { id: 402, testId: 1, question: "What is a common task for a frontend developer?", type: 'subjective', answer: 'A common task is to build the user interface and user experience of a website or application, often using HTML, CSS, and JavaScript.', difficulty: 'easy' },
    { id: 403, testId: 1, question: "What is a common task for a backend developer?", type: 'subjective', answer: 'A common task is to build and maintain the server-side logic, databases, and APIs that power an application.', difficulty: 'easy' },
    { id: 404, testId: 1, question: "Which technology is a database?", type: 'mcq', options: ['React', 'Node.js', 'PostgreSQL', 'CSS'], answer: 'PostgreSQL', difficulty: 'easy' },
    { id: 405, testId: 1, question: "What does API stand for?", type: 'mcq', options: ['Application Programming Interface', 'Automated Program Interaction', 'Application Process Integration', 'Algorithmic Protocol Interface'], answer: 'Application Programming Interface', difficulty: 'easy' },
    //... More questions for all tests
  ],
  'next-js': [
    //... (275 questions for next-js)
    { id: 501, testId: 1, question: "What is Next.js?", type: 'mcq', options: ['A database', 'A CSS framework', 'A React framework for production', 'A Node.js runtime'], answer: 'A React framework for production', difficulty: 'easy' },
    { id: 502, testId: 1, question: "What is one key feature of Next.js?", type: 'subjective', answer: 'One key feature is Server-Side Rendering (SSR), which can improve performance and SEO by rendering React components on the server.', difficulty: 'easy' },
    { id: 503, testId: 1, question: "What is file-system based routing?", type: 'subjective', answer: 'In Next.js, pages are automatically routed based on their file name. For example, `pages/about.js` maps to the `/about` URL path.', difficulty: 'easy' },
    { id: 504, testId: 1, question: "What command is used to start a Next.js development server?", type: 'mcq', options: ['npm start', 'npm run dev', 'next start', 'next dev'], answer: 'npm run dev', difficulty: 'easy' },
    { id: 505, testId: 1, question: "What is the purpose of the `_app.js` file?", type: 'mcq', options: ['To define API routes', 'To initialize pages', 'To create a custom 404 page', 'To define the main application layout'], answer: 'To initialize pages', difficulty: 'easy' },
    //... More questions for all tests
  ],
  java: [
    //... (275 questions for java)
     {id: 601, testId: 1, question: "What is the JVM?", type: 'mcq', options: ['Java Virtual Machine', 'Java Visual Machine', 'JSON Virtual Machine'], answer: 'Java Virtual Machine', difficulty: 'easy'},
     {id: 602, testId: 1, question: "What is the difference between `public`, `private`, and `protected`?", type: 'subjective', answer: 'They are access modifiers. `public` is accessible from anywhere. `private` is only accessible within the same class. `protected` is accessible within the same package and by subclasses.', difficulty: 'easy'},
     {id: 603, testId: 1, question: "Is Java a compiled or interpreted language?", type: 'mcq', options: ['Compiled', 'Interpreted', 'Both'], answer: 'Both', difficulty: 'easy'},
     {id: 604, testId: 1, question: "What is a constructor?", type: 'subjective', answer: 'A constructor is a special method used to initialize objects. It is called when an instance of a class is created.', difficulty: 'easy'},
     {id: 605, testId: 1, question: "What is the root class of all classes in Java?", type: 'mcq', options: ['Object', 'Class', 'Main', 'System'], answer: 'Object', difficulty: 'easy'},
    //... More questions for all tests
  ],
  python: [
    //... (275 questions for python)
     {id: 701, testId: 1, question: "Is Python a statically typed or dynamically typed language?", type: 'mcq', options: ['Statically typed', 'Dynamically typed'], answer: 'Dynamically typed', difficulty: 'easy'},
     {id: 702, testId: 1, question: "What is the difference between a list and a tuple?", type: 'subjective', answer: 'Lists are mutable, meaning their elements can be changed, while tuples are immutable.', difficulty: 'easy'},
     {id: 703, testId: 1, question: "What keyword is used to define a function in Python?", type: 'mcq', options: ['function', 'def', 'fun', 'define'], answer: 'def', difficulty: 'easy'},
     {id: 704, testId: 1, question: "What is a dictionary in Python?", type: 'subjective', answer: 'A dictionary is an unordered collection of data values, used to store data values like a map, which, unlike other Data Types that hold only a single value as an element, Dictionary holds key:value pair.', difficulty: 'easy'},
     {id: 705, testId: 1, question: "What does the `pass` statement do?", type: 'mcq', options: ['Exits the program', 'Skips the current iteration of a loop', 'Acts as a placeholder for future code', 'Returns a value'], answer: 'Acts as a placeholder for future code', difficulty: 'easy'},
    //... More questions for all tests
  ],
  mern: [
    //... (275 questions for mern)
     {id: 801, testId: 1, question: "What does MERN stand for?", type: 'mcq', options: ['MongoDB, Express, React, Node.js', 'MySQL, Express, React, Node.js', 'MongoDB, EJS, React, Node.js'], answer: 'MongoDB, Express, React, Node.js', difficulty: 'easy'},
     {id: 802, testId: 1, question: "Which part of MERN is the frontend framework?", type: 'mcq', options: ['MongoDB', 'Express', 'React', 'Node.js'], answer: 'React', difficulty: 'easy'},
     {id: 803, testId: 1, question: "Which part of MERN is the backend runtime environment?", type: 'mcq', options: ['MongoDB', 'Express', 'React', 'Node.js'], answer: 'Node.js', difficulty: 'easy'},
     {id: 804, testId: 1, question: "What is the role of Express.js in the MERN stack?", type: 'subjective', answer: 'Express.js is a backend web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications.', difficulty: 'easy'},
     {id: 805, testId: 1, question: "What kind of database is MongoDB?", type: 'subjective', answer: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.', difficulty: 'easy'},
    //... More questions for all tests
  ],
  'c-plus-plus': [
    //... (275 questions for c-plus-plus)
    { id: 901, testId: 1, question: "What is a pointer in C++?", type: 'subjective', answer: 'A pointer is a variable that stores the memory address of another variable. It "points" to the location of the other variable in memory.', difficulty: 'easy' },
    { id: 902, testId: 1, question: "What is the difference between `++i` and `i++`?", type: 'subjective', answer: '`++i` (pre-increment) increments the value of `i` and then returns the new value. `i++` (post-increment) returns the original value of `i` and then increments it.', difficulty: 'easy' },
    { id: 903, testId: 1, question: "Which keyword is used to define a class in C++?", type: 'mcq', options: ['class', 'struct', 'object', 'type'], answer: 'class', difficulty: 'easy' },
    { id: 904, testId: 1, question: "What is a reference in C++?", type: 'subjective', answer: 'A reference is an alias for an already existing variable. Once a reference is initialized to a variable, it cannot be changed to refer to another variable.', difficulty: 'easy' },
    { id: 905, testId: 1, question: "What is the purpose of the `iostream` header?", type: 'mcq', options: ['For file input/output', 'For standard input/output operations (like `cin` and `cout`)', 'For string manipulation', 'For mathematical functions'], answer: 'For standard input/output operations (like `cin` and `cout`)', difficulty: 'easy' },
    //... More questions for all tests
  ],
  devops: [
    //... (275 questions for devops)
    { id: 1001, testId: 1, question: "What is DevOps?", type: 'subjective', answer: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.', difficulty: 'easy' },
    { id: 1002, testId: 1, question: "What is CI/CD?", type: 'subjective', answer: 'CI/CD stands for Continuous Integration and Continuous Delivery/Deployment. CI is the practice of automatically building and testing code changes. CD is the practice of automatically deploying code changes to a testing or production environment.', difficulty: 'easy' },
    { id: 1003, testId: 1, question: "Which of the following is a popular CI/CD tool?", type: 'mcq', options: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform'], answer: 'Jenkins', difficulty: 'easy' },
    { id: 1004, testId: 1, question: "What is 'Infrastructure as Code' (IaC)?", type: 'mcq', options: ['Writing infrastructure code in Python', 'Managing infrastructure through configuration files', 'A type of hardware', 'A cloud computing service'], answer: 'Managing infrastructure through configuration files', difficulty: 'easy' },
    { id: 1005, testId: 1, question: "What is a container?", type: 'subjective', answer: 'A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. Docker is a popular containerization platform.', difficulty: 'easy' },
    //... More questions for all tests
  ],
  'data-science': [
    //... (275 questions for data-science)
    { id: 1101, testId: 1, question: "What is the difference between supervised and unsupervised learning?", type: 'subjective', answer: 'Supervised learning uses labeled data to train a model (i.e., you know the correct output). Unsupervised learning works with unlabeled data to find patterns or structure within it.', difficulty: 'easy' },
    { id: 1102, testId: 1, question: "What is 'overfitting' in machine learning?", type: 'subjective', answer: 'Overfitting occurs when a model learns the training data too well, including the noise and details, to the point that it performs poorly on new, unseen data.', difficulty: 'easy' },
    { id: 1103, testId: 1, question: "Which of these is a common library for data science in Python?", type: 'mcq', options: ['React', 'Pandas', 'Express', 'Django'], answer: 'Pandas', difficulty: 'easy' },
    { id: 1104, testId: 1, question: "What is a 'feature' in machine learning?", type: 'mcq', options: ['A bug in the model', 'A single measurable property or characteristic of a phenomenon being observed', 'The output of the model', 'The algorithm used for training'], answer: 'A single measurable property or characteristic of a phenomenon being observed', difficulty: 'easy' },
    { id: 1105, testId: 1, question: "What is a 'confusion matrix' used for?", type: 'subjective', answer: 'A confusion matrix is a table used to describe the performance of a classification model. It shows the number of true positives, true negatives, false positives, and false negatives.', difficulty: 'easy' },
    //... More questions for all tests
  ],
  'ai-ml': [
    //... (275 questions for ai-ml)
    { id: 1201, testId: 1, question: "What is the difference between AI, Machine Learning, and Deep Learning?", type: 'subjective', answer: 'AI is the broad field of creating intelligent machines. Machine Learning is a subset of AI that uses algorithms to learn from data. Deep Learning is a subset of ML that uses neural networks with many layers (deep neural networks).', difficulty: 'easy' },
    { id: 1202, testId: 1, question: "What is a 'neural network'?", type: 'subjective', answer: 'A neural network is a computing system inspired by the biological neural networks that constitute animal brains. It consists of interconnected nodes (neurons) organized in layers, which process data and learn from it.', difficulty: 'easy' },
    { id: 1203, testId: 1, question: "What is a 'hyperparameter'?", type: 'mcq', options: ['A parameter of the model that is learned during training', 'A parameter that is set before the training process begins', 'The output of a model', 'A type of data preprocessing'], answer: 'A parameter that is set before the training process begins', difficulty: 'easy' },
    { id: 1204, testId: 1, question: "What is 'gradient descent'?", type: 'subjective', answer: 'Gradient descent is an optimization algorithm used to find the local minimum of a function. In machine learning, it is used to update the parameters of a model to minimize the loss function.', difficulty: 'easy' },
    { id: 1205, testId: 1, question: "What is a 'loss function'?", type: 'mcq', options: ['A function that measures how well the model\'s predictions match the actual data', 'A function that stops the training process', 'A function that adds more layers to a neural network', 'A function that normalizes data'], answer: 'A function that measures how well the model\'s predictions match the actual data', difficulty: 'easy' },
    //... More questions for all tests
  ],
  'cloud-computing': [
    //... (275 questions for cloud-computing)
    { id: 1301, testId: 1, question: "What are the three main service models of cloud computing?", type: 'mcq', options: ['IaaS, PaaS, SaaS', 'VPC, S3, EC2', 'AWS, Azure, GCP', 'Public, Private, Hybrid'], answer: 'IaaS, PaaS, SaaS', difficulty: 'easy' },
    { id: 1302, testId: 1, question: "What does 'IaaS' stand for?", type: 'subjective', answer: 'IaaS stands for Infrastructure as a Service. It provides virtualized computing resources over the internet, such as virtual machines, storage, and networking.', difficulty: 'easy' },
    { id: 1303, testId: 1, question: "What does 'SaaS' stand for?", type: 'subjective', answer: 'SaaS stands for Software as a Service. It provides software applications over the internet on a subscription basis, like Google Workspace or Office 365.', difficulty: 'easy' },
    { id: 1304, testId: 1, question: "What is a major benefit of cloud computing?", type: 'mcq', options: ['High upfront cost', 'Limited scalability', 'Elasticity and scalability', 'Requires physical server maintenance'], answer: 'Elasticity and scalability', difficulty: 'easy' },
    { id: 1305, testId: 1, question: "What is a 'VPC' in AWS?", type: 'subjective', answer: 'A Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.', difficulty: 'easy' },
    //... More questions for all tests
  ],
  'mobile-development': [
    //... (275 questions for mobile-development)
    { id: 1401, testId: 1, question: "What are the two primary mobile operating systems?", type: 'mcq', options: ['iOS and Android', 'Windows and macOS', 'Linux and Android', 'iOS and Symbian'], answer: 'iOS and Android', difficulty: 'easy' },
    { id: 1402, testId: 1, question: "What programming language is primarily used for native Android development?", type: 'mcq', options: ['Swift', 'Kotlin', 'JavaScript', 'C#'], answer: 'Kotlin', difficulty: 'easy' },
    { id: 1403, testId: 1, question: "What programming language is primarily used for native iOS development?", type: 'mcq', options: ['Swift', 'Kotlin', 'Java', 'Objective-C'], answer: 'Swift', difficulty: 'easy' },
    { id: 1404, testId: 1, question: "What is an 'Activity' in Android development?", type: 'subjective', answer: 'An Activity represents a single screen with a user interface. It is the entry point for interacting with the user.', difficulty: 'easy' },
    { id: 1405, testId: 1, question: "What is a 'UIViewController' in iOS development?", type: 'subjective', answer: 'A UIViewController manages a view hierarchy and the interactions of the user with the interface. It is the foundation of your app’s internal structure.', difficulty: 'easy' },
    //... More questions for all tests
  ],
  'cybersecurity': [
    //... (275 questions for cybersecurity)
    { id: 1501, testId: 1, question: "What does 'CIA' stand for in the context of cybersecurity?", type: 'mcq', options: ['Confidentiality, Integrity, Availability', 'Central Intelligence Agency', 'Cybersecurity Intelligence Agency', 'Confidentiality, Information, Access'], answer: 'Confidentiality, Integrity, Availability', difficulty: 'easy' },
    { id: 1502, testId: 1, question: "What is 'phishing'?", type: 'subjective', answer: 'Phishing is a type of social engineering attack where attackers attempt to trick people into revealing sensitive information, such as usernames, passwords, and credit card details, by disguising themselves as a trustworthy entity.', difficulty: 'easy' },
    { id: 1503, testId: 1, question: "What is a 'firewall'?", type: 'subjective', answer: 'A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and an untrusted external network, such as the Internet.', difficulty: 'easy' },
    { id: 1504, testId: 1, question: "What is malware?", type: 'mcq', options: ['Any software intentionally designed to cause damage to a computer, server, client, or computer network', 'A type of computer hardware', 'A network protocol', 'A security certificate'], answer: 'Any software intentionally designed to cause damage to a computer, server, client, or computer network', difficulty: 'easy' },
    { id: 1505, testId: 1, question: "What is two-factor authentication (2FA)?", type: 'subjective', answer: 'Two-factor authentication is a security process where users provide two different authentication factors to verify themselves. This adds an extra layer of security, making it harder for unauthorized users to gain access.', difficulty: 'easy' },
    //... More questions for all tests
  ],
};
