const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
    config: {
        name: "lizard",
        noalias: [''],
        category: "anime",
        description: "Shows random lizard image",
        usage: "",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

  let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
  const { body } = await superagent
    .get("https://nekos.life/api/v2/img/lizard");
        const embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle("Here's your LIZARD 🤗")
        .setImage(body.url)
        .setTimestamp()
        .setFooter('© void lounge bot');
         message.channel.send(embed);
    }
}
