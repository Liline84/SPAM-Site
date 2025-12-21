function envoyerAuSupport() {
    // --- CONFIGURATION ---
    const DESTINATAIRE = "support@support.whatsapp.com"; 
    const SUJET = "Rapport Support Automatique";
    
    const phone = document.getElementById('phone').value;
    // On récupère le texte associé à l'option choisie dans le menu
    const selectElement = document.getElementById('message_type');
    const texteBase = selectElement.value;

    if (!phone) {
        alert("Veuillez saisir un numéro de téléphone.");
        return;
    }

    // Remplacement du marqueur [NUMERO] par le numéro saisi
    const messageFinal = texteBase.replace("[NUMERO]", phone);

    // Préparation du lien mailto
    const mailtoLink = `mailto:${DESTINATAIRE}?subject=${encodeURIComponent(SUJET)}&body=${encodeURIComponent(messageFinal)}`;

    window.location.href = mailtoLink;
}
