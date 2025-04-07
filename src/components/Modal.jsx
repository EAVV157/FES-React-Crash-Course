import "./Modal.css";

function Modal({ onConfirm, onCancel, title }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
