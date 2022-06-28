import { renderIntoDocument } from 'react-dom/test-utils';
import productsMocks from '../../mocks/Products.json';

export default function(state = productsMocks.products, action) {
    switch(action.type) {
        default:
            return state
    }
}