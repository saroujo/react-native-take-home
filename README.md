<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/FreedomForeverSolar/sales-app">
    <img src="https://avatars.githubusercontent.com/u/40005250?s=200&v=4" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">React Native Challenge</h2>

  <p align="center">
    React Native App Challenge by <b>Freedom Forever</b>
  </p>

  <h3 align="center">Welcome and thank you for taking the time to complete the Freedom Forever take-home challenge for our Senior Mobile Developer position.</h3>
  <p align="center"><i>The goal, designs, and requirements are listed below. Clone this repo to get started.</i></p>
</p>
</br>
</br>

## Goal

The goal of this project is to create a simple notes app thats connected to a pre-built backend.

As a user I want to be able to see my list of notes, add new notes, and update any existing notes so that I can keep track of whats most important to me.

### Requirements:

<i>Follow the designs and UX to the best of your ability</i><br>
[Click here to link to the Figma Design File](https://www.figma.com/file/IIcgzkiI9bqXnICAV0th7V/React-Native-Take-Home?node-id=20%3A1156&t=xlTnu3m3sDWUD141-1)

1. Main screen should be a list of notes (returned from the backend)
2. Button to add a new note
   - This should navigate to a new screen to handle the form
   - Saving should make a request to the backend
3. Tapping on an existing note should prefill the form and allow you to update the note
   - The same form should be used here

### Design Preview:
![Designs](designs.png?raw=true "Designs")

### Technical Notes:

- Download the supplied [Postman Collection](MobileTakeHome.postman_collection.json) and import to test the endpoint routes.
- Make use of [React Hooks](https://reactjs.org/docs/hooks-intro.html) for state management
- Demonstrate knowledge of component modularization
- Create components as you feel is best suited for your solution
- Try to avoid any build and linting issues

### Bonus:

- Use the [skeleton pattern](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a) for loading states
- Make it responsive
- Add unit tests

</br>

## Getting Started

To get a local copy up and running follow the steps below:

### Environment Requirements

Follow the React Native Guide for React Native CLI Quickstart: [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

### Resources

Checkout these resources to help get ahead on implementation.

- [react-native-ios-kit](https://callstack.github.io/react-native-ios-kit/)
- [react-navigation](https://reactnavigation.org/)
- [axios](https://axios-http.com/docs/intro)
