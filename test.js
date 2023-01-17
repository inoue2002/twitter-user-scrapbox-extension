const a = {
    "@context": "http://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2022-01-29T16:45:55.000Z",
    "author": {
        "@type": "Person",
        "additionalName": "0xtkgshn",
        "description": "@Civichat という会社をやっていましたが、今はクリプトやってます。デジタル公共財の初期コスト負担・維持を支援するために @DeCartography という多次元アイデンティティのためのソーシャルグラフを作っています！2022年出国組🗽 English: @0xcommune）",
        "givenName": "たか",
        "homeLocation": {
            "@type": "Place",
            "name": "ハッカーの採用を募集中"
        },
        "identifier": "1487467005490114560",
        "image": {
            "@type": "ImageObject",
            "contentUrl": "https://pbs.twimg.com/profile_images/1590514483788652545/ErycCQhO_400x400.jpg",
            "thumbnailUrl": "https://pbs.twimg.com/profile_images/1590514483788652545/ErycCQhO_normal.jpg"
        },
        "interactionStatistic": [
            {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/FollowAction",
                "name": "Follows",
                "userInteractionCount": 2611
            },
            {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/SubscribeAction",
                "name": "Friends",
                "userInteractionCount": 2127
            },
            {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WriteAction",
                "name": "Tweets",
                "userInteractionCount": 7549
            }
        ],
        "url": "https://twitter.com/0xtkgshn"
    },
    "contentRating": "",
    "relatedLink": [
        "https://t.co/7SstpZbJM9",
        "https://scrapbox.io/tkgshn/"
    ]
}
console.log('@',a.author.additionalName)
console.log('description',a.author.description) 
console.log('givenName',a.author.givenName)
console.log('homeLocation',a.author.homeLocation.name)
console.log('identifier',a.author.identifier)
console.log('image',a.author.image.contentUrl)
console.log('url',a.author.url)
console.log('relatedLink',a.relatedLink)