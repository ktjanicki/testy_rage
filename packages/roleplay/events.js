let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 80;
});


mp.events.add('playerJoin', (player) => {
    player.outputChatBox('!{red} Welcome to the server! ' + player.position);
});

