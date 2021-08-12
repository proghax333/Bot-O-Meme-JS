
import toss from '@/modules/toss';

export default function toss_handler(bot) {
  bot.command('toss', (ctx) => {
    const result = toss() + "!";
    ctx.reply(result);
  })
}
