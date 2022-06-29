const TelegramApi=require('node-telegram-bot-api')
const token ='5569246541:AAH7Ux-9xgwn5S4oryVCEr7ifEyA-9RqsJM'
const bot = new TelegramApi(token, {polling:true})
const axios =require('axios')
const nodeHtmlToImage = require('node-html-to-image')

bot.setMyCommands( [
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/command', description: 'Команды бота'},
    {command: '/search', description: 'Команды бота'}])
bot.on('message',
     async msg => {
    const text=msg.text;
    const chatId=msg.chat.id;

    if (text === '/start'){
       await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/1.webp')
        return  bot.sendMessage(chatId, 'Привет я могу показать тебе информацию о твоем любимом актере фильма или сериала')
    }
    if(text === '/command'){
        return bot.sendMessage(chatId,   'описание команд')
    }
    //return bot.sendMessage(chatId, 'я тебя не понимаю, попробуй еще раз')

         if (text === '/search'){
          await bot.sendMessage(chatId,'Имя и Фамилия актера')

         }
        })

axios.get('https://api.kinopoisk.dev/person', {params:{token:"ZZVK4EG-Q10475B-N0VN3AA-ZT4ZMBP"},search:'name',field:'surname'})
    .then(function (response) {
        // handle success

        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);

    })
    .then(function () {})



//nodeHtmlToImage({
   // output: './image.png',
    //html: '<html><body></body></html>'
//})