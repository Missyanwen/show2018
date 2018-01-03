

(function(w){
    var show = {
        data: function(obj) {
            this.data = obj
        },
        next: function() {
            document.getElementById('show').style.innerHTML = '打车';
            //document.body.style.backgroundImage = 'red';
        },
        prev: function() {
            document.title = '欢迎光临!'
        }
    }
})(window);