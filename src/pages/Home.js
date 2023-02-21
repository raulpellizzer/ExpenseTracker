import NavBar from "../components/Navbar";
import MockData from "../components/mock-data";

function Home() {
    return (
        <>
            <NavBar></NavBar>

            <div class="container p-5">
                <div class="row">
                    <div class="col-sm-7">
                        <LastExpenseGrid></LastExpenseGrid>
                    </div>
                    <div class="col-sm-2"></div>
                    <div class="col-sm-3">
                        Graph will appear here
                    </div>
                </div>
            </div>
        </>
    );
}

function LastExpenseGrid() {
    let mockData = MockData(); // Get JSON from API (MOCKED SERVICE ATM)
    let tableContent = [];

    mockData.forEach((item)=>{ // For each expense, create the row structure and push it into array.
        tableContent.push(
        <tr>
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
                <table class="table">
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