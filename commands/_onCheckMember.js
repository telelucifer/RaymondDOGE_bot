/*CMD
  command: /onCheckMember
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options)); 
let user = options.result.status;
if (user=="member"){
Bot.runCommand("/menu");
}else{
Bot.runCommand("/start");
}
