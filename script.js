function envoyerAuSupport() {
    // --- CONFIGURATION ---
    const DESTINATAIRE = "support@support.whatsapp.com"; 
    const sujet = "Urgent – Signalement d’un compte diffusant du contenu illégal sur WhatsApp";
    const phone = document.getElementById('phone').value;

    const selectElement = document.getElementById('message_type');
    const texteBase = selectElement.value;

    if (!phone) {
        alert("Veuillez saisir un numéro de téléphone.");
        return;
    }

    const messageFinal = texteBase.replaceAll("[NUMERO]", phone);
    const mailtoLink = `mailto:${DESTINATAIRE}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(messageFinal)}`;


    window.location.href = mailtoLink;
}
