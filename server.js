const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, Discord_Channel_Id, Discord_Server_Id, Live_Link} = require('./config.json');
const ytdl = require('ytdl-core');

client.on("ready", async () => {
  client.user.setActivity("Im Radio Bot :D")
  let channel = client.channels.cache.get(Discord_Channel_Id) || await client.channels.fetch(Discord_Channel_Id)
  
  
  if (!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(Live_Link))
  })

setInterval(async function() {
  if (!client.voice.connections.get(Discord_Server_Id)) {
    let channel = client.channels.cache.get(Discord_Channel_Id) || await client.channels.fetch(Discord_Channel_Id)
  if (!channel) return;
const connection = await channel.join();
  connection.play(ytdl(Live_Link))
  }
  }, 20000)

client.login(TOKEN);