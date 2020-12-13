export const resetPass = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().sendPasswordResetEmail(
            credentials.email
        ).then(() => {
            dispatch({ type: 'RESET_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'RESET_FAILED', error })
        });
    }
};



export default resetPass