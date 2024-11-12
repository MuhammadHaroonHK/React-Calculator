import design from './Display.module.css'


function Display({ currentValue }) {
    return (
        <input className={design.display} type="text" readOnly value={currentValue} />
    )
}

export default Display