$(function() {

  //エラーメッセージ配列 start
  var message = {
    'null': 'を入力してください',
    'null2': 'でご入力ください',
    'null3': 'が正しく入力されていません'
  }

  var input = {
    'time': 'ご希望の連絡時間帯',
    'name': 'お名前(姓)',
    'name2': 'お名前(名)',
    'kana': 'フリガナ(セイ)',
    'kana2': 'フリガナ(メイ)',
    'email': 'メールアドレス',
    'tel': '電話番号',
    'tel1': '電話番号(市外局番)',
    'tel2': '電話番号(市内局番)',
    'tel3': '電話番号(加入者番号)',
    'addresses': '郵便番号'
  }
  //エラーメッセージ配列 end


  $('input').on('blur', function() {

    var id = $(this).attr('id');
    var val = $(this).val();

    //各正規表現 変数定義 start
    var nameRegexp = val.match(/[^ァ-ン \s]+/)
    var emailRegexp = !val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    var telRegexp = !val.match(/^[0-9]+$/)
    var addressesRegexp = !val.match(/^[0-9]{3}[0-9]{4}$/)
    //各正規表現 変数定義 end

    switch (id) {
      // ご連絡 start
      case 'time':
        if (val == "") {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['time'] + message['null']);
        } else {
          $("#msg-" + id).removeClass('color');
          $("#" + id).removeClass('input_design');
          $("#msg-" + id).text("");
        }

        break;
        // ご連絡 end

        // お名前(姓) start
      case 'last-name':
        if (val == "") {
          $("#msg-name").addClass('color');
          $("#last-name").addClass('input_design');
          $("#msg-name").text(input['name'] + message['null']);
        } else {
          $("#msg-name").removeClass('color');
          $("#last-name").removeClass('input_design');
          $("#msg-name").text("");
        }
        break;
        // お名前(姓) end

        // お名前(名) start
      case 'first-name':
        if (val == "") {
          $("#msg-name2").addClass('color');
          $("#first-name").addClass('input_design');
          $("#msg-name2").text(input['name2'] + message['null']);
        } else {
          $("#msg-name2").removeClass('color');
          $("#first-name").removeClass('input_design');
          $("#msg-name2").text("");
        }
        break;
        // お名前(名) end

        // カナ(姓) start
      case 'lastkana-name':
        if (val == "") {
          $("#msg-kananame").addClass('color');
          $("#lastkana-name").addClass('input_design');
          $("#msg-kananame").text(input['kana'] + message['null']);
        } else if (nameRegexp) {
          $("#msg-kananame").addClass('color');
          $("#lastkana-name").addClass('input_design');
          $("#msg-kananame").text(input['kana'] + 'は全角カタカナ' + message['null2']);
        } else {
          $("#msg-kananame").removeClass('color');
          $("#lastkana-name").removeClass('input_design');
          $("#msg-kananame").text("");
        }
        break;
        // カナ(姓) end

        // カナ(名) start
      case 'firstkana-name':
        if (val == "") {
          $("#msg-kananame2").addClass('color');
          $("#firstkana-name").addClass('input_design');
          $("#msg-kananame2").text(input['kana2'] + message['null']);
        } else if (nameRegexp) {
          $("#msg-kananame2").addClass('color');
          $("#firstkana-name").addClass('input_design');
          $("#msg-kananame2").text(input['kana2'] + 'は全角カタカナ' + message['null2']);
        } else {
          $("#msg-kananame2").removeClass('color');
          $("#firstkana-name").removeClass('input_design');
          $("#msg-kananame2").text("");
        }
        break;
        // カナ(名) end

        // メールアドレス start
      case 'email':
        if (val == "") {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['email'] + message['null']);
        } else if (emailRegexp) {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['email'] + 'に' + input['email'] + message['null3']);
        } else {
          $("#msg-" + id).removeClass('color');
          $("#" + id).removeClass('input_design');
          $("#msg-" + id).text("");
        }
        break;
        // メールアドレス end

        //電話番号(市外局番) start
      case 'tel':
        if (val == "") {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['tel1'] + message['null']);
        } else if (telRegexp) {
          $("#msg-" + id).removeClass('color');
          $("#" + id).removeClass('input_design');
          $("#msg-" + id).text("");
        } else {
          $("#msg-" + id).removeClass('color');
          $("#" + id).removeClass('input_design');
          $("#msg-" + id).text("");
        }
        break;
        //電話番号(市外局番) end

        //電話番号(市内局番) start
      case 'tel2':
        if (val == "") {
          $("#msg-tel2").addClass('color');
          $("#tel2").addClass('input_design');
          $("#msg-tel2").text(input['tel2'] + message['null']);
        } else if (telRegexp) {
          $("#msg-tel2").removeClass('color');
          $("#tel2").removeClass('input_design');
          $("#msg-tel2").text("");
        } else {
          $("#msg-tel2").removeClass('color');
          $("#tel2").removeClass('input_design');
          $("#msg-tel2").text("");
        }
        break;
        //電話番号(市内局番) end

        // 電話番号(加入者番号) start
      case 'tel3':
        if (val == "") {
          $("#msg-tel3").addClass('color');
          $("#tel3").addClass('input_design');
          $("#msg-tel3").text(input['tel3'] + message['null']);
        } else if (telRegexp) {
          $("#msg-tel3").removeClass('color');
          $("#tel3").removeClass('input_design');
          $("#msg-tel3").text("");
        } else {
          $("#msg-tel3").removeClass('color');
          $("#tel3").removeClass('input_design');
          $("#msg-tel3").text("");
        }
        break;
        // 電話番号(加入者番号) end

        // 郵便番号 start
      case 'zip11':
        if (val == "") {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['addresses'] + message['null']);
        } else if (addressesRegexp) {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['addresses'] + message['null3']);
        } else {
          $("#msg-" + id).removeClass('color');
          $("#" + id).removeClass('input_design');
          $("#msg-" + id).text("");
        }
        break;
        // 郵便番号 end
    }
  });

});

//   // ご連絡 start
//     if (id == 'last-name' && val == "")  {
//       $("#msg-name").addClass('color');
//       $("#last-name").addClass('input_design');
//       $("#msg-name").text(input['name'] + message['null']);
//     } else if(id == 'last-name') {
//         $("#msg-name").removeClass('color');
//         $("#last-name").removeClass('input_design');
//         $("#msg-name").text("");
//     }
//
//   // ご連絡 end
//
//   // お名前(姓) start
//     else if (id == 'last-name' && val == "") {
//       $("#msg-name").addClass('color');
//       $("#last-name").addClass('input_design');
//       $("#msg-name").text(input['name'] + message['null']);
//     } else if(id == 'last-name') {
//       $("#msg-name").removeClass('color');
//       $("#last-name").removeClass('input_design');
//       $("#msg-name").text("");
//     }
//   // お名前(姓) end
//
//   // お名前(名) start
//     else if (id == 'first-name' && val == "") {
//       $("#msg-name2").addClass('color');
//       $("#first-name").addClass('input_design');
//       $("#msg-name2").text(input['name2'] + message['null']);
//     } else if(id == 'first-name') {
//       $("#msg-name2").removeClass('color');
//       $("#first-name").removeClass('input_design');
//       $("#msg-name2").text("");
//     }
//   // お名前(名) end
//
//   // カナ(姓) start
//     else if (id == 'lastkana-name' && val == "") {
//       $("#msg-kananame").addClass('color');
//       $("#lastkana-name").addClass('input_design');
//       $("#msg-kananame").text(input['kana'] + message['null']);
//     } else if (id == 'lastkana-name' && val.match(/[^ァ-ン \s]+/)) {
//       $("#msg-kananame").addClass('color');
//       $("#lastkana-name").addClass('input_design');
//       $("#msg-kananame").text(input['kana'] + 'は全角カタカナ' +  message['null2']);
//     } else if (id == 'lastkana-name') {
//       $("#msg-kananame").removeClass('color');
//       $("#lastkana-name").removeClass('input_design');
//       $("#msg-kananame").text("");
//     }
//   // カナ(姓) end
//
//   // カナ(名) start
//     else if (id == 'firstkana-name' && val == "") {
//       $("#msg-kananame2").addClass('color');
//       $("#firstkana-name").addClass('input_design');
//       $("#msg-kananame2").text(input['kana2'] + message['null']);
//     } else if (id == 'firstkana-name' && val.match(/[^ァ-ン \s]+/)) {
//       $("#msg-kananame2").addClass('color');
//       $("#firstkana-name").addClass('input_design');
//       $("#msg-kananame2").text(input['kana2'] + 'は全角カタカナ' +  message['null2']);
//     } else if (id == 'firstkana-name')  {
//       $("#msg-kananame2").removeClass('color');
//       $("#firstkana-name").removeClass('input_design');
//       $("#msg-kananame2").text("");
//     }
//   // カナ(名) end
//
//   // メールアドレス start
//     else if (id == 'email' && val == "")  {
//       $("#msg-" + id).addClass('color');
//       $("#email").addClass('input_design');
//       $("#msg-" + id).text(input['email'] + message['null']);
//     } else if (id == 'email' && !val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//       $("#msg-" + id).addClass('color');
//       $("#email").addClass('input_design');
//       $("#msg-" + id).text(input['email'] + 'に' + input['email'] +  message['null3']);
//     } else if (id == 'email') {
//       $("#msg-" + id).removeClass('color');
//       $("#email").removeClass('input_design');
//       $("#msg-" + id).text("");
//     }
//   // メールアドレス end
//
//   // 電話番号(市外局番) start
//     else if (id == 'tel' && val == "") {
//       $("#msg-" + id).addClass('color');
//       $("#tel").addClass('input_design');
//       $("#msg-" + id).text(input['tel'] + message['null']);
//     } else if (id == 'tel' && !val.match(/^[0-9]+$/)) {
//       $("#msg-" + id).addClass('color');
//       $("#tel").addClass('input_design');
//       $("#msg-" + id).text("");
//     } else if (id == 'tel') {
//       $("#msg-" + id).removeClass('color');
//       $("#tel").removeClass('input_design');
//       $("#msg-" + id).text("");
//     }
//   // 電話番号(市外局番) end
//
//   // 電話番号(市内局番) start
//     else if(id == 'tel2' && val == "") {
//       $("#msg-tel2").addClass('color');
//       $("#tel2").addClass('input_design');
//       $("#msg-tel2").text(input['tel2'] + message['null']);
//     } else if (id == 'tel2' && !val.match(/^[0-9]+$/)) {
//       $("#msg-tel2").addClass('color');
//       $("#tel2").addClass('input_design');
//       $("#msg-tel2").text("");
//     } else if (id == 'tel2') {
//       $("#msg-tel2").removeClass('color');
//       $("#tel2").removeClass('input_design');
//       $("#msg-tel2").text("");
//     }
//   // 電話番号(市内局番) end
//
//   // 電話番号(加入者番号) start
//     else if (id == 'tel3' && val == "") {
//       $("#msg-tel3").addClass('color');
//       $("#tel3").addClass('input_design');
//       $("#msg-tel3").text(input['tel3'] + message['null']);
//     } else if (id == 'tel3' && !val.match(/^[0-9]+$/)) {
//       $("#msg-tel3").addClass('color');
//       $("#tel3").addClass('input_design');
//       $("#msg-tel3").text("");
//     } else if (id == 'tel3') {
//       $("#msg-tel3").removeClass('color');
//       $("#tel3").removeClass('input_design');
//       $("#msg-tel3").text("");
//     }
//   // 電話番号(加入者番号) end
//
//   // 郵便番号 start
//     else if (id == 'zip11'  && val == "") {
//       $("#msg-" + id).addClass('color');
//       $("#zip11").addClass('input_design');
//       $("#msg-" + id).text(input['addresses'] + message['null']);
//     } else if (id == 'zip11' && !val.match(/^[0-9]{3}[0-9]{4}$/)) {
//       $("#msg-" + id).addClass('color');
//       $("#zip11").addClass('input_design');
//       $("#msg-" + id).text(input['addresses'] + message['null3']);
//     } else if (id == 'zip11') {
//       $("#msg-" + id).removeClass('color');
//       $("#zip11").removeClass('input_design');
//       $("#msg-" + id).text("");
//     }
//   // 郵便番号 end
//
//   });
//
// });

// $(function() {
//
//   //エラーメッセージ配列
//   var message = {
//     'null' : 'を入力してください',
//     'null2' : 'でご入力ください',
//     'null3' : 'が正しく入力されていません'
//   }
//
//   var input = {
//     'time' : 'ご希望の連絡時間帯',
//     'name' : 'お名前(姓)',
//     'name2' : 'お名前(名)',
//     'kana' : 'フリガナ(セイ)',
//     'kana2' : 'フリガナ(メイ)',
//     'email' : 'メールアドレス',
//     'tel' : '電話番号(市外局番)',
//     'tel2' : '電話番号(市内局番)',
//     'tel3' : '電話番号(加入者番号)',
//     'addresses' : '郵便番号',
//   }
//
//   $('input').on('blur', function() {
//     var id = $(this).attr('id');
//     var val = $(this).val();
//     if (id == 'time' && val == "") {
//       $("#msg-time").addClass('color');
//       $("#time").addClass('input_design');
//       $("#msg-time").text(input['time'] + message['null']);
//     } else if(id == 'time') {
//       $("#msg-time").removeClass('color');
//       $("#time").removeClass('input_design');
//       $("#msg-time").text("");
//     }
//
//     else if (id == 'last-name' && val == "") {
//       $("#msg-name").addClass('color');
//       $("#last-name").addClass('input_design');
//       $("#msg-name").text(input['name'] + message['null']);
//     } else if(id == 'last-name') {
//       $("#msg-name").removeClass('color');
//       $("#last-name").removeClass('input_design');
//       $("#msg-name").text("");
//     }
//
//     else if (id == 'first-name' && val == "") {
//       $("#msg-name2").addClass('color');
//       $("#first-name").addClass('input_design');
//       $("#msg-name2").text(input['name2'] + message['null']);
//     } else if(id == 'first-name') {
//       $("#msg-name2").removeClass('color');
//       $("#first-name").removeClass('input_design');
//       $("#msg-name2").text("");
//     }
//
//     else if (id == 'lastkana-name' && val == "") {
//       $("#msg-kananame").addClass('color');
//       $("#lastkana-name").addClass('input_design');
//       $("#msg-kananame").text(input['kana'] + message['null']);
//     } else if (id == 'lastkana-name' && val.match(/[^ァ-ン \s]+/)) {
//       $("#msg-kananame").addClass('color');
//       $("#lastkana-name").addClass('input_design');
//       $("#msg-kananame").text(input['kana'] + 'は全角カタカナ' +  message['null2']);
//     } else if (id == 'lastkana-name') {
//       $("#msg-kananame").removeClass('color');
//       $("#lastkana-name").removeClass('input_design');
//       $("#msg-kananame").text("");
//     }
//
//     else if (id == 'firstkana-name' && val == "") {
//       $("#msg-kananame2").addClass('color');
//       $("#firstkana-name").addClass('input_design');
//       $("#msg-kananame2").text(input['kana2'] + message['null']);
//     } else if (id == 'firstkana-name' && val.match(/[^ァ-ン \s]+/)) {
//       $("#msg-kananame2").addClass('color');
//       $("#firstkana-name").addClass('input_design');
//       $("#msg-kananame2").text(input['kana2'] + 'は全角カタカナ' +  message['null2']);
//     } else if (id == 'firstkana-name')  {
//       $("#msg-kananame2").removeClass('color');
//       $("#firstkana-name").removeClass('input_design');
//       $("#msg-kananame2").text("");
//     }
//
//     else if (id == 'email' && val == "")  {
//       $("#msg-email").addClass('color');
//       $("#email").addClass('input_design');
//       $("#msg-email").text(input['email'] + message['null']);
//     } else if (id == 'email' && !val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//       $("#msg-email").addClass('color');
//       $("#email").addClass('input_design');
//       $("#msg-email").text(input['email'] + 'に' + input['email'] +  message['null3']);
//     } else if (id == 'email') {
//       $("#msg-email").removeClass('color');
//       $("#email").removeClass('input_design');
//       $("#msg-email").text("");
//     }
//
//     else if (id == 'tel' && val == "") {
//       $("#msg-tel").addClass('color');
//       $("#tel").addClass('input_design');
//       $("#msg-tel").text(input['tel'] + message['null']);
//     } else if (id == 'tel' && !val.match(/^[0-9]+$/)) {
//       $("#msg-tel").addClass('color');
//       $("#tel").addClass('input_design');
//       $("#msg-tel").text("");
//     } else if (id == 'tel') {
//       $("#msg-tel").removeClass('color');
//       $("#tel").removeClass('input_design');
//       $("#msg-tel").text("");
//     }
//
//     else if(id == 'tel2' && val == "") {
//       $("#msg-tel2").addClass('color');
//       $("#tel2").addClass('input_design');
//       $("#msg-tel2").text(input['tel2'] + message['null']);
//     } else if (id == 'tel2' && !val.match(/^[0-9]+$/)) {
//       $("#msg-tel2").addClass('color');
//       $("#tel2").addClass('input_design');
//       $("#msg-tel2").text("");
//     } else if (id == 'tel2') {
//       $("#msg-tel2").removeClass('color');
//       $("#tel2").removeClass('input_design');
//       $("#msg-tel2").text("");
//     }
//
//     else if (id == 'tel3' && val == "") {
//       $("#msg-tel3").addClass('color');
//       $("#tel3").addClass('input_design');
//       $("#msg-tel3").text(input['tel3'] + message['null']);
//     } else if (id == 'tel3' && !val.match(/^[0-9]+$/)) {
//       $("#msg-tel3").addClass('color');
//       $("#tel3").addClass('input_design');
//       $("#msg-tel3").text("");
//     } else if (id == 'tel3') {
//       $("#msg-tel3").removeClass('color');
//       $("#tel3").removeClass('input_design');
//       $("#msg-tel3").text("");
//     }
//
//     else if (id == 'zip11' && val == "") {
//       $("#msg-addresses").addClass('color');
//       $("#zip11").addClass('input_design');
//       $("#msg-addresses").text(input['addresses'] + message['null']);
//     } else if (id == 'zip11' && !val.match(/^[0-9]{3}[0-9]{4}$/)) {
//       $("#msg-addresses").addClass('color');
//       $("#zip11").addClass('input_design');
//       $("#msg-addresses").text(input['addresses'] + message['null3']);
//     } else if (id == 'zip11') {
//       $("#msg-addresses").removeClass('color');
//       $("#zip11").removeClass('input_design');
//       $("#msg-addresses").text("");
//     }
//   });
//
// });
//
