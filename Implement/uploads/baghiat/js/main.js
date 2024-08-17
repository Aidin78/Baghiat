// Variables
let siteRtl = document.querySelector("body").getAttribute("dir");
const mainMenu = document.querySelector("#espritmenu");
let menuTitle;
let moreTitle;
if (siteRtl == "rtl") {
    menuTitle = "منوی اصلی";
    moreTitle = "بیشتر";
} else {
    menuTitle = "Main Menu";
    moreTitle = "More";
}
// Event Listners
document.addEventListener("DOMContentLoaded", onPageLoad);
$(".burger-menu").on("click", openMenu);
$(".main-sidebar").on("click", function (e) {
    e.stopPropagation;
});
$(".back-shadow").on("click", closeMenu);
$("input[type='password']").on("change", passwordsCheck);
// Functions
function onPageLoad() {
    initScrollbars();
    fixedMenu();
}
function initLazyLoad() {
    (function () {
        function logElementEvent(eventName, element) {
            console.log(Date.now(), eventName, element.getAttribute("data-src"));
        }

        var callback_enter = function (element) {
            logElementEvent("", element);
        };
        var callback_exit = function (element) {
            logElementEvent("", element);
        };
        var callback_loading = function (element) {
            logElementEvent("", element);
        };
        var callback_loaded = function (element) {
            logElementEvent("", element);
        };
        var callback_error = function (element) {
            logElementEvent("", element);
            element.src = "uploads/daneshbonyan/img/FailedLoad.png";
        };
        var callback_finish = function () {
            logElementEvent("", document.documentElement);
        };
        var callback_cancel = function (element) {
            logElementEvent("", element);
        };

        var ll = new LazyLoad({
            // Assign the callbacks defined above
            callback_enter: callback_enter,
            callback_exit: callback_exit,
            callback_cancel: callback_cancel,
            callback_loading: callback_loading,
            callback_loaded: callback_loaded,
            callback_error: callback_error,
            callback_finish: callback_finish,
        });
    })();
}
function initScrollbars() {
    const scrollbars = Array.from(document.querySelectorAll(".scrollbar"));
    scrollbars.forEach(function (elem) {
        OverlayScrollbars(elem, { autoUpdate: true });
    });
}
function openMenu(e) {
    e.preventDefault();
    $("body").addClass("menu-active");
}
function closeMenu() {
    $("body").removeClass("menu-active");
}
function fixedMenu() {
    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    document.addEventListener(
        "scroll",
        function () {
            // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                $(".page__header").addClass("hide");
            } else {
                $(".page__header").removeClass("hide");
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        },
        false
    );
}
function passwordsCheck() {
    if (this.value != "") {
        $(this).parent().children(".dot").addClass("deactive");
    } else {
        $(this).parent().children(".dot").removeClass("deactive");
    }
}