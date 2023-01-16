const questionBank = [
    {
        question: "What is JavaScript?",
        options: ["JavaScript is a scripting language used to make the website interactive", "JavaScript is an assembly language used to make the website interactive", " JavaScript is a compiled language used to make the website interactive", "None of the mentioned"],
        correct: " JavaScript is a scripting language used to make the website interactive",
        explanation: "JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side."
    },
    {
        question: "Which of the following is correct about JavaScript?",
        options: ["JavaScript is an Object-Based language", "JavaScript is Assembly-language", "JavaScript is an Object-Oriented language", "JavaScript is a High-level language"],
        correct: "JavaScript is an Object-Based language",
        explanation: "Although JavaScript is not an OOP (Object-Oriented Programming) language like Java or PHP, it is object based language. The standard threesome of polymorphism, encapsulation, and inheritance are the criteria for object orientation, and JavaScript fails to meet them."
    },
    {
        question: "Among the given statements, which statement defines closures in JavaScript?",
        options: ["JavaScript is a function that is enclosed with references to its inner function scope", "JavaScript is a function that is enclosed with references to its lexical environment", "JavaScript is a function that is enclosed with the object to its inner function scope", "None of the mentioned"],
        correct: "JavaScript is a function that is enclosed with references to its lexical environment",
        explanation: "A closure is a function that is enclosed with references to its lexical environment. A closure allows an inner function to access the scope of an outside function. Closures are formed every time a function is created in JavaScript, during function creation time"
    },
    {
        question: "Which of the following is not javascript data types?",
        options: ["Null type", "Undefined type", "Number type", "All of the mentioned"],
        correct: " All of the mentioned",
        explanation: " JavaScript is a dynamic, loosely typed language. Variables in JavaScript arent tied to any specific value type, and each variable can be assigned and reassigned to values of all the types."
    },
    {
        question: "Where is Client-side JavaScript code is embedded within HTML documents?",
        options: ["A URL that uses the special javascript:code", "A URL that uses the special javascript:protocol", "A URL that uses the special javascript:encoding", "A URL that uses the special javascript:stack"],
        correct: "A URL that uses the special javascript:protocol",
        explanation: "The Client-side JavaScript code is embedded within HTML documents in four ways, 1. Inline, between a pair of “script” tags. 2. From an external file specified by the src attribute of a “script” tag. 3.  In an HTML event handler attribute, such as onclick or onmouseover. 4. In a URL that uses the special javascript: protocol."
    },
    {
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        options: ["Position", "Window", "Standard", " Location"],
        correct: "Window",
        explanation: "All client-side JavaScript features and APIs are accessed through the Window object. It represents a web browser window or frame, and the identifier window can be used to refer to it."
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        options: ["Function/Method", "Preprocessor", "Triggering Event", "RMI"],
        correct: "Function/Method",
        explanation: "A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others."
    },
    {
        question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
        options: ["will work perfectly well on a Windows Machine", "will be displayed as JavaScript text on the browser", "will throw errors and exceptions", "must be restricted to a Unix Machine only"],
        correct: "will work perfectly well on a Windows Machine",
        explanation: "Because JS can run on a variety of operating systems, an application written for UNIX will run just as well on Windows"
    },
    {
        question: "Which of the following scoping type does JavaScript use?",
        options: ["Sequential", "Segmental", "Lexical", "Literal"],
        correct: "Lexical",
        explanation: "JavaScript, like most current programming languages, employs lexical scoping. This means that functions are performed with the variable scope in effect when they were defined, rather than the variable scope in effect when they are invoked."
    },
    {
        question: "Why JavaScript Engine is needed?",
        options: ["Both Compiling & Interpreting the JavaScript", "Parsing the javascript", "Interpreting the JavaScript", "Compiling the JavaScript"],
        correct: "Interpreting the JavaScript",
        explanation: "For the most part, the JS Engine is used to interpret JavaScript. Its used to parse javascript and run it on a web page."
    },
    {
        question: "Why event handlers is needed in JS?",
        options: ["Allows JavaScript code to alter the behaviour of windows", "Adds innerHTML page to the code", "Change the server location", "Performs handling of exceptions and occurrences"],
        correct: "Allows JavaScript code to alter the behaviour of windows",
        explanation: "JS code can change the behavior of windows, documents, and the elements that make up those documents via event handlers."
    },
    {
        question: "Which of the following is not a framework?",
        options: ["JavaScript .NET", "JavaScript", "Cocoa JS", "jQuery"],
        correct: "JavaScript",
        explanation: "jQuery, which is used in web development, is one of the most popular frameworks. JavaScript is a scripting language, not a framework, in this case."
    },
    {
        question: "Which of the following is the property that is triggered in response to JS errors?",
        options: ["onclick", "onerror", "onmessage", "onexception"],
        correct: "onerror",
        explanation: "The Window objects onerror property acts as an event handler, and it is triggered when JavaScript problems occur. However, because it is called with various arguments, it isnt a genuine event handler."
    },
    {
        question: "Which of the following is not an error in JavaScript?",
        options: ["Missing of Bracket", "Division by zero", "Syntax error", "Missing of semicolons"],
        correct: "Division by zero",
        explanation: "In JavaScript, division by zero does not result in an error; it just returns infinity or negative infinity. However, because zero divided by zero has no well-defined value, the result of this operation is the unusual not-a-number value, which is written as NaN."
    },
]