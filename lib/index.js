var request = require('request'),
	async = require('async'),
	fs = require('fs'),
	http = require('http'),
	request = require('request');

//a no-op
function noop(done) {
  done();
}

module.exports = function(opts, callback) {
	var self = this;

	if(!opts.port || typeof opts !== 'String') 
		return console.err('Ip for Router not Specified!');

	self.opts = opts;

	// Load Ip Address and Login
	function Load(done) {
		request
			.get('http://some.server.com/')
			.auth(opts.auth.user, opts.auth.password, false)
			.on('error', done)
			.on('response', function(response) {
				done(null, response)
			});
	};

	// Sniff Out Router Firmware Type
	function Sniff(done) {

	};

	// Set Tasks Object
	var tasks = {
		load: Load,
		sniff: ['load', Sniff]
	};

	// Call Async Tasks
	async.auto(tasks, callback);
};