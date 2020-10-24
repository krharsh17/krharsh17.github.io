let firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DB_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

let firebaseInstance
const getFirebase = (firebase) => {
	if (firebaseInstance) return firebaseInstance

	firebase.initializeApp(firebaseConfig)
	firebaseInstance = firebase

	return firebase
}

export const initFirebase = async () => {
	if (typeof window === "undefined") return {}

	let firebase

	const app = import("firebase/app")
	const analytics = import("firebase/analytics")

	const values = await Promise.all([app, analytics])
	firebase = getFirebase(values[0])

	return await firebase
}