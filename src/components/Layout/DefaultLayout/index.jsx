import Header from '../components/Header';
import SideBars from '../components/SideBars';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <SideBars />
            <div className="Content">{children}</div>
        </>
    );
}

export default DefaultLayout;
