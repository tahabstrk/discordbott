const Discord = require('discord.js');

let botid = ('754251799254532097') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Lokmacı Hizmetinizde...`)
   .addField(`» Linkler`, `[ Lokmacı ](https://discord.com/oauth2/authorize?client_id=754251799254532097&scope=bot&permissions=2105015551)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'botdavet',
  description: '',
  usage: ''
};
