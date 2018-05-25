import { Provider } from 'react-redux'; 
import store from './Store';
import CustomTextInput from './Components/CustomTextInput';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<Root />
			</Provider>
		);
	}
}

export default App;