const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const bot_token = config.BOT_TOKEN;
const prefix = config.PREFIX;
const user_id = config.USER_ID;

const reply = new Discord.MessageEmbed()
	.setTitle("Recettes Joaillerie Yigg")
	.addField("<:red_gem:853575270548242443> Rouge", "+Agi\n+Force\n\n+Spell Power\n\n+Heal Power", true)
	.addField("<:orange_gem:853575339690426369> Orange", "+Agi +Hit\n+Force +Crit\n+Attack Power +Crit\n+Spell Power +Hit\n+Spell Power +Crit\n+Heal Power +Int", true)
	.addField("<:yellow_gem:853575154554241024> Jaune", "+Hit\n+Crit\n\n+Spell Hit\n+Spell Crit\n\n+Resi", true)
	.addField("<:green_gem:853575388685271040> Vert", "+Resi +Endu\n+Def +Endu\n+Crit +Endu\n+Spell Crit +Spell Pene\n+Int +MP5", true)
	.addField("<:blue_gem:853575366081904650> Bleu", "+Endu\n\n\n+Spell Pene", true)
	.addField("<:violet_gem:853575310330429470> Violet", "+Endu +Agi\n+Endu +Force\n+Endu +Spell Power\n\n+Heal Power +MP5\n+Heal Power +Esprit", true)
	.addField("<:skyfire_gem:853576857903300638> Métagemme", "Toutes les métas !", true);

client.login(bot_token);

client.on("message", (message) => {

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const body = message.content.slice(prefix.length);
	const args = body.split(' ');
	
	if (args.shift().toLowerCase() == "joa") {
		if (args.length == 0) {
			message.channel.send(reply);
		}
	}
});
