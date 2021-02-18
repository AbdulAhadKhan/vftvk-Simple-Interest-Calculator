function compute()
{
    // Get  input values
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    // Computations
    interest = principal * years * rate / 100;
    crntYear = new Date().getFullYear() 
    endYear = parseInt(crntYear) + years;
}

function rateUpdate() {
    rate = document.getElementById("rate").value;
    document.getElementById("rate-update").innerHTML = rate + "%";
}