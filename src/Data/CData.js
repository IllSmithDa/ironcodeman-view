const CData = [
  {
    concept: `format string specification`,
    definition: `Formatting placeholder represent a variable to be inserted into a string.
    %s = string, %d = int, %u = decimal, %f = float, %c = char, %lf double float, 
    %LF long double float, %X = unsigned hexadecimal, %u = unsigned int,`,
    example: `
    int age = 6;
    printf(I am %d, age); // I am 6
    `
  },
  {
    concept: `unsigned int`,
    definition: `the range of integers it can hold does not include negative numbers as the 
    range of numbers it can hold starts at 0. signed int which int is by default can hold both 
    positive and negatvie numbers. unsigned allows for larger positive interger numbers than 
    signed int can.`,
    example: `
    unsigned int age = 400000000;
    `
  },
  {
    concept: `arrays`,
    definition: `uses curly brackets for inserting arrays rather than square brackets. You can
    also insert a number in the brackets to declare the maximum number of spot for the array.
    Push and pop not built in.`,
    example: `
    float array[] = { 1, 3, 4, 5}; 
    float array2[40]; declares 40 spots in array.
    array2[1] = 49; Assign 49 to array[1];`
  },
  {
    concept: `structs`,
    definition: `Simpler version of objects. It can hold types and instance of these types that
    are packaged in an instance of a struct similar to having instance of an object`,
    example: `
    struct myStruct {
      int number;
      int array[3];
      float lastName;
    }`
  },
  {
    concept: 'strings',
    definition: `string are basically array of chars in c. You add a pointer
    to variable type char or use an array char type `,
    example: `
    // two ways of declare strings
    char myString = "Hello World"; 
    char myString[] = "Hello World";`
  },
  {
    concept: `pointers`,
    definition: `A pointer is a variable which contains the address in memory of another variable.`,
    example: `
    int x = 3; 
    // myPointer equals to the address of x
    int *myPointer = &x; 
    `,
  },
  {
    concept: `malloc`, 
    definition: `function that allocates the requested memory and returns a pointer to it. Other versions 
    of this function is realloc() and calloc(); Make sure to free memory when you are done as garbage collection
    is not handled for you in c.`,
    example: `
    void * malloc(size_t size); 

    // str return address of the allocated memory.
    char * str = (char*) malloc(15); 
    
    // frees memory to prevent memory leak.
    free(str); 
    `
  },
  {
    concept: 'realloc',
    definition: 'resizes the memory allocation of a already defined malloc or calloc. It takes the pointer to the malloc as one of its argument.',
    example: `
    int *p;
    p = (int*)malloc(5*sizeof(int)); 

    // memory allocated changed from 5 to 11
    p = (int*)realloc(p, 11*sizeof(int));
    `
  },
  {
    concept: `null poiner`,
    definition: ` A variable that is a pointer but is not yet pointing to anything`,
    example: `
    int * myPointer = NULL; 
    `
  },
  {
    concept: `void pointer`,
    definition: `A specific type of pointer that points to somde data location in the storage which doesn't have a specific type. It is 
    a special type of pointer that can be pointed at any data type`,
    example: 
    `
    int nValue;

    float fValue;

    struct MyStruct
    {
        int n;
        float f;
    };
    MyStruct sValue;

    // Pointing at three different types
    void *ptr;
    ptr = &nValue; // valid
    ptr = &fValue; // valid
    ptr = &sValue; // valid`
  },

];

export default CData;