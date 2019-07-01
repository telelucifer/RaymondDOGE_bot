/*CMD
  command: /Niloy645690
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input reply for <cur_user>
  keyboard: 
  aliases: 
CMD*/

cur_user_chat = Bot.getProperty("cur_user_chat");
msg = "⚠️ You Have got a Reply from Admin: " + "\n\n" + data.message + "";
Bot.sendMessageToChatWithId(cur_user_chat, msg);
