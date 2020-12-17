export const SignUp = (newUser) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password,
    ).then((resp)=>{
        return firestore.collection('user').doc(resp.user.uid).set({
            Nip: newUser.Nip,
            Nama: newUser.nama,
            No_hp: newUser.hp,
            Alamat: newUser.Alamat,
            Email: newUser.email,
            Password: newUser.password
        })
    }).then(()=>{
        dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch(err =>{
        dispatch({type: 'SIGNUP_ERROR', err})
    })
}
}
export default SignUp;