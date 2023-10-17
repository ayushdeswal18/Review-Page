const reviews = [
    {
        id: 1,
        name: "ayush deswal",
        job: "web developer",
        img:
            "WhatsApp Image 2023-10-05 at 13.38.32_94a3a17a.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "person-1_rfzshl.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const image = document.getElementById("person")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")
const button1 = document.querySelector(".btn1")
const button2 = document.querySelector(".btn2")
const button3 = document.querySelector(".btn3")
let x = 0;
window.addEventListener("DOMContentLoaded", function () {
    show(x);
});
function show(person) {
    const items = reviews[person];
    image.src = items.img;
    info.textContent = items.text;
    job.textContent = items.job;
    author.textContent = items.name;

}
button2.addEventListener("click", function () {
    x++;
    if (x > reviews.length - 1) {
        x = 0;

    }
    show(x);

});
button1.addEventListener("click", function () {
    x--;
    if (x < 0) {
        x = reviews.length - 1;


    }
    show(x);

});
button3.addEventListener("click", function () {
    alert("hello!!");

    x = Math.floor(Math.random() * reviews.length);
    show(x);



});

