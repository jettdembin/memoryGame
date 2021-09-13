document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'goku',
            img: 'images/goku.jpg'
        },
        {
            name: 'goku',
            img: 'images/goku.jpg'
        },
        {
            name: 'ichigo',
            img: 'images/ichigo.jpg'
        },
        {
            name: 'ichigo',
            img: 'images/ichigo.jpg'
        },
        {
            name: 'light',
            img: 'images/light.jpg'
        },
        {
            name: 'light',
            img: 'images/light.jpg'
        },
        {
            name: 'madara',
            img: 'images/madara.jpg'
        },
        {
            name: 'madara',
            img: 'images/madara.jpg'
        },
        {
            name: 'sasuke',
            img: 'images/msasuke.jpg'
        },
        {
            name: 'sasuke',
            img: 'images/msasuke.jpg'
        },
        {
            name: 'luffy',
            img: 'images/luffy.jpg'
        },
        {
            name: 'luffy',
            img: 'images/luffy.jpg'
        }
    ]

    const grid = document.querySelector('.grid')
    const cardsChosen = []
    const cardsChosenId = []

    //funciton to create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard())
            grid.appendChild(card)
        }
    }

    //check for matches


    //flip the card
    function flipCard() {
        const cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', card[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

});
