import React, { useEffect, useState } from "react";
import { SubContainer, Wrapper, TotalPrice, TotalText } from './styles';
import LineChart from "../../shared/LineChart";
import ShoppingList from "../ShoppingList";
import productsMock from '../../mocks/Products.json'
import extractPercentage from "../../utils/extractPercentage";
import { useSelector } from "react-redux";

function InsideContainer() {
    const colors = ["#62CBC6", "#00ABAD", "#006073", "#004D61"]

    //const productsRedux = useSelector(state => state.product)

    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    function handleToggle(id) {
        const newProduct = products
            .map(product => product.id === id ? {
                ...product, checked:
                    !product.checked
            }
                : product)
        setProducts(newProduct)
    }

    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked === true)
        setSelectedProducts(newSelectedProducts)
    }, [products])

    useEffect(() => {
        const total = selectedProducts
            .map(product => product.price)
            .reduce((a, b) => a + b, 0)

        setTotalPrice(total)
    }, [selectedProducts])

    return <Wrapper>
        <SubContainer>{<ShoppingList products={products} title="Produtos disponíveis" onToggle={handleToggle} />}</SubContainer>
        <SubContainer>{
            <ShoppingList
                products={selectedProducts}
                title="Sua lista de compra"
                onToggle={handleToggle}
            />}
        </SubContainer>
        <SubContainer>Estatísticas
            <LineChart
                color={colors[0]}
                title="Saudável"
                percentage={extractPercentage(selectedProducts.length, selectedProducts
                    .filter(product => product.tags.includes("healthy"))
                    .length
                )}
            />
            <LineChart
                color={colors[1]}
                title="Morboso"
                percentage={extractPercentage(selectedProducts.length, selectedProducts
                    .filter(product => product.tags.includes("junk"))
                    .length
                )}
            />
            <LineChart
                color={colors[2]}
                title="Limpeza"
                percentage={extractPercentage(selectedProducts.length, selectedProducts
                    .filter(product => product.tags.includes("cleaning"))
                    .length
                )}
            />
            <LineChart
                color={colors[3]}
                title="Outros"
                percentage={extractPercentage(selectedProducts.length, selectedProducts
                    .filter(product => product.tags.includes("others"))
                    .length
                )}
            />
            <TotalText>Total Gasto:</TotalText>
            <TotalPrice>{totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TotalPrice>
        </SubContainer>
    </Wrapper>
}

export default InsideContainer;