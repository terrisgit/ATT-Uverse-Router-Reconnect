# AT&T U-verse Router Reconnect Script

This script reconnects your AT&T U-verse router with AT&T. Tested on 5268AC. The 5268AC router has a bug which causes network latency over time (more so when using Gigabit Fiber).   

This is a fork of ATT-Uverse-Automated-Router-Rebooter. Use this version if your router is connected to an external battery backup. The original reboot script shuts down the router instead of rebooting.

# Installation

- Clone repo to your server
- Schedule "node reboot.js" via crontab, PM2 etc.

npm install  
node reboot.js  

# Configuration

Inside reboot.js edit the following two values.

var routerAccessCode = "";  
var routerIP = "192.168.1.254";  
