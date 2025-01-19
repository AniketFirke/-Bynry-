# Profile Map App

This is a React application that displays a list of profiles with their photos, descriptions, and locations on a map. Users can search for profiles, view detailed information about a selected profile, and view the profile's location on a map. Additionally, admins can manage profiles by adding, editing, and deleting them.

## Features

* List of profiles with photos, descriptions, and locations
* Search functionality to filter profiles
* Detailed profile view with additional information
* Map integration to visualize profile locations
* Admin panel for managing profiles (add, edit, delete)

## Technologies Used

* React
* React Router DOM
* Mapbox GL for maps
* Google Maps Geocoding API (optional)
  

## Setup Instructions
```bash
1. Clone the repository:

    git clone https://github.com/AniketFirke/-Bynry-

2. Install dependencies:
    cd profile-map-app
    npm install
```
## Project Structure
  ```bash
   src/
    components/
      AdminPanel.js       # Admin panel for profile management
      Loader.js           # Loading spinner component
      MapComponent.js     # Displays the map using Google Maps API
      ProfileCard.js      # Displays individual profile cards
      ProfileList.js      # Displays a list of profiles
      SearchFilter.js     # Search bar for filtering profiles
    pages/
      HomePage.js         # Main page with profile list and admin panel
      ProfileDetails.js   # Page for detailed profile view
    services/
      mockData.js         # Mock data for profiles
      mapService.js       # Service for geocoding addresses
    App.js                # Main app component
  index.css               # Global styles
```
3. Replace YOUR_MAPBOX_ACCESS_TOKEN in src/components/MapComponent.js with your Mapbox access token.

4. (Optional) Replace YOUR_GOOGLE_MAPS_API_KEY in src/services/mapService.js and src/services/GoogleMapComponent.js with your Google Maps API key.
    - "Budget constraints prevent Google Maps API usage."

5. Start the development server:
  ```bash
   npm start
  ```
* Running the Application
    The application will start at http://localhost:3000/.
  
## Screenshots
* Home Page
  
    ![image](https://github.com/user-attachments/assets/54a920b5-ae39-4a7d-886e-6cbbd8982322)

* Admin Page
  
    ![image](https://github.com/user-attachments/assets/b3ca32ab-1271-4bf4-9546-9605e21f3676)
  
* Profile Details Page
  
    ![image](https://github.com/user-attachments/assets/e21b2164-8685-493d-80b2-fbb64c6df4dc)
* Usage
    - Use the search bar to filter profiles by name.
    - Click on a profile card to view its details and location on the map.
    - If you have admin privileges, you can access the admin panel to add, edit, and delete profiles.
 
 
 ## Contact

  For questions or feedback, please contact:
  
  * Name: Aniket Firke
  * Email: firkeaniket621@gmail.com 
  * GitHub: https://github.com/AniketFirke/-

