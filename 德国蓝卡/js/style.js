/**
 * Created by Obey on 2016/8/14.
 */
function tab(id) {
    var ul = document.getElementById(id);
    var Tabli = ul.getElementsByTagName('li');
    for (var i = 0; i < Tabli.length; i++) {
        Tabli[i].onclick = function () {
            for (var j = 0; j < Tabli.length; j++) {
                Tabli[j].className = '';
            }
            this.className = 'active'
        }
    }
};


