let menuListMb = document.querySelectorAll('.mobile-menu-item')



menuListMb.forEach((item,index) => {
    item.onclick = (e) => {
        let crrItem = document.querySelector('.mobile-menu-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
    }
})