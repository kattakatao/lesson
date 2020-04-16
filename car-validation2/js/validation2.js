
//submitボタン
$(function() {
    //始めにjQueryで送信ボタンを無効化する
    $('.send').prop("disabled", true);

    //始めにjQueryで必須欄を加工する
    $('form input:required').each(function () {
        $(this).prev("label").addClass("required");
    });

    //入力欄の操作時
    $('form input:required').change(function () {
        //必須項目が空かどうかフラグ
        var flag = true;
        //必須項目をひとつずつチェック
        $('form input:required').each(function(e) {
            //もし必須項目が空なら
            if ($('form input:required').eq(e).val() === "") {
                var flag = false;
            }
        });
        //全て埋まっていたら
        if (flag) {
            //送信ボタンを復活
            $('.send').prop("disabled", false);
        }
        else {
            //送信ボタンを閉じる
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
    $('input[name="contact"],input[name="contact2"]').change(function() {
      // var id = $(this).attr('id');
      var val = $(this).val();
      // console.log(id);
      radio.radioCheck(val);
    });
  },
  radioCheck: function(val) {
    switch (val) {
      case '来店予約':
        $('.title-none').show();
        $('.contact').hide();
        break;
      case 'メール':
        $('.contact-content2').hide();
        $('.contact-content3').hide();
        break;
      case 'FAX':
        $('.contact-content2').hide();
        $('.contact-content3').show();
        break;

      default:
        $('.title-none').hide();
        $('.contact').show();
        $('.contact-content2').show();
        $('.contact-content3').hide();
        break;
    }
  }
}

$(function() {
  validation.init();
});
var validation = {
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
    'visit': 'ご来店希望日時'
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
        if (!this.patternCheck(id, 'fax', val)) return false;
        break;
      case 'zip11':
        if (!this.patternCheck(id, 'zip', val)) return false;
        break;
      case 'visit':
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
    $("#" + id).addClass('input_design');
    $("#msg-" + id).text(validation.inputType[id] + validation.message[type]);
  },
  removeError: function(id) {
    $("#msg-" + id).removeClass('color');
    $("#" + id).removeClass('input_design');
    $("#msg-" + id).text('');
  },
}
