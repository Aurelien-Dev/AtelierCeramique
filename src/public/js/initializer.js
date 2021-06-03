if (window.templates == null || typeof(window.templates) != "object") {
    window.templates = {}
}

var productTemplate = {
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
            "font-size": "20px",
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
            "border-radius": "8px",
            "padding-left": "30px",
            "padding-right": "30px"
        },
        "price": {
            "font-family": "Montserrat, sans-serif",
            "color": "#0f3f59"
        },
        "compareAt": {
            "font-family": "Montserrat, sans-serif",
            "color": "#0f3f59"
        },
        "unitPrice": {
            "font-family": "Montserrat, sans-serif",
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
};

var productSet = {
    "styles": {
        "products": {
            "@media (min-width: 601px)": {
                "margin-left": "-30px"
            }
        }
    }
};

var modalProduct = {
    "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true,
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
            "border-radius": "8px",
            "padding-left": "30px",
            "padding-right": "30px"
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
            "font-family": "Montserrat, sans-serif"
        }
    },
    "googleFonts": [
        "Montserrat",
        "Open Sans"
    ],
    "text": {
        "button": "Ajouter au panier"
    }
};

var cart = {
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
            "border-radius": "8px"
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
        "empty": "Le panier est vide.",
        "notice": "L'expédition et les codes de réductions sont ajoutés au paiement.",
        "button": "Paiement",
        "noteDescription": "Instructions spéciales pour le vendeur"
    },
    "contents": {
        "note": true
    },
    "popup": false,
    "googleFonts": [
        "Open Sans"
    ]
};


var toggle = {
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
};

var lineItem = {
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
};

window.templates = {
    productTemplate: productTemplate,
    productSet: productSet,
    productModal: modalProduct,
    cart: cart,
    toggle: toggle,
    lineItem: lineItem
}