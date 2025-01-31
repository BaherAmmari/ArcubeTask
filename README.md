# URL Shortener API

## Description
This is a simple URL shortening API that allows you to shorten long URLs and redirect them using a unique shortened identifier.

## Endpoints

### 1. **POST /shorten**
   - **Description**: This endpoint accepts a long URL, generates a shortened version, and returns the shortened URL.
   - **Method**: `POST`
   - **URL**: `http://localhost:5000/shorten`
   - **Request Body**:
     ```json
     {
       "longUrl": "https://www.example.com/long-url"
     }
     ```
   - **Response**:
     - Success:
       ```json
       {
         "shortUrl": "http://localhost:5000/{shortened_id}"
       }
       ```
     - Error (Invalid URL):
       ```json
       {
         "error": "Invalid URL"
       }
       ```
   - **HTTP Status Codes**:
     - `200 OK`: If URL shortening is successful.
     - `400 Bad Request`: If the URL is invalid.
     - `500 Internal Server Error`: If there is an error in the server.

### 2. **GET /{shortened_id}**
   - **Description**: This endpoint redirects the user to the original URL based on the shortened ID provided.
   - **Method**: `GET`
   - **URL**: `http://localhost:5000/{shortened_id}`
   - **Response**:
     - If the mapping exists: The request will be redirected to the original URL.
     - If not found:
       ```json
       {
         "error": "URL not found"
       }
       ```

   - **HTTP Status Codes**:
     - `302 Found`: Redirect to the original URL.
     - `404 Not Found`: If no matching shortened URL exists.
     - `500 Internal Server Error`: If there is an error in the server.


---

## Project Structure

url-shortener/
│── bin/                      
│   ├── www                 # File to start the server
│── public/                 
│   ├── ...                 # Static files
│── routes/                 
│   ├── index.js            # Main routes
│   ├── urls.js             # Routes for URL shortening
│── models/                 
│   ├── Url.js              # URL model
│── config/                 
│   ├── db.js               # MongoDB connection
│── middlewares/
│   ├── validateUrl.js      # Middleware to validate URLs
│── tests/                  
│   ├── Url.test.js         # Test for shortening URL
│   ├── redirect.test.js    # Test for URL redirection
│── .env                    
│   ├── ...                 # Environment variables
│── .env.test               
│   ├── ...                 # Test environment variables
│── app.js                  
│   ├── Main Express configuration
│── package.json            
│   ├── Dependencies and scripts

# URL Shortener Front

## Environment Variables

You need to have the backend API running for the URL shortening feature to work. Make sure you configure your backend API to allow communication from the front-end.

- **Backend URL**: `http://localhost:5000` (Change this if the backend is deployed elsewhere)

## Frontend Overview

### Pages and Components

1. **URLForm**: 
   - This component renders the form that allows users to input the long URL.
   - It validates the URL and sends a request to the backend to shorten it.
   - The form uses Ant Design's `Form`, `Input`, and `Button` components for a modern UI.

2. **SuccessModal**: 
   - This modal component is displayed once the URL is shortened successfully. 
   - It shows the shortened URL and provides a clickable link for users to access the new URL.
   
3. **Context**:
   - The app uses React Context to manage the state of the shortened URL globally across components.

4. **Hooks**:
   - `useShortenUrl`: A custom hook for making the API call to shorten the URL.

### How to Use the Application

1. **Enter a long URL**: 
   - In the input field, type the long URL you want to shorten.

2. **Submit the URL**: 
   - Press the "Shorten URL" button to send the URL to the backend API.

3. **View the shortened URL**: 
   - Once the URL is successfully shortened, a modal will appear with the shortened URL.
   - You can click the link to open the shortened URL in a new tab.

## API Documentation

The frontend communicates with the following API endpoints:

### POST `/shorten`

**Request Body**:
```json
{
  "longUrl": "https://www.example.com"
}
```

## Project Structure

frontend/
├── public/                         # Public files like index.html and favicon
├── src/
│   ├── assets/                     # Static files such as images and styles
│   ├── components/                 # Reusable components (URLForm, SuccessModal, etc.)
│   ├── context/                    # Context for managing global state (e.g., URL context)
│   ├── hooks/                      # Custom React hooks (e.g., useShortenUrl)
│   ├── pages/                      # Pages such as the homepage
│   ├── App.tsx                     # Main entry point of the React application
│   ├── index.tsx                   # ReactDOM rendering
│   └── style/                      # Global CSS styles
├── .env                             # Environment variables (e.g., backend API URL)
├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
└── README.md           

