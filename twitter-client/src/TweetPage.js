import Tweet from "./Tweet.js";
import TweetForm from "./TweetForm.js";
import { useState } from "react";

function TweetPage() {
    const [tweets, setTweet] = useState([]);

    const addTweet = (username, content) => {
        setTweet([ {username, content }, ...tweets]);
    }

	return (
		<div>
            <TweetForm addTweet={addTweet} />
            {tweets.map(({ username, content }) => {
                return <Tweet username={username} content={content} />;
            })}
		</div>
	);
}

export default TweetPage;
