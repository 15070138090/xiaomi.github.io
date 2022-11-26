// 导航栏nav 下载app 下拉菜单
let download_app = document.querySelector('#download_app');
let download = document.querySelector('.download')
download_app.onmouseover = function() {
    download.style.display = 'block';
    download.onmouseover = function() {
        download.style.display = 'block';
    }
    download.onmouseout = function() {
        download.style.display = 'none';
    }

}
download_app.onmouseout = function() {
    download.style.display = 'none';
}

// 首页下拉子菜单
let hd_nav = document.querySelector('.hd-nav');
let lis = hd_nav.querySelectorAll('.hd-nav-li');
let header_submenu = document.querySelector('.header_submenu');
// 显示的内容
let items = document.querySelectorAll('.hd_nav_item')
    // for循环绑定点击事件
for (let i = 0; i < lis.length; i++) {
    // 为每个li设置自定义属性 添加索引号
    lis[i].setAttribute('index', i);
    lis[i].onmouseover = function() {
        header_submenu.style.display = 'block';
        // 排他思想
        for (let j = 0; j < items.length; j++) {
            items[j].style.display = 'none';
        }
        // 让对应的hd_nav_item显示出来
        let index = this.getAttribute('index');
        items[index].style.display = 'block';
        // 经过header_submenu让他不消失
        header_submenu.onmouseover = function() {
            header_submenu.style.display = 'block';
        }
        header_submenu.onmouseout = function() {
            header_submenu.style.display = 'none';
        }
    }
}
hd_nav.onmouseout = function() {
    header_submenu.style.display = 'none';
}


// main_dropdown 侧边栏菜单栏 子菜单
let main_dropdown = document.querySelector('.main_dropdown');
let main_dropdown_li = main_dropdown.querySelectorAll('li')
let main_upload = document.querySelector('.main_upload');
let main_upload_ul = main_upload.querySelectorAll('ul');
// for循环绑定点击事件
for (let i = 0; i < main_dropdown_li.length; i++) {
    // 为每个li设置自定义属性 添加索引号
    main_dropdown_li[i].setAttribute('date-index-upload', i);
    main_dropdown_li[i].onmouseover = function() {
        // 排他思想
        for (let j = 0; j < main_upload_ul.length; j++) {
            main_upload_ul[j].style.display = 'none';
        }
        let my = this.getAttribute('date-index-upload');
        main_upload_ul[my].style.display = 'block';
        main_upload.style.display = 'block';
        main_upload.onmouseover = function() {
            main_upload.style.display = 'block';

        }
        main_upload.onmouseout = function() {
            main_upload.style.display = 'none';
        }
        main_dropdown.onmouseout = function() {
            main_upload.style.display = 'none';
        }
    }
}
//  右侧固定功能区 function 
let fixed_handset = document.querySelector('#fixed_handset');
let download_handset = document.querySelector('.download_handset')
fixed_handset.onmouseover = function() {
    download_handset.style.display = 'block';
    download_handset.onmouseover = function() {
        download_handset.style.display = 'block';
    }
    download_handset.onmouseout = function() {
        download_handset.style.display = 'none';
    }

}
fixed_handset.onmouseout = function() {
    download_handset.style.display = 'none';
}

// 左右键切换背景
let main_left_btn = document.querySelector('.main_left_btn');
let main_right_btn = document.querySelector('.main_right_btn');
let main_content_top = document.querySelector('.main_content_top');
let main_bj = ['images/xiao1.jpg', 'images/xiao2.webp', 'images/xiao3.webp'];
let i = 0;
main_left_btn.onclick = function() {
    if (i > 0) {
        i--;
        main_content_top.style.backgroundImage = 'url(' + main_bj[i]; + ')';
    }
}
main_right_btn.onclick = function() {
    if (i < main_bj.length - 1) {
        i++;
        main_content_top.style.backgroundImage = 'url(' + main_bj[i]; + ')'
    }
}