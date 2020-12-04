const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async to call database
        dispatch({ type: 'CREATE_PRODUCT', product });
    }
};

export default createProduct