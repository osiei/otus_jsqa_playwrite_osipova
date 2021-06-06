const CategoryPage = function () {
    const paginationButton = '.pagination li:nth-child(4) > a';
    const checkAllButton = 'table > thead > tr > td.text-center > input[type=checkbox]';
    const checkBoxElement = '#form-category > div > table > tbody > tr:nth-child(6) > td.text-center > input[type=checkbox]';
    

    this.nextPageClick = async function (page) {
        await page.click(paginationButton);
    };

    this.checkAllClick = async function (page) {
        await page.click(checkAllButton);
    };

    this.checkBoxTrue = async function (page) {
        const checkBoxChoose = await page.isChecked(checkBoxElement);
        return checkBoxChoose;
    };

}
export {CategoryPage};