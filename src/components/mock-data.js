function MockDataLastExpenses() {
    let data = [
        {
            "name": "Food",
            "description": "Food for breakfast",
            "category": "House Goods",
            "date": "2022-12-24",
            "place": "Supermarket",
            "amount": 46.50,
        },
        {
            "name": "Food",
            "description": "Not essentials",
            "category": "House Goods",
            "date": "2022-12-28",
            "place": "Supermarket",
            "amount": 78.20,
        },
        {
            "name": "Microphone",
            "description": "Mic for live",
            "category": "Tech Equipment",
            "date": "2023-01-02",
            "place": "Online",
            "amount": 1200.00,
        },
        {
            "name": "Home Office",
            "description": "Home office built",
            "category": "House Goods",
            "date": "2023-02-21",
            "place": "Online",
            "amount": 5000.00,
        }
    ];
    
    return (data);
}

export function GraphMockData() {
    let data = [
        ["House Goods", "Tech Equipment", "House"],  // categories
        [313.70, 1506, 5000.00]  // values per cat.
    ];
    
    return (data);
}

export default MockDataLastExpenses;