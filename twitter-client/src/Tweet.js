import { Box, Heading } from "@chakra-ui/react";

function Tweet(props) {
	const { username, content } = props;
	return (
		<Box p={5} m={3} bg="blue.100" borderRadius="full" textAlign="center">
			<Heading>{username}</Heading>
			{content}
		</Box>
	);
}

export default Tweet;
