import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 16px;
  line-height: 22;
  font-weight: 700;
  color: #000;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-size: 12px;
  line-height: 16;
  font-weight: 400;
  color: #949494;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: 12px;
  line-height: 16;
  font-weight: 300;
  color: #000;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 56px;
  background-color: #f9f9f9;
  border: 0.5px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 40px;
  padding: 0 8px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: #3ac6f4;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 18;
  text-align: center;
  color: #ffffff;
`;
