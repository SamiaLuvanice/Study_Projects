/**VALIDADOR DE BANDEIRA CARTÃO DE CRÉDITO
 * Valida a bandeira do cartão de crédito com base no número informado.
 * Suporta Visa, MasterCard, American Express, Elo, Hipercard, Discover, Diners Club, EnRoute, JCB, Aura e Voyage.
 * @param {string} cardNumber - Número do cartão de crédito (apenas dígitos).
 * @returns {string|null} - Retorna o nome da bandeira ou null se não reconhecida.
 */
function validarBandeiraCartao(cardNumber) {
    const bandeiras = [
        { nome: 'Visa', regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { nome: 'MasterCard', regex: /^5[1-5][0-9]{14}$/ },
        { nome: 'American Express', regex: /^3[47][0-9]{13}$/ },
        { nome: 'Elo', regex: /^(4011(78|79)|431274|438935|451416|457393|504175|5067[0-6][0-9]|509[0-9]{3}|627780|636297|636368|650[4-9][0-9]{2}|6516[5-9][0-9]|6550[0-9]{2})[0-9]{10,12}$/ },
        { nome: 'Hipercard', regex: /^(606282|3841)[0-9]{10,12}$/ },
        { nome: 'Discover', regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
        { nome: 'Diners Club', regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { nome: 'EnRoute', regex: /^(2014|2149)[0-9]{11}$/ },
        { nome: 'JCB', regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { nome: 'Aura', regex: /^50[0-9]{14,17}$/ },
        { nome: 'Voyage', regex: /^60[0-9]{14}$/ }
    ];

    const numero = cardNumber.replace(/\D/g, '');

    for (const bandeira of bandeiras) {
        if (bandeira.regex.test(numero)) {
            return bandeira.nome;
        }
    }
    return null;
}

// Exemplo de uso

// console.log(validarBandeiraCartao('4111111111111111')); // Visa
// console.log(validarBandeiraCartao('5500000000000004')); // MasterCard
// console.log(validarBandeiraCartao('30569309025904'));   // Diners Club
// console.log(validarBandeiraCartao('201400000000009'));  // EnRoute
