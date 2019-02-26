# Description

Reconnects a U-verse router to AT&T. Tested on 5268AC. This router has a bug that causes network latency over time (more so when using Gigabit Fiber).   

This is a fork of ATT-Uverse-Automated-Router-Rebooter. Use this version if the router is connected to an external battery backup. The original reboot script shuts down the router instead of rebooting.

# Usage

- install nvm
- Clone repo
- cd ATT-Uverse-Router-Reconnect
- Edit reboot.js and modify the following two values:
```
  var routerAccessCode = "";  
  var routerIP = "192.168.1.254";
```
- nvm use node
- npm install
- node reboot.js
- Schedule "node reboot.js" via crontab, PM2 etc.
