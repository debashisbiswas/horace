const config = require('../config.json');

module.exports = (client, member) => {
	let role = member.guild.roles.cache.find(role => role.id === config.roles.initiate);
	if (role != undefined) {
		member.roles.add(role);
	}
};
