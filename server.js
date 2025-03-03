const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint de confirmación de pago
app.post('/confirmacion', (req, res) => {
    const { x_cod_response, x_extra1, x_transaction_id } = req.body;
    
    if (x_cod_response === '1') {
        console.log(`Pago exitoso para el teléfono: ${x_extra1}. Transacción ID: ${x_transaction_id}`);
        res.send('OK');
    } else {
        console.log('Pago fallido');
        res.send('FAIL');
    }
});

// Endpoint de respuesta de pago
app.get('/respuesta', (req, res) => {
    res.send('Gracias por tu compra. Te enviaremos un correo con los detalles.');
});

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));

