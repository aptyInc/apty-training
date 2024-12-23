const table_ele = document.querySelector("table");
const total_tr = table_ele.querySelectorAll("tr");
console.log(total_tr);
Array.from(total_tr).forEach((element, index) => {
    //Add Event listen to td:
    element.addEventListener("mouseover", () => {
        element.style.background = "aqua";
        const all_tds = element.querySelectorAll("td");
        all_tds.forEach((single_td, index) => {
            single_td.addEventListener("mouseover", () => {
                //I will get the particular index
                const rows = total_tr.length;
                for (let i = 0; i < rows; i++) {
                    const current_row_element = total_tr[i].children[index];
                    current_row_element.style.background = "aqua";
                }
            });
        });
    });

    

    element.addEventListener("mouseout", () => {
        element.style.background = "";
        //Highlight all the columns
        const rows = total_tr.length;
        const all_tds = element.querySelectorAll("td");
        all_tds.forEach((single_td, index) => {
            single_td.addEventListener("mouseout", () => {
                const rows = total_tr.length;
                for (let i = 0; i < rows; i++) {
                    const current_row_element = total_tr[i].children[index];
                    current_row_element.style.background = "";
                }
            });
        });
    });

});
