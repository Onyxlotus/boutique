let elem = document.querySelector('.menu');
elem.onclick = function (){
    let block = document.querySelector('.menu_block');
    block.classList.toggle('menu_block_active');
}