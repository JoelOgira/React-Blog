import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const {title, data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
    
    return ( 
        <div className="home">
            {error && (<div className='text-center text-danger py-4 my-4' style={{fontSize: '30px'}}>{error}</div>)}
            {isLoading && (<div className='text-center text-success py-4 my-4' style={{fontSize: '30px'}}> Content Loading.... </div>) }
            {blogs && <BlogList  
                blogs={blogs} 
                title={title}  
            />}
        </div>
    );
}
 
export default Home;

// Starting json server
// $ npx json-server --watch data/db.json --port 8000