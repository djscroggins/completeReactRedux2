import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        // Two explanation marks converts to "real booleans"
        isOpen={!!props.selectedOption}
        // Takes function when user closes modal, can close modal by clicking background, hitting escape etc
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {/*If value, then insert value in p tage*/}
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
    );

export default OptionModal;