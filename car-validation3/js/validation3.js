//submitボタン

$(function() {
  //送信ボタン無効化
  $('.send').prop("disabled", true);

  //入力欄の操作時
  $('form input:required').change(function() {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form input:required').each(function(e) {
      //必須項目が空なら
      if ($('form input:required').eq(e).val() === "") {
        flag = false;
      }
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
    $('input[name="contact"],input[name="contact2"]').change(function() {

      var val = $(this).val();

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
        $('.changeItems').hide();
        break;
      case 'FAX':
        $('.contact-content2').hide();
        $('.changeItems').toggle();
        $('#fax,#fax2,#fax3').attr('required', 'required');
        $('#time').removeAttr('required', 'required');
        break;
      case '電話':
        $('.changeItems').hide();
        $('.contact-content2').toggle();
        $('#fax,#fax2,#fax3').removeAttr('required', 'required');
        $('#time').attr('required', 'required');
        break;

      default:
        $('.title-none').hide();
        $('.contact').show();
        break;
    }
  }
}

// バリデーション

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
        if (!this.patternCheck(id, 'FAX', val)) return false;
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