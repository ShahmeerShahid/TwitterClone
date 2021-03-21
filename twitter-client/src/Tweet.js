import { Box, Heading } from "@chakra-ui/react";

function Tweet(props) {
    const { username, content } = props;
	return <div>
        <Box m={3} p={3} borderRadius="full" bg="blue.200" 
        textAlign="center">
            <Heading>{username}</Heading>
            {content}
        </Box>
    </div>;
}

export default Tweet;
