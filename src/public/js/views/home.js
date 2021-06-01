(function() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'atelier-cremazie.myshopify.com',
            storefrontAccessToken: '63e59cf0a74ad2526c15d44a004894de',
        });
        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('collection', {
                id: '268554961058',
                node: document.getElementById('productsCollection'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": window.templates.productTemplate,
                    "productSet": window.templates.productSet,
                    "modalProduct": window.templates.productModal,
                    "option": {},
                    "cart": window.templates.cart,
                    "toggle": window.templates.toggle,
                    "lineItem": window.templates.lineItem
                },
            });
        });
    }
})();