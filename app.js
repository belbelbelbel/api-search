const search = document.querySelector('#search')
search.addEventListener('submit', async function (e) {
    e.preventDefault();
    const rest = search.elements.query.value;
    const fate = await axios.get(`https://api.tvmaze.com/search/shows?q=${rest}`)
    makeimages(fate.data)
})

const makeimages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img')
            img.src = result.show.image.medium;
            document.body.append(img)
        }

    }
}