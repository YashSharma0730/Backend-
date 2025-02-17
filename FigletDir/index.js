const figlet= require("figlet");


figlet("Hello Sush <3 ", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });