export const UpdateUser = (User) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;

    user.updateEmail(
        User.Email
    ).then((resp)=>{
        return firestore.collection('user').doc(resp.user.uid).update({
            Nama: User.nama,
            No_hp: User.hp,
            Alamat: User.alamat,
            Email: User.email
        })
    }).then(()=>{
        dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch(err =>{
        dispatch({type: 'SIGNUP_ERROR', err})
        console.log(err)
    })
}
}
export default UpdateUser;