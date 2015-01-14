// Dependencies
var request = require('request');
	fs = require('fs'),
	http = require('http'),
	request = require('request');

/**
 * Flash Function Module
 * @param {object} opts Options Object
 */
function Flash (opts) {
	var self = this;
	self.opts = opts;
	if (!(self instanceof Flash)) return new Flash(opts)
};

Flash.prototype.from = function(os) {
	var self = this;

	if(require('./lib/drivers/'+ os)){
		self.from = os;
		return self
	} else {
		console.error('Sorry, ' +os +'Flashing is currently unsupported :(');
	}
};

Flash.prototype.to = function(os) {
	var self = this;

	if(require('./lib/drivers/'+ os)){
		require('./lib/drivers/'+self.from)(require('./lib/drivers/'+os),self.opts);
	} else {
		console.error('Sorry, ' +os +'Installation is currently unsupported :(');
	}
};

/**
 * Install Driver From Module
 * @param {function} toOS [To Module]
 * @param {object} opt [Provide Optional Settings]
 */
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