/*CMD
  command: /stat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 statistics
CMD*/

var msg = "";

var st = data.statistics;

msg="*Total Users*: " + st.total +
"\n\n*Active Users Today*: "+ st.active_during_last_day +
"\n*Active Users This Week*: " + st.active_during_last_week + "\n\n*Payment *: [@RaymondDOGE_Payments]\n*Chat* : @RaymondChat";



Bot.sendMessage(msg);
