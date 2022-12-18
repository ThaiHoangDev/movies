import React from 'react';

import './button.scss';

interface IProps {
  onClick: () => void;
  className: any;
  children: any;
}

const Button = (props: IProps) => {
  const handleClick = () => {
    !!props?.onClick && props.onClick();
  };
  return (
    <button className={`btn ${props.className}`} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export const OutlineButton = (props: IProps) => {
  const handleClick = () => {
    !!props?.onClick && props.onClick();
  };

  return (
    <Button className={`btn-outline ${props.className}`} onClick={handleClick}>
      {props.children}
    </Button>
  );
};

export default Button;
