import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

function TweetForm({ addTweet }) {
	const [title, setTitle] = useState("");
	const handleTitleChange = (e) => setTitle(e.target.value);

	const [tweettext, setTweet] = useState("");
	const handleTweetChange = (e) => setTweet(e.target.value);

	return (
		<>
			<Input
				value={title}
				onChange={handleTitleChange}
				placeholder="Username"
				size="md"
				m={3}
			/>
			<Input
				value={tweettext}
				onChange={handleTweetChange}
				placeholder="Content"
				size="md"
				ml={3}
			/>
			<Button
				w="100%"
				m={3}
				borderRadius="full"
				onClick={() => {
					addTweet(title, tweettext);
					setTitle("");
					setTweet("");
				}}
			>
				Tweet
			</Button>
		</>
	);
}

export default TweetForm;
