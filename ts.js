

(function(w){
    var show = {
        data: function(obj) {
            this.data = obj;
            this.t = new Object();
        },
        next: function() {
            document.getElementById('show').style.innerHTML = '打车';
            document.body.style.backgroundImage = 'blue';
        },
        log: function() {
            console.log('我是dev');
            console.log('小心啦');
            console.log('公车私用');
        }
    }
})(window);