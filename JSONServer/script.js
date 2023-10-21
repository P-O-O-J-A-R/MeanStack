const employeeList=document.getElementById("employee-list");
async function fetchEmployees(){
    try{
        const response = await fetch('http://localhost:3000/employees');
        const employee = await response.json();
        displayEmployees(employee);
        return employee;
    }
    catch(error){
        console.log("Error:"+error)
    }
}
function displayEmployees(employees){
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent=`${employee.name} - ${employee.position}`
        employeeList.appendChild(li);
    });
}

async function generateTable(employees){
    const jsonData = await fetchEmployees();
    const tableContainer = document.getElementById('table-container');

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headers = ["ID", "Name", "Position"];
    headers.forEach(headerText => {
        const th=document.createElement("th");
        th.textContent = headerText;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    jsonData.forEach(item => {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");

        cell1.textContent = item.id;
        cell2.textContent = item.name;
        cell3.textContent = item.position;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tableContainer.appendChild(table);

}


generateTable();