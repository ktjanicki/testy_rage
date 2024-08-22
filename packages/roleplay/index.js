//init Commands file
require('./commands.js');

//init Events file
require('./events.js');


require('./chat.js');

function drawClock() {
    const date = new Date(); 
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    const seconds = date.getSeconds().toString().padStart(2, '0'); 
    const timeString = `${hours}:${minutes}:${seconds}`; 

    return timeString;
}

mp.events.add("playerChat", (player, message) => {
    mp.players.broadcast(`[${drawClock()}] ${player.name}: ${message}`);
});