if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("Service Worker enregistré"))
        .catch((error) => console.log("Erreur Service Worker:", error));
}