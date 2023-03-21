import FeaterIcon from '@expo/vector-icons/Feather';
import { ReactNode, useMemo } from 'react';
import { ProgressChart } from 'react-native-chart-kit';
import SelectDropdown, { SelectDropdownProps } from 'react-native-select-dropdown';
import {
    Container,
    DataLegendContainer,
    FirstLegendBoxContainer,
    InvestmentLegendText,
    LastDataLegendContainer,
    SecondLegendBoxContainer,
    SelectContainer, SelectPickerContainer, Styles,
    Text,
    TextDataContainer,
    TextLegendContainer,
    ThirdLegendBoxContainer
} from './styles';

type InvestmentsGroupCard = {
    investment: string;
    totalTimeInMonths: number;
    currentTimeInMonths: number;
    renumbering: string;
    selectData?: unknown;
    children?: ReactNode;
    graphData: {
        data: number[];
        colors?: string[];
    }
}

type InvestmentsGroupCardProps = SelectDropdownProps & InvestmentsGroupCard

export function InvestmentsGroupCard({
    graphData,
    selectData,
    children,
    currentTimeInMonths,
    totalTimeInMonths,
    investment,
    renumbering,
    ...rest
}: InvestmentsGroupCardProps) {

    const timePercentage = useMemo(() => {
        const percentage = Number((currentTimeInMonths / totalTimeInMonths) * 100).toFixed(0)
        return percentage
    }, [totalTimeInMonths, currentTimeInMonths])

    return (
        <Container>
            <SelectContainer>
                <InvestmentLegendText>
                    Investimentos
                </InvestmentLegendText>
                <SelectPickerContainer>
                    <SelectDropdown
                        {...rest}
                        data={selectData as never}
                        buttonTextStyle={Styles.buttonTextStyle}
                        dropdownStyle={Styles.dropdownStyle}
                        buttonStyle={Styles.buttonStyle}
                        rowTextStyle={Styles.buttonTextStyle}
                        renderDropdownIcon={() =>
                            <FeaterIcon
                                size={24}
                                color='#000000'
                                name='chevron-down'
                            />}
                    />
                </SelectPickerContainer>
                {children}
            </SelectContainer>
            <ProgressChart
                data={graphData}
                width={300}
                height={224}
                strokeWidth={16}
                radius={40}
                hideLegend
                chartConfig={{
                    backgroundGradientFrom: '#FFFFFF',
                    backgroundGradientTo: '#FFFFFF',
                    color: (opacity = 1, index) => {
                        return index !== undefined ?
                            graphData.colors![index]
                            : `rgba(22, 183, 219, ${opacity})`
                    },
                }}
            />
            <DataLegendContainer>
                <TextLegendContainer>
                    <FirstLegendBoxContainer />
                    <Text>Tempo</Text>
                </TextLegendContainer>
                <TextLegendContainer>
                    <TextDataContainer>
                        <Text style={Styles.textData}>
                            {currentTimeInMonths} / {totalTimeInMonths}</Text>
                        <Text>{timePercentage}%</Text>
                    </TextDataContainer>
                </TextLegendContainer>
            </DataLegendContainer>

            <DataLegendContainer>
                <TextLegendContainer>
                    <SecondLegendBoxContainer />
                    <Text>Investimento</Text>
                </TextLegendContainer>
                <TextLegendContainer>
                    <TextDataContainer>
                        <Text>
                            {investment}
                        </Text>
                    </TextDataContainer>
                </TextLegendContainer>
            </DataLegendContainer>

            <LastDataLegendContainer>
                <TextLegendContainer>
                    <ThirdLegendBoxContainer />
                    <Text>Remuneração</Text>
                </TextLegendContainer>
                <TextLegendContainer>
                    <TextDataContainer>
                        <Text>
                            {renumbering}
                        </Text>
                    </TextDataContainer>
                </TextLegendContainer>
            </LastDataLegendContainer>

        </Container>
    )
}