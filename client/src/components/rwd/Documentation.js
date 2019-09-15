import React, { Component, Fragment } from 'react'
export default class Documentation extends Component {
  render() {
    return (
      <Fragment>
        <section style={{display:'flex'}}>
          <section  id="header" style={{ width: '33%', maxWidth:'33%'}}>
            <nav id="navbar" style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', height: '50vh', maxHeight: '50vh', overflowY: 'scroll'}}>
                <header>Get to know JS</header>
              <a className="nav-link" href="#introduction">Introduction</a>
              <a className="nav-link" href="#what_you_should_already_know">What you should already know</a>
              <a className="nav-link" href="#javaScript_and_java">JavaScript and Java</a>
              <a className="nav-link" href="#hello_world">Hello world</a>
              <a className="nav-link" href="#variables">Variables</a>
              <a className="nav-link" href="#declaring_variables">Declaring Variables</a>
              <a className="nav-link" href="#variable_scope">Variable Scope</a>
              </nav>
          </section>
          <main id="main-doc" style={{ width: '66%', maxWidth: '66%', height: '50vh', maxHeight: '50vh', overflowY: 'scroll'}}>
            <section className="main-section"  id="introduction">
              <header>
                Introduction
              </header>
              <p>
                JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
              </p>
              <p>
                Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
              </p>
              <p>
                Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.
              </p>
            </section>
            <section className="main-section"  id="what_you_should_already_know">
              <header>
                What you should already know
              </header>
              <p>
                This guide assumes you have the following basic background:
              </p>
              <ul>
                <li>
                  A general understanding of the Internet and the World Wide Web (WWW).
                </li>
                <li>
                  Good working knowledge of HyperText Markup Language (HTML).
                </li>
                <li>
                  Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.
                </li>
                <li>
                  Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.
                </li>
                <li>
                  Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.
                </li>
              </ul>
            </section>
            <section className="main-section"  id="javaScript_and_java">
              <header>
                JavaScript and Java
              </header>
              <p>
                JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.
              </p>
              <p>
                JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.
              </p>
              <p>
                In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.
              </p>
            </section>
            <section className="main-section"  id="hello_world">
              <header>
                Hello world
              </header>
              <p>
                To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:
              </p>
              <code>
                function greetMe(yourName) &#123;alert("Hello " + yourName); &#125;
  greetMe("World");
              </code>
            </section>
            <section className="main-section"  id="variables">
              <header>
                Variables
              </header>
              <p>
                You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.
              </p>
              <p>
                A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
              </p>
              <p>
                You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.
              </p>
            </section>
            <section className="main-section"  id="declaring_variables">
              <header>
                Declaring Variables
              </header>
              <p>
                You can declare a variable in three ways:
              </p>
              <p>
                With the keyword var. For example,
              </p>
              <code>
                var x = 42.
              </code>
              <p>
                This syntax can be used to declare both local and global variables.
              </p>
              <p>
                By simply assigning it a value. For example,
              </p>
              <code>
                x = 42.
              </code>
              <p>
                This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.
              </p>
              <p>
                With the keyword let. For example,
              </p>
              <code>
                let y = 13.
              </code>
              <p>
                This syntax can be used to declare a block scope local variable. See Variable scope below.
              </p>
            </section>
            <section className="main-section"  id="variable_scope">
              <header>
                Variable Scope
              </header>
              <p>
                When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.
              </p>
              <p>
                JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is local to the function (or global scope) that the block resides within. For example the following code will log 5, because the scope of x is the function (or global context) within which x is declared, not the block, which in this case is an if statement.
              </p>
              <code>
                if (true) &#123; var x = 5; &#125; console.log(x); // 5
              </code>
              <code>
                if (true) &#123;let y = 5; &#125; console.log(y); // ReferenceError: y is not defined
              </code>
            </section>
          </main>
        </section>
      </Fragment>
    )
  }
}
