//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURKVFNHbUQ5NjIxbmpKb1dsbnEyZVYvNE9NVVZRQ0VzcFNoTXpFZGIzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTVER3dpZDNNM3ZkTGU0OEZyeERpZ0dxOVVrN3NoNXRIaDI3SXk3VXZ5az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTDV4VGlDaDE2akRTcWpodVhndG11YVo5eEdoQ0RuMU90dnJOZjY3VFhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIUGNZUUU3YnJaelUra0hmaEdsNXZ6SC9Ia2hEc3R0c0pxdHNCcEtDM0hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QcEozVUxiL2w0S0RURmJlQWZ5UzZhV25CV3JwQU9nQVVzZVZnOHZUM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxzdklrTVhBWHNOcEovOTBHM1FMSXdheG9ROFZwWXExU3FVby9IY2c2VEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdOTTBadC9RT3FqcGRGYmcyV0kvdGVNNlVnL3cvd2N0ZFZlc21pRjBXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlhDNkhGd2xEaW1MTWZKOGpUaDhIdkFjbUt2Z1NJWmhvcktLYzdnVFhDaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZnamtvWVRCeXVpUlVBcXJ0Wm94SkNMWFA3T3Bhd0VzN1h3eDAxM25RN29OUmNQWFE0cFNUNjJUSU4wcVdVZTg4SHk3YU5wMC9TK0Z3cEhvVEpOYkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiIybU5nQ3FhWVdwazJHMHExY05tMnVma085SGszSVNYMThiWmhxR1h4Z2tnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGa3k0bXNPS1EtcW1TR0xvdXlZYXpRIiwicGhvbmVJZCI6IjA4OWY3ZDNkLWU0ZWEtNGU1ZC1iM2EwLTcxYzRkMmVlYjg1NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZnRQT2FzK01jVHRXK0QyWlhjYlFmL0g4MmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEdqZldzTjl0ZDkrT1lJR3JZSjJpUnlnc2c0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZNVEZNTVpTIiwibWUiOnsiaWQiOiI5NDcyMDQxNzU5MDoyM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI2OTc2NzQ5OTg3NDMyNzoyM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01mNmdkY0dFUHUzM01NR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNwelpIWXRXYko2N2RNZEN6UXdqa2RsNVkvWVdOZS9rZ2VjeXR6a3NIbUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxUeWJzV0dEK1lRT2tQSDBOcHpTZHVsRURqNklUU3lpMU83bDNaMG1WcFo1UWV1eklqcFdzZGNtRE5xVzFSTGNQUDVwL2pma3JpRXVNM05FdmpCTURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFZlNwMklZQTFESUVuZ1lNNUlPR3gvWW9xTm83WVZXMy96N09jQTdXdEg4ZVI3SkRCTTZSaCtvWEsyTUI5RmZ4SEtzWitGMk5vaDh4QWdvNS90RWxBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIwNDE3NTkwOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ2YzJSMkxWbXlldTNUSFFzME1JNUhaZVdQMkZqWHY1SUhuTXJjNUxCNWkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjYzNjQyNCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFSFoifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94769162583", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
