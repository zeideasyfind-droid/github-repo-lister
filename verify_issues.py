import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        print("--- Testing Problem 1: Form Freeze ---")
        await page.goto("https://easyfindprops.com")
        
        # Fill Hero Form
        await page.fill('input[name="name"]', 'Test User')
        await page.fill('input[placeholder="10-digit mobile"]', '9876543210')
        await page.select_option('select', label='Looking to Rent')
        
        print("Clicking 'Get a Call Back' 5 times rapidly...")
        button = page.locator('button:has-text("Get a Call Back")')
        for _ in range(5):
            await button.click()
            await asyncio.sleep(0.1)
        
        # Check if button is disabled and if success message appeared
        is_disabled = await button.is_disabled()
        print(f"Button disabled: {is_disabled}")
        
        success_msg = page.locator('text=Thank you! We\'ll call you shortly.')
        is_visible = await success_msg.is_visible()
        print(f"Success message visible: {is_visible}")
        
        print("\n--- Testing Problem 2: Footer Links ---")
        # Scroll to footer
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(1)
        
        services_link = page.locator('footer a:has-text("Services")')
        print("Clicking 'Services' in footer...")
        await services_link.click()
        await asyncio.sleep(1)
        
        # Check scroll position
        scroll_pos = await page.evaluate("window.scrollY")
        print(f"Scroll position after clicking footer link: {scroll_pos}")
        
        print("\nTesting Modal Backdrop Bug...")
        # Open a service modal
        view_details = page.locator('text=View Details').first
        await view_details.click()
        await asyncio.sleep(1)
        
        # Close modal (assuming there's a close button or clicking backdrop)
        # For now, let's just click the backdrop or an 'X' if we can find it
        close_button = page.locator('button:has-text("×"), [aria-label="Close"]')
        if await close_button.count() > 0:
            await close_button.first.click()
        else:
            # Click at some coordinate likely to be backdrop
            await page.mouse.click(10, 10)
        
        await asyncio.sleep(1)
        
        # Try footer link again
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(1)
        print("Clicking 'Services' in footer after closing modal...")
        try:
            await services_link.click(timeout=3000)
            print("Footer link clicked successfully after modal close.")
        except Exception as e:
            print(f"Footer link click failed after modal close: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
