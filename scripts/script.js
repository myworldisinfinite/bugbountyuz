console.log("This program is running");

let links = document.querySelectorAll(".nav-link");

links.forEach((item) => {
    item.addEventListener('click', (e) => {
        
        links.forEach((others) => {
            others.classList.remove('active');       
        });

        item.classList.add('active');       
    })
 });

//  item.classList.toggle('active');
//  item.classList.add('active');