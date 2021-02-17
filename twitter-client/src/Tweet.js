import { Box, Heading, Text } from "@chakra-ui/react";

function Tweet(props) {
	// const username = props.username;
	// const content = props.content;

	const { username, content } = props;
	return (
		<div>
			<Box border="solid">
				<Heading>{username}</Heading>
				<Text>{content}</Text>
			</Box>
		</div>
	);
}

export default Tweet;

// def randomFunction(x, a, b, c):
//      print(x + a + b + c)

// {"username": "aosdhoashd", "content": alshdlshf}
