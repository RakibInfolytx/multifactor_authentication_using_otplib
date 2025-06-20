## Playwright with JavaScript and Jest
This an automation script to handle two-factor authentication (2FA) using Playwright with TypeScript..

Below is the full script, including:

  - Navigate to login
  - Input email and password
  - Click login button
  - Select option for mobile (if needed)
  - Click “Send my code”
  - Generate OTP via otplib
  - Enter OTP
  - Click “Verify code”

## Pre-requisites

- [NodeJs](https://nodejs.org/en/)
- Playwright
- Typescript

## How Run

- Clone the repository or download 
- Install npm 
- Install playwright if not installed by default [ ]
- Install otplib [npm install -D @playwright/test otplib]
- Replace secret with your Authy TOTP 
- Run npx playwright test
