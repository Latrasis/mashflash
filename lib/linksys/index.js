module.exports = Linksys();

// Dependencies
var request = require('request');


// Set Linksys Defaults
var def = {
	port: '192.168.1.1',
	url: '/Upgrade.htm',
	auth: ['','admin']
};

function Login() {
	request.get(
		settings.port + settings.url,
		function (error, response, body) {
			if(!error && response.header === 200){
				console.log('Sucess!');
			} else {
				console.log(settings.port);
				console.error('Credentials Rejected...');
			}
		}).auth(settings.auth[0],settings.auth[1],false);
};

function Installer (os) {
	// body...
}

function Linksys (settings) {
	// Check if Settings Given
	settings = settings?settings:def;

 	return {
		// Default Linksys Port and Url Settings
		flash: function(settings) {

			return {
				to: Installer
			}
		},
		login: Login
	}
}

