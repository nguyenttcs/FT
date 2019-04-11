const l = require('./8_module_export.js')
const Point = l.Point;
const Line = l.Line

class Triangle{
    constructor(pointA, pointB, pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC
    }
    getPerimeter(){
        const AB = new Line(this.pointA, this.pointB)
        const AC = new Line(this.pointA, this.pointC)
        const BC = new Line(this.pointB, this.pointC)
        return AB.getLengh() + AC.getLengh() + BC.getLengh()
    }
}
const A = new Point(1,1);
const B = new Point(1,0);
const C = new Point(0,1);
const t = new Triangle(A,B,C)
console.log(t.getPerimeter())