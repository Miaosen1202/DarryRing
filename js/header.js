/**
 * Created by Administrator on 2017/10/9.
 */

//����Ƶ� ��עDR ��ʾ�����˵�
$("#guanzhudr").mouseover(function () {
    $("#guanzhudr-b").show();
});
$("#guanzhudr").mouseout(function () {
    $("#guanzhudr-b").hide();
});
//����Ƶ� �ֻ����� ��ʾ�����˵�
$('#shoujigw').mouseover(function () {
    $('#sjgw-b').show();
});
$('#shoujigw').mouseout(function () {
    $('#sjgw-b').hide();
});
//����Ƶ� ������ ��ʾ�����˵�
$("#language").mouseover(function () {
    $('#languageb').show();
});
$("#language").mouseout(function () {
    $('#languageb').hide();
});
//����Ƶ� ȫ������ ��ʾ�����˵�
$('#aaa').mouseover(function () {
    $(this).addClass("act")
    $('#map').show();
});
$('#aaa').mouseout(function () {
    $('#map').hide();
    $(this).removeClass("act")
    $('#map').css("zIndex","20");
});
$('#map').mouseover(function () {
    $(this).show();
    $("#aaa").addClass("act")
});
$('#map').mouseout(function () {
    $(this).hide();
    $("#aaa").removeClass("act")
});
//============================
console.log($('#nav>li'));
console.log($('#nav>li>div'));
$('#nav>li').mouseover(function () {
    $('#nav>li>div').eq($(this).index()).show();
});
$('#nav>li').mouseout(function () {
    $('#nav>li>div').eq($(this).index()).hide();
});
//��鵼����)
$("#QHl li").mouseover(function () {
    $("#QHlimg li").eq($(this).index()).show().siblings().hide();
});
$("#QHr li").mouseover(function () {
    $("#QHrimg li").eq($(this).index()).show().siblings().hide();
})
//���ĵ�����
$("#ADl li").mouseover(function () {
    $("#ADlimg li").eq($(this).index()).show().siblings().hide();
});
$("#ADr li").mouseover(function () {
    $("#ADrimg li").eq($(this).index()).show().siblings().hide();
})
