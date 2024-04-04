const botoes = document.querySelectorA11("botao"); 
const textos = document.querySelectorA11(".aba-conteudo"); for(let i=0;i
     <botoes.length;i++){
         botoes[1].onclick = function(){ for(let j=0;j
            <botoes.length;j++){
      botoes[j].classlist.remove("ativo"); textos[j].classList.remove("ativo");
      } botoes[i].classlist.add("ativo"); textos[i].classList.add("ativo"); } } 
     const contadores = Document.querySelectorA11(".contador"); 
        const tempoObjetivo1 = new Date("2024-10-05T00:00:00"); 
                 contadores [0].texContent = calculatempo(tempoObjetivo1);
                  function calculatempo(tempoObjetivo1){
                     let tempoObjetivo1 = mew Date();
                      let tempofinal = tempoObjetivo1 - tempoAtual;
                       let segundos = tempoFinal/1000; 
                       let minutos = Math.floor(minutos/60);
                        let horas = math.floor(minutos/60);
      let dias = math.floor(horas/24); 
      segundos %= 60; minutos %= 60; horas %= 24;
        return dias + " dias " + horas + " horas " + minutos + " minutos "
         const botoes = document.querySelectorA11("botao"); 
         const textos = document.querySelectorA11(".aba-conteudo"); for(let i=0;i
             <botoes.length;i++){
                 botoes[1].onclick = function(){
                     for(let j=0;j<botoes.length;j++){
                         botoes[j].classlist.remove("ativo"); textos[j].classList.remove("ativo"); } botoes[i].classlist.add("ativo"); textos[i].classList.add("ativo"); } } const contadores = Document.querySelectorA11(".contador"); const tempoObjetivo1 = new Date("2024-10-05T00:00:00"); contadores [0].texContent = calculatempo(tempoObjetivo1); function calculatempo(tempoObjetivo1){ let tempoObjetivo1 = mew Date(); let tempofinal = tempoObjetivo1 - tempoAtual; let segundos = tempoFinal/1000; let minutos = Math.floor(minutos/60); let horas = math.floor(minutos/60); let dias = math.floor(horas/24); segundos %= 60; minutos %= 60; horas %= 24; return dias + " dias " + horas + " horas " + minutos + 
" minutos " 