import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 200px;
  /* margin: 0 auto; */
  padding: 0 30px;
  max-width: 480px;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 4px rgba(119, 5, 47, 0.7);
  background-color: #f199ae;
  // background: url(https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  float: right;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: #590042;
  font-size: 36px;
  text-align: center;
`;

export const Subtitle = styled.h2`
  margin-bottom: 0;
  color: #590042;
  font-size: 28px;
  text-align: center;
`;

export const Text = styled.p `
  color: #590042;
  font-size: 14px;
  text-align: center;
`
export const Total = styled.span`
	display: flex;
  justify-content: center;
  margin-top:10px;
  margin-bottom:10px;
	font-size: 16px;
    font-weight: bold;    
`;