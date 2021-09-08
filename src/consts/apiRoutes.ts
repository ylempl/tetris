// const isDev = process.env.NODE_ENV === 'development'; // useful when we want different urls in DEV mode
// const baseUrl = location.origin; // useful when we want add url to current domain
const drupalAPI = 'api/DrupalCMS';

const apiRoutes = {
    getAlbumData: 'https://jsonplaceholder.typicode.com/photos',
    pimApi: (productId: any) => `https://pimapiwebapp.azurewebsites.net/${drupalAPI}/Product/${productId}`,
    getDrupalProduct: 'https://tikkurila.com/api/test-api',
    occtooApi: (query: any) => `https://global.occtoo.com/tikkurila/cms/v1/product?${query}`
};

export default apiRoutes;
