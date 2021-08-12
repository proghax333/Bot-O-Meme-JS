
export default function start_handler(bot)  {
  bot.command('start', (ctx) => {
    ctx.reply(
`Hi! welcome to Meme-O-Bot-JS :)
Converted to JavaScript by Atmanand <3

These are the available commands -

/start - Shows this message
/meme - Shows a meme.
/toss - Tosses a coin.
/means <word> - Gets you the definitions.
/google <query string> - Gets you the top 10 google search results.
/fake_word - It will show you a fake word with detailed info which looks real.
/insult <tag> - insults the tagged user.`);
  });
}
