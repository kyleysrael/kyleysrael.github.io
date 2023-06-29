function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".sendBtn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg == "") {
      emptyerror();
    } else {
      sendMail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendMail(name, email, msg) {
  emailjs.send("service_969t1ov", "template_lxcmurn", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Error!",
    text: "Fields cannot be empty",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email sent",
    text: "We try to reply in 24hrs",
    icon: "success",
  });
}
