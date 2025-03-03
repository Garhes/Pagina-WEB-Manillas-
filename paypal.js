paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00'  // Monto de la transacción
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transacción completada por ' + details.payer.name.given_name);
            // Puedes enviar los detalles de la transacción a tu servidor para procesamiento adicional si es necesario
        });
    },
    onError: function(err) {
        document.getElementById('payment-errors').textContent = 'Ocurrió un error con el pago: ' + err;
    }
}).render('#paypal-button-container');
