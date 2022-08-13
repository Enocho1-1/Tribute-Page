    // Modal Full Image Display
    const openFullImg = (pic, caption,quotes) => {
        document.querySelector('#fullImageBox').style.display = 'flex'
        document.querySelector('#fullImg').src = pic
        document.querySelector('#img-caption').innerHTML = `<div style=" margin: 10px;"><p>${caption}</p>
        <p><q>${quotes}</q></p></div>`
    }

    function closeFullImg() {
   document.querySelector('#fullImageBox').style.display = 'none'
}

    document.addEventListener('click', e => {
        let overlay = document.querySelector('.page_overlay')
        switch(e.target.id){
            case "widget":
               const sideMenu = document.querySelector('#side-menu')
               sideMenu.style.display = 'flex'
            break
            case "close":
                const parent = document.querySelector('#side-menu')
                parent.style.display = 'none'
             break
             case "close_btn":
                e.target.parentElement.style.display = 'none'
                document.querySelectorAll('div.modal').forEach( element => {
                    element.style.display = 'none'
                })
             break
             case "early_life_button":
                const sectionOne = document.querySelector('#section_one_modal')
                 overlay = document.querySelector('.page_overlay')

                sectionOne.style.display = 'block'
                overlay.style.display = 'block'
             break
             case "NOI_button":
                const sectionTwo = document.querySelector('#section_two_modal')
                 overlay = document.querySelector('.page_overlay')

                sectionTwo.style.display = 'block'
                overlay.style.display = 'block'
             break
             case "disillusion_depature":
                const sectionThree = document.querySelector('#section_three_modal')
                 overlay = document.querySelector('.page_overlay')

                 sectionThree.style.display = 'block'
                overlay.style.display = 'block'
             break
             case "human_rights":
                const sectionFour = document.querySelector('#section_four_modal')
                 overlay = document.querySelector('.page_overlay')

                 sectionFour.style.display = 'block'
                overlay.style.display = 'block'
             break
        }
    })
