const serverName = 'Serwer testowy';  // Statyczna nazwa serwera
const playerName = 'Franz Gross'; // Statyczna nazwa gracza

mp.events.add('setDiscordStatus', () => {
    const status = `${playerName} gra na ${serverName}`;  // Tworzymy status z nazwą gracza i serwera
    mp.discord.update(serverName, status);  // Aktualizujemy status w Discordzie
});

mp.events.add('playerJoin', () => {
    mp.events.call('setDiscordStatus');
});

