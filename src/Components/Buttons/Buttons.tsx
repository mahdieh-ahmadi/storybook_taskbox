import './Button.css'

const Button = (props:{
    color:string
}) => {
    const color = props.color

    return (
        <button style={{backgroundColor:color}}>
            test button
        </button>
    )
}

export default Button