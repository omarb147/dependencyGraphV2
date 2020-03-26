import React from 'react';
import styled from 'styled-components';

interface ICardFrameProps {
  color: string;
  selected: boolean;
  className?: string;
}

interface ICardProps extends ICardFrameProps {
  points: string;
  status: string;
  labels: string;
  text: string;
}

const CardFrame = styled.div<ICardFrameProps>`
  background-color: #ffffff;
  border: ${(props): string => (props.selected ? `5px solid ${props.color}` : 'none')};
  border-top: 5px solid ${(props): string => props.color};
  width: 100%;
  height: 100%;
  box-shadow: 0px 5px 10px #c9c9c9;
  padding: 1rem;
`;

const UserStoryWrapper = styled.div`
  color: #434343;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Point = styled.div<{ color: string }>`
  padding: 0.25rem 0.4rem;
  font-size: 1.2rem;
  background-color: ${(props): string => props.color};
  color: #ffffff;
  margin-right: 0.5rem;
  opacity: 0.7;
`;

const Divider = styled.hr`
  margin: 1rem 0 0.5rem;
  border-top: 1px solid #e1e1e1;
`;

const Text = styled.div`
  flex-grow: 1;
`;

const LabelFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #a5a5a5;
  font-size: 0.8rem;
`;

const Card: React.SFC<ICardProps> = ({
  className,
  text,
  color,
  selected,
}: ICardProps) => (
  <CardFrame color={color} className={className} selected={selected}>
    <UserStoryWrapper>
      <Point color={color}>1</Point>
      <Text>{text}</Text>
    </UserStoryWrapper>
    <Divider />
    <LabelFrame>#LastSprint</LabelFrame>
  </CardFrame>
);

export default Card;
