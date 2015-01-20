var request = require('request');
	fs = require('fs'),
	http = require('http'),
	request = require('request');

module.exports = Flash;

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