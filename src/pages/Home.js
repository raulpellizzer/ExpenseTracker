import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import MockDataLastExpenses, { GraphMockDataIncomes } from "../components/mock-data";
import { MockDataLastIncomes } from "../components/mock-data";
import { GraphMockDataExpenses } from "../components/mock-data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function Home() {

    return (
        <>
            <NavBar></NavBar>
            <div className="pt-5 m-5">
                <h5 className="ms-5 ps-4 pb-3">Your Latest Expenses:</h5>
                <div className="row ms-5">
                    <div className="col-md-6">
                        <LastExpensesGrid></LastExpensesGrid>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <LastExpensesGraph></LastExpensesGraph>
                    </div>
                </div>

                <h5 className="ms-5 mt-5 ps-4 pb-3">Your Latest Incomes:</h5>
                <div className="row ms-5">
                    <div className="col-md-6">
                        <LastIncomesGrid></LastIncomesGrid>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <LastIncomesGraph></LastIncomesGraph>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

function LastExpensesGraph() {
    let graphMockDataExpenses = GraphMockDataExpenses();
    let xValues = graphMockDataExpenses[0];
    let yValues = graphMockDataExpenses[1];

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
            <Pie className="homepage-graph" data={data} />
        </>
    );
}

function LastIncomesGraph() {
    let graphMockDataIncomes = GraphMockDataIncomes();
    let xValues = graphMockDataIncomes[0];
    let yValues = graphMockDataIncomes[1];

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
            <Pie className="homepage-graph" data={data} />
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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date</th>
                            <th scope="col">Place</th>
                            <th scope="col">Amount (R$)</th>
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

function LastIncomesGrid() {
    let lastIncomesMockData = MockDataLastIncomes(); // Get JSON from API (MOCKED SERVICE ATM)
    let tableContent = [];

    lastIncomesMockData.forEach((item, index)=>{ // For each expense, create the row structure and push it into array.
        tableContent.push(
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>     
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>{item.from}</td>
            <td>{item.amount}</td>
        </tr>);
    });

    return (
        <>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date</th>
                            <th scope="col">From</th>
                            <th scope="col">Amount (R$)</th>
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