/**
 * Created by Administrator on 2016/8/5.
 */
var cardDatas =  {
    lists: cardData,
    classGroup:{
        'card-list': true,
        'card-list-3': true
    }
};

// 注册
Vue.component('my-card', {
    props: ['list','classGroup'],
    template: '#card-template'
});
var vm1 = new Vue({
    el:'.container',
    data:function(){
        return cardDatas
    }
});
var vm2 = new Vue({
    el:'.container2',
    data:function(){
        return cardDatas
    }
});



