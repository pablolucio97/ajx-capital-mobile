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


export { countries, genders, banks } 