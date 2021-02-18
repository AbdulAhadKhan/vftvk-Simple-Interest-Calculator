function compute()
{
    // Get  input values
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    // Computations
    interest = principal * years * rate / 100;
    endYear = new Date().getFullYear() + parseInt(years);

    // Display Result
    el = document.getElementById("result");
    el.innerHTML = "If you deposit " + principal + "<br/>";
    el.innerHTML += "at an interest rate of " + rate + "%." + "<br/>";
    el.innerHTML += "You will recieve an amount of " + interest + ",<br/>";
    el.innerHTML += "in the year " + endYear + ".<br/>";
}

function rateUpdate() {
    rate = document.getElementById("rate").value;
    document.getElementById("rate-update").innerHTML = rate + "%";
}