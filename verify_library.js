const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const serverPath = 'file://' + path.resolve('index.html');
  await page.goto(serverPath);

  // Open library
  await page.click('#btnLib');
  await page.waitForTimeout(500);

  // Check if ihkCombined is visible
  const libText = await page.textContent('#libList');
  console.log('Library items:', libText);

  if (libText.includes('IHK Combined Topics') || libText.includes('IHK Gesamtthemen')) {
    console.log('SUCCESS: Library item found');
  } else {
    console.log('FAILURE: Library item NOT found');
    process.exit(1);
  }

  // Import it
  const libLinks = await page.$$('.lib-item a');
  for (const link of libLinks) {
      const text = await link.textContent();
      if (text.includes('IHK Combined Topics') || text.includes('IHK Gesamtthemen')) {
          await link.click();
          break;
      }
  }

  await page.waitForTimeout(1000);

  // Check topics
  const topics = await page.textContent('#topicSelect');
  console.log('Topics after import:', topics);

  const screenshotPath = 'final_library_check.png';
  await page.screenshot({ path: screenshotPath });
  console.log(`Screenshot saved to ${screenshotPath}`);

  await browser.close();
})();
