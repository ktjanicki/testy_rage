


const SpawnPoints = [
        { "x": -425.517, "y": 1123.620, "z": 330.000 },
        { "x": -415.777, "y": 1168.791, "z": 325.854 },
        { "x": -432.534, "y": 1157.461, "z": 325.854 },
        { "x": -401.850, "y": 1149.482, "z": 325.854 }
    ]

mp.events.addCommand('pozycja', (player) => {
    player.outputChatBox('pozycja: ' + player.position);
});

mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('move', (player) => {
    if (SpawnPoints.length > 0) {
        let spawnPoint = SpawnPoints[0]; 
        player.position = new mp.Vector3(spawnPoint.x, spawnPoint.y, spawnPoint.z); 

        player.outputChatBox(`Zostałeś przeniesiony`);
    } 
});