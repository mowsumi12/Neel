/**
* @EMON HAWLADAR
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "sumi",
  version: "1.0.0",
  permssion: 0,
  credits: "EMon-BHai",
  prefix: 'awto',
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "sim (ask) reply simsimi",
  category: "user",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`hmm darling bolo💋💋`, event.threadID, event.messageID);
const res = await axios.get(`http://fi3.bot-hosting.net:20536/sim?type=ask&ask=${query}`);
var plaintext = res.data.answer;
api.sendMessage(plaintext, event.threadID, event.messageID)
}
