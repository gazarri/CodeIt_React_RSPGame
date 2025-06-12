import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1 id="title">가위바위보</h1>
        <h2>{getResult()}</h2>
        <button className="hand" onClick={handleClick}>가위</button>
        <button className="hand" onClick={handleClick}>바위</button>
        <button className="hand" onClick={handleClick}>보</button>
    </>
);

function getResult(me, other){
    return "승리";
}

function handleClick(){
    console.log("가위바위보!");
}
