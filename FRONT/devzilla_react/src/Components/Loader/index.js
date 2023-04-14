import './style.css'

export default function Loader(props){
    return(
        <div className={`loader ${ props.show && 'show'}`}>
            <div className='center'>
                {/* <div className="text">Carregando...</div> */}
                <div className="ring"></div>
            </div>
        </div>
    )
}