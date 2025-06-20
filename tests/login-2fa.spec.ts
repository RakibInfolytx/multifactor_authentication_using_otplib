import { test, expect } from '@playwright/test';
import { authenticator } from 'otplib';

test('2FA Login flow for Unqork app', async ({ page }) => {
test.slow();
  const secret = 'HRLFIVLOIRUTU3DIIRDSQ52EKY4VOWDIPBEDSIKTHQ5GSZ3MOMTA';

  await page.goto('http://testsite.com');

  await page.getByRole('textbox', { name: 'E-mail Address' }).fill('user@email.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('radio', { name: /Text code to/i }).check();
  await page.getByRole('button', { name: 'Send my code' }).click();

  const otpInput = page.locator('input[name="authyCode"]');
  await otpInput.first().waitFor({ state: 'visible' });

  const otp = authenticator.generate(secret);
  console.log('Generated OTP:', otp);

  await otpInput.first().fill(otp);
  await page.getByRole('button', { name: /Verify code/i }).click();

  await expect(page).toHaveURL(/dashboard|home/i);
});
