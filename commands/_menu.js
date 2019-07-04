/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 🏠 Menu
  aliases: 🏠 menu
CMD*/

var balance = User.getProperty("balance"); // or your code here
let bal = Libs.ResourcesLib.userRes("balance");
let x =User.setProperty("hi",bal.value().toFixed(2),"String")
let hi =User.getProperty("hi")


Bot.sendKeyboard ("💰 Balance (" +hi+" DOGE) ,\n📥 Deposit,🚹 Refferal,📤 Withdraw,\n📞 Support,ℹ️ FAQ,\n📊 Statistics","🔥 Welcome to *RaymondDOGE Bot*!\n\nWe recieve your Investment,Trade Them & Share Profits. Very Simple\n\nPress 📥 *Deposit* and Start Earning\nPress 📤 *Withdraw* to withdraw\nPress 💰 *Balance* To Your Balance\n\nPayment : [@RaymondDOGE_Payments]\nSupport Chat : @RaymondChat");
