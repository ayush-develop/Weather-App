![image](https://github.com/user-attachments/assets/cce6c413-bf27-4b9e-a2f9-99904a0fa78a)
# WeatherDashboard
Angular Weather Application

This project is a responsive weather application built with Angular. It allows users to view the current weather, get forecasts, and search for weather information by city. The project uses WeatherAPI.com for fetching weather data and incorporates SCSS, Bootstrap, and Tailwind CSS for styling.
This project was generated with [Angular CLI](https://github.com/ayush-develop/Weather-App.git) version 15.2.11.
## Features
- View current weather information
- Get weather forecasts
- Search for weather by city
- Responsive design for different screen sizes

  ## Architecture

The application is built using Angular's latest version, following a component-based architecture. Key Angular features and patterns used in this project include:

- **Components:** For building reusable UI elements.
- **Services:** For handling API calls and business logic.
- **Modules:** To organize and encapsulate different parts of the application.
- **Routing:** To navigate between different views of the application.
- **HTTP Client:** For making HTTP requests to WeatherAPI.com.
- **SCSS, Bootstrap, and Tailwind CSS:** For styling and responsive design

## Installation

Follow these steps to install the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayush-develop/Weather-App.git
   cd weather-app
 ##  Install Angular CLI:
    npm install -g @angular/cli
    cd weather-dashboard
    npm install @angular/material@angular/flex-layout
## Install project dependencies:
npm install
## Install Bootstrap:
npm install bootstrap
## Include Bootstrap and Tailwind CSS in angular.json:
Add Bootstrap and Tailwind CSS to the styles array in angular.json:
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/tailwindcss/tailwind.css"
]

## Built With
Angular - The web framework used
WeatherAPI.com - API for fetching weather data
SCSS - CSS pre-processor for better styling
Bootstrap - CSS framework for responsive design
Tailwind CSS - Utility-first CSS framework

## Running the Project 
ng serve


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
## License

### Explanation

- **Features:** Briefly describes what the application does.
- **Architecture:** Explains the key Angular features used.
- **Prerequisites:** Lists the software requirements.
- **Installation:** Provides step-by-step instructions for setting up the project.
- **Running the Project:** Explains how to start the project locally.
- **Built With:** Lists the main technologies and frameworks used.
- **Contributing:** Provides instructions for contributing to the project.
- **License:** Mentions the project's license.

This `README.md` should help anyone set up, run, and understand your Angular weather application.
