import { Box, Button, FormControl, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";

function TweetForm({ addTweet }) {
	const [username, setUsername] = useState("");
	const [tweetContent, setTweetContents] = useState("");

	const handleChange = (setStateFunction, e) => {
		setStateFunction(e.target.value);
	};

	const handleUsernameChange = (e) => setUsername(e.target.value);
	const handleTweetChange = (e) => setTweetContents(e.target.value);

	return (
		<Box>
			<Input
				value={username}
				placeholder="Username"
				onChange={handleUsernameChange}
			/>
			<Input
				value={tweetContent}
				placeholder="Tweet Contents"
				onChange={handleTweetChange}
			/>
			<Button
				onClick={() => {
					addTweet(username, tweetContent);
					setTweetContents("");
					setUsername("");
				}}
			>
				Submit
			</Button>
		</Box>
	);
}

export default TweetForm;
