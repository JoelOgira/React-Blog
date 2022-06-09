const BlogList = ({blogs}) => {
    return ( 
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <div className="card mb-2">
                        <div className="card-body">
                        <h3 className="card-title py-2">{blog.title}</h3>
                        <p className="py-1 card-text"><span className="text-success">Written By: </span> {blog.author}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>    
    );
}
 
export default BlogList;