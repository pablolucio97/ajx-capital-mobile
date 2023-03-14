const countries = ['Solteiro', 'Casado', 'Divorciado', 'Viúvo']
const genders = ['Masculino', 'Feminino', 'Outro']
const banks = [
    'Nubank',
    'Itaú',
    'Santander',
    'Bradesco',
    'Caixa Econômica Federal',
    'Banco do Brasil',
    'C6 Bank'
].sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1
    if (a.toLowerCase() > b.toLowerCase()) return 1
    return 0
})

const patrimoniesValuesToInvest = [
    'R$ 500,00',
    'R$ 1.000,00',
    'R$ 2.000,00',
    'R$ 5.000,00',
    'R$ 10.000,00',
    'R$ 25.000,00',
    'R$ 50.000,00',
    'R$ 100.000,00',
    'R$ 200.000,00',
    'R$ 500.000,00',
    'R$ 1.000.000,00',
]

const segmentsToInvest = [
    'Agricultura',
    'Comércio e varejo',
    'Educação',
    'Esporte e lazer',
    'Saúde',
    'Tecnologia',
    'Transporte',
]

const investorProfiles = [
    'Conservador',
    'Moderado',
    'Arriscado'
]

export { countries, genders, banks, patrimoniesValuesToInvest, segmentsToInvest, investorProfiles } 