$(function() {

  // var = element ['#time'
  //                '#last-name',
  //                '#first-name',
  //                '#lastkana-name',
  //                '#firstkana-name',
  //                '#email',
  //                '#tel',
  //                '#tel2',
  //                '#zip11']
  //
  // $('input').on('blur', function(){
  //   if ($('#time')) {
  //       emptyTimeCheck($(this));
  //   } else if ($('#last-name')) {
  //     emptyNameCheck($(this));
  //   } else if ($('#first-name')) {
  //     emptyName2Check($(this));
  //   } else if ($('#lastkana-name')) {
  //     emptyKanaCheck($(this));
  //   // } else if $('#firstkana-name') {
  //   //   emptyKana2Check($(this));
  //   // } else if $('#email') {
  //   //   emptyEmailCheck($(this));
  //   // } else if $('#tel') {
  //   //   emptyTelCheck($(this));
  //   // } else if $('#tel2') {
  //   //   emptyTel2Check($(this));
  //   // } else if $('#tel3') {
  //   //   emptyTel3Check($(this));
  //   // } else if $('#zip11') {
  //   //   emptyAddresses3Check($(this));
  //   } else {
  //     return false;
  //   }
  // });
  // ご希望の連絡時間 //
  // $('#time').blur(function() {
  //   emptyTimeCheck($(this));
  // });

  // お名前(姓) //
  // $('#last-name').blur(function() {
  //   emptyNameCheck($(this));
  // });

  // お名前(名) //
  // $('#first-name').blur(function() {
  //   emptyName2Check($(this));
  // });

  // カナ(姓) //
  // $('#lastkana-name').blur(function() {
  //   emptyKanaCheck($(this));
  // });

  // カナ(名) //
  // $('#firstkana-name').blur(function() {
  //   emptyKana2Check($(this));
  // });

  // メールアドレス//
  // $('#email').blur(function() {
  //   emptyEmailCheck($(this));
  // });

  // 電話番号(市外局番) //
  // $('#tel').blur(function() {
  //   emptyTelCheck($(this));
  // });

  // 電話番号(市内局番) //
  // $('#tel2').blur(function() {
  //   emptyTel2Check($(this));
  // });

  // 電話番号(加入者番号) //
  // $('#tel3').blur(function() {
  //   emptyTel3Check($(this));
  // });

  // // 電話番号(全て) //
  // $('.tel-txt').blur(function() {
  //   emptyTelallCheck($(this));
  // });

  // 郵便番号 //
  // $('#zip11').blur(function() {
  //   emptyAddresses3Check($(this));
  // });

  //エラーメッセージ配列
  var msg =  ['ご希望の連絡時間帯を入力してください','お名前(姓)を入力してください', 'お名前(名)を入力してください',"フリガナ(セイ)を入力してください",'フリガナ(セイ)は全角カタカナでご入力ください',
              'フリガナ(メイ)を入力してください','フリガナ(メイ)は全角カタカナでご入力ください','メールアドレスを入力してください','メールアドレスにメールアドレスが正しく入力されていません',
              '電話番号(市外局番)を入力してください','電話番号(市内局番)を入力してください','電話番号(加入者番号)を入力してください','郵便番号を入力してください','郵便番号が正しく入力されていません']

  // ご希望の連絡時間 //
  // emptyTimeCheck = function(ele) {
  //   var val = ele.val();
  $('input#time').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-time").addClass('color');
      $("#time").addClass('input_design');
      $("#msg-time").text(msg[0]);
    } else {
      $("#msg-time").removeClass('color');
      $("#time").removeClass('input_design');
      $("#msg-time").text("");
    }
  });

  // お名前(姓) //
  // emptyNameCheck = function(ele) {
  //   var val = ele.val();
  $('input#last-name').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-name").addClass('color');
      $("#last-name").addClass('input_design');
      $("#msg-name").text(msg[1]);
    } else {
      $("#msg-name").removeClass('color');
      $("#last-name").removeClass('input_design');
      $("#msg-name").text("");
    }
  });

  // お名前(名) //
  // emptyName2Check = function(ele) {
  //   var val = ele.val();
  $('input#first-name').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-name2").addClass('color');
      $("#first-name").addClass('input_design');
      $("#msg-name2").text(msg[2]);
    } else {
      $("#msg-name2").removeClass('color');
      $("#first-name").removeClass('input_design');
      $("#msg-name2").text("");
    }
  });

  // カナ(姓) //
  // emptyKanaCheck = function(ele) {
  //   var val = ele.val();
  $('input#lastkana-name').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-kananame").addClass('color');
      $("#lastkana-name").addClass('input_design');
      $("#msg-kananame").text(msg[3]);
    } else if (!$(this).val().match(/[^ァ-ン \s]+/)) {
      $("#msg-kananame").addClass('color');
      $("#lastkana-name").addClass('input_design');
      $("#msg-kananame").text(msg[4]);
    } else {
      $("#msg-kananame").removeClass('color');
      $("#lastkana-name").removeClass('input_design');
      $("#msg-kananame").text("");
    }
  });

  // カナ(名) //
  // emptyKana2Check = function(ele) {
  //   var val = ele.val();
  $('input#firstkana-name').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-kananame2").addClass('color');
      $("#firstkana-name").addClass('input_design');
      $("#msg-kananame2").text(msg[5]);
    } else if (!$(this).val().match(/[^ァ-ン \s]+/)) {
      $("#msg-kananame2").addClass('color');
      $("#firstkana-name").addClass('input_design');
      $("#msg-kananame2").text(msg[6]);
    } else {
      $("#msg-kananame2").removeClass('color');
      $("#firstkana-name").removeClass('input_design');
      $("#msg-kananame2").text("");
    }
  });

  // メールアドレス//
  // emptyEmailCheck = function(ele) {
  //   var val = ele.val();
  $('input#email').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-email").addClass('color');
      $("#email").addClass('input_design');
      $("#msg-email").text(msg[7]);
    } else if (!$(this).val().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      $("#msg-email").addClass('color');
      $("#email").addClass('input_design');
      $("#msg-email").text(msg[8]);
    } else {
      $("#msg-email").removeClass('color');
      $("#email").removeClass('input_design');
      $("#msg-email").text("");
    }
  });

  // 電話番号(市外局番) //
  // emptyTelCheck = function(ele) {
  //   var val = ele.val();
  $('input#tel').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-tel").addClass('color');
      $("#tel").addClass('input_design');
      $("#msg-tel").text(msg[9]);
    } else if (!$(this).val().match(/^[0-9]+$/)) {
      $("#msg-tel").addClass('color');
      $("#tel").addClass('input_design');
      $("#msg-tel").text("");
    } else {
      $("#msg-tel").removeClass('color');
      $("#tel").removeClass('input_design');
      $("#msg-tel").text("");
    }
  });

  // 電話番号(市内局番) //
  // emptyTel2Check = function(ele) {
  //   var val = ele.val();
  $('input#tel2').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-tel2").addClass('color');
      $("#tel2").addClass('input_design');
      $("#msg-tel2").text(msg[10]);
    } else if (!$(this).val().match(/^[0-9]+$/)) {
      $("#msg-tel2").addClass('color');
      $("#tel2").addClass('input_design');
      $("#msg-tel2").text("");
    } else {
      $("#msg-tel2").removeClass('color');
      $("#tel2").removeClass('input_design');
      $("#msg-tel2").text("");
    }
  });

  // 電話番号(加入者番号) //
  // emptyTel3Check = function(ele) {
  //   var val = ele.val();
  $('input#tel3').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-tel3").addClass('color');
      $("#tel3").addClass('input_design');
      $("#msg-tel3").text(msg[11]);
    } else if (!$(this).val().match(/^[0-9]+$/)) {
      $("#msg-tel3").addClass('color');
      $("#tel3").addClass('input_design');
      $("#msg-tel3").text("");
    } else {
      $("#msg-tel3").removeClass('color');
      $("#tel3").removeClass('input_design');
      $("#msg-tel3").text("");
    }
  });

  // // 電話番号(全て) //
  // emptyTelallCheck = function(ele) {
  //   var val = ele.val();
  //
  //   if (val == "") {
  //     $("#msg-tel3").addClass('color');
  //     $("#teltxt").addClass('input_design');
  //     $("#msg-tel3").text("電話番号(加入者番号)を入力してください");
  //   } else if (!val.match(/^[0-9]+$/)) {
  //     $("#msg-tel3").addClass('color');
  //     $("#tel3").addClass('input_design');
  //     $("#msg-tel3").text("");
  //   } else {
  //     $("#msg-tel3").removeClass('color');
  //     $("#teltxt").removeClass('input_design');
  //     $("#msg-tel3").text("");
  //   }
  // };

  // 郵便番号 //
  // emptyAddresses3Check = function(ele) {
  //   var val = ele.val();
  $('input#zip11').on('blur', function() {
    if ($(this).val() === "") {
      $("#msg-addresses").addClass('color');
      $("#zip11").addClass('input_design');
      $("#msg-addresses").text(msg[12]);
    } else if (!$(this).val().match(/^[0-9]{3}[0-9]{4}$/)) {
      $("#msg-addresses").addClass('color');
      $("#zip11").addClass('input_design');
      $("#msg-addresses").text(msg[13]);
    } else {
      $("#msg-addresses").removeClass('color');
      $("#zip11").removeClass('input_design');
      $("#msg-addresses").text("");
    }
  });

});
