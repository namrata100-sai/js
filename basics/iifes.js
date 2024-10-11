
//named iife
(function iife(name)
{
    console.log(`iife,${name}`)
})('namrata');

//only iife
((name)=>
{
    console.log(`${name}`)
})('namrata')

for(let i=1;i<=5;i++)
{
    console.log(`outer loop ${i}`)
   for(let j=1;j<=5;j++)
     console.log(i,j +'=',i*j)
}  