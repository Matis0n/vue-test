import { createStore } from 'vuex';

export default createStore({
    state: {
        isCartOpen: false,
        cartCount: 0, // Общее количество товаров
        cartItem: [], // Массив товаров
        totalCount: 0, // Общая сумма товаров
    },

    mutations: {
        toggleCart(state) {
            state.isCartOpen = !state.isCartOpen;
        },

        closeCart(state) {
            state.isCartOpen = false;
        },

        addToCart(state, product) {
            const existingProduct = state.cartItem.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.cartItem.push({ ...product, quantity: 1 });
            }
            state.cartCount++;
            state.totalCount = state.cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
        },

        incrementQuantity(state, productId) {
            const product = state.cartItem.find(item => item.id === productId);
            if (product) {
                product.quantity++;
                state.cartCount++;
                state.totalCount += product.price;
            }
        },

        decrementQuantity(state, productId) {
            const product = state.cartItem.find(item => item.id === productId);
            if (product && product.quantity > 1) {
                product.quantity--;
                state.cartCount--;
                state.totalCount -= product.price;
            }
        },

        removeCart(state, productId) {
            const productIndex = state.cartItem.findIndex(item => item.id === productId);
            if (productIndex !== -1) {
                const product = state.cartItem[productIndex];
                state.cartCount -= product.quantity;
                state.totalCount -= product.price * product.quantity;
                state.cartItem.splice(productIndex, 1);
            }
        },
    },
});
