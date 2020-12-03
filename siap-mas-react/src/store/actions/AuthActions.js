const Login = (product) => {
    return (dispatch, getState) => {
        // make async to call database
        dispatch({ type: 'CREATE_PRODUCT', product });
    }
};

export default createProduct