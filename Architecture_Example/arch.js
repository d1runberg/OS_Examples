var os = require('os');

console.log("Your computers chip architecture is", os.arch());
if(os.arch() === 'arm')
{
   console.log("You are probably running a single board computer");
}
else if(os.arch ==='ia32')
{
   console.log('You are probably running a newer laptop');
}
else {
   console.log('Myabe an upgrade is in your future!')
}
