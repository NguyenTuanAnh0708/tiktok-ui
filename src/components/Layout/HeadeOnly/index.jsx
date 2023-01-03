import Header from '../components/Header';
function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="Content">{children}</div>
        </>
    );
}

export default HeaderOnly;
