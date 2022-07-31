const names = document.getElementById('names-input');
const marks = document.getElementById('marks-input');


let list = {
    beton: [`<option value="3690">M100</option>
             <option value="3699">M150</option>
             <option value="3750">M200</option>
             <option value="3799">M250</option>
             <option value="3800">M300</option>
             <option value="3900">M350</option>
             <option value="3950">M400</option>
             <option value="4100">M450</option>`],
    rastvor: [`<option value="2050">M50</option>
               <option value="2050">M100</option>
               <option value="2150">M150</option>
               <option value="2250">M200</option>
               <option value="2690">M300</option>
               <option value="2790">M350</option>
               <option value="2890">M400</option>
               <option value="3100">M450</option>`],
    bloki: [`<option value="1090">ФБС 9-3-6</option>
            <option value="1300">ФБС 9-4-6</option>
            <option value="1550">ФБС 9-5-6</option>
            <option value="1920">ФБС 9-6-6</option>
            <option value="2690">ФБС 24-3-6</option>
            <option value="2890">ФБС 24-4-6</option>
            <option value="3090">ФБС 24-5-6</option>
            <option value="3300">ФБС 24-6-6</option>`],
    plita: [`<option value="3090">Плита 1П</option>
            <option value="4290">Плита 2П</option>
            <option value="5200">Плита 1ПЖСН</option>
            <option value="6090">Плита 2ПЖСН</option>`],
};

function set() {
    marks.innerHTML = list[names.value];
}