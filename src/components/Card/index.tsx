import React from 'react';
import styled from 'styled-components';

interface ICardProps {
  color: string;
  text: string;
  selected?: boolean;
  className?: string;
}

const CardFrame = styled.div`
  background-color:#FFFFFF;
  border-top: 5px solid ${(props) => props.color};
  width:20rem;
  box-shadow: 0px 5px 10px #C9C9C9;
  padding: 1rem;
`;

const UserStoryWrapper = styled.div`
  color: #434343;
  font-size: 1rem;
  display:flex;
  justify-content: space-between;
`;

const Point = styled.div`
  padding: 0.25rem 0.4rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.color};
  color: #FFFFFF;
  margin-right: 0.5rem;
  opacity:0.7;
`;

const Divider = styled.hr`
  margin: 1rem 0 0.5rem;
  border-top:1px solid #E1E1E1;
`;

const Text = styled.div`
  flex-grow: 1;
`;

const LabelFrame = styled.div`
display:flex;
justify-content: flex-end;
color: #A5A5A5;
font-size:0.8rem;
`;


const Card: React.SFC<ICardProps> = ({ className, text, color }: ICardProps) => (
  <CardFrame color={color} className={className}>
    <UserStoryWrapper>
      <Point color={color}>
        1
      </Point>
      <Text>
        {text}
      </Text>
    </UserStoryWrapper>
    <Divider />
    <LabelFrame>
      #LastSprint
    </LabelFrame>
  </CardFrame>
);

export default Card;
