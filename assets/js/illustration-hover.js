var illustrationDiv = document.getElementById('illustration-hover');
var listeMerveilles = document.getElementById('liste-merveilles');

listeMerveilles.style.opacity = '1';

document.addEventListener("mousemove", function (e) {
    illustrationDiv.style.left = e.pageX + 20 + 'px';
    illustrationDiv.style.top = e.pageY + 20 + 'px';

    if (illustrationDiv.offsetTop + illustrationDiv.offsetHeight > window.innerHeight) {
        illustrationDiv.style.top = e.pageY - illustrationDiv.offsetHeight - 20 + 'px';
    }
    
});

listeMerveilles.addEventListener('mouseover', function (e) {
    if (e.target.tagName === 'UL') {
        return;
    } else {
        illustrationDiv.style.opacity = '1';
        illustrationDiv.style.display = 'block';
        illustrationDiv.style.backgroundImage = 'url(assets/img/illustration/' + e.target.id + '.jpg)';
    }
});

listeMerveilles.addEventListener('mouseout', function (e) {
    illustrationDiv.style.opacity = '0';
});

listeMerveilles.addEventListener('click', function (e) {
    illustrationDiv.style.opacity = '0';
    listeMerveilles.style.opacity = '0';

    setTimeout(function () {
        window.location.href = "/merveilles/" + e.target.id + ".html";
    }, 600);
});