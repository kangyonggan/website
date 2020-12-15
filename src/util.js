let util = {}

/**
 * 设置浏览器标题
 *
 * @param title
 */
util.title = function (title) {
    title = title ? title + ' - 和君纵达': '和君纵达'
    window.document.title = title
}

export default util