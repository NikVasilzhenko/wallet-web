$(document).ready(function() {
  (function(b, r, a, n, c, h, _, s, d, k) {
    if (!b[n] || !b[n]._q) {
      for (; s < _.length; ) c(h, _[s++]);
      d = r.createElement(a);
      d.async = 1;
      d.src = "https://cdn.branch.io/branch-latest.min.js";
      k = r.getElementsByTagName(a)[0];
      k.parentNode.insertBefore(d, k);
      b[n] = h;
    }
  })(
    window,
    document,
    "script",
    "branch",
    function(b, r) {
      b[r] = function() {
        b._q.push([r, arguments]);
      };
    },
    { _q: [], _v: 1 },
    "addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(
      " "
    ),
    0
  );

  branch.init("key_live_niJDEEwe6Nd7BNlaQa7xchcozFdMG5U5");

  function sendSMS(form, value) {
    if (!value) {
      var phonePrefix = form.phone_prefix.value;
      var phoneMain = form.phone_main.value;

      var phone = phonePrefix + phoneMain;
    } else {
      var phone = value;
    }

    var linkData = {
      tags: [],
      channel: "Website",
      feature: "TextMeTheApp",
      data: {
        foo: "bar"
      }
    };
    var options = {};
    var callback = function(err, result) {
      if (err) {
        alert("Sorry, something went wrong.");
      } else {
        alert("SMS sent!");
      }
    };
    branch.sendSMS(phone, linkData, options, callback);
    form.phone.value = "";
  }

  window.sendSMS = sendSMS;

  var popupForms = document.querySelectorAll(".popup__form");
  var footerForm = document.querySelector("#footer-sms-form");

  Array.prototype.map.call(popupForms, function(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      sendSMS(form);
      return false;
    });
  });

  footerForm.addEventListener("submit", function(e) {
    var phoneInput = document.querySelector("#footer-phone").value;
    e.preventDefault();
    sendSMS(footerForm, phoneInput);
  });
});
