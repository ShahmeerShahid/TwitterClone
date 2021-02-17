import { Input, Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function TweetForm(props) {
	const { addTweet } = props;
	const [username, setUsername] = useState("");
	const [content, setContent] = useState("");

	const handleUsernameChange = (e) => setUsername(e.target.value);
	const handleContentChange = (e) => setContent(e.target.value);

	return (
		<Box>
			<Input
				value={username}
				placeholder="Username"
				onChange={handleUsernameChange}
			/>
			<Input
				value={content}
				placeholder="Content"
				onChange={handleContentChange}
			/>
			<Button
				colorScheme="blue"
				onClick={() => {
					addTweet(username, content);
					console.log(username, content);
					setUsername("");
					setContent("");
				}}
			>
				Submit
			</Button>
		</Box>
	);
}

export default TweetForm;
