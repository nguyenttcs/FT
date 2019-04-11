class Point{
    constructor(x, y){
        this.x = x;
        this.y = y
    }
    getDistance(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
    }
}
// const A = new Point(2,1);
// console.log(A.getDistance())
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
}
// const O = new Point(2,2);
// const A = new Point(1,1);
// const OA = new Line(O,A);
// console.log(OA.getLengh())

module.exports = {Point,Line}