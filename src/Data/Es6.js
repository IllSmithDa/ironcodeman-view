const Es6 = [
  {
    concept: `object literals`,
    definition: `If object key and value are the same, you can simply write the name once to represent 
    the entire key value pair`,
    example: `
    const object1 = {
      apple     
    } // this is equivalent to apple:apple
    `
  },
  {
    concept: 'blocked scoped functions and scope',
    definition: `Functions declarations that occur inside the blocks are now specfied to be scoped 
    to that block, making it inaccessible to global invocation. Blocks are simply the {} that organize
    sets of code that are related to each other`,
    example:`
    {
      foo();  // in same scope so it works
    
      function foo() {
        // ..
      }
    }
    
    foo();	// ReferenceError
    `
  },
  {
    concept: `let`,
    definition: `The term 'let' functionally is used exactly the same as 'var'. The major difference is that
    'let' variables are only initialized when its been declared even though its still hoisted. Unlike var, 
    Accessing a let variable before its been declared will lead to a reference or temporal dead zone error. 
    Temproal dead zone error simply means trying to access a variable that has been declared but not yet initialized`,
    example: `
    {
      console.log( a );	// undefined
      console.log( b );	// ReferenceError
    
      var a;
      let b;
    }
    `
  },
  {
    concept: `const`,
    definition: ` const creates constant type variables which means the variable becomes read only after
    initial value has been set. If variable is object or array, the contents of object or array can still
     be changed. 
    `,
    example: `
    Example 1
    {
      const a = 2;
      console.log( a );	// prints 2
    
      a = 3; // TypeError!
    }
    Example 2
    {
      const a = [1,2,3];
      a.push( 4 );
      console.log( a );		// prints [1,2,3,4]
      
      a++;  // TypeError!
      a = 42;		// TypeError!
    }
    `
  },
  {
    concept: 'spread/Rest',
    definition: `Spread or rest operator is basically three dots '...' does different things
    based on the context it is being used. 
    `
  },
  {
    concept: `spread/rest in front of arrays`,
    definition: `When used in front of array or anything iterable, it spreads them out into 
    their individual values`,
    example: `
    function foo(x,y,z) {
      console.log( x, y, z );
    }
    
    foo( ...[1,2,3] ); // prints 1 2 3
    `
  },
  {
    concept: `spread/rest inside array declarations`,
    definition: `acts similarly to apply() or concat() of combining two
    arrays
    `,
    example:`
    var a = [2,3,4];
    var b = [ 1, ...a, 5 ];

    console.log( b );	 // prints [1,2,3,4,5]
    ` 
  },
  {
    concept: `spread/rest inside function parameters`,
    definition: `does the opposite of array where it gathers a set of values into 
    a single array`,
    example: `
    function foo(...args) {
      console.log( args );
    }
    
    foo( 1, 2, 3, 4, 5); // prints [1,2,3,4,5]
    `
  },
  {
    concept: 'default parameter values',
    definition: `Provides a default argument in case one has not been already provided. If 
    argument has been provided, will use the provided argument rather than the default.`,
    example: `
    function foo(x = 11, y = 31) {
      console.log( x + y );
    }
    
    foo();	 // 42
    foo( 5, 6 );		// 11
    foo( 0, 42 );		// 42
    `
  },
  {
    concept: `default value expressions and function calls`,
    definition:` Default values for function paramters can be any valid expression
    including function calls. Note that it will return refence error if you use variables
    before initialization`,
    example: `
    Example 1
    function bar(val) {
      console.log( "bar called!" );
      return y + val;
    }
    
    function foo(x = y + 3, z = bar( x )) {
      console.log( x, z );
    }
    
    var y = 5;
    foo();	// "bar called"
                   // 8 13
    foo( 10 );		// "bar called"
              // 10 15
    y = 6;
    foo( undefined, 10 );		// 9 10
    
    Example 2
    var w = 1, z = 2;

    function foo( x = w + 1, y = x + 1, z = z + 1 ) {
    	console.log( x, y, z );
    }

    foo();	// ReferenceError
    `
  },
  {
    concept: 'Destructuring',
    definition: `
    THe idea is that it is cleaner way of grabbing values from an array or object
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
    concept: `super`,
    definition: `used to call and access functions on a object's parent`,
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
        this.height; // ReferenceError, super needs to be called first
        
        /* Calls the parent class' constructor with lengths
        provided for the Rectangle's width and height */
        super(length, length);

        this.name = 'Square';
      }
    }
    `
  },
  {
    concept: `arrow functions`,
    definition: `arrow functions is a function but does not have a function declaration as they are anonymous
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
    concept: `this and arrow functions`,
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
    concept: `template literals`,
    definition: `allows for string interpolation or adding variable into string without using '+'. It instead uses
    backticks to cover entire string and places variable name inside the backets with money sign to extract value 
    from variable and concat it to the string`,
    example: 'const var1 = 323; console.log(`There are ${var1} boxes`);   // prints There are 323 boxes'
    },
  {
    concept: `symbols`,
    definition: `new type of primitive in es6. It is the return value of the function Symbol(). The value
    may be used as an identifier for object properties`
  },
];

export default Es6;