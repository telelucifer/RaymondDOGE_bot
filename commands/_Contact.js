/*CMD
  command: /Contact
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter your *Message* Here :

  <<KEYBOARD

  KEYBOARD
  aliases: 📞 support
CMD*/

Bot.sendKeyboard ("🏠 Menu")

var admin_chat = Bot.getProperty("admin_chat");
if(admin_chat){
  cur_user = "@" + user.username + "";
  msg = "Message from: " + cur_user + "\n\n" + message + "\n\n/Niloy645690";
  Bot.setProperty("cur_user_chat", chat.chatid, "string");
  Bot.setProperty("cur_user", cur_user, "string");
  Bot.sendMessageToChatWithId(admin_chat, msg);
Bot.sendMessage ("✅* Message was successfully Delivered.*\n\nAdmin will try to reply as soon as possible")

}else{
   Bot.sendMessage("Sorry. The Bot haven't found any Admin online ");
}
