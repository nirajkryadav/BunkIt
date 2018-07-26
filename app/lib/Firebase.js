import * as Firebase from 'firebase'

var config ={
	apiKey: "AIzaSyCWr41KzMoXSTRjYiZJhrxKFcJkDkIdWHI",
	authDomain: "bunkit-8aea3.firebaseapp.com",
	databaseUrl: "https://bunkit-8aea3.firebaseio.com/"
}

export default Firebase.initializeApp(config)