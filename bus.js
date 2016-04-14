var colors = require('colors');
var student = require('./student');
var Bus = function(driverName,color,gas){
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color; 
	this.gas = gas;
	this.studentEntersBus = function(newStudent){
		this.studentsOnTheBus.push(newStudent);
	};
	this.busChatter = function(student){
		console.log(colors.rainbow(student.catchPhrase));
	};
	this.removeStudent = function(student){
		var s = this.studentsOnTheBus;
		var i = s.indexOf(student);
		this.studentsOnTheBus = s.slice(0,i).concat(s.slice(i+1));
	}
}

module.exports = Bus;