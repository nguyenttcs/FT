/**
 * Cho bien h = 5
 * Ve cac hinh sau
    *           d=1 , c=1
    * *         d=2 , c=1 2
    * * *       d=3 , c=123
    * * * *
    * * * * *
    
    * * * * *   d=1, c=12345
    * * * *     d=2, c=1234
    * * *       d=3, c=123
    * *         c <= h - d + 1
    *
    
            *
          * *
        * * *
      * * * *
    * * * * *
    
            *    d = 1 , c = 5
          * *    d = 2 , c = 45
        *   *    d = 3 , c = 35
      *     *    d = 4 , c = 25
    * * * * *    d = 5 , c = 12345
                c = h , d = h , c = h - d+1
    
 * 
 */
function veHinh1(h){
    for(let d = 1; d<=h; d++){
        let s = ''
        for(let c = 1; c<=h; c++){
            if(c<=d) s+='*'
            // else s+=''
        }
        console.log(s)
    }
}

let h = 5
// veHinh1(5)
function veHinh2(h){
    for(let d = 1; d<=h; d++){
        let s = ''
        for(let c = 1; c<=h; c++){
            if(c <= h - d + 1) s+='*'
            // else s+=''
        }
        console.log(s)
    }
}
// veHinh2(h);

function veHinh4(h){
    for(let d = 1; d<=h; d++){
        let s = ''
        for(let c = 1; c<=h; c++){
            if(c == h || d == h || c == h - d+1) s+='*'
            else s+='-'
        }
        console.log(s)
    }
}
// veHinh4(h)

function veHinh(h,fn){
    for(let d = 1; d<=h; d++){
        let s = ''
        for(let c = 1; c<=h; c++){
            const dk = fn(h,d,c)  //bool
            if(dk) s+='*'
            else s+=''
        }
        console.log(s)
    }
}

veHinh(5,(h,d,c)=>{
    return c<=d
})
//hinh 4
// veHinh(5,(h,d,c)=>{
//     return c == h || d == h || c == h - d+1
// })