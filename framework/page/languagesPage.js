const LanguagePage = function () {
    const pageTitle = 'head > title';
    const addLanguageButton = '.pull-right [class="btn btn-primary"]';
    const saveLanguageButton = '.pull-right > button';
    const alertError='[class="alert alert-danger alert-dismissible"]';

    this.getPageTitle = async function (page) {
        const pageName = await page.textContent(pageTitle);
        return pageName;
    };

    this.createLanguage = async function (page) {
        await page.click(addLanguageButton);
        await page.click(saveLanguageButton);
    };

    this.checkAlert = async function (page) {
        const alertVisible = await page.isVisible(alertError);
        return alertVisible;
    };
}
export {LanguagePage};