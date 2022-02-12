import { UseCounter } from '../../hooks/UseCounter';
import { useFetch } from '../../hooks/useFetch';

export const MultiCustomHooks = () => {

    const { counter, increment } = UseCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { loading, data, error } = useFetch(url);
    const { author, quote } = !!data && data[0];



    return <div>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        {loading && <div div className='m-3 alert alert-info text-center'>
            Loading...
        </div>

        }
        <blockquote className='blockquote text-end'>
            <p className='mx-3'> {quote} </p>
            <footer className=' mx-3 blockquote-footer'>{author}</footer>
        </blockquote>

        <button className='btn text-white btn-info m-3' onClick={() => { increment(1) }}>Next Quote</button>

    </div >;
};
