 // 操作dom元素
 const list = document.querySelector('.list')
 const item = document.querySelectorAll('.list-item')

 // 判断当前元素
 let source_node
 // 开始拖动
 list.ondragstart = e => {
     source_node = e.target
     recode(item)
     setTimeout(() => {
         e.target.classList.add('moving')
     }, 0)
     // 设置拖动效果
     e.dataTransfer.effectAllowed = 'move'
 }
 // 拖动在有效目标
 list.ondragover = e => {
     // 防止默认情况下允许删除
     e.preventDefault()
 }
 // 拖拽放入有效目标触发
 list.ondragenter = e => {
     e.preventDefault()
     console.log(e.target.id, list)
     if (e.target === list || e.target === source_node) {
         return false
     }
     const childer = Array.from(list.children)
     const sourceIndex = childer.indexOf(source_node)
     const targetIndex = childer.indexOf(e.target)
     console.log(sourceIndex, targetIndex)
     if (sourceIndex < targetIndex) {
         // 从下往上拖动
         //  console.log(source_node,e.target.nextElementSibling)
         //  if()
         list.insertBefore(source_node, e.target.nextElementSibling)
     } else {
         // 从上往下拖动
          console.log(e.target,e.target)
         if (!e.target==null||source_node==null) {
             return
         }
             list.insertBefore(source_node, e.target)
     }
     last([e.target, source_node])
 }
 // 拖放结束
 list.ondragend = e => {
     e.target.classList.remove('moving')
 }
 // 重新计算位置
 function recode(eleAll) {
     // getBoundingClientRect 返回元素对于视口信息
     for (let i = 0; i < eleAll.length; i++) {
         const {
             top,
             left
         } = eleAll[i].getBoundingClientRect()
         eleAll[i]._top = top
         eleAll[i]._left = left
     }
 }
 // 添加移动动画效果
 function last(eleAll) {
     for (let i = 0; i < eleAll.length; i++) {
         const dom = eleAll[i]
         const {
             top,
             left
         } = dom.getBoundingClientRect()
         if (dom._left) {
             dom.style.transform = `translate3d(${dom._left-left}px,${dom._top-top}px,0px)`
             // 重绘动画
             let rafId = requestAnimationFrame(function () {
                 dom.style.transition = `transform 0.3s ease-out`
                 dom.style.transform = 'none'
             })
             dom.addEventListener('transitionend', () => {
                 dom.style.transition = 'none'
                 // 取消requestAnimationFrame调用请求
                 cancelAnimationFrame(rafId)
             })
         }
     }
 }