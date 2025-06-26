import { test, expect } from '@playwright/test';

test('Check that user navigation triggers the correct URL change on all major browsers.', async ({ page }) => {
    // Navigate to login page ...
    await page.goto('https://example.com/login');

    // Simulating sample login flow ...
    await page.getByText('Login ID').click();
    await page.getByRole('textbox', { name: 'Login ID' }).fill('user-id-placeholder');
    await page.getByRole('button', { name: 'Continue' }).click();
    
    await page.getByText('Password').click();
    await page.getByRole('textbox', { name: 'Password' }).fill('your-password');
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    await page.waitForTimeout(2000); // Wait for login transition ...

    // Storing initial URL ...
    const initialUrl = page.url();

    // Simulating navigation to another section ...
    await page.locator('.menu-button').click();
    await page.getByRole('link', { name: 'Dashboard' }).click();

    // Wait for URL to change ...
    await page.waitForURL('**/dashboard');

    // Assert that the locator/heading on new page is visible ...
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // Storing new URL ...
    const newUrl = page.url();

    // Validating the URL change ...
    expect(newUrl).not.toBe(initialUrl);
    expect(newUrl).toContain('/dashboard');
});