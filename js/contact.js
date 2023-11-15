function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    name: document.getElementById("message").value,
  };

  const service_ID="service_5dssc9d";
  const Template_ID="template_hr24jpk";

  emailjs.send(service_ID,Template_ID,params).then(
    res =>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("your form has been submited");
    })
    .catch((err) => console.log(err));
}