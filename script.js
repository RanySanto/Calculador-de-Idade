function transformarIdade(dia, mes, ano) {
    const idadeMiliseconds = (Date.now() - new Date(ano, mes, dia))
    const idadeFinal = idadeMiliseconds*3.2*10**-11

    const data = document.getElementById("data");
    const anos = parseInt(idadeFinal)
    data.textContent = anos + " " + "years";

    const data2 = document.getElementById("data2");
    const meses = parseInt((idadeFinal-anos)*12)
    data2.textContent = meses + "  "+ "months";

    const data3 = document.getElementById("data3");
    const dias = parseInt(((idadeFinal-anos)*12-meses)*30)
    data3.textContent = dias + " " + "days";
}



const submit = document.getElementById("submit")
const inpDay = document.getElementById("date-day")
const inpMonth = document.getElementById("date-month")
const inpYear = document.getElementById("date-year")

let error = document.getElementById("error")

submit.addEventListener('click', function(){
    const day = inpDay.value;
    const month = inpMonth.value;
    const year = inpYear.value;
    if(day == 0 | month == 0 | year == 0){
        error.textContent = "Input can't be null"
    }
    else if(day > 31 | day < 1){
        error.textContent = "Day need to be a number between 1-31"
    }
    else if(month > 12 | month < 1){
        error.textContent = "Month need to be a number between 1-12"
    }
    else if(year > 2024){
        error.textContent = "The birth year can't be in the future"
    }
    else if(month == 4 | 6 | 9 | 11 && day > 30){
        error.textContent = "This month can't have more than 30 days"
    }
    else if(month == 2 && day > 29){
        error.textContent = "February doesn't have then 28/29 days"
    }
    else if(month == 2 && day > 28 && year % 4 !== 0){
        error.textContent = "If isn't a leap year, february can't have more than 28 days"
    }
    else {
        transformarIdade(day, month, year);
    }
})
