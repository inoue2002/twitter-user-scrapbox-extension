import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// ポップアップが表示（ロード）されたら
window.addEventListener("load", () => {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tabs) {
      //chrome.windows.create({ url: tabs[0].url });
      if (tabs[0].id) {
        function getUserData() {
          let userNameElemnt;
          userNameElemnt = document.querySelector(
            "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-18u37iz.r-1wbh5a2 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span"
          )?.outerHTML;
          if (!userNameElemnt) {
            userNameElemnt = document.querySelector(
              "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-18u37iz.r-1wbh5a2 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span"
            )?.outerHTML;
          }
          let nameElement;
          nameElement = document.querySelector(
            "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-1ny4l3l > div > div > span:nth-child(1) > span"
          )?.outerHTML;
          if (!nameElement) {
            nameElement = document.querySelector(
              "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-1ny4l3l > div > div > span:nth-child(1) > span"
            )?.outerHTML;
          }
          let bioElement;
          bioElement = document.querySelector(
            "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > div > span"
          )?.outerHTML;
          if (!bioElement) {
            bioElement = document.querySelector(
              "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > div > span"
            )?.outerHTML;
          }
          let imageElemnt;
          imageElemnt = document.querySelector(
            "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a > div.css-1dbjc4n.r-14lw9ot.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div"
          )?.outerHTML;
          if (!imageElemnt) {
            imageElemnt = document.querySelector(
              "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a > div.css-1dbjc4n.r-14lw9ot.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div"
            )?.outerHTML;
          }
          const userName = userNameElemnt?.substring(
            userNameElemnt.indexOf(">") + 2,
            userNameElemnt.indexOf("/") - 1
          );
          const name = nameElement?.substring(
            nameElement.indexOf(">") + 1,
            nameElement.indexOf("/") - 1
          );
          const bio = bioElement?.substring(
            bioElement.indexOf(">") + 1,
            bioElement.indexOf("/") - 1
          );
          const imageUrl = imageElemnt?.substring(
            imageElemnt.indexOf(";") + 1,
            imageElemnt.indexOf(")") - 6
          );
          return { userName, name, bio, imageUrl };
        }
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: getUserData,
          },
          (injectionResults) => {
            for (const frameResult of injectionResults) {
              const projectName = "youkan-brain";
              console.log(frameResult);
              console.log(
                `[${frameResult.result.imageUrl}]\n\n${frameResult.result.name}\n\n>${frameResult.result.bio}\n\nhttps://twitter.com/${frameResult.result.userName}`
              );
              const body = encodeURI(
                `[${frameResult.result.imageUrl}]\n\n${frameResult.result.name}\n\n>${frameResult.result.bio}\n\nhttps://twitter.com/${frameResult.result.userName}`
              );
              const newUrl = `https://scrapbox.io/${projectName}/${frameResult.result.userName}?body=${body}`;
              console.log(newUrl);
              //chrome.tabs.create({ url: newUrl });
            }
          }
        );
      }
    }
  );
});

const Popup = () => {
  const [count, setCount] = useState(0);
  const [currentURL, setCurrentURL] = useState<string>();

  useEffect(() => {
    chrome.action.setBadgeText({ text: count.toString() });
  }, [count]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
  }, []);

  const changeBackground = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            color: "#555555",
          },
          (msg) => {
            console.log("result message:", msg);
          }
        );
      }
    });
  };

  return (
    <>
      <ul style={{ minWidth: "700px" }}>
        <li>Current URL: {currentURL}</li>
        <li>Current Time: {new Date().toLocaleTimeString()}</li>
      </ul>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "5px" }}
      >
        count up
      </button>
      <button onClick={changeBackground}>change background</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
