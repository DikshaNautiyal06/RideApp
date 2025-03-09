# Backend API

## Overview
This is the backend API for a ride-hailing application, providing authentication, user and captain management, ride requests, and map services.

## Installation
### Prerequisites
- Node.js
- npm or yarn
- MongoDB

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure environment variables:
   ```sh
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   API_KEY=your_maps_api_key
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication
- `POST /users/register` - Register a new user
- `POST /users/login` - User login
- `GET /users/profile` - Fetch user profile
- `GET /users/logout` - Logout user

### Captains
- `POST /captains/register` - Register a new captain
- `POST /captains/login` - Captain login
- `GET /captains/profile` - Fetch captain profile
- `GET /captains/logout` - Logout captain

### Rides
- `POST /rides/create` - Create a new ride request
- `GET /rides/get-fare` - Get ride fare estimate

### Map Services
- `GET /maps/get-coordinates` - Get coordinates for an address
- `GET /maps/get-distance-time` - Get distance and travel time
- `GET /maps/get-suggestions` - Get location suggestions

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License
This project is licensed under the MIT License.

