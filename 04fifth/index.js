//how to manage memory ( call by value and call by refrence) (diffrence between stack and heap memory)
//call by value
let data=90;
let data2=data;
data2=99;
// console.log(data)   //data and data2 will contain diffrent value because it has copy value, it will has stack memory
// console.log(data2)






//call by refrence
let arr=[12,3,5,'raja'];
let arr2=arr;
arr2.push(9)
// console.log(arr)    //arr and arr2 both will contain same value because it has heap memory
// console.log(arr2)


