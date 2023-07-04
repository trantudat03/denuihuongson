
    var menu__list_wrap = document.querySelector('.menu__list-wrap');

    const app = {
        menu: [
            {
                img: './assecs/img/detungxeo.jpg',
                name: 'Dê tùng xẻo',
                price: '150-200 vnd'
            },
            {
                img: './assecs/img/duidedutlo.jpg',
                name: 'đùi dê đút lò',
                price: 'tính theo kg'
            },
            {
                img: './assecs/img/doichien.jpg',
                name: 'dồi dê chiên',
                price: '100-150 vnd'
            },
            {
                img: './assecs/img/suonnuong.jpg',
                name: 'sườn dê nướng',
                price: '110-165 vnd'
            },
            {
                img: './assecs/img/dehaptiato.jpg',
                name: 'dê hấp tía tô',
                price: '110-165 vnd'
            },
            {
                img: './assecs/img/baroihapcuc.jpg',
                name: 'ba rọi hấp cục',
                price: '110-165 vnd'
            }

        ],  

        lau: [
            {
                img: './assecs/img/lauthapcam.jpg',
                name: 'Lẩu thập cẩm',
                price: '100-150.000 vnđ'
            },
            {
                img: './assecs/img/lauthit.jpg',
                name: 'lẩu thịt tươi',
                price: '110-165.000 vnđ'
            },
            {
                img: './assecs/img/lauchan.jpg',
                name: 'lẩu chân',
                price: '150.000 vnđ'
            },
            {
                img: './assecs/img/lautiemthuocbac.jpg',
                name: 'lẩu dê tiềm thuốc bắc',
                price: '150.000 vnđ'
            },
            {
                img: './assecs/img/lauxuongong.jpg',
                name: 'lẩu xương ống',
                price: '100-150.000 vnđ'
            },
            {
                img: './assecs/img/laudau.jpg',
                name: 'Lẩu đầu',
                price: '270.000 vnđ'
            },
        ],

        hap: [
            {
                img: './assecs/img/dehaptiato.jpg',
                name: 'hấp tía tô',
                price: '110-165.000 vnđ'
            },
            {
                img: './assecs/img/dehapchao.jpg',
                name: 'dê hấp chao',
                price: '110-165.000 vnđ'
            },
            {
                img: './assecs/img/chandehap.jpg',
                name: 'chân dê hấp',
                price: '150.000 vnđ'
            },
            {
                img: './assecs/img/dehapsagung.jpg',
                name:'dê hấp sả gừng',
                price: '110-165.000 vnđ'
            },
            {
                img: './assecs/img/dehaplachanh.jpg',
                name: 'dê hấp lá chanh',
                price: '110-165.000 vnđ'
            },
            {
                img: './assecs/img/baroihapcuc.jpg',
                name: 'ba rọi hấp cục',
                price: '110-165.000 vnđ'
            },
        ],

        xao: [
            {
                img: './assecs/img/dexaoriengme.jpg', 
                name: 'Dê Xào Riềng Mẻ', 
                price: '110–165.000 vnđ' 
            },
            {
                img: './assecs/img/dexaocan.jpg', 
                name: ' Dê Xào Cần', 
                price: '110 – 165.000 vnđ' 
            },
            {
                img: './assecs/img/dexaohanhtay.jpg', 
                name: ' Dê Xào Hành Tây', 
                price: '110 – 165.000 vnđ' 
            },
            {
                img: './assecs/img/dexaosaot.jpg', 
                name: ' Dê Xào Sả Ớt', 
                price: '110 – 165.000 vnđ' 
            },
            {
                img: './assecs/img/dexaolan.jpg', 
                name: ' Dê Xào Lăn', 
                price: '110 – 165.000 vnđ' 
            },
            {
                img: './assecs/img/gandexaocan.jpg', 
                name: 'Gan Dê Xào Cần', 
                price: '100 – 150.000 vnđ' 
            },
            {
                img: './assecs/img/dexaorieng.jpg', 
                name: ' Dê Xào Riềng', 
                price: '110 – 165.000 vnđ' 
            },
            {
                img: './assecs/img/gandexaohanhtay.jpg', 
                name: 'Gan Dê Xào Hành Tây', 
                price: '100 – 150.000 vnđ' 
            },
            {
                img: './assecs/img/longdexaonghe.jpg', 
                name: 'Lòng Dê Xào Nghệ', 
                price: '100 – 150.000 vnđ' 
            },
            {
                img: './assecs/img/longdexaokhe.jpg', 
                name: 'Lòng Dê Xào Khế', 
                price: '100 – 150.000 vnđ' 
            },
            {
                img: './assecs/img/longdexaodang.jpg', 
                name: 'Lòng Dê Xào Đắng', 
                price: '100 – 150.000 vnđ' 
            },
            {
                img: './assecs/img/caride.jpg', 
                name: 'Cà Ri Dê', 
                price: '110 – 165.000 vnđ' 
            },
                
                
                
                
        ],


        nuong: [

            {
            img: './assecs/img/denuongngoi.jpg', 
            name: 'Dê Nướng Ngói', 
            price: '110 – 165.000 vnđ' 
            },
            {
            img: './assecs/img/denuongmoi.jpg', 
            name: 'Dê Nướng Mọi', 
            price: '110 – 165.000 vnđ' 
            },
            {
            img: './assecs/img/denuongme.jpg', 
            name: 'Dê Nướng Mè', 
            price: '110 – 165.000 vnđ' 
            },
            {
            img: './assecs/img/suondenuong.jpg', 
            name: 'Sườn Dê Nướng', 
            price: '110 – 165.000 vnđ' 
            },
            {
            img: './assecs/img/gandenuong.jpg', 
            name: 'Gan Dê Nướng', 
            price: '100 – 150.000 vnđ' 
            },
            {
            img: './assecs/img/vuheonuong.jpg', 
            name: 'Vú Heo Nướng', 
            price: '100 – 150.000 vnđ' 
            },
            
            
            {
            img: './assecs/img/suonquay.jpg', 
            name: 'Sườn Quay', 
            price: '110 – 165.000 vnđ' 
            },
            {
            img: './assecs/img/thitquay.jpg', 
            name: 'Thịt Quay', 
            price: '110 – 165.000 vnđ' 
            },
            {
            img: './assecs/img/duiquay.jpg', 
            name: 'Đùi Quay', 
            price: '110 – 165.000 vnđ' 
            },
        ],

        tietcanh: [
            {
            img: './assecs/img/tietcanhdia.jpg', 
            name: 'Tiết Canh dĩa', 
            price: '100 – 150.000 vnđ' 
            },
            {
            img: './assecs/img/tietcanhchen.jpg', 
            name: 'Tiết Canh chén', 
            price: '30.000 vnđ' 
            },
            {
            img: './assecs/img/tietcanhhap.jpg', 
            name: 'Tiết Canh hấp', 
            price: '35.000 vnđ' 
            },
            {
            img: './assecs/img/huyetdongbolaudia.jpg', 
            name: 'Huyết Đông Bỏ Lẩu dĩa', 
            price: '50.000 vnđ' 
            },
            {
            img: './assecs/img/huyettuoibolauchen.jpg', 
            name: 'Huyết Tươi Bỏ Lẩu chén', 
            price: '20.000 vnđ' 
            },
            {
            img: './assecs/img/huyethapdia.jpg', 
            name: 'Huyết Hấp dĩa', 
            price: '70.000 vnđ' 
            },

        ],
            
        chao: [
            {
            img: './assecs/img/chaochande.jpg', 
            name: 'Cháo Chân Dê', 
            price: '150.000 vnđ' 
            },
            {
            img: './assecs/img/chaothitbam.jpg', 
            name: 'Cháo Thịt Bằm', 
            price: '110 – 165.000 vnđ' 
            },
            {
            img: './assecs/img/chaosuontuoi.jpg', 
            name: 'Cháo Sườn Tươi', 
            price: '110 – 165.000 vnđ' 
            },
            {
            img: './assecs/img/occhungtrung.jpg', 
            name: 'Óc + Tuỷ Chưng Trứng', 
            price: '65.000 vnđ' 
            },
            {
            img: './assecs/img/occhientrung.jpg', 
            name: 'Óc + Tuỷ Chiên Trứng', 
            price: '65.000 vnđ' 
            },
            {
            img: './assecs/img/octuybolau.jpg', 
            name: 'Óc + Tuỷ Bỏ Lẩu', 
            price: '50.000 vnđ' 
            },
            {
            img: './assecs/img/ochapgung.jpg', 
            name: 'Óc + Tuỷ Hấp Gừng', 
            price: '60.000 vnđ' 
            },

        ],

        dacbiet: [
                {
                img: './assecs/img/ngocduongtiemthuocbac.jpg', 
                name: 'Ngọc Dương Tiềm Thuốc Bắc', 
                price: '520.000 vnđ' 
                },
                {
                img: './assecs/img/ngocduonglamlau.jpg', 
                name: 'Ngọc Dương Làm Lẩu', 
                price: '500.000 vnđ' 
                },
                {
                img: './assecs/img/ngocduonghap.jpg', 
                name: 'Ngọc Dương Hấp', 
                price: '500.000 vnđ' 
                },
        ],
        
        render: function() {
            const menus = this.lau.map(function(item) {
                return `
                    <div class="col p-3 m-6 t-4">
                            <div class="menu__list-item">
                                <a href="" class="menu__list-wrap-img">
                                    <img class="menu__item-img" src="${item.img}" alt="">
                                </a>
                                <div class="menu__item-content">
                                    <a href="" class="menu__item-name">${item.name}</a>
                                    <h4 class="menu__item-pirce">${item.price}</h4>
                                </div>
                            </div>
                    </div> 
                    `
            });

            menu__list_wrap.innerHTML = menus.join('');

        }


    }

    var header_list_item = document.querySelectorAll('.header_list-item');
    var header_item_a = document.querySelectorAll('.header_list-item a');
    var menu__option_item = document.querySelectorAll('.menu__option-item');

    function renderSon(x) {
        const menuOne = app[x].map(function(item) {
            return `
                <div class="col p-3 m-6 t-4">
                        <div class="menu__list-item">
                            <a href="" class="menu__list-wrap-img">
                                <img class="menu__item-img" src="${item.img}" alt="">
                            </a>
                            <div class="menu__item-content">
                                <a href="" class="menu__item-name">${item.name}</a>
                                <h4 class="menu__item-pirce">${item.price}</h4>
                            </div>
                        </div>
                </div> 
                `
        });

        menu__list_wrap.innerHTML = menuOne.join('');
    }

    function renderOne(index) {
        if(index == 0) {
            renderSon("lau");
        }
        if(index == 1) {
            renderSon('hap');
        }
        if(index == 2) {
            renderSon('xao');
        }
        if(index == 3) {
            renderSon('nuong');
        }
        if(index == 4) {
            renderSon('chao');
        }
        if(index == 5) {
            renderSon('tietcanh');
        }
        if(index == 6) {
            renderSon('dacbiet');
        }
        
    }

    // const menu__optionLength = menu__option_item.length;
    // console.log(menu__optionLength);
    // for(let i = 0;i<menu__optionLength;i++) {
    //     console.log('helli');
    //     menu__option_item[i].onclick = function() {
    //         console.log('helli');
    //         console.log(i);
            
    //     }
    // }

    app.render();
    // code header
    function activeItem() {
        let itemLength = menu__option_item.length;
        for(let i=0;i<itemLength;i++) {
            menu__option_item[i].onclick = function() {
                
                for(let u=0; u<itemLength;u++) {
                    menu__option_item[u].classList.remove('active-option-item');
                }
                menu__option_item[i].classList.add('active-option-item');

                renderOne(i);
                // if(i==0){
                //     const menuOne = app.lau.map(function(item) {
                //         return `
                //             <div class="col p-3">
                //                     <div class="menu__list-item">
                //                         <a href="" class="menu__list-wrap-img">
                //                             <img class="menu__item-img" src="${item.img}" alt="">
                //                         </a>
                //                         <div class="menu__item-content">
                //                             <a href="" class="menu__item-name">${item.name}</a>
                //                             <h4 class="menu__item-pirce">${item.price}</h4>
                //                         </div>
                //                     </div>
                //             </div> 
                //             `
                //     });
                //     menu__list_wrap.innerHTML = menuOne.join('');
                // }
                // if(i==1){
                //     const menuOne = app.nuong.map(function(item) {
                //         return `
                //             <div class="col p-3">
                //                     <div class="menu__list-item">
                //                         <a href="" class="menu__list-wrap-img">
                //                             <img class="menu__item-img" src="${item.img}" alt="">
                //                         </a>
                //                         <div class="menu__item-content">
                //                             <a href="" class="menu__item-name">${item.name}</a>
                //                             <h4 class="menu__item-pirce">${item.price}</h4>
                //                         </div>
                //                     </div>
                //             </div> 
                //             `
                //     });
                //     menu__list_wrap.innerHTML = menuOne.join('');
                // }
                
                
            }
        }
    }

    // hien anh 

    var spatial__items = document.querySelectorAll('.spatial__item');
    var zoom__img = document.querySelector('.zoom__img');
    var zoom__img_item = document.querySelector('.zoom__img-wrap-img');
    var spatial__item_img = document.querySelectorAll('.spatial__item-img');
    var zoom__img_img = document.querySelector('.zoom__img-img');
    var zoom__img_overlay = document.querySelector('.zoom__img-overlay');
    var zoom__img_icon = document.querySelector('.zoom__img-icon');
        function openImg() {
            let spatial__itemLength = spatial__items.length;
            for(let i=0;i<spatial__itemLength;i++){

                spatial__items[i].onclick = function(e) {
                    console.log(spatial__item_img[i].src);
                    zoom__img_item.style.backgroundImage = `url(${spatial__item_img[i].src})`;
                    // zoom__img_img.src = spatial__item_img[i].src;
                    zoom__img.style.display = 'block';


                }
            }

        } 

        zoom__img_overlay.onclick = function() {
            zoom__img.style.display = 'none';
        }

        zoom__img_icon.onclick = function() {
            zoom__img.style.display = 'none';
        }
        

        // show list on mobile

        var header_bars = document.querySelector('.header_bars');
        var header_bars_list = document.querySelector('.header_bars-list')
        header_bars.addEventListener('click', ()=> {
            if(header_bars_list.classList.contains('hide-on-mobile')) {
                header_bars_list.classList.remove("hide-on-mobile");
                header_bars_list.classList.add("show-on-mobile")
            }else {
                header_bars_list.classList.remove("show-on-mobile");
                header_bars_list.classList.add("hide-on-mobile")
            }
        })

    activeItem();
    openImg();