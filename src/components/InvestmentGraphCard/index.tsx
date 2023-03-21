import { LineChart } from 'react-native-chart-kit';
import {
    Container,
    GraphContainer,
    InvestmentLegendText,
    LabelLegendText,
    LegendsContainer,
    RenumberingLegendText
} from './styles';
import { horizontalGraphMarks, verticalGraphMarks } from '../../assets/svgs'
import { SvgXml } from 'react-native-svg';
export function InvestmentGraphCard() {

    const investmentsData = [20000, 19500, 19000, 18500, 18000]
    const proftsData = [2000, 1950, 1900, 1850, 1800]

    function renderLabel() {
        return (
            <>
                {
                    investmentsData.map(item => (
                        <LabelLegendText
                            key={item}
                        >
                            R$ {item}
                        </LabelLegendText>
                    ))
                }
            </>
        )
    }

    function renderPoint() {
        return (
            <InvestmentLegendText>
                R$ 18.500
            </InvestmentLegendText>
        )
    }


    return (
        <Container>
            <LegendsContainer>
                <InvestmentLegendText>
                    Investimento
                </InvestmentLegendText>
                <RenumberingLegendText>
                    Remuneração
                </RenumberingLegendText>
            </LegendsContainer>
            <GraphContainer>
                <SvgXml
                    xml={verticalGraphMarks}
                    style={{ marginRight: 8, marginTop: 12 }}
                />
                <LineChart
                    data={{
                        labels: ['', '', '', '', '', ''],
                        datasets: [
                            {
                                data: investmentsData,
                                color: (opacity = 1) => `rgba(22, 183, 219, ${opacity})`,
                                strokeWidth: 3

                            },
                            {
                                data: proftsData,
                                withDots: false,
                                color: (opacity = 1) => `rgba(50, 168, 82, ${opacity})`,
                                strokeWidth: 3,

                            },
                        ]
                    }}
                    renderDotContent={() => renderLabel()}
                    width={300}
                    height={220}
                    yAxisLabel="R$"
                    yAxisInterval={0}
                    withInnerLines={false}
                    withOuterLines={false}
                    segments={investmentsData.length}
                    hidePointsAtIndex={[0, 1, 2, 3]}
                    chartConfig={{
                        fillShadowGradientFrom: '#3AC6F4',
                        fillShadowGradientTo: '#38D462',
                        backgroundGradientFrom: 'white',
                        backgroundGradientTo: 'white',
                        strokeWidth: 2,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(22, 183, 219, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        propsForDots: {
                            r: '12',
                            strokeWidth: '8',
                            fill: '#3AC6F4',
                            stroke: 'rgba(22, 183, 219, 0.5)'
                        },
                    }}
                    bezier
                    style={{
                        marginTop: 8,
                    }}
                />
            </GraphContainer>
            <SvgXml
                xml={horizontalGraphMarks}
                style={{ marginLeft: 16, marginTop: -16 }}
            />
        </Container>
    )
}