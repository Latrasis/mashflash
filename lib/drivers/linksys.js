module.exports = Linksys;

// Dependencies
var request = require('request');

// Linksys Defaults
var def = {
	port: '192.168.1.1',
	url: '/Upgrade.htm',
	auth: ['','admin'],
	binaries: [
		{
			model: 'WRT54G',
			"2.2":"http://downloads.linksys.com/downloads/firmware/1224638367382/FW_WRT54Gv4_4.21.5.000_20120220.bin"
		}
	],
	latest: "http://downloads.linksys.com/downloads/firmware/1224638367382/FW_WRT54Gv4_4.21.5.000_20120220.bin"
};


/**
 * Linksys From Module
 * @param {function} toOS [To Module]
 * @param {object} opt [Provide Optional Settings]
 */
function Linksys (os,opt) {

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