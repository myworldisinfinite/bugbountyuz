console.log("This program is running");

let links = document.querySelectorAll(".nav-link");

links.forEach(item => {
    item.addEventListener('click', (e) => {
        
        links.forEach(others => {
            others.classList.remove('active');       
        });

        item.classList.add('active');       
    })
 });


let faqRows = document.querySelectorAll(".question");

faqRows.forEach(faqRow => {
    faqRow.addEventListener("click", () => {
        faqRow.classList.toggle('closed');        
    });
})

/*
let faqRows = document.querySelectorAll(".question");

faqRows.forEach(faqRow => {
    faqRow.addEventListener("click", () => {
        faqRows.forEach(others => {
            if (others.classList != 'closed') {
                others.classList.add('closed');       
            }
        });

        faqRow.classList.remove('closed');        
    })

})
*/


//  item.classList.toggle('active');
//  item.classList.add('active');