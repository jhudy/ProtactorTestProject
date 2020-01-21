describe('Alerts Demo', function () {
    it('Should works with non angular pages', function () {

        browser.waitForAngularEnabled(false);
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
        element(by.id("alertbtn")).click();

        browser.switchTo().alert().accept().then(function () {
            browser.sleep(5000);
        })
    })
})