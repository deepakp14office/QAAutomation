import {test,expect} from '@playwright/test';
import { shop } from '../pages/shop';


test('Automation of the shop.js file', async({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();

   const scroolTo =  async()=>{
   await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
});
}

   await page.goto('https://shop.qaautomationlabs.com/');

   const shoping = new shop(page);

   await test.step('verify that application open in the correct url', async()=>{
      await expect(page).toHaveURL('https://shop.qaautomationlabs.com/'); 
   })
   
   await test.step('Fill the login creds and click on the login btn', async()=>{
      await shoping.log();
      await expect(page).toHaveURL('https://shop.qaautomationlabs.com/shop.php');
   })

   await test.step("After successfull login Click on the Men Fashion", async()=>{
      await shoping.MenFashaion();
      await expect(page).toHaveURL('https://shop.qaautomationlabs.com/mens-wear.php');
   })

   await test.step('choose the any of the filter from the Filter by area', async()=>{
      // scroolTo();
      await shoping.filterType();
      await expect(page.getByTestId('product-detail-name')).toHaveText('Blue Sport Shoes'); 
   })

   await test.step('click on add to cart button and verify that the product is added', async()=>{
      await shoping.addTocart();
      console.log(await page.getByTestId('header-cart-count').textContent());
      await expect(page.getByTestId('header-cart-count')).toHaveText('1');
      await page.getByTestId('header-cart-count').click();
      await expect(page).toHaveURL(`https://shop.qaautomationlabs.com/cart.php`);
   })

   await test.step('Verify that the correct product is selected and clciked', async()=>{
      await shoping.verify();
      await expect(page).toHaveURL('https://shop.qaautomationlabs.com/checkout.php');
   })

   await test.step("fill the checkput details and click on the continue button", async()=>{
      await shoping.fillDetails();
      await expect(page).toHaveURL('https://shop.qaautomationlabs.com/confirm.php');
   })

   await test.step('After filling all the details and click on contiue the click on Place Order',async()=>{
      await shoping.orderPlace();
      await expect(page).toHaveURL('https://shop.qaautomationlabs.com/thanks.php');
   })

})