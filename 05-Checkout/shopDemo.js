describe('Shop Demo', function () {

    function selectItem(itemText){
        element.all(by.tagName("app-card")).each(function (item) {
            item.element(by.css("h4 a")).getText().then(function (text) {
                if (text==itemText){
                    item.element(By.css("button[class*='btn-info']")).click();
                }
            })
        })
    }

    it('Should Checkout 2 items', function () {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.linkText("Shop")).click();
        selectItem("iphone X");
        selectItem("Samsung Note 8");

        element(by.partialLinkText("Checkout")).getText().then(function (text) {
            console.log(text);
            expect(text).toContain(" 2 ");
        })

    });
});