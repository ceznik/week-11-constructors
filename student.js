var colors = require('colors');
var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA; 
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function(){
		if(this.detentions < 10 && this.GPA > 2){
			return(colors.green("This student can have fun."));
		}else{
			return(colors.red("This student cannot have fun"));
		}
	}
}
module.exports = Student;