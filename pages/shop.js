import userdata from '../data/userdata.json';

export class shop{

    constructor(page){
        this.page=page;
        this.email1 = page.getByPlaceholder('Email');
        this.pass = page.getByPlaceholder('Password');
        this.loginbtn = page.getByRole('button',{name:"Login"});
        this.userName = page.getByTestId('demo-email');
        this.password = page.getByTestId('demo-password');
        this.menFash = page.locator('.offer-text h3').first();
        this.shopNow = page.locator('[data-testid="shop-now-mens-wear"]');
        // this.filter = page.getByLabel('Footwear');
        // this.filter = page.locator('input[data-testid*="footwear"]');
         this.filter = page.locator(' label[for="gender-2"]');
        this.shoeCount = page.locator('.text-center a ');
        // this.addtoCart = page.getByRole('button',{name:"Add to Cart"});
        this.addtoCart = page.locator('[title="Add Blue Sport Shoes to cart"]')
        this.tableText = page.locator('.align-left',{hasText: ' Blue Sport Shoes'});
        this.proceedTocheckout = page.getByRole('link',{name:"Proceed To Checkout"});
        this.name = page.getByPlaceholder('Enter First Name');
        this.lname = page.getByPlaceholder('Enter Last Name');
        this.email = page.getByPlaceholder('example@email.com');
        this.phone = page.getByTestId('checkout-phone-input');
        this.address = page.getByTestId('checkout-address-input');
        this.state = page.getByPlaceholder('Enter State');
        this.city = page.getByPlaceholder('Enter City');
        this.pincode = page.getByPlaceholder('Enter Pin Code');
        this.continue = page.getByTestId('continue-btn');
        this.placeOrder = page.getByRole('link',{name:"Place Order"});
    }
    
    
    async log(){
        const username = await this.userName.textContent();
        const pass = await this.password.textContent();
        console.log(username.replace('Email:', '').trim());
        console.log(pass.replace('Password:', '').trim())
        await this.email1.fill(username.replace('Email:', '').trim()); 
        await this.pass.fill(pass.replace('Password:', '').trim());
        await this.loginbtn.click();
    }

    async MenFashaion(){
        console.log(await this.menFash.textContent());
        await this.shopNow.click();
    }

    async filterType(){
         if(await this.filter.isVisible()){
            await this.filter.click();
         }
        const Count = await this.shoeCount.count();
        let shoeName = 'Blue Sport Shoes';
        for(let i=0;i<Count;i++){
            let shoearray = await this.shoeCount.nth(i).textContent();
            if(shoearray==shoeName){
                await this.shoeCount.nth(i).click();
                break;
            }
        }
        console.log('the shoe is being found and clicked');
    }

    async addTocart(){
         await this.addtoCart.click();
    }

    async verify(){
       console.log(await this.tableText.textContent());
       await this.proceedTocheckout.click();

    }

    async fillDetails(){
        await this.name.fill(userdata.checkOutData.name);
        await this.lname.fill(userdata.checkOutData.lname);
        await this.email.fill(userdata.checkOutData.email);
        await this.phone.fill(userdata.checkOutData.phone);
        await this.address.fill(userdata.checkOutData.address);
        await this.state.fill(userdata.checkOutData.state);
        await this.city.fill(userdata.checkOutData.city);
        await this.pincode.fill(userdata.checkOutData.zipCode);
        await this.continue.click();
    }

    async orderPlace(){
        await this.placeOrder.click();
    }

}