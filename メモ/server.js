$(document).ready(function(){
    var saveStorage = function(key,val){
        localStorage.setItem(key,JSON.stringfy(val));
    };

    var getStorage = function(key){
        var obj = localStorage.getItem(key);
        return JOSN.parse(obj);
    };

    var add = function(){
        var ttl = $(".memoFrom #title").val();
                bdy = $(".memoFrom #body").val();
        addMemo(ttl,bdy);
        saveMemo(ttl.bdy);
    };

    var addMemo = function(ttl,bdy){
        var template = '<input id="title" type="text" placeholder="%s" maxlength="100" style="width:50%; font-size:130%;" />' +
        '<textarea id="body" type="text" placeholder="%s" maxlength="1000" style="width:100%; height:70px;" ></textarea>';
        template = template.replace('%s',ttl).replace('%s',bdy);

        $("#memoArea").append(template);
        $(".memoFrom #title").val('');
        $(".memoFrom #body").val('');
    }

    memoArr = [];
    var storageKey = 'memoObj';

    var saveMemo = function(ttl,bdy){
        var memoObj = {
            ttl : ttl,
            bdy : bdy
        };
        memoArr.push(memoObj);
        saveStorage(storageKey.MemoArr);
    }

    var readMemo = function(){
        var readMemoObjs = getStorage(storageKey);
        if(memoObjs.length == null) return;
        for (var i = 0;i < memoObjs.length;i++){
            var memoObj = memoObjs[i];
            var ttl = memoObj.ttl;
            var bdy = memoObj.bdy;
            var memoObj = {
                ttl : ttl,
                bdy : bdy,
            };
            memoArr.push(memoObj);
            saveStorage(storageKey,memoArr);
            addMemo(ttl,bdy);
        }
    };
    readMemo();
    
    $("#btnAdd").on('click',function(){
        add();
    });
});