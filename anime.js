function anime1(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var step = (target - obj.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15);
}

function anime2(obj,target,callback){
    console.log(target);
    clearInterval(obj.timer);
    //console.log(obj.style.left);
    obj.timer = setInterval(function(){
        var step = (target - parseFloat(obj.style.left))/20;
        
        if(parseFloat(obj.style.left) <= target){
            obj.style.left == target+'px';
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = parseFloat(obj.style.left) + step + 'px';
    },7);
}
