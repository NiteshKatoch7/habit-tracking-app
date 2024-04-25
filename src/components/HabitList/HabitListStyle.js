import styled from "styled-components";


export const ListComponent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px 0;
  padding: 20px 4px;
  max-height: 490px;
  overflow: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &::-webkit-scrollbar{
    width: 0px;
  }

  &::-webkit-scrollbar-track{
    width: 12px;
    background-color: #fff;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb{
    padding: 0 3px;
    width: 8px;
    background-color: lightgrey;
    border-radius: 12px;
  }
`;

export const ListItem = styled.li`
  padding: 16px 20px;
  background: #ffffff;
  color: #000000;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  animation: fadeIn 0.6s ease-in-out;

  &.active{
    background: #FF5634;
    color: #ffffff;
  }
`;