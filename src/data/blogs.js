import blog4 from "../images/blog4.jpg"
const blogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    description: "A beginner-friendly guide to starting web development.",
    image: "https://picsum.photos/400/250",
    author: "Admin",
    date: "2026-03-27",
    content: `
Web development is the process of building websites and web applications. It includes everything from simple static pages to complex dynamic platforms.

There are three core technologies every beginner must learn:

1. HTML – used to structure content
2. CSS – used to style and design
3. JavaScript – used to add interactivity

Frontend development focuses on what users see and interact with, while backend development handles data and logic behind the scenes.

Start small by building simple projects like a personal portfolio, then gradually move to advanced frameworks like React.
    `
  },
  {
    id: 2,
    title: "React Basics Explained",
    description: "Understand the core concepts of React easily.",
    image: blog4,
    author: "Rahul",
    date: "2026-03-26",
    content: `
React is a popular JavaScript library used for building user interfaces, especially single-page applications.

The main concept in React is components. A component is a reusable piece of UI.

React also uses something called JSX, which allows you to write HTML inside JavaScript.

Another important concept is state, which helps you manage dynamic data inside your app.

By learning React, you can build fast, scalable, and maintainable web applications.
    `
  },
  {
    id: 3,
    title: "Understanding Tailwind CSS",
    description: "Learn how Tailwind makes styling faster and easier.",
    image: "https://picsum.photos/400/252",
    author: "Sachin",
    date: "2026-03-25",
    content: `
Tailwind CSS is a utility-first CSS framework that allows you to style your application directly in your HTML or JSX.

Instead of writing custom CSS, you use predefined classes like padding, margin, colors, and flexbox utilities.

This approach speeds up development and keeps your design consistent.

Tailwind also makes responsive design easy using built-in breakpoints like sm, md, and lg.

It is widely used in modern frontend development due to its flexibility and speed.
    `
  },
  {
    id: 4,
    title: "JavaScript ES6 Features You Should Know",
    description: "Modern JavaScript features that improve your code.",
    image: "https://picsum.photos/400/253",
    author: "Alex",
    date: "2026-03-24",
    content: `
ES6 (ECMAScript 2015) introduced many powerful features that make JavaScript easier to write and understand.

Some important features include:

Arrow functions – shorter syntax for writing functions
Let and const – block-scoped variables
Template literals – easier string formatting
Destructuring – extract values from arrays and objects

These features help you write cleaner and more efficient code.
    `
  },
  {
    id: 5,
    title: "Why Learn Responsive Web Design",
    description: "Make your websites look great on all devices.",
    image: "https://picsum.photos/400/254",
    author: "Tony",
    date: "2026-03-23",
    content: `
Responsive web design ensures that your website works well on mobile, tablet, and desktop devices.

With the increasing use of smartphones, it is essential to design mobile-friendly websites.

You can achieve responsiveness using CSS techniques like flexbox, grid, and media queries.

Frameworks like Tailwind CSS make this even easier with built-in responsive classes.

A responsive design improves user experience and boosts your website’s performance.
    `
  },
  {
    id: 6,
    title: "How to Become a Frontend Developer",
    description: "Step-by-step roadmap to becoming a frontend developer.",
    image: "https://picsum.photos/400/255",
    author: "Nandu",
    date: "2026-03-22",
    content: `
Becoming a frontend developer requires learning both technical skills and practical experience.

Start with the basics:
Learn HTML, CSS, and JavaScript thoroughly.

Next, move to frameworks like React to build modern applications.

Practice by building real projects such as portfolios, dashboards, and e-commerce UIs.

Version control systems like Git are also important for collaboration.

Finally, keep learning and stay updated with new technologies in the web development field.
    `
  }
];

export default blogs;