const config = {
    signRecognition: {
        MODEL_ENDPOINT: process.env.SIGN_RECOGNITION_MODEL_ENDPOINT,
        CAPTURE_INFO_TTL: 60,
        CAPTURE_INFO_CHECK: 30,
        NUM_FRAMES: 32,
        PREDICTION_INTERVAL: 8,
        PREDICTION_LABELS: [
            'BUY',
            'DO',
            'EAT',
            'FINE',
            'GO',
            'HAMBURGER',
            'HELLO',
            'HOW',
            'I/ME',
            'LEAVE',
            'LONG',
            'LUNCH',
            'NO',
            'PERFECT',
            'PIZZA',
            'SAME',
            'SINCE',
            'THANK YOU',
            'TIME',
            'TOGETHER',
            'WANT',
            'WATER',
            'WHAT',
            'YES',
            'YOU'
        ],
        NUM_CONSECUTIVE_PREDICTIONS: 4,
        MIN_PREDICTION_CONFIDENCE: 0.9
    }
}

module.exports = config;
