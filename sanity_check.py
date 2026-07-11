import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        print("--- A: PAGE LOAD ---")
        await page.goto("https://easyfindprops.com")
        title = await page.title()
        print(f"Page Title: {title}")
        assert "EasyFind Property Solutions" in title
        
        print("--- B: FORM VERIFICATION ---")
        # Hero Form
        await page.fill('input[id="hero-name"]', 'Sanity Test')
        await page.fill('input[id="hero-phone"]', '9999999999')
        await page.select_option('select[id="hero-requirement"]', label='Looking to Rent')
        
        button = page.locator('button:has-text("Get a Call Back")')
        await button.click()
        print("Hero Form Submitted")
        
        success = page.locator('text=Thank you! We\'ll call you shortly.')
        await success.wait_for(state="visible", timeout=5000)
        print("Hero Success Message Visible")

        print("--- C: MODAL & FOOTER INTERACTION ---")
        # Open Modal
        await page.locator('text=View Details').first.click()
        print("Modal Opened")
        
        # Close Modal
        await page.locator('button >> .lucide-x').click()
        print("Modal Closed")
        
        # Scroll to footer
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(1)
        
        # Click Footer Link
        footer_services = page.locator('footer a:has-text("Services")')
        await footer_services.click()
        print("Footer Services Clicked")
        
        # Check if scrolled up
        await asyncio.sleep(1)
        scroll_y = await page.evaluate("window.scrollY")
        print(f"Scroll Y: {scroll_y}")
        assert scroll_y < 5000 # Should have scrolled up to services

        print("--- D: WHATSAPP CHECK ---")
        content = await page.content()
        assert "whatsapp" not in content.lower()
        assert "wa.me" not in content.lower()
        print("No WhatsApp found")

        print("--- ALL CHECKS PASSED ---")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
