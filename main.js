/** BEGIN NAV ITEM 2 */
const navItemList2 = document.querySelectorAll('.nav-item-2')

navItemList2.forEach(n => {
  n.addEventListener("click", () => {
    navItemList2.forEach(n2 => {
      n2.classList.remove('active')
    })
    n.classList.add('active')
  })
})
/** END NAV ITEM 2 */

/** BEGIN NAV ITEM 8 */
const navItemList8 = document.querySelectorAll('.nav-item-8')

navItemList8.forEach(n => {
  n.addEventListener("click", () => {
    navItemList8.forEach(n2 => {
      n2.classList.remove('active')
    })
    n.classList.add('active')
  })
})
/** END NAV ITEM 8 */

/** BEGIN NAV ITEM 10 */
const navItemList10 = document.querySelectorAll('.nav-item-10')

navItemList10.forEach(n => {
  n.addEventListener("click", () => {
    navItemList10.forEach(n2 => {
      n2.classList.remove('active')
    })
    n.classList.add('active')
  })
})
/** END NAV ITEM 10 */