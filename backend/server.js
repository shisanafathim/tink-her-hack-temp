const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint for sending SOS via Fast2SMS
app.post('/send-sos', async (req, res) => {
    const { name, emergencyContact, location } = req.body;

    console.log('🚨 SOS ALERT RECEIVED!');
    console.log(`👤 Name: ${name}`);
    console.log(`📞 Emergency Contact: ${emergencyContact}`);
    console.log(`📍 Location: ${location}`);

    // Fast2SMS API Key from Environment Variables
    const API_KEY = process.env.FAST2SMS_API_KEY;

    if (!API_KEY) {
        console.error('❌ FAST2SMS_API_KEY is missing in .env');
        return res.status(500).json({
            success: false,
            message: 'SMS Service configuration error. (API Key missing)'
        });
    }

    try {
        const message = `🚨 SOS ALERT FROM ${name}!\nLocation: ${location}\nHELP IMMEDIATELY.`;

        // Clean contact number (should be 10 digits for Fast2SMS)
        const digitsOnly = emergencyContact.replace(/\D/g, '').slice(-10);

        const response = await axios.post('https://www.fast2sms.com/dev/bulkV2', {
            route: 'q',
            message: message,
            language: 'english',
            flash: 0,
            numbers: digitsOnly,
        }, {
            headers: {
                'authorization': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (response.data.return) {
            console.log(`✅ SMS sent successfully to ${digitsOnly}`);

            // Send to personal number if configured
            const personalNum = process.env.PERSONAL_CONTACT;
            if (personalNum) {
                const personalDigits = personalNum.replace(/\D/g, '').slice(-10);
                if (personalDigits !== digitsOnly) { // Avoid duplicate if they are the same
                    await axios.post('https://www.fast2sms.com/dev/bulkV2', {
                        route: 'q',
                        message: `🚨 SECONDARY ALERT: ${message}`,
                        language: 'english',
                        flash: 0,
                        numbers: personalDigits,
                    }, {
                        headers: {
                            'authorization': API_KEY,
                            'Content-Type': 'application/json'
                        }
                    }).then(() => console.log(`✅ SMS also sent to personal number: ${personalDigits}`))
                        .catch(e => console.error('❌ Failed to send to personal number:', e.message));
                }
            }

            res.status(200).json({
                success: true,
                message: 'SOS Alert sent successfully via Fast2SMS.',
                request_id: response.data.request_id
            });
        } else {
            console.error('❌ Fast2SMS error:', response.data.message);
            res.status(400).json({
                success: false,
                message: response.data.message || 'Fast2SMS failed to send.'
            });
        }

    } catch (error) {
        console.error('❌ Error calling Fast2SMS API:', error.response?.data || error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to send SMS due to server error.',
            error: error.message
        });
    }
});

app.get('/', (req, res) => {
    res.send('SafeZone backend is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
