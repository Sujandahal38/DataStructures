//stack

//array stack


const stack = [];

const word = 'race';

for (char of word) {
    stack.push(char);
}

let reWord = ''

for (char of word) {
    reWord += stack.pop();
}

reWord == word ? console.log(`${word} is a palindrome`) : console.log(`${word} is not a palindrome`)


//class based stack
//methods : peek, push, pop, length


const Stack = function(){
    this.storage = {};
    this.count = 0;
    this.push = function(item) {
        this.storage[this.count] = item;
        this.count++;
    }
    this.pop = function () {
        if (this.count == 0) {
            return undefined;
        }
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return console.log(result);
    }
    this.peek = function(){
        return console.log(this.storage[this.count-1]);
    }
    this.length = function () {
        return console.log(this.count)
    }
}

let myStack = new Stack();

myStack.push('apple');
myStack.push('banana')
myStack.peek();
myStack.pop();
myStack.peek();
myStack.push('mango');
myStack.push('Pineapple');
myStack.length();
myStack.peek();