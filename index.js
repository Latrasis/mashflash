var Promise = require('bluebird')
	http = require('http'),
	request = require('request'),
	readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Setting Get Req');

// OS LIST
var osList = {
	'openwrt':require('lib/openwrt'),
	'ddwrt': require('/lib/ddwrt'),
	'linksys': require('lib/linksys')
};


rl.question('Please Enter Username:', function(user) {
	rl.question('Please Enter Password:', function(pass) {
		rl.close();

		linksys.login({
			port: '192.168.1.1',
			url: '/Upgrade.htm',
			auth: [user, pass]
		})
		
	});
});


function fromOS(os){
	
}


function Flash () {
	// Slice Arguments to array
	var args = Array.prototype.slice.call(arguments);

	// If OS Name Given Only
	if(!args[1] && typeof args[0] === 'string'){
		return fromOS(args[0]);
	}
	if(!args[1] && typeof args[0] == 'object'){
		var settings = args[0];
		settings.port = settings.port?settings.port:'192.168.1.1';
		settings.url = settings.url?settings.url:undefined;
		settings.auth = settings.auth?settings.auth:undefined;

		return {
			from: fromOS
		}
	}
}


