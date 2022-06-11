import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const title = 'This is the Hompage'
    const [blogs, setBlogs] = useState([
        {title: 'The River and the Source', body: 'Long ago in the smoky hut of Aketh, a girl was born, Akoko', author: 'Margret A Ogolla', id: 1},
        {title: 'Kidagaa Kimemwozea', body: 'Amani na Imani nao wakatoroka mbio walipomwona Mtemi Nasaba Bora', author: 'Ken Walibora', id: 2},
        {title: 'Jeune et Con', body: 'Encore un jour se lève sur la planète France', author: 'Scala and Kolacny Borthers', id: 3}
    ]); 

    const onClickDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList  blogs={blogs} title={title} onClickDelete={onClickDelete}/>                                            
        </div>
    );
}
 
export default Home;