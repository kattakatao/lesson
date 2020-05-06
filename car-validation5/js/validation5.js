//submitボタン

$(function() {
  //送信ボタン無効化
  $('.send').prop("disabled", true);


  //入力欄の操作時
  $('form input:required,textarea:required').change(function() {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form input:required,textarea:required').each(function(e) {
      var id = $(this).attr('id');
      var errVal = $('#msg' +id).val();
      // $('input["submit"]').attr('disabled', true);
      if(errVal!=='') flag = false;

      // //必須項目が空なら
      // if ($('form input:required,textarea:required').eq(e).val() === "") {
      //   flag = false;

    });

    if (flag) {
      //送信ボタン復活
      $('.send').prop("disabled", false);
    } else {
      //送信ボタン閉じる
      $('.send').prop("disabled", true);
    }
  });

  //radioボタンが変更されたら
  $('input[name="contact"],input[name="contact2"]').change(function() {
    $('.send').prop("disabled", true);

  });
  //入力欄の操作時
  $('form input:required,textarea:required').change(function() {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form input:required,textarea:required').each(function(e) {
      //必須項目が空なら
      var id = $(this).attr('id');
      var errVal = $('#msg' +id).val();
      // $('input[type="submit"]').attr('disabled', true);
      if(errVal!=='') flag = false;

      // if ($('form input:required,textarea:required').eq(e).val() === "") {
      //   flag = false;
      // }
    });

    if (flag) {
      //送信ボタン復活
      $('.send').prop("disabled", false);
    } else {
      //送信ボタン閉じる
      $('.send').prop("disabled", true);
    }
  });
});


//radioボタン

$(function() {
  radio.radioInit();

});

var radio = {
  radioInit: function() {
    this.radioEvent();

  },
  radioEvent: function() {
    this.changeEvent();

  },
  changeEvent: function() {
    $('.fax-txt').prop('required', false);
    $('#visit').prop('required', false);
    $('.title-show').prop('required', false);
    $('input[name="contact"],input[name="contact2"]').change(function() {


      var val = $(this).val();
  var id = $(this).attr('id');
      radio.radioCheck(id,val);
    });
  },
  radioCheck: function(id,val) {

    switch (id,val) {
      case '来店予約':
        $("#msg-fax,#msg-fax2,#msg-fax3,#msg-time,#msg-show").text('');
        $('.title-none').show();
        $('.contact,#msg-show,.label-show').hide();
        $('#visit').prop('required', true);
        $('.title-show').prop('required', false);
        $('.title-show').removeAttr('id', 'show');
        $('.title-show').removeClass('input_design');
        break;
      case 'メール':
        $("#msg-fax,#msg-fax2,#msg-fax3,#msg-time,#msg-visit,#msg-show").text('');
        // this.reset('mail');
        $('.toggle-time,.toggle-fax').hide();
        $('.title-show').prop('required', false);
        break;
      case 'FAX':
        $("#msg-time,#msg-visit,#msg-show").text('');
        // this.reset('fax');
        $('.toggle-time').hide();
        $('.toggle-fax').toggle();
        $('.fax-txt').prop('required', true);
        $('#visit,#time,.title-show').prop('required', false);
        break;
      case '電話':
        $("#msg-fax,#msg-fax2,#msg-fax3").text('');
        // this.reset('tel');
        $('.toggle-fax').hide();
        $('.toggle-time').toggle();
        $('.fax-txt,#visit,.title-show').prop('required', false);
        break;
      case 'お問い合わせ':
        $("#msg-fax,#msg-fax2,#msg-fax3,#msg-visit").text('');
        $('.title-show').prop('required', true);
        $('.title-show').attr('id', 'show');
        $('.label-show,#msg-show,.contact').show();
        $('.title-none').hide();
        break;

      default:
        $('.title-none,#msg-show,.label-show').hide();
        $('.title-show').removeAttr('id', 'show');
        $('.title-show').removeClass('input_design');
        $('.contact').show();
        $('.title-show').prop('required', false);
        break;
    }
  }
}

//   reset:function(way) {
//     var id = $(this).attr('id');
//     var arr = ['tel','mail','fax'];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i]!==way) {
//         $("#msg-" + id).text('');
//         validation.removeError(id);
//       }
//     }
//   }
// }

// バリデーション

$(function() {
  validation.init();
});
var validation = {
 inputData:{},
  message: {
    null: 'を入力してください',
    pattern: 'でご入力ください',
    not: 'が正しく入力されていません',
  },
  inputType: {
    'time': 'ご希望の連絡時間帯',
    'last-name': 'お名前(姓)',
    'first-name': 'お名前(名)',
    'lastkana-name': 'フリガナ(セイ)',
    'firstkana-name': 'フリガナ(メイ)',
    'email': 'メールアドレス',
    'tel-all': '電話番号',
    'tel': '電話番号(市外局番)',
    'tel2': '電話番号(市内局番)',
    'tel3': '電話番号(加入者番号)',
    'fax-all': 'FAX番号',
    'fax': 'FAX番号(市外局番)',
    'fax2': 'FAX番号(市内局番)',
    'fax3': 'FAX番号(加入者番号)',
    'zip11': '郵便番号',
    'visit': 'ご来店希望日時',
    'show': '詳細'
  },
  regexp: {
    kana: /^[ァ-ン \s]+$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    tel: /^[0-9]{2,5}$/,
    zip: /^[0-9]{7}$/,
  },
  init: function() {
    this.addEvent();
  },
  addEvent: function() {
    this.blurEvent();
  },
  blurEvent: function() {
    $('input, textarea').on('blur', function() {
      var id = $(this).attr('id');
      var val = $(this).val();
      console.log(id);
      validation.partCheck(id, val);

    });
  },
  partCheck: function(id, val) {
    if (!this.nullCheck(id, val)) return false;
    switch (id) {
      case 'time':
        break;
      case 'first-name':
      case 'last-name':
        break;
      case 'lastkana-name':
      case 'firstkana-name':
        if (!this.patternCheck(id, 'kana', val)) return false;
        break;
      case 'email':
        if (!this.patternCheck(id, id, val)) return false;
        break;
      case 'tel':
      case 'tel2':
      case 'tel3':
        if (!this.patternCheck(id, 'tel', val)) return false;
        break;
      case 'FAX':
      case 'FAX2':
      case 'FAX3':
        if (!this.patternCheck(id, 'FAX', val)) return false;
        break;
      case 'zip11':
        if (!this.patternCheck(id, 'zip', val)) return false;
        break;
      case 'visit':
        break;
      case 'show':
        break;
    }
    this.removeError(id);
  },
  patternCheck: function(id, pattern, val) {
    var exp = validation.regexp[pattern];
    if (!val.match(exp)) {
      this.errorOutput(id, 'pattern');
      return false;
    }
    return true;
  },
  nullCheck: function(id, val) {
    if (val == '' || val == undefined || val == null) {
      this.errorOutput(id, 'null');
      return false;
    }
    return true;
  },
  errorOutput: function(id, type) {
    $("#msg-" + id).addClass('color');
    $("#msg-" + id).show();
    $("#" + id).addClass('input_design');
    $("#msg-" + id).text(validation.inputType[id] + validation.message[type]);
  },
  removeError: function(id) {
    $("#msg-" + id).removeClass('color');
    $("#" + id).removeClass('input_design');
    $("#msg-" + id).hide();
    $("#msg-" + id).text('');
  },
}