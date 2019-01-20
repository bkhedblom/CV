class Navigation{
    public static readonly summaryPage = "summary";
    private static currentPage:string;

    public static navigateTo(page:string):void{
        if(this.currentPage){
            $(this.currentPage).hide();
        }
        this.currentPage = '#' + page;
        $(this.currentPage).show();
        $(".timeline").toggleClass("show-all", page == Navigation.summaryPage);
    }
}