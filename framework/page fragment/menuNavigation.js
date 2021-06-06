const MenuFragment = function () {

    const systemMenu = '#menu-system';
    const localMenu = "#collapse42 > li:nth-child(2) > a";
    const languageMenu = '#collapse43 > li:nth-child(2)';
    const catalogMenu = '#menu-catalog';
    const categoryMenu = '#collapse1 > li:nth-child(1) > a';
    
    this.openMenuSystem = async function (page) {
        await page.click(systemMenu);
    };

    this.openMenuLocalization = async function (page) {
        await page.click(localMenu);
    };

    this.openMenuLanguages = async function (page) {
        await page.click(languageMenu);
    };

    this.openMenuCatalog = async function (page) {
        await page.click(catalogMenu);
    };

    this.openMenuCategory = async function (page) {
        await page.click(categoryMenu);
    };
    
}
export {MenuFragment};