// console.log('namrata')
// var name='namrata'
// let roll = 100
// console.table([name,roll])

//class 
// class parent
// {
//     hello()
//     {
//         console.log('hello');
//     }
// }
// class Child extends parent
// {

// }
// let obj = new Child()
// obj.hello

class Person
{
    constructor(add)
    {
        this.add=add
        
    }
    eat()
    {
        console.log("eat")
    }
    drink()
    {
        console.log("drink")

    }
    Worker()
    {
        console.log("do nothing")
    }
    
}
class Engineer extends Person
{
    constructor()
    {
        // console.log('second constructur')
        super.Worke()
    }
    
     Worker()
     {
       console.log("i am doing somthing")
       
     }
     Worke()
     {
        console.log("work")
     }

    }
    let obj = new Engineer( "namrata")
    // obj.Worke()
    obj.Worker()
    obj.eat()
    obj.drink()
    
   
    