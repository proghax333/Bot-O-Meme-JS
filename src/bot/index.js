
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import Configure, { Launch } from '@/bot/config';
import express from 'express';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

Configure(bot);
Launch(bot);

const app = express();

app.listen(process.env.PORT);
