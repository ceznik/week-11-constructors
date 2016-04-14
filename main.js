var prompt = require('prompt');
var colors = require('colors');
var fs = require('fs');
var Student = require('./student.js');
var Bus = require('./bus.js');
var studentSchema = {
	properties:{
		name:{
			description: colors.magenta("Enter Student Name: "),
			//pattern: /^[a-zA-Z\s\-]+$/,
			message: 'Name must be only letters, spaces, or dashes',
			required: true
		},
		gender:{
			description: colors.magenta("Enter Gender: "),
			//pattern: .*\b(male|female)\b.*$,
			message: 'Please select either male or <female>',
			required: true
		},
		grade: {
			description: colors.magenta("Enter Grade(K-12): "),
			//pattern:,
			message: 'Please enter a valid grade, ie. K-12',
			required: true
		},
		GPA: {
			description: colors.magenta("Enter GPA (4.0 Scale): "),
			///pattern:,
			message: 'Please enter a valid GPA, ie. 0.0-4.0',
			required: true
		},
		detentions: {
			description: colors.magenta("Enter # of detentions: "),
			//pattern:
			message: 'Please enter a number',
			required: true,
			default: 0
		},
		sleepingInClass: {
			description: colors.magenta("Is this student sleeping in class?"),
			required: true,
			default: false
		},
		catchPhrase: {
			description: colors.magenta("Enter this student\'s catch phrase"),
			require: true
		}
	}
}
var busSchema = {
	properties:{
		driverName:{
			description: colors.yellow("Enter Driver Name: "),
			//pattern: /^[a-zA-Z\s\-]+$/,
			message: 'Name must be only letters, spaces, or dashes',
			required: true
		},
		color:{
			description: colors.yellow("Enter color of the bus: "),
			//pattern: .*\b(male|female)\b.*$,
			message: 'Please enter the color of the bus.',
			required: true
		},
		gas: {
			description: colors.yellow("Enter gallons of fuel in the tank: "),
			//pattern:,
			message: 'Please enter the actual gallons of fuel in the tank right now.',
			required: true
		}
	}
}
var studentConstructorArray=[];
prompt.start();

prompt.get(studentSchema, function(err, result){
	if(err) throw err; 
	console.log(colors.green.bgBlue("Student data entered"));
	var studentCreator = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
	fs.appendFile('studentRoster.txt', JSON.stringify(studentCreator) + '\r\n', 'utf8', function(error){
		if (error)throw error
		else{console.log("Student added to the Roster.");}
	});
	console.log(studentCreator.canStudentHaveFun());
	prompt.get(busSchema, function(err, result){
		var busCreator = new Bus(result.driverName, result.color, result.gas); 
		fs.appendFile('busLog.txt', JSON.stringify(busCreator) + '\r\n', 'utf8', function(error){
			if(error) throw error
			else{console.log("Bus created");}
		});
	})

});


