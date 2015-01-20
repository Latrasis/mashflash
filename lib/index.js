// Dependencies
var request = require('request');
	fs = require('fs'),
	http = require('http'),
	request = require('request');

module.exports = function() {
	return {
		from: require('driver'),
		to: require('flash')
	}
};