# Netflix-GPT

Welcome to the Netflix-GPT frontend project! This web application emulates the Netflix user interface and includes features like user authentication, browsing movies, watching trailers, searching for movies, and utilizing the OpenAI GPT-3 model for movie suggestions. Below are the key features and setup instructions for this project.

## Features

### Authentication

- Login and Sign Up forms for user registration and authentication.
- Form validation to ensure the correctness of user input.
- Firebase authentication for user account management.

### Routing

- App routing to navigate between different sections of the application.

### Movie Data

- Fetching data from the TMDB API, including now-playing movies.
- Storing movie data in a Redux store for efficient management.

### Trailer Playback

- Playing movie trailers in the background with autoplay and mute.
- Utilizing the YouTube API for embedded video playback.

### User Profile

- Updating user profile information, including display name and profile picture.
- Handling and fixing bugs related to user account management.

### Recommendations

- Providing movie suggestions using the OpenAI GPT-3 model.
- Reusing components and optimizing performance.

### Responsive Design

- Ensuring the website is responsive and looks great on different devices.

## Project Setup

Before starting the project, please follow these steps:

1. Create a `.env` file in the project root directory.

2. Add your TMDB API key and OpenAI API key to the `.env` file.

```plaintext
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

3. Make sure to add the `.env` file to your `.gitignore` to keep your API keys private.

## Project Structure

The project is structured as follows:

- `src` directory: Contains the main source code.
  - `components`: Includes various React components.
  - `hooks`: Custom React hooks for fetching movie data and using the GPT-3 model.
  - `redux`: Redux store setup and slices.
  - `services`: Firebase setup and API service functions.
  - `styles`: CSS and styling for the application.
  - `App.js`: Main application component and routing.
  - `index.js`: Entry point of the application.

## How to Run the Project

To run the project, follow these steps:

1. Clone the repository: `git clone https://github.com/mounika-025/Netflix-GPT.git`

2. Navigate to the project directory: `cd Netflix-GPT`

3. Install dependencies: `npm install`

4. Start the development server: `npm start`

The application will open in your default web browser.

## Contributing

We welcome contributions to this project. If you have any suggestions, bug fixes, or new features to add, please create a pull request. Make sure to follow the project's coding style and guidelines.

Feel free to reach out to the project maintainers for any questions or assistance.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Enjoy building your Netflix-GPT frontend project! If you have any questions or need further assistance, please don't hesitate to contact us.
