(function global() {

let vaga = [];

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

//data completa
var date = new Date();
//mes
var month = date.getMonth();
//ano
var dateFullYear = date.getFullYear();
//dias
const days = daysInMonth(month,dateFullYear);

//verifica o mes
const exactMonth = state => {
	switch(month) {
		case 0: return 'Janeiro';
		case 1: return 'Fevereiro';
		case 2: return 'Março';
		case 3: return 'Abril';
		case 4: return 'Maio';
		case 5: return 'Junho';
		case 6: return 'Julho';
		case 7: return 'Agosto';
		case 8: return 'Setembro';
		case 9: return 'Outubro';
		case 10: return 'Novembro';
		case 11: return 'Dezembro';
		default: return 'Não encontrado'
	}
}

//passa o mes e o ano
document.querySelector('h2').innerHTML = `${exactMonth('month')} ${dateFullYear}`;

//anexa a function confirm
document.querySelectorAll('.container-btn-submit button')[0]
.addEventListener("click", confirm)

document.querySelectorAll('.container-btn-submit button')[1]
.addEventListener("click", confirm)

class Random {
    constructor(quantidade, aleatorio) {
        this.quantidade = quantidade;
        this.aleatorio = aleatorio;
    }    
    get randomizer() {
        return this.randomTd()
    }
    randomTd() {
        let tds = document.querySelectorAll('.days-week td');
        return Math.floor(Math.random()*tds.length)
    }
}

(function templateDaysWeek() {
    
    for(i = 1; i <= days; i++) {
        //cria elemento td e atrela o numero e id com base no param i
        const td = document.createElement("td");
        td.innerHTML = i;
        td.id = i;
        //anexa o td criado a classe days-week(tr)
        document.querySelector('.days-week').append(td)

    }
    const tds = document.querySelectorAll('.days-week td');

    //instancia o numero aleatorio da classe random
    const random = new Random(10, 10);

    for(i = 0; i < 10; i++) {
        if(random.randomizer === random.randomizer) {
            //não faça nada
        } else {
            tds[random.randomizer].classList.add("occupied");

        }

    }
      

    //console.log(tds[0].classList)
    for(i = 0; i < tds.length; i++) {
        if(tds[i].classList == "occupied") {
            //console.log(tds[i]);
            tds[i].classList.add("rent-vacancy");
            tds[i].addEventListener("click", rentVacancy)

        }
    }
     
})();

function rentVacancy(event) {
    if(event.target.classList.value.match(/get/)) {
        alert('vaga ja reseervada');
    } else {
        const display = document.querySelector('.show-message-none');
        display.classList.add("show-message-active");
        let numero = event.target.id;
        vaga = [];
        vaga.push(event.target.innerHTML)
    }

}
 

function confirm(event) {

    if(event.target.classList == "btn-sim") {
        let n = (vaga-1);
        //document.querySelectorAll('.days-week td')[lista]
       
        //passar cor para vaga clicada
        document.querySelectorAll('.days-week td')[n].classList.add("get")
        //exibi a messagem de deseja confirma essa vaga
        document.querySelector('.show-message-active').classList.remove("show-message-active");
        //exibi a messagem de confirmação
        document.querySelector('.confirm-none').classList.add("confirm-active");
        document.querySelector('.confirm-nao-none').classList.remove("confirm-nao");

        //exibi a messagem de vaga confirmada
        document.querySelector('.confirm-sim-none').classList.add("confirm-sim");

        setTimeout(() => { 
            document.querySelector('.confirm-none').classList.remove("confirm-active");
            document.querySelector('.confirm-sim-none').classList.remove("confirm-sim");
        }, 1500);

        //document.querySelector('.show-message-active').classList.remove("show-message-active");
    }
    else if(event.target.classList == "btn-nao") {
        //remove a messagem de deseja confirma essa vaga
        document.querySelector('.show-message-active').classList.remove("show-message-active");
        //exibi a messagem de negação
        document.querySelector('.confirm-none').classList.add("confirm-active");
        //exibi texto de negação    
        document.querySelector('.confirm-nao-none').classList.add("confirm-nao");
        setTimeout(() => { 
            document.querySelector('.confirm-none').classList.remove("confirm-active");
            }, 1500);
    }
}

/*finalização final da function global*/
})();