export const UpdateUser = (User) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;

    user.updateEmail(
        User.Email
    ).then(()=>{
        return firestore.collection('user').doc(User.uid).update({
            Nama: User.Nama,
            No_hp: User.No_hp,
            Alamat: User.Alamat,
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