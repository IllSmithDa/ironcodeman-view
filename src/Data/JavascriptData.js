const JavascriptData = [
  {
    concept: `this`,
    type: 'this',
    definition: `The keyword 'this' is used to implicitly pass along a varaible reference. It is very 
    much cleaner to pass along implicitly rather than explicitly. The value of 'this' is determined by
    how a function is called. `,

  },
  {
    concept: `'this' in Global Scope`,
    type: 'this',
    definition: `In the global execution context (outside of any function), 'this' refers to the global object. 
    In the context of web browsers, the global object is the window object.`,
    example: `
    ex. 1
    // prints true
    console.log(this === window);

    ex. 2
    var a = 37;
    // prints 37
    console.log(window.a); 

    ex. 3
    // Prints Hello 
    this.var1 = "Hello";
    console.log(window.var1)  
    console.log(var1)         
    `
  },
  {
    concept: `'this' in Function Scope`,
    type: 'this',
    definition: `The value of 'this' in the function scope is determined by
    how a function is called and where the variable gets initiated. To pass a value to this, simply use call or apply`,
    example: `
    ex. 1
    // variable initiated in global browser context with window object
    var a = 'Global';
    
    function myFunction() {
        // 'ths' refers to window object in broswer
        return this.a;  
    }

    // this will find outer global scope var a and return 'Global'
    myFunction();         

    ex. 2
    var obj = {a: 'Custom'};
    function myFunction() {
        // ths refers to window object in broswer
        return this.a;  
    }

    // bind 'this' to the object using call or apply
    myFunction.call(obj);    // returns 'Custom'
    myFunction.apply(obj);    // returns 'Custom'
    `
  },
  {
    concept: `'this' in Object Scope`,
    type: 'this',
    definition: `When a function is called as a method of an object, the function's 'this' is set to the object the method is called on.`,
    example: `
    ex. 1
    var objectA = {
      prop: 37,
      functionA: function() {
        return this.prop;
      }
    };
    // Will return 37
    console.log(objectA.functionA());
    `
  },
  {
    concept: `'this' in Constructor`,
    type: 'this',
    definition: `When a function is being used as a constructor, 'this' is bound to the new object that 
    is being created`,
    example: `
    function newFunc() {
      this.a = 37;
    }

    var newInstance = new newFunc();

    // prints out 37
    console.log(newInstance.a);

    function newFuncB() {
      this.a = 37;
      return {a: 38};
    }
    
    var newInstanceB = new newFuncB();

    // Will print out 38
    console.log(newInstanceB.a);
    `
  },
  {
    concept: `Scope`,
    type: 'scope',
    definition: `Determines the visibility of variables by maintaining a look up list of all itentified variables while enforcing 
    rules on how they are accessible to currently executing code. Variables declared outside of a function is global and can be 
    accessed by all functions. Local scope are variables declared inside a function and can only be accessed within the function. Other
    functions outside the function cannot access the variable. `,
    example:`
    const b = 'world';
    function funcA() {
        // local scope
        const a = 'hello'; 
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
    concept: `Nested Scope`,
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

    // prints 5
    foo( 2 );
    `
  },
  {
    concept: `Lexical Scope`,
    type: 'scope',
    definition: `sets the scope of a variable so that it may only be called 
    from within the block of code in which it is defined.`,
    example: `
    function init() {

      const a = "hello"; 

      // funcA is the inner function
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
    concept: 'Closure',
    type: 'scope',
    definition: `inner function has access to outer functions scope. 
    Inner function has access to outer function's variable. Closure allows
    a function to access the lexical scope even when the function is being
    invoked outside of its original lexical scope.`,
    example: `
    ex 1.
    function foo() {
        var a = 2;
      
        function bar() {
            // bar() has access to variable a in the outer scope
            console.log( a );
        }
      
        bar(); 
    }
    foo();
    ex. 2
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
    concept: 'Prototype',
    type: 'functions',
    definition: `Every function has a prototype property which is used to 
    attach properties and methods. This property is not enumerable`,
    example:`
    function Person(age, eyecolor) {
        this.age = age;
        this.eyeColor = eyecolor;
    }
  
    // attach nationality to object Person
    Person.prototype.nationality = "English";
    const newPerson = new Person(25, 'black');

    // prints 'English';
    console.log(newPerson.nationality)
  `
  },
  {
    concept: 'Immediately Invoked Expression',
    type: 'functions',
    definition: `A function that is executed immediately after it has 
    been created. It invokes itself`,
    example:`
    (function() {
      // all your code here
      ...
    })();`
  },
    {
    concept: 'Hoisting',
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
        var x = 4;

        // prints 5
        console.log(myVar);
    }`
  },
  {
    concept: 'Module Pattern',
    type: 'functions',
    definition: ` It functions very much like a class
    from other programming languages by having private and public methods, 
    variables in single objects and blocking global access when possible.`,
    example:`
    var module1 = (function () {
 
        var counter = 0;
      
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
       
    // Increment our counter
    module1.incrementCounter();
     
    // Check the counter value and reset
    module1.resetCounter();
    `
  },
  {
    concept: 'Private Properties using Closures',
    type: 'objects',
    definition: `JavaScript lets you define private properties by using 
    the underscore prefix. However, the user will still be able to 
    directly access or modify private properties`,
    example:`
    class Person {
        constructor(name) {
            var _name = name
            this.setName = function(name) { _name = name; }
            this.getName = function() { return _name; }
        }
    }

    const bobby = new Person('Bob');

    // prints Bob
    console.log(bobby.getName());
    bobby.setName('John');

    // prints John
    console.log(bobby.getName());
    `
    
  },
  {
    concept: `Currying`,
    type: 'functions',
    definition: `Currying applies to functions where you pass a subset of arguments
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
    when the same set of inputs occur again. It works best when we 
    know the result of an expensive operation ahead of time. Memoization 
    ensures that a method doesn't run for the same inputs more than once 
    by keeping a record of the results for the given inputs (usually in a hash map). `,
    example: `
    var fibVal = (function() {
        creates empty hashmap
        var memo = {};
      
        function functionA(n) {
            var value;

            // explicity checks if value of the n is already stored in hashmap
            if (n in memo) {
                value = memo[n];
            } else {

                // if base value is reached, return it
                if (n === 0 || n === 1) {
                    value = n;
                }
                else {
                    value = functionB(n - 1) + functionB(n - 2);

                    // hashmap is created to store the value for future calls
                    memo[n] = value;
                }
            }
          
            return value;
        }
    
      return functionA;
    })();
    `
  },
  {
    concept: ` Method Overloading`,
    type: 'functions',
    definition: `Method overloading allows multiple methods 
    to have the same name but different arguments. The compiler 
    or interpreter determines which function to call based on
     the number of arguments passed. However, JavaScript does 
     not natively support method overloading and it will simply 
     use the last defined method rather than matching the number 
     of arguments like in Java. The closest thing in JavaScript is 
     to have a parent function that accepts any amount of arugments
     and call appropriate child methods based on the number of arguments.
     Instead we can use if and else if or use switch statements.  `,
    example: `
    // function with empty parameters but arguments still passed
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
    // returns 5 
    funcA(2, 3) 
    `
  },
  {
    concept: `JavaScript Objects and Number Types`,
    type: 'objects',
    definition: `Objects property names that are the number type can only be accessed using bracket notation. `,
    example: `
    const ageGroup = {3: "apples", 10:"oranges"};

    // Will print 'apples'
    console.log(ageGroup["3"]);

    // Will throw an error as proper
    console.log(ageGroup.3)
    `
  },
  {
    concept: `JavaScript Object Property Attributes`,
    type: 'objects',
    definition: `Object properties in javascript have 3 attributes with each being true by default: configurable
    atttribute - specifies whether property can be deleted or changed, enumerable - whether property can be returned
    in a for/in loop, writable - whether property can be changed`,
    example: `
    const obj = {
        first: 'Jane',
    };
    
    console.log(Object.getOwnPropertyDescriptor(obj, 'first'));
    // will print out the following object property 'first'
    {
        value: 'Jane',
        writable: true,
        enumerable: true,
        configurable: true,
    }
    `
  },
  {
    concept: `Primitive Data Type`,
    type: 'variables',
    definition: `A variable which data is stored directly into variable, is not a object, has no methods and has with 6 
    types: string, number, bool, undefined, null, symbol,`,
    example: `
    var stringVar = 'Hello';
    var numVar = 23;
    var boolVar = true;
    var nullVar - null;
    `
  },
  {
    concept: `Reference Data Type`,
    type: 'variables',
    definition: `It is a variable which stores another variable name but only its current value of the stored variable. If stored variable value 
    changes the reference data will stay the same.`,
    example: `
    var x = 6;
    var y = x;
    var x = 5;

    // x changes value to 5 and prints 5
    console.log(x);

    // y value will stay the same at 6 as it is a reference 
    console.log(y);
    `
  },
  {
    concept: `Asynchronous Programming`,
    type: 'functions',
    definition: `It is a solution to a javascript issue which is that one block of code will not neccesarily wait until another block
    of code has finished before running. It usually runs synchronously. Asynchronous programmining will force the block of code to wait
    until the block that is meant to run first is done. The keyword 'async' indicates a asynchronous function.`,
    example: `
    ex. 1
    async functionA() {
        console.log('result A');
    }
    functionB() {
        console.log('result B');
    }

    // prints 'result A' then print 'result B'
    functionA().then(functionB);
    `
  },
  {
    concept: `Try and Finally`,
    type: 'functions',
    definition: `The keyword 'finally' can be used alongside with try and catch or just with try. The block in 'finally' will run no matter what and right after 
    the try`,
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