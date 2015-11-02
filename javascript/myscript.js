    // function myFunc() {
    //   var strMsg = "現在の日時は" + new Date() + "です。";
    //   document.getElementById("msg").innerHTML = strMsg;
    // }

    function addMessage() {
      var msgElm = document.getElementById("message");
      var msgText = document.createTextNode("こんにちは！");
      msgElm.appendChild(msgText);
    }