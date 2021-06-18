if (window.templates == null || typeof(window.templates) != "object") {
    window.templates = {}
}

var productTemplate = {
    templates: {
        price: ``,
    },
    "styles": {
        "product": {
            "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
                "width": "calc(25% - 20px)"
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
            "font-size": "18px",
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
                "margin-left": "-20px"
            }
        }
    }
};

var modalProductCommom = {
    templates: {
        price: ``,
        imgWithCarousel: `<div class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">
        <div class="main-image-wrapper">
          <button type="button" class="carousel-button carousel-button--previous">
            Left
            <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
          </button>
            <img class="{{data.classes.product.img}} imgZoom" alt="{{data.currentImage.altText}}" src="{{data.currentImage.srcLarge}}" data-element="product.img" data-original="" />
          <button type="button" class="carousel-button carousel-button--next">
            Right
            <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
          </button>
        </div>
        <div class="{{data.classes.product.carousel}}">
          {{#data.carouselImages}}
          <a data-element="product.carouselitem" aria-label="{{altText}}" href="{{src}}" class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{carouselSrc}})"></a>
          {{/data.carouselImages}}
        </div>
      </div>`,
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
            "font-family": "Montserrat, sans-serif",
            "font-size": "12px"
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

var modalProduct = Object.assign({
    "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": false,
    }
}, modalProductCommom);

var modalProductBoutiquePhysique = Object.assign({
    "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": false,
    }
}, modalProductCommom);

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
    modalProduct: modalProduct,
    modalProductBoutiquePhysique: modalProductBoutiquePhysique,
    cart: cart,
    toggle: toggle,
    lineItem: lineItem
}