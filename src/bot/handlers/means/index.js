
import { means } from '@/modules';
import { getMessage } from '@lib/telegram-command';

export default function means_handler(bot) {
  bot.command('means', async (ctx) => {
    const word = getMessage(ctx.message.text);
    
    if(word === '') {
      ctx.reply("No word given");
      return;
    }
    const result = (await means(word));

    if(!result) {
      ctx.reply(`Meaning for ${word} not found!`);
      return;
    }

    const { meanings } = result;

    // Get definitions
    const definitions = meanings.reduce((final, meaning) => {
      const { partOfSpeech, definitions } = meaning;
      const meaningString = definitions.reduce((result, { definition }, index) => {
        return result + (index + 1) + ". " + definition + '\n';
      }, '');

      return final + `${partOfSpeech}:\n` + meaningString + '\n';
    }, '');

    const reply = `The term ${word} means:\n\n${definitions}`;

    ctx.reply(reply);
  });
}
