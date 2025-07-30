import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #f3e8ff;
  color: #6b21a8;
  margin-right: 15px;
  padding: 8px 12px;
  font-size: 1rem;
  border: 2px solid #d8b4fe;
  border-radius: 8px;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  background-color: #f0ccedff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 0;
  margin-top: 5px;
  list-style: none;
  width: max-content;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 99;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  &:hover {
    background-color: #f35656ff;
    border: 0px solid;
    border-radius: 15px;
  }
`;

export {DropdownWrapper, DropdownButton, DropdownMenu, DropdownItem}