class PageObject{
    url = '/login';

    visit(url = this.url) {
        cy.visit(url);
    }
}

export default PageObject;
