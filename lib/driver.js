var request = require('request');
	fs = require('fs'),
	http = require('http'),
	request = require('request');

/**
 * Install Driver From Module
 * @param {function} toOS [To Module]
 * @param {object} opt [Provide Optional Settings]
 */

module.exports = Driver;

function Driver (os,opt) {

	// If Given Firmware Module
	if(typeof os === 'function' && !opt){
		Install(os(), os().defaults.binaries.latest);
	};

	function Install(settings, binary) {
		// Check For Available Settings
		settings = settings?settings:def;

		request
			.get(binary)
			.on('error',function(err) {
				console.error(err);
				console.error('Firmware Package Unavailable...');
			})
			.pipe(
				request.put(settings.port + settings.url).auth(settings.auth[0],settings.auth[1],false)
			);
	};

	var result = {
		defaults: def,
		install: Install
	};

	return result;

}