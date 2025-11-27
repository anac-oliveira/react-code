import { Modal } from 'react-bootstrap'
import './ModalCustomizado.css'
import type { ModalCustomizadoProps } from '../../types/ModalCustomizadoProps'


export default function ModalCustomizado({ mostrarModalQuando, aoCancelar, exibirConteudoCentralizado, titulo, corpo, customizarBotoes, textoBotaoCancelamento, textBotaoConfirmacao, aoConfirmar, }: ModalCustomizadoProps) {
    return (
        <Modal
            style={{ fontFamily: "Bellota, system-ui" }}
            show={mostrarModalQuando}
            onHide={aoCancelar}
            centered={exibirConteudoCentralizado}
        >
            <Modal.Header>
                <Modal.Title>{titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{corpo}</Modal.Body>
            <Modal.Footer>
                {
                    customizarBotoes && (
                        <button onClick={aoCancelar} className='botaoModalCancelar'>
                            {textoBotaoCancelamento}
                        </button>
                    )
                }
                <button onClick={customizarBotoes ? aoConfirmar : aoCancelar} className='botaoSubmitModal'>
                    {customizarBotoes ? textBotaoConfirmacao : "OK"}
                </button>
            </Modal.Footer>
        </Modal>
    )
}
