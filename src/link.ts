/// <reference path="navigation.ts" />

class Link{
    private get links() {
        return $('[href="#' + this.target.id + '"]');
    }
    constructor(private target:HTMLElement){
        this.links
            .mouseenter(() => this.links.addClass("hover"))
            .mouseleave(() => this.links.removeClass("hover"))
            .click(this.navigate);
    }
    navigate = () => {
        Navigation.navigateTo(this.target.id);
        $(".active").removeClass("active");
        this.links.addClass("active");
    }
}