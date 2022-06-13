const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2 className="display-4 text-center mb-3">{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <div className="card mb-2">
                        <div className="card-body">
                            <h3 className="card-title py-2">{blog.title}</h3>
                            <i className="fas fa-trash-can pt-2" style={{ color: 'green', float: 'right', cursor: 'pointer' }}></i>
                            <p className="py-1 card-text"><span className="text-success">Written By: </span> {blog.author}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>    
    );
}
 
export default BlogList;