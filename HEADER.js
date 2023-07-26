// aqui ingrasamos la id 
const menuIcon = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');

// aqui le decimos que si le damos click al menu de hamburgesa va hacer algo 
menuIcon.addEventListener('click', (e) => {
  menu.classList.toggle('activar');
  document.body.classList.toggle('opacity')

  // sirve para cambiar el icono

  const icono_d_menu = e.target.getAttribute('src')
  if (condition) {
    
  }
  else{
    e.target.setAttribute()
  }
});
