/**
 * @Author: jianglei
 * @Date:   2017-10-12 12:06:49
 */
'use strict'
import Vue from 'vue'
export default function treeToArray (
  data,
  expandAll,
  parent = null,
  level = null
) {
  let tmp = []
  Array.from(data).forEach(record => {
    if (record._expanded === undefined) {
      Vue.set(record, '_expanded', expandAll)
    }
    let _level = 1
    if (level !== undefined && level !== null) {
      _level = level + 1
    }
    Vue.set(record, '_level', _level)
    // 如果有父元素
    if (parent) {
      Vue.set(record, 'parent', parent)
    }
//  默认展开项
//         if（record.pooid==='1215'）{
//           Vue.set(record.parent._expanded, '_expanded', ture)
//           Vue.set(record.parent.parent._expanded, '_expanded', ture)
//         }
    // 根据搜索条件展开
//      if (record._level === 2) {
//       // 查询
//       if (sessionStorage.getItem('major_three')) {
//         if (JSON.parse(sessionStorage.getItem('major_three')).length >= 1) {
//           Vue.set(record, '_expanded', true)
//           console.log('展开')
//         } else {
//           Vue.set(record, '_expanded', false)
//           console.log('不展开')
//         }
//       } else if (JSON.parse(sessionStorage.getItem('resetdd')) === 'resetdd') {
//         // 重置
//         Vue.set(record, '_expanded', false)
//       }
//     }
    tmp.push(record)
    if (record.children && record.children.length > 0) {
      const children = treeToArray(record.children, expandAll, record, _level)
      tmp = tmp.concat(children)
    }
  })
  return tmp
}
