const JavascriptData = [
  {
    concept: `this`,
    type: 'this',
    definition: `The keyword 'this' is used to implicitly pass along a varaible reference. It is very 
    much cleaner to pass along implicitly rather than explicitly. The value of 'this' is determined by
    how a function is called. `,

  },
  {
    concept: `'this' in global scope`,
    type: 'this',
    definition: `In the global execution context (outside of any function), this refers to the global object
    In web browsers, the window object is the global object.`,
    example: `
    console.log(this === window); // true
    a = 37;
    console.log(window.a); // 37

    this.var1 = "Hello";
    console.log(window.var1)  // "Hello"
    console.log(var1)         // "Hello"
    `
  },
  {
    concept: `'this' in function scope`,
    type: 'this',
    definition: `Thee value of 'this' in the function scope is determined by
    how a function is called. To pass a value to this, simply use call or apply`,
    example: `
    // object passed as the first argument
    var obj = {a: 'Custom'};
    var a = 'Global';
    
    function myFunction() {
      return this.a;  
    }

    // this will find outer global scope var a
    myFunction();          // returns 'Global'

    // bind 'this' to object using call or apply
    myFunction.call(obj);    // returns 'Custom'
    myFunction.apply(obj);    // returns 'Custom'
    `
  },
  {
    concept: `this in object scope`,
    type: 'this',
    definition: `When a function is called as a method of an object, the function's 'this' is set to the object the method is called on.`,
    example: `
    var o = {
      prop: 37,
      f: function() {
        return this.prop;
      }
    };
    
    console.log(o.f()); // 37
    `
  },
  {
    concept: `this in constructor`,
    type: 'this',
    definition: `When a function is being used as a constructor, 'this' is bound to the new object that 
    is being created`,
    example: `
    function C() {
      this.a = 37;
    }

    var o = new C();
    console.log(o.a); // 37

    function C2() {
      this.a = 37;
      return {a: 38};
    }
    
    o = new C2();
    console.log(o.a); // 38
    `
  },
  {
    concept: `scope`,
    type: 'scope',
    definition: `Determines the visibility of variables by maintaining a look up list of all itentified variables while enforcing 
    rules to how they are accessible to currently executing code. Variables declared outside of a function is global and can be 
    accessed by all functions. Local scope are variables declared inside a function and can only be accessed within the function. Other
    functions outside the function cannot access the variable. `,
    example:`
    const b = 'world';
    function funcA() {
      const a = 'hello'; // local scope
    }
    function funcB() {
      // prints 'world'
      console.log(b);
      // cannot access a from funcA() so will return error
      console.log(a);
    }
    `
  },
  {
    concept: `nested scope`,
    type: 'scope',
    definition: `Sometimes multiple layers of scope can exist because of nested functions. The variable will 
    search for a partilcular variable by going each layer of outer scope until it is found or reaches the global scope in 
    which the search will stop`,
    example: `
    function foo(a) {
      // finds b on the outer scope which is global scope
      console.log( a + b );
    }
    
    var b = 3;
    
    foo( 2 ); // prints 5
    `
  },
  {
    concept: `lexical scope`,
    type: 'scope',
    definition: `sets the scope of a variable so that it may only be called 
    from within the block of code in which it is defined.`,
    example: `
    function init() {

      const a = "hello"; 

      // funcA is the inner function, a closure
      function funcA() {
        // uses variable declared in the parent function  
        console.log(a);  
      }
      funcA();    
    }
    init();
    `
  },
  {
    concept: 'closure',
    type: 'scope',
    definition: `inner function has access to outer functions scope. 
    Inner function has access to outer function's variable. Closure allows
    a function to access the lexical scope even when the function is being
    invoked outside of its original lexical scope.`,
    example: `
      Example 1:
      function foo() {
        var a = 2;
      
        function bar() {
          // bar() has access to variable a in the outer scope
          console.log( a );
        }
      
        bar(); 
      }
      foo();

      Example 2:
      function foo() {
        console.log('baz() will call function bar()')
        var a = 2;
      
        function bar() {
          console.log( a );
        }
      
        return bar;
      }
      // calls foo then return the bar function;
      var baz = foo();
      
      // calls bar() and has original scope and access to var a;
      baz();
      
      `
  },
  {
    concept: 'prototype',
    type: 'functions',
    definition: `every function has prototype property which is used to 
    attach properties and methods. This property is not enumerable`,
    example:`
    function Person(first, last, age, eyecolor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyecolor;
  }
  
  // attach nationality to object Person
  Person.prototype.nationality = "English";

  const newPerson = new Person('John', 'Doe', 25, 'black');
  console.log(newPerson.nationality)  // prints 'English';
  `
  },
  {
    concept: 'immediately invoked expression',
    type: 'functions',
    definition: `A function that is executed immediately after it has 
    been created. It invokes itself`,
    example:`(function() {
      // all your code here
      // ...
     })();`
  },
    {
    concept: 'hoisting',
    type: 'variables',
    definition: `Javascript moves variables and function declarations
    to the top of the current scope before code executes. Variable are 
    processes before any code actually executes. Variables with undeclared 
    values are still hoisted but assigned 'undefined' until they are assigned a value.
    To avoid bugs and confusion, declear variables at the beginning of its
    context or scope. `,
    example:`
    function myfunction() {
      myVar = x + 1;
      // x declared after it has been used
      const x = 4;
      console.log(myVar) // prints 5
    }`
  },
  {
    concept: 'module pattern',
    type: 'functions',
    definition: ` It is basically captures the essence of having a 'class' 
    from other programming languages by having private and public methods, 
    variables in single objects, and sheilding from global scope when possible.`,
    example:`

    const module1 = (function () {
 
      const counter = 0;
     
      return {
     
        incrementCounter: function () {
          return counter++;
        },
     
        resetCounter: function () {
          console.log( "counter value prior to reset: " + counter );
          counter = 0;
        }
      };
     
    })();
     
    // Usage:
     
    // Increment our counter
    testModule.incrementCounter();
     
    // Check the counter value and reset
    // Outputs: counter value prior to reset: 1
    testModule.resetCounter();
    `
  },
  {
    concept: 'Private properties, using closures',
    type: 'objects',
    definition: `JavaScript lets you define private properties by using 
    the underscore prefix as shown in the above example. However, this 
    does not prevent a user from directly accessing or modifying a property 
    that is supposed to be private.`,
    example:`
    function Rectangle(_length, _breadth) {

      this.getDimensions = function () {
      return { length : _length, breadth : _breadth };
      };
 
      this.setDimension = function (len,bred) {
      _length = len;
      _breadth = bred
      };
 
    }`
  },
  {
    concept: `currying`,
    type: 'functions',
    definition: `Applies to functions where you pass a subset of arguments
    and recieve a function back that waits for the rest of the argument. `,
    example: `
    var myFirstCurry = function(word) {
      return function(user) {
             return [word , ", " , user].join("");
      };
    };
    // first subset of arguments
    let HelloUser = myFirstCurry("Hello");

    // performing some random code 
    console.log('hello world')
    
    // second subset of arugments
    HelloUser("Rahul"); // return "Hello, Rahul" 
    
    // alternative currying
    myFirstCurry("Hey, wassup!")("Rahul");
    `
  },
  {
    concept: `Memoization`,
    type: 'functions',
    definition: `Memoization is an optimization technique 
    that speeds up function execution by storing results of 
    expensive operations and returning the cached results 
    when the same set of inputs occur again. Works when we 
    know the result of an expensive operation ahead of time`,
    example: `
    function memoizeFunction(func) {
      var cache = {};
      return function() {
           var key = arguments[0];
           if(cache[key]) {
           return cache[key];
           }
           else {
           var val = func.apply(this, arguments);
           cache[key] = val;
           return val;
           }
      };
    }
    var fibonacci = memoizeFunction(function(n) {
         return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
    });
    `
  },
  {
    concept: ` Method overloading`,
    type: 'functions',
    definition: `Method overloading allows multiple methods 
    to have the same name but different arguments. The compiler 
    or interpreter determines which function to call based on
     the number of arguments passed. However, Javscript does 
     not natively support method overloading and it will simply 
     use the last defined method rather than matching the number 
     of arguments like in Java. The closest thing in Javscript is 
     to have a parent function that accepts any amount of arugments
     and call appropriate child methods based on the number of arguments.
     Can use if and else if or use switch statements. `,
    example: `
    function funcA() {
      // arguments.length counts number of arguments
      if (arguments.length===1) {
        return funcB(arguments[0]); 
      } else if (arguments.length===2){
        return funcC(arguments[0],  arguments[1]);
      }
    }

    function funcB(a) { 
      return a;
    }

    function funcC(b, c) {
      return b + c;
    }

    funcA(2, 3) // returns 5 
    `
  },
  {
    concept: `javascript objects and number types`,
    type: 'objects',
    definition: `objects property names that are the number type can only be accessed using bracket notation`,
    example: `
    const ageGroup = {3: "apples", 10:"oranges"};
    console.log(ageGroup["3"]); // apples​
    console.log(ageGroup.3) // This will throw an error​
    `
  },
  {
    concept: `javascript object property attributes`,
    type: 'objects',
    definition: `Object properties in javascript have 3 attributes with each being true by default: configurable
    atttribute - specifies whether property can be deleted or changed, enumerable - whether property can be returned
    in a for/in loop, writable - whether property can be changed`,
  },
  {
    concept: `primitive data type`,
    type: 'variables',
    definition: `variable which data is stored directly into variable, is not a object, has no methods and has with 6 
    types: string, number, bool, undefined, null, symbol,`,
    example: `
    var stringVar = 'Hello';
    var numVar = 23;
    var boolVar = true;
    var nullVar - null;
    `
  },
  {
    concept: `reference data type`,
    type: 'variables',
    definition: `variable which stores another varaible name or but only its current value of the stored varable. If stored variable value 
    changes the reference data will stay the same.`,
    example: `
    x = 6;
    y = x;
    x = 5;
    console.log(x); // prints 5
    console.log(y); // prints 6`
  },
  {
    concept: `Asynchronous programming`,
    type: 'functions',
    definition: `It is a solution to a javascript issue which is that one block of code will not neccesarily wait until another block
    of code has finished before running. It usually runs synchronously. Asynchronous programmining will force the block of code to wait
    until the block that is meant to run first is done.`,
  },
  {
    concept: `try and finally`,
    type: 'functions',
    definition: `'finally' can be used alongside with try and catch or just with try. Code in 'finally' will run no matter what and right after 
    the try or optional catch blocks of code`,
    example: `
    function foo() {
      try {
        return 'World';
      }
      finally {
        console.log( "Hello" );
      }
      console.log( "will not be reached but finally still runs" );
    }
    
    `
  }
];
export default JavascriptData;