import styled from "styled-components";

export const Item = styled.li`
	display: flex;
	justify-content: space-between;    
	align-items: center;
	font-size: 16px;
`;

export const Button = styled.button`
  width: 80px;
  border-radius: 16px;
  border: none;
  background: #cd8b9a;
  color: #590042;
  box-shadow: 1px 1px 3px 4px rgba(119,  5,  47, 0.7);
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #590042;
    color: #cd8b9a;
    box-shadow: 1px 1px 5px 5px rgba(119, 5, 47, 0.9);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    background: #590042;
    color: #cd8b9a;
    box-shadow: 0px 0px 2px 3px rgba(119, 5, 47, 0.9);
  }
`;


