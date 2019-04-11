class Point{
    constructor(x, y){
        this.x = x;
        this.y = y
    }
    getDistance(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
    }
}
class Line{
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB
    }
    getLengh(){
        const dx = this.pointA.x - this.pointB.x
        const dy = this.pointA.y - this.pointB.y
        return Math.sqrt(dx*dx + dy*dy)
    }
    static compare(d1, d2){
        return d1.getLengh() > d2.getLengh() ? 'd1 is longer than d2' : 'd2 is longer than d1' 
    }
}
const A = new Point(1,1);
const B = new Point(2,2);
const L1 = new Line(A,B)

const C = new Point(0,0);
const D = new Point(3,3);
const L2 = new Line(C,D)

console.log(Line.compare(L1,L2))

// console.log((L2.compare(L1,L2)))




// function compare(d1, d2){
//     return d1.getLengh() > d2.getLengh() ? 'd1 is longer than d2' : 'd2 is longer than d1' 
// }
// console.log(compare(L1,L2))