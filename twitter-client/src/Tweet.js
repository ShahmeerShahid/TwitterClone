import { Box, Heading, Text, Center } from "@chakra-ui/react";

function Tweet(props) {
	const { username, content } = props;
	return (
		<div>
			<Box
				w="30em"
				minHeight="10em"
				background="lightgrey"
				margin="5px"
				border="solid"
				borderRadius="5px"
				padding="5px"
			>
				<Center>
					<Heading>{username}</Heading>
				</Center>
				<Text>{content}</Text>
			</Box>
		</div>
	);
}

export default Tweet;
