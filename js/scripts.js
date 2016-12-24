/* My Scripts go here */



/* Notifications
=================*/

var notification_space = $(".notifications_div");
notification_space.hide();
var notificationsShowing = false;

$(".bell_div").click(function() {
	if (notificationsShowing === false) {
		notification_space.show();
		$(".bell_div").css('backgroundColor', 'lightblue');
		$(".badge").hide();
		notificationsShowing = true;
	} else if (notificationsShowing === true) {
		notification_space.hide();
		$(".bell_div").css('backgroundColor', '#7477BF');
		notificationsShowing = false;
	}
});




/* Alerts
===========*/

var closeButton1 = $(".alert_X_1");
closeButton1.click(function() {
	$(".alert_1").hide();
});

var closeButton2 = $(".alert_X_2");
closeButton2.click(function() {
	$(".alert_2").hide();
});


var closeButton3 = $(".alert_X_3");
closeButton3.click(function() {
	$(".alert_3").hide();
});




/* CHARTS CODE
===============
===============*/

Chart.defaults.global.tooltips.enabled = false;


/* Main Traffic Chart Switch Code
===================================*/

var hourlyChart = $(".main_traffic_hourly_chart");
var dailyChart = $(".main_traffic_daily_chart");
var weeklyChart = $(".main_traffic_weekly_chart");
var monthlyChart = $(".main_traffic_monthly_chart");

$(document).ready(function() {
	hourlyChart.hide();
	dailyChart.hide();
	monthlyChart.hide();
});

$(".main_traffic_header").click(function(event) {
	console.log("Click main traffic header");
});

var currentChart = weeklyChart;
var currentToggle = $(".toggle_weekly");

$(".toggle_hourly").click(function() {
	currentChart.hide();
	hourlyChart.show();
	currentChart = hourlyChart;
	currentToggle.removeClass("toggle_selected");
	$(".toggle_hourly").addClass("toggle_selected");
	currentToggle = $(".toggle_hourly");
});

$(".toggle_daily").click(function() {
	currentChart.hide();
	dailyChart.show();
	currentChart = dailyChart;
	currentToggle.removeClass("toggle_selected");
	$(".toggle_daily").addClass("toggle_selected");
	currentToggle = $(".toggle_daily");
});

$(".toggle_weekly").click(function() {
	currentChart.hide();
	weeklyChart.show();
	currentChart = weeklyChart;
	currentToggle.removeClass("toggle_selected");
	$(".toggle_weekly").addClass("toggle_selected");
	currentToggle = $(".toggle_weekly");
});

$(".toggle_monthly").click(function() {
	currentChart.hide();
	monthlyChart.show();
	currentChart = monthlyChart;
	currentToggle.removeClass("toggle_selected");
	$(".toggle_monthly").addClass("toggle_selected");
	currentToggle = $(".toggle_monthly");
});


/* Main Traffic Charts
=======================*/

var mainTrafficHourlyChart = $(".main_traffic_hourly_chart");
var mainTrafficHourlyChart = new Chart(mainTrafficHourlyChart, {
    type: "line",
    data: {
	    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
	    datasets: [{
	    	label: "Visits",
	        fillColor: "blue",
	        strokeColor: "red",
	        pointColor: "green",
	        data: [0, 35, 50, 80, 100, 75, 40, 180, 65, 80, 110, 125, 140, 175, 125, 90, 150, 110, 100, 150, 180, 200, 160, 150]
	    }]
	},
	options: {
    	responsive: true,
    	fontSize: 5,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 200,
                    fixedStepSize: 50
                }
            }],
            xAxes: [{
           		ticks: {
                	fontSize: 8
            	}
        	}]
        }
    }
});

var mainTrafficWeeklyChart = $(".main_traffic_weekly_chart");
var mainTrafficWeeklyChart = new Chart(mainTrafficWeeklyChart, {
    type: "line",
    data: {
	    labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	    datasets: [{
	    	label: "Visits",
	        fillColor: "blue",
	        strokeColor: "red",
	        pointColor: "green",
	        data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500],
	    	backgroundColor: "#E2E3F6"
	    }]
	},
	options: {
    	responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 2500,
                    fixedStepSize: 500
                }
            }],
            xAxes: [{
           		ticks: {
                	fontSize: 14
            	}
        	}]
        }
    }
});

var mainTrafficMonthlyChart = $(".main_traffic_monthly_chart");
var mainTrafficMonthlyChart = new Chart(mainTrafficMonthlyChart, {
    type: "line",
    data: {
	    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
	    datasets: [{
	    	label: "Visits",
	        fillColor: "blue",
	        strokeColor: "red",
	        pointColor: "green",
	        data: [12500, 15000, 10000, 15000, 5000, 10000, 20000, 15000, 7500, 12500, 17500, 17000]
	    }]
	},
	options: {
    	responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 20000,
                    fixedStepSize: 5000
                }
            }],
            xAxes: [{
           		ticks: {
                	fontSize: 11
            	}
        	}]
        }
    }
});

var mainTrafficDailyChart = $(".main_traffic_daily_chart");
var mainTrafficDailyChart = new Chart(mainTrafficDailyChart, {
    type: "line",
    data: {
	    labels: ["S", "M", "T", "W", "T", "F", "S"],
	    datasets: [{
	    	label: "Visits",
	        fillColor: "blue",
	        strokeColor: "red",
	        pointColor: "green",
	        data: [100, 75, 225, 100, 200, 175, 75]
	    }]
	},
	options: {
    	responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 250,
                    fixedStepSize: 50
                }
            }]
        }
    }
});



/* Daily Traffic Chart
=======================*/

var dailyTrafficChart = $(".daily_traffic_chart");
var dailyTrafficChart = new Chart(dailyTrafficChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
	        {
	        	label: "Visits",
	        	backgroundColor: "#7377BF",
	    		borderColor: "#7377BF",
	            data: [100, 75, 225, 100, 200, 175, 75],
	        },
	        {
	        	label: "Conversions",
	        	backgroundColor: "#74B1BF",
	    		borderColor: "#74B1BF",
	            data: [60, 50, 120, 80, 190, 135, 40],
	        }
        ]
    },
    options: {
    	responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: 250,
                    fixedStepSize: 50
                }
            }]
        }
    }
});



/* Mobile Users Chart
=======================*/

var mobileUsersChart = $(".mobile_users_chart");
var mobileUsersChart = new Chart(mobileUsersChart, {
    type: "doughnut",
    data: {
	    labels: ["Desktops", "Tablets", "Phones", "Gaming Consoles"],
	    datasets: [{
	        data: [55, 20, 20, 5],
	        backgroundColor: [
                "#7377BF",
                "#81C98F",
                "#74B1BF",
                "#4F5879"
            ],
	    }]
	},
	options: {
		responsive: true
	}
});


mainTrafficWeeklyChart.legend.options.display = false;
mainTrafficDailyChart.legend.options.display = false;
mainTrafficHourlyChart.legend.options.display = false;
mainTrafficMonthlyChart.legend.options.display = false;



/*==========================
   Message User Search Bar
============================*/

var searchBar = $(".message_search_bar");
var chooseDiv = $(".choose_div");
chooseDiv.hide();
var doneSearching = false;

/* Showing and hiding the choose-div */

function showTheChooseDiv() {
	if (searchBar[0].value !== doneSearching) {
		chooseDiv.show();
	}
}
searchBar.focus(function() {
	showTheChooseDiv();
});
searchBar.keyup(function() {
	showTheChooseDiv();
});
searchBar.focusout(function() {
	chooseDiv.hide();
});

/* The main code for searching. */
var userText = "";
var tempVariable;
searchBar.keyup(function() {
	userText = searchBar[0].value;
	userText = userText.toLowerCase();
	if ( userText !== "") {
		for (i = 0; i < allNames.length; i++) { 
			tempVariable = allNames[i].fullName;
    		if (tempVariable.includes(userText)) {
    			allNames[i].class.show();
    		} else {
    			allNames[i].class.hide();
    		}
		}
	} else {
		for (i = 0; i < allNames.length; i++) {
			allNames[i].class.show();
		}
	}
});

/* Clicking on a name in the choose div */
var listName = $(".choose_list li");
listName.mousedown(function() {
	var chosenName = $(this).children()[0].children[1].children[0].textContent;
	searchBar[0].value = chosenName;
	doneSearching = chosenName;
	userText = chosenName;
});

/* The content itself */
var cameron = {class: $(".cameron_item"), fullName:"cameron fuguet"};
var celeste = {class: $(".celeste_item"), fullName:"celeste bancos"};
var christian = {class: $(".christian_item"), fullName:"christian raptor"};
var iulia = {class: $(".iulia_item"), fullName:"iulia diana"};
var kathryn = {class: $(".kathryn_item"), fullName:"kathryn hershey"};
var peter = {class: $(".peter_item"), fullName:"peter piper"};
var raven = {class: $(".raven_item"), fullName:"raven charleston"};
var allNames = [cameron, celeste, christian, iulia, kathryn, peter, raven];


/* Send Button just kind of clears everything, but shows an error if something is already empty.. */
var messageSpace = $(".message_space");
var sendButton = $(".send_message_button");
sendButton.click(function() {
	if (searchBar[0].value === "") {
		alert("Error: User Name missing.");
	} else if (messageSpace[0].value === "") {
		alert("Error: Message is empty.");
	} else {
		alert("Message Sent!");
		searchBar[0].value = "";
		messageSpace[0].value = "";
	}
});



/*===============================
   LocalStorage Use in Settings
=================================*/

var saveButton = $(".settings_save_button");
var emailCheck = $(".email_check");
var profileCheck = $(".profile_check");
var selectedTimeZone;

saveButton.click(function() {
	if(emailCheck[0].checked) {
		localStorage.setItem("sendEmail", "Yes");
	} else {
		localStorage.setItem("sendEmail", "No");
	}
	if(profileCheck[0].checked) {
		localStorage.setItem("publicProfile", "Yes");
	} else {
		localStorage.setItem("publicProfile", "No");
	}
	selectedTimeZone = $(".timezone_selector option:selected");
	localStorage.setItem("timeZoneID", selectedTimeZone.attr("value"));
});

var foundTimeZoneID;
$(document).ready(function($) {
	if (localStorage.getItem("sendEmail") === "No") {
		emailCheck[0].checked = false;
	} else {
		emailCheck[0].checked = true;
	}
	if (localStorage.getItem("publicProfile") === "No") {
		profileCheck[0].checked = false;
	} else {
		profileCheck[0].checked = true;
	}
	if (localStorage.getItem("timeZoneID") > 0) {
		selectedTimeZone = $(".timezone_selector option:selected");
		selectedTimeZone[0].selected = false;
		foundTimeZoneID = localStorage.getItem("timeZoneID");
		$(".timezone_selector option[value=" + foundTimeZoneID + "]")[0].selected = true;
	}
});

$(".cancel_button").click(function() {
	if (localStorage.getItem("sendEmail") === "No") {
		emailCheck[0].checked = false;
	} else {
		emailCheck[0].checked = true;
	}
	if (localStorage.getItem("publicProfile") === "No") {
		profileCheck[0].checked = false;
	} else {
		profileCheck[0].checked = true;
	}
	if (localStorage.getItem("timeZoneID") > 0) {
		selectedTimeZone = $(".timezone_selector option:selected");
		selectedTimeZone[0].selected = false;
		foundTimeZoneID = localStorage.getItem("timeZoneID");
		$(".timezone_selector option[timeZoneID=" + foundTimeZoneID + "]")[0].selected = true;
	}
});