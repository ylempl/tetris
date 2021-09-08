import { Dispatch } from 'redux';
import {
    pimProductFetching,
    pimProductFetchingSuccess,
    pimProductFetchingError,
    drupalProductFetching,
    drupalProductFetchingSuccess,
    drupalProductFetchingError
} from '../actions/product';
import apiRoutes from '../../consts/apiRoutes';

const fetchRequest = (query: any) => (dispatch: Dispatch) => {
    dispatch(pimProductFetching());
    const checkApi = query.apiVersion === 'pimapi';
    const apiVersion = checkApi ? apiRoutes.pimApi : apiRoutes.occtooApi;
    const paramsQuery = checkApi ? query.id : new URLSearchParams(query);

    if (!checkApi) {
        paramsQuery.delete('apiVersion')
    }

    console.time(`API: ${query.apiVersion}`);
    fetch(apiVersion(paramsQuery), checkApi ? {
        method: 'GET',
        headers: {
            apiKey: 'YXNkM2E4MSotLy0vLS1gYSnFsDQ5MFZ2ODk4LldhNMWQw6k8'
        },
    } : {
        method: 'GET'
    })
        .then((res) => res.json())
        .then((res) => {
            console.timeEnd(`API: ${query.apiVersion}`);
            dispatch(pimProductFetchingSuccess(res));
        })
        .catch((err) => dispatch(pimProductFetchingError(err)));
};

const fetchDrupalProduct = (productId: any) => (dispatch: Dispatch) => {
    dispatch(drupalProductFetching());

    console.time('API: Drupal');
    fetch(apiRoutes.getDrupalProduct)
        .then((res) => res.json())
        .then((res) => {
            const filteredArr = res.reduce((acc: any, current: any) => {
                const x = acc.find((item: any) => item.field_p_inriver_id === current.field_p_inriver_id);
                if (!x) {
                    return acc.concat([current]);
                }
                return acc;
            }, []);

            const result = filteredArr.filter((obj: any) => Number(obj.field_p_inriver_id) === Number(productId));
            console.timeEnd('API: Drupal');
            dispatch(drupalProductFetchingSuccess(result));
        })
        .catch((err) => dispatch(drupalProductFetchingError(err)));
};

export const getDrupalProductThunk = (productId: any) => (dispatch: any) => {
    dispatch(fetchDrupalProduct(productId));
}

export const getProductThunk = (query: any) => (dispatch: any) => {
    dispatch(fetchRequest(query));
};
