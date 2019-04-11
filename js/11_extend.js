
const file = require('./8_module_export.js')
const Point = file.Point
const Line = file.Line

class NewLine extends Line{
    static compare(d1, d2){
        return d1.getLengh() > d2.getLengh() ? 'd1 is longer than d2' : 'd2 is longer than d1' 
    }

}

const A = new Point(5,1);
const B = new Point(1,0);
const C = new Point(2,1);

const l1 = new NewLine(A,B)
const l2 = new NewLine(C,B)

console.log(l1.pointA.x)

console.log(NewLine.compare(l1,l2))