import FormData from 'form-data';

// apitoken
const GYAZO_API_KEY = 'c3axVTb8oyqtfIEJfuYuaQA-kh29be-av1zKPlMATus';

// twitterの画像urlをgyazoにアップロードする

import axios from 'axios';

async function getImageData(url) {
  // https://scrapbox.io/takker/ArrayBuffer%E3%82%92Blob%E3%81%AB%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B
  return await axios
    .get(url, {
      responseType: 'arraybuffer',
    })
    .then((response) => response.data);
}

async function main() {
  const form = new FormData();

  form.append('access_token', GYAZO_API_KEY);
  const image = await getImageData('https://pbs.twimg.com/profile_images/1403565945847619587/eFwW6dQD_400x400.jpg');
  form.append('imagedata', image, {
    filename: 'test.png',
    contentType: 'image/png',
    knownLength: image.length,
  });

  // これは成功する
  const res = await axios.post('https://upload.gyazo.com/api/upload', form, {
    headers: form.getHeaders(),
  });
  console.dir(res.statusText);
  console.log(res.data)

  var text_decoder = new TextDecoder('utf-8');
  var str = text_decoder.decode(Uint8Array.from(res.data).buffer);
//   console.log(str)
}
main();
