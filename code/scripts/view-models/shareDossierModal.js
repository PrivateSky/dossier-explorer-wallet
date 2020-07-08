const shareDossierModal = {
    title: "Share",
    disclaimer: "To share the dossier, copy the below SEED and use it to import the dossier into your wallet. If you wish, you can easily scan the QR Code to import the dossier into your wallet.",
    orLabel: "or",
    qrCode: {
        title: "Use QR Code"
    },
    dossierSEEDLabel: "Dossier SEED",
    seedCopiedToClipboardLabel: "The SEED is copied to cliboard!",
    dossierSEEDInput: {
        readOnly: true
    },
    buttons: {
        closeButton: {
            label: "Close",
            eventName: "close-share",
            buttonClass: "btn-confirm-primary",
        },
    },
    conditionalExpressions: {
        isSeedCopied: false
    }
};

export default shareDossierModal;