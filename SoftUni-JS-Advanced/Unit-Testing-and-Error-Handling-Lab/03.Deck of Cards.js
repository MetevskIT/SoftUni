function deckOfCards(inputs = []) {
    let result = [];
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
        let curr = face + suits[suit];
        result.push(curr);
    }
    try {
        for (let input of inputs) {
            let face = input.slice(0, input.length - 1);
            let suit = input.slice(input.length - 1);
            createCard(face, suit);
        }
        console.log(result.join(' '));
    } catch (error) {
        console.log(error.message);
    }


}
deckOfCards(['5S', '3D', 'QD', '1C']);