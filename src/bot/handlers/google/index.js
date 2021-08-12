
import { google } from '@/modules';
import { getMessage } from '@lib/telegram-command';

export default function google_handler(bot) {
  bot.command('google', async (ctx) => {
    const query = getMessage(ctx.message.text);
    if(query === '') {
      ctx.reply("No search term given");
      return;
    }

    const { results } = await google(query, 10);

    let reply = 'Google results for ' + query;
    reply += results.reduce((acc, result, index) => {
      return acc +
`\n
${index + 1}. ${result["title"]}
Link: ${result["link"]}`;
    }, '');

    ctx.reply(reply);
  })
}
