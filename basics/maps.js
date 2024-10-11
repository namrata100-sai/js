// const number=[1,2,3,4,5]
// my=number.map((num)=>num+2)
// .map((num)=>num*2)
// console.log(my)


// const array =[1,2,3,4]
// const items=array.reduce((cal,crrent)=>
// {
//     console.log(`cal${cal} , crrent${crrent}`)
//      return cal+crrent
    
// },0
// )
// console.log(items)

const product =[
    {
        name:'phone',
        price:20000
    },
    {
        name:'laptop',
        price:40000
    },
    {
        name:'ear boots',
        price:2000
    }
]
const totalpay=product.reduce((fp,cp)=>(fp+cp.price),0)
console.log(totalpay)