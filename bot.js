const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('╚[════════════════════════════════════]╝')
});

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 


***دعوه لك خاصه ياحبي***
***خش ماارح تخسر شى***
***فله وناسه وكل شى***
https://discord.gg/xuPegqn
لاتخيب ظني



 ${member}  
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 



***دعوه لك خاصه ياحبي***
***خش ماارح تخسر شى***
***فله وناسه وكل شى***
https://discord.gg/xuPegqn
لاتخيب ظني


 ${member}  
`) 
}).catch(console.error)
})





client.login('  توكن الحساب   ');
