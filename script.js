let btn1 = document.getElementById("btn1");
let para_1 = document.getElementById("para_1");

btn1.onclick = () => {
    async function quotes() {
        try{
            let raw = await fetch("https://dummyjson.com/quotes/random");
            let data = await raw.json();
            console.log(data);
            para_1.textContent = data.quote;   // ✔ correct
        }
        catch(err){
              console.log(err);
        }
    }
    quotes();
}
