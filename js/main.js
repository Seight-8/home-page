jQuery(function($){
    $("#phone_1").mask("+7 (999) 999-99-99");
    $("#phone_2").mask("+7 (999) 999-99-99");

 });

function download_more_questions() {
    past_blocks.setAttribute("style", "display: block");
    btn_questions_hour.setAttribute("style", "display: none");
};

function download_more_popular_articles_week() {
    past_content_popular_week.setAttribute("style", "display: flex");
    btn_popular_articles_week.setAttribute("style", "display: none");
};
function download_more_popular_articles_month() {
    past_content_popular_month.setAttribute("style", "display: flex");
    btn_popular_articles_month.setAttribute("style", "display: none");
};

let tab_popular_articles = function () {
    let tabNav = document.querySelectorAll ('.nav_item'),
        tabCont = document.querySelectorAll ('.content_popular_articles'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectBlockNav)
    });

    function selectBlockNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectBlockCont(tabName);
    }

    function selectBlockCont (tabName) {
        tabCont.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        });
    }

};

tab_popular_articles();

let tab = function () {
    let tabNav = document.querySelectorAll ('.block_rubrics')
    tabNav.forEach(item => {
        item.addEventListener('click', selectBlockNav)
    });

    function selectBlockNav() {
        if (this.classList.contains('block_rubrics_active')){
            tabNav.forEach(item => {
                item.classList.remove('block_rubrics_active')
            });
        } else {
            tabNav.forEach(item => {
                item.classList.remove('block_rubrics_active')
            });
            this.classList.add('block_rubrics_active');
        }
    }
};

tab();

function vailability_check() {
    if (check.getAttribute("checked") == "false") {
        check.setAttribute("style", "border: 1px solid #f3573c");
        license_agreement.setAttribute("style", "color: #f3573c");
    } else {
        check.setAttribute("style", "border: 1px solid #8DB5FD");
        license_agreement.setAttribute("style", "color: #8DB5FD");
    }
};

function check_license_agreement() {
    if (check.getAttribute("checked") == "false") {
        check.setAttribute("checked", true);
        check_mark.setAttribute("style", "display: block");
    } else {
        check.setAttribute("checked", false);
        check_mark.setAttribute("style", "display: none");
    }
};

function vailability_check_modal() {
    if (check_modal.getAttribute("checked") == "false") {
        check_modal.setAttribute("style", "border: 1px solid #f3573c");
        license_agreement_modal.setAttribute("style", "color: #f3573c");
    } else {
        check_modal.setAttribute("style", "border: 1px solid #9dbfff");
        license_agreement_modal.setAttribute("style", "color: #9dbfff");
    }
};

function check_license_agreement_modal() {
    if (check_modal.getAttribute("checked") == "false") {
        check_modal.setAttribute("checked", true);
        check_mark_modal.setAttribute("style", "display: block");
    } else {
        check_modal.setAttribute("checked", false);
        check_mark_modal.setAttribute("style", "display: none");
    }
};

$(document).ready(function() {
$('button.myLinkModal').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function(){
    $('#myModal') 
    .css('display', 'block')
    .animate({opacity: 1}, 198);
    });
});

$('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198,
    function(){
    $(this).css('display', 'none');
    $('#myOverlay').fadeOut(297);
    });
});
});