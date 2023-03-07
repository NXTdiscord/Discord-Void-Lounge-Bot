const { PREFIX } = require('../../config.js');
module.exports = async bot => {
    console.log(`${bot.user.username} Is Now Online!`)
    let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    var activities = [ `${bot.guilds.cache.size} servers`, `${totalUsers} users!`, `sub to spy_crown` ], i = 0;
    setInterval(() => bot.user.setActivity(`${PREFIX}help | ${activities[i++ % activities.length]}`, { type: "PLAYING" }),5000)
    
};
