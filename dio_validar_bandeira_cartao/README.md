# Validador de Bandeira de Cartão de Crédito

Este projeto contém uma função JavaScript para validar a bandeira de cartões de crédito a partir do número informado. O validador identifica automaticamente as principais bandeiras utilizadas no Brasil e no mundo.

## Bandeiras Suportadas

- Visa
- MasterCard
- American Express
- Elo
- Hipercard
- Discover
- Diners Club
- EnRoute
- JCB
- Aura
- Voyage

## Como Usar

1. Importe ou copie a função `validarBandeiraCartao` para seu projeto.
2. Chame a função passando o número do cartão (como string).
3. O retorno será o nome da bandeira ou `null` caso não seja reconhecida.

### Exemplo

```javascript
console.log(validarBandeiraCartao('4111111111111111')); // Visa
console.log(validarBandeiraCartao('5500000000000004')); // MasterCard
console.log(validarBandeiraCartao('30569309025904'));   // Diners Club
console.log(validarBandeiraCartao('201400000000009'));  // EnRoute