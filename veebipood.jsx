function App() {

    const products = [
        { 
            name: "Laptop", 
            price: 1200, 
            category: "electronics",
            inStock: true
        },
        { 
            name: "Mouse", 
            price: 30, 
            category: "electronics",
            inStock: true
        },
        { 
            name: "Keyboard", 
            price: 80, 
            category: "electronics",
            inStock: false
        },
        { 
            name: "Desk", 
            price: 250, 
            category: "furniture",
            inStock: true
        },
        { 
            name: "Chair", 
            price: 150, 
            category: "furniture",
            inStock: false
        }
    ];

    return (
        <div>
            <h1>Product store</h1>

            {/* esimene pounkt */}
            <h2>Kõik tooted</h2>

            {products.map(product => (
                <p key={product.name}>
                    {product.name}
                </p>
            ))}

            {/* teine punkt */}
            <h2>Hind üle 100 €</h2>

            {products
                .filter(product => product.price > 100)
                .map(product => (
                    <p key={product.name}>
                        {product.name}
                    </p>
                ))
            }

            {/* 3. kolmas punkt */}
            <h2>Electronics</h2>
            {products
                .filter(product => product.category === "electronics")
                .map(product => (
                    <p key={product.name}>
                        {product.name}
                    </p>
                ))
            }

            {/* neljas punkt*/}
            <h2>Desk</h2>
            <p>{products.find(product => product.name === "Desk").price} €</p>

            {/* viies punkt*/}
            <h2>Esimene alla 100 €</h2>
            <p>{products.find(product => product.price < 100).name}</p>
        </div>
    );
}

export default App;
