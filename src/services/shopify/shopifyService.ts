import client from './shopifyClient'

export default class ShopifyUtils {

    GetProducts() {
        const query = {
            query: 'updated_at:>="2016-09-25T21:31:33"',
            sortBy: 'title'
        };

        client.product.fetchQuery(query).then((products) => {
            console.log(products)
            return products;
        });
    }
}
