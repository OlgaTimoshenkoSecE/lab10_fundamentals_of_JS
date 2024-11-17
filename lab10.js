async function getData() {
    try {
        let info = await fetch("https://api.coinbase.com/v2/currencies");
        if (!info.ok) {
            throw new Error("Error! Details: " + info.status);
        }
        let data = await info.json();

        document.getElementById("table").style.display = "block";

        for (item of data.data){
            let childRow = document.createElement('tr');

            let colOne = document.createElement('td');
            let colTwo = document.createElement('td');
            let colThree = document.createElement('td');

            colOne.textContent = item.id;
            colTwo.textContent = item.name;
            colThree.textContent = item.min_size;

            childRow.appendChild(colOne);
            childRow.appendChild(colTwo);
            childRow.appendChild(colThree);

            let parentTable = document.getElementById("table")

            parentTable.appendChild(childRow);
        }

    } catch(error) {
        console.log("An error has occured: " + error);
    }
}