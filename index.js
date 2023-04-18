require('dotenv').config();
const Telegraf = require('telegraf');
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;


const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
    return ctx.reply('Welcome to my bot');
});
bot.startPolling();