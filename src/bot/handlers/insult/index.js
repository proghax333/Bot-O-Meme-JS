
import { insult } from '@/modules';
import { getMessage } from '@lib/telegram-command';

export default function insult_handler(bot) {
  bot.command('insult', async (ctx) => {
    const name = getMessage(ctx.message.text);

    const reply = `${name}, ` + (await insult());

    ctx.reply(reply);
  });
}
