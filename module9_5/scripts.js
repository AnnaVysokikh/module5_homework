function pageLoad() {
  let resultNode = document.querySelector('.result');
  const btnNode = document.querySelector('.btn');
  
  let cardBlockKey = localStorage.getItem('cardBlock');
    if (cardBlockKey != null)
    {
      resultNode.innerHTML = cardBlockKey;
    } 
  
    let input1NodeKey = localStorage.getItem('input1Node');
    if (input1NodeKey != null)
    {
      document.querySelector('.input1').value = input1NodeKey;
    }  
  
    let input2NodeKey = localStorage.getItem('input2Node');
    if (input2NodeKey != null)
    {
      document.querySelector('.input2').value = input2NodeKey;
    }  
 console.log('cardBlockKey', cardBlockKey);
  
  btnNode.addEventListener('click', () => {
    input1Node = Math.round(document.querySelector('.input1').value);
    input2Node = Math.round(document.querySelector('.input2').value);
    let error = "";
    let countError = 0;
    console.log('input1Node', input1Node);
    console.log('input2Node', input2Node);
    if (input1Node < 1 || input1Node > 10)
    {
        error = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
        resultNode.innerHTML = error;
        countError++;
    }
    if (input2Node < 1 || input2Node > 10) {
      if (countError == 0) {
        error = `<p>Лимит вне диапазона от 1 до 10</p>`;
        countError++;
      } else {
        error = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
      }
         resultNode.innerHTML = error;
    }
    if (countError == 0) {
      localStorage.setItem("input1Node", input1Node);
      localStorage.setItem("input2Node", input2Node);
      fetch(`https://picsum.photos/v2/list?page=${input1Node}&limit=${input2Node}`)
      .then((response) => { 
        const result = response.json();
        return result;
      })
      .then((data) => {
        // Объект результата в формате JSON
        console.log('data', data);
        displayResult(data)
      })
      .catch(() => { console.log('Error!!!'); });
      }
  });
  
  function displayResult(apiData) {
        let cards = '';
        apiData.forEach(item => {
            const cardBlock = `
    <div class="card">
      <img
        src="${item.download_url}"
        class="card-image"
      />
      <p>${item.author}</p>
    </div>
  `;
            cards = cards + cardBlock;
        });
        localStorage.setItem("cardBlock", cards);
        resultNode.innerHTML = cards;    
    };
  
}

document.addEventListener("DOMContentLoaded", pageLoad);
