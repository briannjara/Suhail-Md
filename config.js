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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254716291728";




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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_53_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY4LFxuICAgICAgICA3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDTlBHQ3hOOXlDK2tBVFJ4KzRNTUsvSDJXTU5IQUgxdUZ4dDBsQkJyd0FvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcxNjI5MTcyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkY0RDExNURDQzgyNUVDOUYzMENBMzQ4MTE0QTlCRTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzY3MjIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzE2MjkxNzI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QUM1OUQyQkQ3NkQ2MTZEMEVFNzE0QTVCQkZGMEM2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3NjcyMjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTYyOTE3MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFFQzkyMTIyQjkyOTY0NUUyMTg1RDk2MDVFMTJDN0I1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc2NzIyM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcxNjI5MTcyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEI1MDJCNjM4RDY0NDkyRkQ1RTU5OTVEREI5RTJGNTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzY3MjIzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJTR3pJLVlkVFJ5RmtETVR5NFNHVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2FmNzNlMDgtNzFjYi00NDZlLWI3MzUtZWQ1YTU2Mjc5MmE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDk5LFxuICAgICAgMTUsXG4gICAgICAxMjMsXG4gICAgICAxMTcsXG4gICAgICAxNDEsXG4gICAgICAxMDAsXG4gICAgICAxODIsXG4gICAgICAyMzgsXG4gICAgICAxMDEsXG4gICAgICA1MCxcbiAgICAgIDI1MSxcbiAgICAgIDgsXG4gICAgICAyMDAsXG4gICAgICAyNyxcbiAgICAgIDEzMixcbiAgICAgIDcyLFxuICAgICAgMTE3LFxuICAgICAgMTQ4LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDIwOSxcbiAgICAgIDM3LFxuICAgICAgNDUsXG4gICAgICAxMDIsXG4gICAgICAyNDgsXG4gICAgICA5MyxcbiAgICAgIDExOCxcbiAgICAgIDEyOCxcbiAgICAgIDExOSxcbiAgICAgIDE4NCxcbiAgICAgIDE1NyxcbiAgICAgIDEzNixcbiAgICAgIDEsXG4gICAgICAyMixcbiAgICAgIDE0MSxcbiAgICAgIDU0LFxuICAgICAgMzgsXG4gICAgICAxMTcsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLODE0RldHWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzE2MjkxNzI2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCcmlhbiBNY2RpY2t5XCIsXG4gICAgXCJsaWRcIjogXCI4MzczMDg1NzI1MTAxMzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luSG1vTUZFUENsdzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieGFCZTVoMXdkc2h1K01Da0hZUElrNm9WMFMwam1KNmo2YmZpYURFaTZDbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuRHpKUnpIbnZQdTZWTVI5ZTM0ZmcxV0NLaHFWMFE2QytVMzYzUkhtZ3VSSVIzR1BXaEhlOC9VeFZ6dHo3KzR6RExuMyswQTVYRHhjU3JCTWZpbGpDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiZVFGZityMUlHaHUwck50SUJqWmhDdmdkV0VYRkJuY1pSY3kvNExvbWprcjhPYkh2RFdZYklQcVIyT0lsOUV3UXdpS2l6TlE2QkptRzVoOXBobnlnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTYyOTE3MjY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc2NzIyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUV4Q1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXhDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUVpJRTNvUWYxNjVUNHpUWFgra3l2RGJMK292czNCQTNzOThLbmRTeGhuVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQ4OTAzODE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3NjcyMjA3MjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Njaramba-MD",
  ownername:process.env.OWNER_NAME|| "Njaramba",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-t5brXljXIGAw4wliOyeNT3BlbkFJkVjCy96dVgZPGTJ6nyDq",
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
