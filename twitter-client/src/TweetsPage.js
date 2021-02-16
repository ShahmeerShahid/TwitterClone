import { Box, Center } from "@chakra-ui/react";
import Tweet from "./Tweet.js";

function TweetsPage() {
	return (
		<Box padding="5px" border="solid">
			<Center flexDirection="column">
                
				<Tweet username="shahmeershahid" content="Hi from Shahmeer!" />
				<Tweet username="akshitgoyal" content="Hi from Akshit!" />
			</Center>
		</Box>
	);
}

export default TweetsPage;
