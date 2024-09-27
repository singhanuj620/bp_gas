# Find BP

## Web application to find the nearest bp gas station for the user based on the geolocation and applied filters. This is a PWA application that you can use on desktop as well as mobile app

### [Live demo](http://findbp.netlify.com)

## Features

- PWA Support
- Geolocation-based search
- Filter by amenities (e.g., open 24/7, has conveinence store, store serves hot food, accept bp fuel cards)
- Dark Mode
- User-friendly interface
- Bookmark fav gas staion

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/singhanuj620/bp_gas
   ```
2. Navigate to the project directory:
   ```sh
   cd bp_gas
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Add Enviornment file .env:
   - VITE_GOOGLE_MAPS_API_KEY
   - If facing CORS issue
     - on local dev VITE_PROXY_URL=/.netlify/functions/proxy
     - on server deployement VITE_PROXY_URL=https://findbp.netlify.app/.netlify/functions/proxy

## Usage

1. Start the development server:
   ```sh
   netlify dev
   ```
2. Browser will open the local dev

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [singhanuj620@gmail.com](mailto:singhanuj620@gmail.com).
Portfolio [Click here](https://anujsingh.net)
