(function(){
    function loadEvent() {
        const logo = document.querySelector('div[class="siteNameBox"]');
        logo.addEventListener('click', function(){
            location.href = "index.html";
        });
    };

    window.addEventListener('load', loadEvent);
})();