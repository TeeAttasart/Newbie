var nav = document.getElementById('nav'); //ทำแถบเมนูไม่ให้เลื่อน
window.onscroll = function(){
    if(window.pageYOffset > 100){
        nav.style.position = "fixed";
        nav.style.top = 0;
    }else{
        nav.style.position = 'relative';
        nav.style.top = 100;
    }
}

function appendImageElem(keyword, index){
    const imgElem = document.createElement('img');
    imgElem.src = 'https://source.unsplash.com/400x225/?' + keyword + '&sig=' + index; ///or `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery')
    galleryElem.appendChild(imgElem);

}

function removeword(){ //สร้าง function เมื่อ user search ข้อความใหม่มันจะลบผลในที่นี้คือรูปภาพของเก่าออกก่อนแล้วเแสดงผลอันใหม่
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';

}

function searchword(event){ //สร้างตัว search รูปภาพขึ้นมาก่อน
    const keyword = event.target.value; //คือค่าที่ user พิมพ์อยู่นะปัจจุบัน
    if(event.key === 'Enter' && keyword !== ''){ //ใช้ if เพื่อเช็คว่า user กด Enter เมื่อไหร่
        removeword(); //มาจาก function ลบรูปภาพของเก่าก่อน
        for (let i = 1; i <= 9; i++){ ///ใช้ for loop เข้ามาช่วยเพื่อให้สามารถเพิ่มรูปลงในคำสั่งได้หลายรูปโดยไม่ต้องพิมพ์คำสั่งซ้ำ ๆ กันหลายครั้ง
            appendImageElem(keyword, i);
          }
    
    }
}
function run() { ///สร้างไว้เพื่อให้ code เป็นระเบียบ


    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchword);

}
var nav = document.getElementById('nav');
window.onscroll = function(){
    if(window.pageYOffset > 100){
        nav.style.position = "fixed";
        nav.style.top = 0;
    }else{
        nav.style.position = 'relative';
        nav.style.top = 100;
    }
}

run();