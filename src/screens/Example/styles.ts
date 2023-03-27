import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type LinkTextProps = {
  bold?: boolean;
};

type ButtonProps = {
  variant: string;
};

export const Button = styled.TouchableOpacity`
  background-color: #7159c1;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 24px;
`;

// INVESTMENT SECTION
export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${RFValue(24)}px;
  box-shadow: 0px 5px 4px rgba(233, 233, 233, 0.5);
  border-radius: 10px;
  width: 100%;
  elevation: 10;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(22)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.titleDark};
  margin-bottom: ${RFValue(16)}px;
  max-width: ${RFValue(240)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-bottom: ${RFValue(16)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textDark};
  margin-left: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Input = styled.TextInput`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.inputs};
  border: 0.5px solid ${({ theme }) => theme.colors.borders};
  border-radius: ${RFValue(10)}px;
  padding: 0 8px;
`;
// END OF INVESTMENT SECTION

export const Gap = styled.View`
  gap: 24px;
  margin-top: 8px;
`;

// COMPONENTS OF TERMS OF USE
export const Link = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 0.5px solid ${({ theme }) => theme.colors.borders};
  border-radius: 10px;
  padding: 18px 24px;
`;

export const LinkText = styled.Text<LinkTextProps>`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)};
  font-weight: ${({ bold }) => (bold ? 700 : 600)};
  color: ${({ theme }) => theme.colors.titleDark};
`;

export const Check = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(40)}px;
`;

export const Terms = styled.Text`
  flex: 1;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.titleDark};
  margin-left: ${RFValue(16)}px;
`;
// END OF COMPONENTS OF TERMS OF USE

// BUTTONS
export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const Buttons = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme, variant, disabled }) =>
    disabled ? '#dadada' : variant === 'primary' ? theme.colors.primary : 'transparent'};
  border: 0.5px solid ${({ theme, disabled }) => (disabled ? '#dadada' : theme.colors.primary)};
  border-radius: 10px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ theme, variant }) => (variant === 'secondary' ? theme.colors.primary : theme.colors.textLight)};
`;
// END BUTTONS

// RADIO BUTTON
export const RadioContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 20px 24px;
  box-shadow: 0px 5px 4px rgba(233, 233, 233, 0.5);
  border-radius: 10px;
  width: 100%;
  elevation: 10;
`;
// RADIO BUTTON

// BARS CODE SECTION
export const BarsCodeContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0.5px solid ${({ theme }) => theme.colors.borders};
  border-radius: 10px;
  padding: 18px 24px 24px;
  margin: 24px 0 16px;
`;

export const BarsCode = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const CopyCode = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-top: 16px;
`;
// END OF BARS CODE SECTION
