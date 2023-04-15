import { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

export default function TransactionList(): React.ReactElement {
  const { transactions, clearTransactions } = useContext(TransactionsContext);
  return (
    <div>
      {transactions.length > 0 && (
        <div className="transactions">
          <div className="clear" onClick={clearTransactions}>
            Close
          </div>
          {transactions.map(t => {
            return (
              <div className="transaction" key={t.id}>
                <span className="info">
                  {t.confirmationDate.toDateString()} - {t.text}
                </span>
                <span className="info"> Status: {t.status}</span>
                {t.hash && (
                  <div className="link">
                    Link: <a href={`https://arbiscan.io/tx/${t.hash}`}>Arbiscan</a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <style jsx>
        {`
          .clear {
            cursor: pointer;
            text-decoration: underline;
            margin-top: 5px;
            margin-right: 5px;
            text-align: right;
          }

          .transactions {
            position: fixed;
            bottom: 10px;
            right: 10px;
            padding: 10px;
            border-radius: 10px;
            background: var(--black-background);
            font-size: 8px;
          }

          .transaction {
            padding: 10px;
          }

          .info {
            display: block;
          }
        `}
      </style>
    </div>
  );
}
