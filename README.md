# Description

This script reconnects your AT&T U-verse router with AT&T. Tested on 5268AC. The 5268AC router has a bug which causes network latency over time (more so when using Gigabit Fiber).   

This is a fork of ATT-Uverse-Automated-Router-Rebooter. Use this version if your router is connected to an external battery backup. The original reboot script shuts down the router instead of rebooting.

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
