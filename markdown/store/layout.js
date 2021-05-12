// export default {
//   namespaced: true,
//   state: {
//     canUndo: false,
//     canRedo: false,
//     showEditor: true,
//     showNavigationBar: true,
//     showPreview: true,
//     fullscreen: false,
//     inlineImage: true
//   },
//   mutations: {
//     setCanUndo(state, value) {
//       state.canUndo = value
//     },
//     setCanRedo(state, value) {
//       state.canRedo = value
//     },
//     toggleEditor(state) {
//       if (state.showEditor && !state.showPreview) return
//       state.showEditor = !state.showEditor
//     },
//     togglePreview(state) {
//       if (!state.showEditor && state.showPreview) return
//       state.showPreview = !state.showPreview
//     },
//     toggleNavigationBar(state) {
//       state.showNavigationBar = !state.showNavigationBar
//     },
//     toggleFullscreen(state) {
//       state.fullscreen = !state.fullscreen
//     }
//   }
// }

// add by lubanproj

import moduleTemplate from './moduleTemplate'
import empty from '../data/emptyContentState'

const layout = moduleTemplate(empty, true)

// module.namespaced = true
layout.state = {
  canUndo: false,
  canRedo: false,
  showEditor: true,
  showNavigationBar: true,
  showPreview: true,
  fullscreen: false,
  inlineImage: true
}

layout.mutations = {
  setCanUndo(state, value) {
    state.canUndo = value
  },
  setCanRedo(state, value) {
    state.canRedo = value
  },
  toggleEditor(state) {
    if (state.showEditor && !state.showPreview) return
    state.showEditor = !state.showEditor
  },
  togglePreview(state) {
    if (!state.showEditor && state.showPreview) return
    state.showPreview = !state.showPreview
  },
  toggleNavigationBar(state) {
    state.showNavigationBar = !state.showNavigationBar
  },
  toggleFullscreen(state) {
    state.fullscreen = !state.fullscreen
  }
}

export default layout
