export const getUser = (userId) = (dispatch) => {
    const firebase = getFirebase();
    
    const user = firebase.auth().currentUser;

	const dataUser = firebase.database().ref('user/' + user.uid);
		dataUser.on('value', (snapshot) =>{
			console.log(snapshot.val())
		});
}

export default getUser

