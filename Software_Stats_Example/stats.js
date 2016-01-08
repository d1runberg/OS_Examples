var os = require('os');

var systemStats = {
   host: os.hostname(),
   home: os.homedir(),
   platoform: os.platform(),
   release: os.release(),
   type: os.type()
}

console.log("Your hostname is:", systemStats.host);
console.log("Your home directory is:". systemStats.home);
console.log("Your base platform is:", systemStats.platform);
console.log("Your OS is", systemStats.type,"version:", systemStats.release);
