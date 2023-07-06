
document.getElementById("callBtbTuyenDung").addEventListener("click", ()=> {

    console.log("hellooss")
    var phoneNumber = "0343040993";
    window.location.href = "tel:" + phoneNumber;
})

var header_bars = document.querySelector('.header_bars');
        var header_bars_list = document.querySelector('.header_bars-list')
        var over_black1 = document.querySelector('.over_black1');
        header_bars.addEventListener('click', ()=> {
            if(header_bars_list.classList.contains('hide-on-mobile')) {
                header_bars_list.classList.remove("hide-on-mobile");
                header_bars_list.classList.add("show-on-mobile");
                over_black1.classList.remove("hide-on-mobile");
                over_black1.classList.add("show-on-mobile");
            }else {
                header_bars_list.classList.remove("show-on-mobile");
                header_bars_list.classList.add("hide-on-mobile")
                over_black1.classList.remove("show-on-mobile");
                over_black1.classList.add("hide-on-mobile");
            }
        })

        function showContact() {
            var contact_wrap = document.querySelector('.contact_wrap');
            var over_black2 = document.querySelector('.over_black2');
            var currentDisplay = contact_wrap.style.display;

            if (currentDisplay === 'block') {
                 contact_wrap.style.display = 'none';
                over_black2.style.display = 'none';
            } else {
                 contact_wrap.style.display = 'block';
                 over_black2.style.display = 'block';
            }
        }