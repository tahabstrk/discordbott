const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const lokmacı = new Discord.RichEmbed()
  .setColor(0x7303)
      .addField('https://www.twitch.tv/lokmaciorhun')
      .addField('https://www.youtube.com/user/Themausecom')
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(lokmacı);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'lokmacı', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'lokmacı',
    description: 'lokmacı',
    usage: 'lokmacı'
  };
