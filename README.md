# Healthcare Services API

This project provides a RESTful API to manage a list of healthcare services. It is built using Node.js, Express, and MongoDB.

## Requirements

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (Community Edition)
- [Postman](https://www.postman.com/downloads/) (optional for API testing)

## Setup Instructions

### 1. Clone the repository

If using GitHub, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/healthcare-services-api.git

Then, navigate into the project folder:


cd healthcare-services-api
2. Install Dependencies
Run the following command to install all the dependencies required for the project. These dependencies are listed in the package.json file.


npm install
3. Start MongoDB
Ensure MongoDB is running on your machine. You can use MongoDB Compass or start MongoDB locally using the following command (if installed):


mongod
If you’re using MongoDB Compass, make sure it is connected to the default MongoDB URL: mongodb://localhost:27017.

4. Run the API
Start the API using Node.js with this command:


npm start
For development mode, which automatically reloads the server when you make changes, use:


npm run dev
The server will run on http://localhost:3000.

5. API Endpoints
Add a new service (POST /api/services)
URL: http://localhost:3000/api/services
Body (JSON):
json
{
  "name": "Service Name",
  "description": "Service Description",
  "price": 100
}
Get all services (GET /api/services)
URL: http://localhost:3000/api/services
Update a service (PUT /api/services/:id)
URL: http://localhost:3000/api/services/{id}
Delete a service (DELETE /api/services/:id)
URL: http://localhost:3000/api/services/{id}
6. Testing the API
You can test the API using Postman, by sending appropriate HTTP requests to the API endpoints above.