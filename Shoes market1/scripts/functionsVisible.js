import { body, 
    // sections, welcomeSection_container,
    transitionSection, menuBurgers, linkBlocks} from "./elemetsName.js"
import { openBurgerMenu } from "./burger-menu.js"

 linkBlocks.forEach(linkBlock => {
    menuBurgers.forEach(menuBurger => {
        if (menuBurger.getAttribute('data-burger-menu') !== 'close') {
            openBurgerMenu()
        }
    })
 })


 transitionSection.forEach(section => {
    section.addEventListener('click', () => {

        linkBlocks.forEach(linkBlock => {
            if (linkBlock.classList.contains('menu-is-open')) {
                linkBlock.classList.remove('menu-is-open')
            }
        })

        const welcomeHeaderBlock = document.querySelector('.welcome-header-block')
        if (welcomeHeaderBlock.classList.contains('menu-is-open')) {
            welcomeHeaderBlock.classList.remove('menu-is-open')
        }

        const sectionAttrinuteValue = section.getAttribute('data-transition')
        body.setAttribute('data-body-name', sectionAttrinuteValue)
        
        if (body.getAttribute('data-body-name') === 'welcome') {
            document.querySelector('.welcome-section').style.display = 'block'
            document.querySelector('.shop-section').style.display = 'none' 
            
        }
        if (body.getAttribute('data-body-name') === 'shop') {
            document.querySelector('.welcome-section').style.display = 'none'           
            document.querySelector('.shop-section').style.display = 'block'  
        }
        menuBurgers.forEach(menuBurger => {
            if(menuBurger.getAttribute('data-burger-menu') !== 'close') {
                openBurgerMenu ()
            }


        })
        
        
        
        
    })
})