import store from '../../store'
import animationSvc from '../animationSvc'
import editorSvc from '../editorSvc'

let editorScrollerElt, previewScrollerElt
let editorFinishTimeoutId, previewFinishTimeoutId
let isScrollEditor, isScrollPreview, isEditorMoving, isPreviewMoving, sectionDescList
let throttleTimeoutId, throttleLastTime = 0

function throttle(func, wait) {
  clearTimeout(throttleTimeoutId)
  const currentTime = Date.now()
  const localWait = (wait + throttleLastTime) - currentTime
  if (localWait < 1) {
    throttleLastTime = currentTime
    func()
  } else {
    throttleTimeoutId = setTimeout(() => {
      throttleLastTime = Date.now()
      func()
    }, localWait)
  }
}

const doScrollSync = () => {
  const localSkipAnimation = false
  if (!store.state.scrollSync || !sectionDescList || sectionDescList.length === 0) return

  let editorScrollTop = editorScrollerElt.scrollTop
  if (editorScrollTop < 0) editorScrollTop = 0

  const previewScrollTop = previewScrollerElt.scrollTop
  let scrollTo
  if (isScrollEditor) {
    // Scroll the preview
    isScrollEditor = false
    sectionDescList.some((sectionDesc) => {
      if (editorScrollTop > sectionDesc.editorDimension.endOffset) return false

      const posInSection = (editorScrollTop - sectionDesc.editorDimension.startOffset)
        / (sectionDesc.editorDimension.height || 1);
      scrollTo = (sectionDesc.previewDimension.startOffset
        + (sectionDesc.previewDimension.height * posInSection));
      return true
    });
    scrollTo = Math.min(
      scrollTo,
      previewScrollerElt.scrollHeight - previewScrollerElt.offsetHeight,
    )

    throttle(() => {
      clearTimeout(previewFinishTimeoutId);
      animationSvc.animate(previewScrollerElt)
        .scrollTop(scrollTo)
        .duration(!localSkipAnimation && 100)
        .start(() => {
          previewFinishTimeoutId = setTimeout(() => {
            isPreviewMoving = false;
          }, 100);
        }, () => {
          isPreviewMoving = true;
        });
    }, localSkipAnimation ? 500 : 50);
  } else if (!store.state.showEditor || isScrollPreview) {
    // Scroll the editor
    isScrollPreview = false;
    sectionDescList.some((sectionDesc) => {
      if (previewScrollTop > sectionDesc.previewDimension.endOffset) {
        return false;
      }
      const posInSection = (previewScrollTop - sectionDesc.previewDimension.startOffset)
        / (sectionDesc.previewDimension.height || 1);
      scrollTo = (sectionDesc.editorDimension.startOffset
        + (sectionDesc.editorDimension.height * posInSection));
      return true;
    });
    scrollTo = Math.min(
      scrollTo,
      editorScrollerElt.scrollHeight - editorScrollerElt.offsetHeight,
    );

    throttle(() => {
      clearTimeout(editorFinishTimeoutId);
      animationSvc.animate(editorScrollerElt)
        .scrollTop(scrollTo)
        .duration(!localSkipAnimation && 100)
        .start(() => {
          editorFinishTimeoutId = setTimeout(() => {
            isEditorMoving = false;
          }, 100);
        }, () => {
          isEditorMoving = true;
        });
    }, localSkipAnimation ? 500 : 50);
  }
};

let isPreviewRefreshing, timeoutId

const forceScrollSync = () => {
  if (!isPreviewRefreshing) doScrollSync()
}

store.watch(() => store.state.scrollSync, forceScrollSync);

editorSvc.on('inited', () => {
  editorScrollerElt = editorSvc.editorElt.parentNode
  previewScrollerElt = editorSvc.previewElt.parentNode

  editorScrollerElt.addEventListener('scroll', () => {
    if (isEditorMoving) return

    isScrollEditor = true
    isScrollPreview = false
    doScrollSync()
  })

  previewScrollerElt.addEventListener('scroll', () => {
    if (isPreviewMoving || isPreviewRefreshing) return

    isScrollPreview = true
    isScrollEditor = false
    doScrollSync()
  })
})

editorSvc.on('sectionList', () => {
  clearTimeout(timeoutId)
  isPreviewRefreshing = true
  sectionDescList = undefined
})

editorSvc.on('previewText', () => {
  // Assume the user is writing in the editor
  isScrollEditor = store.state.showEditor;
  // A preview scrolling event can occur if height is smaller
  timeoutId = setTimeout(() => {
    isPreviewRefreshing = false
  }, 100);
})

store.watch(() => store.state.showEditor, showEditor => {
  isScrollEditor = showEditor
  isScrollPreview = !showEditor
})

editorSvc.on('sectionDescMeasuredList', sectionDescMeasuredList => {
  sectionDescList = sectionDescMeasuredList
  forceScrollSync()
})
