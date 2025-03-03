document.addEventListener('DOMContentLoaded', function() {
    const publicKey = 'tu-public_key-de-epayco';
    
    // Inicializa Epayco
    const handler = ePayco.checkout.configure({
        key: publicKey,
        test: true
    });
    
    // Obtén la lista de bancos
    fetch(`https://secure.epayco.co/validation/v1/banks/${publicKey}`)
        .then(response => response.json())
        .then(data => {
            const bankSelect = document.getElementById('bank');
            data.data.forEach(bank => {
                const option = document.createElement('option');
                option.value = bank.bankCode;
                option.text = bank.bankName;
                bankSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener los bancos:', error);
        });

    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Recoge los datos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const bank = document.getElementById('bank').value;

        // Configura los parámetros de la transacción
        const data = {
            name: name,
            description: 'Pago con PSE',
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
            extra3: '',
            bank: bank  // Código del banco seleccionado
        };

        handler.open(data);
    });
});
