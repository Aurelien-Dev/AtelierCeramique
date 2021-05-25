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
            domain: 'dd007test.myshopify.com',
            storefrontAccessToken: '7204cdc68eb1071bed6dd89c18b95d86',
        });
        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('collection', {
                id: '268207423675',
                node: document.getElementById('productsCollection'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(33.33333% - 30px)",
                                    "margin-left": "30px",
                                    "margin-bottom": "50px",
                                    "width": "calc(33.33333% - 30px)"
                                },
                                "img": {
                                    "height": "calc(100% - 15px)",
                                    "position": "absolute",
                                    "left": "0",
                                    "right": "0",
                                    "top": "0"
                                },
                                "imgWrapper": {
                                    "padding-top": "calc(75% + 15px)",
                                    "position": "relative",
                                    "height": "0"
                                }
                            },
                            "title": {
                                "font-family": "Montserrat, sans-serif",
                                "font-size": "19px",
                                "color": "#0f3f59"
                            },
                            "button": {
                                "font-family": "Open Sans, sans-serif",
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#17a98c"
                                },
                                "background-color": "#1abc9c",
                                ":focus": {
                                    "background-color": "#17a98c"
                                },
                                "border-radius": "10px",
                                "padding-left": "28px",
                                "padding-right": "28px"
                            },
                            "price": {
                                "font-family": "Montserrat, sans-serif",
                                "font-size": "17px",
                                "color": "#0f3f59"
                            },
                            "compareAt": {
                                "font-family": "Montserrat, sans-serif",
                                "font-size": "14.45px",
                                "color": "#0f3f59"
                            },
                            "unitPrice": {
                                "font-family": "Montserrat, sans-serif",
                                "font-size": "14.45px",
                                "color": "#0f3f59"
                            }
                        },
                        "buttonDestination": "modal",
                        "contents": {
                            "options": false
                        },
                        "text": {
                            "button": "Voir le produit"
                        },
                        "googleFonts": [
                            "Montserrat",
                            "Open Sans"
                        ]
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-30px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "font-family": "Open Sans, sans-serif",
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#17a98c"
                                },
                                "background-color": "#1abc9c",
                                ":focus": {
                                    "background-color": "#17a98c"
                                },
                                "border-radius": "10px",
                                "padding-left": "28px",
                                "padding-right": "28px"
                            },
                            "title": {
                                "font-family": "Montserrat, sans-serif",
                                "font-weight": "bold",
                                "font-size": "26px",
                                "color": "#0f3f59"
                            },
                            "price": {
                                "font-family": "Montserrat, sans-serif",
                                "font-weight": "normal",
                                "font-size": "18px",
                                "color": "#0f3f59"
                            },
                            "compareAt": {
                                "font-family": "Montserrat, sans-serif",
                                "font-weight": "normal",
                                "font-size": "15.299999999999999px",
                                "color": "#0f3f59"
                            },
                            "unitPrice": {
                                "font-family": "Montserrat, sans-serif",
                                "font-weight": "normal",
                                "font-size": "15.299999999999999px",
                                "color": "#0f3f59"
                            },
                            "description": {
                                "font-family": "Montserrat, sans-serif",
                                "color": "#5b5b5b"
                            }
                        },
                        "googleFonts": [
                            "Montserrat",
                            "Open Sans"
                        ],
                        "text": {
                            "button": "Ajouter au panier"
                        }
                    },
                    "option": {},
                    "cart": {
                        "styles": {
                            "button": {
                                "font-family": "Open Sans, sans-serif",
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#17a98c"
                                },
                                "background-color": "#1abc9c",
                                ":focus": {
                                    "background-color": "#17a98c"
                                },
                                "border-radius": "10px"
                            },
                            "title": {
                                "color": "#0f3f59"
                            },
                            "header": {
                                "color": "#0f3f59"
                            },
                            "lineItems": {
                                "color": "#0f3f59"
                            },
                            "subtotalText": {
                                "color": "#0f3f59"
                            },
                            "subtotal": {
                                "color": "#0f3f59"
                            },
                            "notice": {
                                "color": "#0f3f59"
                            },
                            "currency": {
                                "color": "#0f3f59"
                            },
                            "close": {
                                "color": "#0f3f59",
                                ":hover": {
                                    "color": "#0f3f59"
                                }
                            },
                            "empty": {
                                "color": "#0f3f59"
                            },
                            "noteDescription": {
                                "color": "#0f3f59"
                            },
                            "discountText": {
                                "color": "#0f3f59"
                            },
                            "discountIcon": {
                                "fill": "#0f3f59"
                            },
                            "discountAmount": {
                                "color": "#0f3f59"
                            }
                        },
                        "text": {
                            "title": "Panier",
                            "total": "Sous-total",
                            "empty": "Vider",
                            "notice": "L'expédition et les codes de réductions sont ajoutés au paiement.",
                            "button": "Paiement"
                        },
                        "popup": false,
                        "googleFonts": [
                            "Open Sans"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "font-family": "Open Sans, sans-serif",
                                "font-weight": "bold",
                                "background-color": "#1abc9c",
                                ":hover": {
                                    "background-color": "#17a98c"
                                },
                                ":focus": {
                                    "background-color": "#17a98c"
                                }
                            }
                        },
                        "googleFonts": [
                            "Open Sans"
                        ]
                    },
                    "lineItem": {
                        "styles": {
                            "variantTitle": {
                                "color": "#0f3f59"
                            },
                            "title": {
                                "color": "#0f3f59"
                            },
                            "price": {
                                "color": "#0f3f59"
                            },
                            "fullPrice": {
                                "color": "#0f3f59"
                            },
                            "discount": {
                                "color": "#0f3f59"
                            },
                            "discountIcon": {
                                "fill": "#0f3f59"
                            },
                            "quantity": {
                                "color": "#0f3f59"
                            },
                            "quantityIncrement": {
                                "color": "#0f3f59",
                                "border-color": "#0f3f59"
                            },
                            "quantityDecrement": {
                                "color": "#0f3f59",
                                "border-color": "#0f3f59"
                            },
                            "quantityInput": {
                                "color": "#0f3f59",
                                "border-color": "#0f3f59"
                            }
                        }
                    }
                },
            });
        });
    }
})();

// (function() {
//     var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }

//     function loadScript() {
//         var script = document.createElement('script');
//         script.async = true;
//         script.src = scriptURL;
//         (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }

//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: 'dd007test.myshopify.com',
//             storefrontAccessToken: '7204cdc68eb1071bed6dd89c18b95d86',
//         });
//         ShopifyBuy.UI.onReady(client).then(function(ui) {
//             ui.createComponent('collection', {
//                 id: '268207423675',
//                 node: document.getElementById('productsCollection'),
//                 moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
//                 options: {
//                     "product": {
//                         "styles": {
//                             "product": {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px",
//                                     "width": "calc(25% - 20px)"
//                                 },
//                                 "img": {
//                                     "height": "calc(100% - 15px)",
//                                     "position": "absolute",
//                                     "left": "0",
//                                     "right": "0",
//                                     "top": "0"
//                                 },
//                                 "imgWrapper": {
//                                     "padding-top": "calc(75% + 15px)",
//                                     "position": "relative",
//                                     "height": "0"
//                                 }
//                             },
//                             "title": {
//                                 "font-size": "19px"
//                             },
//                             "button": {
//                                 ":hover": {
//                                     "background-color": "#15967d"
//                                 },
//                                 "background-color": "#1abc9c",
//                                 ":focus": {
//                                     "background-color": "#15967d"
//                                 },
//                                 "border-radius": "10px",
//                                 "padding-left": "28px",
//                                 "padding-right": "28px"
//                             },
//                             "price": {
//                                 "font-size": "17px"
//                             },
//                             "compareAt": {
//                                 "font-size": "14.45px"
//                             },
//                             "unitPrice": {
//                                 "font-size": "14.45px"
//                             }
//                         },
//                         "buttonDestination": "modal",
//                         "contents": {
//                             "options": false
//                         },
//                         "text": {
//                             "button": "Voir le produit"
//                         }
//                     },
//                     "productSet": {
//                         "styles": {
//                             "products": {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     "modalProduct": {
//                         "contents": {
//                             "img": false,
//                             "imgWithCarousel": true
//                         },
//                         "styles": {
//                             "product": {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             "button": {
//                                 ":hover": {
//                                     "background-color": "#577c43"
//                                 },
//                                 "background-color": "#618a4a",
//                                 ":focus": {
//                                     "background-color": "#577c43"
//                                 },
//                                 "border-radius": "10px",
//                                 "padding-left": "28px",
//                                 "padding-right": "28px"
//                             },
//                             "title": {
//                                 "font-family": "Helvetica Neue, sans-serif",
//                                 "font-weight": "bold",
//                                 "font-size": "26px",
//                                 "color": "#4c4c4c"
//                             },
//                             "price": {
//                                 "font-family": "Helvetica Neue, sans-serif",
//                                 "font-weight": "normal",
//                                 "font-size": "18px",
//                                 "color": "#4c4c4c"
//                             },
//                             "compareAt": {
//                                 "font-family": "Helvetica Neue, sans-serif",
//                                 "font-weight": "normal",
//                                 "font-size": "15.299999999999999px",
//                                 "color": "#4c4c4c"
//                             },
//                             "unitPrice": {
//                                 "font-family": "Helvetica Neue, sans-serif",
//                                 "font-weight": "normal",
//                                 "font-size": "15.299999999999999px",
//                                 "color": "#4c4c4c"
//                             }
//                         },
//                         "text": {
//                             "button": "Ajouter au panier"
//                         }
//                     },
//                     "option": {},
//                     "cart": {
//                         "styles": {
//                             "button": {
//                                 ":hover": {
//                                     "background-color": "#577c43"
//                                 },
//                                 "background-color": "#618a4a",
//                                 ":focus": {
//                                     "background-color": "#577c43"
//                                 },
//                                 "border-radius": "10px"
//                             }
//                         },
//                         "text": {
//                             "title": "Panier",
//                             "total": "Sous-total",
//                             "empty": "Vider",
//                             "button": "Paiement"
//                         },
//                         "popup": false
//                     },
//                     "toggle": {
//                         "styles": {
//                             "toggle": {
//                                 "background-color": "#618a4a",
//                                 ":hover": {
//                                     "background-color": "#577c43"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#577c43"
//                                 }
//                             }
//                         }
//                     }
//                 },
//             });
//         });
//     }
// })();