document.querySelector('.button').addEventListener('click', function() {
    var a = document.querySelector('.ekran');
    a.value = parseInt(a.value) + 1;
    console.log(a.value);
});

document.querySelector('.delete').addEventListener('click', function() {
    var a = document.querySelector('.ekran');
    var ochirish = 0; // agar o'chirish jarayoni shu usulda bo'lsa
    a.value = ochirish;
    console.log(ochirish);
});
