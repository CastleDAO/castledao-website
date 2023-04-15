import React from 'react';

export function Alert({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <div>
      <div className="alert">{children}</div>
      <style jsx>{`
        .alert {
          background: var(--red);
          padding: 15px;
          color: white;
          text-align: center;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}
