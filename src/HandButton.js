import HandIcon from "./HandIcon";

function HandButton({value, onClick}) {
    // 개 미쳐도르 handleClick에서 위에 인자로 받은 onClick에 value를 넘겨주는것;
    const handleClick = () => onClick(value);
    return (<button onClick={handleClick}>
                <HandIcon value={value}/>
            </button>)
}
export default HandButton;