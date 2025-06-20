const HANDS = ['rock', 'scissor', 'paper'];

const WINS = {
    rock: 'scissor',
    scissor: 'paper',
    paper: 'rock',
};
function random(n) {
    return Math.floor(Math.random() * n);
}
export function  compareHand(a, b) {
    if( WINS[a] === b ) return 1;
    else if( WINS[b] === a) return -1;
    return 0;
}

export function generateRandomHand() {
    const idx = random(HANDS.length);
    return HANDS[idx];
}
