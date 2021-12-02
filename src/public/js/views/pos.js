(function() {

    //ShopifyBuyInit();

    function ShopifyBuyInit() {
        $()
        var client = ShopifyBuy.buildClient({
            domain: 'atelier-cremazie.myshopify.com',
            storefrontAccessToken: '63e59cf0a74ad2526c15d44a004894de',
        });
        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('collection', {
                id: '268722962594',
                node: document.getElementById('productsCollectionSandrine'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": window.templates.productTemplate,
                    "productSet": window.templates.productSet,
                    "modalProduct": window.templates.modalProductBoutiquePhysique,
                    "option": {},
                    "cart": window.templates.cart,
                    "toggle": window.templates.toggle,
                    "lineItem": window.templates.lineItem
                },
            });
        });
    }

})();