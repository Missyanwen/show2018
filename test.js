

(function(w){
    var show = {
        data: function(obj) {
            this.data = obj
        },
        next: function() {
            document.getElementById('show').style.innerHTML = '打车';
            document.body.style.backgroundImage = 'blue';
        },
        prev: function() {
            document.title = '欢迎光临!'
            if(window.open) {
                window.location.href = 'http://www.baidu.com';
            }
        },
        log: function() {
            console.log(1);
            console.log('小心啦');
            console.log('公车私用');
        }
    }
})(window);