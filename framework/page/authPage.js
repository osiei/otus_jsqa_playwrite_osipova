const AuthPage = function () {

    const pageTitle = 'head > title';
    const authForm = "[class='panel panel-default']";
    const userLogin = '#user-profile';
    const usernameField = '#input-username';
    const passwordField = '#input-password';
    const authButton ='[class="btn btn-primary"]';

    this.login = async function (page) {
        await page.fill(usernameField, 'demo');
        await page.fill(passwordField, 'demo');
        await page.click(authButton);
    };

    this.getPageTitle = async function (page) {
        const pageName = await page.textContent(pageTitle);
        return pageName;
    };
    this.getLogin = async function (page) {
        const userLoginText = await page.getAttribute(userLogin, 'alt');
        return userLoginText;
    };
    this.checkVisibleAuthForm = async function (page) {
        const checkAuthForm = await page.isVisible(authForm);
        return checkAuthForm;
    };
}
export {AuthPage};