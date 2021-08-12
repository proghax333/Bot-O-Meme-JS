
import * as handlers from '@/bot/handlers';

export default function Configure(bot) {
  // Setup handlers
  Object.values(handlers).forEach(handle => {
    handle(bot);
  })
}

export async function Launch(bot) {
  await bot.launch();
  console.log("Bot was launched!");
  
  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}
