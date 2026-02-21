const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock endpoint for sending SOS
app.post('/send-sos', (req, res) => {
    const { name, emergencyContact, location } = req.body;

    console.log('🚨 SOS ALERT RECEIVED!');
    console.log(`👤 Name: ${name}`);
    console.log(`📞 Emergency Contact: ${emergencyContact}`);
    console.log(`📍 Location: ${location}`);

    // Here you would integrate with an SMS service like Fast2SMS
    // For now, we'll simulate a successful send

    setTimeout(() => {
        console.log(`✅ SMS sent to ${emergencyContact} via Mock Service`);
        res.status(200).json({
            success: true,
            message: 'SOS Alert sent successfully to emergency contact.',
            details: {
                contact: emergencyContact,
                timestamp: new Date().toISOString()
            }
        });
    }, 1000);
});

app.get('/', (req, res) => {
    res.send('SafeZone backend is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
