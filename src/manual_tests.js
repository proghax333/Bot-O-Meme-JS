
import { fakeword, insult, toss, means, meme, google } from '@/modules';

async function printInsult()
{
  const insult_result = await insult();
  console.log("Insult result: " + insult_result);
}

async function printToss() {
  const toss_result = toss();
  console.log("Toss result: " + toss_result);
}

async function printFakeWord() {
  const { word, definition, example, probably_exists } = await fakeword();
  const exists = probably_exists ? 'Yes' : 'No';

  console.log(`Word: ${word}\nDefinition: ${definition}\nExample: ${example}\nProbably Exists: ${exists}`)
}

async function printMeans() {
  const meaning = await means("brother");
  console.log("Means: ", meaning);
}

async function printMeme() {
  const { postLink, url, subreddit, title } = await meme();
  console.log(`Meme=>\nPost Link: ${postLink}\nURL: ${url}`);
}

async function printGoogle() {
  const { results } = await google("Jack Black");
  console.log(`Google: ${results[0].title}`);
}

async function doActions(...actions) {
  for(const action of actions) {
    const result = await action();
    console.log();
  }
}

doActions(printInsult, printToss, printFakeWord, printMeans, printMeme, printGoogle);
