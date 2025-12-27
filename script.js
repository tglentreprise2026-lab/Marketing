function envoyer() {
  const nom = document.getElementById("nom").value;
  const projet = document.getElementById("projet").value;
  const pack = document.getElementById("pack").value;
  const details = document.getElementById("details").value;

  if (!nom || !projet) {
    alert("Veuillez remplir les champs obligatoires.");
    return;
  }

  const message = `
Bonjour Wily Service,
Nom : ${nom}
Projet à promouvoir : ${projet}
Pack choisi : ${pack}
Détails : ${details}
`;

  const whatsapp = "https://wa.me/225XXXXXXXXX?text=" + encodeURIComponent(message);
  window.open(whatsapp, "_blank");
}
