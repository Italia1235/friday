import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import './Modal.css';

export const Modal = ({ showModal, setShowModal, children }: PropsType) => {
    return (
        <div className={showModal ? "modal activeModal" : "modal"} onClick={() => setShowModal(false)}>
            <div
                className={showModal ? "modal__content activeContent" : "modal__content"}
                onClick={e => e.stopPropagation()}>
                { children }

            </div>
        </div>

    )
}
type PropsType = {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    children?: React.ReactNode
}