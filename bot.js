const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'emilianobeloqui1213.aternos.me', // IP de tu servidor Aternos
  port: 25565,                    // Puerto por defecto de Aternos
  username: 'Taki_Beyz',         // Nombre del bot
  version: '1.21.4'              // Versión exacta del servidor
});

bot.on('spawn', () => {
  console.log('✅ El bot Taki_Beyz se conectó al servidor!');
  bot.chat('Estoy AFK para que el server no se apague 😎');
});

bot.on('end', () => {
  console.log('❌ El bot se desconectó. Reconectando en 5 segundos...');
  setTimeout(() => {
    process.exit(1); // Replit lo reinicia automáticamente
  }, 5000);
});

bot.on('error', err => {
  console.log('❌ Error:', err);
});
