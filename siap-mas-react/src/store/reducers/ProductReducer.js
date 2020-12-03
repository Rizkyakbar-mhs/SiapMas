const initState = {
    products: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
                console.log('created Product', action.product)
    }
    return state;
}

export default ProductReducer;