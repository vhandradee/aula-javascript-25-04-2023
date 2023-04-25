//buscando a lista de um arrayuando for

let msg =document.getElementById('msg')

const usuarios =[
    {nome: 'Huguinho', idade:18},
    {nome: 'Zezinhio', idade:19},
    {nome: 'Luizinho', idade:12},
];

const Users= usuarios.length;

for (let i=0; i<Users; i++){
    msg.innerHTML+=`<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

var imagens=[
    'images.jpg',
    'images (2).jpg',
    'images (3).jpg',
];

/* declarando variaveis */
var Index= 0;
var time= 2000;

/* criando uma funcao */

function slideShow(){
    document.getElementById('image').src= imagens[Index];
    Index++;
    if (Index == imagens.length){Index= 0;}/*definindo o tempo de 2 milesegundos*/
    setTimeout("slideShow()",time);/*definindo o tempo de 2 milesegundos*/
}

slideShow();



