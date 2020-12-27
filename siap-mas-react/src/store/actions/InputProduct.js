const InputProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async to call database
        const firestore = getFirestore();
        firestore.collection('obat').add({
            ...product,
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'InputProduct', product });
        }).catch((err) => {
            dispatch({ type: 'ErrorProduct', err});
            <Redirect to="/obat" />
        })
    }
};

export default InputProduct