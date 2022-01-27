import { useState } from 'react';
import { Modal } from '../../main/ui/components/modal/Modal';

export const TestModal = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true)
    }
    return (
        <div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <p>The React children prop allows components to be composed together and is a key concept for building reusable components. Visually, we can think of it as a hole in the component where the consumer controls what is rendered. This post covers different approaches to strongly-typing this powerful and flexible prop with TypeScript.</p>
            </Modal>
            <button onClick={openModal}>show modal</button>
            <p>
                Событие – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).

                Вот список самых часто используемых DOM-событий, пока просто для ознакомления:

                События мыши:

                click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
                contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
                mouseover / mouseout – когда мышь наводится на / покидает элемент.
                mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
                mousemove – при движении мыши.
                События на элементах управления:

                submit – пользователь отправил форму
                focus – пользователь фокусируется на элементе, например нажимает на
                Клавиатурные события:

                keydown и keyup – когда пользователь нажимает / отпускает клавишу.
                События документа:

                DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
                CSS events:

                transitionend – когда CSS-анимация завершена.
                Существует множество других событий. Мы подробно разберём их в последующих главах.

                Обработчики событий
                Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие произошло.

                Именно благодаря обработчикам JavaScript-код может реагировать на действия пользователя.

                Есть несколько способов назначить событию обработчик. Сейчас мы их рассмотрим, начиная с самого простого.
            </p>
        </div>
    )
}