import './input.scss'

const Input = (props) => {
    return (
        <input
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    )
}

export default Input
