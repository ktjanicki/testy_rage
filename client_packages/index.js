require('./roleplay');
require('./roleplay/discord');
require('./roleplay/hudClock');
require('./roleplay/chatClient');
//require('./roleplay/advanced-chat');
mp.events.call('setDiscordStatus', 'Playing on Freeroam', 'Playing as Ronald McDonald')

mp.gui.chat.show(false); //Disables default RageMP Chat
const chat = mp.browsers.new('package://roleplay/advanced-chat/index.html');
chat.markAsChat();