var arr = [
    { img: `https://img.freepik.com/free-vector/cute-triceratop-dinosaur-cartoon_1308-110599.jpg?w=1060&t=st=1702973030~exp=1702973630~hmac=3700631acd90b06532c0eeb3271143adbae09ad98db4b98041b6fdd4f1552e23` },
    { img: `https://img.freepik.com/free-vector/raptorex-dinosaur-cartoon-character_1308-57156.jpg?w=740&t=st=1702973056~exp=1702973656~hmac=108599bc7e0f14da778a4b8f95834149721b2b86cc4a8ecfa7ffc368cc69dfae` },
    { img: `https://img.freepik.com/free-vector/brachiosaurus-cartoon-character-isolated_1308-133102.jpg?w=996&t=st=1702973085~exp=1702973685~hmac=dffd9f0f82d29ed4ff8cf5314a7510a317aa57d067fd062e6c0443e490dd1ea2` },
    { img: `https://img.freepik.com/free-vector/hand-drawn-cartoon-stegosaurus-illustration_23-2150497689.jpg?w=740&t=st=1702973266~exp=1702973866~hmac=4fe64f448c7fe906890b289598f287841a7e2f274e93e05a79b188112ae8f2a5` },
    { img: `https://img.freepik.com/free-vector/cute-ankylosaurus-dinosaur-cartoon_1308-110688.jpg?w=1380&t=st=1702973293~exp=1702973893~hmac=631479ab42808bbd12545f19fa2262abc533ecdbdc1224a9613a98ef456825e8` },
    { img: `https://img.freepik.com/free-vector/tyrannosaurus-cartoon-character-isolated_1308-132560.jpg?w=1060&t=st=1702973318~exp=1702973918~hmac=eef914e4c28c9862375ca1e044ee2cc223a4a66bf7609b4ab250d91fe8c4b31a` },
];
arr = arr.concat(arr);
function shuffle() {
    for (var i = 0; i < arr.length; i++) {
        var random = Math.floor(Math.random() * arr.length);
        temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;

    }
    var clutter = ``;
    arr.forEach(function (e, i) {
        clutter += `<div class="card" id=""cards>
        <div class="overlay" id="o${i}">
          <img src="https://png.pngtree.com/png-vector/20221116/ourmid/pngtree-dinosaur-line-art-cartoon-png-image_6459785.png" alt="">
        </div>
    <img src="${e.img}" data-over="o${i}" id="c${i}" alt="">
    </div>`
    })
    document.querySelector("#container").innerHTML = clutter
    rotate();
    gsap.from(".card",{
        scale:.2,
        opacity:0,  
        // stagger:.2,
        rotate:90
    })
}
shuffle();

document.querySelector(".scoreCard button").addEventListener("click", function () {
    shuffle();
    score = 0;
    document.querySelector(".scoreCard h1 span").textContent = score;
})




function rotate(){
    document.querySelectorAll(".card").forEach(function(e){
        random =Math.floor(Math.random()*(-3  -3))+3
        gsap.set(e,{
            rotate:random
        })
    })
};


var count = 0;
var score = 0;
document.querySelector("#container").addEventListener("click", function (dets) {
    if (dets.target.id !== "container") {
        document.querySelector(`#${dets.target.dataset.over}`).style.display = "none";
        if (count === 0) {
            prev = dets.target;
        }
        count++;
        if (count === 2) {
            if (prev.src === dets.target.src && dets.target.id != prev.id) {
                score += 10;
                document.querySelector(".scoreCard h1 span").textContent = score;
                setTimeout(function () {
                    prev.style.display = "none";
                    dets.target.style.display = "none";
                }, 200)
            } else {
                if (score >= 10) {
                    score -= 1;
                    document.querySelector(".scoreCard h1 span").textContent = score;
                }
                setTimeout(function () {

                 document.querySelector(`#${dets.target.dataset.over}`).style.display = "flex";
                 document.querySelector(`#${prev.dataset.over}`).style.display = "flex";

                }, 500)

            }
            count = 0;
        }
    }

})