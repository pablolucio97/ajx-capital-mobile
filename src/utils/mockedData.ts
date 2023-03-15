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

const documents = [
    {
        document: 'CNH',
        documentImage: 'https://midias.agazeta.com.br/2020/12/14/nova-carteira-de-identidade-vai-fornecer-varias-informacoes-em-um-unico-documento-381900-article.jpg',
        status: 'Pendente Avaliação'
    },
    {
        document: 'CNH',
        documentImage: 'https://s2.glbimg.com/_bCeHe8l8gGuZ6XfL0C_rYHhNB4=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/K/iF7eHyTky2IZDMsAvVHQ/whatsapp-image-2019-04-04-at-4.55.07-pm.jpeg',
        status: 'Pendente Avaliação'
    }
]

const notifications = [
    {
        id: '1',
        title: 'Complete seu cadastro',
        timeSinceSent: '2 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'data'
    },
    {
        id: '2',
        title: 'Seu investimento remunerou 😍',
        timeSinceSent: '3 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'investment'
    },
    {
        id: '3',
        title: 'Não detectamos o pagamento do seu Boleto',
        timeSinceSent: '2 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'payment'
    },
    {
        id: '4',
        title: 'Complete seu cadastro',
        timeSinceSent: '2 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'data'
    },
    {
        id: '5',
        title: 'Seu investimento remunerou 😍',
        timeSinceSent: '3 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'investment'
    },
    {
        id: '6',
        title: 'Não detectamos o pagamento do seu Boleto.',
        timeSinceSent: '2 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'payment'
    },
    {
        id: '7',
        title: 'Complete seu cadastro',
        timeSinceSent: '2 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'data'
    },
    {
        id: '8',
        title: 'Seu investimento remunerou 😍',
        timeSinceSent: '3 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'investment'
    },
    {
        id: '9',
        title: 'Não detectamos o pagamento do seu Boleto.',
        timeSinceSent: '2 minutos atrás',
        sentFrom: 'Sistema',
        iconType: 'payment'
    },
]


export {
    countries,
    genders,
    banks,
    patrimoniesValuesToInvest,
    segmentsToInvest,
    investorProfiles,
    documents,
    notifications
 } 