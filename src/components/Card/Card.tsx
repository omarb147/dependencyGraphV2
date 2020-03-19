import React from "react";
import styled from "styled-components";

interface ICardProps {
  color: string;
  text: string;
  size: {
    height: number;
    width: number;
  };
  selected?: boolean;
  className?: string;
}

const Card: React.SFC<ICardProps> = props => {
  return (
    <div className={props.className}>
      <div>{props.text}</div>
    </div>
  );
};

export default styled(Card)`
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
  div {
    font-size: ${props => props.size.width / 10 + 8}px;
  }
`;
