
import Gyazo from 'gyazo-api';
const client = new Gyazo('c3axVTb8oyqtfIEJfuYuaQA-kh29be-av1zKPlMATus');

client
  .upload('https://pbs.twimg.com/profile_images/1403565945847619587/eFwW6dQD_400x400.jpg', {
    title: 'my picture',
    desc: 'upload from nodejs',
  })
  .then((res) => {
    console.log(res.data.image_id);
    console.log(res.data.permalink_url);
  })
  .catch((err) => {
    console.error(err);
  });
