
import { meme } from "@/modules";

export default function meme_handler(bot) {
  bot.command('meme', async (ctx) => {
    const { postLink, subreddit, title, url} = await meme();

    ctx.replyWithPhoto(
      {
        url: url,
      },
      {
        caption: `${title}\nLink: ${postLink}\nSubreddit: ${subreddit}`
      }
    );
  });
}
