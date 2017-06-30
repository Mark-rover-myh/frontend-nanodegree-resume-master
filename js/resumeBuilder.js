
//bio object
var bio = {
	"name": "Himanshu Sundriyal",
	"role": "Web Developer",
	"contacts": {
		"mobile": "650-55-5555",
		"email": "sundriyalh1994@gmail.com",
		"github": "hsdeveloper147",
		"location": "Delhi"
	},
	"welcomeMessage": "I am a passionate Web Developer",
	"skills": ["Android Developer","Web Developer","Game Developer","Machine Learning"],
	"bopic": 'images/fry.jpg'

};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.bopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedLocation);
	$('#header').append(formattedBiopic);
	$('#header').append(formattedWelcomeMsg);
	//Appending contact details in footer
	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLocation);


	//dispay skills
	$("#header").append(HTMLskillsStart);
	if(bio.skills.length > 0) {
	for(var i=0;i<bio.skills.length;i++){
		var formattedSkill = HTMLskills.replace(
			"%data%",bio.skills[i]);
		$('#skills').append(formattedSkill);
	}

}
};

// Work object
var work = {
	"jobs": [
		{
			"employer": "DRDO",
			"title": "Intern",
			"location": "Delhi",
			"dates": "2014-2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis leo ut dui porta imperdiet a vitae lorem. Nam vehicula enim faucibus dolor hendrerit dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ornare posuere leo, eu ultricies ligula egestas sodales. Praesent hendrerit odio id tortor commodo tempor. Sed lacinia ligula eget vehicula laoreet",
		},
		{
			"employer": "HimDib Tech",
			"title": "Developer",
			"location": "Kolkata",
			"dates": "2016-Present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis leo ut dui porta imperdiet a vitae lorem. Nam vehicula enim faucibus dolor hendrerit dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ornare posuere leo, eu ultricies ligula egestas sodales. Praesent hendrerit odio id tortor commodo tempor. Sed lacinia ligula eget vehicula laoreet. ",

		}
	]

};

work.display = function(){
//for(job in work.jobs){
	for(var job=0;job<work.jobs.length;job++) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace(
			"%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace(
			"%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",
			work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%",
			work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}

};

//Project object
var projects = {
	"projects": [
		{
			"title": "Popular Movies App",
			"dates": "2014-2015",
			"description": "See list of movies with ratings in an app for android !! ",
			"images": [
				"images/movie1.png",
				"images/movie1.png"
			]
		},
		{
			"title": "Space Shooter",
			"dates": "2016-2017",
			"description": "Play as a space shooter and defeat all the enemies to reach the goal in minimum time",
			"images": [
				"images/sp1.jpeg",
				"images/sp2.jpeg"
			]
		}

	]
};

projects.display = function() {
	for(var i=0;i<projects.projects.length;i++) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",
			projects.projects[i].title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",
			projects.projects[i].dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",
			projects.projects[i].description);
		$('.project-entry:last').append(formattedDescription);
		if(projects.projects[i].images.length > 0){
			for(var j=0;j<projects.projects[i].images.length;j++){
				var formattedImage = HTMLprojectImage.replace("%data%",
				projects.projects[i].images[j]);
				$('.project-entry:last').append(formattedImage);

			}
		}
	}

};

//Education object
var education = {
	"schools": [
	{
		"name": "KVSB",
		"location": "Delhi",
		"degree": "Matrics",
		"majors": ["cs"],
		"dates": "2010-2012",
		"url": "#"
	},
	{
		"name": "JMI",
		"location": "Banglore",
		"degree": "BTech",
		"majors": ["cs"],
		"dates": "2013-2017",
		"url": "#"
	}

	],
	"onlineCourses": [
	{
		"title": "JS Learning",
		"school": "Udacity",
		"dates": "2017-Present",
		"url": "http://www.udacity.com"
	}

	]
};
education.display = function() {
	for(var i=0;i<education.schools.length;i++) {
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",this.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",this.schools[i].degree);
		$('.education-entry:last').append(formattedName+formattedDegree);
		var formattedDate = HTMLschoolDates.replace("%data%",this.schools[i].dates);
		$('.education-entry:last').append(formattedDate);

		if(education.schools[i].majors.length > 0){
			for(var j=0;j<education.schools[i].majors.length;j++){
				var formattedMajor = HTMLschoolMajor.replace("%data%",
				education.schools[i].majors[j]);
				$('.education-entry:last').append(formattedMajor);

			}
		}
		var formattedLocation = HTMLschoolLocation.replace("%data%",this.schools[i].location);
		$('.education-entry:last').append(formattedLocation);
	}

	$('#education').append(HTMLonlineClasses);

	for(var i=0;i<education.onlineCourses.length;i++) {
		// $('#education').append(HTMLschoolStart);

		$('#education').append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%",this.onlineCourses[i].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",this.onlineCourses[i].school);
		$('.education-entry:last').append(formattedTitle+ formattedSchool);

		var formattedDate = HTMLonlineDates.replace("%data%",this.onlineCourses[i].dates);
		$('.education-entry:last').append(formattedDate);
		var formattedUrl = HTMLonlineURL.replace("%data%",this.onlineCourses[i].url);
		$('.education-entry:last').append(formattedUrl);
	}
};



$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

//Displaying contents
bio.display();
work.display();
projects.display();
education.display();










