let arrName = ['Ti', 'An', 'Minh', 'An', 'Teo'];

// for(let i = 0; i < arrName.length; i++)
// console.log(arrName[i])
// map, fill, filter, push, pop, reduce, reverse, slice, splice, shift, unshift
//arrName.map(name => console.log(name))

// console.log(arrName.fill('An',2,1))
// console.log(arrName.filter(name=>name==='An'))


let arrNumber = [1,3,4,5,7,9,21,81,121];
// in ra cac so chinh phuong trong mang
console.log(arrNumber.filter(n=> {
    // for(let i= 0; i<=n;i++){
    //     if(i*i == n)
    //     return n
    // }
    // return parseInt(Math.sqrt(n))*parseInt(Math.sqrt(n)) == n
    return parseInt(Math.sqrt(n))== Math.sqrt(n)
}))
console.log(arrNumber.filter(n=>parseInt(Math.sqrt(n))== Math.sqrt(n)))
// can2(n)*can2(n) = n



let n = 3456;
// co bao nhieu so tu 0->n chia het cho 123, in ra cac so do
// DK: khong dung cu phap if...else
let arr = [];
for(let i = 0; i<=n; i++){
    arr.push(i)
}
let newArr = arr.filter(value=>value%123===0)
// let dem = newArr.length
console.log(`Co ${newArr.length} so chia het cho 123. Cac phan tu do la: ${newArr}` )

// console.log(arr)