import Tweet from "./Tweet.js";
import TweetForm from "./TweetForm.js";
import { useState } from "react";

function TweetPage() {
	const [tweets, setTweets] = useState([]);
	const addTweet = (username, content) => {
		setTweets([{ username, content }, ...tweets]);
	};

	return (
		<>
			<TweetForm addTweet={addTweet} />
			{tweets.map(({ username, content }) => {
				return <Tweet username={username} content={content} />;
			})}
		</>
	);
}

export default TweetPage;
