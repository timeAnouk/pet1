/*
* 选择对应项目，显示对应列表
* */
function itemChoose(item){

    $('#memberList').hide();
    $('#cash').hide();
    $('#appointment').hide();
    $('#entrust').hide();
    $('#stock').hide();
    $('#message').hide();
    $('#setting').hide();
    $('#report').hide();
    if(!item){
        $('#cash').show();
    }else{
        $('#'+item).show();
    }
}
