import { Stack, Center, Box } from "@chakra-ui/react";
import { useState } from "react";
import Tweet from "./Tweet.js";
import TweetForm from "./TweetForm.js";

function TweetsPage() {
	const [tweets, setTweets] = useState([]);

	const addTweet = (username, content) => {
		setTweets([{ username, content }, ...tweets]);
		console.log(tweets);
	};

	return (
		<Stack spacing="10px" alignItems="center">
			<TweetForm addTweet={addTweet} />

			{tweets.map(({ username, content }) => (
				<Tweet username={username} content={content} />
			))}

			{/* <Tweet username="shahmeershahid" content="Hi from Shahmeer!" />
			<Tweet username="akshitgoyal" content="Hi from Akshit!" />
			<Tweet username="shahmeershahid" content="This is my 2nd tweet!" />
			<Tweet username="shahmeershahid" content="This is my 2nd tweet!" />
			<Tweet username="shahmeershahid" content="This is my 2nd tweet!" />

			<Tweet username="shahmeershahid" content="This is my 2nd tweet!" /> */}
		</Stack>
	);
}

export default TweetsPage;
