import './style.css'

export default function Campo (props){
    const { 
        label, 
        hasError, 
        errorMsg, 
        id, 
        icon, 
        type, 
        placeholder, 
        value, 
        onChange } = props
    return(
        <>
            <label for={id}>{label}</label>
            <div class="wrap_input">
                {icon}
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    id={id} 
                    value={value}
                    onChange={onChange}
                />
            </div>
            { hasError && <span className='error' > {errorMsg} </span> }
        </>
    )
}