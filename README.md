# Sign2Sign Backend

## Project Config
Before running the backend app, create a .env file inside the root folder with the following config:
```
# Replace config values as needed
DB_CONNECTION_STRING=<DB_CONNECTION_STRING>
SIGN_RECOGNITION_MODEL_ENDPOINT=<SIGN_RECOGNITION_MODEL_ENDPOINT>
```

## Running the Backend Server

Run `npm start` in root directory

Access the API from `http://localhost:8000`

Access the sign recognition API from `ws://localhost:8000/signRecognition`
