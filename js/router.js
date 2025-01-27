const routes = {
    home: { title: "Strona Główna", content: `
        <h1 class="text-center">Witaj w kursie PIAC – Twojej drodze do świata chmury!</h1>
        <p class="text-center">
Czy chcesz nauczyć się tworzyć nowoczesne, skalowalne i wydajne aplikacje chmurowe?
Kurs Programowanie Aplikacji Chmurowych (PIAC) to kompleksowy przewodnik, który przeprowadzi Cię przez wszystkie kluczowe technologie i narzędzia potrzebne do budowania aplikacji działających w środowisku AWS, Azure, Google Cloud i innych.

<br>💡 Czego się nauczysz?
<br>✔ Tworzenia aplikacji serverless i korzystania z usług chmurowych
<br>✔ Pracy z Dockerem i Kubernetesem w chmurze
<br>✔ Wdrażania i zarządzania bazami danych w chmurze
<br>✔ Automatyzacji wdrożeń CI/CD
<br>✔ Zapewniania bezpieczeństwa i skalowalności aplikacji

<br>🎯 Dla kogo jest ten kurs?
<br>✅ Dla początkujących programistów, którzy chcą poznać podstawy chmury
<br>✅ Dla doświadczonych developerów, którzy chcą rozszerzyć swoje umiejętności
<br>✅ Dla DevOpsów, którzy chcą nauczyć się efektywnego zarządzania aplikacjami

<br>🚀 **Rozpocznij swoją podróż</p>
    `},
    course: { title: "Kurs PIAC", content: `
        <h1 class="text-center">Kurs PIAC</h1>
        <p>Wprowadzenie do kursu
W dobie cyfrowej transformacji i rosnącego zapotrzebowania na skalowalne oraz elastyczne rozwiązania IT, Programowanie Aplikacji Chmurowych (PIAC) to kurs, który wprowadzi Cię w świat nowoczesnych technologii chmurowych. Nauczysz się, jak tworzyć aplikacje webowe i backendowe działające w środowisku chmurowym, wykorzystując AWS, Azure, Google Cloud, a także popularne frameworki i narzędzia programistyczne.

Kurs skierowany jest zarówno do początkujących programistów, którzy chcą nauczyć się podstaw tworzenia aplikacji chmurowych, jak i do bardziej zaawansowanych developerów, którzy chcą poszerzyć swoją wiedzę i zdobyć praktyczne umiejętności niezbędne na rynku pracy.

<br>Czego się nauczysz?
<br>✔ Podstawy chmury obliczeniowej – wyjaśnienie koncepcji IaaS, PaaS, SaaS, różnice między AWS, Azure, GCP oraz ich zastosowanie w praktyce.
<br>✔ Tworzenie aplikacji serverless – wykorzystanie AWS Lambda, Google Cloud Functions, Azure Functions do budowania bezserwerowych aplikacji.
<br>✔ Konteneryzacja i orkiestracja – nauka Docker, Kubernetes (K8s), budowanie i wdrażanie kontenerowych aplikacji w chmurze.
<br>✔ Bazy danych w chmurze – wprowadzenie do baz SQL (Amazon RDS, Azure SQL, Cloud SQL) i NoSQL (MongoDB Atlas, DynamoDB, Firebase Firestore).
<br>✔ CI/CD dla aplikacji chmurowych – automatyzacja wdrożeń z GitHub Actions, AWS CodePipeline, GitLab CI/CD.
<br>✔ Bezpieczeństwo i skalowalność aplikacji – zabezpieczanie aplikacji, optymalizacja wydajności, load balancing i autoskalowanie.
<br>✔ Integracja z usługami chmurowymi – użycie AWS S3, Google Cloud Storage, Azure Blob Storage, API Gateway do przechowywania danych i zarządzania ruchem.

<br>Dla kogo jest ten kurs?
<br>🔹 Dla początkujących programistów, którzy chcą wejść w świat technologii chmurowych i nauczyć się nowoczesnych metod budowania aplikacji.
<br>🔹 Dla doświadczonych developerów, którzy chcą rozszerzyć swoją wiedzę o chmurę i zdobyć praktyczne umiejętności w pracy z nowoczesnymi narzędziami.
<br>🔹 Dla DevOpsów i inżynierów chmurowych, którzy chcą lepiej zrozumieć procesy developmentu i wdrażania aplikacji w chmurze.

<br>Metodyka nauki
<br>✅ Praktyczne projekty – każda lekcja kończy się praktycznym zadaniem, które pozwoli Ci lepiej przyswoić wiedzę.
<br>✅ Realne case study – omówienie rzeczywistych przypadków użycia aplikacji chmurowych w firmach.
<br>✅ Krok po kroku – od podstaw do zaawansowanych technik, tak abyś mógł rozwijać swoje umiejętności stopniowo.
<br>✅ Wsparcie społeczności – dostęp do zamkniętej grupy na Discordzie, gdzie możesz zadawać pytania i dzielić się doświadczeniem z innymi kursantami.

<br>Co zyskasz po ukończeniu kursu?
<br>🎯 Praktyczne umiejętności – nauczysz się projektować, wdrażać i skalować aplikacje chmurowe.
<br>🎯 Certyfikat ukończenia – potwierdzający Twoją wiedzę i umiejętności, który możesz dodać do CV.
<br>🎯 Przygotowanie do pracy w IT – zdobycie realnej wiedzy, którą możesz wykorzystać na stanowisku Cloud Developer, Backend Developer, DevOps Engineer.

Nie czekaj – dołącz do kursu i naucz się tworzyć nowoczesne aplikacje chmurowe już dziś! 🚀</p>
        <div class="text-center">
            <button class="btn btn-primary">Zapisz się już teraz!</button>
        </div>
    `},
    contact: { title: "Kontakt", content: `
        <h1 class="text-center">Kontakt</h1>
        <p class="text-center">Masz pytania? Skontaktuj się z nami.</p>
        <form class="mt-3">
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Wpisz swój email">
            </div>
            <div class="mb-3">
                <label class="form-label">Wiadomość</label>
                <textarea class="form-control" rows="4" placeholder="Wpisz swoją wiadomość"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Wyślij</button>
        </form>
    `},
    about: { title: "O mnie", content: `
        <h1 class="text-center">O mnie</h1>
        <p>Cześć! Nazywam się Jan Kowalski i jestem doświadczonym programistą z ponad 10-letnim stażem w branży IT. Przez lata pracowałem w różnych firmach technologicznych, w tym w Google, Microsoft i Netflix, gdzie rozwijałem zaawansowane aplikacje webowe i mobilne.

Moja specjalizacja to JavaScript, React, Node.js oraz Python, a także technologie backendowe i chmurowe. Programowanie to moja pasja, dlatego postanowiłem stworzyć kurs PIAC, który pomoże Ci zdobyć solidne podstawy w programowaniu i nauczy Cię praktycznych umiejętności, które realnie zwiększą Twoją wartość na rynku pracy.</p>
        </form>
    `}
};

// Funkcja do zmiany zawartości strony
function navigateTo(route, addToHistory = true) {
    if (!routes[route]) return;
    
    document.title = routes[route].title;
    document.getElementById("content").innerHTML = routes[route].content;

    if (addToHistory) {
        history.pushState({ page: route }, routes[route].title, `?${route}`);
    }
}

// Obsługa kliknięć w linki
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Zapobiega domyślnemu zachowaniu linka
        const route = event.target.id.replace("-link", ""); // Pobiera nazwę strony z ID linka
        navigateTo(route);
    });
});

// Obsługa cofania w historii przeglądarki
window.addEventListener("popstate", (event) => {
    if (event.state) {
        navigateTo(event.state.page, false);
    }
});

// Wczytanie odpowiedniej strony na start (jeśli użytkownik odświeży stronę z parametrem)
const urlParams = new URLSearchParams(window.location.search);
const initialPage = urlParams.keys().next().value || "home";
navigateTo(initialPage, false);
