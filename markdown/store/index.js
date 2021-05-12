// import { createStore } from 'vuex';
// import contentState from './contentState'
// import content from './content'
// import file from './file'
// import layout from './layout'
//
// const store = createStore({
//   modules: {
//     contentState,
//     content,
//     file,
//     layout
//   },
//   state: {
//     url: '',
//     scrollSync: true
//   },
//   mutations: {
//     setUrl(state, url) {
//       state.url = url
//     },
//     toggleScrollSync(state) {
//       state.scrollSync = !state.scrollSync
//     }
//   }
// })

// export default store

import { createStore } from 'vuex';

// add by lubanproj, add markdown

import contentState from '../../markdown/store/contentState'
import content from '../../markdown/store/content'
import file from '../../markdown/store/file'
import layout from '../../markdown/store/layout'

const store = createStore({
    modules: {
        contentState,
        content,
        file,
        layout
    },
    state: {
        activeIndex: '1',
        // add markdown
        url: '',
        scrollSync: true,
    },
    mutations: {
        changeActive(state, index) {
            state.activeIndex = index;
        },

        // add markdown
        setUrl(state, url) {
            state.url = url
        },
        toggleScrollSync(state) {
            state.scrollSync = !state.scrollSync
        },
    }
})

export default store;

