const Die = (props) => {
    let dieStyle = ''
    if(props.isHeld === true){
        dieStyle = 'bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center'
    } else {
        dieStyle = 'bg-slate-200 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center'
    }
    return (
        <div 
            id={props.id} 
            className={dieStyle} 
            onClick={props.holdDice} 
        >
            {props.value}
        </div>
    )
}

export default Die