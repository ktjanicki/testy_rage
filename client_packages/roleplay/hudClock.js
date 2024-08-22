
function drawClock() {
    const date = new Date(); 
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    const timeString = `${hours}:${minutes}`; 

    mp.game.graphics.drawText(timeString, [0.95, 0.95], {
        //font: 0, 
        color: [255, 255, 255, 255], 
        scale: [0.5, 0.5], 
        outline: true, 
        align: 2 
    });
}

mp.events.add('render', () => {
    drawClock(); 
});
