import NavBar from "../components/Navbar";
import MockDataLastExpenses from "../components/mock-data";
import { GraphMockData } from "../components/mock-data";

function Home() {
    return (
        <>
            <NavBar></NavBar>

            <div className="container p-5">
                <div className="row">
                    <div className="col-sm-7">
                        <LastExpensesGrid></LastExpensesGrid>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-3">
                        {/* Graph will appear here */}
                        {/* <canvas id="myChart"></canvas> */}
                        <LastExpensesGraph></LastExpensesGraph>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

function LastExpensesGraph() {
    
    //var ctx = document.getElementById('myChart');
    let graphMockData = GraphMockData();
    let xValues = graphMockData[0];
    let yValues = graphMockData[1];
    let barColors = [
        "#b91d47",
        "#00aba9"];

    // new Chart(ctx, {
    //     type: "pie",
    //     data: {
    //       labels: xValues,
    //       datasets: [{
    //         backgroundColor: barColors,
    //         data: yValues
    //       }]
    //     },
    //     options: {
    //       title: {
    //         display: true,
    //         text: "World Wide Wine Production 2018"
    //       }
    //     }
    //   });

    return (
        <>
            {"Test: " + xValues[0]}
            
        </>
    );
}

function LastExpensesGrid() {
    let lastExpensesMockData = MockDataLastExpenses(); // Get JSON from API (MOCKED SERVICE ATM)
    let tableContent = [];

    lastExpensesMockData.forEach((item, index)=>{ // For each expense, create the row structure and push it into array.
        tableContent.push(
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>{item.place}</td>
            <td>{item.amount}</td>
        </tr>);
    });

    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date</th>
                            <th scope="col">Place</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;