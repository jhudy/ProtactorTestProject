describe('Forms Angular Demo', function () {
    it('Should works with forms', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name("name")).sendKeys("Judith");
        element(by.css("input[name='email']")).sendKeys("jhudy@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("Password1");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.name("bday")).sendKeys("11112000");
        element(by.buttonText("Submit")).click().then(function() {
            element(by.css("div[class*='success']")).getText().then((text)=>{
                expect(text).toContain("Success");
            })
        })
    });
});