function verificar(){
   var data = new Date()
   var ano = data.getFullYear() //pega o ano atual do sitema
   var res = window.document.getElementById('res')
   var dateano = window.document.getElementById('date') 
   if (dateano.value.length == 0 || dateano.value > ano){
       window.alert('[ERRO] verifique os dados novamente' )
   } else{
       var radsexo = document.getElementsByName('sexo') //[0][1] posição do checked
       var idade = ano - Number(dateano.value) //( - ) significa operador matematico
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id','imagens')  //tag criada em javascript substituindo(<img id="foto">)
       if (radsexo[0].checked) {
           gênero = 'Homem'
           if (idade >=0 && idade <= 1) {
               //bebe
               img.setAttribute('src', 'imagens/bbmenino.jpg')  //quando for pasta de imagens coloca img.
                                                                //setAttribute('id','imagens') para ser valido mais (/)puxa a imagem no javascript
           }else if (idade > 1 && idade<= 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.jpg')  //usa-se else if quantas vezes for       
                                                                //necessaria
           }else if (idade > 10 && idade <= 18) {
               //adolescente
               img.setAttribute('src', 'imagens/adolescenteM.jpg')  
           }else if (idade > 18 && idade <= 30) {
               //jovem
               img.setAttribute('src', 'imagens/jovem.homem.jpg')
           }else if (idade > 30 && idade <= 50) {
               //adulto
               img.setAttribute('src', 'imagens/homem.jpg')
           }else {
               //idoso
               img.setAttribute('src', 'imagens/idoso.jpg')
           }
       }else if (radsexo[1].checked) {
           gênero = 'Mulher'
           if (idade >=0 && idade <= 1) {
            //bebe
            img.setAttribute('src', 'imagens/bbmenina.jpg')
        }else if (idade > 1 && idade<= 10) {
             //criança
             img.setAttribute('src', 'imagens/menina.jpg')
        }else if (idade > 10 && idade <= 18) {
            //adolescente
            img.setAttribute('src', 'imagens/adolescenteF.jpg')
        }else if (idade > 18 && idade <= 30) {
            //jovem
            img.setAttribute('src', 'imagens/jovem-mulher.jpg')
        }else if (idade > 30 && idade <= 50) {
            //adulto
            img.setAttribute('src', 'imagens/mulher.jpg')
        }else {
            //idosa
            img.setAttribute('src', 'imagens/idosa.jpg')
        }
       }
       res.style.padding = '20px'   //CSS no javascript
       res.style.textAlign = 'center' //CSS no javascript
       res.innerHTML = `Detectado sexo ${gênero} e idade ${idade} `
       res.appendChild(img)   //puxa tag criada no javascript no caso img de imagem do arquivo
       img.style.borderRadius = '50%'  // tag CSS para border radius.
       img.style.border = '2px solid black'  // tag para borda de cor
       img.style.width = '300px'   //manipulando pelo javascript largura(width)
       img.style.width = '300px'
       img.style.marginTop = '40px'
       
   }
}

