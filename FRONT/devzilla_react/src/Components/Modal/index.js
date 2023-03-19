import './style.css';

import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Modal (props){

    const showClass = props.show ? 'show' : 'hide'

    return(
        <>
            <div id="fade" className={showClass}></div>
            <div id="modal" className={showClass}>
                <div className="modal_header">
                    <h1 className='line_after'>{ props.title }</h1>
                    <AiOutlineCloseCircle onClick={ props.onClose } className="btn_close" />
                </div>

                <div className="modal_content">
                    {props.children}
                </div>
            </div>
        </>
    )
}