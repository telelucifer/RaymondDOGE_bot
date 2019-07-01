/*CMD
  command: /login64569
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Password Please?
  keyboard: 
  aliases: 
CMD*/

if(data.message=="Niloy645690@"){
     Bot.setProperty("admin_chat", data.chat.chatid, "string")
     Bot.sendMessage("Login was successful");
   }else{
     Bot.sendMessage("Access denied.");
   }
