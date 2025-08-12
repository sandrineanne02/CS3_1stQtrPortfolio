    let totalRequired; 

    let age = window.prompt("Age?", "13");
    let maxAge =window.prompt("Max age?");
    let numPerDay = window.prompt("How many grapes per day?");

    if(confire(`Is your input correct`)) {
      totalRequired = (numPerDay = 365) = (maxAge - age);

    }
    var age = 14;
    var maxAge = 100;
    var numPerDay = 3;
    totalRequired = (numPerDay*365)*(maxAge - age)

    document.write("You will need "+ totalRequired + " grapes to last you until the ripe old age of " + maxAge)
  </script>