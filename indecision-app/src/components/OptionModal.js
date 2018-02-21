import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        // Two explanation marks converts to "real booleans"
        isOpen={!!props.selectedOption}
        // Takes function when user closes modal, can close modal by clicking background, hitting escape etc
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {/*If value, then insert value in p tage*/}
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
    );

export default OptionModal;