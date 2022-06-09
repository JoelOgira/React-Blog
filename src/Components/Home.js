import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'The River and the Source', body: 'Long ago in the smoky hut of Aketh, a girl was born, Akoko', author: 'Margret A Ogolla', id: 1},
        {title: 'Kidagaa Kimemwozea', body: 'Amani na Imani nao wakatoroka mbio walipomwona Mtemi Nasaba Bora', author: 'Ken Walibora', id: 2},
        {title: 'Jeune et Con', body: 'Encore un jour se lève sur la planète France', author: 'Scala and Kolacny Borthers', id: 3}
    ]); 

    return ( 
        <div className="home">
            <h2 className="display-4 text-center">This is the Home page</h2>
            <BlogList blogs={blogs}/>                       
        </div>
    );
}
 
export default Home;