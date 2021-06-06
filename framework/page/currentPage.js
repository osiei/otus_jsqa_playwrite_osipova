const CurrentPage = function () {

    const exitButton = '[class="nav navbar-nav navbar-right"] > li:nth-child(2) > a';

    this.exUser = async function (page) {
        await page.click(exitButton);
    };

}
export {CurrentPage};