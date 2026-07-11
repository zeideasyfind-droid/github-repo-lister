import asyncio
import time
import json
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Enable tracing
        context = await browser.new_context()
        await context.tracing.start(screenshots=True, snapshots=True, sources=True)
        page = await context.new_page()
        
        url = "https://easyfindprops.com"
        print(f"Navigating to {url}...")
        
        # Monitor for page unresponsiveness and console errors
        page.on("console", lambda msg: print(f"CONSOLE [{msg.type}]: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"PAGE ERROR: {exc}"))
        
        try:
            await page.goto(url, wait_until="networkidle", timeout=60000)
            print("Page loaded.")
            
            # Stress test: Rapidly focus and blur inputs
            print("Stress testing: Rapidly focusing/blurring inputs...")
            name_input = page.locator('input[id="hero-name"]')
            phone_input = page.locator('input[id="hero-phone"]')
            
            for i in range(20):
                await name_input.focus()
                await asyncio.sleep(0.02)
                await phone_input.focus()
                await asyncio.sleep(0.02)
                if i % 5 == 0:
                    print(f"Iteration {i}...")
            
            # Stress test: Rapidly type into fields
            print("Stress testing: Rapidly typing...")
            await name_input.fill("A" * 100)
            await phone_input.fill("1234567890")
            
            # Stress test: Rapidly click dropdown
            print("Stress testing: Rapidly clicking dropdown...")
            dropdown = page.locator('select[id="hero-requirement"]')
            for _ in range(10):
                await dropdown.click()
                await asyncio.sleep(0.02)
            
            # Stress test: Rapidly scroll
            print("Stress testing: Rapidly scrolling...")
            for _ in range(10):
                await page.evaluate("window.scrollBy(0, 100)")
                await asyncio.sleep(0.01)
                await page.evaluate("window.scrollBy(0, -100)")
                await asyncio.sleep(0.01)
            
            print("Test completed successfully (no freeze detected by Playwright).")
        except Exception as e:
            print(f"ISSUE DETECTED: {e}")
        finally:
            await context.tracing.stop(path="trace.zip")
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
