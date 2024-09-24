function sortear() {

    const indiceAleatorio = Math.floor(Math.random() * frasesMotivacionais.length);


    const fraseSorteada = frasesMotivacionais[indiceAleatorio];


    document.getElementById("resultado").textContent = fraseSorteada;
}

const frasesMotivacionais = [
    "1- O mal de agora pode ser simplesmente um véu de sombra ocultando o bem de manhã.",
    "2- Regozijemo-nos pela felicidade de já albergar conosco o desejo sadio de nos educarmos e, toda vez que o desânimo nos atire no chão da dificuldade, levantemo-nos, tantas vezes quantas forem necessárias, para o serviço do bem, na certeza de que não estamos sozinhos",
    "3- Não receies. Atende Ao dever que abraçaste. Nem sempre acertarás, mas corrige-te e anda.",
    "4- Se o desânimo progura mergulhar-te na amargura, Não duvides, meu irmão, Que a vida, por toda parte, É nova luz a buscar-te.",
    "5- Recorda que o Senhorespera por tua boa vontade e por teus braços para responder com a paz e com a esperança aos que te cercam.",
    "6- Cultive o contentamento de sempre ofertar o melhor que possa. Não estrague, entretanto, os seus benefícios com a exigência da gratidão.",
    "7- Aprendamos a respeitar o próximo e auxiliá-lo, na convicção de que, amparando os nossos irmãos de caminho, auxiliaremos a nós mesmos.",
    "8- Fale como julgue melhor. Ouça, porém, com apreço a palavra do próxim, qualquer que ela seja.",
    "9- Caridade no olhar. Caridade no gesto. Caridade na voz. Caridade na referência. Caridade na opinião. Caridade no trabalho. Caridade na atitude. Onde estejamos, peçamos a ela no sustente e dirija.",
    "10- Colabore na contrução do bem. Mas não crie dificuldades na obra a realizar.",
    "11- Recordemos o olhar compreensivo e amoroso de Jesus, a fim de esquecermos a viciosa preocupação com o argueiro que, por vezes, aparece no campo visual dos nossos irmãos de experiência.",
    "12- Se você deseja auxílio eficiente, tanto quanto possível, dê auxílio completo aos outros, sem desajudar a ninguém.",
    "13- Seja onde for, abençoa para que a bênção dos outros te acompanhe. Todas as criaturas e todas as coisas te respondem segundo o toque de tuas palavras ou de tuas mãos.",
    "14- Exalte o bem. Entretanto, não destaque o mal.",
    "15- Teu lar é um ponto bendito do Universo em que te é possível exercer todas as formas de abnegação a benefício dos outros e de ti mesmo, perante Deus. Pensa nisso e o maor te iluminará.",
    "16- Acostumemo-nos a servir e abençoar sem esforço, tanto quanto nos apropriamos do ar, respirando mecanicamente. Compreender por hábito e auxiliar aos outros sem ideia de sacrifício.",
    "17- Convence-te de que existem males eternos. Toda dor chega e passa. O dia é sempre novo para quem trabalha. Não conserves ressentimentos. A desilusão de agora será benção depois.",
    "18- Reflitamos na parcela de influência e de ação que impomos á vida, na pessoa dos semelhantes, porque de tudo o que dermos á vida a vida também nos trará.",
    "19- Não é a dádiva de tua abastança ou o valor de tua cultura que importam no serviço de elevação e aprimoramento da paisagem que te rodeia. É o modo com que passas a exprimi-los, cedendo de ti mesmo naquilo que o Senhor te emprestou para distribuir.",
    "20- Ante as faltas de amor, alma queirda, Não te dês à censura sempre vã. Que o teu dia de amor incompreendido, Talvez chegue amanhã.",
    "21- Começa, aceitando a própria vida tal qual é e procurando melhorá-la com paciência "

];