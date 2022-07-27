    // Modal Full Image Display
    const openFullImg = (pic, caption) => {
        document.querySelector('#fullImageBox').style.display = 'flex'
        document.querySelector('#fullImg').src = pic
        document.querySelector('#img-caption').innerHTML = `<p>${caption}</p>`
    }

    const closeFullImg = () => {
        document.querySelector('#fullImageBox').style.display = 'none'
    }

    document.addEventListener('click', e => {
        switch(e.target.id){
            case "widget":
               const sideMenu = document.querySelector('#side-menu')
               sideMenu.style.display = 'flex'
            break
            case "close":
                const parent = document.querySelector('#side-menu')
                parent.style.display = 'none'
             break
        }
    })
