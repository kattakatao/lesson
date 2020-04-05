$(function() {
  // ご希望の連絡時間 //
  $('#time').blur(function() {
    emptyTimeCheck($(this));
  });

  // お名前(姓) //
  $('#last-name').blur(function() {
    emptyNameCheck($(this));
  });

  // お名前(名) //
  $('#first-name').blur(function() {
    emptyName2Check($(this));
  });

  // カナ(姓) //
  $('#lastkana-name').blur(function() {
    emptyKanaCheck($(this));
  });

  // カナ(名) //
  $('#firstkana-name').blur(function() {
    emptyKana2Check($(this));
  });

  // メールアドレス//
  $('#email').blur(function() {
    emptyEmailCheck($(this));
  });

  // 電話番号(市外局番) //
  $('#tel').blur(function() {
    emptyTelCheck($(this));
  });

  // 電話番号(市内局番) //
  $('#tel2').blur(function() {
    emptyTel2Check($(this));
  });

  // 電話番号(加入者番号) //
  $('#tel3').blur(function() {
    emptyTel3Check($(this));
  });

  // 郵便番号 //
  $('#zip11').blur(function() {
    emptyAddresses3Check($(this));
  });

  // ご希望の連絡時間 //
  emptyTimeCheck = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-time").addClass('color');
      $("#time").addClass('input_design');
      $("#msg-time").text("ご希望の連絡時間帯を入力してください");
    } else {
      $("#msg-time").removeClass('color');
      $("#time").removeClass('input_design');
      $("#msg-time").text("");
    }
  };

  // お名前(姓) //
  emptyNameCheck = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-name").addClass('color');
      $("#last-name").addClass('input_design');
      $("#msg-name").text("お名前(姓)を入力してください");
    } else {
      $("#msg-name").removeClass('color');
      $("#last-name").removeClass('input_design');
      $("#msg-name").text("");
    }
  };

  // お名前(名) //
  emptyName2Check = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-name2").addClass('color');
      $("#first-name").addClass('input_design');
      $("#msg-name2").text("お名前(名)を入力してください");
    } else {
      $("#msg-name2").removeClass('color');
      $("#first-name").removeClass('input_design');
      $("#msg-name2").text("");
    }
  };

  // カナ(姓) //
  emptyKanaCheck = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-kananame").addClass('color');
      $("#lastkana-name").addClass('input_design');
      $("#msg-kananame").text("フリガナ(セイ)を入力してください");
    } else if (val.match(/[^ァ-ン \s]+/)) {
      $("#msg-kananame").addClass('color');
      $("#lastkana-name").addClass('input_design');
      $("#msg-kananame").text("フリガナ(セイ)は全角カタカナでご入力ください");
    } else {
      $("#msg-kananame").removeClass('color');
      $("#lastkana-name").removeClass('input_design');
      $("#msg-kananame").text("");
    }
  };

  // カナ(名) //
  emptyKana2Check = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-kananame2").addClass('color');
      $("#firstkana-name").addClass('input_design');
      $("#msg-kananame2").text("フリガナ(メイ)を入力してください");
    } else if (val.match(/[^ァ-ン \s]+/)) {
      $("#msg-kananame2").addClass('color');
      $("#firstkana-name").addClass('input_design');
      $("#msg-kananame2").text("フリガナ(メイ)は全角カタカナでご入力ください");
    } else {
      $("#msg-kananame2").removeClass('color');
      $("#firstkana-name").removeClass('input_design');
      $("#msg-kananame2").text("");
    }
  };

  // メールアドレス//
  emptyEmailCheck = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-email").addClass('color');
      $("#email").addClass('input_design');
      $("#msg-email").text("メールアドレスを入力してください");
    } else if (!val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      $("#msg-email").addClass('color');
      $("#email").addClass('input_design');
      $("#msg-email").text("メールアドレスにメールアドレスが正しく入力されていません");
    } else {
      $("#msg-email").removeClass('color');
      $("#email").removeClass('input_design');
      $("#msg-email").text("");
    }
  };

  // 電話番号(市外局番) //
  emptyTelCheck = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-tel").addClass('color');
      $("#tel").addClass('input_design');
      $("#msg-tel").text("電話番号(市外局番)を入力してください");
    } else if (!val.match(/^[0-9]+$/)) {
      $("#msg-tel").addClass('color');
      $("#tel").addClass('input_design');
      $("#msg-tel").text("");
    } else {
      $("#msg-tel").removeClass('color');
      $("#tel").removeClass('input_design');
      $("#msg-tel").text("");
    }
  };

  // 電話番号(市内局番) //
  emptyTel2Check = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-tel2").addClass('color');
      $("#tel2").addClass('input_design');
      $("#msg-tel2").text("電話番号(市内局番)を入力してください");
    } else if (!val.match(/^[0-9]+$/)) {
      $("#msg-tel2").addClass('color');
      $("#tel2").addClass('input_design');
      $("#msg-tel2").text("");
    } else {
      $("#msg-tel2").removeClass('color');
      $("#tel2").removeClass('input_design');
      $("#msg-tel2").text("");
    }
  };

  // 電話番号(加入者番号) //
  emptyTel3Check = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-tel3").addClass('color');
      $("#tel3").addClass('input_design');
      $("#msg-tel3").text("電話番号(加入者番号)を入力してください");
    } else if (!val.match(/^[0-9]+$/)) {
      $("#msg-tel3").addClass('color');
      $("#tel3").addClass('input_design');
      $("#msg-tel3").text("");
    } else {
      $("#msg-tel3").removeClass('color');
      $("#tel3").removeClass('input_design');
      $("#msg-tel3").text("");
    }
  };

  // 郵便番号 //
  emptyAddresses3Check = function(ele) {
    var val = ele.val();

    if (val == "") {
      $("#msg-addresses").addClass('color');
      $("#zip11").addClass('input_design');
      $("#msg-addresses").text("郵便番号を入力してください");
    } else if (!val.match(/^[0-9]{3}[0-9]{4}$/)) {
      $("#msg-addresses").addClass('color');
      $("#zip11").addClass('input_design');
      $("#msg-addresses").text("郵便番号が正しく入力されていません");
    } else {
      $("#msg-addresses").removeClass('color');
      $("#zip11").removeClass('input_design');
      $("#msg-addresses").text("");
    }
  };

})
