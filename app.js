class Greetings{
    constructor(){
        
    }

    morning(name){
        console.log(`Hello ${name}, GOOD MORNING . Have a good day..`)
    }

    evening(name){
        console.log(`Good Evening, ${name}. What's going on?`)
    }
}

let Greeting = new Greetings()

console.log(Greeting.morning("mezvah"))
console.log(Greeting.evening("mezvah"))