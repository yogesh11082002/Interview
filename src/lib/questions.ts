
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

    // Test 5 (Medium-Hard - 5 questions)
    { id: 51, testId: 5, difficulty: 'medium', question: "How would you debounce a function in JavaScript?", type: 'subjective', answer: "Debouncing is a technique to limit the rate at which a function gets called. You would create a wrapper function that uses `setTimeout` to delay execution. If the wrapper is called again before the timeout completes, the previous timeout is cleared and a new one is set." },
    { id: 52, testId: 5, difficulty: 'hard', question: "Explain how `this` keyword works in JavaScript.", type: 'subjective', answer: "The value of `this` depends on the context in which it is called. In a method, it refers to the owner object. In a regular function, it refers to the global object (or `undefined` in strict mode). In an event, it refers to the element that received the event. Arrow functions lexically bind `this` from their parent scope." },
    { id: 53, testId: 5, difficulty: 'hard', question: "What are CSS Custom Properties (Variables) and what are their benefits?", type: 'subjective', answer: "CSS Custom Properties are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the `var()` function (e.g., `color: var(--main-color);`). Benefits include DRY code, easier theming, and dynamic changes via JavaScript." },
    { id: 54, testId: 5, difficulty: 'hard', question: "What is hydration in the context of SSR with React?", type: 'subjective', answer: "Hydration is the process of attaching event listeners and making the static HTML received from the server interactive. React 'hydrates' the server-rendered HTML by building a virtual DOM in memory and attaching the necessary JavaScript logic to the existing markup." },
    { id: 55, testId: 5, difficulty: 'hard', question: "What is the difference between a `Map` and a `WeakMap` in JavaScript?", type: 'subjective', answer: "A `WeakMap` only accepts objects as keys. The references to the keys are held 'weakly', meaning if there are no other references to an object used as a key, it can be garbage collected. A `Map` can have any value (primitive or object) as a key and holds strong references, preventing garbage collection." },

    // Test 6 (Hard - 5 questions)
    { id: 56, testId: 6, difficulty: 'hard', question: "How does React's reconciliation algorithm work?", type: 'subjective', answer: "Reconciliation is the process through which React updates the DOM. When a component's state changes, React creates a new virtual DOM tree and compares it ('diffing') with the previous one. It then computes the minimal set of changes needed to update the real DOM, and applies them in a batch." },
    { id: 57, testId: 6, difficulty: 'hard', question: "What are render props in React?", type: 'subjective', answer: "The term 'render prop' refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic." },
    { id: 58, testId: 6, difficulty: 'hard', question: "Explain Content Security Policy (CSP).", type: 'subjective', answer: "CSP is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. It's a browser mechanism that allows you to create a whitelist of sources of trusted content and will only allow content from those sources to be loaded." },
    { id: 59, testId: 6, difficulty: 'hard', question: "What are some performance optimization strategies for a large-scale React application?", type: 'subjective', answer: "Strategies include code splitting using `React.lazy`, memoization with `useMemo` and `useCallback`, windowing large lists with libraries like `react-window`, avoiding unnecessary re-renders with `React.memo`, and proper dependency management in `useEffect`." },
    { id: 60, testId: 6, difficulty: 'hard', question: "Describe how you would implement internationalization (i18n) in a React application.", type: 'subjective', answer: "Implementation usually involves a library like `react-i18next`. You would store translations in JSON files for each language, use a provider to wrap the app, and use a hook (e.g., `useTranslation`) to access the translation function (`t`) and switch languages. The `t` function would take a key and return the appropriate string for the current language." },

    // Test 7 (Hard - 5 questions)
    { id: 61, testId: 7, difficulty: 'hard', question: "What is an Abstract Syntax Tree (AST)?", type: 'subjective', answer: "An AST is a tree representation of the abstract syntactic structure of source code. Tools like Babel and webpack use ASTs to understand and transform code. For example, Babel parses code into an AST, transforms it (e.g., converting ES6 to ES5), and then generates the transformed code back from the AST." },
    { id: 62, testId: 7, difficulty: 'hard', question: "What are the advantages and disadvantages of micro-frontends?", type: 'subjective', answer: "Advantages: Independent deployments, autonomous teams, technology-agnostic architecture. Disadvantages: Increased complexity in routing and state management, potential for code duplication and larger bundle sizes if not managed properly, and challenges in maintaining a consistent user experience." },
    { id: 63, testId: 7, difficulty: 'hard', question: "What is the purpose of the `useImperativeHandle` hook in React?", type: 'subjective', answer: "`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`. It's used in conjunction with `forwardRef` to expose specific functions from a child component to a parent, rather than the entire component instance." },
    { id:64, testId: 7, difficulty: 'hard', question: "Explain the concept of 'island architecture'.", type: 'subjective', answer: "Island architecture is a design pattern for web pages where interactive components ('islands') are delivered as isolated, self-contained units on an otherwise static HTML page. This reduces the amount of JavaScript shipped to the client, improving performance. Frameworks like Astro use this pattern." },
    { id: 65, testId: 7, difficulty: 'hard', question: "What is `stale-while-revalidate` caching strategy?", type: 'subjective', answer: "`stale-while-revalidate` is a caching strategy where a cached response is served immediately (stale) while a new request is made in the background to update the cache for future requests (revalidate). This provides a fast response time while keeping data fresh." },

    // Test 8 (Very Hard - 5 questions)
    { id: 66, testId: 8, difficulty: 'expert', question: "How could you implement a Redux-like state management system from scratch using only React hooks?", type: 'subjective', answer: "You could use `useReducer` for the state logic and `useContext` to provide the state and dispatch function to the entire component tree. A custom hook could then be created to abstract away the `useContext` call, similar to `useSelector` and `useDispatch`." },
    { id: 67, testId: 8, difficulty: 'expert', question: "What are some security concerns with `localStorage` and how can you mitigate them?", type: 'subjective', answer: "The main concern is XSS (Cross-Site Scripting), as any script on the page can access all data in `localStorage`. Sensitive data like JWTs should not be stored there. Mitigation includes storing tokens in memory or in secure, httpOnly cookies, and implementing a strict Content Security Policy (CSP)." },
    { id: 68, testId: 8, difficulty: 'expert', question: "What is concurrent mode in React?", type: 'subjective', answer: "Concurrent Mode is a set of features that help React apps stay responsive by making rendering interruptible. It allows React to work on multiple state updates concurrently, pausing and resuming work to avoid blocking the main thread. It's the underlying mechanism for features like `useTransition` and `useDeferredValue`." },
    { id: 69, testId: 8, difficulty: 'expert', question: "What is the difference between shadow DOM and virtual DOM?", type: 'subjective', answer: "Shadow DOM is a browser technology designed for scoping and encapsulating styles and scripts within a component (part of Web Components). Virtual DOM is a concept implemented by libraries like React; it's a representation of the DOM in memory used to optimize updates to the real DOM." },
    { id: 70, testId: 8, difficulty: 'expert', question: "How would you architect a scalable and maintainable CSS system for a large application?", type: 'subjective', answer: "A good approach would be using CSS-in-JS (like Styled Components or Emotion) for component-scoped styles, a utility-first framework (like Tailwind CSS) for rapid prototyping and layout, or a strict methodology like BEM with CSS preprocessors (like Sass) to maintain organization and prevent style conflicts." },

    // Test 9 (Expert - 5 questions)
    { id: 71, testId: 9, difficulty: 'expert', question: "How do JavaScript engines like V8 compile and execute code?", type: 'subjective', answer: "V8 uses a JIT (Just-In-Time) compiler. It initially parses the code into an AST, then the Ignition interpreter generates bytecode. As code runs, the TurboFan optimizing compiler identifies hot paths, compiles them into highly optimized machine code, and de-optimizes if assumptions prove incorrect." },
    { id: 72, testId: 9, difficulty: 'expert', question: "Explain how browser rendering engines work, from receiving HTML to painting pixels.", type: 'subjective', answer: "The process involves: 1. Parsing HTML to build the DOM tree. 2. Parsing CSS to build the CSSOM tree. 3. Combining DOM and CSSOM to form the Render Tree. 4. Layout/Reflow: Calculating the size and position of each object. 5. Painting: Drawing the pixels on the screen. JavaScript can interrupt this process." },
    { id: 73, testId: 9, difficulty: 'expert', question: "What are the challenges of managing state in a micro-frontend architecture?", type: 'subjective', answer: "Challenges include sharing state between different micro-frontends, ensuring consistency, avoiding data duplication, and handling authentication/authorization. Solutions can involve using custom events, web storage with a shared convention, or creating a dedicated shared library or state management micro-frontend." },
    { id: 74, testId: 9, difficulty: 'expert', question: "Describe a situation where you would NOT use React or a similar framework.", type: 'subjective', answer: "For very simple, static content websites where interactivity is minimal. Also, in environments where low memory footprint or minimal JS is an absolute requirement, such as some embedded devices or for a site aiming for extreme performance on low-end devices with slow networks." },
    { id: 75, testId: 9, difficulty: 'expert', question: "What is `requestIdleCallback` and how might you use it?", type: 'subjective', answer: "`requestIdleCallback` is a browser API that queues a function to be called during a browser's idle periods. This is useful for performing low-priority or background tasks (like logging or analytics) without interfering with high-priority work like animations or user input." },

    // Test 10 (Expert - 5 questions)
    { id: 76, testId: 10, difficulty: 'expert', question: "How do you handle memory leaks in a single-page application (SPA)?", type: 'subjective', answer: "Common causes are un-removed event listeners, uncleared timers (`setInterval`), and closures holding references to detached DOM nodes. You can use browser developer tools (like the Chrome heap profiler) to take snapshots and identify detached nodes. In React, cleanup functions in `useEffect` are crucial for removing listeners and timers." },
    { id: 77, testId: 10, difficulty: 'expert', question: "Explain the technical details of how React's `useState` hook works internally.", type: 'subjective', answer: "React maintains an array of state cells for each component. Each call to `useState` on the initial render creates a new cell. On subsequent renders, React retrieves the state from the corresponding cell in the array. This is why hooks must be called in the same order on every render. The setter function enqueues a state update and triggers a re-render." },
    { id: 78, testId: 10, difficulty: 'expert', question: "What are the trade-offs of using CSS-in-JS libraries?", type: 'subjective', answer: "Pros: Scoped styles by default (no conflicts), colocating styles with components, dynamic styling based on props. Cons: Potential runtime performance overhead, increased bundle size, and a steeper learning curve for developers used to traditional CSS." },
    { id: 79, testId: 10, difficulty: 'expert', question: "What are HTTP/2 and HTTP/3 and what problems do they solve?", type: 'subjective', answer: "HTTP/2 introduced multiplexing, allowing multiple requests and responses over a single TCP connection, solving the head-of-line blocking problem of HTTP/1.1. HTTP/3 uses QUIC instead of TCP, which further reduces connection setup time and improves performance on lossy networks by solving head-of-line blocking at the transport layer." },
    { id: 80, testId: 10, difficulty: 'expert', question: "You are tasked with improving the Largest Contentful Paint (LCP) score for a web page. What steps would you take?", type: 'subjective', answer: "1. Identify the LCP element using browser dev tools. 2. Optimize the element itself (e.g., compress images, use modern formats like AVIF/WebP). 3. Preload the LCP resource with `<link rel='preload'>`. 4. Reduce server response time (TTFB). 5. Eliminate render-blocking resources (CSS/JS) that delay the rendering of the LCP element." },
  ],
  backend: [
     // Test 1 (Easy - 5 questions: 3 MCQ, 2 Subjective)
    {
      id: 101,
      testId: 1,
      difficulty: 'easy',
      question: "What does API stand for?",
      type: 'mcq',
      options: ['Application Programming Interface', 'Automated Program Interaction', 'Algorithmic Protocol Interface', 'Application Process Integration'],
      answer: 'Application Programming Interface',
      explanation: 'An API is a set of rules and protocols that allows different software applications to communicate with each other.'
    },
    {
      id: 102,
      testId: 1,
      difficulty: 'easy',
      question: "Which HTTP method is typically used for retrieving data from a server?",
      type: 'mcq',
      options: ['POST', 'GET', 'DELETE', 'PUT'],
      answer: 'GET',
      explanation: 'The GET method is used to request data from a specified resource.'
    },
    {
      id: 103,
      testId: 1,
      difficulty: 'easy',
      question: "Which HTTP status code means 'Not Found'?",
      type: 'mcq',
      options: ['200', '500', '404', '301'],
      answer: '404',
      explanation: "A 404 status code indicates that the server could not find the requested resource."
    },
    {
        id: 104,
        testId: 1,
        difficulty: 'easy',
        question: "What is a database?",
        type: 'subjective',
        answer: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system, designed for efficient storage, retrieval, and management.",
        explanation: "Databases are essential for storing, managing, and retrieving application data."
    },
    {
        id: 105,
        testId: 1,
        difficulty: 'easy',
        question: "What is the purpose of an index in a database?",
        type: 'subjective',
        answer: "A database index is a data structure that improves the speed of data retrieval operations on a database table. It works like an index in a book, allowing the database to find data without scanning the entire table.",
        explanation: "Indexes are crucial for optimizing database query performance, but they can slow down data modification operations (INSERT, UPDATE, DELETE)."
    },

    // Test 2 (Easy-Medium - 10 questions: 6 MCQ, 4 Subjective)
    {
      id: 106,
      testId: 2,
      difficulty: 'easy',
      question: "Which of the following is NOT a valid HTTP verb?",
      type: 'mcq',
      options: ['GET', 'POST', 'FETCH', 'PATCH'],
      answer: 'FETCH',
      explanation: "`FETCH` is a JavaScript API for making requests, but it is not an HTTP verb itself. Common verbs include GET, POST, PUT, PATCH, DELETE."
    },
    {
      id: 107,
      testId: 2,
      difficulty: 'easy',
      question: "Which component is responsible for mapping a URL to a specific function in a backend framework?",
      type: 'mcq',
      options: ['Middleware', 'Router', 'Template Engine', 'ORM'],
      answer: 'Router',
      explanation: "A router is used to direct incoming requests to the appropriate handler function based on the URL path and HTTP method."
    },
    {
      id: 108,
      testId: 2,
      difficulty: 'medium',
      question: "What is the difference between SQL and NoSQL databases?",
      type: 'subjective',
      answer: "SQL databases are relational (data stored in tables), use a predefined schema, and scale vertically. NoSQL databases are non-relational (e.g., document, key-value), have a dynamic schema, and scale horizontally.",
      explanation: "The choice between SQL and NoSQL depends on the application's data model and scalability needs."
    },
    {
      id: 109,
      testId: 2,
      difficulty: 'medium',
      question: "What is REST?",
      type: 'subjective',
      answer: "REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, most commonly HTTP, and uses standard HTTP methods.",
      explanation: "RESTful APIs are the most common standard for web services."
    },
    {
      id: 110,
      testId: 2,
      difficulty: 'medium',
      question: "What is middleware in the context of a backend framework like Express.js?",
      type: 'subjective',
      answer: "Middleware functions have access to the request (req) and response (res) objects, and the next middleware function. They can execute code, modify req/res objects, end the request-response cycle, or pass control to the next middleware.",
      explanation: "Middleware is used for tasks like logging, authentication, and error handling."
    },
    {
      id: 111,
      testId: 2,
      difficulty: 'medium',
      question: "What is hashing in the context of password security?",
      type: 'mcq',
      options: ["A two-way encryption method", "A way to compress data", "A one-way function to create a unique, fixed-size string", "A method for indexing databases"],
      answer: "A one-way function to create a unique, fixed-size string",
      explanation: "Hashing is the process of converting a password into a fixed-length string of characters, which is a one-way function. It's used to store passwords securely."
    },
    {
      id: 112,
      testId: 2,
      difficulty: 'medium',
      question: "What does 'stateless' mean in the context of REST APIs?",
      type: 'mcq',
      options: ["The server stores the client's session data", "The client stores all the application state", "The server does not store any client context between requests", "The API can only be used for static content"],
      answer: "The server does not store any client context between requests",
      explanation: "Stateless means that each request from a client must contain all the information needed to understand and process the request. This improves scalability."
    },
    {
      id: 113,
      testId: 2,
      difficulty: 'medium',
      question: "What is a 'race condition'?",
      type: 'subjective',
      answer: "A race condition occurs when a system's behavior depends on the sequence or timing of uncontrollable events. It becomes a bug when events do not happen in the order the programmer intended, often in concurrent or multi-threaded environments.",
      explanation: "Race conditions can lead to unpredictable behavior and are a common challenge in concurrent programming."
    },
    {
      id: 114,
      testId: 2,
      difficulty: 'medium',
      question: "What is an ORM?",
      type: 'mcq',
      options: ["A database management system", "A programming language", "A technique for converting data between incompatible type systems", "A type of web server"],
      answer: "A technique for converting data between incompatible type systems",
      explanation: "An Object-Relational Mapper (ORM) is a library that automates the transfer of data stored in relational database tables into objects that are more commonly used in application code."
    },
    {
      id: 115,
      testId: 2,
      difficulty: 'medium',
      question: "What is the N+1 problem in ORMs?",
      type: 'mcq',
      options: ["A security vulnerability", "An inefficient database query pattern", "A type of network error", "A memory leak issue"],
      answer: "An inefficient database query pattern",
      explanation: "The N+1 problem occurs when an ORM executes one query to retrieve a list of parent objects, and then one additional query for each parent object to retrieve its related child objects (N additional queries)."
    },
     // Test 3 (Medium - 15 questions)
    { id: 116, testId: 3, difficulty: 'medium', question: "What is the purpose of JWT (JSON Web Token)?", type: 'subjective', answer: "JWTs are used to securely transmit information between parties as a JSON object. They are commonly used for authentication and authorization, allowing the server to verify that the client has permission to access certain resources." },
    { id: 117, testId: 3, difficulty: 'medium', question: "What are the main components of a JWT?", type: 'mcq', options: ['Header, Payload, Signature', 'Header, Body, Footer', 'Key, Value, Secret', 'Issuer, Subject, Expiry'], answer: 'Header, Payload, Signature' },
    { id: 118, testId: 3, difficulty: 'medium', question: "What is caching and why is it important in backend systems?", type: 'subjective', answer: "Caching is the process of storing copies of files or data in a temporary storage location (a cache) so that they can be accessed more quickly. It's important for improving performance, reducing latency, and decreasing the load on the backend servers and databases." },
    { id: 119, testId: 3, difficulty: 'medium', question: "What is the difference between authentication and authorization?", type: 'subjective', answer: "Authentication is the process of verifying who a user is. Authorization is the process of verifying what a user has permission to do." },
    { id: 120, testId: 3, difficulty: 'medium', question: "What is a 'connection pool' in the context of databases?", type: 'subjective', answer: "A connection pool is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. It improves performance by avoiding the overhead of establishing a new connection for every request." },
    { id: 121, testId: 3, difficulty: 'medium', question: "Which of the following is a message broker?", type: 'mcq', options: ['Redis', 'PostgreSQL', 'RabbitMQ', 'Nginx'], answer: 'RabbitMQ' },
    { id: 122, testId: 3, difficulty: 'medium', question: "What is the role of a reverse proxy?", type: 'subjective', answer: "A reverse proxy is a server that sits in front of one or more web servers, intercepting requests from clients. It is used for load balancing, security (hiding the identity of backend servers), caching, and SSL termination." },
    { id: 123, testId: 3, difficulty: 'medium', question: "What are ACID properties in a database transaction?", type: 'subjective', answer: "ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that guarantee that database transactions are processed reliably. Atomicity: All or nothing. Consistency: The database remains in a valid state. Isolation: Concurrent transactions do not affect each other. Durability: Committed transactions are permanent." },
    { id: 124, testId: 3, difficulty: 'medium', question: "What is 'salting' a password?", type: 'mcq', options: ['Encrypting the password', 'Adding a random string to a password before hashing it', 'Compressing the password', 'Storing the password in plain text'], answer: 'Adding a random string to a password before hashing it' },
    { id: 125, testId: 3, difficulty: 'medium', question: "What is a 'blocking' I/O operation?", type: 'subjective', answer: "A blocking I/O operation is one where the execution of the application is blocked until the I/O operation completes. For example, reading a file from disk will block the thread until the file is fully read." },
    { id: 126, testId: 3, difficulty: 'medium', question: "Explain the concept of 'idempotency' in APIs.", type: 'subjective', answer: "An idempotent operation is one that has the same effect whether it is performed once or multiple times. For example, a `PUT` request to update a resource is idempotent, while a `POST` request to create a new resource is not." },
    { id: 127, testId: 3, difficulty: 'medium', question: "What is a 'foreign key' in a relational database?", type: 'mcq', options: ['The primary key of another table', 'A key used for encryption', 'A unique identifier for a row', 'An index for faster queries'], answer: 'The primary key of another table' },
    { id: 128, testId: 3, difficulty: 'medium', question: "What is the purpose of environment variables in a backend application?", type: 'subjective', answer: "Environment variables are used to store configuration settings that are specific to the environment where the application is running (e.g., development, staging, production). This allows for managing secrets like API keys and database credentials without hardcoding them into the source code." },
    { id: 129, testId: 3, difficulty: 'medium', question: "What is containerization (e.g., Docker)?", type: 'subjective', answer: "Containerization is a form of OS-level virtualization used to deploy and run distributed applications without launching an entire virtual machine for each app. Containers package up an application's code, libraries, and dependencies into a single, isolated unit." },
    { id: 130, testId: 3, difficulty: 'medium', question: "What is the purpose of an API gateway?", type: 'mcq', options: ['To connect to a database', 'To act as a single entry point for all client requests to a backend service', 'To serve static files', 'To compile code'], answer: 'To act as a single entry point for all client requests to a backend service' },

    // Test 4 (Medium - 20 questions)
    { id: 131, testId: 4, difficulty: 'medium', question: "What is GraphQL and how does it differ from REST?", type: 'subjective', answer: "GraphQL is a query language for APIs. Unlike REST, which has multiple endpoints that return fixed data structures, GraphQL has a single endpoint and allows the client to request exactly the data it needs, preventing over-fetching and under-fetching." },
    { id: 132, testId: 4, difficulty: 'medium', question: "What is vertical vs. horizontal scaling?", type: 'subjective', answer: "Vertical scaling (scaling up) means adding more resources (e.g., CPU, RAM) to an existing server. Horizontal scaling (scaling out) means adding more servers to a pool of resources." },
    { id: 133, testId: 4, difficulty: 'medium', question: "What is a 'database transaction'?", type: 'subjective', answer: "A database transaction is a sequence of operations performed as a single logical unit of work. All operations in a transaction must succeed for the transaction to be committed; otherwise, it is rolled back." },
    { id: 134, testId: 4, difficulty: 'medium', question: "What are 'microservices'?", type: 'mcq', options: ['A type of database', 'A software development technique that structures an application as a collection of loosely coupled services', 'A frontend framework', 'A deployment strategy'], answer: 'A software development technique that structures an application as a collection of loosely coupled services' },
    { id: 135, testId: 4, difficulty: 'medium', question: "What is a 'CAP theorem'?", type: 'subjective', answer: "The CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency, Availability, and Partition tolerance." },
    { id: 136, testId: 4, difficulty: 'medium', question: "Explain what a 'load balancer' does.", type: 'subjective', answer: "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes a bottleneck. This improves application responsiveness, availability, and reliability." },
    { id: 137, testId: 4, difficulty: 'medium', question: "What is 'gRPC'?", type: 'mcq', options: ['A database query language', 'A high-performance, open-source universal RPC framework', 'A JavaScript library', 'A CSS preprocessor'], answer: 'A high-performance, open-source universal RPC framework' },
    { id: 138, testId: 4, difficulty: 'medium', question: "What is the difference between a process and a thread?", type: 'subjective', answer: "A process is an instance of a program running in its own memory space. A thread is the smallest unit of execution within a process. Multiple threads can run within a single process and share its memory space." },
    { id: 139, testId: 4, difficulty: 'medium', question: "What is 'event sourcing'?", type: 'subjective', answer: "Event sourcing is a design pattern in which all changes to an application's state are stored as a sequence of events. The current state can be reconstructed by replaying the events." },
    { id: 140, testId: 4, difficulty: 'medium', question: "What is 'CQRS' (Command Query Responsibility Segregation)?", type: 'subjective', answer: "CQRS is a pattern that separates read and write operations for a data store. The 'Command' model is used for writes (updates), and the 'Query' model is used for reads." },
    { id: 141, testId: 4, difficulty: 'medium', question: "What is a 'singleton' pattern?", type: 'mcq', options: ['A design pattern that restricts the instantiation of a class to a single object', 'A way to handle single-threaded applications', 'A database indexing strategy', 'A network protocol'], answer: 'A design pattern that restricts the instantiation of a class to a single object' },
    { id: 142, testId: 4, difficulty: 'medium', question: "What is 'dependency injection'?", type: 'subjective', answer: "Dependency Injection (DI) is a design pattern in which a component's dependencies are provided to it from an external source, rather than being created by the component itself. This promotes loose coupling and makes components more reusable and testable." },
    { id: 143, testId: 4, difficulty: 'medium', question: "What is 'Infrastructure as Code' (IaC)?", type: 'subjective', answer: "IaC is the practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Tools like Terraform and CloudFormation are used for IaC." },

    { id: 144, testId: 4, difficulty: 'hard', question: "Explain how database sharding works.", type: 'subjective', answer: "Database sharding is a type of horizontal partitioning that separates one large database into multiple smaller, faster, more easily managed parts called data shards. The logic for distributing data across shards (the shard key) is critical to its design." },
    { id: 145, testId: 4, difficulty: 'hard', question: "What are the trade-offs of using a monolithic architecture vs. a microservices architecture?", type: 'subjective', answer: "Monoliths are simpler to develop, test, and deploy initially, but can become complex and difficult to scale. Microservices are more scalable, allow for technological diversity, and enable independent deployments, but introduce complexity in terms of deployment, monitoring, and inter-service communication." },
    { id: 146, testId: 4, difficulty: 'hard', question: "What is a 'distributed transaction'?", type: 'subjective', answer: "A distributed transaction is a transaction that involves multiple, separate systems or databases. Ensuring ACID properties across a distributed transaction is complex and often requires a two-phase commit protocol." },
    { id: 147, testId: 4, difficulty: 'hard', question: "What is 'backpressure' in a streaming system?", type: 'mcq', options: ['A type of network error', 'A mechanism to prevent a fast data producer from overwhelming a slower consumer', 'The pressure in a database connection pool', 'A data compression technique'], answer: 'A mechanism to prevent a fast data producer from overwhelming a slower consumer' },
    { id: 148, testId: 4, difficulty: 'hard', question: "How does a 'consistent hashing' algorithm work?", type: 'subjective', answer: "Consistent hashing is a special kind of hashing such that when a hash table is resized, only K/n keys need to be remapped on average, where K is the number of keys and n is the number of slots. It's commonly used in distributed systems and load balancers to minimize data movement when nodes are added or removed." },
    { id: 149, testId: 4, difficulty: 'hard', question: "What is the 'saga' pattern?", type: 'subjective', answer: "The saga pattern is a way to manage data consistency across microservices in a distributed transaction. It's a sequence of local transactions where each local transaction updates the database and publishes an event or message to trigger the next local transaction in the saga. If a transaction fails, compensating transactions are executed to undo the preceding work." },
    { id: 150, testId: 4, difficulty: 'hard', question: "What is a 'circuit breaker' pattern?", type: 'subjective', answer: "The circuit breaker pattern is used to prevent an application from repeatedly trying to execute an operation that is likely to fail. After a specified number of failures, the circuit 'opens' and subsequent calls fail immediately. After a timeout, the circuit goes into a 'half-open' state to test if the underlying operation is available again." },

    // Test 5 (Medium-Hard - 5 questions)
    { id: 151, testId: 5, difficulty: 'medium', question: "What is a 'rate limiter' and how might you implement one?", type: 'subjective', answer: "A rate limiter controls the rate of traffic sent or received by a network interface. Common algorithms for implementation include Token Bucket, Leaky Bucket, Fixed Window Counter, and Sliding Window Log. A simple implementation could use an in-memory store like Redis to track request counts per user/IP within a time window." },
    { id: 152, testId: 5, difficulty: 'hard', question: "What is the difference between concurrency and parallelism?", type: 'subjective', answer: "Concurrency means multiple tasks can run in overlapping time periods, but not necessarily simultaneously (e.g., on a single-core CPU via context switching). Parallelism means multiple tasks are executed at the exact same time (e.g., on a multi-core CPU)." },
    { id: 153, testId: 5, difficulty: 'hard', question: "What are different database isolation levels?", type: 'subjective', answer: "Common isolation levels are: Read Uncommitted (dirty reads), Read Committed (no dirty reads), Repeatable Read (no dirty or non-repeatable reads), and Serializable (no dirty, non-repeatable, or phantom reads). Higher isolation levels provide more consistency but reduce concurrency." },
    { id: 154, testId: 5, difficulty: 'hard', question: "What is a 'gossip protocol'?", type: 'subjective', answer: "A gossip protocol is a procedure or process of computer peer-to-peer communication that is based on the way epidemics spread. It's used to propagate information through a distributed system in a decentralized and fault-tolerant way. Systems like Apache Cassandra use it for node discovery and status updates." },
    { id: 155, testId: 5, difficulty: 'hard', question: "What is 'zero-downtime deployment' and how can it be achieved?", type: 'subjective', answer: "Zero-downtime deployment is the process of releasing a new version of an application without any user-visible downtime. Techniques to achieve this include blue-green deployment (switching traffic between two identical environments) and canary releasing (gradually rolling out the change to a small subset of users)." },

    // Test 6 (Hard - 5 questions)
    { id: 156, testId: 6, difficulty: 'hard', question: "Describe how you would design a system like a URL shortener (e.g., TinyURL).", type: 'subjective', answer: "The core is a mapping from a short URL to a long URL. This requires a database (likely NoSQL for scalability) to store this mapping. A hashing function is needed to generate the short key. To handle collisions, you could use a counter or re-hash. The system needs a web server to handle redirects (HTTP 301) and an API to create new short URLs. Caching popular links would be crucial for performance." },
    { id: 157, testId: 6, difficulty: 'hard', question: "How would you handle a 'thundering herd' problem?", type: 'subjective', answer: "The thundering herd problem occurs when a large number of processes or threads waiting for an event are released at once, causing a surge in resource usage. Solutions can involve introducing jitter (random delay) to distribute the requests, using a leader election protocol so only one process handles the event, or using more sophisticated caching mechanisms that prevent cache stampedes." },
    { id: 158, testId: 6, difficulty: 'hard', question: "What is the difference between a 'stateless' and a 'stateful' application?", type: 'subjective', answer: "A stateless application does not save any client data from one request to the next. Each request is independent. A stateful application remembers information about past interactions with a client. Web servers are typically stateless, while databases are stateful. Microservices should ideally be stateless for easier scaling." },
    { id: 159, testId: 6, difficulty: 'hard', question: "What is a 'sidecar' pattern in the context of microservices or containers?", type: 'subjective', answer: "A sidecar is a container that runs alongside the main application container. It's used to add functionality like logging, monitoring, or security without being part of the main application's code. Service meshes like Istio use the sidecar pattern extensively." },
    { id: 160, testId: 6, difficulty: 'hard', question: "What is TLS and how does the TLS handshake work?", type: 'subjective', answer: "Transport Layer Security (TLS) is a cryptographic protocol that provides end-to-end security of data sent between applications over the Internet. The handshake involves the client and server agreeing on a cipher suite, the server providing a certificate to prove its identity, and the generation of a shared symmetric key for encrypting the session data." },

    // Test 7 (Hard - 5 questions)
    { id: 161, testId: 7, difficulty: 'hard', question: "What are the pros and cons of event-driven architecture?", type: 'subjective', answer: "Pros: Loose coupling, high scalability, and resilience. Components can be updated independently. Cons: Increased complexity in debugging and testing, potential for message ordering issues, and the need for robust monitoring to track events through the system." },
    { id: 162, testId: 7, difficulty: 'hard', question: "Explain the difference between Symmetric and Asymmetric encryption.", type: 'subjective', answer: "Symmetric encryption uses a single key for both encryption and decryption. It's fast but has the challenge of securely sharing the key. Asymmetric encryption uses a key pair: a public key for encryption and a private key for decryption. It's slower but solves the key distribution problem." },
    { id: 163, testId: 7, difficulty: 'hard', question: "What is a 'vector clock' and what problem does it solve?", type: 'subjective', answer: "A vector clock is a data structure used for determining the partial ordering of events in a distributed system. It helps to detect causality violations and resolve conflicts, which is a problem that simple timestamps cannot solve due to clock skew." },
    { id: 164, testId: 7, difficulty: 'hard', question: "What is the 'Actor Model' of concurrency?", type: 'subjective', answer: "The Actor Model is a mathematical model of concurrent computation that treats 'actors' as the universal primitives of computation. An actor can receive messages, create more actors, and send messages to other actors. Actors are isolated and do not share memory, communicating only through asynchronous messages, which avoids race conditions." },
    { id: 165, testId: 7, difficulty: 'hard', question: "When would you choose to use TCP vs UDP?", type: 'subjective', answer: "TCP (Transmission Control Protocol) is connection-oriented and provides reliable, ordered delivery of data. It's used for applications where data integrity is crucial (e.g., file transfer, web browsing). UDP (User Datagram Protocol) is connectionless and does not guarantee delivery. It's faster and used for applications where speed is more important than reliability (e.g., live streaming, online gaming)." },

    // Test 8 (Very Hard - 5 questions)
    { id: 166, testId: 8, difficulty: 'expert', question: "How would you design a distributed cache?", type: 'subjective', answer: "Key design considerations include: 1. A sharding strategy (e.g., consistent hashing) to distribute data across cache nodes. 2. A data eviction policy (e.g., LRU, LFU). 3. A strategy for handling cache misses (e.g., cache-aside, read-through). 4. A plan for data consistency and replication between nodes. 5. A discovery mechanism for cache nodes." },
    { id: 167, testId: 8, difficulty: 'expert', question: "What is 'paxos' or 'raft' in the context of distributed consensus?", type: 'subjective', answer: "Paxos and Raft are consensus algorithms for achieving agreement on a single value among a group of distributed processes. They are fundamental to building fault-tolerant distributed systems, like distributed databases (e.g., etcd, CockroachDB), by ensuring all nodes agree on the state of the system even if some nodes fail." },
    { id: 168, testId: 8, difficulty: 'expert', question: "Explain the concept of 'observability' in backend systems.", type: 'subjective', answer: "Observability is the ability to measure the internal states of a system by examining its external outputs. It's often described by three pillars: Logs (discrete events), Metrics (aggregated numerical data), and Traces (representing the journey of a single request through the system). It's crucial for debugging and understanding complex distributed systems." },
    { id: 169, testId: 8, difficulty: 'expert', question: "What are some strategies for handling database migrations in a zero-downtime deployment?", type: 'subjective', answer: "Strategies include making changes backward-compatible. For example, when adding a column, make it nullable first, deploy the new code that can handle both the presence and absence of the column, then run a data migration, and finally make the column non-nullable in a later deployment. This avoids a state where the code and database schema are out of sync." },
    { id: 170, testId: 8, difficulty: 'expert', question: "How does a service mesh (like Istio or Linkerd) work?", type: 'subjective', answer: "A service mesh is a dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable. It works by deploying a 'sidecar' proxy alongside each microservice. This proxy intercepts all network communication, providing features like traffic management, security (mTLS), and observability without requiring changes to the application code." },

    // Test 9 (Expert - 5 questions)
    { id: 171, testId: 9, difficulty: 'expert', question: "What is a 'CRDT' (Conflict-free Replicated Data Type)?", type: 'subjective', answer: "A CRDT is a data structure that can be replicated across multiple computers in a network, where the replicas can be updated independently and concurrently without coordination between the replicas, and where it is always mathematically possible to resolve any inconsistencies that might result. They are used in collaborative editing applications and distributed databases." },
    { id: 172, testId: 9, difficulty: 'expert', question: "How would you design a real-time bidding system for online advertising?", type: 'subjective', answer: "This requires extremely low latency. The system would involve an ad exchange that sends bid requests to multiple bidders. Bidders must respond within a very short timeframe (e.g., 100ms) with a bid. The architecture would need highly optimized network code, likely using UDP, and in-memory databases for fast lookups of campaign data. The system must be globally distributed to reduce latency." },
    { id: 173, testId: 9, difficulty: 'expert', question: "What is 'mTLS' (mutual TLS)?", type: 'subjective', answer: "Mutual TLS is an authentication method where both parties in a network connection (client and server) validate each other's identity using certificates. This provides stronger security than traditional TLS where only the client validates the server. It's often used for service-to-service communication within a microservices architecture." },
    { id: 174, testId: 9, difficulty: 'expert', question: "What are the challenges of garbage collection in a low-latency application?", type: 'subjective', answer: "Garbage collection can introduce unpredictable 'stop-the-world' pauses, where the application freezes while the GC cleans up memory. In low-latency systems, these pauses are unacceptable. Solutions involve using languages with more control over memory (like Rust or C++), tuning the GC to have shorter pauses, or using off-heap memory." },
    { id: 175, testId: 9, difficulty: 'expert', question: "Describe how a system like 'leader election' works in a distributed system.", type: 'subjective', answer: "Leader election is the process of designating a single process as the organizer of a task distributed among several computers (nodes). A common approach uses a consensus algorithm like Raft or Paxos, or a distributed lock service like ZooKeeper or etcd. A node attempts to acquire a lock or a lease; the one that succeeds becomes the leader." },
    
    // Test 10 (Expert - 5 questions)
    { id: 176, testId: 10, difficulty: 'expert', question: "What is a 'log-structured merge-tree' (LSM Tree)?", type: 'subjective', answer: "An LSM Tree is a data structure used in many NoSQL databases (like Cassandra and RocksDB) that is optimized for write-heavy workloads. Writes are first added to an in-memory table (memtable). When the memtable is full, it's flushed to disk as an immutable SSTable (Sorted String Table). A background process periodically merges and compacts these SSTables." },
    { id: 177, testId: 10, difficulty: 'expert', question: "How does 'distributed tracing' work?", type: 'subjective', answer: "Distributed tracing follows a single request as it travels through a distributed system. It works by assigning a unique trace ID to the initial request. As the request passes from one service to another, this trace ID (and a span ID for each individual operation) is propagated in the request headers. This allows for visualizing the entire request flow and identifying bottlenecks." },
    { id: 178, testId: 10, difficulty: 'expert', question: "What is 'fencing' in the context of distributed systems?", type: 'subjective', answer: "Fencing is a mechanism to prevent a node that is believed to be down from causing data corruption. For example, if a leader node is thought to be dead, but is just partitioned, it might still try to write data. A fencing mechanism (like STONITH - 'Shoot The Other Node In The Head') is used to forcibly power down the old leader before a new one is elected." },
    { id: 179, testId: 10, difficulty: 'expert', question: "What are the trade-offs of different API protocols like REST, GraphQL, gRPC, and WebSockets?", type: 'subjective', answer: "REST: Simple, stateless, widely adopted. Can lead to over/under-fetching. GraphQL: Solves over-fetching, client-driven queries. More complex on the backend. gRPC: High performance, uses protobufs, ideal for internal service-to-service communication. Less human-readable. WebSockets: Full-duplex, real-time communication. Not suitable for simple request-response." },
    { id: 180, testId: 10, difficulty: 'expert', question: "Design a system that can handle 1 million concurrent connections.", type: 'subjective', answer: "This would require a non-blocking, event-driven architecture (e.g., using Node.js or Netty). A single server's OS limits would need to be tuned (e.g., file descriptors). Realistically, this would be a distributed system behind a load balancer. The application logic must be stateless. WebSockets would be a good choice for the protocol to maintain persistent connections efficiently." },
  ],
  java: [
     {id: 201, testId: 1, question: "What is the JVM?", type: 'mcq', options: ['Java Virtual Machine', 'Java Visual Machine', 'JSON Virtual Machine'], answer: 'Java Virtual Machine', difficulty: 'easy'},
     {id: 202, testId: 1, question: "What is the difference between `public`, `private`, and `protected`?", type: 'subjective', answer: 'They are access modifiers. `public` is accessible from anywhere. `private` is only accessible within the same class. `protected` is accessible within the same package and by subclasses.', difficulty: 'easy'},
     {id: 203, testId: 1, question: "Is Java a compiled or interpreted language?", type: 'mcq', options: ['Compiled', 'Interpreted', 'Both'], answer: 'Both', difficulty: 'easy'},
     {id: 204, testId: 1, question: "What is a constructor?", type: 'subjective', answer: 'A constructor is a special method used to initialize objects. It is called when an instance of a class is created.', difficulty: 'easy'},
     {id: 205, testId: 1, question: "What is the root class of all classes in Java?", type: 'mcq', options: ['Object', 'Class', 'Main', 'System'], answer: 'Object', difficulty: 'easy'},
  ],
  python: [
     {id: 301, testId: 1, question: "Is Python a statically typed or dynamically typed language?", type: 'mcq', options: ['Statically typed', 'Dynamically typed'], answer: 'Dynamically typed', difficulty: 'easy'},
     {id: 302, testId: 1, question: "What is the difference between a list and a tuple?", type: 'subjective', answer: 'Lists are mutable, meaning their elements can be changed, while tuples are immutable.', difficulty: 'easy'},
     {id: 303, testId: 1, question: "What keyword is used to define a function in Python?", type: 'mcq', options: ['function', 'def', 'fun', 'define'], answer: 'def', difficulty: 'easy'},
     {id: 304, testId: 1, question: "What is a dictionary in Python?", type: 'subjective', answer: 'A dictionary is an unordered collection of data values, used to store data values like a map, which, unlike other Data Types that hold only a single value as an element, Dictionary holds key:value pair.', difficulty: 'easy'},
     {id: 305, testId: 1, question: "What does the `pass` statement do?", type: 'mcq', options: ['Exits the program', 'Skips the current iteration of a loop', 'Acts as a placeholder for future code', 'Returns a value'], answer: 'Acts as a placeholder for future code', difficulty: 'easy'},
  ],
  mern: [
     {id: 401, testId: 1, question: "What does MERN stand for?", type: 'mcq', options: ['MongoDB, Express, React, Node.js', 'MySQL, Express, React, Node.js', 'MongoDB, EJS, React, Node.js'], answer: 'MongoDB, Express, React, Node.js', difficulty: 'easy'},
     {id: 402, testId: 1, question: "Which part of MERN is the frontend framework?", type: 'mcq', options: ['MongoDB', 'Express', 'React', 'Node.js'], answer: 'React', difficulty: 'easy'},
     {id: 403, testId: 1, question: "Which part of MERN is the backend runtime environment?", type: 'mcq', options: ['MongoDB', 'Express', 'React', 'Node.js'], answer: 'Node.js', difficulty: 'easy'},
     {id: 404, testId: 1, question: "What is the role of Express.js in the MERN stack?", type: 'subjective', answer: 'Express.js is a backend web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications.', difficulty: 'easy'},
     {id: 405, testId: 1, question: "What kind of database is MongoDB?", type: 'subjective', answer: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.', difficulty: 'easy'},
  ],
  'c-plus-plus': [],
  'full-stack': [],
  'next-js': [],
  devops: [],
  'data-science': [],
  'ai-ml': [],
  'cloud-computing': [],
  'mobile-development': [],
  'cybersecurity': [],
};
