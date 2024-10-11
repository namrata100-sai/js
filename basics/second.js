// dates

//  let mydate = new Date(2024,2,5)
//  console.log(mydate. toDateString())
//  console.log(mydate. toString())
//  console.log(mydate. toLocaleString())


// arrray 
// let arrayy = [1,2,3,4,true, "namrata"]
// // arrayy.unshift(9)
// // // console.log(arrayy.includes(9))
// // console.log(arrayy)
// // let newarray = arrayy.join()
// // console.log( typeof newarray)
// console.log(arrayy.slice(1,4))
// console.log(arrayy)
// console.log(arrayy.splice(1,4))
// console.log(arrayy)

// objects
// let mysym = Symbol('key1')
// let obj =
// {
//   name:'namrata',
//   surname:'kumbhgar',
//   [mysym]:'key1',
//   age:20,
//   12: 'birth'
// }
// console.log(obj)
// console.log(obj['name'])
// console.log( typeof obj[mysym])
// // Object.freeze(obj)
// obj.name='vivek'
// obj.jop= function(){console.log(`web development ${this.name}`)}
// console.log(obj)


// let obj =
// {
//     obj1:
//     {
//         obj3:
//         {
//             name: 'namarta',
//             age:20

//         }
//     }
// }
// console.log(obj.obj1.obj3)

//  joining two object

//   let obj1 = {name:'namarta'}
//   let obj2={age:20}
// //   console.log(Object.assign({},obj2,obj1))
// // //  console.log(obj3)
// console.log({...obj1,...obj2})
// console.log(Object.keys(obj1))

// const obj=
// {
//   name:'namrata',
//   age:20
// }
// const {name:n}=obj;
// console.log(n)


const array =[1,2,3,4]
const items=array.reduce((cal,crrent)=>
{
    
    cal+crrent
    
},0
)
console.log(items)
