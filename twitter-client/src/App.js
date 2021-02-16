import { ChakraProvider } from "@chakra-ui/react";
import TweetsPage from "./TweetsPage.js";

function App() {
	return (
		<>
			<ChakraProvider>
				<TweetsPage />
			</ChakraProvider>
		</>
	);
}

export default App;
