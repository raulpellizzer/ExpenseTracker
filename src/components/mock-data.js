function MockDataLastExpenses() {
    let data = [
        {
            "name": "Food",
            "description": "Food for breakfast",
            "category": "House Goods",
            "date": "2022-12-24",
            "place": "Supermarket",
            "amount": 46.50
        },
        {
            "name": "Food",
            "description": "Not essentials",
            "category": "House Goods",
            "date": "2022-12-28",
            "place": "Supermarket",
            "amount": 78.20
        },
        {
            "name": "Microphone",
            "description": "Mic for live",
            "category": "Tech Equipment",
            "date": "2023-01-02",
            "place": "Online",
            "amount": 1200.00
        },
        {
            "name": "Home Office",
            "description": "Home office built",
            "category": "House Goods",
            "date": "2023-02-21",
            "place": "Online",
            "amount": 5000.00
        }
    ];
    
    return (data);
}

export function MockDataLastIncomes() {
    let data = [
        {
            "name": "Salary",
            "description": "Pay check for January",
            "category": "Day Job",
            "date": "2023-01-02",
            "from": "Company XYZ",
            "amount": 3000
        },
        {
            "name": "Salary",
            "description": "Pay check for January",
            "category": "Day Job",
            "date": "2022-01-15",
            "from": "Company XYZ",
            "amount": 3000
        },
        {
            "name": "Salary",
            "description": "Pay check for February",
            "category": "Day Job",
            "date": "2023-02-01",
            "from": "Company XYZ",
            "amount": 3000
        },
        {
            "name": "Salary",
            "description": "Pay check for February",
            "category": "Day Job",
            "date": "2023-02-15",
            "from": "Company XYZ",
            "amount": 3000
        }
    ];
    
    return (data);
}

export function GraphMockDataExpenses() {
    let data = [
        ["House Goods", "Tech Equipment", "House"],  // categories
        [313.70, 1506, 5000.00]  // values per cat.
    ];
    
    return (data);
}

export function GraphMockDataIncomes() {
    let data = [
        ["Day Job"],  // categories
        [12000]  // values per cat.
    ];
    
    return (data);
}

export default MockDataLastExpenses;