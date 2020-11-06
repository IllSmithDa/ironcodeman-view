const Es6 = [
  {
    concept: `Object Literals`,
    definition: `If object key and value are the same, you can simply write the name once to represent 
    the entire key value pair`,
    example: `
    // the following is equivalent to const object1 = {apple:apple} 
    const object1 = {
      apple     
    } 
    `
  },
  {
    concept: 'Blocked Scoped Functions and Scope',
    definition: `Functions declarations that occur inside the blocks are now specfied to be scoped 
    to that block, making it inaccessible to global invocation. Blocks are simply the {} that organize
    sets of code that are related to each other`,
    example:`
    {
      // in same scope so it works
      foo();  

      function foo() {
        // ..
      }
    }
    // ReferenceError
    foo();
    `
  },
  {
    concept: `Let`,
    definition: `The term 'let' functionally is used exactly the same as 'var'. The major difference is that
    'let' variables are only initialized when its been declared even though its still hoisted. Unlike var, 
    Accessing a let variable before its been declared will lead to a reference or temporal dead zone error. 
    Temproal dead zone error simply means trying to access a variable that has been declared but not yet initialized`,
    example: `
    {
      // undefined value given even though variable not declared yet.
      console.log( a );

      // ReferenceError because it is using let but variable not declared yet
      console.log( b );
    
      var a;
      let b;
    }
    `
  },
  {
    concept: `Const Variables`,
    definition: ` const creates constant type variables which means the variable becomes read only after
    initial value has been set. If variable is object or array, the contents of object or array can still
     be changed. 
    `,
    example: `
    ex. 1
    {
      const a = 2;
      console.log( a );	// prints 2
    
      // TypeError because it is constant variable being given new value
      a = 3; 
    }
    ex. 2
    {
      const a = [1,2,3];
      a.push( 4 );
    
      // prints [1,2,3,4]
      console.log( a );	

      // TypeError as You cannot increment a const variable but only push new items
      a++;  

      // TypeError as you cannot reassign a const
      a = 42;
    }
    `
  },
  {
    concept: 'Spread/Rest',
    definition: `Spread or rest operator is basically three dots '...' does different things
    based on the context it is being used. 
    `
  },
  {
    concept: `Spread/Rest in front of arrays`,
    definition: `When used in front of array or anything iterable, it will spread them out into 
    their individual values`,
    example: `

    function foo(x,y,z) {
      console.log( x, y, z );
    }

    // prints 1 2 3
    foo( ...[1,2,3] );
    `
  },
  {
    concept: `Spread/Rest inside Array Declarations`,
    definition: `Acts similarly to apply() or concat() of combining two
    arrays
    `,
    example:`
    var a = [2,3,4];
    var b = [ 1, ...a, 5 ];

    // prints [1,2,3,4,5]
    console.log( b );
    ` 
  },
  {
    concept: `Spread/Rest inside Function Parameters`,
    definition: `WHen spread is in the parameters, it gathers a set of values into 
    a single array`,
    example: `
    function foo(...args) {
      console.log( args );
    }

    // prints [1,2,3,4,5]
    foo( 1, 2, 3, 4, 5);
    `
  },
  {
    concept: 'Default Parameter Values',
    definition: `Provides a default argument in case one has not been already provided. If 
    an argument has been provided, it will use the provided argument rather than the default.`,
    example: `
    function foo(x = 11, y = 31) {
      console.log( x + y );
    }
    
    //returns 42
    foo();

    //returns 11
    foo( 5, 6 );

    // returns 42
    foo( 0, 42 );	
    `
  },
  {
    concept: `Default Value Expressions and Function Calls`,
    definition:` Default values for function paramters can be any valid expression
    including function calls. Note that it will return refence error if you use variables
    before initialization`,
    example: `
    ex. 1
    function bar(val) {
      console.log( "bar called!" );
      return y + val;
    }
    
    function foo(x = y + 3, z = bar( x )) {
      console.log( x, z );
    }
    
    var y = 5;

    // global var y will set parameter value at 8 while second parameter use x from first parameter
    // sets paramter as 5 and 10 respectively 
    foo();	
    
    // first paramter for foo now defined with 10, and second paramter is now 15
    foo( 10 );

    y = 6;
    // If undefined used for first paramter, it will use global var y and default parameter
    // set paramters as 9 and 10 respectively
    foo( undefined, 10 );	
    
    ex2. 
    // z here is being accessed before initialization so reference error will return
    var w = 1, z = 2;

    function foo( x = w + 1, y = x + 1, z = z + 1 ) {
    	console.log( x, y, z );
    }
    // ReferenceError
    foo();	
    `
  },
  {
    concept: 'Destructuring',
    definition: `
    THe idea of destructuring is that it is cleaner way of grabbing values from an array or object
    without having to manually assign indexed values from an array or object. Removes 
    need for a structure assignment.
    `,
    example: `
    function foo() {
      return [1,2,3];
    }
    function bar() {
      return {
        x: 4,
        y: 5,
        z: 6
      };
    }
    
    // no more var tmp = foo() then var a = temp[0] to get 1;
    var [ a, b, c ] = foo();             
    var { x: x, y: y, z: z } = bar();
    
    console.log( a, b, c );		// 1 2 3
    console.log( x, y, z );		// 4 5 6
    `
  },
  {
    concept: `Super`,
    definition: `Super used to call and access functions on a object's parent`,
    example: `
    class Rectangle {
      constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
      }
      sayName() {
        console.log('Hi, I am a ', this.name + '.');
      }
      get area() {
        return this.height * this.width;
      }
      set area(value) {
        this.height = this.width = Math.sqrt(value);
      }
    }
    
    class Square extends Rectangle {
      constructor(length) {
        // ReferenceError, super needs to be called first
        this.height; 
        
        /* Calls the parent class' constructor with lengths
        provided for the Rectangle's width and height */
        super(length, length);
        this.name = 'Square';
      }
    }
    `
  },
  {
    concept: `Arrow Functions`,
    definition: `Arrow functions is a function but does not have a function declaration as they are anonymous
    function expression. Arrow functions have a nice, shorter syntax, more lightweight than using function keyword 
    and syntax.`,
    example: `
    Example 1
    const function1 = (x, y) => {
      return x + y;
    }
    
    // shorthand version
    const function1 = (x, y) =>  x + y;

    function1(1, 3)  // return 4 in both cases
    `
  },
  {
    concept: `'this' and Arrow Functions`,
    definition: `Arrow functions do not bind their own 'this' but lexically bind their context so that 'this' refers
    to the original context in which is exists. `,
    example: `
    var controller = {
        makeRequest: function(..){
            btn.addEventListener( "click", () => {
                // ..
                this.makeRequest(..);
            }, false );
        }
    };
    `,
  },
  {
    concept: `Template literals`,
    definition: `Template literals allows for string interpolation or adding variable into string without using '+'. It instead uses
    backticks to cover entire string and places variable name inside the backets with money sign to extract value 
    from variable and concat it to the string.`,
    example: `const var1 = 323;` +  '\n'+ "// prints There are 323 boxes" + `\n`+ 
    "console.log('There are ${var1} boxes');" 
    },
  {
    concept: `symbols`,
    definition: `new type of primitive in es6. It is the return value of the function Symbol(). The value
    may be used as an identifier for object properties`
  },
];

export default Es6;