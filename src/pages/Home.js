import NavBar from "../components/Navbar";
import MockDataLastExpenses from "../components/mock-data";
import { GraphMockData } from "../components/mock-data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

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
                        <LastExpensesGraph></LastExpensesGraph>
                    </div>
                </div>
            </div>
        </>
    );
}

function LastExpensesGraph() {
    let graphMockData = GraphMockData();
    let xValues = graphMockData[0];
    let yValues = graphMockData[1];
    let barColors = [
        "#b91d47",
        "#00aba9"]; 

    ChartJS.register(ArcElement, Tooltip, Legend);
    var data = {
        labels: xValues,
        datasets: [
          {
            label: '# per category',
            data: yValues,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <>
            <Pie data={data} />
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