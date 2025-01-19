Profile Map App

Overview

The Profile Map App is a React-based web application that allows users to:

View a list of user profiles.

Search and filter profiles.

View detailed information about selected profiles, including their locations on an interactive map.

Manage profiles (add, edit, delete) via an Admin Panel.

The app integrates with Mapbox GL and Google Maps API for geocoding and map rendering.

Features

Profile Listing: Displays a list of user profiles with name, description, and photo.

Search and Filter: Search profiles dynamically using a search bar.

Profile Details: View full details of a profile, including a map showing their location.

Map Integration: Displays addresses on a map using Mapbox and Google Maps.

Admin Panel: Add, edit, delete, and sort profiles.

Responsive Design: Fully optimized for desktop and mobile devices.

Installation and Setup

Follow the steps below to run the application on your local machine:

Prerequisites

Ensure the following are installed on your system:

Node.js (v14 or higher)

npm (Node Package Manager)

Step 1: Initialize the Project

Run the following commands to create and set up the React project:

npx create-react-app profile-map-app
cd profile-map-app
npm install react-router-dom mapbox-gl @emotion/react @emotion/styled

Step 2: Directory Structure

Set up the following directory structure in your project:

src/
  components/
    ProfileList.js
    ProfileCard.js
    MapComponent.js
    AdminPanel.js
    SearchFilter.js
  pages/
    HomePage.js
    ProfileDetails.js
  services/
    mockData.js
    mapService.js
  App.js

Step 3: Add Mock Data

Create src/services/mockData.js to provide initial profile data.

Step 4: Develop Components

ProfileCard.js: Displays individual profile information.

ProfileList.js: Lists all profiles using the ProfileCard component.

MapComponent.js: Renders a Mapbox map centered on a specific address.

SearchFilter.js: Provides a search bar for filtering profiles.

AdminPanel.js: Allows administrators to manage profiles (add, edit, delete).

Step 5: Create Pages

HomePage.js: Displays the profile list, search bar, and map.

ProfileDetails.js: Displays detailed profile information and map view.

Step 6: Implement Map Services

Create src/services/mapService.js to geocode addresses using Google Maps API.

Step 7: Configure App Routing

Update src/App.js to include routing for the home page and profile details.

Step 8: Add Styling

Use src/index.css for custom styles and responsiveness.

Step 9: Run the Application

Start the development server:

npm start

The app will be available at http://localhost:3000.

Environment Variables

Replace YOUR_MAPBOX_ACCESS_TOKEN and YOUR_GOOGLE_MAPS_API_KEY in the code with your respective API keys. These keys are required for the map functionalities.

Add .env File (Optional)

You can use an .env file to store your API keys:

REACT_APP_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

Update the code to use environment variables:

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

Features Breakdown

Profile Management

Add profiles with name, photo URL, description, address, and details.

Edit existing profiles using the Admin Panel.

Delete profiles with confirmation prompts.

Map Integration

Displays profile location on a Mapbox or Google Map.

Dynamically updates the map based on the selected profile's address.

Search and Filter

Provides a search bar for filtering profiles by name.

Responsive Design

Optimized for both desktop and mobile screens.

Adjusts grid layouts, font sizes, and map dimensions for smaller screens.

Dependencies

Package

Version

react-router-dom

^6.x

mapbox-gl

^2.x

@emotion/react

^11.x

@emotion/styled

^11.x

@react-google-maps/api

^2.x

Install all dependencies using:

npm install

Folder Structure Overview

src/
  components/             // Reusable components for UI
  pages/                  // Page-level components for routing
  services/               // Data and API-related services
  App.js                  // Main application component
  index.css               // Global styles

Future Improvements

Add user authentication for secure admin panel access.

Implement real-time data fetching from a backend API.

Add pagination for profile lists.

Enhance map features (e.g., multiple markers, directions).

Integrate additional filters (e.g., by location or description).

License

This project is licensed under the MIT License.

Contributing

Pull requests are welcome! For major changes, please open an issue to discuss what you would like to change.

Contact

For questions or support, contact the developer at:

Email: aniketfirke@example.com

GitHub: https://github.com/your-username/profile-map-app

Screenshots

Add screenshots here to visually showcase your application:

Home Page: Display profile list and search bar.

Profile Details: Show detailed profile information and map.

Admin Panel: Add, edit, and delete profiles.

# -Bynry-
