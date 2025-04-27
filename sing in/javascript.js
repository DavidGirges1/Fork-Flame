
function login() {
  
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("من فضلك املأ البريد الإلكتروني وكلمة المرور.");
    return;
  }

  if (email === "geovanygeorge3@gmail.com" && password === "123456") {
    alert("تم تسجيل الدخول بنجاح!");
    
    window.location= 'index.html'
  } else {
    alert("بيانات الدخول غير صحيحة!");
  }

  console.log("الإيميل:", email);
  console.log("كلمة السر:", password);
}
