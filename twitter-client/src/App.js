import { ChakraProvider } from "@chakra-ui/react";
import TweetPage from "./TweetPage.js";

function App() {
	return <ChakraProvider>
		<TweetPage />
	</ChakraProvider>;
}

export default App;
