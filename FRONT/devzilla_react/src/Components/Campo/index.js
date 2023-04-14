import './style.css'

export default function Campo (props){
    const { 
        label, 
        errorMsg, 
        id, 
        icon, 
        type, 
        placeholder, 
        value, 
        onChange,
        onKeyUp } = props
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <div className="wrap_input">
                {icon}
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    id={id} 
                    value={value}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                />
            </div>
            { errorMsg != null && <span className='error' > {errorMsg} </span> }
        </>
    )
}