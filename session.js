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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0Q1cXZhVHNaOFFCTlFsVi9sYmF2enM2M05pN3hjYlRQVzBhQzBpcEpWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWE9wdkZBcGVTMEdDeEdmbFR6MGRKa3ZoSkhRd2pBNzFlVGhvZjN2Z09DTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTXNIT256Z1hIYTIzZVlEUS92QjAyajFuZXYxTXhsRU5yN2NIUElSNzI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTeTBvaGk1dVYrWEErUGllakpudldMMTAvTUM0SEFYYk5lOTdwQTN6YkdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1HY1NiOC91N0JxclNja3NISG5TeGF3WlhnYndFZnVKVGJpRm05UFg3SFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpKN1NmakZJNkZTZmZtYTFpOXkwNG9udVhMVk1kUURUTVU3U3hVbWpIMFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtSTGFlTUFKRjJINGFrUnNNRFl2bkF4cmRwN0VhVFhQQkdLb1NkT2syOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0F6SXZmQkFsV1pxWkdsUE03UW9Cd3ptYkozRUxCVmZsM3FwNXhVT2pIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhsU2hWTTVvMzJkS1NyZlY4aFY1emd3cXZqOTYzcUpGN0lTeHdhVzg1ZStNNllZMGU3N0NrOU9Sb1Z5SDYyV1lqYkx1RlFGbGo1TE5EL1pocEUyOGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJWOHF3bTF1RHo5YUhrYlNkNHZkV0k1RnJHOXRPSnd3S3AveldlWUFEMmk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1bnFhTEsxTlRlcWZDa1BVcmJYcVhBIiwicGhvbmVJZCI6ImNmY2EwZTkyLTU3ZGItNGIzMi1hZjVlLTI4M2Q2OWU2MTAwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZkxGZTBtYWlnYStkdHlkbitPVUNZb1ZERzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUl3c0hzbS9tNGZ0bXNoMnFNSmoweGsrR3JVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNWQjlGUkwzIiwibWUiOnsiaWQiOiI5NDc2OTE2MjU4Mzo0MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvLMg77yhIO+8pCDvvKUg77y3IH4iLCJsaWQiOiIzOTUxODA0NDQ0MjY2Nzo0MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uajhCOFFtdTJNeEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldHMlpPeUswOUZMUURtV1kvc3dHRzhOSjN2OTg3Qi9tei94WU1wdDFyaFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkYvZk5jbjBidjRsMFA1TWQ2VEVuckFRTkNBSGVWSFJEeEZXcVJaMkE4VE96Qklnekcxc2Q5R1IrMnk2Y1psWHJCZWZjN1NRUTRaaS9iUHhWdmxoWENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuZCsxTDZjQUdvWFBZT2F0aHl3aVhrRXJITWtJSVY1a3FFazJkSUNraSswZ1labHVwVk1WKzdZR3RDSUJuM0ZuaEt4cWxWMFRQeTdESmpkT3lhWERqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY5MTYyNTgzOjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZodG1Uc2l0UFJTMEE1bG1QN01CaHZEU2Q3L2ZPd2Y1cy84V0RLYmRhNFUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MzQyOTY3MiwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94720417590", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
