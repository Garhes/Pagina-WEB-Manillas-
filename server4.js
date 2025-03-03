const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const RECAPTCHA_SECRET = 'tu-secret-key';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/confirmacion', async (req, res) => {
    const { x_cod_response, x_extra1, x_transaction_id, 'g-recaptcha-response': recaptchaResponse } = req.body;

    // Verificar reCAPTCHA
    const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${recaptchaResponse}`;
    try {
        const response = await axios.post(recaptchaVerificationUrl);
        if (!response.data.success) {
            console.log('Captcha fallido');
            return res.status(400).send('Captcha fallido');
        }
    } catch (error) {
        console.error('Error verificando captcha:', error);
        return res.status(500).send('Error interno del servidor');
    }

    // Procesar pago
    if (x_cod_response === '1') {
        console.log(`Pago exitoso para el teléfono: ${x_extra1}. Transacción ID: ${x_transaction_id}`);
        res.send('OK');
    } else {
        console.log('Pago fallido');
        res.send('FAIL');
    }
});

app.get('/respuesta', (req, res) => {
    res.send('Gracias por tu compra. Te enviaremos un correo con los detalles.');
});

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));
