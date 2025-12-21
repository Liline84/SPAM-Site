function envoyerAuSupport() {
    // --- CONFIGURATION ---
    const DESTINATAIRE = "support@tondomaine.com"; // Remplace par ton email
    const SUJET = "Commentaire Support - Nouveau Dossier";
    
    // Récupération des éléments du formulaire
    const phoneInput = document.getElementById('phone');
    const hiddenMessageInput = document.getElementById('message_text');

    const phone = phoneInput.value;
    const texteBase = hiddenMessageInput.value;
    // Vérification
    if (!phone) {
        alert("Veuillez saisir un numéro de téléphone.");
        return;
    }

    // Remplacement du texte [NUMERO] par le numéro saisi
    const messageFinal = texteBase.replace("[NUMERO]", phone);

    // Encodage pour le lien mailto
    const mailtoLink = `mailto:${DESTINATAIRE}?subject=${encodeURIComponent(SUJET)}&body=${encodeURIComponent(messageFinal)}`;

    // Ouverture de l'application mail par défaut
    window.location.href = mailtoLink;
}

