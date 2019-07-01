/*CMD
  command: /myref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 📊 My Refferals
  aliases: 📊 my refferals
CMD*/

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Here are your last 10 Reffered People :  " + refList.length + "\n〰〰";
  for(i in refList){
    user = refList[i];
    msg+= "\n🚹" +  user.first_name + "( @" + user.username + ")";
  }
}else{
  msg = "You don't have any refferals yet";
}
Bot.sendMessage(msg);
