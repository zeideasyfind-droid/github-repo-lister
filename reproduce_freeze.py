import asyncio
import time
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()
        
        url = "https://easyfindprops.com"
        print(f"Navigating to {url}...")
        await page.goto(url)
        
        # Monitor for page unresponsiveness
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
        
        async def stress_test_form(form_id_prefix):
            print(f"--- Stress testing form: {form_id_prefix} ---")
            name_input = page.locator(f'input[id="{form_id_prefix}-name"]') if form_id_prefix == "hero" else page.locator('input[placeholder="Name"]')
            phone_input = page.locator(f'input[id="{form_id_prefix}-phone"]') if form_id_prefix == "hero" else page.locator('input[placeholder="Phone Number"]')
            
            # 1. Rapidly click inputs
            print("Rapidly clicking inputs...")
            for _ in range(10):
                await name_input.click()
                await asyncio.sleep(0.05)
                await phone_input.click()
                await asyncio.sleep(0.05)
            
            # 2. Type into fields
            print("Typing into fields...")
            await name_input.fill("Stress Test User")
            await phone_input.fill("9999999999")
            
            # 3. Rapidly click submit
            submit_btn = page.locator('button:has-text("Get a Call Back")') if form_id_prefix == "hero" else page.locator('button:has-text("Submit Requirement")')
            print("Rapidly clicking submit...")
            start_time = time.time()
            for _ in range(10):
                try:
                    await submit_btn.click(timeout=1000)
                except Exception as e:
                    print(f"Submit click failed/timed out: {e}")
                
            duration = time.time() - start_time
            print(f"Submission clicks took {duration:.2f} seconds")
            
            # 4. Scroll during interaction
            print("Scrolling while interacting...")
            for _ in range(5):
                await page.mouse.wheel(0, 500)
                await asyncio.sleep(0.1)
                await page.mouse.wheel(0, -500)
                await asyncio.sleep(0.1)

        try:
            # Test Hero Form
            await stress_test_form("hero")
            
            # Scroll to bottom form
            print("Scrolling to bottom form...")
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await asyncio.sleep(1)
            
            # Test Bottom Form
            await stress_test_form("bottom")
            
            print("Test completed without total crash detected in script.")
        except Exception as e:
            print(f"CRASH DETECTED: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
