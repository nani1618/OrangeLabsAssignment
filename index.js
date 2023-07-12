const puppeteer = require('puppeteer');

(async () => {
  // Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: false, // Run in non-headless mode for visibility
    defaultViewport: null, // Use the default viewport size
    slowMo: 50, // Slow down the automation actions by 50ms
  });
  //Declaring required variables
  const inputFieldSelector = 'main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > div > input'
  const firstButton = 'main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button';
  const secondButton = 'main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(3) > div.css-1k491an > button';
  const page = await browser.newPage();
  
  
  //Navigate to URL
  await page.goto('https://swap.defillama.com/');

  // Type 'Arbitrum One' in the input field
  await page.type('#react-select-2-input', 'Arbitrum One');
  await page.keyboard.press('Enter');

  // Click on the input field and enter '12'
  await page.click(inputFieldSelector);
  await page.keyboard.press('Backspace');
  await page.keyboard.press('Backspace');
  await page.type(inputFieldSelector, '12');

  // Click to choose Selling Currency
  await page.click(firstButton);

  // Wait for the dialog box to appear
  await page.waitForSelector('div.chakra-portal > div > div.chakra-modal__content-container > section');

  // Type 'Wrapped BTC' in the input field
  await page.type('div.chakra-portal > div > div.chakra-modal__content-container > section > div > input', 'Wrapped BTC');
  
  // Add a delay of 2 seconds
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click on the desired element in the list
  await page.click('div.chakra-portal > div > div.chakra-modal__content-container > section > div.List > div > div:nth-child(1)');

  // Click to choose Buying Currency
  await page.click(secondButton);

  // Wait for the dialog box to appear
  await page.waitForSelector('div.chakra-portal > div > div.chakra-modal__content-container > section');

  // Type 'USD Coin' in the input field
  await page.type('div.chakra-portal > div > div.chakra-modal__content-container > section > div > input', 'USD Coin');

  // Add a delay of 2 seconds
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Select the desired option in the list
  await page.click('div.chakra-portal > div > div.chakra-modal__content-container > section > div.List > div > div:nth-child(2) > div');

  // Wait for a specific selector to appear
  await page.waitForSelector('main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-2.fcGAPg > div');

  // Add a delay of 7 seconds
  await new Promise(resolve => setTimeout(resolve, 7000));

  // Click on a specific element
  await page.click('main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-2.fcGAPg > div:nth-child(5)');

  //End of the program
})();