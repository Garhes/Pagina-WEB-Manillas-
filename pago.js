document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Recoge los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Configura los parámetros de la transacción
    const handler = ePayco.checkout.configure({
        key: 'tu-public_key-de-epayco',
        test: true
    });
    
    const data = {
        name: name,
        description: 'Pago con Nequi',
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
        method: 'PSE',
        email: email,
        extra1: phone,
        extra2: '',
        extra3: ''
    };

    handler.open(data);
});
