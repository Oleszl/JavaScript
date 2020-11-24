function Robot(){
    this.work = function() {
        console.log("Я робот - я просто працюю")
    };
}

let robot = new Robot();
robot.work();

function CoffeeRobot(){
    Robot.call(this);

    this.work = function(){
        console.log("Я CoffeeRobot - я варю каву")
    };
}
let coffeeRobot = new CoffeeRobot();
coffeeRobot.work();

function  RobotDancer(){
    Robot.call(this);

    this.work = function(){
        console.log("Я RobotDancer - я просто танцюю")
    };
}
let robotDancer = new RobotDancer();
robotDancer.work();

function  RobotCoocer(){
    Robot.call(this);

    this.work = function(){
        console.log("Я RobotCoocer - я просто готую")
    };
}
let robotCoocer = new RobotCoocer();
robotCoocer.work();

let robotsArray = [robot,coffeeRobot,robotDancer,robotCoocer];
for(let key in robotsArray){
    robotsArray[key].work();

}