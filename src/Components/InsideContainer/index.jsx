import React, { useEffect, useState } from "react";
import { SubContainer, Wrapper } from './styles'; 
import LineChart from "../../Shared/LineChart";
import ShoppingList from "../ShoppingList";
import productsMock from '../Mocks/Products.json'

function InsideContainer() {
    const colors = ["#62CBC6","#00ABAD","#006073","#004D61"] 
    
    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])

    function handleToggle(id) {
        const newProduct = products.map(product => {return product.id === id ? { ...product, checked: !product.checked } : product})
        setProducts(newProduct)
    }

    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked === true)
        setSelectedProducts(newSelectedProducts)
    }, [products])

    return <Wrapper>
        <SubContainer>{<ShoppingList products={products} title="Produtos disponíveis" onToggle={handleToggle} />}</SubContainer>
        <SubContainer>{<ShoppingList products={selectedProducts} title="Sua lista de compra" onToggle={handleToggle} />}</SubContainer>
        <SubContainer>Estatísticas
            <LineChart percentage={80} color={colors[0]} title="Saudável" />
            <LineChart percentage={20} color={colors[1]} title="Morboso" />
            <LineChart percentage={15} color={colors[2]} title="Limpeza" />
            <LineChart percentage={60} color={colors[3]} title="Condimentos" />
        </SubContainer>
    </Wrapper>
}

export default InsideContainer;