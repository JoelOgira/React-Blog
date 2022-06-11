const BlogList = ({blogs, title, onClickDelete}) => {
    return ( 
        <div className="blog-list">
            <h2 className="display-4 text-center mb-3">{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <div className="card mb-2">
                        <div className="card-body">
                            <h3 className="card-title py-2">{blog.title}</h3>
                            <p className="py-1 card-text"><span className="text-success">Written By: </span> {blog.author}</p>
                        </div>
                        <i onClick={() => onClickDelete(blog.id)} className="fas fa-trash-can pt-2" style={{ color: 'green', float: 'right', cursor: 'pointer', right: '5px' }}></i>
                    </div>
                </div>
            ))}
        </div>    
    );
}
 
export default BlogList;