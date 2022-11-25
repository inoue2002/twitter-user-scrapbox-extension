import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
  const [count, setCount] = useState(0);
  const [currentURL, setCurrentURL] = useState<string>();
  const [projectName, setProjectName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  useEffect(() => {
    chrome.action.setBadgeText({ text: count.toString() });
  }, [count]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs);
      setCurrentURL(tabs[0].url);
    });
  }, []);

  // ポップアップが表示（ロード）されたら
  window.addEventListener('load', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      //chrome.windows.create({ url: tabs[0].url });
      if (tabs[0].id) {
        function getUserData() {
          let userNameElemnt;
          // ex:inoue2002
          userNameElemnt = document.querySelector(
            '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-18u37iz.r-1wbh5a2 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span'
          )?.outerHTML;
          if (!userNameElemnt) {
            userNameElemnt = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-18u37iz.r-1wbh5a2 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span'
            )?.outerHTML;
          }
          if (!userNameElemnt) {
            userNameElemnt = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span'
            )?.outerHTML;
          }
          if (!userNameElemnt) {
            userNameElemnt = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div > div > div > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span'
            )?.outerHTML;
          }
          //ex: ようかん
          let nameElement;
          nameElement = document.querySelector(
            '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-1ny4l3l > div > div > span:nth-child(1) > span'
          )?.outerHTML;
          if (!nameElement) {
            nameElement = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-1ny4l3l > div > div > span:nth-child(1) > span'
            )?.outerHTML;
          }
          if (!nameElement) {
            nameElement = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div > div > div > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span:nth-child(1) > span'
            )?.outerHTML;
          }
          let bioElement;
          bioElement = document.querySelector(
            '#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div > div > div > div > div > div > div > div:nth-child(3) > div > div > span'
          )?.outerHTML;
          if (!bioElement) {
            bioElement = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > div > span'
            )?.outerHTML;
          }
          if (!bioElement) {
            bioElement = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > div > span'
            )?.outerHTML;
          }
          let imageElemnt;
          imageElemnt = document.querySelector(
            '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a > div.css-1dbjc4n.r-14lw9ot.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div'
          )?.outerHTML;
          if (!imageElemnt) {
            imageElemnt = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a > div.css-1dbjc4n.r-14lw9ot.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div'
            )?.outerHTML;
          }
          if (!imageElemnt) {
            imageElemnt = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a > div.css-1dbjc4n.r-14lw9ot.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div'
            )?.outerHTML;
          }
          if (!imageElemnt) {
            imageElemnt = document.querySelector(
              '#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div > div > div > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a > div.css-1dbjc4n.r-14lw9ot.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div'
            )?.outerHTML;
          }
          const userName = userNameElemnt?.substring(userNameElemnt.indexOf('>') + 2, userNameElemnt.indexOf('/') - 1);
          const name = nameElement?.substring(nameElement.indexOf('>') + 1, nameElement.indexOf('/') - 1);
          const bio = bioElement?.substring(bioElement.indexOf('>') + 1, bioElement.indexOf('/') - 1);
          const imageUrl = imageElemnt?.substring(imageElemnt.indexOf(';') + 1, imageElemnt.indexOf(')') - 6);
          return { userName, name, bio, imageUrl };
        }
        const injectionResults = () =>
          new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabs[0].id as number },
                func: getUserData,
              },
              (data) => {
                resolve(data);
              }
            );
          });
        const results: any = await injectionResults();
        for (const frameResult of results as chrome.scripting.InjectionResult[]) {
          const userSettings = () =>
            new Promise((resolve) => {
              chrome.storage.sync.get(
                {
                  projectName: 'hoge',
                },
                (items) => {
                  resolve(items);
                }
              );
            });
          const userSetting = (await userSettings()) as {
            [key: string]: string;
          };
          console.log('----------------------------');
          console.log(results[0].result);
          setBio(results[0].result.bio);
          setUserName(results[0].result.userName);
          setName(results[0].result.name);
          setImageUrl(results[0].result.imageUrl);
          setProjectName(userSetting.projectName);
        }
      }
    });
  });

  const toCreatePage = () => {
    const body = encodeURI(`[${imageUrl}]\n\n${name}\n\n>${bio}\n\nhttps://twitter.com/${userName}`);
    if (projectName && imageUrl && name && bio && userName) {
      chrome.tabs.create({ url: `https://scrapbox.io/${projectName}/${userName}?body=${body}` });
    } else {
      alert(`err! \n projectName: ${projectName} \n 
    userNameElement: ${userName} \n
    imageUrl: ${imageUrl} \n
    name: ${name} \n
    bio: ${bio}`);
    }
  };

  const onInputBio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  const onInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onInputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const onInputImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  }

  return (
    <>
      <ul style={{ minWidth: '700px' }}>
        <li>https://twitter.com/username のようなページで動作します</li>
        <li>Current URL: {currentURL}</li>
        <li>Current Time: {new Date().toLocaleTimeString()}</li>
      </ul>

      <div>
        <label>ProjectName : </label>
        <input type="text" value={projectName} width={'100%'} />
      </div>

      <div>
        <label>imageUrl : </label>
        <input type="text" value={imageUrl} onInput={onInputImageUrl}/>
      </div>

      <div>
        <label>Name : </label>
        <input type="text" value={name} onInput={onInputName} />
      </div>

      <div>
        <label>UserName : </label>
        <input type="text" value={userName} onInput={onInputUserName} />
      </div>

      <div>
        <label>bio : </label>
        <input type="text" value={bio} onInput={onInputBio} />
      </div>

      <button onClick={toCreatePage}>ページを作成する</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('root')
);
