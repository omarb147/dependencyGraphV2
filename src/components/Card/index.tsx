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
  box-shadow: 0px 5px 10px #c9c9c9;
  padding: 0.75rem;
`;


const UserStoryWrapper = styled.div`
  color: #434343;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Point = styled.div<{ color: string }>`
  padding: 0.25rem 0.4rem;
  font-size: 0.8rem;
  background-color: ${(props): string => props.color};
  color: #ffffff;
  margin-right: 0.5rem;
  opacity: 0.7;
`;

const Divider = styled.hr`
  margin: 0.5rem 0 0.25rem;
  border-top: 1px solid #e1e1e1;
`;

const Text = styled.div`
  font-size: 0.9rem;
  flex-grow: 1;
`;

const LabelFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #a5a5a5;
  font-size: 0.7rem;
`;

const Card: React.SFC<ICardProps> = ({
  className,
  text,
  color = 'purple',
  selected,
  labels,
  points,
  status,
}: ICardProps) => (
  <CardFrame
    color={color}
    className={className}
    selected={selected}
  >
    <UserStoryWrapper>
      {points ? (
        <Point color={color}>
          {points}
        </Point>
      ) : null}
      <Text>{text}</Text>
    </UserStoryWrapper>
    <Divider />
    {labels ? (
      <>
        <LabelFrame>{labels}</LabelFrame>
      </>
    ) : null}
  </CardFrame>
);

export default Card;
