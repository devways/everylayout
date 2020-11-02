import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

import StackNormal from '../routes/stack/normal'
import StackRecursive from '../routes/stack/recursive';
import StackNested from '../routes/stack/nested';

const App = () => (
	<div id="app">
		<Router>
			<Home path="/" />
			<StackNormal path="/stack/normal" />
			<StackRecursive path="/stack/recursive" />
			<StackNested path="/stack/nested" />
		</Router>
	</div>
)

export default App;