import Modal, { ModalOptions } from '../components/Modal';
import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

interface ContextProps {
  readonly modalOpened: boolean;
  readonly setModalOpened: (val: boolean) => void;
  readonly content: any;
  readonly setModalContent: (item: any) => void;
  readonly setModalOptions: (opts: Partial<ModalOptions>) => void;
}

export const ModalContext = React.createContext<ContextProps>({
  modalOpened: false,
  setModalOpened: (val: boolean) => null,
  content: null,
  setModalContent: (item: ReactNode) => null,
  setModalOptions: (opts: Partial<ModalOptions>) => null
});

type PropTypes = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: PropTypes) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [content, setModalContent] = useState(null);
  const defaultmodalOptions = {
    canClose: true,
    fullWidth: false,
    fullHeight: false
  };
  const [modalOptions, setModalOptions] = useState<ModalOptions>(defaultmodalOptions);

  const openCloseModal = (val: boolean) => {
    setModalOpened(val);
    if (!val) {
      setModalContent(null);
      setModalOptions(defaultmodalOptions);
    }
  };

  const changeModalOptions = (opts: Partial<ModalOptions>) => {
    setModalOptions({
      ...modalOptions,
      ...opts
    });
  };

  const router = useRouter();

  useEffect(() => {
    setModalOpened(false);
  }, [router.pathname]);
  return (
    <ModalContext.Provider
      value={{
        modalOpened,
        setModalOpened: openCloseModal,
        content,
        setModalContent,
        setModalOptions: changeModalOptions
      }}
    >
      {modalOpened && content && (
        <Modal modalOptions={modalOptions} onClickClose={() => openCloseModal(false)}>
          <div className="content-modal-items">{content}</div>
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
};
