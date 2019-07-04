/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
{title : "✅ Joined", command :"/joined"}
];


Bot.sendInlineKeyboard (buttons,"⚠️ You must Have to Join [@RaymondDOGE_Payments] in order to use this bot");



function doTouchOwnLink(){
  Bot.sendMessage("");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("");
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You just reffered a new user: @" + user.username);
}

function doAlreadyAttracted(){
  Bot.sendMessage("");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
