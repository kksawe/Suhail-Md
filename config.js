const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254797653096";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_17_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvMkxTTWEybTI3VGFaK1FQdTR3NWw1eGNRVVNSZDVkUVJod1ZNeTZadm5NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmVW9Sc2VfeVNwcVZyT3NHbG5kMER3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlNWQ1YTUwLTJiZjUtNDJiOS04ZmRlLWNkYmMxMTBiYTM5ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAxMjksXG4gICAgICAyMDgsXG4gICAgICAyNSxcbiAgICAgIDE1NCxcbiAgICAgIDExMSxcbiAgICAgIDg3LFxuICAgICAgMTk5LFxuICAgICAgMjM4LFxuICAgICAgNTQsXG4gICAgICAyMTIsXG4gICAgICAxOTAsXG4gICAgICA1OSxcbiAgICAgIDE2MyxcbiAgICAgIDE0MixcbiAgICAgIDE0NSxcbiAgICAgIDMxLFxuICAgICAgMTcyLFxuICAgICAgMTE0LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICA0NyxcbiAgICAgIDE2NSxcbiAgICAgIDEzMCxcbiAgICAgIDIwMCxcbiAgICAgIDIwMCxcbiAgICAgIDE1NCxcbiAgICAgIDEzMSxcbiAgICAgIDE3MCxcbiAgICAgIDYyLFxuICAgICAgMTk4LFxuICAgICAgMTYwLFxuICAgICAgNDAsXG4gICAgICA0NixcbiAgICAgIDExLFxuICAgICAgNDksXG4gICAgICA4LFxuICAgICAgOTIsXG4gICAgICAyNTIsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyQVBFQTJINFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk3NjUzMDk2OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTM3OTYxMjU0OTMyOTozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLemY5WjBIRU9UOG1MUUdHQnNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIks0aWFzVVo0M09aN2RDTkRJMndLK3A3QmdFZldzTkdOUzdvSExCUU5EMFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzdKRDBZTGdTd0RVZ1hMU2lCQVczc0R4SkFHanpiMTIyczF2dkRwMFZpTFdCV0xnbUl4UEFrVHE0UG5NT1BFNVROT0d0QkJqZXZNclpnTXZxUzJVQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNzN6bUlUSmdrNEsvSEphUC9nSHRZUVcvSlJacHRSUm5ZbWcwb2ZJYXRkNEkrV2xvQk5VeVBvRUVJUld6ZDBiYy9ja3UwMmJIUlBBN0xhUkNRcVN5amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk3NjUzMDk2OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDczODMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVVEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFVUQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFVi9Ya2V3YXJsbVhmSm10d2RIOExuTlM5eHJ2STBIc3BEbkRkOThMdVY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDE3OTQ3MzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Lofe Palmer",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
