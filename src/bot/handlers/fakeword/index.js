
import { fakeword } from '@/modules';

export default function fakeword_handler(bot) {
  bot.command('fake_word', async (ctx) => {
    const fake_word_data = await fakeword();

    const word = fake_word_data['word']
    const definition = fake_word_data['definition']
    const example = fake_word_data['example']
    const exists = fake_word_data['probably_exists']

    const response = "Word: " + word
      + "\nDefinition: " + definition
      + "\nExample: " + example
      + "\n\nThis word probably " + (exists ? "does exist" : "doesn't exist");
    
    ctx.reply(response);
  });
}
