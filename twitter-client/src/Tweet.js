import { Box, Heading, Text, Center } from "@chakra-ui/react";

function Tweet(props) {
	const { username, content } = props;
	return (
		<div>
			<Box
				width="70vw"
				maxWidth="500px"
				minHeight="10em"
				background="lightgrey"
				border="solid"
				borderRadius="10px"
				borderWidth="2px"
				padding="10px"
				overflowWrap="anywhere"
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
