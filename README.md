Live Url: https://kyle-barry-apps.github.io/interactive-credit-card-form

# Interactive credit card form with validation

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw)

## Overview

This is a component for credit card validation written in HTML, CSS and vanilla JS. Validation was the bulk of the work. Each field has a separate validation function to make it more robust. I took into account a number of factors including length, special characters, absence, digits, and others, but there is always more you can add. I'm happy with the result, specifically with my solution for formatting the card number input dynamically with consideration of the user hitting space or backspace (formatCardNumber function in main.js with plenty of comments).

The submit button is disabled until every field is completed. I elected not to use the 'required' attribute on the html elements because I preferred not to have the browser use those tooltips (I don't like how it looks or functions). Instead, I check the form continually to see if all fields are populated, and if so enable the submit button.

I learned a ton in the process of building this! Validation is a very useful skill and can be a challenge.

### Screenshot

![](./screenshots/desktop-view.png)
![](./screenshots/mobile-view.png)
![](./screenshots/completed-form-no-errors.png)
![](./screenshots/completed-form-with-errors.png)
![](./screenshots/complete-state-desktop.png)
![](./screenshots/complete-state-mobile.png)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
