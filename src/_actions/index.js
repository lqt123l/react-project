import Axios from 'axios';
import { getToken } from './../_helpers/token';

const localHost5001 = 'http://localhost:5001';
const heroKuServer = 'https://thawing-inlet-79899.herokuapp.com';
const currentServer = heroKuServer;

export const searchInput = (content) => ({
    type: 'SEARCH_INPUT',
    content
})

export const showLoginForm = () => ({
    type: 'SHOW_LOGIN_FORM'
})

export const disableLoginForm = () => ({
    type: 'DISABLE_LOGIN_FORM'
})

export const showRegisterForm = () => ({
    type: 'SHOW_REGISTER_FORM'
})
export const disableRegisterForm = () => ({
    type: 'DISABLE_REGISTER_FORM'
})
export const showStoreRegForm = () => ({
    type: 'SHOW_STORE_REG_FORM'
})
export const disableStoreRegForm = () => ({
    type: 'DISABLE_STORE_REG_FORM'
})
export const logout = () => (dispatch) => {
    localStorage.removeItem('user');
    dispatch({
        type: 'LOGOUT'
    })
}

export const fetchProducts = (filter) => (dispatch, getState) => {

    dispatch({
        type: 'FETCH_PRODUCTS_REQUEST',
        filter
    });

    dispatch({
        type: 'ADD_SEARCH_MEMORY',
        item: getState().searchProducts
    })

    const searchProducts = getState().searchProducts.split(" ").join("-").toLowerCase();

    return Axios.get(`${currentServer}/product/${searchProducts}`)
        .then(
            response => {
                dispatch({
                    type: 'RECEIVE_PRODUCTS',
                    filter,
                    payload: response.data
                })
            },
            error => {
                dispatch({
                    type: 'RECEIVE_PRODUCTS_FALURE',
                    message: error.message || 'Cannot find relenvant product'
                })
            }
        )
}

export const fetchStores = () => (dispatch, getState) => {
    return Axios({
        method: "get",
        url: `${currentServer}/store`,
        headers: {
            "x-auth-token": getToken()
        }
    })
        .then(
            response => {
                dispatch({
                    type: 'FETCH_STORES_SUCCESS',
                    payload: response.data
                })
            }
        )
}

// export const sendProduct = (value) => (dispatch, getState) => {
//     console.log('AAAAAAAAAAAAA');
//     return Axios.post('http://localhost:5001/store', {
//         productName: value.productName,
//         productBrand: value.productBrand,
//         productStore: value.storeId,
//         regularPrice: value.regularPrice,
//         discountPrice: value.discountPrice,
//         weight: value.weight
//     })
//         .then(
//             response => {
//                 dispatch({
//                     type: 'ADD_PRODUCT_TO_SERVER_SUCCESS',
//                     response
//                 })
//             },
//             error => {
//                 dispatch({
//                     type: 'ADD_PRODUCT_TO_SERVER_FALURE',
//                     message: error.message || 'Cannot find relenvant product'
//                 })
//             }
//         )
// }

export const adminSendProduct = (value) => {
    return Axios({
        method: "post",
        url: `${currentServer}/product`,
        data: {
            productName: value.productName,
            productBrand: value.productBrand,
            storeId: value.productStore,
            regularPrice: value.regularPrice,
            discountPrice: value.discountPrice,
            weight: value.weight
        },
        headers: {
            "x-auth-token": getToken()
        }
    })
}
export const userSendProduct = (product) => (dispatch) => {
    console.log('Action run!');
    return Axios({
        method: "post",
        url: `${currentServer}/product/userproduct`,
        data: {
            productName: product.productName,
            productBrand: product.productBrand,
            regularPrice: product.regularPrice,
            discountPrice: product.discountPrice,
            weight: product.weight
        },
        headers: {
            "x-auth-token": getToken()
        }
    }).then((res)=>console.log(res))
    .catch((error)=>console.log(error))
}




export const getUserInformation = () => (dispatch) => {
    return Axios({
        method: "get",
        url: `${currentServer}/user`,
        headers: {
            "x-auth-token": getToken()
        }
    })
        .then(
            (res) => {
                dispatch({
                    type: 'GET_USER_INFORMATION_SUCCESS',
                    payload: res.data
                });
            })
        .catch((error) => {
            if (error.response.status !== 200) {
                console.log('Cannot get user information, please login')
            }
            dispatch({
                type: "GET_USER_INFORMATION_FAIL",
                payload: error
            })
        })
}

export const register = (user) => (dispatch) => {
    return Axios.post(`${currentServer}/user`, {
        username: user.username,
        password: user.password,
        email: user.email,
        phone: user.phone
    })
        .then(
            (res) => {
                localStorage.setItem('user', res.headers['x-auth-token']);
                dispatch({
                    type: 'REGISTER_SUCCESS'
                });
                dispatch(disableRegisterForm());
                dispatch({
                    type: 'LOGIN_SUCCESS'
                })
                dispatch(disableLoginForm());
                dispatch(getUserInformation())
            })
        .catch(err => {
            console.log(err);
            dispatch({
                type: 'REGISTER_FAIL',
                payload: err.response.data
            })
        })
}

export const login = (user) => (dispatch) => {
    return Axios.post(`${currentServer}/auth`, {
        username: user.username,
        password: user.password
    })
        .then(
            (res) => {
                localStorage.setItem('user', res.data);
                dispatch({
                    type: 'LOGIN_SUCCESS'
                });
                dispatch(disableLoginForm());
                dispatch(getUserInformation())
            })
}

export const saveProduct = (productId) => (dispatch) => {
    dispatch({
        type: "SAVE_PRODUCT_REQUEST"
    })
    return Axios({
        method: "put",
        url: `${currentServer}/user`,
        data: { productId },
        headers: {
            "x-auth-token": getToken()
        }
    })
        .then((res) => {
            dispatch({
                type: "SAVE_PRODUCT_SUCCESS",
                payload: res.data
            })
        })
        .catch((error) => {
            dispatch({
                type: "SAVE_PRODUCT_FAIL"
            })
        })
}

export const deleteSave = (productId) => (dispatch) => {
    dispatch({
        type: "DELETE_SAVE_REQUEST"
    })
    return Axios({
        method: "delete",
        url: `${currentServer}/user`,
        data: { productId },
        headers: {
            "x-auth-token": getToken()
        }
    })
        .then((res) => {
            dispatch({
                type: "DELETE_SAVE_PRODUCT_SUCCESS",
                payload: res.data
            })
        })
        .catch((error) => {
            dispatch({
                type: "DELETE_SAVE_PRODUCT_FAIL"
            })
        })
}

export const registerStore = (store) => (dispatch) => {
    console.log('Store:', store);
    return Axios({
        method: "post",
        url: `${currentServer}/store`,
        data: {
            storeName: store.storeName,
            address: store.address,
            city: store.city,
            state: store.state,
            postcode: store.postcode,
            phone: store.phone,
            wechat: store.wechat,
            tradeState: store.tradeState
        },
        headers: {
            "x-auth-token": getToken()
        }
    })
        .then(
            (res) => {
                dispatch(disableStoreRegForm());
                dispatch({
                    type: "GET_USER_INFORMATION_SUCCESS",
                    payload: res.data
                })
            })
        .catch(err => {
            console.log(err);
            dispatch({
                type: 'STORE_REG_FAIL',
                payload: err.response.data
            })
        })
}

export const getStoreInfo = () => (dispatch) => {
    return Axios({
        method: "get",
        url: `${currentServer}/user/store`,
        headers: {
            "x-auth-token": getToken()
        }
    })
        .then(
            (res) => {
                console.log(res.data);
                if (res.data.hasOwnProperty('sellerStore')) {
                    dispatch({
                        type: "GET_STORE_INFO_SUCCESS",
                        payload: res.data.sellerStore
                    })
                    dispatch(disableStoreRegForm())
                }
                else {
                    dispatch(showStoreRegForm())
                }
            })
        .catch(err => {
            dispatch({
                type: 'GET_STORE_INFO_FAIL',
                payload: err.response.data
            })
            dispatch(showStoreRegForm())
        })
}