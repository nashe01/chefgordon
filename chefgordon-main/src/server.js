import pkg from 'whatsapp-web.js';
import axios from 'axios';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';
import { storage } from './storage.js';
import { stages, getStage } from './stages.js';

const axiosInstance = axios.create();


const client = new Client({
  authStrategy: new LocalAuth(),

});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('loading_screen', (percent, message) => {
  console.log('Wait your service is loading .....', percent, message);
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('Scan the QR Code Above from your Whatsapp to sync your data');
});

client.on('auth_failure', msg => {
  console.error('Your Whatsapp failed to link, Try again :(', msg);
});

client.on('ready', async () => {
  console.log('Your Whatsapp  has been linked successfully :)');
});


client.on('message', async (message) => {
  const requestingNumber = await message.getContact();

  try {
    const currentStage = getStage({ from: message.from });
    const messageResponse = await stages[currentStage].stage.exec({
      from: message.from,
      message: message.body,
      client,
    });

    if (messageResponse) {
      await client.sendMessage(message.from, messageResponse);
    }

  } catch (error) {
    console.log("error--deburg" + error);
  }
});


(async () => {
  await client.initialize();
})();


