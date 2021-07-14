//this is not the full code, just the command and some extra code
//we here at Soft Drinks & Software refuse to use semicolons in javascript unless necessary

// require the discord.js module
const Discord = require("discord.js")
const token = process.env.TOKEN

const client = new Discord.Client()

let prefix = "sb!"

let eReason
let eTitle
let eColor
let eMoji

client.on("message", message => {
  function redyer(eReason, eTitle, eColor, eMoji) {
  dynamicError = new Discord.MessageEmbed()
  .setColor(eColor)
  .setTitle(eTitle)
  .setDescription(eMoji + " " + eReason);
  message.channel.send(dynamicError)
  } 
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(" ");
  //REDYER stands for REfresh DYnamic ERror
  if (command == "execredyer") {
      if (args.length != 4) {
        redyer("That's not enough arguements. You need `reason` `title` `color` `emoji`")
      } else {
        let argcero = args[0]
        let arguno = args[1]
        let argdos = args[2]
        let argtres = args[3]
        //cool funny spanish names huh?
        redyer(argcero.replace(/_/g, " "), arguno.replace(/_/g, " "), argdos, argtres)
        message.channel.send("```js\nredyer(\"" + argcero.replace(/_/g, " ") + "\", \"" + arguno.replace(/_/g, " ") + "\", \"" + argdos + "\", \"" + argtres + "\");\n```")
        //this not only sends the embed, but it also shows you all of what goes into the function.
      }
    }
})

client.login(token)
