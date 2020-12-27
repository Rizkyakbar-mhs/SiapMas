export const DeleteObat = (ObatId) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
        console.log(ObatId)
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore.collection('obat').doc(ObatId.Id).delete().then(() => {
        }) .catch((err) => {
        console.log("Failed")
    })
}
}
export default DeleteObat;