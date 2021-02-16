import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function TweetForm() {
	return (
		<Box>
			<FormControl id="tweetForm">
				<FormLabel>Tweet Content</FormLabel>
				<Input></Input>
				<Button colorScheme="blue" variant="solid">
					Submit
				</Button>
			</FormControl>
		</Box>
	);
}

export default TweetForm;
