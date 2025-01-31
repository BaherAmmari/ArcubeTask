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


