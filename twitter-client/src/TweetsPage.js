import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Tweet from "./Tweet.js";
import TweetForm from "./TweetForm.js";

function TweetsPage() {
	const [tweets, setTweets] = useState([]);
	const addTweet = (username, content) => {
		setTweets([{ username: username, content: content }, ...tweets]);
		console.log(tweets);
	};

	return (
		<Box border="solid" padding="5em">
			<TweetForm addTweet={addTweet} />
			{/* {tweets.map(({ username, content }) => {
				return <Tweet username={username} content={content} />;
			})} */}

			{tweets.map(({ username, content }) => (
				<Tweet username={username} content={content} />
			))}

			{/* <Tweet username="shahmeershahid" content="my first tweet" />
			<Tweet username="akshitgoyal" content="hello world!" /> */}
		</Box>
	);
}

export default TweetsPage;

// const tweets = [
// 	{
// 		username: "shahmeershahid",
// 		content: "my first tweet!",
// 	},
// 	{
// 		username: "shahmeershahid",
// 		content: "my first tweet!",
// 	},
// 	{
// 		username: "shahmeershahid",
// 		content: "my first tweet!",
// 	},
// 	{
// 		username: "shahmeershahid",
// 		content: "my first tweet!",
// 	}
// ];
