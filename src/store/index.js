import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            newList: [],
            activeIndex: '1'
        }
    },

    mutations: {
        changeActive(state, index) {
            state.activeIndex = index;
        },
        updateNews(state, newsList) {
            state.newsList = newsList;
        }
    }
});

export default store;
