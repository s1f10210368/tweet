const {TwitterApi} = require("twitter-api-v2");

// Twitter APIの認証情報を設定
const client = new TwitterApi({
    appkey: "mMHFe8CDHHocpaSpJ7cEFavVI",
    appSecret: "UpHX7G8EmS7xadHIQQL0aPKnR5Ts7SgZgwKHURzLmazi03wAn5",
    accessToken: "1687042801551495168-MuLRraHcarhffwuk1PVP8Zh4J2PTbb",
    accessSecret: "IYFaMYHVlkxnXSd7RURqZb6ckqpisQ2l3ehO2ZCneJnY9",
});

// ツイートする関数
async function tweet(message) {
    try {
        const rwClient = client.readwrite;
        const response = await rwClient.v1.tweet(message);
        console.log('Tweet successful:', response);
        } catch (error) {
        console.error('Error tweeting:', error);
        }
}

// ツイートを実行
const tweetMessage = 'Hello, this is a test tweet from my Twitter API bot!';
tweet(tweetMessage);
