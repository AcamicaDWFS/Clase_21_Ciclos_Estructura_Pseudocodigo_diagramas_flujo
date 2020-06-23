(function(){
    var loopFor = document.getElementById('text1');
    var loopWhile = document.getElementById('text2');
    var index = 1;
    
    
    for (let count = 1; count <= 10; count++) {
        let p = document.createElement('p');
        p.id = 'for' + count;
        p.innerHTML = ' Text for: ' + count;
        loopFor.append(p);
    }
    
    while (index <= 10) {
        let p = document.createElement('p');
        p.id = 'while' + index;
        p.innerText = ' Text while: ' + index;
        loopWhile.appendChild(p);
        index ++;
    }
})();