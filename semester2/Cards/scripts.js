fetch('generated.json')

.then(response => response.json())

.then(data =>

data.forEach(obj => {

  let card = document.createElement('div');


  const personCard = `<div class="personCardContainer"><div class="personCard"><i class="fas fa-user" style="margin-right: 15px;"></i><div><h4>${obj.name}</h4><p>${obj.age}</p></div></div>`;

  const person = `<div class="left"><img src="${obj.picture}" class="picture" alt="Soulaiman Meskini"/><h4><span>${obj.company}</span><br> ${obj.company2}</h4></div>`;
  const phone = `<div class="right-content textHover"><i class="fas fa-mobile"></i><div><p style="user-select: all">${obj.phone}</p></div></div>`;
  const email = `<div class="right-content textHover"><i class="fas fa-envelope-open"></i><div><p style="user-select: all">${obj.email}</p></div></div>`;
  const adress = `<div class="right-content textHover"> <i class="fas fa-map-marker-alt"></i> <a href="${obj.maps}" target="_blank"><p>${obj.address}</p></a> </div>`;

  const details = `<div class="detailsContainer">${phone}${email}${adress}</div>`
  const topPart = `<div class="innerContent">${personCard}</div>`;

  
  // <button id="btncopy" class="btn"></button>

  card.innerHTML = `<div class="card"><div class="card-front">${person}<div style="display:flex;flex-direction: column;" >${topPart}${details}</div></div></div>`

  console.log(card)
  
  document.getElementById('cards').append(card)

  // const btnCopy = document.getElementById("btnCopy");

  // function btnCop(){
  //   console.log("hihi")
  // }

  // btnCopy.addEventListener("click" , btnCop)


}));


// Clipboard 

 
