import './style.css'

export default function Campo (props){
    const { label, hasError, errorMsg, id, Icon, type, placeholder } = props
    return(
        <>
            <label for={id}>{label}</label>
            <div class="wrap_input">
                {/* <Icon /> */}
                <input type={type} placeholder={placeholder} id={id} />
            </div>
        </>
    )
}