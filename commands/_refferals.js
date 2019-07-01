/*CMD
  command: /refferals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 🚹 Refferal
  aliases: 🚹 refferal
CMD*/

let reffer=Libs.ReferralLib.currentUser.getRefLink("RaymondDOGE_bot");

let option = {disable_web_page_preview :true};

Bot.sendKeyboard("📊 My Refferals,🏠 Menu","Here is your unique *Refferal Link*:\n\n[" +reffer+"]\n\nYou will get *20*% of your reffers Deposit",option);
