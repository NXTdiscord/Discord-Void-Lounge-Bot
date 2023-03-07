const Discord = require("discord.js");
const ownerid = ["725260858028195892"];
const ownerid2 = ["725260858028195892"];
const { MessageEmbed } = require('discord.js');

module.exports = {
  config: {
    name: "join",
    aliases: ["join"],
    category: "owner",
    description: "Only owners loiek me xd",
    usage: " ",
    accessableby: "Owner"
  },
  run: async (client, message, args) => {
    if (message.author.id == ownerid || ownerid2) {
      const embed = new MessageEmbed()
      .setTitle('JOIN VOID LOUNGE NOW')
      .addField(
        'Links', 
        '**Inivite Me https://discord.com/api/oauth2/authorize?client_id=921979130973683742&permissions=8&scope=bot - join Void Lounge https://discord.gg/z9MHFydR5F**'   
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
    }
  }
};
