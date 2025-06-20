import HandButton from "./HandButton";
import Button from "./Button";
import { compareHand, generateRandomHand} from "./utils";
import {useState} from "react";
import HandIcon from "./HandIcon";


const INITIAL_VALUE = 'rock';
const BET = 1;

function App(){
    const [hand, setHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    const [gameHistory, setGameHistory] = useState([]);
    const [score, setScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(BET);

    const getResult = (me, other) => {
        const comparison = compareHand(me, other);
        if (comparison > 0) {
            setScore(score + bet);
            return '승리';
        } else if (comparison < 0) {
            setOtherScore(otherScore + bet);
            return '패배';
        } else return '무승부';
    }
    const handleButtonClick = (nextHand) => {
        const nextOtherHand = generateRandomHand();
        const nextHistoryItem = getResult(nextHand, nextOtherHand);
        setHand(nextHand);
        setOtherHand(nextOtherHand);
        setGameHistory([...gameHistory, nextHistoryItem]);
    }
    const handleClearClick = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setGameHistory([]);
        setScore(0);
        setOtherScore(0);
        setBet(BET);
    }
    const handleBetChange = (e) => {
        setBet(Number(e.target.value));
    }
    return (
        <div>
            <Button onClick={handleClearClick}>처음부터</Button>
            <div>
                {score} : {otherScore}
            </div>
            <div>
                <HandIcon value={hand} />
                VS
                <HandIcon value={otherHand} />
            </div>
            <div>
                <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}/>
            </div>
            <p>승부 기록: {gameHistory.join(', ')}</p>
            <div>
                <HandButton value="rock" onClick={handleButtonClick} />
                <HandButton value="scissor" onClick={handleButtonClick} />
                <HandButton value="paper" onClick={handleButtonClick} />
            </div>
        </div>
    )
}

export default App;