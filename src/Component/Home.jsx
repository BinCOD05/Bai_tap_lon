import { Link } from "react-router-dom"

function Home(){
    return (
        <>
        <h1>Đây là trang chủ</h1>
        <Link to="/list">Danh mục</Link>
        <br />
        <Link to="/list">Chi Tiết</Link>
        </>
    )
}
export default Home ;