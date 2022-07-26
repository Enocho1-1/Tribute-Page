    // Modal Full Image Display
    const openFullImg = (pic, caption) => {
        document.querySelector('#fullImageBox').style.display = 'flex'
        document.querySelector('#fullImg').src = pic
        document.querySelector('#img-caption').innerHTML = `<p>${caption}</p>`
    }

    const closeFullImg = () => {
        document.querySelector('#fullImageBox').style.display = 'none'
    }