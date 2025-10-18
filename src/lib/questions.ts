
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
    }
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
    }
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
