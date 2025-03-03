document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expMonth = document.getElementById('expMonth').value;
    const expYear = document.getElementById('expYear').value;
    const cvc = document.getElementById('cvc').value;

    const handler = ePayco.checkout.configure({
        key: 'tu-public_key-de-epayco',
        test: true
    });

    const data = {
        name: name,
        description: 'Pago con Tarjeta',
        invoice: '12345',
        currency: 'cop',
        amount: '10000',  // Monto de la transacción
        tax_base: '0',
        tax: '0',
        country: 'co',
        lang: 'es',
        external: 'false',
        confirmation: 'https://tu-sitio.com/confirmacion',
        response: 'https://tu-sitio.com/respuesta',
        method: 'card',
        email: email,
        card: {
            number: cardNumber,
            exp_month: expMonth,
            exp_year: expYear,
            cvc: cvc
        }
    };

    handler.open(data);
});
