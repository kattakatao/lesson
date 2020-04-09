$(function(){
  validation.init();
});
var validation = {
  message:{
    null:'を入力してください',
    pattern:'でご入力ください',
    not:'が正しく入力されていません',
  },
  inputType:{
    'time': 'ご希望の連絡時間帯',
    'last-name': 'お名前(姓)',
    'first-name': 'お名前(名)',
    'lastkana-name': 'フリガナ(セイ)',
    'firstkana-name': 'フリガナ(メイ)',
    'email': 'メールアドレス',
    'tel': '電話番号',
    'tel1': '電話番号(市外局番)',
    'tel2': '電話番号(市内局番)',
    'tel3': '電話番号(加入者番号)',
    'zip11': '郵便番号'
  },
  regexp:{
    kana:/^[ァ-ン \s]+$/,
    email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    tel:/^[0-9]{2,5}$/,
    zip:/^[0-9]{7}$/,
  },
  init:function(){
    this.addEvent();
  },
  addEvent:function(){
    this.blurEvent();
  },
  blurEvent:function(){
    $('input, textarea').on('blur', function(){
      var id = $(this).attr('id');
      var val = $(this).val();
      console.log(id);
      validation.partCheck(id,val);
    });
  },
  partCheck:function(id, val){
    if(!this.nullCheck(id,val)) return false;
    switch (id) {
      case 'time':
        break;
      case 'first-name':
      case 'last-name':
        break;
      case 'lastkana-name':
      case 'firstkana-name':
        if(!this.patternCheck(id, 'kana',val)) return false;
        break;
      case 'email':
        if(!this.patternCheck(id, id, val)) return false;
        break;
      case 'tel':
      case 'tel2':
      case 'tel3':
        if(!this.patternCheck(id, 'tel', val)) return false;
        break;
      case 'zip11':
        if(!this.patternCheck(id, 'zip', val)) return false;
        break;
    }
    this.removeError(id);
  },
  patternCheck:function(id, pattern, val){
    var exp = validation.regexp[pattern];
    if(!val.match(exp)){
      this.errorOutput(id,'pattern');
      return false;
    }
    return true;
  },
  nullCheck:function(id,val){
    if(val=='' || val==undefined || val==null){
     this.errorOutput(id,'null');
      return false;
    }
    return true;
  },
  errorOutput:function(id, type){
    $("#msg-" + id).addClass('color');
    $("#" + id).addClass('input_design');
    $("#msg-" + id).text(validation.inputType[id] + validation.message[type]);
  },
  removeError:function(id){
    $("#msg-" + id).removeClass('color');
    $("#" + id).removeClass('input_design');
    $("#msg-" + id).text('');
  },
}