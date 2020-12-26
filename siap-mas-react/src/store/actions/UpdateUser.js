export const UpdateUser = (User) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().updateProfile({
        email:User.email
    }
    ).then((resp)=>{
        return firestore.collection('user').doc(resp.user.uid).set({
            Nama: User.nama,
            No_hp: User.hp,
            Alamat: User.alamat,
            Email: User.email
        })
    }).then(()=>{
        dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch(err =>{
        dispatch({type: 'SIGNUP_ERROR', err})
    })
}
}
export default UpdateUser;