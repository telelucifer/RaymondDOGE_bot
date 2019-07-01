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
{title : "🔄 Check 🔄", command :"/joined"}
];


Bot.sendInlineKeyboard (buttons,"✅ You must Have to Join [@RaymondDOGE_Payments] in order to use this bot")


function doTouchOwnLink(){
  Bot.sendMessage("You can't reffer yourself.");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You Have just got an Refferal: @" + user.username);
}

function doAlreadyAttracted(){
  Bot.sendMessage("You have already Joined The Bot");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
