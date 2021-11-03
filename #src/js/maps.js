if (document.getElementById("forest")) {
    let forestMap = L.map('forest', {
        center: [64.0099, -21.9677],
        zoom: 14,
        gestureHandling: true
    });

    L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(forestMap);

    let Marker = L.divIcon({
        className: 'forest-marker',
        html: `<span class="map-waves"></span>
            <span class="map-waves" ></span>
        <span class="map-waves"></span>`
    });
    L.marker([64.0099, -21.9677], { icon: Marker }).addTo(forestMap);

    forestMap.addEventListener("click", () => {
        let waves = document.querySelectorAll(".map-waves");
        for (let i = 0; i < waves.length; i++) {
            waves[i].classList.toggle("_waves-hide");
        }
    })
}

if (document.getElementById("area")) {
    let areaMap = L.map('area', {
        center: [64.0099, -21.9677],
        zoom: 14,
        gestureHandling: true
    });

    L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(areaMap);

    let Marker = L.divIcon({
        className: 'forest-marker',
        html: `<span class="map-waves"></span>
            <span class="map-waves" ></span>
        <span class="map-waves"></span>`
    });
    L.marker([64.0099, -21.9677], { icon: Marker }).addTo(areaMap);

    areaMap.addEventListener("click", () => {
        let waves = document.querySelectorAll(".map-waves");
        for (let i = 0; i < waves.length; i++) {
            waves[i].classList.toggle("_waves-hide");
        }
    })
}
