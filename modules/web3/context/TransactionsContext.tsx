import { Provider } from '@wagmi/core';
import { ethers } from 'ethers';
import React, { ReactNode, useReducer, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type Transaction = {
  id: string;
  receipt: any;
  hash: string;
  confirmations: number;
  confirmationDate: Date;
  text: string;
  status: 'pending' | 'confirmed' | 'rejected' | 'error';
};

type State = {
  transactions: Transaction[];
};
const initialState: State = {
  transactions: []
};

function reducer(state: State, action: any): State {
  switch (action.type) {
    case 'clear':
      return {
        transactions: []
      };
    case 'add':
      // Only store the last 5 transactions
      return {
        transactions: [action.payload, ...state.transactions.slice(0, 4)]
      };
    case 'update':
      return {
        transactions: state.transactions.map(i => {
          if (i.id === action.payload.id) {
            return {
              ...i,
              ...action.payload.data
            };
          }
          return i;
        })
      };
    default:
      throw new Error();
  }
}

interface ContextProps {
  readonly transactions: Transaction[];
  clearTransactions: () => void;
  readonly listenTransaction: (tx: any, text: string, provider: Provider) => Promise<Transaction | null>;
}

export const TransactionsContext = React.createContext<ContextProps>({
  transactions: [],
  clearTransactions: () => null,
  listenTransaction: (val: any, text: string, provider: Provider) => Promise.resolve(null)
});

type PropTypes = {
  children: ReactNode;
};

export const TransactionsProvider = ({ children }: PropTypes) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearTransactions = () => {
    dispatch({
      type: 'clear'
    });
  };

  const listenTransaction = (val: any, text: string, provider: Provider): Promise<Transaction> => {
    const promise = new Promise<Transaction>((resolve, reject) => {
      const transaction: Transaction = {
        hash: '',
        id: uuidv4(),
        confirmations: 0,
        text,
        receipt: null,
        confirmationDate: new Date(),
        status: 'pending'
      };

      dispatch({
        type: 'add',
        payload: transaction
      });

      val
        .then(async function (resp: ethers.Transaction) {
          const hash = resp.hash;

          dispatch({
            type: 'update',
            payload: {
              id: transaction.id,
              data: {
                hash
              }
            }
          });

          const receipt = await provider.waitForTransaction(hash, 5, 150000);
          // console.log(JSON.stringify(receipt));
          transaction.receipt = receipt;
          transaction.confirmationDate = new Date();

          dispatch({
            type: 'update',
            payload: {
              id: transaction.id,
              data: {
                status: 'confirmed',
                confirmationDate: new Date(),
                confirmations: transaction.confirmations
              }
            }
          });
          resolve(transaction);
        })

        .catch(function (i: any, receipt: any) {
          if (i.code && i.code === 'ACTION_REJECTED') {
            dispatch({
              type: 'update',
              payload: {
                id: transaction.id,
                data: {
                  status: 'rejected',
                  confirmationDate: new Date(),
                  receipt
                }
              }
            });
          } else {
            dispatch({
              type: 'update',
              payload: {
                id: transaction.id,
                data: {
                  status: 'error',
                  confirmationDate: new Date(),
                  receipt
                }
              }
            });
          }

          reject(i);
        });
    });

    return promise;
  };
  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        listenTransaction,
        clearTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
