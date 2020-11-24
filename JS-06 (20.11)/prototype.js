
function Robot(name) {
    this.name = name;
}
Robot.prototype.work = function () {
    console.log(`Я  ${this.name} просто працюю`);
};
let robot = new Robot("Robot");
robot.work();

function CoffeeRobot(name) {
    this.name = name;

}

CoffeeRobot.prototype = Object.create(Robot.prototype);
let coffeeRobot = new CoffeeRobot("coffeeRobot");
coffeeRobot.work();

function RobotDancer(name) {
    this.name = name;
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
let robotDancer = new RobotDancer("robotDancer");
robotDancer.work();


function RobotCoocer(name) {
    this.name = name;
}

RobotCoocer.prototype = Object.create(Robot.prototype);

let robotCoocer = new RobotCoocer("robotCoocer");
robotCoocer.work();


let robotsArray = [robot,coffeeRobot,robotDancer,robotCoocer];
for(let key in robotsArray){
    robotsArray[key].work();

}