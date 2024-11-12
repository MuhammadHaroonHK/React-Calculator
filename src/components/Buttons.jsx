import design from './Buttons.module.css'

function Buttons({ buttonHandele }) {

    var buttons = ['CA', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];

    var everybutton = buttons.map(button =>
        <button className={design.btnStyle}
            onClick={buttonHandele} key={button} >
            {button}</button>
    )
    return (
        <div className={design.dev}>{everybutton}</div>

    )
}

export default Buttons