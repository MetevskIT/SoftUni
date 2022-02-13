function playingCards(face,suit){
    const faces= ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    if (!faces.includes(face)) {
        throw new Error('Error');
    }

    let suits={
        S:'\u2660',
        H:'\u2665',
        D:'\u2666',
        C:'\u2663',
        toString(){
            return face+suits[suit];
        }
    }
    return suits.toString();

}
console.log(playingCards('1', 'C'));