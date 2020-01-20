describe('Chain Locators Demo', function() {
    it('This app should be *', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('3');

        element(by.model('operator')).element(by.css("option:nth-child(4)")).click();

        element(by.id('gobutton')).click();

        console.log("------------");

        element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then( (text)=>{
            console.log(text);
        });

        expect(element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText()).toEqual("15");
    });
});