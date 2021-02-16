import { Stack, Center, Box } from "@chakra-ui/react";
import Tweet from "./Tweet.js";
import TweetForm from "./TweetForm.js";

function TweetsPage() {
	return (
		<Stack spacing="10px" alignItems="center">
			<TweetForm />
			<Tweet username="shahmeershahid" content="Hi from Shahmeer!" />
			<Tweet username="akshitgoyal" content="Hi from Akshit!" />
			<Tweet username="shahmeershahid" content="This is my 2nd tweet!" />
			<Tweet username="shahmeershahid" content="This is my 2nd tweet!" />
			<Tweet username="shahmeershahid" content="This is my 2nd tweet!" />

			<Tweet username="shahmeershahid" content="This is my 2nd tweet!" />
		</Stack>
	);
}

export default TweetsPage;
