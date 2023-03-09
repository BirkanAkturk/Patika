let isim = prompt("Lütfen isminizi giriniz!");
const span = document.querySelector("#myName");
span.innerHTML = isim;

const time = document.getElementById("myClock");
function showTime() {
    const tarih = new Date();
    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    time.innerHTML = `${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} ${gunler[tarih.getDay()]}`
}
setInterval(showTime, 1000)
