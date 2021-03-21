import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

function TweetForm({ addTweet }) {

    const [username, setUsername] = useState("");
	const handleUsernameChange = (event) => setUsername(event.target.value);

    const [content, setContent] = useState("");
    const handleContentChange = (event) => setContent(event.target.value);


	return (
		<div>
			<Input
				value={username}
				onChange={handleUsernameChange}
				placeholder="Username"
				size="sm"
				m={3}
				borderRadius="full"
			/>
			<Input
				value={content}
				onChange={handleContentChange}
				placeholder="Tweet contents"
				size="sm"
				ml={3}
				borderRadius="full"
			/>
			<Button w="100%" borderRadius="full" m={3}
            onClick={() => {
                addTweet(username, content);
                setUsername("");
                setContent("");
            }
            }
            >
				Tweet
			</Button>
		</div>
	);
}

export default TweetForm;
