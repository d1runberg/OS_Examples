var os = require('os');

var hwStats = {
   freeMem: os.freemem(),
   totalMem: os.totalmem(),
   loadAverage: os.loadavg(),
   upTime: os.uptime()
};

console.log("Free memory:", hwStats.freeMem, '/', hwStats.totalMem);
console.log("Total Up Time:", hwStats.upTime);
console.log("Your system activity averages (1 minute, 5 minutes, 15 minutes)");
console.log(hwStats.loadAverage);
