function handleSubmit(e){
  e.preventDefault();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  const status=document.getElementById('status');
  if(!email||!message){status.textContent='Veuillez compléter tous les champs.';return false;}
  status.textContent='(Démo) Formulaire prêt. Branchez un service de formulaire pour envoyer.';
  return false;
}
document.getElementById('year').textContent=new Date().getFullYear();
