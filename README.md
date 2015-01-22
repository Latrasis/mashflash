#MashFlash

![image](logo.png)

A "Fun-ish" Wi-fi Router Firmware Package Manager + CLI

*Because screw reading forums, and hours of wiki lookups. **Yes i'm looking at you Openwrt** *

##API Concept:

###Connecting to Router:
---
####mashflash.connect(opts, ip, callback(err, router))

```js
var mashflash = require('mashflash');

// Set Options (Optional)
var opts = {
	type: 'OpenWrt'
	auth: {
		user: 'admin',
		password: ''
	}
};

// Connect to Router
mashflash.connect(opts, '192.168.1.9', function(err, router) {
	// Returns Router Object
	if(!err)
		// Get router Info 
		// ex: os = 'Openwrt - Barrier Breaker 14.07'
		var os = router.os;
		// type = 'Arm'
		var type = router.type;
});

```

###Router Object
---
####router.install(url, callback(err))
##### Install Firmware Binary from specified link
```js
var mashflash = require('mashflash');

mashflash.connect('192.168.1.9',function(err, router){
	if(!err)
		// Install Router Binary from Link
		router.install('https://downloads.openwrt.org/barrier_breaker/14.07/ar71xx/generic/OpenWrt-SDK-ar71xx-for-linux-x86_64-gcc-4.8-linaro_uClibc-0.9.33.2.tar.bz2', function(err){
			if(!err)
				console.log('Install Complete!')
		});

})
```
####router.install(RouterOS, version, callback(err))
##### Give Specified Firmware Name and have Mashflash decide which version
* 'OpenWrt' = Installs Most Compatible OpenWrt instance
* 'Tomato' = Installs Tomato Instance
* 'Linksys' = Installs Linksys Instance
* 'DD-Wrt' = Install DD-Wrt Instance
* Perhaps More

```js
var mashflash = require('mashflash');

mashflash.connect('192.168.1.9', function(err, router){
	if(!err)
		// Or have Mashflash figure out the best one 
		router.install('Openwrt','latest', function(err){
			if (!err)
				console.log('Install Complete!')
		});

})
```
