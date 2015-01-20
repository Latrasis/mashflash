#MashFlash

![image](logo.png)

A "Fun-ish" Wi-fi Router Firmware Package Manager + CLI

*Because screw reading forums, and hours of wiki lookups. **Yes i'm looking at you Openwrt** *

Dream API:

```js

var mashflash = require('mashflash');

// Connect to Router
var myrouter = mashflash.connect('192.168.1.9');

// Get router Info 
// ex: os = 'Openwrt - Barrier Breaker 14.10'
// type = 'Arm'

var os = myrouter.os;
var type = myrouter.type;

// Install Router to Latest/Other Firmware with Link
myrouter.install('https://downloads.openwrt.org/barrier_breaker/14.07/ar71xx/generic/OpenWrt-SDK-ar71xx-for-linux-x86_64-gcc-4.8-linaro_uClibc-0.9.33.2.tar.bz2');

// Or have Mashflash figure out the best one 
myrouter.install('Openwrt','latest');

// Or if need just updating
myrouter.upgrade('OpenWrt');




