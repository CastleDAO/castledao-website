import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export function Button({
  children,
  onClick,
  loading,
  primary,
  secondary,
  tertiary,
  disabled,
  small,
  outline,
  gold,
  id,
  background,
  color
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  gold?: boolean;
  disabled?: boolean;
  small?: boolean;
  outline?: boolean;
  id?: string;
  background?: string;
  color?: string;
}): React.ReactElement {
  return (
    <React.Fragment>
      <button
        {...(id ? { id } : {})}
        disabled={disabled}
        className={`${
          primary
            ? 'primary'
            : secondary
            ? 'secondary'
            : tertiary
            ? 'tertiary'
            : gold
            ? 'gold'
            : outline
            ? 'outline'
            : ''
        } `}
        onClick={onClick}
      >
        {!loading ? <div className="children-wrapper">{children}</div> : <LoadingSpinner />}
      </button>
      <style jsx>{`
        button {
          background: orange;
          background-size: 100% 100% !important;
          padding: ${small ? '8px' : '12px'};
          color: ${color ? color : 'white'};
          text-shadow: ${color ? 'none' : '1px 1px 1px black'};
          cursor: pointer;
          text-align: center;
          border: none;
          font-family: Atari;
          font-size: inherit;

          transition: all 150ms linear;
          box-sizing: border-box;
          box-shadow: 1px 1px 1px 1px black;
        }

        .button.loading {
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .button.loading div {
          display: inline-block;
        }

        button.primary {
          background: var(--green);
        }

        button.secondary {
          background: purple;
        }

        button.tertiary {
          background: var(--red);
        }

        button.gold {
          background: gold;
          color: #000;
        }

        button.transparent {
          background: transparent;
        }

        button.outline {
          background: white;
          color: black;
          text-shadow: none;
          box-shadow: 2px 2px 1px 2px black;
        }

        button:disabled {
          opacity: 0.5;
        }

        button:hover {
          background: white;
          color: black;
          text-shadow: none;
          box-shadow: 2px 2px 1px 5px black;
        }
      `}</style>
    </React.Fragment>
  );
}
