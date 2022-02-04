import { browser, element, by, By, $, $$, ExpectedConditions, Browser } from 'protractor';
import { async } from "q";

let EC = ExpectedConditions;
let timeout = 10000;

describe ('Chilli Piper Test Assesment', function() {

    it('Navigate to Gmail URL', async () => {
        
        await browser.waitForAngularEnabled(false);
        await browser.get("https://www.gmail.com")
        await browser.manage().window().maximize()

        //type in Usename
        await browser.wait(EC.visibilityOf(element(by.id("identifierId"))), timeout, "No items found");
        await element(by.css("input[type='email']")).sendKeys("chilliPiperusertest@gmail.com")

        //click on Next
        await element(by.id("identifierNext")).click()

        //type in Password
        await browser.waitForAngularEnabled(false);
        await browser.wait(EC.visibilityOf(element(by.id("password"))), timeout, "No items found");
        await browser.sleep(2000)
        await element(by.css("input[type='password']")).sendKeys("Ch1ll1test")

        //click on Next
        await element(by.id("passwordNext")).click()

        //verifies Login and page is correct
        await browser.wait(element(by.css('div[class="OS"]')).isPresent(), 10000, 'timeout');

    })

    it('Send email', async () => {

        await browser.wait(EC.visibilityOf(element(by.css("div[role='button"))), timeout, "No items found");
        
        //Click on compose email
        await element(by.cssContainingText("div[role='button']", "Compose")).click()
        expect(element(by.cssContainingText("div[class='aYF']", "New Message")))
        await browser.sleep(1000)
       
        //Add a recipient
        await browser.wait(EC.visibilityOf(element(by.css("textarea[aria-autocomplete='list']"))), timeout, "No items found");
        await element(by.css("textarea[aria-autocomplete='list']")).sendKeys("chilliPiperusertest@gmail.com")
        await browser.sleep(1000)

        //Add a subject
        await browser.wait(EC.visibilityOf(element(by.css("input[name='subjectbox']"))), timeout, "No items found");
        await element(by.css("input[name='subjectbox']")).sendKeys("testChili")
        await browser.sleep(1000)
        
        //Create message
        await browser.wait(EC.visibilityOf(element(by.css("div[aria-label='Message Body']"))), timeout, "No items found");
        await element(by.css("div[aria-label='Message Body']")).sendKeys("This is a test assesment")
        await browser.sleep(1000)

        //Click Send
        await browser.wait(EC.visibilityOf(element(by.css("div[class='dC']"))), timeout, "No items found");
        await element(by.css("div[class='dC']")).click()
        await browser.sleep(2000)

        //Validate message arrived (Received email)
        await element(by.linkText("Sent")).click()
        
    })

    it('Schedule email sent', async () => {

        //select email from the inbox
        await element(by.linkText("Inbox")).click()
        
        browser.sleep(2000)
        //await browser.wait(EC.visibilityOf(element(by.css("tr[jsmodel='nXDxbd']"))), timeout, "No items found");
        let searchMails = element.all(by.css("tr[jsmodel='nXDxbd']"));
        searchMails.count().then((numberOfItems) => Math.floor(Math.random() * numberOfItems)).then(function(randomNumber) {
            searchMails.get(randomNumber).click();
        })
        browser.sleep(2000)

        //click snooze
        await element(by.css("div[data-tooltip='Snooze']")).click()
        browser.sleep(2000)

        //select day/time
        await element(by.linkText("Tomorrow")).click();

        //Click Snoozed option from the main menu panel
        await element(by.css("a[aria-label='Snoozed']")).click();

        //Click on email to open it
        await element(by.css("tr[jsmodel='nXDxbd']")).click();
        
        //Validate
        expect(element(by.xpath("span[contains(text(),'Snoozed until')]")))

    })


    it('Search email', async () => {
        
        //Add a search ('test')
        await browser.wait(EC.visibilityOf(element(by.css("input[placeholder='Search mail']"))), timeout, "No items found");
        await element(by.css("input[placeholder='Search mail']")).sendKeys("test")
                
        //Click on the results
        await element(by.css("button[aria-label='Search mail']")).click()

    })



})