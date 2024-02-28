/*Create a JSON file for Mock Data:

Create a JSON file (e.g., users.json) that contains mock user and admin data.
Include fields such as username, password, and role (to distinguish between users and admins).
Set Up State in Login Component:

Create a React component (e.g., Login) for the login functionality.
Set up state variables to store the username, password, and role entered by the user.
Fetch Mock Data from JSON File:

Use fetch or any other HTTP client to fetch mock data from the JSON file within the Login component.
Parse the JSON response and store it in the component's state.
Handle User Input:

Implement functions to handle changes in the username and password input fields.
Update the corresponding state variables (username and password) as the user types.
Handle Login Button Click:

Implement a function to handle the login button click event.
Validate the username and password entered by the user against the mock data from the JSON file.
If the credentials are valid, set the user's role in the component's state.
Render User Interface:

Render input fields for username and password.
Render a login button.
Optionally, render additional elements based on the user's role (e.g., different UI components for users and admins).
Display Error Messages:

Display error messages if the username or password is incorrect.
Optionally, display a loading indicator while fetching mock data from the JSON file.
Redirect After Successful Login:

Implement logic to redirect the user to different pages based on their role after successful login (e.g., to a user dashboard or an admin dashboard).*/