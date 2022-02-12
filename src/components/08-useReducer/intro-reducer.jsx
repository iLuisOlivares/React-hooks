console.log('Ola mundo');

const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false


}];

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payLoad]
    }

    return state
}


let todos = todoReducer();

const newTODO = {
    id: 1,
    todo: 'comprar pan',
    done: false
}

const action = {
    type: 'agregar',
    payLoad: newTODO
}

todos = todoReducer(todos, action);
console.log(todos);