/* Client should not instanciate objects using new keyword. They use the factory class to create objects
(PRODUCTS). The factory class has a method WITH CONDITIONALS that based on parameters decide on
the subclass/implementation to instanciate */
interface Animal{
    printAnimalType():void;
    printAnimalSound():void;
}

class Dog implements Animal{
    printAnimalType() {
        console.log("I am a dog");
    }
    printAnimalSound(): void {
        console.log("Woof woof");
    }
}

class Cat implements Animal{
    printAnimalType() {
        console.log("I am a cat");
    }
    printAnimalSound(): void {
        console.log("Meowww");
    }
}


class AnimalFactory{    
    makeAnimal(animalName:string):Animal {
        switch(animalName){
            case 'cat' : return new Cat();
            case 'dog' : return new Dog();
            default : throw new Error(`Animal with a name of ${animalName} is not supported`);
        }        
    }
}


//client code
let  myCat:Animal = new AnimalFactory().makeAnimal('cat');
let myDog:Animal = new AnimalFactory().makeAnimal('dog');

myCat.printAnimalSound();
myCat.printAnimalType();

myDog.printAnimalSound();
myDog.printAnimalType();

try{
    let myRabbit:Animal = new AnimalFactory().makeAnimal('rabbit');
}
catch(e:any){
    console.log(e.message);
}
