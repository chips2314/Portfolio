"use strict;"

var config={"primaryColor":"#fb6d62","darkColor":"#3b3e4a","lightColor":"#ffffff","themeMode":"light","showSettingsBtn":false,"showCloseIcon":false,"showDeclineBtn":false,"fullWidth":false,"displayPosition":"right","settingsBtnLabel":"Customize","delay":2000,"expires":365,"title":"Cookie Consent","description":"This website uses cookie or similar technologies, to enhance your browsing experience and provide personalised recommendations. By continuing to use our website, you agree to our ","acceptBtnLabel":"Accept","declineInfoBtnLabel":"Decline","moreInfoBtnLink":"policy.html","moreInfoBtnLabel":"Privacy Policy","cookieTypesTitle":"Select cookies to accept","necessaryCookieTypeLabel":"Necessary","necessaryCookieTypeDesc":"These cookies are necessary for the website to function and cannot be switched off in our systems.","cookieTypes":[{"type":"Preferences","value":"preferences","description":"Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in."},{"type":"Marketing","value":"marketing","description":"Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers."},{"type":"Analytics","value":"analytics","description":"Analytics cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site."}]};

function _slicedToArray(e,c){return _arrayWithHoles(e)||_iterableToArrayLimit(e,c)||_unsupportedIterableToArray(e,c)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,c){if(e){if("string"==typeof e)return _arrayLikeToArray(e,c)
var i=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,c):void 0}}function _arrayLikeToArray(e,c){(null==c||c>e.length)&&(c=e.length)
for(var i=0,r=Array(c);c>i;i++)r[i]=e[i]
return r}function _iterableToArrayLimit(e,c){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=i){var r,t,o=[],n=!0,l=!1
try{for(i=i.call(e);!(n=(r=i.next()).done)&&(o.push(r.value),!c||o.length!==c);n=!0);}catch(a){l=!0,t=a}finally{try{n||null==i["return"]||i["return"]()}finally{if(l)throw t}}return o}}function _arrayWithHoles(e){return Array.isArray(e)?e:void 0}function appendScriptInHead(e){headerScripts.forEach(function(c){c.type===e&&$("head").append(c.value)})}var injectScripts=function(){"undefined"!=typeof headerScripts&&(cookieBanner.isPreferenceAccepted("analytics")===!0&&appendScriptInHead("analytics"),cookieBanner.isPreferenceAccepted("marketing")===!0&&appendScriptInHead("marketing"),cookieBanner.isPreferenceAccepted("preferences")===!0&&appendScriptInHead("preferences"))}

!function(e){var c=this
e.fn.cookieBanner=function(){e(":root").css("--cookieBannerLight",config.lightColor),e(":root").css("--cookieBannerDark",config.darkColor)
var c=i("cookieConsent")
if(c)injectScripts()
else{e("#cookieBanner").remove()
var n='<li><input type="checkbox" name="gdprPrefItem" value="necessary" checked="checked" disabled="disabled" data-compulsory="on"> <label title="'+config.necessaryCookieTypeDesc+'">'+config.necessaryCookieTypeLabel+"</label></li>"
e.each(config.cookieTypes,function(e,c){if(""!==c.type&&""!==c.value){var i=""
c.description!==!1&&(i=' title="'+c.description+'"'),n+='<li><input type="checkbox" id="gdprPrefItem'+c.value+'" name="gdprPrefItem" value="'+c.value+'" data-compulsory="on"> <label for="gdprPrefItem'+c.value+'"'+i+">"+c.type+"</label></li>"}})
var p='<div id="cookieBanner" class="'+config.themeMode+" display-"+config.displayPosition+" full-width-"+config.fullWidth+'"><div id="closeIcon">'+s+'</div><div class="title-wrap">'+a+"<h4>"+config.title+'</h4></div><div class="content-wrap"><div class="msg-wrap"><p>'+config.description+' <a style="color:'+config.primaryColor+';" href="'+config.moreInfoBtnLink+'">'+config.moreInfoBtnLabel+'</a></p><div id="cookieSettings">'+l+config.settingsBtnLabel+'</div><div id="cookieTypes" style="display:none;"><h5>'+config.cookieTypesTitle+"</h5><ul>"+n+'</ul></div></div><div class="btn-wrap"><button id="cookieAccept" style="color:'+config.lightColor+";background:"+config.primaryColor+";border: 1px solid "+config.primaryColor+';" type="button">'+config.acceptBtnLabel+'</button><button id="cookieReject" style="color:'+config.primaryColor+";border: 1px solid "+config.primaryColor+';" type="button">'+config.declineInfoBtnLabel+"</button></div>"
setTimeout(function(){e("body").append(p),e("#cookieBanner").hide().fadeIn("slow"),config.showSettingsBtn||e("#cookieSettings").hide(),config.showDeclineBtn||e("#cookieReject").hide(),config.showCloseIcon||e("#closeIcon").hide()},config.delay),e("body").on("click","#cookieAccept",function(){r(!0,config.expires),e('input[name="gdprPrefItem"][data-compulsory="on"]').prop("checked",!0)
var c=[]
e.each(e('input[name="gdprPrefItem"]').serializeArray(),function(e,i){c.push(i.value)}),t("cookieConsentPrefs",encodeURIComponent(JSON.stringify(c)),{expires:o(365),path:"/"}),injectScripts()}),e("body").on("click","#cookieSettings",function(){e('input[name="gdprPrefItem"]:not(:disabled)').attr("data-compulsory","off").prop("checked",!0),e("#cookieTypes").toggle("fast",function(){e("#cookieSettings").prop("disabled",!1)})}),e("body").on("click","#closeIcon",function(){e("#cookieBanner").remove()}),e("body").on("click","#cookieReject",function(){r(!1,config.expires),t("cookieConsentPrefs","",{expires:o(-365),path:"/"})})}}
var i=function(e){return document.cookie.indexOf(e)>-1?!0:!1},r=function(i,r){t("cookieConsent",i,{expires:o(r),path:"/"}),e("#cookieBanner").fadeOut("fast",function(){e(c).remove()})},t=function(e,c){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
document.cookie="".concat(e,"=").concat(c).concat(Object.keys(i).reduce(function(e,c){return e+";".concat(c.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()}),"=").concat(i[c])},""))},o=function(e){var c=new Date
return c.setTime(c.getTime()+24*e*60*60*1e3),c.toUTCString()},n=function(e){var c=document.cookie.split(";").reduce(function(e,c){var i=c.split("=").map(function(e){return e.trim()}),r=_slicedToArray(i,2),t=r[0],o=r[1]
return t&&o&&(e[t]=decodeURIComponent(o)),e},{})
return e?c[e]||!1:c},l='<?xml version="1.0" ?><svg height="16px" version="1.1" viewBox="0 0 20 20" width="16px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#bfb9b9" id="Core" transform="translate(-464.000000, -380.000000)"><g id="settings" transform="translate(464.000000, 380.000000)"><path d="M17.4,11 C17.4,10.7 17.5,10.4 17.5,10 C17.5,9.6 17.5,9.3 17.4,9 L19.5,7.3 C19.7,7.1 19.7,6.9 19.6,6.7 L17.6,3.2 C17.5,3.1 17.3,3 17,3.1 L14.5,4.1 C14,3.7 13.4,3.4 12.8,3.1 L12.4,0.5 C12.5,0.2 12.2,0 12,0 L8,0 C7.8,0 7.5,0.2 7.5,0.4 L7.1,3.1 C6.5,3.3 6,3.7 5.4,4.1 L3,3.1 C2.7,3 2.5,3.1 2.3,3.3 L0.3,6.8 C0.2,6.9 0.3,7.2 0.5,7.4 L2.6,9 C2.6,9.3 2.5,9.6 2.5,10 C2.5,10.4 2.5,10.7 2.6,11 L0.5,12.7 C0.3,12.9 0.3,13.1 0.4,13.3 L2.4,16.8 C2.5,16.9 2.7,17 3,16.9 L5.5,15.9 C6,16.3 6.6,16.6 7.2,16.9 L7.6,19.5 C7.6,19.7 7.8,19.9 8.1,19.9 L12.1,19.9 C12.3,19.9 12.6,19.7 12.6,19.5 L13,16.9 C13.6,16.6 14.2,16.3 14.7,15.9 L17.2,16.9 C17.4,17 17.7,16.9 17.8,16.7 L19.8,13.2 C19.9,13 19.9,12.7 19.7,12.6 L17.4,11 L17.4,11 Z M10,13.5 C8.1,13.5 6.5,11.9 6.5,10 C6.5,8.1 8.1,6.5 10,6.5 C11.9,6.5 13.5,8.1 13.5,10 C13.5,11.9 11.9,13.5 10,13.5 L10,13.5 Z" id="Shape"/></g></g></g></svg>',a='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> <g fill="none" fill-rule="evenodd"> <circle cx="20" cy="20" r="20" fill="#D5A150"></circle> <path fill="#AD712C" d="M32.44 4.34a19.914 19.914 0 0 1 4.34 12.44c0 11.046-8.954 20-20 20a19.914 19.914 0 0 1-12.44-4.34C8.004 37.046 13.657 40 20 40c11.046 0 20-8.954 20-20 0-6.343-2.954-11.996-7.56-15.66z"> </path> <path fill="#C98A2E" d="M10.903 11.35c-.412 0-.824-.157-1.139-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.749z"> </path> <circle cx="12.894" cy="7.749" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M10.09 7.48l-.003.032a1.566 1.566 0 0 0 1.624 1.683 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.624-1.683 2.823 2.823 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M4.464 24.227c-.412 0-.824-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.398 4.398 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"> </path> <circle cx="6.456" cy="20.626" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M3.651 20.356a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.683 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M10.098 32.276c-.412 0-.824-.158-1.138-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.749z"> </path> <circle cx="12.089" cy="28.674" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M9.285 28.405a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.684 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M18.95 37.91c-.411 0-.823-.158-1.137-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"> </path> <circle cx="20.942" cy="34.308" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M18.138 34.038l-.002.033a1.566 1.566 0 0 0 1.623 1.684 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.684 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M20.56 15.385c-.411 0-.823-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.75z"> </path> <circle cx="22.552" cy="11.784" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M19.748 11.514l-.003.033a1.566 1.566 0 0 0 1.624 1.683 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.624-1.683 2.823 2.823 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M30.219 29.861c-.412 0-.824-.157-1.139-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.75z"> </path> <circle cx="32.21" cy="26.26" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M29.406 25.99a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.683 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M29.414 14.57c-.412 0-.824-.158-1.139-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.295.46 3.13 1.297a1.61 1.61 0 0 1-2.276 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"> </path> <circle cx="31.405" cy="10.968" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M28.601 10.698a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.683 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M17.341 24.227c-.412 0-.824-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.276 2.276 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.75z"> </path> <circle cx="19.333" cy="20.626" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M16.529 20.356l-.003.033a1.566 1.566 0 0 0 1.623 1.684 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.684 2.824 2.824 0 0 0-2.7 2.546z"> </path> <g fill="#AD712C" transform="translate(2.656 1.875)"> <circle cx="7.485" cy="21.143" r="1"></circle> <circle cx="11.509" cy="21.143" r="1"></circle> <circle cx="9.497" cy="17.521" r="1"></circle> <circle cx="2.253" cy="24.765" r="1"></circle> <circle cx="10.301" cy="33.618" r="1"></circle> <circle cx="12.716" cy="30.399" r="1"></circle> <circle cx="16.74" cy="25.57" r="1"></circle> <circle cx="23.179" cy="23.155" r="1"></circle> <circle cx="21.569" cy="24.765" r="1"></circle> <circle cx="23.984" cy="27.179" r="1"></circle> <circle cx="23.984" cy="32.008" r="1"></circle> <circle cx="32.837" cy="15.107" r="1"></circle> <circle cx="30.422" cy="31.203" r="1"></circle> <circle cx="18.35" cy=".62" r="1"></circle> <circle cx="3.863" cy="7.863" r="1"></circle> <circle cx=".644" cy="12.692" r="1"></circle> <circle cx="9.899" cy="13.9" r="1"></circle> <circle cx="12.314" cy="12.692" r="1"></circle> <circle cx="9.899" cy="11.485" r="1"></circle> <circle cx="21.167" cy="17.521" r="1"></circle> <circle cx="15.935" cy="5.449" r="1"></circle> <circle cx="23.581" cy="12.692" r="1"></circle> <circle cx="24.788" cy="16.314" r="1"></circle> <circle cx="27.203" cy="16.314" r="1"></circle> <circle cx="27.203" cy="18.729" r="1"></circle> <circle cx="22.776" cy="4.242" r="1"></circle> <circle cx="25.191" cy="3.034" r="1"></circle> </g> </g></svg>',s='<?xml version="1.0" ?><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g fill="#bfb9b9"><path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/><path d="M64.2422,31.7578a5.9979,5.9979,0,0,0-8.4844,0L48,39.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844L39.5156,48l-7.7578,7.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L48,56.4844l7.7578,7.7578a5.9994,5.9994,0,0,0,8.4844-8.4844L56.4844,48l7.7578-7.7578A5.9979,5.9979,0,0,0,64.2422,31.7578Z"/></g></svg>'
return window.cookieBanner={init:function(){e.fn.cookieBanner()},isAccepted:function(){var e=n("cookieConsent")
return JSON.parse(e)},getPreferences:function(){var e=n("cookieConsentPrefs")
return JSON.parse(e)},isPreferenceAccepted:function(e){var c=n("cookieConsent"),i=n("cookieConsentPrefs")
return i=JSON.parse(i),c===!1?!1:i===!1||-1===i.indexOf(e)?!1:!0}}}(jQuery)


document.querySelectorAll('#currentYear').forEach(element => {
    element.textContent = new Date().getFullYear();
});

//links

const links = {
    appStore: "https://apps.apple.com/app/dog-monitor-doggy/id1509013415",
    playStore: "https://play.google.com/store/apps/examp"
};

function updateLinks() {
    const appStoreLinks = document.querySelectorAll('.appstore-link');
    appStoreLinks.forEach(link => {
        link.href = links.appStore;
    });

    const playStoreLinks = document.querySelectorAll('.playstore-link');
    playStoreLinks.forEach(link => {
        link.href = links.playStore;
    });
}
document.addEventListener("DOMContentLoaded", updateLinks);

// navbar 
$('.dropdown > a').on('click', function(e) {
    window.location.href = $(this).attr('href'); 
});

// cookies
document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    
    // Check if cookies were accepted or declined
    if (!localStorage.getItem('cookiesDecision')) {
        cookieBanner.style.display = 'block';
    }

    // Function to hide banner and store decision
    function handleCookiesDecision(decision) {
        localStorage.setItem('cookiesDecision', decision);
        cookieBanner.style.display = 'none';
    }

    // Handle "Accept" button
    document.getElementById('accept-cookies').addEventListener('click', function () {
        handleCookiesDecision('accepted');
    });

    // Handle "Decline" button
    document.getElementById('decline-cookies').addEventListener('click', function () {
        handleCookiesDecision('declined');
    });
});



(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		var hiddenBar = $('.sidebar-btn');
		var hiddenBarOpener = $('.sidebar-btn');
		var hiddenBarCloser = $('.hidden-bar-closer');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.removeClass('visible-sidebar');
		});
	}
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.two').on('click', function() {
			$('.mobile-small-image').addClass('visible');
		});
		
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.one').on('click', function() {
			$('.mobile-small-image').removeClass('visible');
		});
		
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.three').on('click', function() {
			$('.mobile-small-image').removeClass('visible');
		});
		
		
		
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.three').on('click', function() {
			$('.heart-image-icon').addClass('visible-heart');
		});
		
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.one').on('click', function() {
			$('.heart-image-icon').removeClass('visible-heart');
		});
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.two').on('click', function() {
			$('.heart-image-icon').removeClass('visible-heart');
		});
		
		
		
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.three').on('click', function() {
			$('.plus-small-image').addClass('visible-plus');
		});
		
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.one').on('click', function() {
			$('.plus-small-image').removeClass('visible-plus');
		});
		//Dropdown Button
		$('.banner-section .carousel-column .inner-column .pager-box .pager.two').on('click', function() {
			$('.plus-small-image').removeClass('visible-plus');
		});
		
		
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
		//Dropdown Button
		$('.pricing-tabs .tab-buttons .yearly').on('click', function() {
			$('.round').addClass('boll-right');
		});
		
		//Dropdown Button
		$('.pricing-tabs .tab-buttons .monthly').on('click', function() {
			$('.round').removeClass('boll-right');
		});
		
	}
	
	
	
	//Fixed Right Top Consultation Form Toggle
	if($('.main-header .header-upper .outer-box.info-btn').length){
		
		//Show Form
		$('.main-header .header-upper .outer-box.info-btn').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('background-visible');
		});
		
		//Hide Form
		$('.form-back-drop').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('background-visible');
		});
		
		$('.form-back-drop').on('click', function(e) {
			$('.hidden-bar').removeClass("visible-sidebar");
		});
		
		$('.hidden-bar .hidden-bar-closer').on('click', function(e) {
			$('body').removeClass("background-visible");
		});
		
	}
	
	
	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav ul').onePageNav();
	}
	
	
	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	
	
	
	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}
	
	
	
	//Custom Pager Slider / Testimonials Slider
	if($('.banner-slider').length){
		var customPagerSlider = $(".banner-slider").bxSlider({
			adaptiveHeight: true,
			//auto:false,
			controls: true,
			pause: 5000,
			speed: 1000,
			nextText: '<span class="control-icon fa fa-angle-right"></span>',
			prevText: '<span class="control-icon fa fa-angle-left"></span>',
			pagerCustom: '#banner-pager',
			//onSlideAfter: function() {
				//customPagerSlider.stopAuto();
				//customPagerSlider.startAuto();
			//}
		});
	}
	
	
	
	// if ($('.testimonials-thumb-carousel').length) {
		// var galleryThumbs = new Swiper('.gallery-thumbs', {
		 // spaceBetween: 10,
		  // slidesPerView: 4,
		  // freeMode: true,
		  
		  // watchSlidesVisibility: true,
		  // watchSlidesProgress: true,
		// });
		// var galleryTop = new Swiper('.gallery-top', {
		  // spaceBetween: 10,
		  // navigation: {
			// nextEl: '.swiper-button-next',
			// prevEl: '.swiper-button-prev',
		  // },
		  // thumbs: {
			// swiper: galleryThumbs
		  // }
		// });
	// }
	
	
	
	//Custom Pager Slider / Testimonials Slider
	if($('.testimonials-slider').length){
		var customPagerSlider = $(".testimonials-slider").bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: true,
			pause: 5000,
			speed: 1000,
			nextText: '<span class="control-icon fa fa-angle-right"></span>',
			prevText: '<span class="control-icon fa fa-angle-left"></span>',
			pagerCustom: '#testimonials-pager',
			onSlideAfter: function() {
				customPagerSlider.stopAuto();
				customPagerSlider.startAuto();
			}
		});
	}
	
	
	
	
	
	
	
	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	if ($('.appScreenshotCarousel-container').length) {
		if ($('.appScreenshotCarousel-container').length) {

			var swiper = new Swiper('.appScreenshotCarousel-container', {
				effect: 'coverflow',
				loop: true,
				centeredSlides: true,
				slidesPerView: 4,
				initialSlide: 4,
				keyboardControl: true,
				mousewheelControl: false,
				lazyLoading: true,
				preventClicks: false,
				preventClicksPropagation: false,
				lazyLoadingInPrevNext: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				coverflow: {
					rotate: 0,
					stretch: 0,
					depth: 250,
					modifier: .5,
					slideShadows: false,
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					991: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					767: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					575: {
						slidesPerView: 1,
						spaceBetween: 5,
					}
				}
			});

		}
	}
	
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
				1500:{
					items:1
				}
			}
		});    		
	}
	
	
	// Team Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			center:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="icons-angle-pointing-to-left"></span>', '<span class="icons-angle-arrow-pointing-to-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:3
				}
			}
		});    		
	}
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	
	
	
	
	
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}

	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				lastname: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);