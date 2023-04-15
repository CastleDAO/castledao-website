import React from 'react';

export type ModalOptions = {
  canClose: boolean;
  fullWidth: boolean;
  fullHeight: boolean;
};

type PropTypes = {
  onClickClose: () => void;
  children: any;
  modalOptions: Partial<ModalOptions>;
};

export default function Modal({ onClickClose = () => {}, children, modalOptions }: PropTypes) {
  return (
    <>
      <div className="modal-wrapper" onClick={onClickClose}>
        <div className="modal-container" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            {modalOptions.canClose && (
              <div className="modal-close" onClick={onClickClose}>
                X
              </div>
            )}
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
      <style jsx>{`
        .modal-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          background: rgb(215 215 215 / 30%);
          width: 100%;
          height: 100%;
          z-index: var(--z-index-modal);
        }
        .modal-container {
          background: var(--accents-8);
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
          min-width: ${modalOptions.fullWidth ? '100%' : '40vw'};
          max-width: ${modalOptions.fullWidth ? '100%' : '90vw'};
          overflow-x: auto;
          overflow-y: auto;
          top: ${modalOptions.fullHeight ? '0' : '100px'};
          max-height: ${modalOptions.fullHeight ? '100vh' : 'calc(100vh - 200px)'};
        }

        .modal-header {
          padding: 20px 20px 0 20px;
          position: sticky;
          top: 0;
          right: 0;
          display: flex;
          justify-content: flex-end;
          z-index: var(--z-index-modal);
        }
        .modal-content {
          padding: 20px;
          padding-top: 0px;
        }

        .modal-close {
          position: absolute;
          cursor: pointer;
          right: 0%;
          height: 40px;
          width: 40px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          font-size: 20px;
          color: white;
          line-height: 30px;
          text-shadow: 5px 0px 2px darken(red, 20%);
          background-color: var(--mythic);
        }
        @media (max-width: 600px) {
          .modal-container {
            width: 90vw;
          }
          .modal-content {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}
