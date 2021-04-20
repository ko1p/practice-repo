import React, {
    FC, ReactElement, ReactNode, MouseEvent, FocusEvent,
  } from 'react';
  
  export type PropTypes = {
    onClick: (e: MouseEvent) => void;
  };
  
  export const Header: FC<PropTypes> = ({ onClick }: PropTypes): ReactElement => {

    const mouseOver = (e: React.MouseEvent): void => {
        console.log(e.currentTarget)
    }
  
    return (
      <button
        type="button"
        onClick={onClick}
        onMouseOver={mouseOver}
      >
        Click me
      </button>
    );
  };