function MockDataLastExpenses() {
    let data = [
        {
            "name": "Expense 01",
            "description": "My first expense",
            "category": "House goods",
            "date": "2022-12-24",
            "place": "Convenience Store",
            "amount": 235.50,
        },
        {
            "name": "Expense 02",
            "description": "Second expense",
            "category": "House goods",
            "date": "2022-12-28",
            "place": "Supermarket",
            "amount": 78.20,
        },
        {
            "name": "Expense 03",
            "description": "Yet another expense",
            "category": "Tech Equipment",
            "date": "2023-01-02",
            "place": "Online",
            "amount": 1005.50,
        },
        {
            "name": "Last Expense",
            "description": "Latest",
            "category": "Tech Equipment",
            "date": "2023-02-21",
            "place": "Online",
            "amount": 500.50,
        }
    ];
    
    return (data);
}

export function GraphMockData() {
    let data = [
        ["House goods", "Tech Equipment"],
        [313.70, 1506]
    ];
    
    return (data);
}

export default MockDataLastExpenses;