// MAP,FILTER,REDUCE----------->

// MAP-->1)Map harr value par perform hota hai
// 2)ye hmesha new array bnata hai ya new array return krta hai ye kbhi existing array ko modify ni krta


// var arr=[2,6,9,90,87,5,4,78,65,43,21,9,0,8,7];
// var arr1=arr.map(function(item){
// if(item>10){
//     return item*item
// }
// })
// console.log(arr1);


// var boyheartbeat=[2,4,7,8,9,12,33,465,6];
// var girlheartbeat=boyheartbeat.map(function(item){
//     if(item>10){
//         return item;
//     }
// })
// console.log(girlheartbeat)


// var num=[2,6,9,90,87,5,4,78,65,43,21,9,0,8,7];
// var num2=num.map(function(item){
//     return item+2
// })
// console.log(num2)


// var num=[1,2,3,4,5,6,7,8];
// var newq=num.map(function(total,item){
//     return total+item;
// })
// console.log(newq)



// FILTER--->1)Filter logic k behalf p filter krdeta h
// 2)Ye bhi nya array bnaega ya return krega


// var partyTime=[2,3,4,7,8,9,12,15,18];
// var partyTime2=partyTime.filter(function(item,index){
//     console.log(index)
// if(item>10){
//         return item;
//     }
// })
// console.log(partyTime2)


// newarr=[{name:"Rishabh"},{class:8},2,3,5,6,7];
// newbye=newarr.filter(function(item){
//     return item.name
// })
// console.log(newbye)


// newarr=[{name:"Rishabh"},{name:"Khushi"},2,3,5,6,7];
// newbye=newarr.filter(function(item){
//     return item.name!="Rishabh"
// })
// console.log(newbye)


// REDUCE---->Reduce ka use tb krte hain jb uski array m chahe hazaar values ho but vo return only single value krega
// var num=[1,2,3,4,5,6,7,8];
// var newq=num.reduce(function(total,item){
//     return total+item;
// })
// console.log(newq)




// ***INTERVIEW QUESTION****
// Q1-->map undefined q return krta h?
// A1-->ye each value ko print krrta h isiliye ye undefine ko bhi show krta h

