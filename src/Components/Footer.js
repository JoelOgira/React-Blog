const Footer = () => {

    const year = new Date();

    return (
        <div className="sticky-footer text-center text-success py-4">
            <p>Better Health &copy; {year.getFullYear()}</p>
        </div>
    )
}

export default Footer;

