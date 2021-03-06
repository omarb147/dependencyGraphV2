import React from 'react';
import styled from 'styled-components';
import NodesSelectorClass from '@/module/node/selectors';

const StyledHeader = styled.h3<{ color: string }>`
  font-size: 1.3rem;
  color: ${({ color }): string => color ?? 'black'};
  margin: 0;
`;

interface IProps {
    itemId: string;
}

const Header: React.FC<IProps> = ({ itemId }: IProps) => {
  const NodesSelector = new NodesSelectorClass();
  const { color, name } = NodesSelector.useHeaderById(itemId);
  return <StyledHeader color={color}>{name}</StyledHeader>;
};

export default Header;
